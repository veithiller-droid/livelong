// data/factors.js
// Faktoren-Definitionen für Dr. Livelong
// 19 detaillierte Faktoren für maximale medizinische Präzision
// Version 1.0.0

/**
 * STRUKTUR:
 * - id: Eindeutige Faktor-ID
 * - label: Bezeichnung (DE/EN/ES)
 * - description: Kurze Erklärung (DE/EN/ES)
 * - items: Array von Fragen-IDs aus questions.js
 * - weight: Gewichtung für Scoring (1.0 = normal, >1 = wichtiger)
 * - baseline_impact: "high" / "medium" / "low"
 * - icon: Emoji für UI (optional)
 * - color: Farbcode für UI (optional)
 */

export const FACTORS = {
  // ========================================
  // PHYSICAL HEALTH CLUSTER
  // ========================================
  
  cardiovascular: {
    id: "cardiovascular",
    
    label: {
      de: "Herz-Kreislauf",
      en: "Cardiovascular",
      es: "Cardiovascular"
    },
    
    description: {
      de: "Deine Herzgesundheit und Gefäßsystem",
      en: "Your heart health and vascular system",
      es: "Tu salud cardíaca y sistema vascular"
    },
    
    items: [
      "meta_cvd_history",       // From meta: CVD events
      "meta_bp_systolic",       // From meta: Blood pressure
      "meta_bp_medication",     // From meta: BP medication
      "health_01",              // General health self-assessment
      "health_16",              // Shortness of breath
      "family_cvd"              // Family history: heart attack/stroke
    ],
    
    weight: 1.5,
    baseline_impact: "high",
    icon: "❤️",
    color: "#e74c3c"
  },

  metabolic: {
    id: "metabolic",
    
    label: {
      de: "Stoffwechsel",
      en: "Metabolic",
      es: "Metabólico"
    },
    
    description: {
      de: "Blutzucker, Gewicht, Cholesterin",
      en: "Blood sugar, weight, cholesterol",
      es: "Azúcar en sangre, peso, colesterol"
    },
    
    items: [
      "meta_diabetes",              // From meta: Diabetes status
      "meta_cholesterol_total",     // From meta: Total cholesterol
      "meta_cholesterol_hdl",       // From meta: HDL cholesterol
      "health_01",                  // General health self-assessment
      "health_14",                  // Unintentional weight loss
      "family_diabetes",            // Family history: diabetes
      "metab_02"                    // Cholesterol screening compliance
    ],
    
    weight: 1.4,
    baseline_impact: "high",
    icon: "🩸",
    color: "#9b59b6"
  },

  pulmonary: {
    id: "pulmonary",
    
    label: {
      de: "Lunge & Atmung",
      en: "Pulmonary",
      es: "Pulmonar"
    },
    
    description: {
      de: "Deine Lungengesundheit und Atemfunktion",
      en: "Your lung health and respiratory function",
      es: "Tu salud pulmonar y función respiratoria"
    },
    
    items: [
      "meta_lung_disease",          // From meta: Lung disease diagnosis
      "pulmonary_02",               // Respiratory symptoms
      "pulmonary_symptom_01",       // Shortness of breath during activities
      "pulmonary_symptom_02"        // Chronic cough
    ],
    
    weight: 1.3,
    baseline_impact: "high",
    icon: "🫁",
    color: "#3498db"
  },

  renal: {
    id: "renal",
    
    label: {
      de: "Nieren",
      en: "Renal",
      es: "Renal"
    },
    
    description: {
      de: "Deine Nierenfunktion",
      en: "Your kidney function",
      es: "Tu función renal"
    },
    
    items: [
      "meta_kidney_disease",    // From meta: Kidney disease diagnosis
      "renal_symptom"           // Edema symptoms
    ],
    
    weight: 1.3,
    baseline_impact: "high",
    icon: "🫘",
    color: "#1abc9c"
  },

  cancer: {
    id: "cancer",
    
    label: {
      de: "Krebs",
      en: "Cancer",
      es: "Cáncer"
    },
    
    description: {
      de: "Krebsanamnese und aktueller Status",
      en: "Cancer history and current status",
      es: "Historial de cáncer y estado actual"
    },
    
    items: [
      "meta_cancer",            // From meta: Cancer diagnosis status
      "family_cancer",          // Family history: cancer types
      "cancer_screening"        // Cancer screening participation
    ],
    
    weight: 1.5,
    baseline_impact: "high",
    icon: "🎗️",
    color: "#e67e22"
  },

  // ========================================
  // LIFESTYLE CLUSTER
  // ========================================

  lifestyle_smoke: {
    id: "lifestyle_smoke",
    
    label: {
      de: "Rauchen",
      en: "Smoking",
      es: "Tabaquismo"
    },
    
    description: {
      de: "Dein Rauchverhalten und Tabakkonsum",
      en: "Your smoking behavior and tobacco use",
      es: "Tu comportamiento de fumar y uso de tabaco"
    },
    
    items: [
      "meta_smoking"  // From meta questions - includes IQOS/Vape options
    ],
    
    weight: 1.6,  // Rauchen ist DER Risikofaktor
    baseline_impact: "high",
    icon: "🚬",
    color: "#95a5a6"
  },

  lifestyle_alcohol: {
    id: "lifestyle_alcohol",
    
    label: {
      de: "Alkohol",
      en: "Alcohol",
      es: "Alcohol"
    },
    
    description: {
      de: "Dein Alkoholkonsum und Trinkverhalten",
      en: "Your alcohol consumption and drinking behavior",
      es: "Tu consumo de alcohol y comportamiento de bebida"
    },
    
    items: [
      "alcohol_01",  // Häufigkeit
      "alcohol_02",  // Menge
      "alcohol_03"   // Binge-Drinking
    ],
    
    weight: 1.2,
    baseline_impact: "medium",
    icon: "🍷",
    color: "#c0392b"
  },

  diet: {
    id: "diet",
    
    label: {
      de: "Ernährung",
      en: "Diet",
      es: "Dieta"
    },
    
    description: {
      de: "Deine Ernährungsgewohnheiten und Essverhalten",
      en: "Your eating habits and dietary patterns",
      es: "Tus hábitos alimenticios y patrones dietéticos"
    },
    
    items: [
      "diet_01",   // Olivenöl
      "diet_02",   // Butter/Schmalz
      "diet_03",   // Gemüse
      "diet_04",   // Obst
      "diet_05",   // Vollkorn
      "diet_06",   // Hülsenfrüchte
      "diet_07",   // Fisch
      "diet_08",   // Nüsse
      "diet_09",   // Verarbeitetes Fleisch
      "diet_10",   // Rotes Fleisch
      "diet_11",   // Zuckergetränke
      "diet_12"    // Ultra-processed
    ],
    
    weight: 1.3,
    baseline_impact: "high",
    icon: "🥗",
    color: "#27ae60"
  },

  fitness: {
    id: "fitness",
    
    label: {
      de: "Bewegung",
      en: "Fitness",
      es: "Actividad física"
    },
    
    description: {
      de: "Deine körperliche Aktivität und Bewegung",
      en: "Your physical activity and exercise",
      es: "Tu actividad física y ejercicio"
    },
    
    items: [
      "fitness_01",  // Bewegung 3x/Woche
      "fitness_02"   // Sitzen >8h
    ],
    
    weight: 1.4,
    baseline_impact: "high",
    icon: "🏃",
    color: "#f39c12"
  },

  sleep: {
    id: "sleep",
    
    label: {
      de: "Schlaf",
      en: "Sleep",
      es: "Sueño"
    },
    
    description: {
      de: "Deine Schlafqualität und -dauer",
      en: "Your sleep quality and duration",
      es: "Tu calidad y duración del sueño"
    },
    
    items: [
      "sleep_01",  // Schlafdauer 7-8h
      "sleep_02"   // Erholsamer Schlaf
    ],
    
    weight: 1.2,
    baseline_impact: "medium",
    icon: "😴",
    color: "#34495e"
  },

  // ========================================
  // MENTAL WELLBEING CLUSTER
  // ========================================

  mental: {
    id: "mental",
    
    label: {
      de: "Psyche",
      en: "Mental Health",
      es: "Salud mental"
    },
    
    description: {
      de: "Deine psychische Gesundheit und emotionales Wohlbefinden",
      en: "Your mental health and emotional wellbeing",
      es: "Tu salud mental y bienestar emocional"
    },
    
    items: [
      "mental_01",  // Depression (PHQ-2)
      "mental_02"   // Angst (GAD-2)
    ],
    
    weight: 1.3,
    baseline_impact: "medium",
    icon: "🧠",
    color: "#8e44ad"
  },

  social: {
    id: "social",
    
    label: {
      de: "Soziales Umfeld",
      en: "Social Connections",
      es: "Conexiones sociales"
    },
    
    description: {
      de: "Deine sozialen Kontakte und Beziehungen",
      en: "Your social contacts and relationships",
      es: "Tus contactos sociales y relaciones"
    },
    
    items: [
      "social_01",  // Einsamkeit
      "social_02",  // Regelmäßiger Kontakt
      "social_03"   // Partnerschaft/Familie
    ],
    
    weight: 1.3,
    baseline_impact: "high",
    icon: "👥",
    color: "#16a085"
  },

  stress: {
    id: "stress",
    
    label: {
      de: "Stress & Erholung",
      en: "Stress & Recovery",
      es: "Estrés y recuperación"
    },
    
    description: {
      de: "Dein Stresslevel und Erholungsmöglichkeiten",
      en: "Your stress level and recovery opportunities",
      es: "Tu nivel de estrés y oportunidades de recuperación"
    },
    
    items: [
      "stress_01",  // Alltag sehr stressig
      "stress_02"   // Zeit für Entspannung
    ],
    
    weight: 1.2,
    baseline_impact: "medium",
    icon: "😰",
    color: "#e74c3c"
  },

  // ========================================
  // FUNCTIONAL STATUS CLUSTER
  // ========================================

  frailty: {
    id: "frailty",
    
    label: {
      de: "Funktioneller Status",
      en: "Functional Status",
      es: "Estado funcional"
    },
    
    description: {
      de: "Deine körperliche Funktionsfähigkeit und Selbstständigkeit im Alltag",
      en: "Your physical functionality and independence in daily life",
      es: "Tu funcionalidad física e independencia en la vida diaria"
    },
    
    items: [
      "health_03",   // Hospital stays
      "health_04",   // Walking 400m
      "health_05",   // Climbing stairs
      "health_06",   // Getting up from chair
      "health_07",   // Carrying weight
      "health_08",   // Bathing/showering
      "health_09",   // Dressing
      "health_10",   // Medication management
      "health_11",   // Shopping
      "health_13",   // Falls (frequency)
      "health_15",   // Exhaustion
      "health_17"    // Pain
    ],
    
    weight: 1.4,
    baseline_impact: "high",
    icon: "🚶",
    color: "#d35400"
  },

  cognitive: {
    id: "cognitive",
    
    label: {
      de: "Kognition",
      en: "Cognitive Function",
      es: "Función cognitiva"
    },
    
    description: {
      de: "Deine Gedächtnisleistung und Konzentrationsfähigkeit",
      en: "Your memory and concentration abilities",
      es: "Tu memoria y capacidades de concentración"
    },
    
    items: [
      "cognitive_01"  // Gedächtnis-/Konzentrationsprobleme
    ],
    
    weight: 1.3,
    baseline_impact: "high",
    icon: "🧩",
    color: "#2c3e50"
  },

  sensory: {
    id: "sensory",
    
    label: {
      de: "Sinne",
      en: "Sensory Function",
      es: "Función sensorial"
    },
    
    description: {
      de: "Dein Seh- und Hörvermögen",
      en: "Your vision and hearing",
      es: "Tu visión y audición"
    },
    
    items: [
      "sensory_01",  // Sehprobleme
      "sensory_02"   // Hörprobleme
    ],
    
    weight: 1.1,
    baseline_impact: "medium",
    icon: "👁️",
    color: "#7f8c8d"
  },

  // ========================================
  // OTHER FACTORS
  // ========================================

  prevention: {
    id: "prevention",
    
    label: {
      de: "Vorsorge",
      en: "Prevention",
      es: "Prevención"
    },
    
    description: {
      de: "Deine Teilnahme an Vorsorgeuntersuchungen und präventiven Maßnahmen",
      en: "Your participation in preventive examinations and measures",
      es: "Tu participación en exámenes preventivos y medidas"
    },
    
    items: [
      "prevention_01",  // Zahnkontrolle
      "prevention_02",  // Zahnprobleme
      "prevention_03"   // Vorsorgeuntersuchungen
    ],
    
    weight: 1.1,
    baseline_impact: "low",
    icon: "🔍",
    color: "#2ecc71"
  },

  polypharmacy: {
    id: "polypharmacy",
    
    label: {
      de: "Medikamente",
      en: "Medications",
      es: "Medicamentos"
    },
    
    description: {
      de: "Deine Medikamenteneinnahme und Polypharmazie",
      en: "Your medication use and polypharmacy",
      es: "Tu uso de medicamentos y polifarmacia"
    },
    
    items: [
      "meds_01"  // 5+ Medikamente
    ],
    
    weight: 1.2,
    baseline_impact: "medium",
    icon: "💊",
    color: "#e67e22"
  },

  general_health: {
    id: "general_health",
    
    label: {
      de: "Allgemeine Gesundheit",
      en: "General Health",
      es: "Salud general"
    },
    
    description: {
      de: "Deine subjektive Gesundheitseinschätzung",
      en: "Your subjective health assessment",
      es: "Tu evaluación subjetiva de salud"
    },
    
    items: [
      "health_01"  // Selbsteinschätzung
    ],
    
    weight: 1.0,
    baseline_impact: "low",
    icon: "⭐",
    color: "#f1c40f"
  }
};

// ========================================
// CLUSTER-DEFINITIONEN (für UI-Gruppierung)
// ========================================

export const CLUSTERS = {
  physical_health: {
    id: "physical_health",
    
    label: {
      de: "Körperliche Gesundheit",
      en: "Physical Health",
      es: "Salud física"
    },
    
    description: {
      de: "Herz, Stoffwechsel, Organe und Krebs",
      en: "Heart, metabolism, organs and cancer",
      es: "Corazón, metabolismo, órganos y cáncer"
    },
    
    factors: ["cardiovascular", "metabolic", "pulmonary", "renal", "cancer"],
    icon: "❤️",
    color: "#e74c3c"
  },

  lifestyle: {
    id: "lifestyle",
    
    label: {
      de: "Lebensstil",
      en: "Lifestyle",
      es: "Estilo de vida"
    },
    
    description: {
      de: "Rauchen, Alkohol, Ernährung, Bewegung, Schlaf",
      en: "Smoking, alcohol, diet, exercise, sleep",
      es: "Tabaco, alcohol, dieta, ejercicio, sueño"
    },
    
    factors: ["lifestyle_smoke", "lifestyle_alcohol", "diet", "fitness", "sleep"],
    icon: "🏃",
    color: "#27ae60"
  },

  mental_wellbeing: {
    id: "mental_wellbeing",
    
    label: {
      de: "Psychisches Wohlbefinden",
      en: "Mental Wellbeing",
      es: "Bienestar mental"
    },
    
    description: {
      de: "Psyche, soziale Kontakte, Stress",
      en: "Mental health, social connections, stress",
      es: "Salud mental, conexiones sociales, estrés"
    },
    
    factors: ["mental", "social", "stress"],
    icon: "🧠",
    color: "#8e44ad"
  },

  functional_status: {
    id: "functional_status",
    
    label: {
      de: "Funktionsfähigkeit",
      en: "Functional Ability",
      es: "Capacidad funcional"
    },
    
    description: {
      de: "Alltagsfunktionen, Kognition, Sinne",
      en: "Daily functions, cognition, senses",
      es: "Funciones diarias, cognición, sentidos"
    },
    
    factors: ["frailty", "cognitive", "sensory"],
    icon: "🚶",
    color: "#d35400"
  },

  other: {
    id: "other",
    
    label: {
      de: "Weitere Faktoren",
      en: "Other Factors",
      es: "Otros factores"
    },
    
    description: {
      de: "Vorsorge, Medikamente, Allgemeinzustand",
      en: "Prevention, medications, general condition",
      es: "Prevención, medicamentos, estado general"
    },
    
    factors: ["prevention", "polypharmacy", "general_health"],
    icon: "🔍",
    color: "#95a5a6"
  }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Hole Faktor-Definition nach ID
 */
export function getFactorById(id) {
  return FACTORS[id];
}

/**
 * Hole alle Faktoren eines Clusters
 */
export function getFactorsByCluster(clusterId) {
  const cluster = CLUSTERS[clusterId];
  if (!cluster) return [];
  
  return cluster.factors.map(id => FACTORS[id]);
}

/**
 * Finde Cluster für einen Faktor
 */
export function getClusterForFactor(factorId) {
  for (const [clusterId, cluster] of Object.entries(CLUSTERS)) {
    if (cluster.factors.includes(factorId)) {
      return { id: clusterId, ...cluster };
    }
  }
  return null;
}

/**
 * Hole alle Faktor-IDs
 */
export function getAllFactorIds() {
  return Object.keys(FACTORS);
}

/**
 * Hole alle Cluster-IDs
 */
export function getAllClusterIds() {
  return Object.keys(CLUSTERS);
}

/**
 * Zähle Items pro Faktor
 */
export function countItemsPerFactor() {
  const counts = {};
  for (const [id, factor] of Object.entries(FACTORS)) {
    counts[id] = factor.items.length;
  }
  return counts;
}

/**
 * Validiere Faktor-ID
 */
export function isValidFactor(factorId) {
  return FACTORS.hasOwnProperty(factorId);
}

/**
 * Validiere Cluster-ID
 */
export function isValidCluster(clusterId) {
  return CLUSTERS.hasOwnProperty(clusterId);
}

/**
 * Hole Faktoren nach Wichtigkeit (weight) sortiert
 */
export function getFactorsByImportance() {
  return Object.entries(FACTORS)
    .sort((a, b) => b[1].weight - a[1].weight)
    .map(([id, factor]) => ({ id, ...factor }));
}

/**
 * Hole High-Impact Faktoren
 */
export function getHighImpactFactors() {
  return Object.entries(FACTORS)
    .filter(([_, factor]) => factor.baseline_impact === "high")
    .map(([id, factor]) => ({ id, ...factor }));
}

// ========================================
// EXPORT
// ========================================
export default FACTORS;