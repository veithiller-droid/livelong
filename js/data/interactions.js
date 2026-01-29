// data/interactions.js
// Interaktions-Matrix für Dr. Livelong
// Synergien und Verstärkungseffekte zwischen Faktoren
// Version 1.0.0

/**
 * INTERAKTIONEN:
 * Bestimmte Faktor-Kombinationen haben nicht-additive Effekte.
 * Beispiel: Rauchen + Diabetes = mehr als die Summe der Einzeleffekte
 * 
 * STRUKTUR:
 * - id: Eindeutige ID
 * - name: Bezeichnung (DE/EN/ES)
 * - description: Erklärung (DE/EN/ES)
 * - condition: Funktion die prüft ob Interaktion zutrifft
 * - effect: Multiplikator für Impact (>1 = verstärkt, <1 = abgeschwächt)
 * - type: "synergy_negative" (verschlimmert) oder "synergy_positive" (verbessert)
 * - severity: "high" / "medium" / "low"
 * - sources: Wissenschaftliche Quellen (optional)
 */

export const INTERACTIONS = [
  // ========================================
  // NEGATIVE SYNERGIEN (Risiko-Verstärkung)
  // ========================================
  
  {
    id: "smoking_diabetes",
    
    name: {
      de: "Rauchen × Diabetes",
      en: "Smoking × Diabetes",
      es: "Fumar × Diabetes"
    },
    
    description: {
      de: "Rauchen und Diabetes verstärken sich gegenseitig beim Gefäßrisiko. Beide schädigen die Blutgefäße, zusammen potenziert sich der Schaden erheblich.",
      en: "Smoking and diabetes amplify each other's vascular risk. Both damage blood vessels, together the damage is considerably potentiated.",
      es: "Fumar y diabetes amplifican mutuamente el riesgo vascular. Ambos dañan los vasos sanguíneos, juntos el daño se potencia considerablemente."
    },
    
    condition: (factors, answers) => {
      // Rauchen: score < 40 bedeutet aktueller Raucher
      const smokes = factors.lifestyle_smoke && factors.lifestyle_smoke.score < 40;
      
      // Diabetes: Check metab_01 answer
      const hasDiabetes = answers.metab_01 && 
        (answers.metab_01 === 'type1' || answers.metab_01 === 'type2');
      
      return smokes && hasDiabetes;
    },
    
    effect: 1.8,  // 80% Verstärkung
    type: "synergy_negative",
    severity: "high",
    
    sources: [
      "Framingham Heart Study",
      "American Diabetes Association"
    ]
  },

  {
    id: "smoking_hypertension",
    
    name: {
      de: "Rauchen × Bluthochdruck",
      en: "Smoking × Hypertension",
      es: "Fumar × Hipertensión"
    },
    
    description: {
      de: "Rauchen erhöht akut den Blutdruck und verstärkt die Gefäßschäden bei bestehendem Bluthochdruck erheblich.",
      en: "Smoking acutely raises blood pressure and significantly amplifies vascular damage in existing hypertension.",
      es: "Fumar aumenta agudamente la presión arterial y amplifica significativamente el daño vascular en hipertensión existente."
    },
    
    condition: (factors, answers) => {
      const smokes = factors.lifestyle_smoke && factors.lifestyle_smoke.score < 40;
      const hasHypertension = answers.cardio_01 === 'yes';
      
      return smokes && hasHypertension;
    },
    
    effect: 1.6,
    type: "synergy_negative",
    severity: "high",
    
    sources: ["WHO Cardiovascular Disease Report"]
  },

  {
    id: "metabolic_syndrome",
    
    name: {
      de: "Metabolisches Syndrom",
      en: "Metabolic Syndrome",
      es: "Síndrome metabólico"
    },
    
    description: {
      de: "Die Kombination aus Übergewicht, Bluthochdruck und Diabetes bildet das metabolische Syndrom - ein besonders hohes kardiovaskuläres Risiko.",
      en: "The combination of obesity, hypertension and diabetes forms metabolic syndrome - a particularly high cardiovascular risk.",
      es: "La combinación de obesidad, hipertensión y diabetes forma el síndrome metabólico - un riesgo cardiovascular particularmente alto."
    },
    
    condition: (factors, answers, meta) => {
      // BMI > 30 (aus Meta-Daten)
      const bmi = meta.meta_height && meta.meta_weight ? 
        meta.meta_weight / Math.pow(meta.meta_height / 100, 2) : 0;
      const isObese = bmi > 30;
      
      const hasHypertension = answers.cardio_01 === 'yes';
      const hasDiabetes = answers.metab_01 === 'type2' || answers.metab_01 === 'type1';
      
      return isObese && hasHypertension && hasDiabetes;
    },
    
    effect: 2.5,  // Massive Verstärkung
    type: "synergy_negative",
    severity: "high",
    
    sources: [
      "International Diabetes Federation",
      "NCEP ATP III Guidelines"
    ]
  },

  {
    id: "depression_isolation",
    
    name: {
      de: "Depression × Soziale Isolation",
      en: "Depression × Social Isolation",
      es: "Depresión × Aislamiento social"
    },
    
    description: {
      de: "Depression und soziale Isolation verstärken sich gegenseitig und erhöhen das Mortalitätsrisiko deutlich.",
      en: "Depression and social isolation reinforce each other and significantly increase mortality risk.",
      es: "Depresión y aislamiento social se refuerzan mutuamente y aumentan significativamente el riesgo de mortalidad."
    },
    
    condition: (factors, answers) => {
      const hasDepression = answers.mental_01 === true;
      const isIsolated = answers.social_01 === true || // Fühlt sich einsam
                        answers.social_02 === false;   // Kein regelmäßiger Kontakt
      
      return hasDepression && isIsolated;
    },
    
    effect: 2.0,
    type: "synergy_negative",
    severity: "high",
    
    sources: ["JAMA Psychiatry 2014"]
  },

  {
    id: "alcohol_liver_disease",
    
    name: {
      de: "Alkohol × Lebererkrankung",
      en: "Alcohol × Liver Disease",
      es: "Alcohol × Enfermedad hepática"
    },
    
    description: {
      de: "Hoher Alkoholkonsum bei bestehender Lebererkrankung beschleunigt die Progression erheblich.",
      en: "High alcohol consumption with existing liver disease significantly accelerates progression.",
      es: "Consumo alto de alcohol con enfermedad hepática existente acelera significativamente la progresión."
    },
    
    condition: (factors, answers) => {
      // Hoher Alkoholkonsum: >4 drinks pro Anlass oder daily drinking
      const heavyDrinking = answers.alcohol_02 === 'four_five' || 
                           answers.alcohol_02 === 'six_plus' ||
                           answers.alcohol_01 === 'daily';
      
      // Proxy für Lebererkrankung: Metabolic score low + heavy drinking
      const liverRisk = factors.metabolic && factors.metabolic.score < 50;
      
      return heavyDrinking && liverRisk;
    },
    
    effect: 2.2,
    type: "synergy_negative",
    severity: "high",
    
    sources: ["Hepatology Journal"]
  },

  {
    id: "copd_smoking",
    
    name: {
      de: "COPD × Rauchen",
      en: "COPD × Smoking",
      es: "EPOC × Fumar"
    },
    
    description: {
      de: "Weiteres Rauchen trotz COPD beschleunigt den Lungenfunktionsverlust dramatisch.",
      en: "Continued smoking despite COPD dramatically accelerates lung function loss.",
      es: "Continuar fumando a pesar de EPOC acelera dramáticamente la pérdida de función pulmonar."
    },
    
    condition: (factors, answers) => {
      const hasCOPD = answers.pulmonary_01 === true;
      const stillSmokes = answers.smoke_01 === 'light' || 
                         answers.smoke_01 === 'moderate' ||
                         answers.smoke_01 === 'heavy';
      
      return hasCOPD && stillSmokes;
    },
    
    effect: 2.3,
    type: "synergy_negative",
    severity: "high",
    
    sources: ["GOLD COPD Guidelines"]
  },

  {
    id: "polypharmacy_frailty",
    
    name: {
      de: "Polypharmazie × Gebrechlichkeit",
      en: "Polypharmacy × Frailty",
      es: "Polifarmacia × Fragilidad"
    },
    
    description: {
      de: "Viele Medikamente bei gebrechlichen Menschen erhöhen das Risiko für Stürze, Verwirrtheit und unerwünschte Wechselwirkungen.",
      en: "Multiple medications in frail people increase risk of falls, confusion and adverse interactions.",
      es: "Múltiples medicamentos en personas frágiles aumentan el riesgo de caídas, confusión e interacciones adversas."
    },
    
    condition: (factors, answers) => {
      const hasPolypharmacy = answers.meds_01 === true;  // 5+ Medikamente
      const isFrail = factors.frailty && factors.frailty.score < 50;
      
      return hasPolypharmacy && isFrail;
    },
    
    effect: 1.7,
    type: "synergy_negative",
    severity: "high",
    
    sources: ["Age and Ageing Journal"]
  },

  {
    id: "sedentary_obesity",
    
    name: {
      de: "Bewegungsmangel × Übergewicht",
      en: "Sedentary × Obesity",
      es: "Sedentarismo × Obesidad"
    },
    
    description: {
      de: "Die Kombination aus Bewegungsmangel und Übergewicht verstärkt das metabolische und kardiovaskuläre Risiko überproportional.",
      en: "The combination of sedentary behavior and obesity disproportionately amplifies metabolic and cardiovascular risk.",
      es: "La combinación de comportamiento sedentario y obesidad amplifica desproporcionadamente el riesgo metabólico y cardiovascular."
    },
    
    condition: (factors, answers, meta) => {
      const bmi = meta.meta_height && meta.meta_weight ? 
        meta.meta_weight / Math.pow(meta.meta_height / 100, 2) : 0;
      const isOverweight = bmi > 27;
      
      const isSedentary = answers.fitness_02 === true;  // >8h sitzen
      const noExercise = answers.fitness_01 === false;  // Keine Bewegung
      
      return isOverweight && (isSedentary || noExercise);
    },
    
    effect: 1.5,
    type: "synergy_negative",
    severity: "medium",
    
    sources: ["Lancet Physical Activity Series"]
  },

  {
    id: "diabetes_ckd",
    
    name: {
      de: "Diabetes × Nierenerkrankung",
      en: "Diabetes × Kidney Disease",
      es: "Diabetes × Enfermedad renal"
    },
    
    description: {
      de: "Diabetes ist die häufigste Ursache für Nierenversagen. Die Kombination erhöht das kardiovaskuläre Risiko massiv.",
      en: "Diabetes is the most common cause of kidney failure. The combination massively increases cardiovascular risk.",
      es: "La diabetes es la causa más común de insuficiencia renal. La combinación aumenta masivamente el riesgo cardiovascular."
    },
    
    condition: (factors, answers) => {
      const hasDiabetes = answers.metab_01 === 'type1' || answers.metab_01 === 'type2';
      const hasCKD = answers.renal_01 === true;
      
      return hasDiabetes && hasCKD;
    },
    
    effect: 2.0,
    type: "synergy_negative",
    severity: "high",
    
    sources: ["American Journal of Kidney Diseases"]
  },

  {
    id: "poor_sleep_stress",
    
    name: {
      de: "Schlechter Schlaf × Stress",
      en: "Poor Sleep × Stress",
      es: "Mal sueño × Estrés"
    },
    
    description: {
      de: "Schlechter Schlaf und chronischer Stress bilden einen Teufelskreis, der sich gegenseitig verstärkt.",
      en: "Poor sleep and chronic stress form a vicious cycle that mutually reinforces.",
      es: "El mal sueño y el estrés crónico forman un círculo vicioso que se refuerza mutuamente."
    },
    
    condition: (factors, answers) => {
      const poorSleep = answers.sleep_02 === false;  // Schlaf nicht erholsam
      const highStress = answers.stress_01 === true; // Alltag sehr stressig
      
      return poorSleep && highStress;
    },
    
    effect: 1.4,
    type: "synergy_negative",
    severity: "medium",
    
    sources: ["Sleep Medicine Reviews"]
  },

  // ========================================
  // POSITIVE SYNERGIEN (Schutz-Verstärkung)
  // ========================================

  {
    id: "exercise_diet_synergy",
    
    name: {
      de: "Sport × Mediterrane Ernährung",
      en: "Exercise × Mediterranean Diet",
      es: "Ejercicio × Dieta mediterránea"
    },
    
    description: {
      de: "Regelmäßige Bewegung und mediterrane Ernährung verstärken sich positiv. Zusammen bieten sie mehr Schutz als die Summe der Einzeleffekte.",
      en: "Regular exercise and Mediterranean diet positively reinforce each other. Together they offer more protection than the sum of individual effects.",
      es: "Ejercicio regular y dieta mediterránea se refuerzan positivamente. Juntos ofrecen más protección que la suma de efectos individuales."
    },
    
    condition: (factors, answers) => {
      const exercises = answers.fitness_01 === true;  // 3x/Woche Sport
      
      // Mediterrane Diät: Olivenöl + Gemüse + Fisch + Nüsse
      const medDiet = answers.diet_01 === true &&  // Olivenöl
                     answers.diet_03 === true &&  // Gemüse
                     answers.diet_07 === true &&  // Fisch
                     answers.diet_08 === true;    // Nüsse
      
      return exercises && medDiet;
    },
    
    effect: 1.3,  // 30% Bonus
    type: "synergy_positive",
    severity: "high",
    
    sources: [
      "PREDIMED Study",
      "New England Journal of Medicine"
    ]
  },

  {
    id: "social_exercise",
    
    name: {
      de: "Soziales Umfeld × Sport",
      en: "Social Connections × Exercise",
      es: "Conexiones sociales × Ejercicio"
    },
    
    description: {
      de: "Starke soziale Kontakte kombiniert mit regelmäßiger Bewegung verstärken die positiven Effekte auf Gesundheit und Langlebigkeit.",
      en: "Strong social connections combined with regular exercise amplify positive effects on health and longevity.",
      es: "Conexiones sociales fuertes combinadas con ejercicio regular amplifican los efectos positivos sobre salud y longevidad."
    },
    
    condition: (factors, answers) => {
      const goodSocial = answers.social_02 === true && // Regelmäßiger Kontakt
                        answers.social_01 === false;  // Nicht einsam
      const exercises = answers.fitness_01 === true;
      
      return goodSocial && exercises;
    },
    
    effect: 1.10,  // 10% Bonus (reduced from 25% for age-realistic calculation)
    type: "synergy_positive",
    severity: "medium",
    
    sources: ["Harvard Study of Adult Development"]
  },

  {
    id: "sleep_stress_management",
    
    name: {
      de: "Guter Schlaf × Stress-Management",
      en: "Good Sleep × Stress Management",
      es: "Buen sueño × Manejo del estrés"
    },
    
    description: {
      de: "Erholsamer Schlaf und ausreichende Erholungszeit verstärken sich gegenseitig positiv für die psychische und körperliche Gesundheit.",
      en: "Restful sleep and adequate recovery time mutually reinforce positive effects on mental and physical health.",
      es: "Sueño reparador y tiempo adecuado de recuperación se refuerzan mutuamente positivamente para la salud mental y física."
    },
    
    condition: (factors, answers) => {
      const goodSleep = answers.sleep_01 === true &&  // 7-8h
                       answers.sleep_02 === true;     // Erholsam
      const lowStress = answers.stress_01 === false && // Nicht sehr stressig
                       answers.stress_02 === true;     // Zeit für Erholung
      
      return goodSleep && lowStress;
    },
    
    effect: 1.08,  // 8% Bonus (reduced from 20% for age-realistic calculation)
    type: "synergy_positive",
    severity: "medium",
    
    sources: ["Journal of Clinical Sleep Medicine"]
  },

  {
    id: "prevention_healthy_lifestyle",
    
    name: {
      de: "Vorsorge × Gesunder Lebensstil",
      en: "Prevention × Healthy Lifestyle",
      es: "Prevención × Estilo de vida saludable"
    },
    
    description: {
      de: "Regelmäßige Vorsorge kombiniert mit gesundem Lebensstil ermöglicht Früherkennung und verstärkt präventive Effekte.",
      en: "Regular prevention combined with healthy lifestyle enables early detection and amplifies preventive effects.",
      es: "Prevención regular combinada con estilo de vida saludable permite detección temprana y amplifica efectos preventivos."
    },
    
    condition: (factors, answers) => {
      const goodPrevention = answers.prevention_03 === true;  // Vorsorgeuntersuchungen
      
      // Gesunder Lifestyle: nicht rauchen, moderater Alkohol, Sport
      const healthyLifestyle = (answers.smoke_01 === 'never' || 
                               answers.smoke_01 === 'ex_10plus') &&
                              answers.fitness_01 === true &&
                              (answers.alcohol_01 === 'never' || 
                               answers.alcohol_01 === 'monthly' ||
                               answers.alcohol_01 === 'weekly');
      
      return goodPrevention && healthyLifestyle;
    },
    
    effect: 1.15,
    type: "synergy_positive",
    severity: "low",
    
    sources: ["Preventive Medicine Journal"]
  },

  {
    id: "partnership_mental_health",
    
    name: {
      de: "Partnerschaft × Psychische Gesundheit",
      en: "Partnership × Mental Health",
      es: "Pareja × Salud mental"
    },
    
    description: {
      de: "Eine stabile Partnerschaft kombiniert mit guter psychischer Gesundheit bietet besonders starken Schutz für die Lebenserwartung.",
      en: "A stable partnership combined with good mental health offers particularly strong protection for life expectancy.",
      es: "Una pareja estable combinada con buena salud mental ofrece protección particularmente fuerte para la esperanza de vida."
    },
    
    condition: (factors, answers) => {
      const hasPartnership = answers.social_03 === true;
      const goodMentalHealth = answers.mental_01 === false && // Keine Depression
                              answers.mental_02 === false;   // Keine Angst
      
      return hasPartnership && goodMentalHealth;
    },
    
    effect: 1.08,  // 8% Bonus (reduced from 20% for age-realistic calculation)
    type: "synergy_positive",
    severity: "medium",
    
    sources: ["Journal of Epidemiology and Community Health"]
  }
];

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Prüfe welche Interaktionen für einen User zutreffen
 */
export function findActiveInteractions(factors, answers, meta) {
  const active = [];
  
  for (const interaction of INTERACTIONS) {
    if (interaction.condition(factors, answers, meta)) {
      active.push(interaction);
    }
  }
  
  return active;
}

/**
 * Berechne Gesamt-Interaktions-Effekt
 */
/**
 * Berechne Gesamt-Interaktions-Effekt mit Age-Adjustment
 * Interactions haben weniger Wirkung bei höherem Alter (weniger verbleibende Zeit)
 */
export function calculateInteractionEffect(factors, answers, meta) {
  const activeInteractions = findActiveInteractions(factors, answers, meta);
  
  if (activeInteractions.length === 0) {
    return { multiplier: 1.0, interactions: [] };
  }
  
  // Get age for adjustment
  const currentYear = new Date().getFullYear();
  const age = meta.meta_birth_year ? currentYear - meta.meta_birth_year : 50;
  
  // Age-effectiveness multiplier (same as for factors)
  const ageMultiplier = getAgeEffectivenessMultiplier(age);
  
  // Kombiniere Effekte multiplikativ für negative
  // Addiere Boni für positive
  let negativeMultiplier = 1.0;
  let positiveBonus = 0;
  
  activeInteractions.forEach(interaction => {
    // Adjust interaction effect for age
    // Formula: 1.0 + (baseEffect - 1.0) * ageMultiplier
    // Example: 1.8x at age 30 becomes 1.28x at age 60
    const adjustedEffect = 1.0 + (interaction.effect - 1.0) * ageMultiplier;
    
    if (interaction.type === "synergy_negative") {
      negativeMultiplier *= adjustedEffect;
    } else if (interaction.type === "synergy_positive") {
      positiveBonus += (adjustedEffect - 1.0);
    }
  });
  
  const totalMultiplier = negativeMultiplier * (1 + positiveBonus);
  
  return {
    multiplier: totalMultiplier,
    interactions: activeInteractions,
    breakdown: {
      negative: negativeMultiplier,
      positive: 1 + positiveBonus
    }
  };
}

/**
 * Age-effectiveness multiplier for interactions
 * Younger age = more time for effects to compound = higher effectiveness
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
 * Hole Interaktion nach ID
 */
export function getInteractionById(id) {
  return INTERACTIONS.find(i => i.id === id);
}

/**
 * Filtere Interaktionen nach Typ
 */
export function getInteractionsByType(type) {
  return INTERACTIONS.filter(i => i.type === type);
}

/**
 * Filtere Interaktionen nach Severity
 */
export function getInteractionsBySeverity(severity) {
  return INTERACTIONS.filter(i => i.severity === severity);
}

/**
 * Hole alle negativen Interaktionen
 */
export function getNegativeInteractions() {
  return getInteractionsByType("synergy_negative");
}

/**
 * Hole alle positiven Interaktionen
 */
export function getPositiveInteractions() {
  return getInteractionsByType("synergy_positive");
}

/**
 * Zähle Interaktionen nach Typ
 */
export function countInteractionsByType() {
  return {
    negative: getNegativeInteractions().length,
    positive: getPositiveInteractions().length,
    total: INTERACTIONS.length
  };
}

// ========================================
// EXPORT
// ========================================
export default INTERACTIONS;