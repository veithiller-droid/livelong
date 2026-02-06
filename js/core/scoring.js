// core/scoring.js
// Berechnungs-Engine für Dr. Livelong
// VERSION 2.0.0 - PENALTY SYSTEM
// 
// PHILOSOPHIE-WECHSEL:
// - ALT: Start bei Baseline (Durchschnitt) + Boni für gutes Verhalten
// - NEU: Start bei Maximum (99 Jahre) - Penalties für schlechtes Verhalten
// 
// KERNPRINZIPIEN:
// 1. Jeder startet mit maximalem Potenzial (Country Maximum)
// 2. Schlechtes Verhalten = Penalty (Abzug)
// 3. Gutes Verhalten = Keine Penalty (0)
// 4. Manifeste Krankheiten = Zusätzliche Penalty
// 5. Age-weighting nur für vergangene Expositionen (z.B. Rauchen)

import { BASELINES, getBaseline, getTotalLifeExpectancy, compareToBaseline, getCountryMaximum } from '../data/baselines.js';
import { FACTORS, getFactorById } from '../data/factors.js';
import { META_QUESTIONS } from '../data/meta_questions.js';
import { questions } from '../data/questions.js';

const SCORING_VERSION = "2.0.0";

/**
 * Main calculation function - Penalty-based system
 * @param {Object} meta - Meta information (age, sex, country, height, weight, etc.)
 * @param {Object} answers - User answers to questions
 * @returns {Object} Complete calculation result
 */
export function calculateLifeExpectancy(meta, answers) {
  const timestamp = new Date().toISOString();

  // Get user age
  const birthYear = meta?.meta_birth_year;
  const age = getCurrentAge(birthYear);

  if (!Number.isFinite(age) || age < 18 || age > 100) {
    throw new Error("Invalid age");
  }

  // Get country and sex
  const country = (typeof meta?.meta_country === 'string' && meta.meta_country.trim())
    ? meta.meta_country.trim().toLowerCase()
    : 'other';

  const sex = (typeof meta?.meta_sex === 'string' && meta.meta_sex.trim())
    ? meta.meta_sex.trim().toLowerCase()
    : 'male';

  // NEW: Get MAXIMUM life expectancy for this country (not baseline!)
  const countryMaximum = getCountryMaximum(country);

  // Keep baseline for comparison
  const baselineRemaining = getBaseline(country, sex, age);
  const baselineTotal = age + baselineRemaining;

  // Calculate all factor penalties
  const factorScores = calculateAllFactors(meta, answers, age);
  
  // Calculate total penalty (all penalties are negative or 0!)
  const totalPenalty = calculateTotalPenalty(factorScores);

  // NEW FORMULA: Maximum - Penalties = Life Expectancy
  const calculatedLE = countryMaximum + totalPenalty; // totalPenalty is negative!

  // Apply safety bounds
  const totalLifeExpectancy = Math.max(
    age + 1,           // Minimum: At least 1 more year
    Math.min(120, calculatedLE)  // Maximum: 120 years (biological limit)
  );

  // Compare to baseline (for "X years above/below average")
  const comparison = compareToBaseline(country, sex, age, totalLifeExpectancy);

  // Calculate confidence
  const confidence = calculateConfidence(meta, answers);

  return {
    version: SCORING_VERSION,
    timestamp,
    age,
    country_maximum: countryMaximum,
    baseline: Math.round(baselineTotal * 10) / 10,
    total_life_expectancy: Math.round(totalLifeExpectancy * 10) / 10,
    total_penalty: Math.round(totalPenalty * 10) / 10,
    years_vs_baseline: Math.round((totalLifeExpectancy - baselineTotal) * 10) / 10,
    percentile: comparison.percentile,
    comparison,
    factors: factorScores,
    interactions: [],  // Empty array for frontend compatibility (interactions removed in v2.0)
    confidence,
    breakdown: {
      behavior_penalties: calculateBehaviorPenalties(factorScores),
      disease_penalties: calculateDiseasePenalties(factorScores),
      total_penalty: Math.round(totalPenalty * 10) / 10
    }
  };
}

/**
 * Get current age from birth year
 */
function getCurrentAge(birthYear) {
  if (!birthYear) return null;
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

/**
 * Calculate all factors (penalty-based)
 */
function calculateAllFactors(meta, answers, age) {
  const scores = {};
  
  for (const [factorId, factor] of Object.entries(FACTORS)) {
    scores[factorId] = calculateFactor(factor, meta, answers, age);
  }
  
  return scores;
}

/**
 * Calculate single factor (penalty-based)
 * Returns score (0-100) and penalty (negative or 0)
 */
function calculateFactor(factor, meta, answers, age) {
  const items = factor.items;
  let totalPenalty = 0;
  let itemCount = 0;
  let answeredCount = 0;
  const details = [];
  
  for (const itemId of items) {
    itemCount++;
    
    // Check if it's a meta question (starts with "meta_")
    if (itemId.startsWith('meta_')) {
      const metaValue = meta[itemId];
      if (metaValue === undefined || metaValue === null) continue;
      
      answeredCount++;
      
      // Calculate penalty from meta question
      const penalty = calculateMetaPenalty(itemId, metaValue, age);
      totalPenalty += penalty;
      
      details.push({
        id: itemId,
        penalty: Math.round(penalty * 10) / 10,
        impact: Math.round(penalty * 10) / 10,  // For frontend compatibility
        answer: metaValue
      });
      continue;
    }
    
    // Regular question from questions.js
    const question = questions.find(q => q.id === itemId);
    if (!question) continue;
    
    const answer = answers[itemId];
    if (answer === undefined || answer === null) continue;
    
    answeredCount++;
    
    // Calculate penalty from question
    const penalty = calculateItemPenalty(question, answer, age);
    totalPenalty += penalty;
    
    details.push({
      id: itemId,
      penalty: Math.round(penalty * 10) / 10,
      impact: Math.round(penalty * 10) / 10,  // For frontend compatibility
      answer
    });
  }
  
  // Apply factor weight (penalties are multiplied by weight)
  const weightedPenalty = totalPenalty * (factor.weight || 1.0);
  
  // Calculate score (0-100) from penalty
  const score = calculateScoreFromPenalty(weightedPenalty, factor.baseline_impact);
  
  return {
    id: factor.id,
    score: Math.round(score),
    penalty: Math.round(weightedPenalty * 10) / 10,
    impact: Math.round(weightedPenalty * 10) / 10,  // For frontend compatibility (same as penalty)
    raw_penalty: Math.round(totalPenalty * 10) / 10,
    weight: factor.weight,
    items_total: itemCount,
    items_answered: answeredCount,
    coverage: Math.round((answeredCount / itemCount) * 100),
    details
  };
}

/**
 * Calculate penalty from a question answer
 * Penalties are NEGATIVE or 0 (never positive except Prevention bonus)
 */
function calculateItemPenalty(question, answer, age) {
  const yearsImpact = question.years_impact || question.years;
  
  if (question.type === 'boolean') {
    // Support both formats
    if (answer === true) {
      return yearsImpact.yes || yearsImpact.true || 0;
    } else {
      return yearsImpact.no || yearsImpact.false || 0;
    }
  }
  
  if (question.type === 'likert') {
    const scale = yearsImpact.scale || {};
    return scale[answer] || 0;
  }
  
  if (question.type === 'select') {
    // New format: years_impact.options
    if (yearsImpact && yearsImpact.options) {
      return yearsImpact.options[answer] || 0;
    }
    
    // Old format: years in option objects
    if (question.options && Array.isArray(question.options)) {
      const option = question.options.find(opt => opt.value === answer);
      return option ? (option.years || 0) : 0;
    }
    
    return 0;
  }
  
  if (question.type === 'multiselect') {
    if (!Array.isArray(answer)) return 0;
    
    // New format: years_impact.options
    if (yearsImpact && yearsImpact.options) {
      let total = 0;
      for (const selected of answer) {
        total += yearsImpact.options[selected] || 0;
      }
      return total;
    }
    
    // Old format: years in option objects
    if (question.options && Array.isArray(question.options)) {
      let total = 0;
      for (const selected of answer) {
        const option = question.options.find(opt => opt.value === selected);
        total += option ? (option.years || 0) : 0;
      }
      return total;
    }
    
    return 0;
  }
  
  if (question.type === 'number') {
    const value = parseFloat(answer);
    if (isNaN(value)) return 0;
    
    if (yearsImpact.curve === 'linear') {
      return calculateLinearPenalty(value, yearsImpact);
    }
    
    if (yearsImpact.curve === 'j_curve') {
      return calculateJCurve(value, yearsImpact);
    }
    
    if (yearsImpact.curve === 'u_curve') {
      return calculateUCurve(value, yearsImpact);
    }
  }
  
  return 0;
}

/**
 * Calculate penalty from meta question
 */
function calculateMetaPenalty(metaId, value, age) {
  // Find the meta question
  let metaQuestion = META_QUESTIONS.find(q => q.id === metaId);
  
  // Try reverse KEY_MAP lookup if not found
  if (!metaQuestion) {
    const reverseMap = {
      'meta_smoking': 'meta_smoking_status',
    };
    const alternateId = reverseMap[metaId];
    if (alternateId) {
      metaQuestion = META_QUESTIONS.find(q => q.id === alternateId);
    }
  }
  
  if (!metaQuestion) return 0;
  
  // Handle different meta question types
  if (metaQuestion.type === 'select') {
    const option = metaQuestion.options?.find(opt => opt.value === value);
    return option ? (option.years || 0) : 0;
  }
  
  if (metaQuestion.type === 'multiselect') {
    if (!Array.isArray(value)) return 0;
    let total = 0;
    for (const selected of value) {
      const option = metaQuestion.options?.find(opt => opt.value === selected);
      total += option ? (option.years || 0) : 0;
    }
    return total;
  }
  
  if (metaQuestion.type === 'number') {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 0;
    
    // Blood pressure systolic
    if (metaId === 'meta_bp_systolic') {
      if (numValue < 120) return 0;       // Optimal
      if (numValue < 130) return -1;      // Elevated
      if (numValue < 140) return -2;      // Stage 1
      if (numValue < 160) return -4;      // Stage 2
      if (numValue < 180) return -6;      // Severe
      return -8;                          // Crisis
    }
    
    // Cholesterol total
    if (metaId === 'meta_cholesterol_total') {
      if (numValue < 200) return 0;       // Optimal
      if (numValue < 240) return -1;      // Borderline
      return -2;                          // High
    }
    
    // HDL cholesterol
    if (metaId === 'meta_cholesterol_hdl') {
      if (numValue >= 60) return 0;       // Optimal
      if (numValue >= 40) return -1;      // Borderline
      return -2;                          // Low
    }
    
    return 0;
  }
  
  return 0;
}

/**
 * Calculate linear penalty
 */
function calculateLinearPenalty(value, params) {
  const min = params.min || 0;
  const max = params.max || 100;
  const minPenalty = params.min_penalty || 0;
  const maxPenalty = params.max_penalty || 0;
  
  if (value <= min) return minPenalty;
  if (value >= max) return maxPenalty;
  
  const ratio = (value - min) / (max - min);
  return minPenalty + ratio * (maxPenalty - minPenalty);
}

/**
 * Calculate J-curve penalty (e.g., alcohol)
 */
function calculateJCurve(value, params) {
  const optimal = params.optimal || 1;
  const zero = params.zero || 0;
  const harmful_start = params.harmful_start || 2;
  const max_harmful = params.max_harmful || 6;
  const max_negative = params.max_negative || -10;
  
  if (value <= zero) return 0;
  
  if (value <= optimal) {
    // Slight benefit zone (rare in new system)
    const ratio = (value - zero) / (optimal - zero);
    return ratio * (params.optimal_benefit || 0);
  }
  
  if (value <= harmful_start) {
    return params.optimal_benefit || 0;
  }
  
  if (value <= max_harmful) {
    const ratio = (value - harmful_start) / (max_harmful - harmful_start);
    return (params.optimal_benefit || 0) * (1 - ratio) + max_negative * ratio;
  }
  
  return max_negative;
}

/**
 * Calculate U-curve penalty (e.g., sleep)
 */
function calculateUCurve(value, params) {
  const optimal_min = params.optimal_min || 7;
  const optimal_max = params.optimal_max || 8;
  const min_value = params.min_value || 4;
  const max_value = params.max_value || 10;
  const max_negative = params.max_negative || -5;
  
  if (value >= optimal_min && value <= optimal_max) {
    return 0; // Optimal = no penalty
  }
  
  if (value < optimal_min) {
    if (value <= min_value) return max_negative;
    const ratio = (optimal_min - value) / (optimal_min - min_value);
    return max_negative * ratio;
  }
  
  if (value > optimal_max) {
    if (value >= max_value) return max_negative;
    const ratio = (value - optimal_max) / (max_value - optimal_max);
    return max_negative * ratio;
  }
  
  return 0;
}

/**
 * Age-Effectiveness Multiplier
 * Younger age = more time for effects to compound = higher effectiveness
 * Used ONLY for Maximum Potential calculation
 */
function getAgeEffectivenessMultiplier(age) {
  if (age < 30) return 1.0;   // 100% - full lifetime
  if (age < 40) return 0.85;  // 85%
  if (age < 50) return 0.65;  // 65%
  if (age < 60) return 0.50;  // 50%
  if (age < 70) return 0.35;  // 35%
  return 0.25;                // 25%
}

/**
 * Accumulated Damage Factor ("Scheisse-gelaufen-Faktor")
 * Statistical probability of prior lifestyle damage
 * Epidemiological data shows people typically reform lifestyle around 50-55
 * Used ONLY for Maximum Potential calculation
 */
function getAccumulatedDamageFactor(age) {
  if (age < 35) return 1.0;   // Young = current status reflects lifetime
  if (age < 45) return 0.9;   // 10% discount (some have reformed)
  if (age < 55) return 0.75;  // 25% discount (lifestyle changes begin)
  if (age < 65) return 0.60;  // 40% discount (majority has "wild years" behind)
  if (age < 75) return 0.50;  // 50% discount
  return 0.40;                // 60% discount (older = more accumulated damage)
}
/**
 * Calculate total penalty from all factors
 */
function calculateTotalPenalty(factorScores) {
  let total = 0;
  
  for (const factor of Object.values(factorScores)) {
    total += factor.penalty;
  }
  
  return total;
}

/**
 * Calculate behavior penalties (from lifestyle choices)
 */
function calculateBehaviorPenalties(factorScores) {
  const behaviorFactors = [
    'lifestyle_smoke',
    'lifestyle_alcohol',
    'fitness',
    'diet',
    'sleep',
    'social',
    'stress',
    'mental',
    'prevention'
  ];
  
  let total = 0;
  for (const factorId of behaviorFactors) {
    if (factorScores[factorId]) {
      total += factorScores[factorId].penalty;
    }
  }
  
  return Math.round(total * 10) / 10;
}

/**
 * Calculate disease penalties (from manifest conditions)
 */
function calculateDiseasePenalties(factorScores) {
  const diseaseFactors = [
    'cardiovascular',
    'metabolic',
    'cancer',
    'pulmonary',
    'renal',
    'liver',
    'cognitive',
    'frailty',
    'polypharmacy',
    'sensory'
  ];
  
  let total = 0;
  for (const factorId of diseaseFactors) {
    if (factorScores[factorId]) {
      total += factorScores[factorId].penalty;
    }
  }
  
  return Math.round(total * 10) / 10;
}

/**
 * Calculate score (0-100) from penalty
 * NEW: Penalties are negative, so we convert them to scores
 * 
 * LOGIC:
 * - Penalty 0 (no problems) = Score 100 (excellent)
 * - Penalty -5 (moderate) = Score 50 (neutral)
 * - Penalty -10+ (severe) = Score 0 (poor)
 */
function calculateScoreFromPenalty(penalty, baselineImpact) {
  // Determine impact range based on factor importance
  let impactRange;
  if (baselineImpact === 'high') {
    impactRange = 15;  // High impact factors: -15 penalty = score 0
  } else if (baselineImpact === 'medium') {
    impactRange = 10;  // Medium impact: -10 penalty = score 0
  } else {
    impactRange = 5;   // Low impact: -5 penalty = score 0
  }
  
  // Convert penalty to score
  // penalty 0 → score 100
  // penalty -impactRange → score 0
  const score = 100 + (penalty / impactRange) * 100;
  
  return Math.max(0, Math.min(100, score));
}

/**
 * Calculate confidence score
 */
function calculateConfidence(meta, answers) {
  const metaRequired = [
    'meta_birth_year',
    'meta_sex',
    'meta_country',
    'meta_height',
    'meta_weight'
  ];
  
  const metaOptional = [
    'meta_bp_systolic',
    'meta_cholesterol_total',
    'meta_cholesterol_hdl'
  ];
  
  let metaRequiredScore = 0;
  for (const key of metaRequired) {
    if (meta[key] !== null && meta[key] !== undefined) {
      metaRequiredScore += 1;
    }
  }
  const metaRequiredPercent = metaRequiredScore / metaRequired.length;
  
  let metaOptionalScore = 0;
  for (const key of metaOptional) {
    if (meta[key] !== null && meta[key] !== undefined) {
      metaOptionalScore += 1;
    }
  }
  const metaOptionalPercent = metaOptionalScore / metaOptional.length;
  
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const answersPercent = Math.min(answeredQuestions / totalQuestions, 1.0);
  
  const confidence = (
    metaRequiredPercent * 0.3 +
    metaOptionalPercent * 0.1 +
    answersPercent * 0.6
  );
  
  return Math.min(Math.round(confidence * 100), 100);
}

/**
 * Get top risk factors (lowest scores)
 */
export function getTopRisks(factorScores, count = 3) {
  return Object.values(factorScores)
    .filter(f => f.score < 50)
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

/**
 * Get top strengths (highest scores)
 */
export function getTopStrengths(factorScores, count = 3) {
  return Object.values(factorScores)
    .filter(f => f.score >= 50)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

/**
 * Get risk level based on life expectancy vs baseline
 */
export function getRiskLevel(totalLifeExpectancy, baseline) {
  const diff = totalLifeExpectancy - baseline;
  
  if (diff >= 5) return 'low';
  if (diff >= 0) return 'moderate';
  if (diff >= -5) return 'high';
  return 'very_high';
}

/**
 * Determine factor level from score
 * NEW: Simplified - no age bonus (score already reflects age context)
 */
export function getFactorLevel(score, penalty) {
  // NEW: Use penalty-based clustering if penalty is provided
  if (penalty !== undefined && penalty !== null) {
    if (penalty === 0) return 'excellent';      // 0: Perfekt
    if (penalty > -2) return 'good';            // -1: Gut
    if (penalty > -5) return 'neutral';         // -2 bis -4: Neutral
    if (penalty > -8) return 'moderate';        // -5 bis -7: Mittel
    return 'poor';                              // -8+: Schlecht
  }
  
  // Fallback: Old score-based logic (deprecated, for compatibility)
  if (score >= 70) return 'excellent';
  if (score >= 60) return 'good';
  if (score >= 50) return 'neutral';
  if (score >= 35) return 'moderate';
  return 'poor';
}



/**
 * Simulate behavior changes
 */
export function simulateChange(meta, answers, changes) {
  const modifiedAnswers = { ...answers };
  const modifiedMeta = { ...meta };
  
  for (const change of changes) {
    if (change.type === 'answer') {
      modifiedAnswers[change.question_id] = change.new_value;
    }
    if (change.type === 'meta') {
      modifiedMeta[change.key] = change.new_value;
    }
  }
  
  const originalResult = calculateLifeExpectancy(meta, answers);
  const modifiedResult = calculateLifeExpectancy(modifiedMeta, modifiedAnswers);
  
  const changesWithImpact = changes.map(change => {
    const tempAnswers = { ...answers };
    const tempMeta = { ...meta };
    
    if (change.type === 'answer') {
      tempAnswers[change.question_id] = change.new_value;
    }
    if (change.type === 'meta') {
      tempMeta[change.key] = change.new_value;
    }
    
    const tempResult = calculateLifeExpectancy(tempMeta, tempAnswers);
    const individualImpact = tempResult.total_life_expectancy - originalResult.total_life_expectancy;
    
    return {
      ...change,
      impact: Math.round(individualImpact * 10) / 10
    };
  });
  
 // Apply age-adjustment to What-If results
const age = getCurrentAge(meta.meta_birth_year);
const ageMultiplier = getAgeEffectivenessMultiplier(age);
const damageDiscount = getAccumulatedDamageFactor(age);

// Calculate theoretical and realistic differences
const theoreticalDifference = modifiedResult.total_life_expectancy - originalResult.total_life_expectancy;
const realisticDifference = theoreticalDifference * ageMultiplier * damageDiscount;

// Apply age adjustment to individual changes
const changesWithRealisticImpact = changesWithImpact.map(change => ({
  ...change,
  theoretical_impact: change.impact,
  realistic_impact: Math.round(change.impact * ageMultiplier * damageDiscount * 10) / 10
}));

return {
  original: originalResult.total_life_expectancy,
  theoretical_modified: modifiedResult.total_life_expectancy,
  realistic_modified: Math.round((originalResult.total_life_expectancy + realisticDifference) * 10) / 10,
  theoretical_difference: Math.round(theoreticalDifference * 10) / 10,
  realistic_difference: Math.round(realisticDifference * 10) / 10,
  age_adjustment_factor: Math.round(ageMultiplier * 100) / 100,
  damage_adjustment_factor: Math.round(damageDiscount * 100) / 100,
  changes: changesWithRealisticImpact
};
}

/**
 * Analyze factor contribution
 */
export function analyzeFactorContribution(factorScores) {
  const total = Object.values(factorScores).reduce((sum, f) => sum + Math.abs(f.penalty), 0);
  
  return Object.entries(factorScores).map(([id, factor]) => ({
    id,
    penalty: factor.penalty,
    contribution: total > 0 ? Math.round((Math.abs(factor.penalty) / total) * 100) : 0
  })).sort((a, b) => Math.abs(b.penalty) - Math.abs(a.penalty));
}

/**
 * Get BMI impact (penalty-based)
 */
export function getBMIImpact(height, weight) {
  if (!height || !weight) return { bmi: null, category: null, penalty: 0 };
  
  const bmi = weight / Math.pow(height / 100, 2);
  
  let category, penalty;
  
  if (bmi < 18.5) {
    category = 'underweight';
    penalty = -3;
  } else if (bmi < 25) {
    category = 'normal';
    penalty = 0;
  } else if (bmi < 27) {
    category = 'slightly_overweight';
    penalty = -2;
  } else if (bmi < 30) {
    category = 'overweight';
    penalty = -4;
  } else if (bmi < 35) {
    category = 'obese_class_1';
    penalty = -6;
  } else if (bmi < 40) {
    category = 'obese_class_2';
    penalty = -8;
  } else {
    category = 'obese_class_3';
    penalty = -10;
  }
  
  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    penalty
  };
}

/**
 * Get blood pressure impact (penalty-based)
 */
export function getBloodPressureImpact(systolic, diastolic, onMedication) {
  if (!systolic || !diastolic) return { category: null, penalty: 0 };
  
  let category, penalty;
  
  if (systolic < 120 && diastolic < 80) {
    category = 'normal';
    penalty = 0;
  } else if (systolic < 130 && diastolic < 80) {
    category = 'elevated';
    penalty = -1;
  } else if (systolic < 140 || diastolic < 90) {
    category = 'stage_1';
    penalty = onMedication ? -2 : -4;
  } else if (systolic < 180 || diastolic < 120) {
    category = 'stage_2';
    penalty = onMedication ? -4 : -8;
  } else {
    category = 'crisis';
    penalty = onMedication ? -6 : -10;
  }
  
  return { category, penalty };
}

/**
 * Validate calculation inputs
 */
export function validateCalculationInputs(meta, answers) {
  const errors = [];
  
  if (!meta.meta_birth_year) {
    errors.push({ field: 'meta_birth_year', message: 'Birth year is required' });
  } else {
    const age = getCurrentAge(meta.meta_birth_year);
    if (age < 18 || age > 100) {
      errors.push({ field: 'meta_birth_year', message: 'Age must be between 18 and 100' });
    }
  }
  
  if (!meta.meta_sex) {
    errors.push({ field: 'meta_sex', message: 'Sex is required' });
  }
  
  if (!meta.meta_country) {
    errors.push({ field: 'meta_country', message: 'Country is required' });
  }
  
  if (!meta.meta_height || meta.meta_height < 100 || meta.meta_height > 250) {
    errors.push({ field: 'meta_height', message: 'Valid height is required (100-250 cm)' });
  }
  
  if (!meta.meta_weight || meta.meta_weight < 30 || meta.meta_weight > 300) {
    errors.push({ field: 'meta_weight', message: 'Valid weight is required (30-300 kg)' });
  }
  
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const minRequired = Math.floor(totalQuestions * 0.75); // 75% minimum
  
  if (answeredCount < minRequired) {
    errors.push({ 
      field: 'answers', 
      message: `Only ${answeredCount}/${totalQuestions} questions answered. Minimum ${minRequired} required.` 
    });
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Get calculation summary
 */
export function getCalculationSummary(calculation) {
  const isAboveAverage = calculation.total_life_expectancy > calculation.baseline;
  const yearsDiff = Math.abs(calculation.total_life_expectancy - calculation.baseline);
  
  return {
    life_expectancy: calculation.total_life_expectancy,
    baseline: calculation.baseline,
    country_maximum: calculation.country_maximum,
    age: calculation.age,
    is_above_average: isAboveAverage,
    years_difference: Math.round(yearsDiff * 10) / 10,
    percentile: calculation.percentile,
    risk_level: getRiskLevel(calculation.total_life_expectancy, calculation.baseline),
    confidence: calculation.confidence,
    top_risks: getTopRisks(calculation.factors, 3),
    top_strengths: getTopStrengths(calculation.factors, 3),
    total_penalty: calculation.total_penalty
  };
}
/**
 * Calculate Maximum Potential
 * Shows theoretical vs. realistic gain if all factors optimized to 100
 * Applies age-effectiveness and accumulated damage adjustments
 */
export function calculateMaximumPotential(meta, answers) {
  // Get current calculation
  const current = calculateLifeExpectancy(meta, answers);
  const age = current.age;
  
  // Create perfect scenario: all factors at score 100
  // We simulate this by setting all answers to optimal values
  const perfectMeta = { ...meta };
  const perfectAnswers = {};
  
  // Set all regular questions to optimal answers
  for (const question of questions) {
    if (question.type === 'boolean') {
      // Set to the answer that gives 0 or positive penalty
      const yearsImpact = question.years_impact || question.years || {};
      perfectAnswers[question.id] = (yearsImpact.yes || 0) >= (yearsImpact.no || 0) ? true : false;
    } else if (question.type === 'select') {
      // Find option with best (least negative) years
      if (question.years_impact?.options) {
        const options = question.years_impact.options;
        const bestOption = Object.entries(options)
          .sort((a, b) => b[1] - a[1])[0];
        perfectAnswers[question.id] = bestOption ? bestOption[0] : null;
      }
    } else if (question.type === 'likert') {
      // Set to 5 (strongly agree) or 1 (strongly disagree) depending on direction
      const scale = question.years_impact?.scale || {};
      perfectAnswers[question.id] = scale['5'] >= (scale['1'] || 0) ? '5' : '1';
    } else if (question.type === 'multiselect') {
      // For multiselect, select only positive options
      perfectAnswers[question.id] = [];
    } else if (question.type === 'number') {
      // Set to optimal value based on curve
      const yearsImpact = question.years_impact || {};
      if (yearsImpact.curve === 'u_curve') {
        perfectAnswers[question.id] = (yearsImpact.optimal_min + yearsImpact.optimal_max) / 2;
      } else {
        perfectAnswers[question.id] = yearsImpact.optimal || yearsImpact.min || 0;
      }
    }
  }
  
  // Set meta values to optimal
  if (perfectMeta.meta_bp_systolic) perfectMeta.meta_bp_systolic = 115;
  if (perfectMeta.meta_cholesterol_total) perfectMeta.meta_cholesterol_total = 180;
  if (perfectMeta.meta_cholesterol_hdl) perfectMeta.meta_cholesterol_hdl = 65;
  
  // Calculate theoretical maximum
  const theoretical = calculateLifeExpectancy(perfectMeta, perfectAnswers);
  const theoreticalGain = theoretical.total_life_expectancy - current.total_life_expectancy;
  
  // Apply age-effectiveness and damage adjustments
  const ageMultiplier = getAgeEffectivenessMultiplier(age);
  const damageDiscount = getAccumulatedDamageFactor(age);
  const realisticGain = theoreticalGain * ageMultiplier * damageDiscount;
  
  // Identify which factors would improve
  const improvements = [];
  for (const [factorId, currentFactor] of Object.entries(current.factors)) {
    const theoreticalFactor = theoretical.factors[factorId];
    if (theoreticalFactor.score > currentFactor.score) {
      const factorGain = (theoreticalFactor.penalty - currentFactor.penalty) * ageMultiplier * damageDiscount;
      improvements.push({
        factor_id: factorId,
        current_score: currentFactor.score,
        potential_score: theoreticalFactor.score,
        theoretical_gain: Math.round((theoreticalFactor.penalty - currentFactor.penalty) * 10) / 10,
        realistic_gain: Math.round(factorGain * 10) / 10
      });
    }
  }
  
  improvements.sort((a, b) => Math.abs(b.realistic_gain) - Math.abs(a.realistic_gain));
  
  return {
    current_age: age,
    current_le: Math.round(current.total_life_expectancy * 10) / 10,
    theoretical_max: Math.round(theoretical.total_life_expectancy * 10) / 10,
    theoretical_gain: Math.round(theoreticalGain * 10) / 10,
    realistic_max: Math.round((current.total_life_expectancy + realisticGain) * 10) / 10,
    realistic_gain: Math.round(realisticGain * 10) / 10,
    age_effectiveness: ageMultiplier,
    damage_discount: damageDiscount,
    improvements: improvements.slice(0, 10)  // Top 10 improvements
  };
}
// ========================================
// EXPORTS
// ========================================

export default {
  calculateLifeExpectancy,
  calculateMaximumPotential,
  getTopRisks,
  getTopStrengths,
  getRiskLevel,
  getFactorLevel,
  simulateChange,
  analyzeFactorContribution,
  getBMIImpact,
  getBloodPressureImpact,
  validateCalculationInputs,
  getCalculationSummary
};
// === TEMP TEST ===
window.testAgeAdjust = function(age) {
  console.log('=== AGE ADJUSTMENT TEST ===');
  console.log('Age:', age);
  console.log('Age-Effectiveness:', getAgeEffectivenessMultiplier(age));
  console.log('Damage-Discount:', getAccumulatedDamageFactor(age));
  console.log('');
  console.log('Examples:');
  console.log('- Theoretischer Gain: 8.3 Jahre');
  console.log('- × Age-Effectiveness:', 8.3 * getAgeEffectivenessMultiplier(age));
  console.log('- × Damage-Discount:', 8.3 * getAgeEffectivenessMultiplier(age) * getAccumulatedDamageFactor(age));
};

console.log('✅ testAgeAdjust(age) verfügbar!');