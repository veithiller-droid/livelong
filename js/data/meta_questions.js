// data/meta_questions.js
// Meta-Fragen für Dr. Livelong - Vorschaltung vor Haupttest
// Version 1.0.0

export const META_QUESTIONS = [
  // ========================================
  // GRUPPE 1: DEMOGRAPHIE (für Baseline)
  // ========================================
  {
    id: "meta_birthyear",
    type: "number",
    required: true,
    group: "demographics",
    text: {
      de: "In welchem Jahr wurdest du geboren?",
      en: "What year were you born?",
      es: "¿En qué año naciste?"
    },
    validation: {
      min: 1924,  // 100 Jahre alt
      max: 2006   // 18 Jahre alt
    },
    placeholder: "1980"
  },

  {
    id: "meta_gender",
    type: "select",
    required: true,
    group: "demographics",
    text: {
      de: "Biologisches Geschlecht",
      en: "Biological sex",
      es: "Sexo biológico"
    },
    explanation: {
      de: "Für die Berechnung der Lebenserwartung benötigen wir das bei Geburt zugewiesene Geschlecht, da es biologische Unterschiede in der Mortalität gibt.",
      en: "For life expectancy calculation we need sex assigned at birth, as there are biological differences in mortality.",
      es: "Para el cálculo de la esperanza de vida necesitamos el sexo asignado al nacer, ya que existen diferencias biológicas en la mortalidad."
    },
    options: [
      {
        value: "male",
        label: {
          de: "Männlich",
          en: "Male",
          es: "Masculino"
        }
      },
      {
        value: "female",
        label: {
          de: "Weiblich",
          en: "Female",
          es: "Femenino"
        }
      },
      {
        value: "other",
        label: {
          de: "Andere/Divers",
          en: "Other/Diverse",
          es: "Otro/Diverso"
        }
      }
    ]
  },

  {
    id: "meta_country",
    type: "select",
    required: true,
    group: "demographics",
    text: {
      de: "In welchem Land lebst du hauptsächlich?",
      en: "Which country do you primarily live in?",
      es: "¿En qué país vives principalmente?"
    },
    options: [
      {
        value: "de",
        label: {
          de: "Deutschland",
          en: "Germany",
          es: "Alemania"
        }
      },
      {
        value: "es",
        label: {
          de: "Spanien",
          en: "Spain",
          es: "España"
        }
      },
      {
        value: "uk",
        label: {
          de: "Vereinigtes Königreich",
          en: "United Kingdom",
          es: "Reino Unido"
        }
      },
      {
        value: "us",
        label: {
          de: "USA",
          en: "USA",
          es: "EE.UU."
        }
      },
      {
        value: "fr",
        label: {
          de: "Frankreich",
          en: "France",
          es: "Francia"
        }
      },
      {
        value: "it",
        label: {
          de: "Italien",
          en: "Italy",
          es: "Italia"
        }
      },
      {
        value: "other",
        label: {
          de: "Anderes",
          en: "Other",
          es: "Otro"
        }
      }
    ]
  },

  // ========================================
  // GRUPPE 2: KÖRPERMASSE & VITALWERTE
  // ========================================
  {
    id: "meta_height",
    type: "number",
    required: true,
    group: "vitals",
    text: {
      de: "Wie groß bist du? (in cm)",
      en: "What is your height? (in cm)",
      es: "¿Cuál es tu altura? (en cm)"
    },
    validation: {
      min: 120,
      max: 230
    },
    placeholder: "175"
  },

  {
    id: "meta_weight",
    type: "number",
    required: true,
    group: "vitals",
    text: {
      de: "Wie viel wiegst du? (in kg)",
      en: "What is your weight? (in kg)",
      es: "¿Cuál es tu peso? (en kg)"
    },
    validation: {
      min: 30,
      max: 250
    },
    placeholder: "75"
  },

  {
    id: "meta_blood_pressure_systolic",
    type: "number",
    required: false,
    group: "vitals",
    text: {
      de: "Kennst du deinen systolischen Blutdruck (oberer Wert)?",
      en: "Do you know your systolic blood pressure (upper value)?",
      es: "¿Conoces tu presión arterial sistólica (valor superior)?"
    },
    explanation: {
      de: "Falls du ihn kennst, gib ihn ein (z.B. 120). Sonst leer lassen.",
      en: "If you know it, enter it (e.g. 120). Otherwise leave blank.",
      es: "Si lo sabes, introdúcelo (p. ej. 120). Si no, déjalo en blanco."
    },
    validation: {
      min: 70,
      max: 220
    },
    placeholder: "120",
    optional_text: {
      de: "Weiß ich nicht",
      en: "Don't know",
      es: "No lo sé"
    }
  },

  {
    id: "meta_bp_medication",
    type: "select",
    required: false,
    group: "vitals",
    conditional: "meta_blood_pressure_systolic", // nur wenn BP angegeben
    text: {
      de: "Nimmst du blutdrucksenkende Medikamente?",
      en: "Are you taking blood pressure medication?",
      es: "¿Tomas medicación para la presión arterial?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No"
        }
      },
      {
        value: "yes",
        label: {
          de: "Ja",
          en: "Yes",
          es: "Sí"
        }
      },
      {
        value: "unknown",
        label: {
          de: "Weiß nicht",
          en: "Don't know",
          es: "No sé"
        }
      }
    ]
  },

  // ========================================
  // GRUPPE 3: LABORWERTE (optional)
  // ========================================
  {
    id: "meta_cholesterol_total",
    type: "number",
    required: false,
    group: "labs",
    text: {
      de: "Gesamtcholesterin (mg/dL) – falls bekannt",
      en: "Total cholesterol (mg/dL) – if known",
      es: "Colesterol total (mg/dL) – si lo conoces"
    },
    explanation: {
      de: "Typischer Wert: 150-250 mg/dL. Leer lassen wenn unbekannt.",
      en: "Typical value: 150-250 mg/dL. Leave blank if unknown.",
      es: "Valor típico: 150-250 mg/dL. Dejar en blanco si no se conoce."
    },
    validation: {
      min: 100,
      max: 400
    },
    placeholder: "200"
  },

  {
    id: "meta_hdl_cholesterol",
    type: "number",
    required: false,
    group: "labs",
    text: {
      de: "HDL-Cholesterin (mg/dL) – falls bekannt",
      en: "HDL cholesterol (mg/dL) – if known",
      es: "Colesterol HDL (mg/dL) – si lo conoces"
    },
    explanation: {
      de: "Das 'gute' Cholesterin. Typisch: 40-80 mg/dL.",
      en: "The 'good' cholesterol. Typical: 40-80 mg/dL.",
      es: "El colesterol 'bueno'. Típico: 40-80 mg/dL."
    },
    validation: {
      min: 20,
      max: 120
    },
    placeholder: "55"
  },

  // ========================================
  // GRUPPE 4: VORERKRANKUNGEN (kritisch)
  // ========================================
  {
    id: "meta_diabetes",
    type: "select",
    required: true,
    group: "comorbidities",
    text: {
      de: "Hast du Diabetes?",
      en: "Do you have diabetes?",
      es: "¿Tienes diabetes?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No"
        },
        years: 0
      },
      {
        value: "prediabetes",
        label: {
          de: "Prädiabetes",
          en: "Prediabetes",
          es: "Prediabetes"
        },
        years: -2
      },
      {
        value: "type2",
        label: {
          de: "Ja, Typ 2",
          en: "Yes, Type 2",
          es: "Sí, Tipo 2"
        },
        years: -5
      },
      {
        value: "type1",
        label: {
          de: "Ja, Typ 1",
          en: "Yes, Type 1",
          es: "Sí, Tipo 1"
        },
        years: -8
      }
    ]
  },

  {
    id: "meta_cvd_history",
    type: "multiselect",
    required: true,
    group: "comorbidities",
    text: {
      de: "Hattest du bereits eines dieser kardiovaskulären Ereignisse?",
      en: "Have you had any of these cardiovascular events?",
      es: "¿Has tenido alguno de estos eventos cardiovasculares?"
    },
    explanation: {
      de: "Mehrfachauswahl möglich. Wähle alle zutreffenden.",
      en: "Multiple selection possible. Select all that apply.",
      es: "Selección múltiple posible. Selecciona todos los que apliquen."
    },
    options: [
      {
        value: "none",
        label: {
          de: "Nein, nichts davon",
          en: "No, none of these",
          es: "No, ninguno"
        },
        years: 0,
        exclusive: true  // wenn gewählt, deaktiviere andere
      },
      {
        value: "heart_attack",
        label: {
          de: "Herzinfarkt",
          en: "Heart attack",
          es: "Infarto"
        },
        years: -8
      },
      {
        value: "stroke",
        label: {
          de: "Schlaganfall",
          en: "Stroke",
          es: "Derrame cerebral"
        },
        years: -7
      },
      {
        value: "tia",
        label: {
          de: "TIA (Mini-Schlaganfall)",
          en: "TIA (mini-stroke)",
          es: "AIT (mini-derrame)"
        },
        years: -3
      },
      {
        value: "heart_failure",
        label: {
          de: "Herzinsuffizienz",
          en: "Heart failure",
          es: "Insuficiencia cardíaca"
        },
        years: -10
      },
      {
        value: "afib",
        label: {
          de: "Vorhofflimmern",
          en: "Atrial fibrillation",
          es: "Fibrilación auricular"
        },
        years: -3
      }
    ]
  },

  {
    id: "meta_lung_disease",
    type: "select",
    required: true,
    group: "comorbidities",
    text: {
      de: "Hast du eine chronische Lungenerkrankung?",
      en: "Do you have chronic lung disease?",
      es: "¿Tienes una enfermedad pulmonar crónica?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No"
        },
        years: 0
      },
      {
        value: "asthma_severe",
        label: {
          de: "Schweres Asthma",
          en: "Severe asthma",
          es: "Asma grave"
        },
        years: -3
      },
      {
        value: "copd",
        label: {
          de: "COPD",
          en: "COPD",
          es: "EPOC"
        },
        years: -6
      },
      {
        value: "other",
        label: {
          de: "Andere Lungenerkrankung",
          en: "Other lung disease",
          es: "Otra enfermedad pulmonar"
        },
        years: -4
      }
    ]
  },

  {
    id: "meta_cancer",
    type: "select",
    required: true,
    group: "comorbidities",
    text: {
      de: "Hattest du jemals Krebs?",
      en: "Have you ever had cancer?",
      es: "¿Has tenido cáncer alguna vez?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No"
        },
        years: 0
      },
      {
        value: "cured_5y",
        label: {
          de: "Ja, aber >5 Jahre geheilt",
          en: "Yes, but cured >5 years",
          es: "Sí, pero curado hace >5 años"
        },
        years: -2
      },
      {
        value: "recent",
        label: {
          de: "Ja, in den letzten 5 Jahren",
          en: "Yes, within last 5 years",
          es: "Sí, en los últimos 5 años"
        },
        years: -8
      },
      {
        value: "active",
        label: {
          de: "Ja, aktuell in Behandlung",
          en: "Yes, currently in treatment",
          es: "Sí, actualmente en tratamiento"
        },
        years: -12
      }
    ]
  },

  {
    id: "meta_kidney_disease",
    type: "select",
    required: false,
    group: "comorbidities",
    text: {
      de: "Hast du eine Nierenerkrankung?",
      en: "Do you have kidney disease?",
      es: "¿Tienes una enfermedad renal?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein/unbekannt",
          en: "No/unknown",
          es: "No/desconocido"
        },
        years: 0
      },
      {
        value: "ckd_mild",
        label: {
          de: "Leichte Nierenerkrankung (Stadium 1-2)",
          en: "Mild kidney disease (stage 1-2)",
          es: "Enfermedad renal leve (etapa 1-2)"
        },
        years: -2
      },
      {
        value: "ckd_moderate",
        label: {
          de: "Mittlere Nierenerkrankung (Stadium 3)",
          en: "Moderate kidney disease (stage 3)",
          es: "Enfermedad renal moderada (etapa 3)"
        },
        years: -5
      },
      {
        value: "ckd_severe",
        label: {
          de: "Schwere Nierenerkrankung (Stadium 4-5)",
          en: "Severe kidney disease (stage 4-5)",
          es: "Enfermedad renal grave (etapa 4-5)"
        },
        years: -10
      }
    ]
  },

  // ========================================
  // GRUPPE 5: RAUCHEN (kritischster Faktor)
  // ========================================
  {
    id: "meta_smoking_status",
    type: "select",
    required: true,
    group: "lifestyle",
    text: {
      de: "Rauchst du?",
      en: "Do you smoke?",
      es: "¿Fumas?"
    },
    options: [
      {
        value: "never",
        label: {
          de: "Nie geraucht",
          en: "Never smoked",
          es: "Nunca fumé"
        },
        years: 0
      },
      {
        value: "ex_10y",
        label: {
          de: "Ex-Raucher (>10 Jahre)",
          en: "Ex-smoker (>10 years)",
          es: "Ex-fumador (>10 años)"
        },
        years: -1
      },
      {
        value: "ex_5y",
        label: {
          de: "Ex-Raucher (5-10 Jahre)",
          en: "Ex-smoker (5-10 years)",
          es: "Ex-fumador (5-10 años)"
        },
        years: -3
      },
      {
        value: "ex_recent",
        label: {
          de: "Ex-Raucher (<5 Jahre)",
          en: "Ex-smoker (<5 years)",
          es: "Ex-fumador (<5 años)"
        },
        years: -5
      },
      {
        value: "current_light",
        label: {
          de: "Ja, Zigaretten <10/Tag",
          en: "Yes, cigarettes <10/day",
          es: "Sí, cigarrillos <10/día"
        },
        years: -7
      },
      {
        value: "current_moderate",
        label: {
          de: "Ja, Zigaretten 10-20/Tag",
          en: "Yes, cigarettes 10-20/day",
          es: "Sí, cigarrillos 10-20/día"
        },
        years: -12
      },
      {
        value: "current_heavy",
        label: {
          de: "Ja, Zigaretten >20/Tag",
          en: "Yes, cigarettes >20/day",
          es: "Sí, cigarrillos >20/día"
        },
        years: -18
      },
      {
        value: "iqos_light",
        label: {
          de: "IQOS/Heat-not-burn <10 Sticks/Tag",
          en: "IQOS/Heat-not-burn <10 sticks/day",
          es: "IQOS/Tabaco calentado <10/día"
        },
        years: -3
      },
      {
        value: "iqos_moderate",
        label: {
          de: "IQOS/Heat-not-burn 10-20 Sticks/Tag",
          en: "IQOS/Heat-not-burn 10-20 sticks/day",
          es: "IQOS/Tabaco calentado 10-20/día"
        },
        years: -5
      },
      {
        value: "iqos_heavy",
        label: {
          de: "IQOS/Heat-not-burn >20 Sticks/Tag",
          en: "IQOS/Heat-not-burn >20 sticks/day",
          es: "IQOS/Tabaco calentado >20/día"
        },
        years: -8
      },
      {
        value: "vape_light",
        label: {
          de: "E-Zigarette (gelegentlich)",
          en: "E-cigarette (occasional)",
          es: "Cigarrillo electrónico (ocasional)"
        },
        years: -1
      },
      {
        value: "vape_regular",
        label: {
          de: "E-Zigarette (täglich)",
          en: "E-cigarette (daily)",
          es: "Cigarrillo electrónico (diario)"
        },
        years: -3
      }
    ]
  },

  // ========================================
  // GRUPPE 6: FUNKTIONELLER STATUS (wichtig ab 65+)
  // ========================================
  {
    id: "meta_mobility",
    type: "select",
    required: true,
    group: "functional",
    text: {
      de: "Wie ist deine Mobilität?",
      en: "What is your mobility status?",
      es: "¿Cuál es tu estado de movilidad?"
    },
    explanation: {
      de: "Kannst du ohne Hilfsmittel mehrere hundert Meter gehen?",
      en: "Can you walk several hundred meters without aids?",
      es: "¿Puedes caminar varios cientos de metros sin ayudas?"
    },
    options: [
      {
        value: "full",
        label: {
          de: "Uneingeschränkt mobil",
          en: "Fully mobile",
          es: "Completamente móvil"
        },
        years: 0
      },
      {
        value: "minor_issues",
        label: {
          de: "Leichte Einschränkungen",
          en: "Minor limitations",
          es: "Limitaciones menores"
        },
        years: -2
      },
      {
        value: "walking_aid",
        label: {
          de: "Benötige Gehstock/Rollator",
          en: "Need walking stick/walker",
          es: "Necesito bastón/andador"
        },
        years: -5
      },
      {
        value: "wheelchair",
        label: {
          de: "Rollstuhl/stark eingeschränkt",
          en: "Wheelchair/severely limited",
          es: "Silla de ruedas/muy limitado"
        },
        years: -8
      }
    ]
  },

  {
    id: "meta_adl",
    type: "select",
    required: true,
    group: "functional",
    text: {
      de: "Kannst du deinen Alltag selbstständig bewältigen?",
      en: "Can you manage daily activities independently?",
      es: "¿Puedes gestionar las actividades diarias de forma independiente?"
    },
    explanation: {
      de: "Baden, Anziehen, Einkaufen, Kochen, etc.",
      en: "Bathing, dressing, shopping, cooking, etc.",
      es: "Bañarse, vestirse, hacer compras, cocinar, etc."
    },
    options: [
      {
        value: "independent",
        label: {
          de: "Vollständig selbstständig",
          en: "Fully independent",
          es: "Completamente independiente"
        },
        years: 0
      },
      {
        value: "minor_help",
        label: {
          de: "Gelegentlich Hilfe nötig",
          en: "Occasional help needed",
          es: "Ayuda ocasional necesaria"
        },
        years: -3
      },
      {
        value: "regular_help",
        label: {
          de: "Regelmäßig Hilfe nötig",
          en: "Regular help needed",
          es: "Ayuda regular necesaria"
        },
        years: -7
      },
      {
        value: "dependent",
        label: {
          de: "Stark pflegebedürftig",
          en: "Highly dependent",
          es: "Altamente dependiente"
        },
        years: -12
      }
    ]
  }
];

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Berechne BMI aus Meta-Daten
 */
export function calculateBMI(meta) {
  if (!meta.meta_height || !meta.meta_weight) return null;
  const heightM = meta.meta_height / 100;
  return meta.meta_weight / (heightM * heightM);
}

/**
 * Berechne Alter aus Geburtsjahr
 */
export function calculateAge(meta) {
  if (!meta.meta_birth_year) return null;
  const currentYear = new Date().getFullYear();
  return currentYear - meta.meta_birth_year;
}

export function calculateNonHDL(meta) {
  if (!meta.meta_cholesterol_total || !meta.meta_cholesterol_hdl) return null;
  return meta.meta_cholesterol_total - meta.meta_cholesterol_hdl;
}


/**
 * Filtere Meta-Fragen nach Gruppe
 */
export function getMetaQuestionsByGroup(group) {
  return META_QUESTIONS.filter(q => q.group === group);
}

/**
 * Get all required meta questions
 */
export function getRequiredMetaQuestions() {
  return META_QUESTIONS.filter(q => q.required);
}

/**
 * Get all optional meta questions
 */
export function getOptionalMetaQuestions() {
  return META_QUESTIONS.filter(q => !q.required);
}

/**
 * Validiere Meta-Antworten
 */
export function validateMetaAnswers(answers) {
  const errors = [];
  
  for (const question of META_QUESTIONS) {
    if (question.required && !answers[question.id]) {
      errors.push({
        id: question.id,
        message: "Pflichtfeld"
      });
    }
    
    if (question.validation && answers[question.id]) {
      const value = answers[question.id];
      if (value < question.validation.min || value > question.validation.max) {
        errors.push({
          id: question.id,
          message: `Wert muss zwischen ${question.validation.min} und ${question.validation.max} liegen`
        });
      }
    }
  }
  
  return errors;
}

export default META_QUESTIONS;