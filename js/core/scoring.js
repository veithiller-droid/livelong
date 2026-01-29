// core/scoring.js
// Berechnungs-Engine für Dr. Livelong
// Level 2: Weighted Factors + Interactions + Age Adjustment
// Version 1.0.2 - FIXED: Negative impacts NOT age-adjusted (past damage irreversible)

import { BASELINES, getBaseline, getTotalLifeExpectancy, compareToBaseline } from '../data/baselines.js';
import { FACTORS, getFactorById } from '../data/factors.js';
import { INTERACTIONS, findActiveInteractions, calculateInteractionEffect } from '../data/interactions.js';
import { META_QUESTIONS } from '../data/meta_questions.js';
import { questions } from '../data/questions.js';

const SCORING_VERSION = "1.0.2";

export function calculateLifeExpectancy(meta, answers) {
  const timestamp = new Date().toISOString();

  const birthYear = meta?.meta_birth_year;
  const age = getCurrentAge(birthYear);

  if (!Number.isFinite(age) || age < 18 || age > 100) {
    throw new Error("Invalid age");
  }

  const country = (typeof meta?.meta_country === 'string' && meta.meta_country.trim())
    ? meta.meta_country.trim().toLowerCase()
    : 'other';

  const sex = (typeof meta?.meta_sex === 'string' && meta.meta_sex.trim())
    ? meta.meta_sex.trim().toLowerCase()
    : 'male';

  // baselines.js: getBaseline(country, gender, age) => remaining years
  const baselineRemaining = getBaseline(country, sex, age);
  const baselineTotal = age + baselineRemaining;

  const factorScores = calculateAllFactors(meta, answers, age);
  
  // Create age-adjusted version for realistic display
  const adjustedFactorScores = applyAgeAdjustmentToFactors(factorScores, age);
  
  const rawImpact = calculateRawImpact(factorScores, age);

  const interactionEffect = calculateInteractionEffect(factorScores, answers, meta);
  const totalImpact = rawImpact * interactionEffect.multiplier;

  const totalLifeExpectancy = Math.max(
    age + 1,
    Math.min(120, baselineTotal + totalImpact)
  );

  // baselines.js: compareToBaseline(country, gender, currentAge, userLifeExpectancy)
  const comparison = compareToBaseline(country, sex, age, totalLifeExpectancy);

  const confidence = calculateConfidence(meta, answers);

  return {
    version: SCORING_VERSION,
    timestamp,
    age,
    baseline: Math.round(baselineTotal * 10) / 10,
    total_life_expectancy: Math.round(totalLifeExpectancy * 10) / 10,
    years_gained: Math.round(totalImpact * 10) / 10,
    raw_impact: Math.round(rawImpact * 10) / 10,
    interaction_multiplier: Math.round(interactionEffect.multiplier * 100) / 100,
    percentile: comparison.percentile,
    comparison,
    factors: adjustedFactorScores,  // Use age-adjusted for display
    raw_factors: factorScores,      // Keep originals for reference
    interactions: interactionEffect.interactions,
    confidence,
    breakdown: {
      positive_years: calculatePositiveYears(adjustedFactorScores),
      negative_years: calculateNegativeYears(adjustedFactorScores),
      interaction_effect: (interactionEffect.multiplier - 1) * rawImpact
    }
  };
}


function getCurrentAge(birthYear) {
  if (!birthYear) return null;
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function calculateAllFactors(meta, answers, age) {
  const scores = {};
  
  for (const [factorId, factor] of Object.entries(FACTORS)) {
    scores[factorId] = calculateFactor(factor, meta, answers, age);
  }
  
  return scores;
}

function calculateFactor(factor, meta, answers, age) {
  const items = factor.items;
  let totalImpact = 0;
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
      
      // For meta questions, we need to get the impact from meta_questions.js
      // For now, we'll import and use them
      const impact = calculateMetaImpact(itemId, metaValue, age);
      totalImpact += impact;
      
      details.push({
        id: itemId,
        impact: Math.round(impact * 10) / 10,
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
    
    const impact = calculateItemImpact(question, answer, age);
    totalImpact += impact;
    
    details.push({
      id: itemId,
      impact: Math.round(impact * 10) / 10,
      answer
    });
  }
  
  const ageAdjustedImpact = applyAgeAdjustment(totalImpact, age);
  
  const weightedImpact = ageAdjustedImpact * (factor.weight || 1.0);
  
  const score = calculateScore(weightedImpact, factor.baseline_impact);
  
  return {
    id: factor.id,
    score: Math.round(score),
    impact: Math.round(weightedImpact * 10) / 10,
    raw_impact: Math.round(totalImpact * 10) / 10,
    age_adjusted_impact: Math.round(ageAdjustedImpact * 10) / 10,
    weight: factor.weight,
    items_total: itemCount,
    items_answered: answeredCount,
    coverage: Math.round((answeredCount / itemCount) * 100),
    details
  };
}

function calculateItemImpact(question, answer, age) {
  const yearsImpact = question.years_impact || question.years; // Support old format
  
  if (question.type === 'boolean') {
    // Support both new format (yes/no) and old format (true/false)
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
      const min = yearsImpact.min || 0;
      const max = yearsImpact.max || 100;
      const minImpact = yearsImpact.min_impact || 0;
      const maxImpact = yearsImpact.max_impact || 0;
      
      if (value <= min) return minImpact;
      if (value >= max) return maxImpact;
      
      const ratio = (value - min) / (max - min);
      return minImpact + ratio * (maxImpact - minImpact);
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

function calculateMetaImpact(metaId, value, age) {
  // Find the meta question - need to handle KEY_MAP reverse lookup
  // metaId might be "meta_smoking" but question id is "meta_smoking_status"
  let metaQuestion = META_QUESTIONS.find(q => q.id === metaId);
  
  // If not found, try reverse KEY_MAP lookup
  if (!metaQuestion) {
    // Common mappings:
    const reverseMap = {
      'meta_smoking': 'meta_smoking_status',
      // Add more if needed
    };
    const alternateId = reverseMap[metaId];
    if (alternateId) {
      metaQuestion = META_QUESTIONS.find(q => q.id === alternateId);
    }
  }
  
  if (!metaQuestion) return 0;
  
  // Handle different meta question types
  if (metaQuestion.type === 'select') {
    // Find the selected option
    const option = metaQuestion.options?.find(opt => opt.value === value);
    return option ? (option.years || 0) : 0;
  }
  
  if (metaQuestion.type === 'multiselect') {
    // Sum up years from all selected options
    if (!Array.isArray(value)) return 0;
    let total = 0;
    for (const selected of value) {
      const option = metaQuestion.options?.find(opt => opt.value === selected);
      total += option ? (option.years || 0) : 0;
    }
    return total;
  }
  
  if (metaQuestion.type === 'number') {
    // Special handling for specific meta number questions
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 0;
    
    // Blood pressure systolic
    if (metaId === 'meta_bp_systolic') {
      if (numValue < 120) return +1;      // Optimal
      if (numValue < 130) return 0;       // Normal
      if (numValue < 140) return -1;      // Elevated
      if (numValue < 160) return -2;      // Stage 1 hypertension
      if (numValue < 180) return -4;      // Stage 2 hypertension
      return -6;                          // Hypertensive crisis
    }
    
    // Cholesterol total
    if (metaId === 'meta_cholesterol_total') {
      if (numValue < 200) return +0.5;    // Desirable
      if (numValue < 240) return -0.5;    // Borderline high
      return -1.5;                        // High
    }
    
    // HDL cholesterol
    if (metaId === 'meta_cholesterol_hdl') {
      if (numValue >= 60) return +1;      // Optimal (protective)
      if (numValue >= 40) return 0;       // Normal
      return -2;                          // Low (risk factor)
    }
    
    return 0;
  }
  
  return 0;
}

function calculateJCurve(value, params) {
  const optimal = params.optimal || 1;
  const zero = params.zero || 0;
  const harmful_start = params.harmful_start || 2;
  const max_harmful = params.max_harmful || 6;
  const max_negative = params.max_negative || -10;
  
  if (value <= zero) {
    return 0;
  }
  
  if (value <= optimal) {
    const ratio = (value - zero) / (optimal - zero);
    return ratio * (params.optimal_benefit || 2);
  }
  
  if (value <= harmful_start) {
    return params.optimal_benefit || 2;
  }
  
  if (value <= max_harmful) {
    const ratio = (value - harmful_start) / (max_harmful - harmful_start);
    return (params.optimal_benefit || 2) * (1 - ratio) + max_negative * ratio;
  }
  
  return max_negative;
}

function calculateUCurve(value, params) {
  const optimal_min = params.optimal_min || 7;
  const optimal_max = params.optimal_max || 8;
  const min_value = params.min_value || 4;
  const max_value = params.max_value || 10;
  const max_negative = params.max_negative || -5;
  
  if (value >= optimal_min && value <= optimal_max) {
    return params.optimal_benefit || 3;
  }
  
  if (value < optimal_min) {
    if (value <= min_value) {
      return max_negative;
    }
    const ratio = (optimal_min - value) / (optimal_min - min_value);
    return max_negative * ratio;
  }
  
  if (value > optimal_max) {
    if (value >= max_value) {
      return max_negative;
    }
    const ratio = (value - optimal_max) / (max_value - optimal_max);
    return max_negative * ratio;
  }
  
  return 0;
}

function applyAgeAdjustment(impact, age) {
  // Negative impacts = full strength (past damage already done)
  if (impact < 0) {
    return impact;
  }
  
  // Positive impacts = age-adjusted (future gains reduced with age)
  const yearsRemaining = Math.max(0, 85 - age);
  const factor = Math.min(1.0, yearsRemaining / 35);
  
  return impact * factor;
}

function calculateScore(impact, baselineImpact) {
  const baseScore = 50;
  
  let impactRange;
  if (baselineImpact === 'high') {
    impactRange = 15;
  } else if (baselineImpact === 'medium') {
    impactRange = 10;
  } else {
    impactRange = 5;
  }
  
  const impactRatio = impact / impactRange;
  
  const score = baseScore + (impactRatio * 50);
  
  return Math.max(0, Math.min(100, score));
}

function calculateRawImpact(factorScores, age) {
  let totalImpact = 0;
  
  // Age-effectiveness multiplier for POSITIVE impacts only
  // Negative impacts (past damage) remain full strength
  const ageMultiplier = getAgeEffectivenessMultiplier(age);
  
  for (const factor of Object.values(factorScores)) {
    if (factor.impact > 0) {
      // Positive impacts: reduced by age (future gains less effective)
      totalImpact += factor.impact * ageMultiplier;
    } else {
      // Negative impacts: full strength (past damage already done)
      totalImpact += factor.impact;
    }
  }
  
  return totalImpact;
}

/**
 * Age-effectiveness multiplier for positive health interventions
 * Younger age = more time to benefit = higher effectiveness
 */
function getAgeEffectivenessMultiplier(age) {
  if (age < 30) return 1.0;   // 100% - full lifetime to benefit
  if (age < 40) return 0.85;  // 85% - 40+ years to benefit
  if (age < 50) return 0.65;  // 65% - 30+ years to benefit  
  if (age < 60) return 0.50;  // 50% - 20+ years to benefit
  if (age < 70) return 0.35;  // 35% - 10+ years to benefit
  return 0.25;                // 25% - limited time to benefit
}

/**
 * Apply age adjustment to all factor scores for realistic display
 * Only positive impacts are reduced (future gains)
 * Negative impacts remain full (past damage is irreversible)
 * ALSO adjusts detail items so they match the factor total
 */
function applyAgeAdjustmentToFactors(factorScores, age) {
  const ageMultiplier = getAgeEffectivenessMultiplier(age);
  const adjusted = {};
  
  for (const [key, factor] of Object.entries(factorScores)) {
    // Adjust main impact
    const adjustedImpact = factor.impact > 0 
      ? Math.round(factor.impact * ageMultiplier * 10) / 10
      : factor.impact;
    
    // Adjust details too - positive impacts reduced, negative full strength
    const adjustedDetails = factor.details.map(detail => ({
      ...detail,
      impact: detail.impact > 0
        ? Math.round(detail.impact * ageMultiplier * 10) / 10
        : detail.impact
    }));
    
    adjusted[key] = {
      ...factor,
      impact: adjustedImpact,
      details: adjustedDetails
    };
  }
  
  return adjusted;
}

function calculatePositiveYears(factorScores) {
  let positive = 0;
  for (const factor of Object.values(factorScores)) {
    if (factor.impact > 0) {
      positive += factor.impact;
    }
  }
  return Math.round(positive * 10) / 10;
}

function calculateNegativeYears(factorScores) {
  let negative = 0;
  for (const factor of Object.values(factorScores)) {
    if (factor.impact < 0) {
      negative += factor.impact;
    }
  }
  return Math.round(negative * 10) / 10;
}

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
  
  const totalQuestions = 58;  // Updated after question cleanup (was 64)
  const answeredQuestions = Object.keys(answers).length;
  const answersPercent = Math.min(answeredQuestions / totalQuestions, 1.0);  // Cap at 1.0
  
  const confidence = (
    metaRequiredPercent * 0.3 +
    metaOptionalPercent * 0.1 +
    answersPercent * 0.6
  );
  
  return Math.min(Math.round(confidence * 100), 100);  // Cap at 100%
}

export function getTopRisks(factorScores, count = 3) {
  return Object.values(factorScores)
    .filter(f => f.score < 50)
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

export function getTopStrengths(factorScores, count = 3) {
  return Object.values(factorScores)
    .filter(f => f.score >= 50)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

export function getRiskLevel(totalLifeExpectancy, baseline) {
  const diff = totalLifeExpectancy - baseline;
  
  if (diff >= 5) return 'low';
  if (diff >= 0) return 'moderate';
  if (diff >= -5) return 'high';
  return 'very_high';
}

export function getFactorLevel(score) {
  if (score >= 70) return 'excellent';  // 70-100: Strongly protective
  if (score >= 60) return 'good';       // 60-69: Protective
  if (score >= 50) return 'neutral';    // 50-59: Slightly positive, optimization potential
  if (score >= 35) return 'moderate';   // 35-49: Slight risk, action recommended
  return 'poor';                        // 0-34: High risk, immediate action needed
}

export function simulateChange(meta, answers, changes) {
  const modifiedAnswers = { ...answers };
  const modifiedMeta = { ...meta };
  
  // Apply all changes
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
  
  // Calculate individual impact for each change
  const changesWithImpact = changes.map(change => {
    // Create temporary state with ONLY this change
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
  
  return {
    original: originalResult.total_life_expectancy,
    modified: modifiedResult.total_life_expectancy,
    difference: Math.round((modifiedResult.total_life_expectancy - originalResult.total_life_expectancy) * 10) / 10,
    changes: changesWithImpact
  };
}

export function analyzeFactorContribution(factorScores) {
  const total = Object.values(factorScores).reduce((sum, f) => sum + Math.abs(f.impact), 0);
  
  return Object.entries(factorScores).map(([id, factor]) => ({
    id,
    impact: factor.impact,
    contribution: total > 0 ? Math.round((Math.abs(factor.impact) / total) * 100) : 0
  })).sort((a, b) => Math.abs(b.impact) - Math.abs(a.impact));
}

export function getBMIImpact(height, weight) {
  if (!height || !weight) return { bmi: null, category: null, impact: 0 };
  
  const bmi = weight / Math.pow(height / 100, 2);
  
  let category, impact;
  
  if (bmi < 18.5) {
    category = 'underweight';
    impact = -3;
  } else if (bmi < 25) {
    category = 'normal';
    impact = 0;
  } else if (bmi < 27) {
    category = 'slightly_overweight';
    impact = -1;
  } else if (bmi < 30) {
    category = 'overweight';
    impact = -2;
  } else if (bmi < 35) {
    category = 'obese_class_1';
    impact = -4;
  } else if (bmi < 40) {
    category = 'obese_class_2';
    impact = -6;
  } else {
    category = 'obese_class_3';
    impact = -8;
  }
  
  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    impact
  };
}

export function getBloodPressureImpact(systolic, diastolic, onMedication) {
  if (!systolic || !diastolic) return { category: null, impact: 0 };
  
  let category, impact;
  
  if (systolic < 120 && diastolic < 80) {
    category = 'normal';
    impact = 0;
  } else if (systolic < 130 && diastolic < 80) {
    category = 'elevated';
    impact = -1;
  } else if (systolic < 140 || diastolic < 90) {
    category = 'stage_1';
    impact = onMedication ? -2 : -4;
  } else if (systolic < 180 || diastolic < 120) {
    category = 'stage_2';
    impact = onMedication ? -3 : -6;
  } else {
    category = 'crisis';
    impact = onMedication ? -4 : -8;
  }
  
  return { category, impact };
}

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
  if (answeredCount < 50) {
    errors.push({ 
      field: 'answers', 
      message: `Only ${answeredCount}/64 questions answered. Minimum 50 required for reliable calculation.` 
    });
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

export function getCalculationSummary(calculation) {
  const isAboveAverage = calculation.total_life_expectancy > calculation.baseline;
  const yearsDiff = Math.abs(calculation.total_life_expectancy - calculation.baseline);
  
  return {
    life_expectancy: calculation.total_life_expectancy,
    baseline: calculation.baseline,
    age: calculation.age,
    is_above_average: isAboveAverage,
    years_difference: Math.round(yearsDiff * 10) / 10,
    percentile: calculation.percentile,
    risk_level: getRiskLevel(calculation.total_life_expectancy, calculation.baseline),
    confidence: calculation.confidence,
    top_risks: getTopRisks(calculation.factors, 3),
    top_strengths: getTopStrengths(calculation.factors, 3),
    has_negative_interactions: calculation.interactions.some(i => i.type === 'synergy_negative'),
    has_positive_interactions: calculation.interactions.some(i => i.type === 'synergy_positive')
  };
}

export default {
  calculateLifeExpectancy,
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