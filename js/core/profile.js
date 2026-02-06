// core/profile.js
// Profil-Interpretation Engine für Dr. Livelong
// Generiert medizinisch fundierte Interpretationen und Empfehlungen
// Version 1.0.0

import { FACTORS, CLUSTERS, getFactorById, getClusterForFactor } from '../data/factors.js';
import { RECOMMENDATIONS, getRecommendationsForUser } from '../data/recommendations.js';
import { getFactorLevel, getRiskLevel } from './scoring.js';
import { getAgeContext } from '../ui/profile_render.js';
import { UI_TEXTS } from '../data/texts.js';

const PROFILE_VERSION = "1.0.0";

// Helper function to get text
function getText(path, lang = 'de') {
  const keys = path.split('.');
  let text = UI_TEXTS;
  
  for (const key of keys) {
    text = text[key];
    if (!text) return path;
  }
  
  return text[lang] || text.de || text;
}

export function generateProfile(calculation, meta, answers) {
  const timestamp = new Date().toISOString();
  
  const overview = generateOverview(calculation, meta);
  const riskProfile = generateRiskProfile(calculation);
  const factorAnalysis = generateFactorAnalysis(calculation.factors, meta, answers);
  const interactionAnalysis = generateInteractionAnalysis(calculation.interactions);
  const recommendations = generateRecommendations(calculation.factors, meta, answers);
  const priorities = determinePriorities(calculation, meta, answers);
  const insights = generateInsights(calculation, meta, answers);
  
  return {
    version: PROFILE_VERSION,
    timestamp,
    overview,
    risk_profile: riskProfile,
    factor_analysis: factorAnalysis,
    interaction_analysis: interactionAnalysis,
    recommendations,
    priorities,
    insights
  };
}

function generateOverview(calculation, meta) {
  const age = calculation.age;
  const lifeExpectancy = calculation.total_life_expectancy;
  const baseline = calculation.baseline;
  const diff = lifeExpectancy - baseline;
  const yearsToLive = Math.max(0, lifeExpectancy - age);
  
  const isAboveAverage = diff > 0;
  const percentile = calculation.percentile;
  
  let summary_de, summary_en, summary_es;
  
  if (diff >= 5) {
    summary_de = `Exzellent! Deine geschätzte Lebenserwartung liegt ${Math.abs(Math.round(diff))} Jahre über dem Durchschnitt. Du gehörst zu den gesündesten ${100 - percentile}% deiner Altersgruppe.`;
    summary_en = `Excellent! Your estimated life expectancy is ${Math.abs(Math.round(diff))} years above average. You're among the healthiest ${100 - percentile}% of your age group.`;
    summary_es = `¡Excelente! Tu esperanza de vida estimada está ${Math.abs(Math.round(diff))} años por encima del promedio. Estás entre el ${100 - percentile}% más saludable de tu grupo de edad.`;
  } else if (diff >= 0) {
    summary_de = `Gut! Du liegst ${Math.round(diff)} Jahre über dem Durchschnitt. Mit einigen Verbesserungen kannst du diesen Vorsprung weiter ausbauen.`;
    summary_en = `Good! You're ${Math.round(diff)} years above average. With some improvements you can expand this lead further.`;
    summary_es = `¡Bien! Estás ${Math.round(diff)} años por encima del promedio. Con algunas mejoras puedes ampliar esta ventaja aún más.`;
  } else if (diff >= -5) {
    summary_de = `Achtung: Du liegst ${Math.abs(Math.round(diff))} Jahre unter dem Durchschnitt. Es gibt konkrete Bereiche, in denen du deine Gesundheit verbessern kannst.`;
    summary_en = `Attention: You're ${Math.abs(Math.round(diff))} years below average. There are concrete areas where you can improve your health.`;
    summary_es = `Atención: Estás ${Math.abs(Math.round(diff))} años por debajo del promedio. Hay áreas concretas donde puedes mejorar tu salud.`;
  } else {
    summary_de = `Kritisch: Du liegst ${Math.abs(Math.round(diff))} Jahre unter dem Durchschnitt. Dringender Handlungsbedarf in mehreren Bereichen. Konsultiere einen Arzt.`;
    summary_en = `Critical: You're ${Math.abs(Math.round(diff))} years below average. Urgent need for action in multiple areas. Consult a doctor.`;
    summary_es = `Crítico: Estás ${Math.abs(Math.round(diff))} años por debajo del promedio. Necesidad urgente de acción en múltiples áreas. Consulta a un médico.`;
  }
  
  return {
    age,
    life_expectancy: lifeExpectancy,
    years_to_live: Math.round(yearsToLive * 10) / 10,
    baseline,
    difference: Math.round(diff * 10) / 10,
    is_above_average: isAboveAverage,
    percentile,
    confidence: calculation.confidence,
    summary: {
      de: summary_de,
      en: summary_en,
      es: summary_es
    }
  };
}

function generateRiskProfile(calculation) {
  const riskLevel = getRiskLevel(calculation.total_life_expectancy, calculation.baseline);
  
  const hasHighRiskFactors = Object.values(calculation.factors).some(f => f.score < 30);
  const hasCriticalInteractions = calculation.interactions.some(i => 
    i.type === 'synergy_negative' && i.severity === 'high'
  );
  
const riskFactorCount = Object.values(calculation.factors).filter(f => 
  f.score < 80 && f.impact < 0
).length;  const protectiveFactorCount = Object.values(calculation.factors).filter(f => f.score >= 60).length;
  
  let description_de, description_en, description_es;
  let recommendations_de, recommendations_en, recommendations_es;
  
  if (riskLevel === 'low') {
    description_de = "Dein Risikoprofil ist günstig. Du hast mehrere Schutzfaktoren und wenige Risiken.";
    description_en = "Your risk profile is favorable. You have multiple protective factors and few risks.";
    description_es = "Tu perfil de riesgo es favorable. Tienes múltiples factores protectores y pocos riesgos.";
    
    recommendations_de = "Halte deine gesunden Gewohnheiten bei und optimiere weitere Bereiche.";
    recommendations_en = "Maintain your healthy habits and optimize additional areas.";
    recommendations_es = "Mantén tus hábitos saludables y optimiza áreas adicionales.";
  } else if (riskLevel === 'moderate') {
    description_de = "Dein Risikoprofil ist durchschnittlich. Es gibt einige Bereiche mit Verbesserungspotenzial.";
    description_en = "Your risk profile is average. There are some areas with room for improvement.";
    description_es = "Tu perfil de riesgo es promedio. Hay algunas áreas con potencial de mejora.";
    
    recommendations_de = "Fokussiere dich auf 2-3 Schlüsselbereiche, um dein Risiko zu senken.";
    recommendations_en = "Focus on 2-3 key areas to reduce your risk.";
    recommendations_es = "Enfócate en 2-3 áreas clave para reducir tu riesgo.";
  } else if (riskLevel === 'high') {
    description_de = "Dein Risikoprofil zeigt mehrere Risikofaktoren. Handlungsbedarf in wichtigen Bereichen.";
    description_en = "Your risk profile shows multiple risk factors. Need for action in important areas.";
    description_es = "Tu perfil de riesgo muestra múltiples factores de riesgo. Necesidad de acción en áreas importantes.";
    
    recommendations_de = "Priorisiere die kritischsten Faktoren und hole dir ärztliche Unterstützung.";
    recommendations_en = "Prioritize the most critical factors and seek medical support.";
    recommendations_es = "Prioriza los factores más críticos y busca apoyo médico.";
  } else {
    description_de = "Dein Risikoprofil ist kritisch. Mehrere schwerwiegende Risikofaktoren liegen vor.";
    description_en = "Your risk profile is critical. Multiple severe risk factors are present.";
    description_es = "Tu perfil de riesgo es crítico. Múltiples factores de riesgo severos están presentes.";
    
    recommendations_de = "DRINGEND: Konsultiere umgehend einen Arzt und beginne mit Lifestyle-Änderungen.";
    recommendations_en = "URGENT: Consult a doctor immediately and begin lifestyle changes.";
    recommendations_es = "URGENTE: Consulta a un médico inmediatamente y comienza cambios de estilo de vida.";
  }
  
  return {
    level: riskLevel,
    has_high_risk_factors: hasHighRiskFactors,
    has_critical_interactions: hasCriticalInteractions,
    risk_factor_count: riskFactorCount,
    protective_factor_count: protectiveFactorCount,
    description: {
      de: description_de,
      en: description_en,
      es: description_es
    },
    recommendations: {
      de: recommendations_de,
      en: recommendations_en,
      es: recommendations_es
    }
  };
}

function generateFactorAnalysis(factors, meta, answers) {
  const analysis = {};
  
  // Calculate age once
  const age = meta.meta_birth_year ? new Date().getFullYear() - meta.meta_birth_year : null;
  
  for (const [factorId, factorData] of Object.entries(factors)) {
    const factor = getFactorById(factorId);
const level = getFactorLevel(factorData.score, factorData.penalty);
console.log(`${factorId}: score=${factorData.score}, level=${level}`);
const cluster = getClusterForFactor(factorId);
    
    const interpretation = interpretFactor(factorId, factorData, level, meta, answers);
    const actionable = generateActionableItems(factorId, factorData, meta, answers);
    
    analysis[factorId] = {
      ...factorData,
      level,
      cluster_id: cluster ? cluster.id : null,
      interpretation,
      actionable_items: actionable,
      medical_context: getMedicalContext(factorId, factorData, meta, answers),
      age_context: getAgeContext(factorId, factorData.score, level, age)  // ← NEU!
    };
    
  }
  
  const clusterSummary = generateClusterSummary(analysis);
  
  return {
    factors: analysis,
    cluster_summary: clusterSummary
  };
}

function interpretFactor(factorId, factorData, level, meta, answers) {
  // Try to get interpretation from central texts.js first
  const interpretationPath = `factor_interpretations.${factorId}.${level}`;
  const centralInterpretation = UI_TEXTS.factor_interpretations?.[factorId]?.[level];
  
  if (centralInterpretation) {
    return centralInterpretation;
  }
  
  // Fallback to local templates for factors not yet migrated to texts.js
  // NOTE: cardiovascular, metabolic, lifestyle_smoke, lifestyle_alcohol, diet
  // are now centralized in texts.js > factor_interpretations
 const templates = {};
  
  const template = templates[factorId];
  if (!template) {
    return {
      de: `Score: ${factorData.score}/100. Impact: ${factorData.impact > 0 ? '+' : ''}${factorData.impact} Jahre.`,
      en: `Score: ${factorData.score}/100. Impact: ${factorData.impact > 0 ? '+' : ''}${factorData.impact} years.`,
      es: `Puntuación: ${factorData.score}/100. Impacto: ${factorData.impact > 0 ? '+' : ''}${factorData.impact} años.`
    };
  }
  
  return template[level] || template.moderate;
}

function generateActionableItems(factorId, factorData, meta, answers) {
  // Score >= 90: Wirklich gut, keine Actions nötig
  if (factorData.score >= 90) {
    return [];
  }
  
  // Score 70-89: Hol spezifische Actions, aber nur wenn Impact signifikant
  if (factorData.score >= 70) {
    // Nur Actions wenn Impact < -2 Jahre (signifikanter Penalty)
    if (factorData.impact && factorData.impact < -2) {
      return getFactorSpecificActions(factorId, factorData, meta, answers);
    }
    return [];
  }
  
  // Score < 70: Immer spezifische Actions
  return getFactorSpecificActions(factorId, factorData, meta, answers);
}
function getFactorSpecificActions(factorId, factorData, meta, answers) {
  const actionMap = {
    cardiovascular: [
      {
        condition: (m, a) => a.cardio_01 === 'yes' && a.cardio_02 === false,
        action: {
          type: 'critical',
          priority: 'high',
          description: {
            de: "Blutdruck medikamentös einstellen lassen - Zielwert <140/90",
            en: "Get blood pressure medically adjusted - target <140/90",
            es: "Ajustar presión arterial médicamente - objetivo <140/90"
          },
          potential_gain: 3
        }
      },
      {
        condition: (m, a) => a.cardio_03 === 'yes' || a.cardio_04 === 'yes',
        action: {
          type: 'monitor',
          priority: 'high',
          description: {
            de: "Kardiologische Kontrollen alle 6 Monate, strikte Medikamenten-Compliance",
            en: "Cardiological checkups every 6 months, strict medication compliance",
            es: "Controles cardiológicos cada 6 meses, cumplimiento estricto de medicación"
          },
          potential_gain: 2
        }
      }
    ],
    
    lifestyle_smoke: [
      {
        condition: (m, a) => a.smoke_01 === 'heavy',
        action: {
          type: 'critical',
          priority: 'critical',
          description: {
            de: "SOFORT mit Rauchen aufhören - Nikotinersatz + Verhaltenstherapie",
            en: "IMMEDIATELY quit smoking - nicotine replacement + behavioral therapy",
            es: "INMEDIATAMENTE dejar de fumar - reemplazo de nicotina + terapia conductual"
          },
          potential_gain: 12
        }
      },
      {
        condition: (m, a) => a.smoke_01 === 'moderate',
        action: {
          type: 'critical',
          priority: 'high',
          description: {
            de: "Rauch-Stopp innerhalb 4 Wochen - Unterstützung vom Arzt holen",
            en: "Smoking cessation within 4 weeks - get support from doctor",
            es: "Cesación de fumar en 4 semanas - obtener apoyo del médico"
          },
          potential_gain: 10
        }
      }
    ],
    
    diet: [
      {
        condition: (m, a) => !a.diet_01,
        action: {
          type: 'improve',
          priority: 'medium',
          description: {
            de: "Olivenöl als Hauptfett: 3-4 EL täglich für Kochen & Salat",
            en: "Olive oil as main fat: 3-4 tbsp daily for cooking & salad",
            es: "Aceite de oliva como grasa principal: 3-4 cucharadas diarias para cocinar y ensalada"
          },
          potential_gain: 1
        }
      },
      {
        condition: (m, a) => !a.diet_03,
        action: {
          type: 'improve',
          priority: 'high',
          description: {
            de: "Gemüse-Konsum steigern: Minimum 2 Portionen (Handvoll) täglich",
            en: "Increase vegetable consumption: Minimum 2 portions (handful) daily",
            es: "Aumentar consumo de verduras: Mínimo 2 porciones (puñado) diarias"
          },
          potential_gain: 2
        }
      }
    ],
    
    fitness: [
      {
        condition: (m, a) => !a.fitness_01,
        action: {
          type: 'critical',
          priority: 'high',
          description: {
            de: "Bewegung starten: 150 Min/Woche moderate Aktivität (Gehen, Radfahren)",
            en: "Start exercise: 150 min/week moderate activity (walking, cycling)",
            es: "Comenzar ejercicio: 150 min/semana actividad moderada (caminar, ciclismo)"
          },
          potential_gain: 5
        }
      },
      {
        condition: (m, a) => a.fitness_02 === true,
        action: {
          type: 'improve',
          priority: 'medium',
          description: {
            de: "Sitzzeit reduzieren: Jede Stunde 5 Min Bewegung, Stehschreibtisch",
            en: "Reduce sitting time: 5 min movement every hour, standing desk",
            es: "Reducir tiempo sentado: 5 min movimiento cada hora, escritorio de pie"
          },
          potential_gain: 2
        }
      }
    ]
  };
  
  const actions = actionMap[factorId] || [];
  const applicable = [];
  
  for (const item of actions) {
    if (item.condition(meta, answers)) {
      applicable.push(item.action);
    }
  }
  
  if (applicable.length === 0 && factorData.score < 60) {
    applicable.push({
      type: 'improve',
      priority: 'medium',
      description: {
        de: "Siehe Empfehlungen für konkrete Verbesserungsvorschläge",
        en: "See recommendations for concrete improvement suggestions",
        es: "Ver recomendaciones para sugerencias concretas de mejora"
      },
      potential_gain: Math.abs(factorData.impact) * 0.5
    });
  }
  
  return applicable;
}

function getMedicalContext(factorId, factorData, meta, answers) {
  const contexts = {
    cardiovascular: {
      key_markers: ["Blutdruck", "Cholesterin", "Herzfrequenz", "EKG"],
      risk_models: ["Framingham Risk Score", "QRISK3", "SCORE2"],
      screening: {
        de: "Blutdruck jährlich, Lipidprofil alle 5 Jahre (ab 40), EKG bei Symptomen",
        en: "Blood pressure annually, lipid profile every 5 years (from 40), ECG with symptoms",
        es: "Presión arterial anualmente, perfil lipídico cada 5 años (desde 40), ECG con síntomas"
      }
    },
    
  metabolic: {
      key_markers: ["HbA1c", "Nüchtern-Glukose", "BMI", "Bauchumfang", "Lipidprofil"],
      risk_models: ["FINDRISC", "Diabetes Risk Calculator"],
      screening: {
        de: "HbA1c/Glukose alle 3 Jahre (ab 45), jährlich bei Prädiabetes/Übergewicht",
        en: "HbA1c/glucose every 3 years (from 45), annually with prediabetes/overweight",
        es: "HbA1c/glucosa cada 3 años (desde 45), anualmente con prediabetes/sobrepeso",
        fr: "HbA1c/glucose tous les 3 ans (à partir de 45), annuellement en cas de prédiabète/surpoids"
      }
    },
    
    lifestyle_smoke: {
      key_markers: ["Zigaretten pro Tag und Jahre geraucht", "CO-Wert", "Lungenfunktion"],
      risk_models: ["Lung Cancer Risk Calculator"],
      screening: {
        de: "Low-Dose-CT jährlich ab 50 bei >20 Jahren starkem Rauchen (USA: USPSTF-Empfehlung)",
        en: "Low-dose CT annually from 50 with >20 years heavy smoking (USA: USPSTF recommendation)",
        es: "TC de baja dosis anualmente desde 50 con >20 años de fumar mucho (EE.UU.: recomendación USPSTF)",
        fr: "Scanner low-dose annuellement dès 50 ans avec >20 ans de tabagisme important (USA: recommandation USPSTF)"
      }
    }
  };
  
  return contexts[factorId] || null;
}

function generateClusterSummary(factorAnalysis) {
  const summary = {};
  
  for (const [clusterId, cluster] of Object.entries(CLUSTERS)) {
    const clusterFactors = cluster.factors
      .map(fId => factorAnalysis[fId])
      .filter(f => f !== undefined);
    
    if (clusterFactors.length === 0) continue;
    
    const avgScore = clusterFactors.reduce((sum, f) => sum + f.score, 0) / clusterFactors.length;
    const totalImpact = clusterFactors.reduce((sum, f) => sum + f.impact, 0);
    
    const worstFactor = clusterFactors.reduce((worst, f) => 
      f.score < worst.score ? f : worst
    );
    
    const bestFactor = clusterFactors.reduce((best, f) => 
      f.score > best.score ? f : best
    );
    
    summary[clusterId] = {
      avg_score: Math.round(avgScore),
      total_impact: Math.round(totalImpact * 10) / 10,
      factor_count: clusterFactors.length,
      worst_factor: { id: worstFactor.id, score: worstFactor.score },
      best_factor: { id: bestFactor.id, score: bestFactor.score },
      level: getFactorLevel(avgScore)
    };
  }
  
  return summary;
}

function generateInteractionAnalysis(interactions) {
  if (!interactions || interactions.length === 0) {
    return {
      has_interactions: false,
      count: 0,
      negative: [],
      positive: []
    };
  }
  
  const negative = interactions.filter(i => i.type === 'synergy_negative');
  const positive = interactions.filter(i => i.type === 'synergy_positive');
  
  const negativeWithContext = negative.map(i => ({
    ...i,
    medical_significance: getMedicalSignificance(i),
    urgency: i.severity === 'high' ? 'critical' : 'moderate'
  }));
  
  const positiveWithContext = positive.map(i => ({
    ...i,
    benefit_description: getBenefitDescription(i)
  }));
  
  return {
    has_interactions: true,
    count: interactions.length,
    negative: negativeWithContext,
    positive: positiveWithContext,
    total_effect_multiplier: interactions.reduce((mult, i) => mult * i.effect, 1.0)
  };
}

function getMedicalSignificance(interaction) {
  const significance = {
    smoking_diabetes: {
      de: "Diese Kombination potenziert das vaskuläre Risiko massiv. Beide Faktoren schädigen Endothel unabhängig, zusammen exponentiell.",
      en: "This combination massively potentiates vascular risk. Both factors damage endothelium independently, together exponentially.",
      es: "Esta combinación potencia masivamente el riesgo vascular. Ambos factores dañan el endotelio independientemente, juntos exponencialmente."
    },
    metabolic_syndrome: {
      de: "Das metabolische Syndrom ist mehr als die Summe der Teile - ein pathophysiologischer Teufelskreis aus Insulinresistenz, Entzündung und oxidativem Stress.",
      en: "Metabolic syndrome is more than the sum of its parts - a pathophysiological vicious cycle of insulin resistance, inflammation and oxidative stress.",
      es: "El síndrome metabólico es más que la suma de sus partes - un círculo vicioso fisiopatológico de resistencia a la insulina, inflamación y estrés oxidativo."
    },
    depression_isolation: {
      de: "Psycho-Neuro-Immunologie: Depression und Isolation verstärken sich gegenseitig und führen zu chronischer Inflammation (erhöhtes CRP, IL-6).",
      en: "Psycho-neuro-immunology: Depression and isolation reinforce each other and lead to chronic inflammation (elevated CRP, IL-6).",
      es: "Psico-neuro-inmunología: Depresión y aislamiento se refuerzan mutuamente y conducen a inflamación crónica (CRP elevado, IL-6)."
    }
  };
  
  return significance[interaction.id] || {
    de: "Diese Interaktion verstärkt die Einzeleffekte.",
    en: "This interaction amplifies the individual effects.",
    es: "Esta interacción amplifica los efectos individuales."
  };
}

function getBenefitDescription(interaction) {
  const benefits = {
    exercise_diet_synergy: {
      de: "PREDIMED-Studie: Mediterrane Ernährung + Bewegung senkt kardiovaskuläre Events um 30% mehr als jeder Faktor allein.",
      en: "PREDIMED Study: Mediterranean diet + exercise reduces cardiovascular events by 30% more than any factor alone.",
      es: "Estudio PREDIMED: Dieta mediterránea + ejercicio reduce eventos cardiovasculares 30% más que cualquier factor solo."
    },
    social_exercise: {
      de: "Harvard Adult Development Study: Soziale Bindungen + körperliche Aktivität haben synergistischen Effekt auf mentale und körperliche Gesundheit.",
      en: "Harvard Adult Development Study: Social bonds + physical activity have synergistic effect on mental and physical health.",
      es: "Harvard Adult Development Study: Vínculos sociales + actividad física tienen efecto sinérgico en salud mental y física."
    }
  };
  
  return benefits[interaction.id] || {
    de: "Diese Kombination verstärkt die positiven Effekte.",
    en: "This combination amplifies the positive effects.",
    es: "Esta combinación amplifica los efectos positivos."
  };
}

function generateRecommendations(factors, meta, answers) {
  const recommendations = getRecommendationsForUser(factors, answers, meta);
  
  return recommendations.slice(0, 10).map(rec => ({
    ...rec,
    implementation_timeline: getImplementationTimeline(rec),
    success_metrics: getSuccessMetrics(rec),
    barriers: getCommonBarriers(rec),
    support_resources: getSupportResources(rec)
  }));
}

function getImplementationTimeline(recommendation) {
  const timelines = {
    smoking_quit: {
      de: [
        "Woche 1-2: Vorbereitung, Termin bei Arzt/Apotheke, Nikotinersatz besorgen",
        "Woche 3: Quit-Day festlegen, Trigger eliminieren",
        "Woche 4-8: Akute Entzugsphase, tägliche Unterstützung",
        "Monat 3-6: Stabilisierung, Rückfallprävention",
        "Ab Monat 6: Langzeit-Abstinenz, neue Gewohnheiten gefestigt"
      ],
      en: [
        "Week 1-2: Preparation, doctor/pharmacy appointment, get nicotine replacement",
        "Week 3: Set quit day, eliminate triggers",
        "Week 4-8: Acute withdrawal phase, daily support",
        "Month 3-6: Stabilization, relapse prevention",
        "From month 6: Long-term abstinence, new habits established"
      ],
      es: [
        "Semana 1-2: Preparación, cita con médico/farmacia, conseguir reemplazo de nicotina",
        "Semana 3: Establecer día de abandono, eliminar desencadenantes",
        "Semana 4-8: Fase de abstinencia aguda, apoyo diario",
        "Mes 3-6: Estabilización, prevención de recaídas",
        "Desde mes 6: Abstinencia a largo plazo, nuevos hábitos establecidos"
      ]
    },
    
    weight_loss: {
      de: [
        "Woche 1-2: Ernährungstagebuch führen, IST-Analyse",
        "Woche 3-4: Kalorienziel definieren (-500 kcal/Tag), Meal Prep starten",
        "Monat 2-3: Routine etablieren, 0.5-1 kg/Woche verlieren",
        "Monat 4-6: Fortschritte konsolidieren, neue Gewohnheiten",
        "Ab Monat 6: Maintenance-Phase, Gewicht stabil halten"
      ],
      en: [
        "Week 1-2: Keep food diary, IS analysis",
        "Week 3-4: Define calorie goal (-500 kcal/day), start meal prep",
        "Month 2-3: Establish routine, lose 0.5-1 kg/week",
        "Month 4-6: Consolidate progress, new habits",
        "From month 6: Maintenance phase, keep weight stable"
      ],
      es: [
        "Semana 1-2: Llevar diario alimenticio, análisis ES",
        "Semana 3-4: Definir objetivo calórico (-500 kcal/día), comenzar meal prep",
        "Mes 2-3: Establecer rutina, perder 0.5-1 kg/semana",
        "Mes 4-6: Consolidar progreso, nuevos hábitos",
        "Desde mes 6: Fase de mantenimiento, mantener peso estable"
      ]
    }
  };
  
  return timelines[recommendation.id] || {
    de: ["Planung: Woche 1-2", "Umsetzung: Woche 3-8", "Konsolidierung: Monat 3-6"],
    en: ["Planning: Week 1-2", "Implementation: Week 3-8", "Consolidation: Month 3-6"],
    es: ["Planificación: Semana 1-2", "Implementación: Semana 3-8", "Consolidación: Mes 3-6"]
  };
}

function getSuccessMetrics(recommendation) {
  const metrics = {
    smoking_quit: {
      de: ["Tage rauchfrei", "Erspartes Geld", "CO-Wert im Atem", "Lungenfunktion (FEV1)"],
      en: ["Days smoke-free", "Money saved", "CO level in breath", "Lung function (FEV1)"],
      es: ["Días sin fumar", "Dinero ahorrado", "Nivel de CO en aliento", "Función pulmonar (FEV1)"]
    },
    weight_loss: {
      de: ["Gewicht (kg)", "BMI", "Bauchumfang (cm)", "Blutdruck", "Nüchtern-Glukose"],
      en: ["Weight (kg)", "BMI", "Waist circumference (cm)", "Blood pressure", "Fasting glucose"],
      es: ["Peso (kg)", "IMC", "Circunferencia de cintura (cm)", "Presión arterial", "Glucosa en ayunas"]
    },
    exercise_start: {
      de: ["Trainingsminuten/Woche", "Schritte/Tag", "Ruhepuls", "VO2max (geschätzt)"],
      en: ["Training minutes/week", "Steps/day", "Resting heart rate", "VO2max (estimated)"],
      es: ["Minutos de entrenamiento/semana", "Pasos/día", "Frecuencia cardíaca en reposo", "VO2max (estimado)"]
    }
  };
  
  return metrics[recommendation.id] || {
    de: ["Fortschritt tracken", "Regelmäßig messen"],
    en: ["Track progress", "Measure regularly"],
    es: ["Rastrear progreso", "Medir regularmente"]
  };
}

function getCommonBarriers(recommendation) {
  const barriers = {
    smoking_quit: {
      de: ["Entzugssymptome (Reizbarkeit, Schlafstörungen)", "Soziales Umfeld raucht weiter", "Stress-Trigger", "Gewichtszunahme-Angst"],
      en: ["Withdrawal symptoms (irritability, sleep problems)", "Social environment continues smoking", "Stress triggers", "Weight gain fear"],
      es: ["Síntomas de abstinencia (irritabilidad, problemas de sueño)", "Entorno social continúa fumando", "Desencadenantes de estrés", "Miedo a aumento de peso"]
    },
    weight_loss: {
      de: ["Heißhunger-Attacken", "Soziale Events (Essen gehen)", "Plateau-Phasen", "Zeitmanagement für Meal Prep"],
      en: ["Cravings", "Social events (eating out)", "Plateau phases", "Time management for meal prep"],
      es: ["Antojos", "Eventos sociales (comer fuera)", "Fases de meseta", "Gestión del tiempo para meal prep"]
    },
    exercise_start: {
      de: ["Zeitmangel", "Anfangs-Muskelkater", "Schlechtes Wetter", "Fehlende Motivation"],
      en: ["Lack of time", "Initial muscle soreness", "Bad weather", "Lack of motivation"],
      es: ["Falta de tiempo", "Dolor muscular inicial", "Mal tiempo", "Falta de motivación"]
    }
  };
  
  return barriers[recommendation.id] || {
    de: ["Gewohnheiten ändern ist schwer", "Soziales Umfeld nicht unterstützend"],
    en: ["Changing habits is difficult", "Social environment not supportive"],
    es: ["Cambiar hábitos es difícil", "Entorno social no apoya"]
  };
}

function getSupportResources(recommendation) {
  const resources = {
    smoking_quit: {
      de: [
        "Telefonberatung: BZgA-Hotline 0800 8 31 31 31",
        "Apps: Smoke Free, QuitNow",
        "Selbsthilfegruppen: Rauchfrei-Programm",
        "Medikamente: Nikotinpflaster, Vareniclin (Champix), Bupropion"
      ],
      en: [
        "Hotline: 1-800-QUIT-NOW (USA)",
        "Apps: Smoke Free, QuitNow",
        "Support groups: Local quit smoking programs",
        "Medications: Nicotine patches, Varenicline (Chantix), Bupropion"
      ],
      es: [
        "Línea directa: 1-800-QUIT-NOW (EE.UU.)",
        "Apps: Smoke Free, QuitNow",
        "Grupos de apoyo: Programas locales para dejar de fumar",
        "Medicamentos: Parches de nicotina, Vareniclina (Champix), Bupropión"
      ]
    },
    weight_loss: {
      de: [
        "Ernährungsberatung: DGE-zertifizierte Berater",
        "Apps: MyFitnessPal, Noom, YAZIO",
        "Selbsthilfegruppen: Weight Watchers, Overeaters Anonymous",
        "Bei BMI >35: Adipositas-Zentrum konsultieren"
      ],
      en: [
        "Nutrition counseling: Registered dietitians",
        "Apps: MyFitnessPal, Noom, Lose It!",
        "Support groups: Weight Watchers, Overeaters Anonymous",
        "At BMI >35: Consult obesity center"
      ],
      es: [
        "Asesoramiento nutricional: Dietistas registrados",
        "Apps: MyFitnessPal, Noom, Lose It!",
        "Grupos de apoyo: Weight Watchers, Overeaters Anonymous",
        "Con IMC >35: Consultar centro de obesidad"
      ]
    },
    exercise_start: {
      de: [
        "Apps: Nike Training Club, Adidas Running, Strava",
        "Online: YouTube Fitness-Kanäle (Pamela Reif, MadFit)",
        "Vor Ort: Fitnessstudio, Volkshochschule, Sportvereine",
        "Bei Vorerkrankungen: Reha-Sport auf Rezept"
      ],
      en: [
        "Apps: Nike Training Club, Adidas Running, Strava",
        "Online: YouTube fitness channels",
        "In person: Gym, community centers, sports clubs",
        "With pre-existing conditions: Rehabilitation sports on prescription"
      ],
      es: [
        "Apps: Nike Training Club, Adidas Running, Strava",
        "Online: Canales de fitness de YouTube",
        "En persona: Gimnasio, centros comunitarios, clubes deportivos",
        "Con condiciones preexistentes: Deportes de rehabilitación con receta"
      ]
    }
  };
  
  return resources[recommendation.id] || {
    de: ["Arzt konsultieren", "Online-Ressourcen suchen"],
    en: ["Consult doctor", "Search online resources"],
    es: ["Consultar médico", "Buscar recursos en línea"]
  };
}

function determinePriorities(calculation, meta, answers) {
  const criticalFactors = Object.entries(calculation.factors)
    .filter(([_, f]) => f.score < 30)
    .sort((a, b) => a[1].score - b[1].score)
    .slice(0, 3);
  
  const highImpactFactors = Object.entries(calculation.factors)
    .filter(([_, f]) => f.impact < -3)
    .sort((a, b) => a[1].impact - b[1].impact)
    .slice(0, 3);
  
  const quickWins = Object.entries(calculation.factors)
    .filter(([id, f]) => f.score < 60 && ['diet', 'fitness', 'sleep'].includes(id))
    .sort((a, b) => b[1].impact - a[1].impact)
    .slice(0, 2);
  
  return {
    critical: criticalFactors.map(([id, f]) => ({
      factor_id: id,
      score: f.score,
      impact: f.impact,
      urgency: 'immediate'
    })),
    high_impact: highImpactFactors.map(([id, f]) => ({
      factor_id: id,
      impact: f.impact,
      potential_gain: Math.abs(f.impact) * 0.7
    })),
    quick_wins: quickWins.map(([id, f]) => ({
      factor_id: id,
      score: f.score,
      difficulty: 'moderate',
      timeframe: '3 months'
    }))
  };
}

function generateInsights(calculation, meta, answers) {
  const insights = [];
  
  const age = calculation.age;
  if (age >= 65 && calculation.factors.frailty && calculation.factors.frailty.score < 50) {
    insights.push({
      type: 'age_specific',
      severity: 'high',
      message: {
        de: `FRAILTY-RISIKO: Mit ${age} und funktionellen Einschränkungen steigt dein Risiko für Stürze, Krankenhausaufenthalte und Pflegebedürftigkeit exponentiell. Funktionstraining ist jetzt PRIORITÄT #1!`,
        en: `FRAILTY RISK: At ${age} with functional limitations, your risk for falls, hospitalizations and need for care increases exponentially. Functional training is now PRIORITY #1!`,
        es: `RIESGO DE FRAGILIDAD: A los ${age} con limitaciones funcionales, tu riesgo de caídas, hospitalizaciones y necesidad de cuidados aumenta exponencialmente. ¡El entrenamiento funcional es ahora PRIORIDAD #1!`
      }
    });
  }
  
  const bmi = meta.meta_height && meta.meta_weight 
    ? meta.meta_weight / Math.pow(meta.meta_height / 100, 2) 
    : null;
  
  if (bmi && bmi > 30 && calculation.factors.metabolic && calculation.factors.metabolic.score < 50) {
    insights.push({
      type: 'compound_risk',
      severity: 'high',
      message: {
        de: `METABOLISCHES SYNDROM WAHRSCHEINLICH: BMI ${Math.round(bmi)} + schlechter Stoffwechsel-Score = hohes Risiko für Diabetes Typ 2 und Herzkrankheiten. 5% Gewichtsverlust senkt Risiko um 58%!`,
        en: `METABOLIC SYNDROME LIKELY: BMI ${Math.round(bmi)} + poor metabolic score = high risk for type 2 diabetes and heart disease. 5% weight loss reduces risk by 58%!`,
        es: `SÍNDROME METABÓLICO PROBABLE: IMC ${Math.round(bmi)} + puntuación metabólica pobre = alto riesgo de diabetes tipo 2 y enfermedad cardíaca. ¡5% de pérdida de peso reduce riesgo en 58%!`
      }
    });
  }
  
  const hasNegativeSynergies = calculation.interactions.filter(i => 
    i.type === 'synergy_negative' && i.severity === 'high'
  ).length > 0;
  
  if (hasNegativeSynergies) {
    insights.push({
      type: 'synergy_warning',
      severity: 'critical',
      message: {
        de: `GEFÄHRLICHE INTERAKTIONEN: Deine Risikofaktoren verstärken sich gegenseitig (Multiplikator ${calculation.interaction_multiplier}x). Das ist NICHT additiv - die Gefahr potenziert sich!`,
        en: `DANGEROUS INTERACTIONS: Your risk factors amplify each other (multiplier ${calculation.interaction_multiplier}x). This is NOT additive - the danger is potentiated!`,
        es: `INTERACCIONES PELIGROSAS: Tus factores de riesgo se amplifican mutuamente (multiplicador ${calculation.interaction_multiplier}x). Esto NO es aditivo - ¡el peligro se potencia!`
      }
    });
  }
  
  const hasPositiveSynergies = calculation.interactions.filter(i => 
    i.type === 'synergy_positive'
  ).length > 0;
  
  if (hasPositiveSynergies && calculation.total_life_expectancy > calculation.baseline + 3) {
    insights.push({
      type: 'synergy_positive',
      severity: 'low',
      message: {
        de: "POSITIVE SYNERGIEN: Deine gesunden Gewohnheiten verstärken sich gegenseitig! Mediterrane Ernährung + Bewegung + Soziales = optimaler Schutz.",
        en: "POSITIVE SYNERGIES: Your healthy habits reinforce each other! Mediterranean diet + exercise + social = optimal protection.",
        es: "SINERGIAS POSITIVAS: ¡Tus hábitos saludables se refuerzan mutuamente! Dieta mediterránea + ejercicio + social = protección óptima."
      }
    });
  }
  
  const poorSleepAndStress = calculation.factors.sleep && calculation.factors.sleep.score < 50 &&
                            calculation.factors.stress && calculation.factors.stress.score < 50;
  
  if (poorSleepAndStress) {
    insights.push({
      type: 'vicious_cycle',
      severity: 'medium',
      message: {
        de: "TEUFELSKREIS: Schlechter Schlaf + Stress verstärken sich gegenseitig. Priorisiere Schlafhygiene - das verbessert automatisch dein Stress-Management!",
        en: "VICIOUS CYCLE: Poor sleep + stress reinforce each other. Prioritize sleep hygiene - this automatically improves your stress management!",
        es: "CÍRCULO VICIOSO: Mal sueño + estrés se refuerzan mutuamente. ¡Prioriza higiene del sueño - esto mejora automáticamente tu manejo del estrés!"
      }
    });
  }
  
  if (calculation.percentile >= 90) {
    insights.push({
      type: 'excellence',
      severity: 'low',
      message: {
        de: `TOP 10%! Du gehörst zu den gesündesten ${100 - calculation.percentile}% deiner Altersgruppe. Halte diesen Standard und optimiere weiter - Langlebigkeit ist ein Marathon!`,
        en: `TOP 10%! You're among the healthiest ${100 - calculation.percentile}% of your age group. Maintain this standard and keep optimizing - longevity is a marathon!`,
        es: `¡TOP 10%! Estás entre el ${100 - calculation.percentile}% más saludable de tu grupo de edad. ¡Mantén este estándar y sigue optimizando - la longevidad es un maratón!`
      }
    });
  }


  
  return insights;
}

export default {
  generateProfile,
  generateOverview,
  generateRiskProfile,
  generateFactorAnalysis,
  generateInteractionAnalysis,
  generateRecommendations,
  determinePriorities,
  generateInsights
};
