// core/state.js
// State Management für Dr. Livelong
// Verwaltet alle User-Daten, Antworten und Berechnungen
// Version 1.0.0

const STATE_VERSION = "1.0.0";
const STORAGE_KEY = "dr_livelong_state";

export const STATE = {
  version: STATE_VERSION,
  
  meta: {
    meta_birth_year: null,
    meta_sex: null,
    meta_country: null,
    meta_height: null,
    meta_weight: null,
    meta_bp_systolic: null,
    meta_bp_diastolic: null,
    meta_bp_medication: null,
    meta_cholesterol_total: null,
    meta_cholesterol_hdl: null,
    meta_diabetes: null,
    meta_cvd_history: [],
    meta_lung_disease: null,
    meta_cancer: null,
    meta_kidney_disease: null,
    meta_smoking: null,
    meta_mobility: null,
    meta_adl: null
  },
  
  answers: {},
  
  calculation: {
    timestamp: null,
    baseline: null,
    total_life_expectancy: null,
    percentile: null,
    factors: {},
    interactions: [],
    recommendations: [],
    confidence: null
  },
  
  payment: {
    paid: false,
    transaction_id: null,
    timestamp: null
  },
  
  progress: {
    meta_completed: false,
    test_completed: false,
    current_question: 0,
    last_saved: null
  }
};

export function initializeState() {
  const saved = loadState();
  if (saved && saved.version === STATE_VERSION) {
    Object.assign(STATE, saved);
    return true;
  }
  return false;
}

export function saveState() {
  STATE.progress.last_saved = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
    return true;
  } catch (e) {
    console.error("Failed to save state:", e);
    return false;
  }
}

export function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    
    const parsed = JSON.parse(saved);
    
    if (parsed.version !== STATE_VERSION) {
      console.warn("State version mismatch, resetting");
      return null;
    }
    
    return parsed;
  } catch (e) {
    console.error("Failed to load state:", e);
    return null;
  }
}

function getInitialState() {
  return {
    version: STATE_VERSION,
    
    meta: {
      meta_birth_year: null,
      meta_sex: null,
      meta_country: null,
      meta_height: null,
      meta_weight: null,
      meta_bp_systolic: null,
      meta_bp_diastolic: null,
      meta_bp_medication: null,
      meta_cholesterol_total: null,
      meta_cholesterol_hdl: null,
      meta_diabetes: null,
      meta_cvd_history: [],
      meta_lung_disease: null,
      meta_cancer: null,
      meta_kidney_disease: null,
      meta_smoking: null,
      meta_mobility: null,
      meta_adl: null
    },
    
    answers: {},
    
    calculation: {
      timestamp: null,
      baseline: null,
      total_life_expectancy: null,
      percentile: null,
      factors: {},
      interactions: [],
      recommendations: [],
      confidence: null
    },
    
    payment: {
      paid: false,
      transaction_id: null,
      timestamp: null
    },
    
    progress: {
      meta_completed: false,
      test_completed: false,
      current_question: 0,
      last_saved: null
    }
  };
}

export function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(STATE, getInitialState());
    return true;
  } catch (e) {
    console.error("Failed to clear state:", e);
    return false;
  }
}

export function setMetaAnswer(key, value) {
  STATE.meta[key] = value;
  // Note: Call saveState() manually after updates if needed
}

export function getMetaAnswer(key) {
  return STATE.meta[key];
}

export function getAllMetaAnswers() {
  return { ...STATE.meta };
}

export function setAnswer(questionId, value) {
  STATE.answers[questionId] = value;
  // Note: Call saveState() manually after updates if needed
}

export function getAnswer(questionId) {
  return STATE.answers[questionId];
}

export function getAllAnswers() {
  return { ...STATE.answers };
}

export function setCalculation(calculation) {
  STATE.calculation = {
    ...calculation,
    timestamp: new Date().toISOString()
  };
  saveState();
}

export function getCalculation() {
  const c = STATE.calculation;
  if (!c || !c.timestamp) return null;
  return c;
}


export function setPaymentStatus(paid, transactionId = null) {
  STATE.payment = {
    paid,
    transaction_id: transactionId,
    timestamp: new Date().toISOString()
  };
  saveState();
}

export function isPaid() {
  return STATE.payment.paid === true;
}

export function setProgress(key, value) {
  STATE.progress[key] = value;
  saveState();
}

export function getProgress(key) {
  return STATE.progress[key];
}

export function isMetaCompleted() {
  return STATE.progress.meta_completed === true;
}

export function isTestCompleted() {
  return STATE.progress.test_completed === true;
}

export function getCurrentAge() {
  if (!STATE.meta.meta_birth_year) return null;
  const currentYear = new Date().getFullYear();
  return currentYear - STATE.meta.meta_birth_year;
}

export function getBMI() {
  const height = STATE.meta.meta_height;
  const weight = STATE.meta.meta_weight;
  
  if (!height || !weight) return null;
  
  return weight / Math.pow(height / 100, 2);
}

export function getCompletionPercentage() {
  const metaWeight = 0.2;
  const answersWeight = 0.8;
  
  const metaKeys = Object.keys(STATE.meta).filter(k => !k.startsWith('meta_bp_') && k !== 'meta_cholesterol_total' && k !== 'meta_cholesterol_hdl');
  const metaCompleted = metaKeys.filter(k => STATE.meta[k] !== null && STATE.meta[k] !== undefined).length;
  const metaProgress = metaCompleted / metaKeys.length;
  
  const totalQuestions = 64;
  const answersCompleted = Object.keys(STATE.answers).length;
  const answersProgress = Math.min(answersCompleted / totalQuestions, 1);
  
  return Math.round((metaProgress * metaWeight + answersProgress * answersWeight) * 100);
}

export function validateMetaData() {
  const required = [
    'meta_birth_year',
    'meta_sex',
    'meta_country',
    'meta_height',
    'meta_weight'
  ];
  
  const missing = required.filter(key => {
    const value = STATE.meta[key];
    return value === null || value === undefined || value === '';
  });
  
  return {
    valid: missing.length === 0,
    missing
  };
}

export function validateAnswers() {
  const totalQuestions = 64;
  const answered = Object.keys(STATE.answers).length;
  
  return {
    valid: answered >= totalQuestions,
    completed: answered,
    total: totalQuestions,
    missing: totalQuestions - answered
  };
}

export function exportState() {
  return JSON.stringify(STATE, null, 2);
}

export function importState(jsonString) {
  try {
    const imported = JSON.parse(jsonString);
    
    if (imported.version !== STATE_VERSION) {
      throw new Error("Version mismatch");
    }
    
    Object.assign(STATE, imported);
    saveState();
    return true;
  } catch (e) {
    console.error("Failed to import state:", e);
    return false;
  }
}

export function getStateSnapshot() {
  return {
    version: STATE.version,
    age: getCurrentAge(),
    bmi: getBMI(),
    completion: getCompletionPercentage(),
    meta_completed: isMetaCompleted(),
    test_completed: isTestCompleted(),
    has_calculation: STATE.calculation.timestamp !== null,
    is_paid: isPaid(),
    last_saved: STATE.progress.last_saved
  };
}

export function resetToMeta() {
  STATE.answers = {};

  STATE.calculation = {
    timestamp: null,
    baseline: null,
    total_life_expectancy: null,
    percentile: null,
    factors: {},
    interactions: [],
    recommendations: [],
    confidence: null
  };

  STATE.progress.test_completed = false;
  STATE.progress.current_question = 0;

  saveState();
}


export function resetToTest() {
  STATE.calculation = {
    timestamp: null,
    baseline: null,
    total_life_expectancy: null,
    percentile: null,
    factors: {},
    interactions: [],
    recommendations: [],
    confidence: null
  };
  saveState();
}


initializeState();

export default STATE;
