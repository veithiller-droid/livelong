// data/recommendations.js
// Empfehlungs-Templates für Dr. Livelong
// Medizinisch fundierte Empfehlungen mit konkreten Umsetzungstipps
// Version 1.0.0

export const RECOMMENDATIONS = {
  // ========================================
  // RAUCHEN
  // ========================================
  
  smoking_quit: {
    id: "smoking_quit",
    factor: "lifestyle_smoke",
    
    trigger: (answers) => {
      return answers.smoke_01 === 'light' || 
             answers.smoke_01 === 'moderate' || 
             answers.smoke_01 === 'heavy';
    },
    
    title: {
      de: "Mit dem Rauchen aufhören",
      en: "Quit smoking",
      es: "Dejar de fumar"
    },
    
    description: {
      de: "Rauchen ist der größte vermeidbare Risikofaktor für vorzeitigen Tod. Die gesundheitlichen Vorteile beginnen bereits 20 Minuten nach der letzten Zigarette.",
      en: "Smoking is the largest preventable risk factor for premature death. Health benefits begin just 20 minutes after the last cigarette.",
      es: "Fumar es el mayor factor de riesgo prevenible de muerte prematura. Los beneficios para la salud comienzan solo 20 minutos después del último cigarrillo."
    },
    
    potential_gain: {
      light: 8,
      moderate: 10,
      heavy: 12
    },
    
    priority: "critical",
    difficulty: "very_hard",
    timeframe: "3-6 months",
    
    why_it_matters: {
      de: [
        "Nach 20 Minuten: Puls und Blutdruck normalisieren sich",
        "Nach 12 Stunden: CO-Spiegel im Blut auf Normalniveau",
        "Nach 3 Monaten: Lungenfunktion verbessert sich um bis zu 30%",
        "Nach 1 Jahr: Herzinfarkt-Risiko halbiert sich",
        "Nach 10 Jahren: Lungenkrebs-Risiko halbiert sich"
      ],
      en: [
        "After 20 minutes: Pulse and blood pressure normalize",
        "After 12 hours: CO levels in blood return to normal",
        "After 3 months: Lung function improves by up to 30%",
        "After 1 year: Heart attack risk is halved",
        "After 10 years: Lung cancer risk is halved"
      ],
      es: [
        "Después de 20 minutos: Pulso y presión arterial se normalizan",
        "Después de 12 horas: Niveles de CO en sangre vuelven a normal",
        "Después de 3 meses: Función pulmonar mejora hasta 30%",
        "Después de 1 año: Riesgo de infarto se reduce a la mitad",
        "Después de 10 años: Riesgo de cáncer de pulmón se reduce a la mitad"
      ]
    },
    
    action_steps: {
      de: [
        "Setze einen konkreten Stopp-Termin (nicht 'irgendwann')",
        "Sprich mit deinem Arzt über medikamentöse Unterstützung (Nikotinersatz, Vareniclin, Bupropion)",
        "Identifiziere deine Trigger-Situationen (Kaffee, Stress, Alkohol) und entwickle Alternativen",
        "Nutze Verhaltenstherapie oder Raucherentwöhnungs-Apps (z.B. Smoke Free)",
        "Suche dir einen Quit-Buddy oder schließe dich einer Selbsthilfegruppe an",
        "Plane für Entzugserscheinungen (Reizbarkeit, Schlafstörungen - dauern 2-4 Wochen)",
        "Belohne dich für Meilensteine (1 Tag, 1 Woche, 1 Monat rauchfrei)"
      ],
      en: [
        "Set a concrete quit date (not 'someday')",
        "Talk to your doctor about medication support (nicotine replacement, varenicline, bupropion)",
        "Identify your trigger situations (coffee, stress, alcohol) and develop alternatives",
        "Use behavioral therapy or smoking cessation apps (e.g., Smoke Free)",
        "Find a quit buddy or join a support group",
        "Plan for withdrawal symptoms (irritability, sleep problems - last 2-4 weeks)",
        "Reward yourself for milestones (1 day, 1 week, 1 month smoke-free)"
      ],
      es: [
        "Establece una fecha de abandono concreta (no 'algún día')",
        "Habla con tu médico sobre apoyo medicamentoso (reemplazo de nicotina, vareniclina, bupropión)",
        "Identifica tus situaciones desencadenantes (café, estrés, alcohol) y desarrolla alternativas",
        "Usa terapia conductual o apps para dejar de fumar (p.ej., Smoke Free)",
        "Encuentra un compañero de abandono o únete a un grupo de apoyo",
        "Planifica para síntomas de abstinencia (irritabilidad, problemas de sueño - duran 2-4 semanas)",
        "Recompénsate por hitos (1 día, 1 semana, 1 mes sin fumar)"
      ]
    },
    
    scientific_basis: {
      de: "Framingham Heart Study, WHO Report on Tobacco Control, Cochrane Reviews on Smoking Cessation",
      en: "Framingham Heart Study, WHO Report on Tobacco Control, Cochrane Reviews on Smoking Cessation",
      es: "Framingham Heart Study, Informe de la OMS sobre Control del Tabaco, Revisiones Cochrane sobre Cesación del Tabaquismo"
    }
  },

  // ========================================
  // GEWICHT / BMI
  // ========================================
  
  weight_loss: {
    id: "weight_loss",
    factor: "metabolic",
    
    trigger: (answers, meta) => {
      if (!meta.meta_height || !meta.meta_weight) return false;
      const bmi = meta.meta_weight / Math.pow(meta.meta_height / 100, 2);
      return bmi > 27;
    },
    
    title: {
      de: "Gewicht reduzieren",
      en: "Reduce weight",
      es: "Reducir peso"
    },
    
    description: {
      de: "Übergewicht erhöht das Risiko für Diabetes, Herz-Kreislauf-Erkrankungen und viele Krebsarten. Bereits 5-10% Gewichtsverlust bringen messbare gesundheitliche Vorteile.",
      en: "Excess weight increases risk of diabetes, cardiovascular disease and many cancers. Even 5-10% weight loss brings measurable health benefits.",
      es: "El exceso de peso aumenta el riesgo de diabetes, enfermedad cardiovascular y muchos cánceres. Incluso una pérdida del 5-10% del peso trae beneficios medibles para la salud."
    },
    
    potential_gain: {
      moderate: 3,
      high: 5,
      severe: 7
    },
    
    priority: "high",
    difficulty: "hard",
    timeframe: "6-12 months",
    
    why_it_matters: {
      de: [
        "5% Gewichtsverlust: Blutdruck sinkt durchschnittlich 5 mmHg",
        "7% Gewichtsverlust: Diabetes-Risiko sinkt um 58%",
        "10% Gewichtsverlust: Entzündungsmarker normalisieren sich",
        "Jedes verlorene Kilo reduziert Belastung auf Knie um 4 kg",
        "Verbesserung von Schlafapnoe und Leberfettgehalt"
      ],
      en: [
        "5% weight loss: Blood pressure drops average 5 mmHg",
        "7% weight loss: Diabetes risk drops by 58%",
        "10% weight loss: Inflammatory markers normalize",
        "Every lost kg reduces knee load by 4 kg",
        "Improvement in sleep apnea and liver fat content"
      ],
      es: [
        "5% de pérdida de peso: Presión arterial baja promedio 5 mmHg",
        "7% de pérdida de peso: Riesgo de diabetes baja 58%",
        "10% de pérdida de peso: Marcadores inflamatorios se normalizan",
        "Cada kg perdido reduce carga en rodillas en 4 kg",
        "Mejora de apnea del sueño y contenido de grasa hepática"
      ]
    },
    
    action_steps: {
      de: [
        "Setze realistische Ziele: 0.5-1 kg pro Woche (nicht mehr!)",
        "Führe ein Ernährungstagebuch - Bewusstsein ist der erste Schritt",
        "Reduziere Kalorienzufuhr um 500 kcal/Tag (= 0.5 kg/Woche)",
        "Fokus auf Sättigung: Protein (1.6g/kg Körpergewicht), Ballaststoffe (30g/Tag)",
        "Vermeide flüssige Kalorien (Softdrinks, Säfte, Alkohol)",
        "Meal Prep: Plane 3-4 Mahlzeiten pro Woche vor",
        "Kombiniere mit Krafttraining (erhält Muskelmasse während Diät)",
        "Erwäge ärztliche Unterstützung bei BMI >35 (Medikamente, Ernährungsberatung)"
      ],
      en: [
        "Set realistic goals: 0.5-1 kg per week (no more!)",
        "Keep a food diary - awareness is the first step",
        "Reduce calorie intake by 500 kcal/day (= 0.5 kg/week)",
        "Focus on satiety: Protein (1.6g/kg body weight), fiber (30g/day)",
        "Avoid liquid calories (soft drinks, juices, alcohol)",
        "Meal prep: Plan 3-4 meals per week in advance",
        "Combine with strength training (preserves muscle mass during diet)",
        "Consider medical support at BMI >35 (medications, nutrition counseling)"
      ],
      es: [
        "Establece metas realistas: 0.5-1 kg por semana (¡no más!)",
        "Lleva un diario alimenticio - la conciencia es el primer paso",
        "Reduce ingesta calórica en 500 kcal/día (= 0.5 kg/semana)",
        "Enfócate en saciedad: Proteína (1.6g/kg peso corporal), fibra (30g/día)",
        "Evita calorías líquidas (refrescos, jugos, alcohol)",
        "Meal prep: Planifica 3-4 comidas por semana con anticipación",
        "Combina con entrenamiento de fuerza (preserva masa muscular durante dieta)",
        "Considera apoyo médico con IMC >35 (medicamentos, asesoramiento nutricional)"
      ]
    },
    
    scientific_basis: {
      de: "Diabetes Prevention Program, Look AHEAD Study, Cochrane Reviews on Weight Loss Interventions",
      en: "Diabetes Prevention Program, Look AHEAD Study, Cochrane Reviews on Weight Loss Interventions",
      es: "Programa de Prevención de Diabetes, Estudio Look AHEAD, Revisiones Cochrane sobre Intervenciones de Pérdida de Peso"
    }
  },

  // ========================================
  // BEWEGUNG / FITNESS
  // ========================================
  
  exercise_start: {
    id: "exercise_start",
    factor: "fitness",
    
    trigger: (answers) => {
      return answers.fitness_01 === false;
    },
    
    title: {
      de: "Mit Sport beginnen",
      en: "Start exercising",
      es: "Comenzar a hacer ejercicio"
    },
    
    description: {
      de: "Regelmäßige körperliche Aktivität ist einer der wirksamsten Lebensverlängerer. 150 Min moderate Bewegung pro Woche können dein Leben um 3-7 Jahre verlängern.",
      en: "Regular physical activity is one of the most effective life extenders. 150 min of moderate exercise per week can extend your life by 3-7 years.",
      es: "La actividad física regular es uno de los extensores de vida más efectivos. 150 min de ejercicio moderado por semana pueden extender tu vida 3-7 años."
    },
    
    potential_gain: 5,
    
    priority: "high",
    difficulty: "moderate",
    timeframe: "3 months",
    
    why_it_matters: {
      de: [
        "Reduziert kardiovaskuläres Risiko um 30-40%",
        "Senkt Diabetes-Risiko um 50%",
        "Verbessert Insulinsensitivität bereits nach 2 Wochen",
        "Stärkt Immunsystem und reduziert Entzündungen",
        "Schützt vor Demenz und kognitiver Degeneration",
        "Verbessert Schlafqualität und mentale Gesundheit"
      ],
      en: [
        "Reduces cardiovascular risk by 30-40%",
        "Lowers diabetes risk by 50%",
        "Improves insulin sensitivity after just 2 weeks",
        "Strengthens immune system and reduces inflammation",
        "Protects against dementia and cognitive decline",
        "Improves sleep quality and mental health"
      ],
      es: [
        "Reduce riesgo cardiovascular en 30-40%",
        "Reduce riesgo de diabetes en 50%",
        "Mejora sensibilidad a insulina después de solo 2 semanas",
        "Fortalece sistema inmunológico y reduce inflamación",
        "Protege contra demencia y deterioro cognitivo",
        "Mejora calidad del sueño y salud mental"
      ]
    },
    
    action_steps: {
      de: [
        "WHO-Empfehlung: 150 Min moderate ODER 75 Min intensive Bewegung/Woche",
        "Starte klein: 10 Min Spaziergang täglich, steigere wöchentlich um 5 Min",
        "Finde Aktivitäten die dir Spaß machen (Tanzen, Schwimmen, Radfahren, Wandern)",
        "Kombiniere: 2x/Woche Krafttraining + 3x/Woche Ausdauer",
        "NEAT erhöhen: Treppe statt Aufzug, zu Fuß zum Einkaufen, Gartenarbeit",
        "Tracke deine Schritte: Ziel 7.000-10.000 Schritte/Tag",
        "Suche dir einen Trainingspartner oder schließe dich einer Gruppe an",
        "Bei Vorerkrankungen: Check-up beim Arzt vor Start"
      ],
      en: [
        "WHO recommendation: 150 min moderate OR 75 min vigorous exercise/week",
        "Start small: 10 min walk daily, increase weekly by 5 min",
        "Find activities you enjoy (dancing, swimming, cycling, hiking)",
        "Combine: 2x/week strength training + 3x/week cardio",
        "Increase NEAT: Stairs instead of elevator, walk to shops, gardening",
        "Track your steps: Goal 7,000-10,000 steps/day",
        "Find a workout partner or join a group",
        "With pre-existing conditions: Medical check-up before starting"
      ],
      es: [
        "Recomendación OMS: 150 min ejercicio moderado O 75 min intenso/semana",
        "Comienza pequeño: 10 min caminata diaria, aumenta semanalmente 5 min",
        "Encuentra actividades que disfrutes (bailar, nadar, ciclismo, senderismo)",
        "Combina: 2x/semana entrenamiento de fuerza + 3x/semana cardio",
        "Aumenta NEAT: Escaleras en vez de ascensor, caminar a tiendas, jardinería",
        "Rastrea tus pasos: Meta 7,000-10,000 pasos/día",
        "Encuentra un compañero de entrenamiento o únete a un grupo",
        "Con condiciones preexistentes: Chequeo médico antes de comenzar"
      ]
    },
    
    scientific_basis: {
      de: "WHO Physical Activity Guidelines, Lancet Physical Activity Series, Copenhagen City Heart Study",
      en: "WHO Physical Activity Guidelines, Lancet Physical Activity Series, Copenhagen City Heart Study",
      es: "Directrices de Actividad Física de la OMS, Serie de Actividad Física de Lancet, Copenhagen City Heart Study"
    }
  },

  // ========================================
  // MEDITERRANE ERNÄHRUNG
  // ========================================
  
  mediterranean_diet: {
    id: "mediterranean_diet",
    factor: "diet",
    
    trigger: (answers) => {
      const medScore = [
        answers.diet_01,
        answers.diet_03,
        answers.diet_04,
        answers.diet_07,
        answers.diet_08
      ].filter(a => a === true).length;
      
      return medScore < 3;
    },
    
    title: {
      de: "Mediterrane Ernährung umsetzen",
      en: "Adopt Mediterranean diet",
      es: "Adoptar dieta mediterránea"
    },
    
    description: {
      de: "Die mediterrane Ernährung ist das am besten untersuchte Ernährungsmuster zur Lebensverlängerung. Sie reduziert kardiovaskuläre Ereignisse um 30% und Gesamtmortalität um 25%.",
      en: "The Mediterranean diet is the most studied dietary pattern for life extension. It reduces cardiovascular events by 30% and all-cause mortality by 25%.",
      es: "La dieta mediterránea es el patrón dietético más estudiado para extensión de vida. Reduce eventos cardiovasculares en 30% y mortalidad total en 25%."
    },
    
    potential_gain: 4,
    
    priority: "high",
    difficulty: "moderate",
    timeframe: "3-6 months",
    
    why_it_matters: {
      de: [
        "30% weniger kardiovaskuläre Ereignisse (PREDIMED-Studie)",
        "Reduziert Entzündungsmarker und oxidativen Stress",
        "Verbessert Blutfettwerte (HDL hoch, LDL runter)",
        "Schützt vor Typ-2-Diabetes (40% Risikoreduktion)",
        "Unterstützt gesunde Darmbakterien (Mikrobiom)",
        "Verzögert kognitiven Abbau und Alzheimer-Risiko"
      ],
      en: [
        "30% fewer cardiovascular events (PREDIMED study)",
        "Reduces inflammatory markers and oxidative stress",
        "Improves blood lipids (HDL up, LDL down)",
        "Protects against type 2 diabetes (40% risk reduction)",
        "Supports healthy gut bacteria (microbiome)",
        "Delays cognitive decline and Alzheimer's risk"
      ],
      es: [
        "30% menos eventos cardiovasculares (estudio PREDIMED)",
        "Reduce marcadores inflamatorios y estrés oxidativo",
        "Mejora lípidos en sangre (HDL arriba, LDL abajo)",
        "Protege contra diabetes tipo 2 (40% reducción de riesgo)",
        "Apoya bacterias intestinales saludables (microbioma)",
        "Retrasa deterioro cognitivo y riesgo de Alzheimer"
      ]
    },
    
    action_steps: {
      de: [
        "Olivenöl als Hauptfettquelle: 3-4 EL täglich zum Kochen und Salat",
        "Gemüse: Minimum 2 Portionen täglich (1 Portion = 1 Handvoll)",
        "Obst: 1-2 Portionen täglich, idealerweise regional und saisonal",
        "Nüsse: 30g täglich (1 Handvoll ungesalzen)",
        "Fisch: 2-3x/Woche fettreicher Fisch (Lachs, Makrele, Sardinen)",
        "Hülsenfrüchte: 2-3x/Woche Linsen, Kichererbsen, Bohnen",
        "Vollkorn statt Weißmehl: Pasta, Brot, Reis",
        "Reduziere: Rotes Fleisch (<1x/Woche), verarbeitetes Fleisch, Zucker",
        "Kräuter statt Salz: Rosmarin, Thymian, Oregano",
        "Gemeinsame Mahlzeiten: Sozialer Aspekt ist Teil des Konzepts"
      ],
      en: [
        "Olive oil as main fat source: 3-4 tbsp daily for cooking and salad",
        "Vegetables: Minimum 2 portions daily (1 portion = 1 handful)",
        "Fruit: 1-2 portions daily, ideally local and seasonal",
        "Nuts: 30g daily (1 handful unsalted)",
        "Fish: 2-3x/week fatty fish (salmon, mackerel, sardines)",
        "Legumes: 2-3x/week lentils, chickpeas, beans",
        "Whole grain instead of white flour: Pasta, bread, rice",
        "Reduce: Red meat (<1x/week), processed meat, sugar",
        "Herbs instead of salt: Rosemary, thyme, oregano",
        "Shared meals: Social aspect is part of the concept"
      ],
      es: [
        "Aceite de oliva como principal fuente de grasa: 3-4 cucharadas diarias para cocinar y ensalada",
        "Verduras: Mínimo 2 porciones diarias (1 porción = 1 puñado)",
        "Fruta: 1-2 porciones diarias, idealmente local y de temporada",
        "Frutos secos: 30g diarios (1 puñado sin sal)",
        "Pescado: 2-3x/semana pescado graso (salmón, caballa, sardinas)",
        "Legumbres: 2-3x/semana lentejas, garbanzos, frijoles",
        "Integral en vez de harina blanca: Pasta, pan, arroz",
        "Reduce: Carne roja (<1x/semana), carne procesada, azúcar",
        "Hierbas en vez de sal: Romero, tomillo, orégano",
        "Comidas compartidas: Aspecto social es parte del concepto"
      ]
    },
    
    scientific_basis: {
      de: "PREDIMED Study, Lyon Heart Study, Mediterranean Diet Meta-Analysis (Sofi et al.)",
      en: "PREDIMED Study, Lyon Heart Study, Mediterranean Diet Meta-Analysis (Sofi et al.)",
      es: "Estudio PREDIMED, Lyon Heart Study, Meta-análisis de Dieta Mediterránea (Sofi et al.)"
    }
  },

  // ========================================
  // ALKOHOL REDUZIEREN
  // ========================================
  
  alcohol_reduce: {
    id: "alcohol_reduce",
    factor: "lifestyle_alcohol",
    
    trigger: (answers) => {
      return answers.alcohol_02 === 'four_five' || 
             answers.alcohol_02 === 'six_plus' ||
             answers.alcohol_03 === true;
    },
    
    title: {
      de: "Alkoholkonsum reduzieren",
      en: "Reduce alcohol consumption",
      es: "Reducir consumo de alcohol"
    },
    
    description: {
      de: "Hoher Alkoholkonsum erhöht das Risiko für über 60 Erkrankungen. Die Reduktion auf maximal 1 Drink/Tag bringt erhebliche gesundheitliche Vorteile.",
      en: "High alcohol consumption increases risk for over 60 diseases. Reducing to maximum 1 drink/day brings significant health benefits.",
      es: "El consumo alto de alcohol aumenta el riesgo de más de 60 enfermedades. Reducir a máximo 1 bebida/día trae beneficios significativos para la salud."
    },
    
    potential_gain: {
      moderate: 2,
      high: 4,
      severe: 6
    },
    
    priority: "high",
    difficulty: "hard",
    timeframe: "3-6 months",
    
    why_it_matters: {
      de: [
        "Reduziert Risiko für Lebererkrankungen (Fettleber, Zirrhose)",
        "Senkt Blutdruck durchschnittlich 5-10 mmHg",
        "Reduziert Risiko für 7 Krebsarten (Mund, Rachen, Leber, Brust, Darm)",
        "Verbessert Schlafqualität (Alkohol stört REM-Schlaf)",
        "Unterstützt Gewichtsabnahme (Alkohol = 7 kcal/g)",
        "Reduziert Risiko für Vorhofflimmern und Schlaganfall"
      ],
      en: [
        "Reduces risk of liver disease (fatty liver, cirrhosis)",
        "Lowers blood pressure average 5-10 mmHg",
        "Reduces risk for 7 cancer types (mouth, throat, liver, breast, colon)",
        "Improves sleep quality (alcohol disrupts REM sleep)",
        "Supports weight loss (alcohol = 7 kcal/g)",
        "Reduces risk of atrial fibrillation and stroke"
      ],
      es: [
        "Reduce riesgo de enfermedad hepática (hígado graso, cirrosis)",
        "Baja presión arterial promedio 5-10 mmHg",
        "Reduce riesgo de 7 tipos de cáncer (boca, garganta, hígado, mama, colon)",
        "Mejora calidad del sueño (alcohol interrumpe sueño REM)",
        "Apoya pérdida de peso (alcohol = 7 kcal/g)",
        "Reduce riesgo de fibrilación auricular y accidente cerebrovascular"
      ]
    },
    
    action_steps: {
      de: [
        "Setze klare Limits: Max 1 Drink/Tag (Frauen) oder 2 Drinks/Tag (Männer)",
        "Führe alkoholfreie Tage ein: Minimum 2-3 Tage/Woche ohne Alkohol",
        "Trinke langsam: 1 Glas Wasser zwischen jedem alkoholischen Getränk",
        "Identifiziere Trigger: Stress, soziale Events, Gewohnheiten",
        "Finde Alternativen: Alkoholfreies Bier/Wein, Mocktails, Tee",
        "Vermeide 'Binge Drinking': Nie mehr als 4-5 Drinks an einem Tag",
        "Tracke deinen Konsum: App oder Tagebuch (oft unterschätzt!)",
        "Bei Schwierigkeiten: Suchtberatung oder Selbsthilfegruppe"
      ],
      en: [
        "Set clear limits: Max 1 drink/day (women) or 2 drinks/day (men)",
        "Introduce alcohol-free days: Minimum 2-3 days/week without alcohol",
        "Drink slowly: 1 glass of water between each alcoholic drink",
        "Identify triggers: Stress, social events, habits",
        "Find alternatives: Non-alcoholic beer/wine, mocktails, tea",
        "Avoid binge drinking: Never more than 4-5 drinks in one day",
        "Track your consumption: App or diary (often underestimated!)",
        "If difficulties: Addiction counseling or support group"
      ],
      es: [
        "Establece límites claros: Máx 1 bebida/día (mujeres) o 2 bebidas/día (hombres)",
        "Introduce días sin alcohol: Mínimo 2-3 días/semana sin alcohol",
        "Bebe despacio: 1 vaso de agua entre cada bebida alcohólica",
        "Identifica desencadenantes: Estrés, eventos sociales, hábitos",
        "Encuentra alternativas: Cerveza/vino sin alcohol, mocktails, té",
        "Evita 'binge drinking': Nunca más de 4-5 bebidas en un día",
        "Rastrea tu consumo: App o diario (¡a menudo subestimado!)",
        "Si hay dificultades: Asesoramiento sobre adicciones o grupo de apoyo"
      ]
    },
    
    scientific_basis: {
      de: "Global Burden of Disease Study, Lancet Alcohol Report 2018, WHO Alcohol Guidelines",
      en: "Global Burden of Disease Study, Lancet Alcohol Report 2018, WHO Alcohol Guidelines",
      es: "Estudio Global Burden of Disease, Informe de Alcohol de Lancet 2018, Directrices de Alcohol de la OMS"
    }
  },

  // ========================================
  // SCHLAF VERBESSERN
  // ========================================
  
  sleep_improve: {
    id: "sleep_improve",
    factor: "sleep",
    
    trigger: (answers) => {
      return answers.sleep_01 === false || answers.sleep_02 === false;
    },
    
    title: {
      de: "Schlaf verbessern",
      en: "Improve sleep",
      es: "Mejorar sueño"
    },
    
    description: {
      de: "Chronischer Schlafmangel erhöht das Risiko für Herz-Kreislauf-Erkrankungen, Diabetes und frühzeitigen Tod. 7-8 Stunden Schlaf sind optimal für Langlebigkeit.",
      en: "Chronic sleep deprivation increases risk of cardiovascular disease, diabetes and premature death. 7-8 hours of sleep are optimal for longevity.",
      es: "La privación crónica del sueño aumenta el riesgo de enfermedad cardiovascular, diabetes y muerte prematura. 7-8 horas de sueño son óptimas para longevidad."
    },
    
    potential_gain: 3,
    
    priority: "medium",
    difficulty: "moderate",
    timeframe: "1-3 months",
    
    why_it_matters: {
      de: [
        "Zu wenig Schlaf (<6h) erhöht Herzinfarkt-Risiko um 48%",
        "Schlafmangel stört Glukosestoffwechsel (Diabetes-Risiko)",
        "Fördert Entzündungsprozesse und schwächt Immunsystem",
        "Beeinträchtigt kognitive Funktionen und Gedächtnis",
        "Erhöht Risiko für Depression und Angststörungen",
        "Zu viel Schlaf (>9h) ist ebenfalls mit höherer Mortalität assoziiert"
      ],
      en: [
        "Too little sleep (<6h) increases heart attack risk by 48%",
        "Sleep deprivation disrupts glucose metabolism (diabetes risk)",
        "Promotes inflammatory processes and weakens immune system",
        "Impairs cognitive functions and memory",
        "Increases risk of depression and anxiety disorders",
        "Too much sleep (>9h) is also associated with higher mortality"
      ],
      es: [
        "Muy poco sueño (<6h) aumenta riesgo de infarto en 48%",
        "Privación del sueño interrumpe metabolismo de glucosa (riesgo de diabetes)",
        "Promueve procesos inflamatorios y debilita sistema inmunológico",
        "Deteriora funciones cognitivas y memoria",
        "Aumenta riesgo de depresión y trastornos de ansiedad",
        "Demasiado sueño (>9h) también está asociado con mayor mortalidad"
      ]
    },
    
    action_steps: {
      de: [
        "Regelmäßiger Schlaf-Wach-Rhythmus: Gleiche Zeiten auch am Wochenende",
        "Schlafzimmer: Dunkel (Blackout-Vorhänge), kühl (16-19°C), ruhig",
        "Kein Bildschirm 1h vor dem Schlaf (Blaulicht unterdrückt Melatonin)",
        "Koffein nur bis 14 Uhr (Halbwertszeit 5-6 Stunden)",
        "Kein Alkohol als Schlafhilfe (stört REM-Schlaf)",
        "Leichtes Abendessen: Minimum 2-3h vor Schlafenszeit",
        "Entspannungsroutine: Lesen, Meditation, warmes Bad",
        "Bei anhaltenden Problemen: Arzt aufsuchen (Schlafapnoe ausschließen)"
      ],
      en: [
        "Regular sleep-wake rhythm: Same times even on weekends",
        "Bedroom: Dark (blackout curtains), cool (16-19°C), quiet",
        "No screens 1h before sleep (blue light suppresses melatonin)",
        "Caffeine only until 2pm (half-life 5-6 hours)",
        "No alcohol as sleep aid (disrupts REM sleep)",
        "Light dinner: Minimum 2-3h before bedtime",
        "Relaxation routine: Reading, meditation, warm bath",
        "If persistent problems: See doctor (rule out sleep apnea)"
      ],
      es: [
        "Ritmo sueño-vigilia regular: Mismos horarios incluso fines de semana",
        "Dormitorio: Oscuro (cortinas opacas), fresco (16-19°C), silencioso",
        "Sin pantallas 1h antes de dormir (luz azul suprime melatonina)",
        "Cafeína solo hasta las 14h (vida media 5-6 horas)",
        "Sin alcohol como ayuda para dormir (interrumpe sueño REM)",
        "Cena ligera: Mínimo 2-3h antes de acostarse",
        "Rutina de relajación: Lectura, meditación, baño caliente",
        "Si problemas persistentes: Ver médico (descartar apnea del sueño)"
      ]
    },
    
    scientific_basis: {
      de: "Sleep Heart Health Study, UK Biobank Sleep Analysis, American Academy of Sleep Medicine Guidelines",
      en: "Sleep Heart Health Study, UK Biobank Sleep Analysis, American Academy of Sleep Medicine Guidelines",
      es: "Sleep Heart Health Study, Análisis de Sueño de UK Biobank, Directrices de la Academia Americana de Medicina del Sueño"
    }
  },

  // ========================================
  // BLUTDRUCK KONTROLLIEREN
  // ========================================
  
  blood_pressure_control: {
    id: "blood_pressure_control",
    factor: "cardiovascular",
    
    trigger: (answers) => {
      return answers.cardio_01 === 'yes' && answers.cardio_02 === false;
    },
    
    title: {
      de: "Blutdruck besser kontrollieren",
      en: "Better control blood pressure",
      es: "Controlar mejor la presión arterial"
    },
    
    description: {
      de: "Unkontrollierter Bluthochdruck ist ein 'stiller Killer'. Jede Senkung um 10 mmHg reduziert kardiovaskuläre Ereignisse um 20% und Schlaganfall-Risiko um 30%.",
      en: "Uncontrolled high blood pressure is a 'silent killer'. Every 10 mmHg reduction decreases cardiovascular events by 20% and stroke risk by 30%.",
      es: "La presión arterial alta no controlada es un 'asesino silencioso'. Cada reducción de 10 mmHg disminuye eventos cardiovasculares en 20% y riesgo de accidente cerebrovascular en 30%."
    },
    
    potential_gain: 5,
    
    priority: "critical",
    difficulty: "moderate",
    timeframe: "3-6 months",
    
    why_it_matters: {
      de: [
        "Zielwert: <140/90 mmHg (bei Diabetes/CKD: <130/80 mmHg)",
        "10 mmHg Senkung = 20% weniger kardiovaskuläre Events",
        "30% weniger Schlaganfall-Risiko",
        "25% weniger Herzinfarkt-Risiko",
        "Schützt Nieren, Augen und Gehirn vor Schäden",
        "Selbst bei leichter Hypertonie (140-159) besteht erhöhtes Risiko"
      ],
      en: [
        "Target value: <140/90 mmHg (with diabetes/CKD: <130/80 mmHg)",
        "10 mmHg reduction = 20% fewer cardiovascular events",
        "30% less stroke risk",
        "25% less heart attack risk",
        "Protects kidneys, eyes and brain from damage",
        "Even with mild hypertension (140-159) there is increased risk"
      ],
      es: [
        "Valor objetivo: <140/90 mmHg (con diabetes/ERC: <130/80 mmHg)",
        "Reducción de 10 mmHg = 20% menos eventos cardiovasculares",
        "30% menos riesgo de accidente cerebrovascular",
        "25% menos riesgo de infarto",
        "Protege riñones, ojos y cerebro del daño",
        "Incluso con hipertensión leve (140-159) hay riesgo aumentado"
      ]
    },
    
    action_steps: {
      de: [
        "Medikamente regelmäßig nehmen (keine Selbstmedikation absetzen!)",
        "Salzreduktion: <5g/Tag (1 TL), vermeide verarbeitete Lebensmittel",
        "DASH-Diät: Viel Gemüse, Obst, Vollkorn, fettarme Milchprodukte",
        "Kalium erhöhen: Bananen, Kartoffeln, Spinat, Avocado (3500mg/Tag)",
        "Gewichtsreduktion: Jedes verlorene Kilo = 1 mmHg weniger",
        "Sport: 150 Min/Woche senkt BD um 5-8 mmHg",
        "Alkohol limitieren: Max 1-2 Drinks/Tag",
        "Stress reduzieren: Meditation, Yoga, Atemübungen",
        "Heimblutdruckmessung: 2x täglich zur gleichen Zeit, Logbuch führen",
        "Regelmäßige Kontrollen beim Arzt: Alle 3-6 Monate"
      ],
      en: [
        "Take medication regularly (don't stop self-medication!)",
        "Salt reduction: <5g/day (1 tsp), avoid processed foods",
        "DASH diet: Lots of vegetables, fruit, whole grains, low-fat dairy",
        "Increase potassium: Bananas, potatoes, spinach, avocado (3500mg/day)",
        "Weight reduction: Every lost kg = 1 mmHg less",
        "Exercise: 150 min/week lowers BP by 5-8 mmHg",
        "Limit alcohol: Max 1-2 drinks/day",
        "Reduce stress: Meditation, yoga, breathing exercises",
        "Home blood pressure monitoring: 2x daily at same time, keep log",
        "Regular doctor checks: Every 3-6 months"
      ],
      es: [
        "Tomar medicación regularmente (¡no suspender automedicación!)",
        "Reducción de sal: <5g/día (1 cucharadita), evitar alimentos procesados",
        "Dieta DASH: Muchas verduras, frutas, granos integrales, lácteos bajos en grasa",
        "Aumentar potasio: Plátanos, papas, espinacas, aguacate (3500mg/día)",
        "Reducción de peso: Cada kg perdido = 1 mmHg menos",
        "Ejercicio: 150 min/semana reduce PA en 5-8 mmHg",
        "Limitar alcohol: Máx 1-2 bebidas/día",
        "Reducir estrés: Meditación, yoga, ejercicios de respiración",
        "Monitoreo casero de presión arterial: 2x diario a misma hora, llevar registro",
        "Controles médicos regulares: Cada 3-6 meses"
      ]
    },
    
    scientific_basis: {
      de: "SPRINT Trial, Framingham Heart Study, Cochrane Hypertension Reviews, ESC/ESH Guidelines",
      en: "SPRINT Trial, Framingham Heart Study, Cochrane Hypertension Reviews, ESC/ESH Guidelines",
      es: "Ensayo SPRINT, Framingham Heart Study, Revisiones Cochrane de Hipertensión, Directrices ESC/ESH"
    }
  },

  // ========================================
  // SOZIALE KONTAKTE
  // ========================================
  
  social_connections: {
    id: "social_connections",
    factor: "social",
    
    trigger: (answers) => {
      return answers.social_01 === true || answers.social_02 === false;
    },
    
    title: {
      de: "Soziale Kontakte ausbauen",
      en: "Expand social connections",
      es: "Expandir conexiones sociales"
    },
    
    description: {
      de: "Soziale Isolation ist genauso schädlich wie 15 Zigaretten pro Tag. Starke soziale Bindungen erhöhen die Lebenserwartung um bis zu 50%.",
      en: "Social isolation is as harmful as 15 cigarettes per day. Strong social bonds increase life expectancy by up to 50%.",
      es: "El aislamiento social es tan dañino como 15 cigarrillos por día. Vínculos sociales fuertes aumentan la esperanza de vida hasta 50%."
    },
    
    potential_gain: 4,
    
    priority: "high",
    difficulty: "moderate",
    timeframe: "6-12 months",
    
    why_it_matters: {
      de: [
        "50% höhere Überlebenswahrscheinlichkeit mit starken sozialen Bindungen",
        "Reduziert Risiko für Depression und Angststörungen",
        "Stärkt Immunsystem (weniger Entzündungsmarker)",
        "Senkt Blutdruck und Stresshormone",
        "Schützt vor Demenz und kognitivem Abbau",
        "Fördert gesundheitsbewusstes Verhalten (soziale Kontrolle)"
      ],
      en: [
        "50% higher survival probability with strong social bonds",
        "Reduces risk of depression and anxiety disorders",
        "Strengthens immune system (fewer inflammatory markers)",
        "Lowers blood pressure and stress hormones",
        "Protects against dementia and cognitive decline",
        "Promotes health-conscious behavior (social control)"
      ],
      es: [
        "50% mayor probabilidad de supervivencia con vínculos sociales fuertes",
        "Reduce riesgo de depresión y trastornos de ansiedad",
        "Fortalece sistema inmunológico (menos marcadores inflamatorios)",
        "Baja presión arterial y hormonas del estrés",
        "Protege contra demencia y deterioro cognitivo",
        "Promueve comportamiento consciente de la salud (control social)"
      ]
    },
    
    action_steps: {
      de: [
        "Regelmäßige Kontakte: Minimum 1x/Woche persönliche Treffen",
        "Reaktiviere alte Freundschaften: Melde dich bei alten Bekannten",
        "Tritt einem Verein bei: Sport, Chor, Ehrenamt, Hobby-Gruppe",
        "Nachbarschaft: Lerne deine Nachbarn kennen, organisiere gemeinsame Events",
        "Freiwilligenarbeit: Hilft anderen UND dir (doppelter Effekt)",
        "Gruppenaktivitäten: Tanzkurs, Wandergruppe, Sprachkurs",
        "Qualität vor Quantität: Wenige enge Freunde > viele oberflächliche",
        "Digitale Kontakte ergänzen, nicht ersetzen persönliche Treffen",
        "Bei starker Einsamkeit: Therapeutische Unterstützung suchen"
      ],
      en: [
        "Regular contacts: Minimum 1x/week personal meetings",
        "Reactivate old friendships: Reach out to old acquaintances",
        "Join a club: Sports, choir, volunteering, hobby group",
        "Neighborhood: Get to know your neighbors, organize joint events",
        "Volunteer work: Helps others AND you (double effect)",
        "Group activities: Dance class, hiking group, language course",
        "Quality over quantity: Few close friends > many superficial ones",
        "Digital contacts supplement, don't replace personal meetings",
        "With severe loneliness: Seek therapeutic support"
      ],
      es: [
        "Contactos regulares: Mínimo 1x/semana reuniones personales",
        "Reactiva viejas amistades: Contacta viejos conocidos",
        "Únete a un club: Deportes, coro, voluntariado, grupo de hobby",
        "Vecindario: Conoce a tus vecinos, organiza eventos conjuntos",
        "Trabajo voluntario: Ayuda a otros Y a ti (efecto doble)",
        "Actividades grupales: Clase de baile, grupo de senderismo, curso de idiomas",
        "Calidad sobre cantidad: Pocos amigos cercanos > muchos superficiales",
        "Contactos digitales complementan, no reemplazan reuniones personales",
        "Con soledad severa: Buscar apoyo terapéutico"
      ]
    },
    
    scientific_basis: {
      de: "Harvard Study of Adult Development, Holt-Lunstad Meta-Analysis 2010, Alameda County Study",
      en: "Harvard Study of Adult Development, Holt-Lunstad Meta-Analysis 2010, Alameda County Study",
      es: "Harvard Study of Adult Development, Meta-análisis de Holt-Lunstad 2010, Alameda County Study"
    }
  },

  // ========================================
  // STRESS MANAGEMENT
  // ========================================
  
  stress_reduce: {
    id: "stress_reduce",
    factor: "stress",
    
    trigger: (answers) => {
      return answers.stress_01 === true || answers.stress_02 === false;
    },
    
    title: {
      de: "Stress reduzieren",
      en: "Reduce stress",
      es: "Reducir estrés"
    },
    
    description: {
      de: "Chronischer Stress erhöht das Risiko für Herz-Kreislauf-Erkrankungen um 40-60%. Effektives Stress-Management kann dein Leben um 3-5 Jahre verlängern.",
      en: "Chronic stress increases risk of cardiovascular disease by 40-60%. Effective stress management can extend your life by 3-5 years.",
      es: "El estrés crónico aumenta el riesgo de enfermedad cardiovascular en 40-60%. Un manejo efectivo del estrés puede extender tu vida 3-5 años."
    },
    
    potential_gain: 3,
    
    priority: "medium",
    difficulty: "moderate",
    timeframe: "3-6 months",
    
    why_it_matters: {
      de: [
        "Chronischer Stress erhöht Cortisol dauerhaft (Stoffwechsel-Störungen)",
        "Schwächt Immunsystem und fördert Entzündungen",
        "Erhöht Blutdruck und Herzfrequenz",
        "Begünstigt ungesunde Coping-Mechanismen (Rauchen, Alkohol, Überessen)",
        "Beeinträchtigt Schlafqualität und kognitive Funktionen",
        "Erhöht Risiko für Depression und Angststörungen"
      ],
      en: [
        "Chronic stress permanently elevates cortisol (metabolic disorders)",
        "Weakens immune system and promotes inflammation",
        "Increases blood pressure and heart rate",
        "Encourages unhealthy coping mechanisms (smoking, alcohol, overeating)",
        "Impairs sleep quality and cognitive functions",
        "Increases risk of depression and anxiety disorders"
      ],
      es: [
        "El estrés crónico eleva permanentemente el cortisol (trastornos metabólicos)",
        "Debilita sistema inmunológico y promueve inflamación",
        "Aumenta presión arterial y frecuencia cardíaca",
        "Fomenta mecanismos de afrontamiento no saludables (fumar, alcohol, comer en exceso)",
        "Deteriora calidad del sueño y funciones cognitivas",
        "Aumenta riesgo de depresión y trastornos de ansiedad"
      ]
    },
    
    action_steps: {
      de: [
        "Identifiziere Stressoren: Was genau stresst dich? (Arbeit, Finanzen, Beziehungen)",
        "Meditation: 10-20 Min täglich (Apps: Headspace, Calm, 7Mind)",
        "Achtsamkeit (MBSR): 8-Wochen-Kurs nachweislich wirksam",
        "Progressive Muskelentspannung nach Jacobson (PMR)",
        "Atemtechniken: 4-7-8-Atmung, Box-Breathing",
        "Bewegung als Stress-Abbau: Yoga, Tai Chi, Joggen",
        "Zeitmanagement: Prioritäten setzen, Nein-sagen lernen",
        "Pausen einplanen: Minimum 5 Min pro Stunde, echte Mittagspause",
        "Hobbys ohne Leistungsdruck: Malen, Musik, Gartenarbeit",
        "Professionelle Hilfe: Bei Überforderung Psychotherapie in Betracht ziehen"
      ],
      en: [
        "Identify stressors: What exactly stresses you? (work, finances, relationships)",
        "Meditation: 10-20 min daily (apps: Headspace, Calm, 7Mind)",
        "Mindfulness (MBSR): 8-week course proven effective",
        "Progressive muscle relaxation according to Jacobson (PMR)",
        "Breathing techniques: 4-7-8 breathing, box breathing",
        "Movement as stress relief: Yoga, Tai Chi, jogging",
        "Time management: Set priorities, learn to say no",
        "Schedule breaks: Minimum 5 min per hour, real lunch break",
        "Hobbies without performance pressure: Painting, music, gardening",
        "Professional help: Consider psychotherapy if overwhelmed"
      ],
      es: [
        "Identifica estresores: ¿Qué te estresa exactamente? (trabajo, finanzas, relaciones)",
        "Meditación: 10-20 min diarios (apps: Headspace, Calm, 7Mind)",
        "Atención plena (MBSR): Curso de 8 semanas probadamente efectivo",
        "Relajación muscular progresiva según Jacobson (PMR)",
        "Técnicas de respiración: Respiración 4-7-8, box breathing",
        "Movimiento como alivio del estrés: Yoga, Tai Chi, correr",
        "Gestión del tiempo: Establecer prioridades, aprender a decir no",
        "Programar descansos: Mínimo 5 min por hora, verdadero descanso para almorzar",
        "Pasatiempos sin presión de rendimiento: Pintura, música, jardinería",
        "Ayuda profesional: Considerar psicoterapia si estás abrumado"
      ]
    },
    
    scientific_basis: {
      de: "Whitehall II Study, INTERHEART Study, Meta-Analysis on Mindfulness-Based Stress Reduction",
      en: "Whitehall II Study, INTERHEART Study, Meta-Analysis on Mindfulness-Based Stress Reduction",
      es: "Whitehall II Study, INTERHEART Study, Meta-análisis sobre Reducción del Estrés Basada en Mindfulness"
    }
  }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

export function getRecommendationsForUser(factors, answers, meta) {
  const applicable = [];
  
  for (const [id, rec] of Object.entries(RECOMMENDATIONS)) {
    if (rec.trigger(answers, meta)) {
      const potentialGain = typeof rec.potential_gain === 'object' 
        ? calculateGainVariant(rec, factors, answers, meta)
        : rec.potential_gain;
      
      applicable.push({
        ...rec,
        potential_gain: potentialGain
      });
    }
  }
  
  return applicable.sort((a, b) => {
    const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return b.potential_gain - a.potential_gain;
  });
}

function calculateGainVariant(rec, factors, answers, meta) {
  if (rec.id === 'smoking_quit') {
    const smokingLevel = answers.smoke_01;
    if (smokingLevel === 'light') return rec.potential_gain.light;
    if (smokingLevel === 'moderate') return rec.potential_gain.moderate;
    if (smokingLevel === 'heavy') return rec.potential_gain.heavy;
  }
  
  if (rec.id === 'weight_loss') {
    const bmi = meta.meta_weight / Math.pow(meta.meta_height / 100, 2);
    if (bmi < 30) return rec.potential_gain.moderate;
    if (bmi < 35) return rec.potential_gain.high;
    return rec.potential_gain.severe;
  }
  
  if (rec.id === 'alcohol_reduce') {
    if (answers.alcohol_03 === true) return rec.potential_gain.severe;
    if (answers.alcohol_02 === 'six_plus') return rec.potential_gain.high;
    return rec.potential_gain.moderate;
  }
  
  return rec.potential_gain.moderate || rec.potential_gain;
}

export function getRecommendationById(id) {
  return RECOMMENDATIONS[id];
}

export function getTopRecommendations(factors, answers, meta, count = 5) {
  const all = getRecommendationsForUser(factors, answers, meta);
  return all.slice(0, count);
}

export function filterRecommendationsByPriority(recommendations, priority) {
  return recommendations.filter(r => r.priority === priority);
}

export function filterRecommendationsByDifficulty(recommendations, difficulty) {
  return recommendations.filter(r => r.difficulty === difficulty);
}

export function getTotalPotentialGain(recommendations) {
  return recommendations.reduce((sum, r) => sum + r.potential_gain, 0);
}

export default RECOMMENDATIONS;