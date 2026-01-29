// data/questions.js
// Alle 64 Haupttest-Fragen für Dr. Livelong
// Medizinisch fundiert, alltagssprachlich kommuniziert
// Version 1.0.0

/**
 * STRUKTUR:
 * - id: Eindeutige ID (z.B. "health_01")
 * - factor: Zugehöriger Faktor (siehe factors.js)
 * - type: Fragetyp ("likert", "boolean", "select")
 * - text: Fragetext (DE/EN/ES)
 * - explanation: Optional - Erklärung/Hilfetext
 * - options: Antwortoptionen (für select)
 * - years: Impact in Jahren (kann auch in options sein)
 * - reverse: Bei Likert - true wenn negativ formuliert
 */

export const questions = [
  // ========================================
  // GRUPPE 1: ALLGEMEINER GESUNDHEITSZUSTAND (17 Fragen)
  // ========================================
  {
    id: "health_01",
    factor: "general_health",
    type: "likert",
    scale: 5,
    text: {
      de: "Ich würde meinen aktuellen Gesundheitszustand insgesamt als sehr gut einstufen.",
      en: "I would rate my current overall health as very good.",
      es: "Calificaría mi estado general de salud actual como muy bueno."
    },
    years_impact: {
      scale: {
        1: -3,  // Stimme gar nicht zu
        2: -1,
        3: 0,
        4: +1,
        5: +2   // Stimme voll zu
      }
    }
  },

  {
    id: "health_03",
    factor: "frailty",
    type: "select",
    text: {
      de: "Ich war in den letzten 12 Monaten zwei- oder mehrmals über Nacht im Krankenhaus.",
      en: "I had two or more overnight hospital stays in the last 12 months.",
      es: "Tuve dos o más hospitalizaciones durante la noche en los últimos 12 meses."
    },
    options: [
      {
        value: "no_hospital",
        label: {
          de: "War gar nicht im Krankenhaus",
          en: "No hospital stays",
          es: "Ninguna hospitalización"
        },
        years: 0
      },
      {
        value: "once",
        label: {
          de: "Einmal",
          en: "Once",
          es: "Una vez"
        },
        years: -2
      },
      {
        value: "multiple",
        label: {
          de: "Zwei- oder mehrmals",
          en: "Two or more times",
          es: "Dos o más veces"
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
      es: "Tengo dificultad para caminar unos 400 metros sin ayuda."
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
      es: "Tengo dificultad para subir escaleras de 10-12 escalones sin parar."
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
      es: "Tengo dificultad para levantarme de una silla sin usar los brazos para apoyarme."
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
      es: "Tengo dificultad para llevar una carga de unos 5-7 kg durante 50 m (p. ej., bolsas de compra)."
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
      es: "Tengo dificultad para bañarme o ducharme solo/a."
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
      es: "Tengo dificultad para vestirme o desvestirme solo/a."
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
      es: "Tengo dificultad para organizar mis medicamentos correctamente y a tiempo."
    },
    options: [
      {
        value: "no_meds",
        label: {
          de: "Nehme keine Medikamente",
          en: "Don't take medications",
          es: "No tomo medicamentos"
        },
        years: 0
      },
      {
        value: "no_difficulty",
        label: {
          de: "Nein, keine Schwierigkeiten",
          en: "No difficulty",
          es: "Sin dificultad"
        },
        years: 0
      },
      {
        value: "yes_difficulty",
        label: {
          de: "Ja, habe Schwierigkeiten",
          en: "Yes, have difficulty",
          es: "Sí, tengo dificultad"
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
      es: "Tengo dificultad para hacer compras/mandados solo/a."
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
      es: "Me he caído más de una vez en los últimos 12 meses."
    },
    options: [
      {
        value: "no_falls",
        label: {
          de: "Bin gar nicht gestürzt",
          en: "No falls",
          es: "Sin caídas"
        },
        years: 0
      },
      {
        value: "once",
        label: {
          de: "Einmal gestürzt",
          en: "Fell once",
          es: "Una caída"
        },
        years: -3
      },
      {
        value: "multiple",
        label: {
          de: "Mehrmals gestürzt",
          en: "Multiple falls",
          es: "Múltiples caídas"
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
      es: "He perdido peso significativo sin querer en los últimos 6 meses (más de 5 kg)."
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
      es: "A menudo me siento inusualmente agotado/a, incluso con pequeñas tareas diarias."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  {
    id: "health_16",
    factor: "cardiovascular",
    type: "boolean",
    text: {
      de: "Ich bekomme bei leichter Anstrengung (z.B. zügiges Gehen) Luftnot.",
      en: "I experience shortness of breath with light exertion (e.g., brisk walking).",
      es: "Experimento falta de aire con esfuerzo ligero (p. ej., caminar rápido)."
    },
    years: {
      true: -4,
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
      es: "A menudo tengo dolor que limita significativamente mis actividades diarias."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  // ========================================
  // GRUPPE 2: BEWEGUNG & SCHLAF (4 Fragen)
  // ========================================
  {
    id: "fitness_01",
    factor: "fitness",
    type: "boolean",
    text: {
      de: "Ich bewege mich mindestens 3× pro Woche so, dass Puls/Atmung klar ansteigen.",
      en: "I exercise at least 3 times per week so that my pulse/breathing clearly increases.",
      es: "Hago ejercicio al menos 3 veces por semana de modo que mi pulso/respiración aumenten claramente."
    },
    years: {
      true: +4,
      false: 0
    }
  },

  {
    id: "fitness_02",
    factor: "fitness",
    type: "boolean",
    text: {
      de: "Ich sitze oder liege an den meisten Tagen insgesamt mehr als 8 Stunden (außer Schlaf).",
      en: "On most days, I sit or lie down for more than 8 hours (excluding sleep).",
      es: "La mayoría de los días, me siento o me acuesto durante más de 8 horas (excluyendo el sueño)."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  {
    id: "sleep_01",
    factor: "sleep",
    type: "boolean",
    text: {
      de: "Ich schlafe meistens 7-8 Stunden pro Nacht.",
      en: "I usually sleep 7-8 hours per night.",
      es: "Normalmente duermo 7-8 horas por noche."
    },
    years: {
      true: +2,
      false: -1
    }
  },

  {
    id: "sleep_02",
    factor: "sleep",
    type: "boolean",
    text: {
      de: "Mein Schlaf ist an den meisten Nächten erholsam.",
      en: "My sleep is restful on most nights.",
      es: "Mi sueño es reparador la mayoría de las noches."
    },
    years: {
      true: +1,
      false: -2
    }
  },

  // ========================================
  // GRUPPE 3: RAUCHEN & ALKOHOL (4 Fragen)
  // ========================================
  {
    id: "alcohol_01",
    factor: "lifestyle_alcohol",
    type: "select",
    text: {
      de: "Wie oft trinkst du Alkohol?",
      en: "How often do you drink alcohol?",
      es: "¿Con qué frecuencia bebes alcohol?"
    },
    options: [
      {
        value: "never",
        label: {
          de: "Nie oder fast nie",
          en: "Never or almost never",
          es: "Nunca o casi nunca"
        },
        years: 0
      },
      {
        value: "monthly",
        label: {
          de: "1-2× pro Monat",
          en: "1-2 times per month",
          es: "1-2 veces al mes"
        },
        years: 0
      },
      {
        value: "weekly",
        label: {
          de: "1-2× pro Woche",
          en: "1-2 times per week",
          es: "1-2 veces por semana"
        },
        years: +1  // Moderate consumption (J-curve)
      },
      {
        value: "frequent",
        label: {
          de: "3-4× pro Woche",
          en: "3-4 times per week",
          es: "3-4 veces por semana"
        },
        years: 0
      },
      {
        value: "daily",
        label: {
          de: "5× oder öfter pro Woche",
          en: "5 or more times per week",
          es: "5 o más veces por semana"
        },
        years: -2
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
      es: "Cuando bebes alcohol, ¿cuánto bebes típicamente por ocasión?"
    },
    options: [
      {
        value: "none",
        label: {
          de: "Trinke keinen Alkohol",
          en: "Don't drink alcohol",
          es: "No bebo alcohol"
        },
        years: 0
      },
      {
        value: "one",
        label: {
          de: "1 Getränk (1 Bier/1 Glas Wein/1 Schnaps)",
          en: "1 drink (1 beer/1 glass of wine/1 shot)",
          es: "1 bebida (1 cerveza/1 copa de vino/1 trago)"
        },
        years: +1  // J-curve benefit
      },
      {
        value: "two_three",
        label: {
          de: "2-3 Getränke",
          en: "2-3 drinks",
          es: "2-3 bebidas"
        },
        years: 0
      },
      {
        value: "four_five",
        label: {
          de: "4-5 Getränke",
          en: "4-5 drinks",
          es: "4-5 bebidas"
        },
        years: -3
      },
      {
        value: "six_plus",
        label: {
          de: "6+ Getränke",
          en: "6+ drinks",
          es: "6+ bebidas"
        },
        years: -7
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
      es: "Tomé 5 o más bebidas en una ocasión al menos una vez en los últimos 12 meses."
    },
    options: [
      {
        value: "no_alcohol",
        label: {
          de: "Trinke keinen Alkohol",
          en: "Don't drink alcohol",
          es: "No bebo alcohol"
        },
        years: 0
      },
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
        value: "yes",
        label: {
          de: "Ja",
          en: "Yes",
          es: "Sí"
        },
        years: -3
      }
    ]
  },

  // ========================================
  // GRUPPE 4: DIAGNOSEN & MEDIKAMENTE (14 Fragen)
  // ========================================
  {
    id: "pulmonary_02",
    factor: "pulmonary",
    type: "boolean",
    text: {
      de: "Ich habe chronische Atemwegsbeschwerden, die mich im Alltag einschränken.",
      en: "I have chronic respiratory problems that limit my daily activities.",
      es: "Tengo problemas respiratorios crónicos que limitan mis actividades diarias."
    },
    years: {
      true: -4,
      false: 0
    }
  },

  {
    id: "metab_02",
    factor: "metabolic",
    type: "select",
    text: {
      de: "Bei mir wurde erhöhtes Cholesterin diagnostiziert.",
      en: "I have been diagnosed with high cholesterol.",
      es: "Me han diagnosticado colesterol alto."
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
        value: "unknown",
        label: {
          de: "Weiß nicht",
          en: "Don't know",
          es: "No sé"
        },
        years: -1
      },
      {
        value: "yes",
        label: {
          de: "Ja",
          en: "Yes",
          es: "Sí"
        },
        years: -2
      }
    ]
  },

  {
    id: "meds_01",
    factor: "polypharmacy",
    type: "boolean",
    text: {
      de: "Ich nehme täglich 5 oder mehr verschreibungspflichtige Medikamente ein.",
      en: "I take 5 or more prescription medications daily.",
      es: "Tomo 5 o más medicamentos recetados diariamente."
    },
    years: {
      true: -3,
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
      es: "Tomo medicamentos para la presión arterial alta."
    },
    years: {
      true: 0,  // Neutral - zeigt nur Kontrolle an
      false: 0
    }
  },

  // ========================================
  // GRUPPE 5: KOGNITION, SINNE & PSYCHE (5 Fragen)
  // ========================================
  {
    id: "cognitive_01",
    factor: "cognitive",
    type: "boolean",
    text: {
      de: "Ich habe merkliche Gedächtnis- oder Konzentrationsprobleme, die den Alltag beeinträchtigen.",
      en: "I have noticeable memory or concentration problems that affect daily life.",
      es: "Tengo problemas notables de memoria o concentración que afectan la vida diaria."
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
      es: "Tengo problemas de visión que limitan mis actividades diarias incluso con gafas/lentes."
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
      es: "Tengo problemas de audición que limitan mis actividades diarias incluso con audífonos."
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
      es: "Tuve estado de ánimo deprimido o pérdida de interés la mayoría de los días en las últimas 2 semanas."
    },
    years: {
      true: -4,
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
      es: "Tuve ansiedad severa o preocupaciones la mayoría de los días en las últimas 2 semanas."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  // ========================================
  // GRUPPE 6: ERNÄHRUNG (12 Fragen)
  // ========================================
  {
    id: "diet_01",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Mein Hauptfett zum Kochen/Anbraten ist Olivenöl, Rapsöl oder ein anderes pflanzliches Öl.",
      en: "My main cooking fat is olive oil, rapeseed oil, or another vegetable oil.",
      es: "Mi grasa principal para cocinar es aceite de oliva, aceite de colza u otro aceite vegetal."
    },
    years: {
      true: +2,
      false: 0
    }
  },

  {
    id: "diet_02",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich verwende häufig Butter oder Schweineschmalz als Hauptfett (Kochen/Braten/Aufstrich).",
      en: "I often use butter or lard as my main fat (cooking/frying/spread).",
      es: "A menudo uso mantequilla o manteca como grasa principal (cocinar/freír/untar)."
    },
    years: {
      true: -2,
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
      es: "Como al menos 2 porciones de verduras la mayoría de los días."
    },
    years: {
      true: +2,
      false: 0
    }
  },

  {
    id: "diet_04",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse an den meisten Tagen mindestens 1 Portion Obst.",
      en: "I eat at least 1 serving of fruit on most days.",
      es: "Como al menos 1 porción de fruta la mayoría de los días."
    },
    years: {
      true: +1,
      false: 0
    }
  },

  {
    id: "diet_05",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse überwiegend Vollkorn statt Weißmehl (Brot, Pasta, Reis).",
      en: "I primarily eat whole grains instead of white flour (bread, pasta, rice).",
      es: "Como principalmente cereales integrales en lugar de harina blanca (pan, pasta, arroz)."
    },
    years: {
      true: +1,
      false: 0
    }
  },

  {
    id: "diet_06",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 2× pro Woche Hülsenfrüchte (Linsen, Bohnen, Kichererbsen).",
      en: "I eat legumes (lentils, beans, chickpeas) at least 2 times per week.",
      es: "Como legumbres (lentejas, frijoles, garbanzos) al menos 2 veces por semana."
    },
    years: {
      true: +1,
      false: 0
    }
  },

  {
    id: "diet_07",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 2× pro Woche Fisch (inkl. fettreicher Fisch wie Lachs, Makrele).",
      en: "I eat fish (including fatty fish like salmon, mackerel) at least 2 times per week.",
      es: "Como pescado (incluido pescado graso como salmón, caballa) al menos 2 veces por semana."
    },
    years: {
      true: +2,
      false: 0
    }
  },

  {
    id: "diet_08",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse an den meisten Tagen eine Handvoll Nüsse/Samen (ca. 30g).",
      en: "I eat a handful of nuts/seeds (approx. 30g) on most days.",
      es: "Como un puñado de nueces/semillas (aprox. 30g) la mayoría de los días."
    },
    years: {
      true: +2,
      false: 0
    }
  },

  {
    id: "diet_09",
    factor: "diet",
    type: "boolean",
    text: {
      de: "Ich esse mindestens 3× pro Woche verarbeitetes Fleisch (Wurst, Speck, Salami, Schinkenwaren).",
      en: "I eat processed meat (sausage, bacon, salami, deli meats) at least 3 times per week.",
      es: "Como carne procesada (salchichas, tocino, salami, embutidos) al menos 3 veces por semana."
    },
    years: {
      true: -3,
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
      es: "Como carne roja (res/cerdo/cordero) como componente principal de una comida al menos 3 veces por semana."
    },
    years: {
      true: -2,
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
      es: "Bebo regularmente (al menos 3 veces por semana) bebidas azucaradas (refrescos, bebidas energéticas, jugos/tés endulzados)."
    },
    years: {
      true: -2,
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
      es: "Como regularmente (al menos 3 veces por semana) productos altamente procesados (comidas preparadas, comida rápida, snacks dulces)."
    },
    years: {
      true: -3,
      false: 0
    }
  },

  // ========================================
  // GRUPPE 7: SOZIALES & STRESS (5 Fragen)
  // ========================================
  {
    id: "social_01",
    factor: "social",
    type: "boolean",
    text: {
      de: "Ich fühle mich häufig einsam.",
      en: "I often feel lonely.",
      es: "A menudo me siento solo/a."
    },
    years: {
      true: -4,
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
      es: "Tengo contacto regular con familia/amigos (al menos una vez por semana)."
    },
    years: {
      true: +3,
      false: 0
    }
  },

  {
    id: "social_03",
    factor: "social",
    type: "boolean",
    text: {
      de: "Ich bin in einer festen Partnerschaft/Ehe oder lebe mit Angehörigen zusammen.",
      en: "I am in a committed relationship/marriage or live with family members.",
      es: "Estoy en una relación estable/matrimonio o vivo con familiares."
    },
    years: {
      true: +2,
      false: 0
    }
  },

  {
    id: "stress_01",
    factor: "stress",
    type: "boolean",
    text: {
      de: "Ich empfinde meinen Alltag als sehr stressig.",
      en: "I find my daily life very stressful.",
      es: "Encuentro mi vida diaria muy estresante."
    },
    years: {
      true: -3,
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
      es: "Tengo suficiente tiempo para relajación y recuperación."
    },
    years: {
      true: +2,
      false: 0
    }
  },

  // ========================================
  // GRUPPE 8: VORSORGE (3 Fragen)
  // ========================================
  {
    id: "prevention_01",
    factor: "prevention",
    type: "boolean",
    text: {
      de: "Ich gehe mindestens 1× pro Jahr zur zahnärztlichen Kontrolle.",
      en: "I go for dental check-ups at least once per year.",
      es: "Voy a controles dentales al menos una vez al año."
    },
    years: {
      true: +1,
      false: 0
    }
  },

  {
    id: "prevention_02",
    factor: "prevention",
    type: "boolean",
    text: {
      de: "Ich habe mehrere fehlende Zähne oder ernsthafte Zahnprobleme.",
      en: "I have several missing teeth or serious dental problems.",
      es: "Tengo varios dientes faltantes o problemas dentales serios."
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
      es: "Participo regularmente en exámenes preventivos recomendados (p. ej., chequeos, detección de cáncer)."
    },
    years: {
      true: +2,
      false: 0
    }
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
      es: "¿Tuvieron tus padres o hermanos un infarto o derrame cerebral (antes de los 60 años)?"
    },
    options: [
      {
        value: "none",
        label: {
          de: "Nein",
          en: "No",
          es: "No"
        },
        years: 0
      },
      {
        value: "heart_attack",
        label: {
          de: "Ja, Herzinfarkt",
          en: "Yes, heart attack",
          es: "Sí, infarto"
        },
        years: -3
      },
      {
        value: "stroke",
        label: {
          de: "Ja, Schlaganfall",
          en: "Yes, stroke",
          es: "Sí, derrame cerebral"
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
      es: "¿Tienen o tuvieron tus padres o hermanos diabetes tipo 2?"
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
      es: "¿Tuvieron tus padres o hermanos cáncer?"
    },
    options: [
      {
        value: "none",
        label: {
          de: "Nein",
          en: "No",
          es: "No"
        },
        years: 0
      },
      {
        value: "breast",
        label: {
          de: "Ja, Brustkrebs",
          en: "Yes, breast cancer",
          es: "Sí, cáncer de mama"
        },
        years: -2
      },
      {
        value: "colon",
        label: {
          de: "Ja, Darmkrebs",
          en: "Yes, colon cancer",
          es: "Sí, cáncer colorrectal"
        },
        years: -2
      },
      {
        value: "lung",
        label: {
          de: "Ja, Lungenkrebs",
          en: "Yes, lung cancer",
          es: "Sí, cáncer de pulmón"
        },
        years: -2
      },
      {
        value: "prostate",
        label: {
          de: "Ja, Prostatakrebs",
          en: "Yes, prostate cancer",
          es: "Sí, cáncer de próstata"
        },
        years: -1
      },
      {
        value: "other",
        label: {
          de: "Ja, andere Krebsart",
          en: "Yes, other cancer type",
          es: "Sí, otro tipo de cáncer"
        },
        years: -1
      }
    ]
  },

  // ========================================
  // SYMPTOM-FRAGEN
  // ========================================

  {
    id: "pulmonary_symptom_01",
    factor: "pulmonary",
    type: "boolean",
    text: {
      de: "Bist du bei alltäglichen Aktivitäten (Treppen steigen, schnelles Gehen) kurzatmig?",
      en: "Do you get short of breath during daily activities (climbing stairs, brisk walking)?",
      es: "¿Te falta el aire durante actividades diarias (subir escaleras, caminar rápido)?"
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
      es: "¿Toses regularmente (más de 3 meses al año)?"
    },
    years: {
      true: -2,
      false: 0
    }
  },

  {
    id: "cancer_screening",
    factor: "cancer",
    type: "select",
    text: {
      de: "Nimmst du regelmäßig an empfohlenen Krebs-Vorsorgeuntersuchungen teil (z.B. Darmspiegelung, Mammographie)?",
      en: "Do you regularly participate in recommended cancer screenings (e.g., colonoscopy, mammography)?",
      es: "¿Participas regularmente en exámenes de detección de cáncer recomendados (colonoscopia, mamografía)?"
    },
    options: [
      {
        value: "regular",
        label: {
          de: "Ja, regelmäßig",
          en: "Yes, regularly",
          es: "Sí, regularmente"
        },
        years: 1
      },
      {
        value: "sometimes",
        label: {
          de: "Manchmal",
          en: "Sometimes",
          es: "A veces"
        },
        years: 0
      },
      {
        value: "never",
        label: {
          de: "Nein, nie",
          en: "No, never",
          es: "No, nunca"
        },
        years: -2
      }
    ]
  },

  {
    id: "renal_symptom",
    factor: "renal",
    type: "boolean",
    text: {
      de: "Hast du häufig geschwollene Beine oder Füße (Ödeme)?",
      en: "Do you frequently have swollen legs or feet (edema)?",
      es: "¿Tienes frecuentemente las piernas o pies hinchados (edema)?"
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
 * Berechne Impact für eine Antwort
 */
export function calculateQuestionImpact(questionId, answer) {
  const question = getQuestionById(questionId);
  if (!question) return 0;
  
  switch (question.type) {
    case 'boolean':
      return question.years[answer] || 0;
    
    case 'likert':
      return question.years_map[answer] || 0;
    
    case 'select':
      const option = question.options.find(o => o.value === answer);
      return option?.years || 0;
    
    default:
      return 0;
  }
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
    
    default:
      return false;
  }
}

// ========================================
// EXPORT
// ========================================
export default questions;