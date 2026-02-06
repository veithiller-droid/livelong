// data/questions.js
// Alle Haupttest-Fragen für Dr. Livelong
// VERSION 2.0.0 - PENALTY SYSTEM
// 
// WICHTIGE ÄNDERUNG:
// - Alte Version: Bonus-System (gutes Verhalten = +Jahre)
// - Neue Version: Penalty-System (schlechtes Verhalten = -Jahre)
// - Start: 99 Jahre Maximum (bzw. Country Maximum)
// - Gutes Verhalten = 0 (keine Penalty)
// - Schlechtes Verhalten = -Jahre (Penalty)
//
// Medizinisch fundiert, alltagssprachlich kommuniziert

/**
 * STRUKTUR:
 * - id: Eindeutige ID (z.B. "health_01")
 * - factor: Zugehöriger Faktor (siehe factors.js)
 * - type: Fragetyp ("likert", "boolean", "select", "multiselect")
 * - text: Fragetext (DE/EN/ES/FR)
 * - hint: Optional - Erklärung/Hilfetext
 * - options: Antwortoptionen (für select/multiselect)
 * - years_impact: Penalty in Jahren (negativ = Penalty, 0 = keine Penalty)
 * - years: Alternative Schreibweise für years_impact
 */

export const questions = [
  
  // ========================================
  // GRUPPE 1: ALLGEMEINER GESUNDHEITSZUSTAND
  // ========================================
  
  {
    id: "health_01",
    factor: "general_health",
    type: "likert",
    scale: 5,
    text: {
      de: "Ich würde meinen aktuellen Gesundheitszustand insgesamt als sehr gut einstufen.",
      en: "I would rate my current overall health as very good.",
      es: "Calificaría mi estado general de salud actual como muy bueno.",
      fr: "Je qualifierais mon état de santé général actuel comme très bon."
    },
    years_impact: {
      scale: {
        1: -4,  // Stimme gar nicht zu - sehr schlecht
        2: -3,  // Stimme nicht zu
        3: -2,   // Neutral
        4: -1,  // Stimme zu
        5: 0   // Stimme voll zu - ausgezeichnet
      }
    }
  },

  // ========================================
  // FRAILTY (Funktioneller Status)
  // ========================================

  {
    id: "health_03",
    factor: "frailty",
    type: "select",
    text: {
      de: "Ich war in den letzten 12 Monaten zwei- oder mehrmals über Nacht im Krankenhaus.",
      en: "I had two or more overnight hospital stays in the last 12 months.",
      es: "Tuve dos o más hospitalizaciones durante la noche en los últimos 12 meses.",
      fr: "J'ai eu deux hospitalisations ou plus durant la nuit au cours des 12 derniers mois."
    },
    options: [
      {
        value: "no_hospital",
        label: {
          de: "War gar nicht im Krankenhaus",
          en: "No hospital stays",
          es: "Ninguna hospitalización",
          fr: "Aucune hospitalisation"
        },
        years: 0
      },
      {
        value: "once",
        label: {
          de: "Einmal",
          en: "Once",
          es: "Una vez",
          fr: "Une fois"
        },
        years: -2
      },
      {
        value: "multiple",
        label: {
          de: "Zwei- oder mehrmals",
          en: "Two or more times",
          es: "Dos o más veces",
          fr: "Deux fois ou plus"
        },
        years: -5
      }
    ]
  },

  {
    id: "health_04",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, ohne Hilfe etwa 400 m zu gehen.",
      en: "I have difficulty walking about 400 meters without help.",
      es: "Tengo dificultad para caminar unos 400 metros sin ayuda.",
      fr: "J'ai des difficultés à marcher environ 400 mètres sans aide."
    },
    years: {
      true: -4,
      false: 0
    }
  },

  {
    id: "health_05",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, eine Treppe mit 10-12 Stufen ohne Pause hochzugehen.",
      en: "I have difficulty climbing stairs with 10-12 steps without stopping.",
      es: "Tengo dificultad para subir escaleras de 10-12 escalones sin parar.",
      fr: "J'ai des difficultés à monter un escalier de 10-12 marches sans m'arrêter."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  {
    id: "health_06",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, aus einem Stuhl aufzustehen, ohne mich mit den Armen abzustützen.",
      en: "I have difficulty getting up from a chair without using my arms for support.",
      es: "Tengo dificultad para levantarme de una silla sin usar los brazos para apoyarme.",
      fr: "J'ai des difficultés à me lever d'une chaise sans utiliser mes bras pour m'appuyer."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  {
    id: "health_07",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, eine Last von ca. 5-7 kg über 50 m zu tragen (z.B. Einkaufstaschen).",
      en: "I have difficulty carrying a load of about 5-7 kg for 50 m (e.g., shopping bags).",
      es: "Tengo dificultad para llevar una carga de unos 5-7 kg durante 50 m (p. ej., bolsas de compra).",
      fr: "J'ai des difficultés à porter une charge d'environ 5-7 kg sur 50 m (par ex., sacs de courses)."
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "health_08",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, mich alleine zu baden oder zu duschen.",
      en: "I have difficulty bathing or showering by myself.",
      es: "Tengo dificultad para bañarme o ducharme solo/a.",
      fr: "J'ai des difficultés à me baigner ou me doucher seul(e)."
    },
    years: {
      true: -6,
      false: 0
    }
  },

  {
    id: "health_09",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, mich alleine an- oder auszuziehen.",
      en: "I have difficulty dressing or undressing by myself.",
      es: "Tengo dificultad para vestirme o desvestirme solo/a.",
      fr: "J'ai des difficultés à m'habiller ou me déshabiller seul(e)."
    },
    years: {
      true: -6,
      false: 0
    }
  },

  {
    id: "health_10",
    factor: "frailty",
    type: "select",
    text: {
      de: "Ich habe Schwierigkeiten, meine Medikamente korrekt und pünktlich zu organisieren.",
      en: "I have difficulty organizing my medications correctly and on time.",
      es: "Tengo dificultad para organizar mis medicamentos correctamente y a tiempo.",
      fr: "J'ai des difficultés à organiser mes médicaments correctement et à temps."
    },
    options: [
      {
        value: "no_meds",
        label: {
          de: "Nehme keine Medikamente",
          en: "Don't take medications",
          es: "No tomo medicamentos",
          fr: "Je ne prends pas de médicaments"
        },
        years: 0
      },
      {
        value: "no_difficulty",
        label: {
          de: "Nein, keine Schwierigkeiten",
          en: "No difficulty",
          es: "Sin dificultad",
          fr: "Aucune difficulté"
        },
        years: 0
      },
      {
        value: "yes_difficulty",
        label: {
          de: "Ja, habe Schwierigkeiten",
          en: "Yes, have difficulty",
          es: "Sí, tengo dificultad",
          fr: "Oui, j'ai des difficultés"
        },
        years: -4
      }
    ]
  },

  {
    id: "health_11",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe Schwierigkeiten, Einkaufen/Erledigungen alleine zu schaffen.",
      en: "I have difficulty doing shopping/errands by myself.",
      es: "Tengo dificultad para hacer compras/mandados solo/a.",
      fr: "J'ai des difficultés à faire les courses/commissions seul(e)."
    },
    years: {
      true: -5,
      false: 0
    }
  },

  {
    id: "health_13",
    factor: "frailty",
    type: "select",
    text: {
      de: "Ich bin in den letzten 12 Monaten mehr als einmal gestürzt.",
      en: "I have fallen more than once in the last 12 months.",
      es: "Me he caído más de una vez en los últimos 12 meses.",
      fr: "Je suis tombé(e) plus d'une fois au cours des 12 derniers mois."
    },
    options: [
      {
        value: "no_falls",
        label: {
          de: "Bin gar nicht gestürzt",
          en: "No falls",
          es: "Sin caídas",
          fr: "Aucune chute"
        },
        years: 0
      },
      {
        value: "once",
        label: {
          de: "Einmal gestürzt",
          en: "Fell once",
          es: "Una caída",
          fr: "Une chute"
        },
        years: -3
      },
      {
        value: "multiple",
        label: {
          de: "Mehrmals gestürzt",
          en: "Multiple falls",
          es: "Múltiples caídas",
          fr: "Plusieurs chutes"
        },
        years: -6
      }
    ]
  },

  {
    id: "health_14",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe in den letzten 6 Monaten ungewollt deutlich abgenommen (mehr als 5 kg).",
      en: "I have unintentionally lost significant weight in the last 6 months (more than 5 kg).",
      es: "He perdido peso significativo sin querer en los últimos 6 meses (más de 5 kg).",
      fr: "J'ai perdu du poids significatif involontairement au cours des 6 derniers mois (plus de 5 kg)."
    },
    years: {
      true: -4,
      false: 0
    }
  },

  {
    id: "health_15",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich fühle mich häufig ungewöhnlich erschöpft, selbst bei kleinen Alltagsaufgaben.",
      en: "I often feel unusually exhausted, even with small daily tasks.",
      es: "A menudo me siento inusualmente agotado/a, incluso con pequeñas tareas diarias.",
      fr: "Je me sens souvent inhabituellement épuisé(e), même pour de petites tâches quotidiennes."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  {
    id: "health_17",
    factor: "frailty",
    type: "boolean",
    text: {
      de: "Ich habe häufig Schmerzen, die meinen Alltag deutlich einschränken.",
      en: "I often have pain that significantly limits my daily activities.",
      es: "A menudo tengo dolor que limita significativamente mis actividades diarias.",
      fr: "J'ai souvent des douleurs qui limitent significativement mes activités quotidiennes."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  // ========================================
  // BEWEGUNG & SEDENTÄR
  // ========================================

  {
    id: "fitness_01",
    factor: "fitness",
    type: "boolean",
    text: {
      de: "Ich bewege mich mindestens 3× pro Woche so, dass Puls/Atmung klar ansteigen.",
      en: "I exercise at least 3 times per week so that my pulse/breathing clearly increases.",
      es: "Hago ejercicio al menos 3 veces por semana de modo que mi pulso/respiración aumenten claramente.",
      fr: "Je fais de l'exercice au moins 3 fois par semaine de sorte que mon pouls/respiration augmentent clairement."
    },
    years: {
      true: 0,     // Sport machen = keine Penalty
      false: -5    // Kein Sport = -5 Jahre Penalty
    }
  },

  {
    id: "fitness_02",
    factor: "fitness",
    type: "boolean",
    text: {
      de: "Ich sitze oder liege an den meisten Tagen insgesamt mehr als 8 Stunden (außer Schlaf).",
      en: "On most days, I sit or lie down for more than 8 hours (excluding sleep).",
      es: "La mayoría de los días, me siento o me acuesto durante más de 8 horas (excluyendo el sueño).",
      fr: "La plupart des jours, je suis assis(e) ou couché(e) pendant plus de 8 heures (sommeil exclu)."
    },
    years: {
      true: -2,    // Sedentär = -2 Jahre Penalty
      false: 0     // Nicht sedentär = keine Penalty
    }
  },

  // ========================================
  // SCHLAF
  // ========================================

  {
    id: "sleep_01",
    factor: "sleep",
    type: "boolean",
    text: {
      de: "Ich schlafe meistens 7-8 Stunden pro Nacht.",
      en: "I usually sleep 7-8 hours per night.",
      es: "Normalmente duermo 7-8 horas por noche.",
      fr: "Je dors généralement 7-8 heures par nuit."
    },
    years: {
      true: 0,     // Optimal = keine Penalty
      false: -3    // Nicht optimal = -3 Jahre Penalty
    }
  },

  {
    id: "sleep_02",
    factor: "sleep",
    type: "boolean",
    text: {
      de: "Mein Schlaf ist an den meisten Nächten erholsam.",
      en: "My sleep is restful on most nights.",
      es: "Mi sueño es reparador la mayoría de las noches.",
      fr: "Mon sommeil est réparateur la plupart des nuits."
    },
    years: {
      true: 0,     // Erholsam = keine Penalty
      false: -2    // Nicht erholsam = -2 Jahre Penalty
    }
  },

  // ========================================
  // ALKOHOL
  // ========================================

  {
    id: "alcohol_01",
    factor: "lifestyle_alcohol",
    type: "select",
    text: {
      de: "Wie oft trinkst du Alkohol?",
      en: "How often do you drink alcohol?",
      es: "¿Con qué frecuencia bebes alcohol?",
      fr: "À quelle fréquence buvez-vous de l'alcool ?"
    },
    options: [
      {
        value: "never",
        label: {
          de: "Nie oder fast nie",
          en: "Never or almost never",
          es: "Nunca o casi nunca",
          fr: "Jamais ou presque jamais"
        },
        years: 0
      },
      {
        value: "monthly",
        label: {
          de: "1-2× pro Monat",
          en: "1-2 times per month",
          es: "1-2 veces al mes",
          fr: "1-2 fois par mois"
        },
        years: 0
      },
      {
        value: "weekly",
        label: {
          de: "1-2× pro Woche",
          en: "1-2 times per week",
          es: "1-2 veces por semana",
          fr: "1-2 fois par semaine"
        },
        years: -1
      },
      {
        value: "frequent",
        label: {
          de: "3-4× pro Woche",
          en: "3-4 times per week",
          es: "3-4 veces por semana",
          fr: "3-4 fois par semaine"
        },
        years: -2
      },
      {
        value: "daily",
        label: {
          de: "5× oder öfter pro Woche",
          en: "5 or more times per week",
          es: "5 o más veces por semana",
          fr: "5 fois ou plus par semaine"
        },
        years: -3
      }
    ]
  },

  {
    id: "alcohol_02",
    factor: "lifestyle_alcohol",
    type: "select",
    text: {
      de: "Wenn du Alkohol trinkst, wie viel trinkst du typischerweise pro Anlass?",
      en: "When you drink alcohol, how much do you typically drink per occasion?",
      es: "Cuando bebes alcohol, ¿cuánto bebes típicamente por ocasión?",
      fr: "Lorsque vous buvez de l'alcool, combien buvez-vous généralement par occasion ?"
    },
    options: [
      {
        value: "none",
        label: {
          de: "Trinke keinen Alkohol",
          en: "Don't drink alcohol",
          es: "No bebo alcohol",
          fr: "Je ne bois pas d'alcool"
        },
        years: 0
      },
      {
        value: "one",
        label: {
          de: "1 Getränk (1 Bier/1 Glas Wein/1 Schnaps)",
          en: "1 drink (1 beer/1 glass of wine/1 shot)",
          es: "1 bebida (1 cerveza/1 copa de vino/1 trago)",
          fr: "1 verre (1 bière/1 verre de vin/1 shot)"
        },
        years: 0
      },
      {
        value: "two_three",
        label: {
          de: "2-3 Getränke",
          en: "2-3 drinks",
          es: "2-3 bebidas",
          fr: "2-3 verres"
        },
        years: -1
      },
      {
        value: "four_five",
        label: {
          de: "4-5 Getränke",
          en: "4-5 drinks",
          es: "4-5 bebidas",
          fr: "4-5 verres"
        },
        years: -3
      },
      {
        value: "six_plus",
        label: {
          de: "6+ Getränke",
          en: "6+ drinks",
          es: "6+ bebidas",
          fr: "6+ verres"
        },
        years: -5
      }
    ]
  },

  {
    id: "alcohol_03",
    factor: "lifestyle_alcohol",
    type: "select",
    text: {
      de: "Ich hatte in den letzten 12 Monaten mindestens einmal 5 oder mehr Getränke an einem Tag.",
      en: "I had 5 or more drinks on one occasion at least once in the last 12 months.",
      es: "Tomé 5 o más bebidas en una ocasión al menos una vez en los últimos 12 meses.",
      fr: "J'ai bu 5 verres ou plus en une occasion au moins une fois au cours des 12 derniers mois."
    },
    options: [
      {
        value: "no_alcohol",
        label: {
          de: "Trinke keinen Alkohol",
          en: "Don't drink alcohol",
          es: "No bebo alcohol",
          fr: "Je ne bois pas d'alcool"
        },
        years: 0
      },
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
        value: "yes",
        label: {
          de: "Ja",
          en: "Yes",
          es: "Sí",
          fr: "Oui"
        },
        years: -3  // Binge Drinking
      }
    ]
  },

  // ========================================
  // CARDIOVASCULAR
  // ========================================

  {
    id: "health_16",
    factor: "cardiovascular",
    type: "boolean",
    text: {
      de: "Ich bekomme bei leichter Anstrengung (z.B. zügiges Gehen) Luftnot.",
      en: "I experience shortness of breath with light exertion (e.g., brisk walking).",
      es: "Experimento falta de aire con esfuerzo ligero (p. ej., caminar rápido).",
      fr: "J'éprouve un essoufflement lors d'efforts légers (par ex., marche rapide)."
    },
    years: {
      true: -4,
      false: 0
    }
  },

  {
    id: "meds_02",
    factor: "cardiovascular",
    type: "boolean",
    text: {
      de: "Ich nehme Medikamente gegen Bluthochdruck.",
      en: "I take medication for high blood pressure.",
      es: "Tomo medicamentos para la presión arterial alta.",
      fr: "Je prends des médicaments pour l'hypertension artérielle."
    },
    years: {
      true: 0,   // Neutral - zeigt nur Kontrolle an
      false: 0
    }
  },

  // ========================================
  // PULMONARY
  // ========================================

  {
    id: "pulmonary_02",
    factor: "pulmonary",
    type: "boolean",
    text: {
      de: "Ich habe chronische Atemwegsbeschwerden, die mich im Alltag einschränken.",
      en: "I have chronic respiratory problems that limit my daily activities.",
      es: "Tengo problemas respiratorios crónicos que limitan mis actividades diarias.",
      fr: "J'ai des problèmes respiratoires chroniques qui limitent mes activités quotidiennes."
    },
    years: {
      true: -4,
      false: 0
    }
  },

  {
    id: "pulmonary_symptom_01",
    factor: "pulmonary",
    type: "boolean",
    text: {
      de: "Bist du bei alltäglichen Aktivitäten (Treppen steigen, schnelles Gehen) kurzatmig?",
      en: "Do you get short of breath during daily activities (climbing stairs, brisk walking)?",
      es: "¿Te falta el aire durante actividades diarias (subir escaleras, caminar rápido)?",
      fr: "Êtes-vous essoufflé(e) lors d'activités quotidiennes (monter les escaliers, marche rapide) ?"
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "pulmonary_symptom_02",
    factor: "pulmonary",
    type: "boolean",
    text: {
      de: "Hustest du regelmäßig (länger als 3 Monate pro Jahr)?",
      en: "Do you cough regularly (longer than 3 months per year)?",
      es: "¿Toses regularmente (más de 3 meses al año)?",
      fr: "Toussez-vous régulièrement (plus de 3 mois par an) ?"
    },
    years: {
      true: -2,
      false: 0
    }
  },

  // ========================================
  // METABOLIC
  // ========================================

  {
    id: "metab_02",
    factor: "metabolic",
    type: "select",
    text: {
      de: "Bei mir wurde erhöhtes Cholesterin diagnostiziert.",
      en: "I have been diagnosed with high cholesterol.",
      es: "Me han diagnosticado colesterol alto.",
      fr: "On m'a diagnostiqué un cholestérol élevé."
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
        value: "unknown",
        label: {
          de: "Weiß nicht",
          en: "Don't know",
          es: "No sé",
          fr: "Je ne sais pas"
        },
        years: -1
      },
      {
        value: "yes",
        label: {
          de: "Ja",
          en: "Yes",
          es: "Sí",
          fr: "Oui"
        },
        years: -2
      }
    ]
  },

  // ========================================
  // POLYPHARMACY (MEDIKAMENTE)
  // ========================================

  {
    id: "meds_03",
    factor: "polypharmacy",
    type: "select",
    text: {
      de: "Wie viele verschreibungspflichtige Medikamente nimmst du täglich ein?",
      en: "How many prescription medications do you take daily?",
      es: "¿Cuántos medicamentos recetados tomas diariamente?",
      fr: "Combien de médicaments sur ordonnance prenez-vous quotidiennement ?"
    },
    hint: {
      de: "Zähle nur regelmäßige Dauermedikamente, keine gelegentlichen Schmerzmittel.",
      en: "Count only regular long-term medications, not occasional painkillers.",
      es: "Cuenta solo medicamentos regulares a largo plazo, no analgésicos ocasionales.",
      fr: "Comptez uniquement les médicaments réguliers à long terme, pas les analgésiques occasionnels."
    },
    years_impact: {
      options: {
        "none": 0,      // Keine Medikamente = keine Penalty
        "1-2": -1,      // 1-2 Medikamente = leichte Penalty
        "3-4": -2,      // 3-4 Medikamente = moderate Penalty
        "5-7": -4,      // 5-7 Medikamente = hohe Penalty
        "8+": -5        // 8+ Medikamente = sehr hohe Penalty
      }
    },
    options: [
      {
        value: "none",
        label: {
          de: "Keine",
          en: "None",
          es: "Ninguno",
          fr: "Aucun"
        }
      },
      {
        value: "1-2",
        label: {
          de: "1-2 Medikamente",
          en: "1-2 medications",
          es: "1-2 medicamentos",
          fr: "1-2 médicaments"
        }
      },
      {
        value: "3-4",
        label: {
          de: "3-4 Medikamente",
          en: "3-4 medications",
          es: "3-4 medicamentos",
          fr: "3-4 médicaments"
        }
      },
      {
        value: "5-7",
        label: {
          de: "5-7 Medikamente",
          en: "5-7 medications",
          es: "5-7 medicamentos",
          fr: "5-7 médicaments"
        }
      },
      {
        value: "8+",
        label: {
          de: "8 oder mehr Medikamente",
          en: "8 or more medications",
          es: "8 o más medicamentos",
          fr: "8 médicaments ou plus"
        }
      }
    ]
  },

  {
    id: "meds_04",
    factor: "polypharmacy",
    type: "multiselect",
    text: {
      de: "Welche dieser Medikamenten-Klassen nimmst du regelmäßig?",
      en: "Which of these medication classes do you take regularly?",
      es: "¿Cuáles de estas clases de medicamentos tomas regularmente?",
      fr: "Quelles classes de médicaments prenez-vous régulièrement ?"
    },
    hint: {
      de: "Mehrfachauswahl möglich. Diese Information hilft uns, deine Situation besser einzuschätzen.",
      en: "Multiple selection possible. This information helps us better assess your situation.",
      es: "Selección múltiple posible. Esta información nos ayuda a evaluar mejor tu situación.",
      fr: "Sélection multiple possible. Cette information nous aide à mieux évaluer votre situation."
    },
    years_impact: {
      options: {
        "blood_pressure": 0,
        "cholesterol": 0,
        "diabetes": 0,
        "thyroid": 0,
        "blood_thinner": 0,  // Geändert von 0.5 zu 0
        "none": 0
      }
    },
    options: [
      {
        value: "blood_pressure",
        label: {
          de: "Blutdrucksenker (ACE-Hemmer, Betablocker, etc.)",
          en: "Blood pressure medication (ACE inhibitors, beta blockers, etc.)",
          es: "Medicamentos presión arterial (inhibidores ECA, betabloqueantes, etc.)",
          fr: "Médicaments pour la tension (inhibiteurs de l'ECA, bêta-bloquants, etc.)"
        }
      },
      {
        value: "cholesterol",
        label: {
          de: "Cholesterinsenker (Statine)",
          en: "Cholesterol medication (Statins)",
          es: "Medicamentos colesterol (Estatinas)",
          fr: "Médicaments pour le cholestérol (Statines)"
        }
      },
      {
        value: "diabetes",
        label: {
          de: "Diabetes-Medikamente (Metformin, Insulin, etc.)",
          en: "Diabetes medication (Metformin, Insulin, etc.)",
          es: "Medicamentos diabetes (Metformina, Insulina, etc.)",
          fr: "Médicaments pour le diabète (Metformine, Insuline, etc.)"
        }
      },
      {
        value: "thyroid",
        label: {
          de: "Schilddrüsen-Medikamente",
          en: "Thyroid medication",
          es: "Medicamentos tiroides",
          fr: "Médicaments pour la thyroïde"
        }
      },
      {
        value: "blood_thinner",
        label: {
          de: "Blutverdünner (Aspirin, Marcumar, etc.)",
          en: "Blood thinners (Aspirin, Warfarin, etc.)",
          es: "Anticoagulantes (Aspirina, Warfarina, etc.)",
          fr: "Anticoagulants (Aspirine, Warfarine, etc.)"
        }
      },
      {
        value: "none",
        label: {
          de: "Keine dieser Klassen",
          en: "None of these classes",
          es: "Ninguna de estas clases",
          fr: "Aucune de ces classes"
        }
      }
    ]
  },

  {
    id: "meds_05",
    factor: "polypharmacy",
    type: "multiselect",
    text: {
      de: "Nimmst du eines dieser Medikamente REGELMÄSSIG (mindestens 3x pro Woche)?",
      en: "Do you take any of these medications REGULARLY (at least 3x per week)?",
      es: "¿Tomas alguno de estos medicamentos REGULARMENTE (al menos 3 veces por semana)?",
      fr: "Prenez-vous l'un de ces médicaments RÉGULIÈREMENT (au moins 3 fois par semaine) ?"
    },
    hint: {
      de: "Diese Medikamente können bei Langzeiteinnahme problematisch sein.",
      en: "These medications can be problematic with long-term use.",
      es: "Estos medicamentos pueden ser problemáticos con uso prolongado.",
      fr: "Ces médicaments peuvent être problématiques en cas d'utilisation prolongée."
    },
    years_impact: {
      options: {
        "sleep_meds": -3,
        "benzos": -3,
        "opioids": -4,
        "anticholinergic": -2,
        "ppi_longterm": -1,
        "none": 0
      }
    },
    options: [
      {
        value: "sleep_meds",
        label: {
          de: "Schlafmittel (Benzodiazepine, Z-Drugs wie Zolpidem)",
          en: "Sleep medication (Benzodiazepines, Z-drugs like Zolpidem)",
          es: "Medicamentos para dormir (Benzodiazepinas, Z-drugs como Zolpidem)",
          fr: "Somnifères (Benzodiazépines, Z-drugs comme Zolpidem)"
        }
      },
      {
        value: "benzos",
        label: {
          de: "Beruhigungsmittel / Angstlöser (Tavor, Valium, etc.)",
          en: "Tranquilizers / Anti-anxiety (Ativan, Valium, etc.)",
          es: "Tranquilizantes / Ansiolíticos (Ativan, Valium, etc.)",
          fr: "Tranquillisants / Anxiolytiques (Ativan, Valium, etc.)"
        }
      },
      {
        value: "opioids",
        label: {
          de: "Starke Schmerzmittel (Opioide wie Tramadol, Oxycodon)",
          en: "Strong painkillers (Opioids like Tramadol, Oxycodone)",
          es: "Analgésicos fuertes (Opioides como Tramadol, Oxicodona)",
          fr: "Analgésiques puissants (Opioïdes comme Tramadol, Oxycodone)"
        }
      },
      {
        value: "anticholinergic",
        label: {
          de: "Blasenmedikamente oder ältere Antihistaminika (z.B. gegen Allergien/Reiseübelkeit)",
          en: "Bladder medications or older antihistamines (e.g., for allergies/motion sickness)",
          es: "Medicamentos vejiga o antihistamínicos antiguos (p.ej., para alergias/mareo)",
          fr: "Médicaments pour la vessie ou antihistaminiques anciens (par ex., pour les allergies/mal des transports)"
        }
      },
      {
        value: "ppi_longterm",
        label: {
          de: "Magenschutz (PPI wie Omeprazol) seit über 1 Jahr",
          en: "Stomach protection (PPI like Omeprazole) for over 1 year",
          es: "Protección estómago (IBP como Omeprazol) por más de 1 año",
          fr: "Protection gastrique (IPP comme Oméprazole) depuis plus d'1 an"
        }
      },
      {
        value: "none",
        label: {
          de: "Keine dieser Medikamente",
          en: "None of these medications",
          es: "Ninguno de estos medicamentos",
          fr: "Aucun de ces médicaments"
        }
      }
    ]
  },

  // ========================================
  // KOGNITION, SINNE & PSYCHE
  // ========================================

  {
    id: "cognitive_01",
    factor: "cognitive",
    type: "boolean",
    text: {
      de: "Ich habe merkliche Gedächtnis- oder Konzentrationsprobleme, die den Alltag beeinträchtigen.",
      en: "I have noticeable memory or concentration problems that affect daily life.",
      es: "Tengo problemas notables de memoria o concentración que afectan la vida diaria.",
      fr: "J'ai des problèmes notables de mémoire ou de concentration qui affectent la vie quotidienne."
    },
    years: {
      true: -5,
      false: 0
    }
  },

  {
    id: "sensory_01",
    factor: "sensory",
    type: "boolean",
    text: {
      de: "Ich habe Sehprobleme, die auch mit Brille/Linsen meinen Alltag einschränken.",
      en: "I have vision problems that limit my daily activities even with glasses/contacts.",
      es: "Tengo problemas de visión que limitan mis actividades diarias incluso con gafas/lentes.",
      fr: "J'ai des problèmes de vision qui limitent mes activités quotidiennes même avec des lunettes/lentilles."
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "sensory_02",
    factor: "sensory",
    type: "boolean",
    text: {
      de: "Ich habe Hörprobleme, die auch mit Hilfsmitteln meinen Alltag einschränken.",
      en: "I have hearing problems that limit my daily activities even with hearing aids.",
      es: "Tengo problemas de audición que limitan mis actividades diarias incluso con audífonos.",
      fr: "J'ai des problèmes d'audition qui limitent mes activités quotidiennes même avec des appareils auditifs."
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "mental_01",
    factor: "mental",
    type: "boolean",
    text: {
      de: "Ich hatte in den letzten 2 Wochen an den meisten Tagen gedrückte Stimmung oder Interessenverlust.",
      en: "I had depressed mood or loss of interest on most days in the last 2 weeks.",
      es: "Tuve estado de ánimo deprimido o pérdida de interés la mayoría de los días en las últimas 2 semanas.",
      fr: "J'ai eu une humeur dépressive ou une perte d'intérêt la plupart des jours au cours des 2 dernières semaines."
    },
    years: {
      true: -6,    // Unbehandelte Depression
      false: 0
    }
  },

  {
    id: "mental_02",
    factor: "mental",
    type: "boolean",
    text: {
      de: "Ich hatte in den letzten 2 Wochen an den meisten Tagen starke Ängste oder Sorgen.",
      en: "I had severe anxiety or worries on most days in the last 2 weeks.",
      es: "Tuve ansiedad severa o preocupaciones la mayoría de los días en las últimas 2 semanas.",
      fr: "J'ai eu une anxiété sévère ou des inquiétudes la plupart des jours au cours des 2 dernières semaines."
    },
    years: {
      true: -5,    // Unbehandelte Angststörung
      false: 0
    }
  },

  // ========================================
  // ERNÄHRUNG
  // ========================================

  {
    id: "diet_01",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Mein Hauptfett zum Kochen/Anbraten ist Olivenöl, Rapsöl oder ein anderes pflanzliches Öl.",
      en: "My main cooking fat is olive oil, rapeseed oil, or another vegetable oil.",
      es: "Mi grasa principal para cocinar es aceite de oliva, aceite de colza u otro aceite vegetal.",
      fr: "Ma principale matière grasse pour cuisiner est l'huile d'olive, l'huile de colza ou une autre huile végétale."
    },
    years: {
      true: 0,     // Pflanzliches Öl = keine Penalty
      false: -1    // Andere Fette = leichte Penalty
    }
  },

  {
    id: "diet_02",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich verwende häufig Butter oder Schweineschmalz als Hauptfett (Kochen/Braten/Aufstrich).",
      en: "I often use butter or lard as my main fat (cooking/frying/spread).",
      es: "A menudo uso mantequilla o manteca como grasa principal (cocinar/freír/untar).",
      fr: "J'utilise souvent du beurre ou du saindoux comme matière grasse principale (cuisine/friture/tartine)."
    },
    years: {
      true: -1,    // Tierische Fette = Penalty
      false: 0
    }
  },

  {
    id: "diet_03",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse an den meisten Tagen mindestens 2 Portionen Gemüse.",
      en: "I eat at least 2 servings of vegetables on most days.",
      es: "Como al menos 2 porciones de verduras la mayoría de los días.",
      fr: "Je mange au moins 2 portions de légumes la plupart des jours."
    },
    years: {
      true: 0,     // Viel Gemüse = keine Penalty
      false: -2    // Wenig Gemüse = Penalty
    }
  },

  {
    id: "diet_04",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse an den meisten Tagen mindestens 1 Portion Obst.",
      en: "I eat at least 1 serving of fruit on most days.",
      es: "Como al menos 1 porción de fruta la mayoría de los días.",
      fr: "Je mange au moins 1 portion de fruits la plupart des jours."
    },
    years: {
      true: 0,     // Viel Obst = keine Penalty
      false: -1    // Wenig Obst = leichte Penalty
    }
  },

  {
    id: "diet_05",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse überwiegend Vollkorn statt Weißmehl (Brot, Pasta, Reis).",
      en: "I primarily eat whole grains instead of white flour (bread, pasta, rice).",
      es: "Como principalmente cereales integrales en lugar de harina blanca (pan, pasta, arroz).",
      fr: "Je mange principalement des céréales complètes au lieu de farine blanche (pain, pâtes, riz)."
    },
    years: {
      true: 0,     // Vollkorn = keine Penalty
      false: -1    // Weißmehl = leichte Penalty
    }
  },

  {
    id: "diet_06",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 2× pro Woche Hülsenfrüchte (Linsen, Bohnen, Kichererbsen).",
      en: "I eat legumes (lentils, beans, chickpeas) at least 2 times per week.",
      es: "Como legumbres (lentejas, frijoles, garbanzos) al menos 2 veces por semana.",
      fr: "Je mange des légumineuses (lentilles, haricots, pois chiches) au moins 2 fois par semaine."
    },
    years: {
      true: 0,     // Hülsenfrüchte = keine Penalty
      false: -1    // Keine Hülsenfrüchte = leichte Penalty
    }
  },

  {
    id: "diet_07",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 2× pro Woche Fisch (inkl. fettreicher Fisch wie Lachs, Makrele).",
      en: "I eat fish (including fatty fish like salmon, mackerel) at least 2 times per week.",
      es: "Como pescado (incluido pescado graso como salmón, caballa) al menos 2 veces por semana.",
      fr: "Je mange du poisson (y compris du poisson gras comme le saumon, le maquereau) au moins 2 fois par semaine."
    },
    years: {
      true: 0,     // Fisch = keine Penalty
      false: -1    // Kein Fisch = leichte Penalty
    }
  },

  {
    id: "diet_08",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse an den meisten Tagen eine Handvoll Nüsse/Samen (ca. 30g).",
      en: "I eat a handful of nuts/seeds (approx. 30g) on most days.",
      es: "Como un puñado de nueces/semillas (aprox. 30g) la mayoría de los días.",
      fr: "Je mange une poignée de noix/graines (environ 30g) la plupart des jours."
    },
    years: {
      true: 0,     // Nüsse = keine Penalty
      false: -1    // Keine Nüsse = leichte Penalty
    }
  },

  {
    id: "diet_09",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 3× pro Woche verarbeitetes Fleisch (Wurst, Speck, Salami, Schinkenwaren).",
      en: "I eat processed meat (sausage, bacon, salami, deli meats) at least 3 times per week.",
      es: "Como carne procesada (salchichas, tocino, salami, embutidos) al menos 3 veces por semana.",
      fr: "Je mange de la viande transformée (saucisses, bacon, salami, charcuterie) au moins 3 fois par semaine."
    },
    years: {
      true: -3,    // Viel verarbeitetes Fleisch = hohe Penalty (WHO Gruppe 1 Karzinogen)
      false: 0
    }
  },

  {
    id: "diet_10",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 3× pro Woche rotes Fleisch (Rind/Schwein/Lamm) als Hauptbestandteil einer Mahlzeit.",
      en: "I eat red meat (beef/pork/lamb) as a main component of a meal at least 3 times per week.",
      es: "Como carne roja (res/cerdo/cordero) como componente principal de una comida al menos 3 veces por semana.",
      fr: "Je mange de la viande rouge (bœuf/porc/agneau) comme composant principal d'un repas au moins 3 fois par semaine."
    },
    years: {
      true: -2,    // Viel rotes Fleisch = moderate Penalty
      false: 0
    }
  },

  {
    id: "diet_11",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich trinke regelmäßig (mind. 3× pro Woche) zuckerhaltige Getränke (Softdrinks, Energy, gesüßte Säfte/Tees).",
      en: "I regularly drink (at least 3 times per week) sugary beverages (soft drinks, energy drinks, sweetened juices/teas).",
      es: "Bebo regularmente (al menos 3 veces por semana) bebidas azucaradas (refrescos, bebidas energéticas, jugos/tés endulzados).",
      fr: "Je bois régulièrement (au moins 3 fois par semaine) des boissons sucrées (sodas, boissons énergétiques, jus/thés sucrés)."
    },
    years: {
      true: -2,    // Zuckergetränke = Penalty
      false: 0
    }
  },

  {
    id: "diet_12",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse regelmäßig (mind. 3× pro Woche) stark verarbeitete Produkte (Fertiggerichte, Fast Food, süße Snacks).",
      en: "I regularly eat (at least 3 times per week) highly processed products (ready meals, fast food, sweet snacks).",
      es: "Como regularmente (al menos 3 veces por semana) productos altamente procesados (comidas preparadas, comida rápida, snacks dulces).",
      fr: "Je mange régulièrement (au moins 3 fois par semaine) des produits ultra-transformés (plats préparés, fast-food, snacks sucrés)."
    },
    years: {
      true: -2,    // Ultra-processed foods = Penalty
      false: 0
    }
  },

  // ========================================
  // SOZIALES & STRESS
  // ========================================

  {
    id: "social_01",
    factor: "social",
    type: "boolean",
    text: {
      de: "Ich fühle mich häufig einsam.",
      en: "I often feel lonely.",
      es: "A menudo me siento solo/a.",
      fr: "Je me sens souvent seul(e)."
    },
    years: {
      true: -5,    // Subjektive Einsamkeit = hohe Penalty
      false: 0
    }
  },

  {
    id: "social_02",
    factor: "social",
    type: "boolean",
    text: {
      de: "Ich habe regelmäßigen Kontakt zu Familie/Freunden (mindestens 1× pro Woche).",
      en: "I have regular contact with family/friends (at least once per week).",
      es: "Tengo contacto regular con familia/amigos (al menos una vez por semana).",
      fr: "J'ai des contacts réguliers avec ma famille/mes amis (au moins une fois par semaine)."
    },
    years: {
      true: 0,     // Regelmäßiger Kontakt = keine Penalty
      false: -3    // Kein Kontakt = Penalty
    }
  },

  {
    id: "social_03",
    factor: "social",
    type: "boolean",
    text: {
      de: "Ich bin in einer festen Partnerschaft/Ehe oder lebe mit Angehörigen zusammen.",
      en: "I am in a committed relationship/marriage or live with family members.",
      es: "Estoy en una relación estable/matrimonio o vivo con familiares.",
      fr: "Je suis dans une relation stable/un mariage ou je vis avec des membres de ma famille."
    },
    years: {
      true: 0,     // Partnerschaft = keine Penalty
      false: -2    // Keine Partnerschaft = leichte Penalty
    }
  },

  {
    id: "stress_01",
    factor: "stress",
    type: "boolean",
    text: {
      de: "Ich empfinde meinen Alltag als sehr stressig.",
      en: "I find my daily life very stressful.",
      es: "Encuentro mi vida diaria muy estresante.",
      fr: "Je trouve ma vie quotidienne très stressante."
    },
    years: {
      true: -3,    // Chronischer Stress = Penalty
      false: 0
    }
  },

  {
    id: "stress_02",
    factor: "stress",
    type: "boolean",
    text: {
      de: "Ich habe ausreichend Zeit für Entspannung und Erholung.",
      en: "I have sufficient time for relaxation and recovery.",
      es: "Tengo suficiente tiempo para relajación y recuperación.",
      fr: "J'ai suffisamment de temps pour me détendre et me ressourcer."
    },
    years: {
      true: 0,     // Ausreichend Erholung = keine Penalty
      false: -2    // Keine Erholung = Penalty
    }
  },

  // ========================================
  // VORSORGE & PREVENTION
  // ========================================

  {
    id: "prevention_01",
    factor: "prevention",
    type: "boolean",
    text: {
      de: "Ich gehe mindestens 1× pro Jahr zur zahnärztlichen Kontrolle.",
      en: "I go for dental check-ups at least once per year.",
      es: "Voy a controles dentales al menos una vez al año.",
      fr: "Je vais chez le dentiste pour un contrôle au moins une fois par an."
    },
    years: {
      true: 0,
      false: -1
    }
  },

  {
    id: "prevention_02",
    factor: "prevention",
    type: "boolean",
    text: {
      de: "Ich habe mehrere fehlende Zähne oder ernsthafte Zahnprobleme.",
      en: "I have several missing teeth or serious dental problems.",
      es: "Tengo varios dientes faltantes o problemas dentales serios.",
      fr: "J'ai plusieurs dents manquantes ou de graves problèmes dentaires."
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "prevention_03",
    factor: "prevention",
    type: "boolean",
    text: {
      de: "Ich nehme regelmäßig an empfohlenen Vorsorgeuntersuchungen teil (z.B. Check-up, Krebsvorsorge).",
      en: "I regularly participate in recommended preventive examinations (e.g., check-ups, cancer screening).",
      es: "Participo regularmente en exámenes preventivos recomendados (p. ej., chequeos, detección de cáncer).",
      fr: "Je participe régulièrement aux examens préventifs recommandés (par ex., bilans de santé, dépistage du cancer)."
    },
    years: {
      true: 0,    // EINZIGER BONUS! Vorsorge ist aktiver Schutz
      false: -2
    }
  },

  {
    id: "prevention_04",
    factor: "prevention",
    type: "select",
    text: {
      de: "Wie regelmäßig gehst du zum Arzt für Check-ups und lässt deine Gesundheitswerte (Blutdruck, Cholesterin, Blutzucker) kontrollieren?",
      en: "How regularly do you visit the doctor for check-ups and have your health values (blood pressure, cholesterol, blood sugar) monitored?",
      es: "¿Con qué regularidad visitas al médico para chequeos y controlas tus valores de salud (presión arterial, colesterol, azúcar en sangre)?",
      fr: "À quelle fréquence consultez-vous le médecin pour des bilans et faites-vous contrôler vos valeurs de santé (tension artérielle, cholestérol, glycémie) ?"
    },
    years_impact: {
      options: {
        "annual": 0,        // BONUS für konsequente Vorsorge
        "1-2_years": -1,
        "2-5_years": -3,
        "over_5_years": -4,
        "never": -5
      }
    },
    options: [
      {
        value: "annual",
        label: {
          de: "Jährlich oder öfter - alle Werte werden regelmäßig kontrolliert",
          en: "Annually or more often - all values are regularly monitored",
          es: "Anualmente o más a menudo - todos los valores se controlan regularmente",
          fr: "Annuellement ou plus souvent - toutes les valeurs sont régulièrement contrôlées"
        }
      },
      {
        value: "1-2_years",
        label: {
          de: "Alle 1-2 Jahre",
          en: "Every 1-2 years",
          es: "Cada 1-2 años",
          fr: "Tous les 1-2 ans"
        }
      },
      {
        value: "2-5_years",
        label: {
          de: "Alle 2-5 Jahre",
          en: "Every 2-5 years",
          es: "Cada 2-5 años",
          fr: "Tous les 2-5 ans"
        }
      },
      {
        value: "over_5_years",
        label: {
          de: "Länger als 5 Jahre her",
          en: "More than 5 years ago",
          es: "Hace más de 5 años",
          fr: "Il y a plus de 5 ans"
        }
      },
      {
        value: "never",
        label: {
          de: "Nie oder kann mich nicht erinnern",
          en: "Never or can't remember",
          es: "Nunca o no puedo recordar",
          fr: "Jamais ou je ne me souviens pas"
        }
      }
    ]
  },

  // ========================================
  // FAMILIEN-ANAMNESE
  // ========================================

  {
    id: "family_cvd",
    factor: "cardiovascular",
    type: "multiselect",
    text: {
      de: "Hatten deine Eltern oder Geschwister einen Herzinfarkt oder Schlaganfall (vor dem 60. Lebensjahr)?",
      en: "Did your parents or siblings have a heart attack or stroke (before age 60)?",
      es: "¿Tuvieron tus padres o hermanos un infarto o derrame cerebral (antes de los 60 años)?",
      fr: "Vos parents ou frères et sœurs ont-ils eu une crise cardiaque ou un AVC (avant l'âge de 60 ans) ?"
    },
    options: [
      {
        value: "none",
        label: {
          de: "Nein",
          en: "No",
          es: "No",
          fr: "Non"
        },
        years: 0
      },
      {
        value: "heart_attack",
        label: {
          de: "Ja, Herzinfarkt",
          en: "Yes, heart attack",
          es: "Sí, infarto",
          fr: "Oui, crise cardiaque"
        },
        years: -3
      },
      {
        value: "stroke",
        label: {
          de: "Ja, Schlaganfall",
          en: "Yes, stroke",
          es: "Sí, derrame cerebral",
          fr: "Oui, AVC"
        },
        years: -2
      }
    ]
  },

  {
    id: "family_diabetes",
    factor: "metabolic",
    type: "boolean",
    text: {
      de: "Haben oder hatten deine Eltern oder Geschwister Diabetes Typ 2?",
      en: "Do or did your parents or siblings have Type 2 diabetes?",
      es: "¿Tienen o tuvieron tus padres o hermanos diabetes tipo 2?",
      fr: "Vos parents ou frères et sœurs ont-ils ou ont-ils eu un diabète de type 2 ?"
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "family_cancer",
    factor: "cancer",
    type: "multiselect",
    text: {
      de: "Hatten deine Eltern oder Geschwister Krebs?",
      en: "Did your parents or siblings have cancer?",
      es: "¿Tuvieron tus padres o hermanos cáncer?",
      fr: "Vos parents ou frères et sœurs ont-ils eu un cancer ?"
    },
    options: [
      {
        value: "none",
        label: {
          de: "Nein",
          en: "No",
          es: "No",
          fr: "Non"
        },
        years: 0
      },
      {
        value: "breast",
        label: {
          de: "Ja, Brustkrebs",
          en: "Yes, breast cancer",
          es: "Sí, cáncer de mama",
          fr: "Oui, cancer du sein"
        },
        years: -2
      },
      {
        value: "colon",
        label: {
          de: "Ja, Darmkrebs",
          en: "Yes, colon cancer",
          es: "Sí, cáncer colorrectal",
          fr: "Oui, cancer du côlon"
        },
        years: -2
      },
      {
        value: "lung",
        label: {
          de: "Ja, Lungenkrebs",
          en: "Yes, lung cancer",
          es: "Sí, cáncer de pulmón",
          fr: "Oui, cancer du poumon"
        },
        years: -2
      },
      {
        value: "prostate",
        label: {
          de: "Ja, Prostatakrebs",
          en: "Yes, prostate cancer",
          es: "Sí, cáncer de próstata",
          fr: "Oui, cancer de la prostate"
        },
        years: -1
      },
      {
        value: "other",
        label: {
          de: "Ja, andere Krebsart",
          en: "Yes, other cancer type",
          es: "Sí, otro tipo de cáncer",
          fr: "Oui, autre type de cancer"
        },
        years: -1
      }
    ]
  },

  // ========================================
  // KREBS-SCREENING
  // ========================================

  {
    id: "cancer_screening",
    factor: "cancer",
    type: "select",
    text: {
      de: "Nimmst du regelmäßig an empfohlenen Krebs-Vorsorgeuntersuchungen teil (z.B. Darmspiegelung, Mammographie)?",
      en: "Do you regularly participate in recommended cancer screenings (e.g., colonoscopy, mammography)?",
      es: "¿Participas regularmente en exámenes de detección de cáncer recomendados (colonoscopia, mamografía)?",
      fr: "Participez-vous régulièrement aux dépistages du cancer recommandés (par ex., coloscopie, mammographie) ?"
    },
    options: [
      {
        value: "regular",
        label: {
          de: "Ja, regelmäßig",
          en: "Yes, regularly",
          es: "Sí, regularmente",
          fr: "Oui, régulièrement"
        },
        years: 0    // Bonus für Screening
      },
      {
        value: "sometimes",
        label: {
          de: "Manchmal",
          en: "Sometimes",
          es: "A veces",
          fr: "Parfois"
        },
        years: -1
      },
      {
        value: "never",
        label: {
          de: "Nein, nie",
          en: "No, never",
          es: "No, nunca",
          fr: "Non, jamais"
        },
        years: -2
      }
    ]
  },

  // ========================================
  // RENAL (NIEREN)
  // ========================================

  {
    id: "renal_symptom",
    factor: "renal",
    type: "boolean",
    text: {
      de: "Hast du häufig geschwollene Beine oder Füße (Ödeme)?",
      en: "Do you frequently have swollen legs or feet (edema)?",
      es: "¿Tienes frecuentemente las piernas o pies hinchados (edema)?",
      fr: "Avez-vous fréquemment les jambes ou les pieds enflés (œdème) ?"
    },
    years: {
      true: -2,
      false: 0
    }
  }
];

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Hole alle Fragen eines bestimmten Faktors
 */
export function getQuestionsByFactor(factor) {
  return questions.filter(q => q.factor === factor);
}

/**
 * Hole Frage nach ID
 */
export function getQuestionById(id) {
  return questions.find(q => q.id === id);
}

/**
 * Zähle Fragen pro Faktor
 */
export function countQuestionsByFactor() {
  const counts = {};
  questions.forEach(q => {
    counts[q.factor] = (counts[q.factor] || 0) + 1;
  });
  return counts;
}

/**
 * Hole alle unique Faktoren
 */
export function getAllFactors() {
  return [...new Set(questions.map(q => q.factor))];
}

/**
 * Berechne Penalty für eine Antwort
 * WICHTIG: Rückgabewert ist negativ oder 0 (Penalty-System!)
 */
export function calculateQuestionImpact(questionId, answer) {
  const question = getQuestionById(questionId);
  if (!question) return 0;
  
  // Check for years_impact first (newer format)
  if (question.years_impact) {
    if (question.years_impact.scale && typeof answer === 'number') {
      return question.years_impact.scale[answer] || 0;
    }
    if (question.years_impact.options && typeof answer === 'string') {
      return question.years_impact.options[answer] || 0;
    }
  }
  
  // Fallback to years (older format)
  if (question.years) {
    if (typeof answer === 'boolean') {
      return question.years[answer] || 0;
    }
  }
  
  // For select/multiselect
  if (question.type === 'select') {
    const option = question.options.find(o => o.value === answer);
    return option?.years || 0;
  }
  
  if (question.type === 'multiselect') {
    if (!Array.isArray(answer)) return 0;
    let total = 0;
    for (const selected of answer) {
      const option = question.options.find(o => o.value === selected);
      if (option?.years) {
        total += option.years;
      }
    }
    return total;
  }
  
  return 0;
}

/**
 * Validiere Antwort für eine Frage
 */
export function validateAnswer(questionId, answer) {
  const question = getQuestionById(questionId);
  if (!question) return false;
  
  switch (question.type) {
    case 'boolean':
      return typeof answer === 'boolean';
    
    case 'likert':
      return Number.isInteger(answer) && answer >= 1 && answer <= question.scale;
    
    case 'select':
      return question.options.some(o => o.value === answer);
    
    case 'multiselect':
      if (!Array.isArray(answer)) return false;
      return answer.every(a => question.options.some(o => o.value === a));
    
    default:
      return false;
  }
}

// ========================================
// EXPORT
// ========================================
export default questions;