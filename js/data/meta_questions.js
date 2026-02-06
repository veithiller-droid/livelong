// data/meta_questions.js
// Meta-Fragen für Dr. Livelong - Vorschaltung vor Haupttest
// Version 2.0.0 - French translations added

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
      es: "¿En qué año naciste?",
      fr: "En quelle année es-tu né(e) ?"
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
      es: "Sexo biológico",
      fr: "Sexe biologique"
    },
    explanation: {
      de: "Für die Berechnung der Lebenserwartung benötigen wir das bei Geburt zugewiesene Geschlecht, da es biologische Unterschiede in der Mortalität gibt.",
      en: "For life expectancy calculation we need sex assigned at birth, as there are biological differences in mortality.",
      es: "Para el cálculo de la esperanza de vida necesitamos el sexo asignado al nacer, ya que existen diferencias biológicas en la mortalidad.",
      fr: "Pour le calcul de l'espérance de vie, nous avons besoin du sexe assigné à la naissance, car il existe des différences biologiques dans la mortalité."
    },
    options: [
      {
        value: "male",
        label: {
          de: "Männlich",
          en: "Male",
          es: "Masculino",
          fr: "Masculin"
        }
      },
      {
        value: "female",
        label: {
          de: "Weiblich",
          en: "Female",
          es: "Femenino",
          fr: "Féminin"
        }
      },
      {
        value: "other",
        label: {
          de: "Andere/Divers",
          en: "Other/Diverse",
          es: "Otro/Diverso",
          fr: "Autre/Divers"
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
      es: "¿En qué país vives principalmente?",
      fr: "Dans quel pays vis-tu principalement ?"
    },
    options: [
      {
        value: "de",
        label: {
          de: "Deutschland",
          en: "Germany",
          es: "Alemania",
          fr: "Allemagne"
        }
      },
      {
        value: "es",
        label: {
          de: "Spanien",
          en: "Spain",
          es: "España",
          fr: "Espagne"
        }
      },
      {
        value: "uk",
        label: {
          de: "Vereinigtes Königreich",
          en: "United Kingdom",
          es: "Reino Unido",
          fr: "Royaume-Uni"
        }
      },
      {
        value: "us",
        label: {
          de: "USA",
          en: "USA",
          es: "EE.UU.",
          fr: "États-Unis"
        }
      },
      {
        value: "fr",
        label: {
          de: "Frankreich",
          en: "France",
          es: "Francia",
          fr: "France"
        }
      },
      {
        value: "it",
        label: {
          de: "Italien",
          en: "Italy",
          es: "Italia",
          fr: "Italie"
        }
      },
      {
        value: "other",
        label: {
          de: "Anderes",
          en: "Other",
          es: "Otro",
          fr: "Autre"
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
      es: "¿Cuál es tu altura? (en cm)",
      fr: "Quelle est ta taille ? (en cm)"
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
      es: "¿Cuál es tu peso? (en kg)",
      fr: "Quel est ton poids ? (en kg)"
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
      es: "¿Conoces tu presión arterial sistólica (valor superior)?",
      fr: "Connais-tu ta tension artérielle systolique (valeur supérieure) ?"
    },
    explanation: {
      de: "Falls du ihn kennst, gib ihn ein (z.B. 120). Sonst leer lassen.",
      en: "If you know it, enter it (e.g. 120). Otherwise leave blank.",
      es: "Si lo sabes, introdúcelo (p. ej. 120). Si no, déjalo en blanco.",
      fr: "Si tu le connais, entre-le (par ex. 120). Sinon, laisse vide."
    },
    validation: {
      min: 70,
      max: 220
    },
    placeholder: "120",
    optional_text: {
      de: "Weiß ich nicht",
      en: "Don't know",
      es: "No lo sé",
      fr: "Je ne sais pas"
    }
  },

  {
    id: "meta_bp_medication",
    type: "select",
    required: false,
    group: "vitals",
    conditional: "meta_blood_pressure_systolic",
    text: {
      de: "Nimmst du blutdrucksenkende Medikamente?",
      en: "Are you taking blood pressure medication?",
      es: "¿Tomas medicación para la presión arterial?",
      fr: "Prends-tu des médicaments pour la tension artérielle ?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No",
          fr: "Non"
        }
      },
      {
        value: "yes",
        label: {
          de: "Ja",
          en: "Yes",
          es: "Sí",
          fr: "Oui"
        }
      },
      {
        value: "unknown",
        label: {
          de: "Weiß nicht",
          en: "Don't know",
          es: "No sé",
          fr: "Je ne sais pas"
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
      es: "Colesterol total (mg/dL) – si lo conoces",
      fr: "Cholestérol total (mg/dL) – si connu"
    },
    explanation: {
      de: "Typischer Wert: 150-250 mg/dL. Leer lassen wenn unbekannt.",
      en: "Typical value: 150-250 mg/dL. Leave blank if unknown.",
      es: "Valor típico: 150-250 mg/dL. Dejar en blanco si no se conoce.",
      fr: "Valeur typique : 150-250 mg/dL. Laisser vide si inconnu."
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
      es: "Colesterol HDL (mg/dL) – si lo conoces",
      fr: "Cholestérol HDL (mg/dL) – si connu"
    },
    explanation: {
      de: "Das 'gute' Cholesterin. Typisch: 40-80 mg/dL.",
      en: "The 'good' cholesterol. Typical: 40-80 mg/dL.",
      es: "El colesterol 'bueno'. Típico: 40-80 mg/dL.",
      fr: "Le 'bon' cholestérol. Typique : 40-80 mg/dL."
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
      es: "¿Tienes diabetes?",
      fr: "As-tu du diabète ?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No",
          fr: "Non"
        },
        years: 0
      },
      {
        value: "prediabetes",
        label: {
          de: "Prädiabetes",
          en: "Prediabetes",
          es: "Prediabetes",
          fr: "Prédiabète"
        },
        years: -2
      },
      {
        value: "type2",
        label: {
          de: "Ja, Typ 2",
          en: "Yes, Type 2",
          es: "Sí, Tipo 2",
          fr: "Oui, Type 2"
        },
        years: -5
      },
      {
        value: "type1",
        label: {
          de: "Ja, Typ 1",
          en: "Yes, Type 1",
          es: "Sí, Tipo 1",
          fr: "Oui, Type 1"
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
      es: "¿Has tenido alguno de estos eventos cardiovasculares?",
      fr: "As-tu déjà eu l'un de ces événements cardiovasculaires ?"
    },
    explanation: {
      de: "Mehrfachauswahl möglich. Wähle alle zutreffenden.",
      en: "Multiple selection possible. Select all that apply.",
      es: "Selección múltiple posible. Selecciona todos los que apliquen.",
      fr: "Sélection multiple possible. Sélectionne tous ceux qui s'appliquent."
    },
    options: [
      {
        value: "none",
        label: {
          de: "Nein, nichts davon",
          en: "No, none of these",
          es: "No, ninguno",
          fr: "Non, aucun de ces événements"
        },
        years: 0,
        exclusive: true
      },
      {
        value: "heart_attack",
        label: {
          de: "Herzinfarkt",
          en: "Heart attack",
          es: "Infarto",
          fr: "Crise cardiaque"
        },
        years: -8
      },
      {
        value: "stroke",
        label: {
          de: "Schlaganfall",
          en: "Stroke",
          es: "Derrame cerebral",
          fr: "AVC"
        },
        years: -7
      },
      {
        value: "tia",
        label: {
          de: "TIA (Mini-Schlaganfall)",
          en: "TIA (mini-stroke)",
          es: "AIT (mini-derrame)",
          fr: "AIT (mini-AVC)"
        },
        years: -3
      },
      {
        value: "heart_failure",
        label: {
          de: "Herzinsuffizienz",
          en: "Heart failure",
          es: "Insuficiencia cardíaca",
          fr: "Insuffisance cardiaque"
        },
        years: -10
      },
      {
        value: "afib",
        label: {
          de: "Vorhofflimmern",
          en: "Atrial fibrillation",
          es: "Fibrilación auricular",
          fr: "Fibrillation auriculaire"
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
      es: "¿Tienes una enfermedad pulmonar crónica?",
      fr: "As-tu une maladie pulmonaire chronique ?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No",
          fr: "Non"
        },
        years: 0
      },
      {
        value: "asthma_severe",
        label: {
          de: "Schweres Asthma",
          en: "Severe asthma",
          es: "Asma grave",
          fr: "Asthme sévère"
        },
        years: -3
      },
      {
        value: "copd",
        label: {
          de: "COPD",
          en: "COPD",
          es: "EPOC",
          fr: "BPCO"
        },
        years: -6
      },
      {
        value: "other",
        label: {
          de: "Andere Lungenerkrankung",
          en: "Other lung disease",
          es: "Otra enfermedad pulmonar",
          fr: "Autre maladie pulmonaire"
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
      es: "¿Has tenido cáncer alguna vez?",
      fr: "As-tu déjà eu un cancer ?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein",
          en: "No",
          es: "No",
          fr: "Non"
        },
        years: 0
      },
      {
        value: "cured_5y",
        label: {
          de: "Ja, aber >5 Jahre geheilt",
          en: "Yes, but cured >5 years",
          es: "Sí, pero curado hace >5 años",
          fr: "Oui, mais guéri depuis >5 ans"
        },
        years: -2
      },
      {
        value: "recent",
        label: {
          de: "Ja, in den letzten 5 Jahren",
          en: "Yes, within last 5 years",
          es: "Sí, en los últimos 5 años",
          fr: "Oui, au cours des 5 dernières années"
        },
        years: -8
      },
      {
        value: "active",
        label: {
          de: "Ja, aktuell in Behandlung",
          en: "Yes, currently in treatment",
          es: "Sí, actualmente en tratamiento",
          fr: "Oui, actuellement en traitement"
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
      es: "¿Tienes una enfermedad renal?",
      fr: "As-tu une maladie rénale ?"
    },
    options: [
      {
        value: "no",
        label: {
          de: "Nein/unbekannt",
          en: "No/unknown",
          es: "No/desconocido",
          fr: "Non/inconnu"
        },
        years: 0
      },
      {
        value: "ckd_mild",
        label: {
          de: "Leichte Nierenerkrankung (Stadium 1-2)",
          en: "Mild kidney disease (stage 1-2)",
          es: "Enfermedad renal leve (etapa 1-2)",
          fr: "Maladie rénale légère (stade 1-2)"
        },
        years: -2
      },
      {
        value: "ckd_moderate",
        label: {
          de: "Mittlere Nierenerkrankung (Stadium 3)",
          en: "Moderate kidney disease (stage 3)",
          es: "Enfermedad renal moderada (etapa 3)",
          fr: "Maladie rénale modérée (stade 3)"
        },
        years: -5
      },
      {
        value: "ckd_severe",
        label: {
          de: "Schwere Nierenerkrankung (Stadium 4-5)",
          en: "Severe kidney disease (stage 4-5)",
          es: "Enfermedad renal grave (etapa 4-5)",
          fr: "Maladie rénale sévère (stade 4-5)"
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
      es: "¿Fumas?",
      fr: "Fumes-tu ?"
    },
    options: [
      {
        value: "never",
        label: {
          de: "Nie geraucht",
          en: "Never smoked",
          es: "Nunca fumé",
          fr: "Jamais fumé"
        },
        years: 0
      },
      {
        value: "ex_10y",
        label: {
          de: "Ex-Raucher (>10 Jahre)",
          en: "Ex-smoker (>10 years)",
          es: "Ex-fumador (>10 años)",
          fr: "Ex-fumeur (>10 ans)"
        },
        years: -1
      },
      {
        value: "ex_5y",
        label: {
          de: "Ex-Raucher (5-10 Jahre)",
          en: "Ex-smoker (5-10 years)",
          es: "Ex-fumador (5-10 años)",
          fr: "Ex-fumeur (5-10 ans)"
        },
        years: -3
      },
      {
        value: "ex_recent",
        label: {
          de: "Ex-Raucher (<5 Jahre)",
          en: "Ex-smoker (<5 years)",
          es: "Ex-fumador (<5 años)",
          fr: "Ex-fumeur (<5 ans)"
        },
        years: -5
      },
      {
        value: "current_light",
        label: {
          de: "Ja, Zigaretten <10/Tag",
          en: "Yes, cigarettes <10/day",
          es: "Sí, cigarrillos <10/día",
          fr: "Oui, cigarettes <10/jour"
        },
        years: -7
      },
      {
        value: "current_moderate",
        label: {
          de: "Ja, Zigaretten 10-20/Tag",
          en: "Yes, cigarettes 10-20/day",
          es: "Sí, cigarrillos 10-20/día",
          fr: "Oui, cigarettes 10-20/jour"
        },
        years: -12
      },
      {
        value: "current_heavy",
        label: {
          de: "Ja, Zigaretten >20/Tag",
          en: "Yes, cigarettes >20/day",
          es: "Sí, cigarrillos >20/día",
          fr: "Oui, cigarettes >20/jour"
        },
        years: -18
      },
      {
        value: "iqos_light",
        label: {
          de: "IQOS/Heat-not-burn <10 Sticks/Tag",
          en: "IQOS/Heat-not-burn <10 sticks/day",
          es: "IQOS/Tabaco calentado <10/día",
          fr: "IQOS/Tabac chauffé <10/jour"
        },
        years: -3
      },
      {
        value: "iqos_moderate",
        label: {
          de: "IQOS/Heat-not-burn 10-20 Sticks/Tag",
          en: "IQOS/Heat-not-burn 10-20 sticks/day",
          es: "IQOS/Tabaco calentado 10-20/día",
          fr: "IQOS/Tabac chauffé 10-20/jour"
        },
        years: -5
      },
      {
        value: "iqos_heavy",
        label: {
          de: "IQOS/Heat-not-burn >20 Sticks/Tag",
          en: "IQOS/Heat-not-burn >20 sticks/day",
          es: "IQOS/Tabaco calentado >20/día",
          fr: "IQOS/Tabac chauffé >20/jour"
        },
        years: -8
      },
      {
        value: "vape_light",
        label: {
          de: "E-Zigarette (gelegentlich)",
          en: "E-cigarette (occasional)",
          es: "Cigarrillo electrónico (ocasional)",
          fr: "Cigarette électronique (occasionnel)"
        },
        years: -1
      },
      {
        value: "vape_regular",
        label: {
          de: "E-Zigarette (täglich)",
          en: "E-cigarette (daily)",
          es: "Cigarrillo electrónico (diario)",
          fr: "Cigarette électronique (quotidien)"
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
      es: "¿Cuál es tu estado de movilidad?",
      fr: "Quel est ton état de mobilité ?"
    },
    explanation: {
      de: "Kannst du ohne Hilfsmittel mehrere hundert Meter gehen?",
      en: "Can you walk several hundred meters without aids?",
      es: "¿Puedes caminar varios cientos de metros sin ayudas?",
      fr: "Peux-tu marcher plusieurs centaines de mètres sans aide ?"
    },
    options: [
      {
        value: "full",
        label: {
          de: "Uneingeschränkt mobil",
          en: "Fully mobile",
          es: "Completamente móvil",
          fr: "Pleinement mobile"
        },
        years: 0
      },
      {
        value: "minor_issues",
        label: {
          de: "Leichte Einschränkungen",
          en: "Minor limitations",
          es: "Limitaciones menores",
          fr: "Limitations mineures"
        },
        years: -2
      },
      {
        value: "walking_aid",
        label: {
          de: "Benötige Gehstock/Rollator",
          en: "Need walking stick/walker",
          es: "Necesito bastón/andador",
          fr: "Besoin de canne/déambulateur"
        },
        years: -5
      },
      {
        value: "wheelchair",
        label: {
          de: "Rollstuhl/stark eingeschränkt",
          en: "Wheelchair/severely limited",
          es: "Silla de ruedas/muy limitado",
          fr: "Fauteuil roulant/sévèrement limité"
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
      es: "¿Puedes gestionar las actividades diarias de forma independiente?",
      fr: "Peux-tu gérer les activités quotidiennes de manière indépendante ?"
    },
    explanation: {
      de: "Baden, Anziehen, Einkaufen, Kochen, etc.",
      en: "Bathing, dressing, shopping, cooking, etc.",
      es: "Bañarse, vestirse, hacer compras, cocinar, etc.",
      fr: "Se baigner, s'habiller, faire les courses, cuisiner, etc."
    },
    options: [
      {
        value: "independent",
        label: {
          de: "Vollständig selbstständig",
          en: "Fully independent",
          es: "Completamente independiente",
          fr: "Totalement indépendant"
        },
        years: 0
      },
      {
        value: "minor_help",
        label: {
          de: "Gelegentlich Hilfe nötig",
          en: "Occasional help needed",
          es: "Ayuda ocasional necesaria",
          fr: "Aide occasionnelle nécessaire"
        },
        years: -3
      },
      {
        value: "regular_help",
        label: {
          de: "Regelmäßig Hilfe nötig",
          en: "Regular help needed",
          es: "Ayuda regular necesaria",
          fr: "Aide régulière nécessaire"
        },
        years: -7
      },
      {
        value: "dependent",
        label: {
          de: "Stark pflegebedürftig",
          en: "Highly dependent",
          es: "Altamente dependiente",
          fr: "Très dépendant"
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