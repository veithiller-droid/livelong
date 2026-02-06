// data/penalty_reference.js
// PENALTY REFERENCE GUIDE - Version 2.0.0
// 
// Diese Datei dient NUR zur Dokumentation und Übersicht!
// Die tatsächlichen Penalty-Werte werden in questions.js implementiert.
// 
// PHILOSOPHIE:
// - Start: 99 Jahre (bzw. Country Maximum)
// - Schlechtes Verhalten = Penalty (Abzug)
// - Gutes Verhalten = Keine Penalty (0)
// - Einziger Bonus: Prevention (+2 Jahre)
// - Manifeste Krankheiten = Zusätzliche Penalty

/**
 * ============================================
 * VERHALTENS-PENALTIES
 * ============================================
 * Diese Penalties gelten für ALLE, unabhängig davon ob Krankheiten eingetreten sind.
 */

export const BEHAVIOR_PENALTIES = {
  
  // ==========================================
  // 1. RAUCHEN (max -10 Jahre)
  // ==========================================
  SMOKING: {
    description: "Rauchen ist der größte einzelne vermeidbare Risikofaktor",
    range: "0 bis -10 Jahre",
    age_weighted: true,  // Vergangene Exposition wird nach Jahren gewichtet
    
    penalties: {
      never: {
        value: 0,
        label: "Nie geraucht",
        description: "Optimal - kein Tabakkonsum"
      },
      
      ex_10plus: {
        value: -1,
        label: "Ex-Raucher (10+ Jahre rauchfrei)",
        description: "Minimaler Restschaden, fast wie Nie-Raucher"
      },
      
      ex_5_10: {
        value: -2,
        label: "Ex-Raucher (5-10 Jahre rauchfrei)",
        description: "Regeneration läuft, aber nicht vollständig"
      },
      
      ex_1_5: {
        value: -4,
        label: "Ex-Raucher (1-5 Jahre rauchfrei)",
        description: "Akute Phase vorbei, aber signifikanter Restschaden"
      },
      
      current_light: {
        value: -6,
        label: "Aktueller Raucher (leicht, 1-5 Zigaretten/Tag)",
        description: "Auch wenig Rauchen ist schädlich"
      },
      
      current_moderate: {
        value: -8,
        label: "Aktueller Raucher (moderat, 6-20 Zigaretten/Tag)",
        description: "Signifikanter Schaden an allen Organsystemen"
      },
      
      current_heavy: {
        value: -10,
        label: "Aktueller Raucher (stark, 20+ Zigaretten/Tag)",
        description: "Massive Schädigung, höchstes Risiko"
      }
    },
    
    question_id: "smoke_01",
    
    note: "Für Ex-Raucher wird age-weighting angewendet: penalty × (years_smoked / potential_years)"
  },
  
  // ==========================================
  // 2. ERNÄHRUNG (max -10 Jahre)
  // ==========================================
  DIET: {
    description: "Ernährung ist multifaktoriell - mehrere Fragen tragen bei",
    range: "0 bis -10 Jahre",
    age_weighted: false,
    
    components: {
      
      // FETTE
      cooking_fat: {
        good: {
          value: 0,
          label: "Olivenöl, Rapsöl, pflanzliche Öle",
          question: "diet_01"
        },
        bad: {
          value: -1,
          label: "Butter, Schweineschmalz, tierische Fette",
          question: "diet_02"
        }
      },
      
      // GEMÜSE
      vegetables: {
        good: {
          value: 0,
          label: "Mindestens 2 Portionen Gemüse täglich",
          question: "diet_03"
        },
        bad: {
          value: -2,
          label: "Wenig oder kein Gemüse"
        }
      },
      
      // OBST
      fruit: {
        good: {
          value: 0,
          label: "Mindestens 1 Portion Obst täglich",
          question: "diet_04"
        },
        bad: {
          value: -1,
          label: "Wenig oder kein Obst"
        }
      },
      
      // GETREIDE
      whole_grains: {
        good: {
          value: 0,
          label: "Überwiegend Vollkorn",
          question: "diet_05"
        },
        bad: {
          value: -1,
          label: "Überwiegend Weißmehl"
        }
      },
      
      // HÜLSENFRÜCHTE
      legumes: {
        good: {
          value: 0,
          label: "Mindestens 2× pro Woche Hülsenfrüchte",
          question: "diet_06"
        },
        bad: {
          value: -1,
          label: "Selten oder keine Hülsenfrüchte"
        }
      },
      
      // FISCH
      fish: {
        good: {
          value: 0,
          label: "Mindestens 2× pro Woche Fisch",
          question: "diet_07"
        },
        bad: {
          value: -1,
          label: "Selten oder kein Fisch"
        }
      },
      
      // NÜSSE
      nuts: {
        good: {
          value: 0,
          label: "Täglich eine Handvoll Nüsse",
          question: "diet_08"
        },
        bad: {
          value: -1,
          label: "Selten oder keine Nüsse"
        }
      },
      
      // VERARBEITETES FLEISCH (NEGATIV!)
      processed_meat: {
        value: -3,
        label: "Mindestens 3× pro Woche Wurst, Speck, Salami",
        question: "diet_09",
        description: "WHO Gruppe 1 Karzinogen"
      },
      
      // ROTES FLEISCH (NEGATIV!)
      red_meat: {
        value: -2,
        label: "Mindestens 3× pro Woche rotes Fleisch als Hauptbestandteil",
        question: "diet_10",
        description: "WHO Gruppe 2A - wahrscheinlich karzinogen"
      },
      
      // ZUCKERGETRÄNKE (NEGATIV!)
      sugar_drinks: {
        value: -2,
        label: "Regelmäßig (3+× pro Woche) zuckerhaltige Getränke",
        question: "diet_11",
        description: "Diabetes, Adipositas, Karies"
      },
      
      // FERTIGGERICHTE (NEGATIV!)
      processed_food: {
        value: -2,
        label: "Regelmäßig (3+× pro Woche) Fertiggerichte, Fast Food",
        question: "diet_12",
        description: "Ultra-processed foods, hohe Entzündungsmarker"
      }
    },
    
    calculation: "Summe aller Ernährungs-Penalties (capped at -10)",
    
    examples: {
      perfect_mediterranean: {
        score: 0,
        description: "Olivenöl, viel Gemüse/Obst, Vollkorn, Hülsenfrüchte, Fisch, Nüsse, kein verarbeitetes Fleisch"
      },
      average: {
        score: -5,
        description: "Einige gute Elemente, aber auch Weißmehl, wenig Fisch, gelegentlich Fast Food"
      },
      poor: {
        score: -8,
        description: "Wenig Gemüse/Obst, viel Fleisch/Wurst, Fertiggerichte, Zuckergetränke"
      },
      terrible: {
        score: -10,
        description: "Nur Fast Food, kein Gemüse/Obst/Fisch, täglich verarbeitetes Fleisch"
      }
    }
  },
  
  // ==========================================
  // 3. BEWEGUNG (max -7 Jahre)
  // ==========================================
  EXERCISE: {
    description: "Körperliche Aktivität - einer der stärksten Schutzfaktoren",
    range: "0 bis -7 Jahre",
    age_weighted: false,
    
    penalties: {
      exercise_regular: {
        value: 0,
        label: "Mindestens 3× pro Woche Sport (Puls/Atmung steigt)",
        question: "fitness_01",
        description: "WHO-Empfehlung erfüllt"
      },
      
      no_exercise: {
        value: -5,
        label: "Kein regelmäßiger Sport",
        question: "fitness_01",
        description: "Fehlt einer der wichtigsten Schutzfaktoren"
      }
    }
  },
  
  // ==========================================
  // 4. SEDENTÄR (Zusatz zu Bewegung, max -3 Jahre)
  // ==========================================
  SEDENTARY: {
    description: "Sitzzeit - unabhängiger Risikofaktor zusätzlich zu fehlender Bewegung",
    range: "0 bis -3 Jahre",
    age_weighted: false,
    
    penalties: {
      low_sitting: {
        value: 0,
        label: "Weniger als 8 Stunden Sitzen/Liegen pro Tag",
        question: "fitness_02"
      },
      
      moderate_sitting: {
        value: -1,
        label: "8-10 Stunden Sitzen/Liegen",
        question: "fitness_02"
      },
      
      high_sitting: {
        value: -2,
        label: "Mehr als 10 Stunden Sitzen/Liegen",
        question: "fitness_02",
        description: "Erhöhtes Risiko auch mit Sport!"
      }
    },
    
    note: "Sedentäre Zeit ist ZUSÄTZLICH zu fehlender Bewegung - beide addieren sich!"
  },
  
  // ==========================================
  // 5. ALKOHOL (max -7 Jahre)
  // ==========================================
  ALCOHOL: {
    description: "Alkoholkonsum - J-Kurve (moderat evtl. neutral, viel schädlich)",
    range: "0 bis -7 Jahre",
    age_weighted: false,
    
    penalties: {
      // Frequenz
      frequency_never: {
        value: 0,
        label: "Nie oder sehr selten",
        question: "alcohol_01"
      },
      
      frequency_monthly: {
        value: 0,
        label: "Monatlich",
        question: "alcohol_01",
        description: "Akzeptabel niedrige Frequenz"
      },
      
      frequency_weekly: {
        value: -1,
        label: "Wöchentlich",
        question: "alcohol_01",
        description: "Regelmäßig aber kontrolliert"
      },
      
      frequency_daily: {
        value: -3,
        label: "Täglich",
        question: "alcohol_01",
        description: "Erhöhtes Risiko für Abhängigkeit und Leberschäden"
      },
      
      // Menge pro Anlass
      amount_low: {
        value: 0,
        label: "1-2 Drinks pro Anlass",
        question: "alcohol_02"
      },
      
      amount_moderate: {
        value: -1,
        label: "3-4 Drinks pro Anlass",
        question: "alcohol_02"
      },
      
      amount_high: {
        value: -3,
        label: "5+ Drinks pro Anlass",
        question: "alcohol_02",
        description: "Binge Drinking - sehr schädlich"
      },
      
      // Binge Drinking
      binge_drinking: {
        value: -3,
        label: "Mindestens einmal in letzten 12 Monaten 5+ Drinks an einem Tag",
        question: "alcohol_03",
        description: "Akute Gefäßschäden, Verletzungsrisiko"
      }
    },
    
    calculation: "Maximum von Frequenz-Penalty und Menge-Penalty + Binge-Penalty",
    
    examples: {
      never: { score: 0 },
      moderate: { score: -1, description: "Wöchentlich 1-2 Drinks" },
      problematic: { score: -5, description: "Täglich 3+ Drinks" },
      severe: { score: -7, description: "Täglich 5+ Drinks + Binge Drinking" }
    }
  },
  
  // ==========================================
  // 6. SCHLAF (max -6 Jahre)
  // ==========================================
  SLEEP: {
    description: "Schlafqualität und -dauer - essentiell für Regeneration",
    range: "0 bis -6 Jahre",
    age_weighted: false,
    
    penalties: {
      optimal: {
        value: 0,
        label: "7-8 Stunden + erholsam",
        questions: ["sleep_01", "sleep_02"],
        description: "Optimal für die meisten Erwachsenen"
      },
      
      duration_ok_quality_poor: {
        value: -2,
        label: "7-8 Stunden, aber nicht erholsam",
        questions: ["sleep_01", "sleep_02"],
        description: "Schlafstörungen, Apnoe möglich"
      },
      
      duration_suboptimal: {
        value: -3,
        label: "Weniger als 7 oder mehr als 9 Stunden",
        question: "sleep_01",
        description: "U-Kurve - beide Extreme sind schädlich"
      },
      
      severe_deprivation: {
        value: -6,
        label: "Chronisch weniger als 5 Stunden + nicht erholsam",
        questions: ["sleep_01", "sleep_02"],
        description: "Massiv erhöhtes Risiko für alle Ursachen"
      }
    },
    
    calculation: "Dauer-Penalty + Qualitäts-Penalty (capped at -6)"
  },
  
  // ==========================================
  // 7. SOZIALES UMFELD (max -7 Jahre)
  // ==========================================
  SOCIAL: {
    description: "Soziale Kontakte - genauso wichtig wie Nicht-Rauchen!",
    range: "0 bis -7 Jahre",
    age_weighted: false,
    
    penalties: {
      optimal: {
        value: 0,
        label: "Regelmäßige Kontakte + Partnerschaft + nicht einsam",
        questions: ["social_01", "social_02", "social_03"],
        description: "Starkes soziales Netzwerk"
      },
      
      good: {
        value: -1,
        label: "Regelmäßige Kontakte, aber keine Partnerschaft",
        questions: ["social_02", "social_03"]
      },
      
      moderate: {
        value: -3,
        label: "Gelegentliche Kontakte oder fühlt sich einsam",
        questions: ["social_01", "social_02"]
      },
      
      lonely: {
        value: -5,
        label: "Fühlt sich häufig einsam trotz gelegentlicher Kontakte",
        question: "social_01",
        description: "Subjektive Einsamkeit ist schädlicher als objektive Isolation"
      },
      
      isolated: {
        value: -7,
        label: "Kein regelmäßiger Kontakt + fühlt sich einsam",
        questions: ["social_01", "social_02"],
        description: "Vollständige Isolation - so schädlich wie starkes Rauchen"
      }
    }
  },
  
  // ==========================================
  // 8. STRESS & ERHOLUNG (max -5 Jahre)
  // ==========================================
  STRESS: {
    description: "Chronischer Stress ohne Erholung schädigt alle Systeme",
    range: "0 bis -5 Jahre",
    age_weighted: false,
    
    penalties: {
      managed: {
        value: 0,
        label: "Nicht sehr stressig + ausreichend Erholung",
        questions: ["stress_01", "stress_02"]
      },
      
      moderate: {
        value: -2,
        label: "Gelegentlich stressig, aber Erholungsphasen vorhanden",
        questions: ["stress_01", "stress_02"]
      },
      
      chronic_with_recovery: {
        value: -3,
        label: "Sehr stressig, aber ausreichend Erholung",
        questions: ["stress_01", "stress_02"]
      },
      
      chronic_no_recovery: {
        value: -5,
        label: "Sehr stressig + keine ausreichende Erholung",
        questions: ["stress_01", "stress_02"],
        description: "Chronische Kortisol-Erhöhung, Immunsuppression"
      }
    }
  },
  
  // ==========================================
  // 9. MENTAL HEALTH (max -6 Jahre)
  // ==========================================
  MENTAL_HEALTH: {
    description: "Psychische Gesundheit - untrennbar von körperlicher Gesundheit",
    range: "0 bis -6 Jahre",
    age_weighted: false,
    
    penalties: {
      no_issues: {
        value: 0,
        label: "Keine psychischen Beschwerden",
        questions: ["mental_01", "mental_02"]
      },
      
      mild: {
        value: -2,
        label: "Gelegentliche leichte Beschwerden",
        description: "Subsyndromal, nicht behandlungsbedürftig"
      },
      
      treated: {
        value: -3,
        label: "Depression oder Angststörung, in Behandlung",
        questions: ["mental_01", "mental_02"],
        description: "Behandlung reduziert Risiko deutlich"
      },
      
      untreated: {
        value: -6,
        label: "Depression oder Angststörung, nicht behandelt",
        questions: ["mental_01", "mental_02"],
        description: "Erhöht kardiovaskuläres Risiko um 60-100%"
      }
    }
  },
  
  // ==========================================
  // 10. PREVENTION (+2 Jahre BONUS!)
  // ==========================================
  PREVENTION: {
    description: "Vorsorgeuntersuchungen - EINZIGER BONUS!",
    range: "+2 bis -3 Jahre",
    age_weighted: false,
    
    penalties: {
      excellent: {
        value: +2,
        label: "Konsequente Teilnahme an allen empfohlenen Vorsorgeuntersuchungen",
        questions: ["prevention_03", "prevention_04"],
        description: "EINZIGER BONUS! Früherkennung rettet Leben"
      },
      
      regular: {
        value: 0,
        label: "Regelmäßige Vorsorgeuntersuchungen",
        question: "prevention_03"
      },
      
      occasional: {
        value: -1,
        label: "Gelegentliche Vorsorge",
        question: "prevention_03"
      },
      
      never: {
        value: -3,
        label: "Keine Vorsorgeuntersuchungen",
        question: "prevention_03",
        description: "Krankheiten werden zu spät erkannt"
      }
    }
  }
};

/**
 * ============================================
 * KRANKHEITS-PENALTIES (nur wenn manifest!)
 * ============================================
 * Diese Penalties kommen ZUSÄTZLICH zu Verhaltens-Penalties,
 * ABER NUR wenn die Krankheit bereits diagnostiziert wurde!
 * 
 * Wir raten NICHT ob jemand eine Krankheit bekommen wird.
 * Nur manifeste Diagnosen zählen.
 */

export const DISEASE_PENALTIES = {
  
  // ==========================================
  // CARDIOVASCULAR
  // ==========================================
  CARDIOVASCULAR: {
    description: "Herz-Kreislauf-Erkrankungen - gewichtet nach Zeit seit Ereignis",
    
    heart_attack: {
      recent: {
        value: -10,
        label: "Herzinfarkt vor weniger als 1 Jahr",
        timeframe: "<1 Jahr",
        description: "Höchstes Risiko für Re-Infarkt und Herzinsuffizienz"
      },
      
      medium: {
        value: -8,
        label: "Herzinfarkt vor 1-5 Jahren",
        timeframe: "1-5 Jahre",
        description: "Erhöhtes Risiko bleibt bestehen"
      },
      
      remote: {
        value: -5,
        label: "Herzinfarkt vor mehr als 5 Jahren",
        timeframe: ">5 Jahre",
        description: "Risiko sinkt, bleibt aber erhöht"
      }
    },
    
    heart_failure: {
      severe: {
        value: -12,
        label: "Herzinsuffizienz NYHA III-IV",
        description: "Schwere Einschränkung, schlechte Prognose"
      },
      
      moderate: {
        value: -8,
        label: "Herzinsuffizienz NYHA II",
        description: "Moderate Einschränkung"
      },
      
      mild: {
        value: -5,
        label: "Herzinsuffizienz NYHA I",
        description: "Leichte Einschränkung"
      }
    },
    
    stroke: {
      severe: {
        value: -10,
        label: "Schlaganfall mit Behinderung",
        description: "Bleibende neurologische Defizite"
      },
      
      mild: {
        value: -6,
        label: "Schlaganfall ohne Behinderung oder TIA",
        description: "Erhöhtes Rezidivrisiko"
      }
    },
    
    peripheral_artery_disease: {
      value: -5,
        label: "Periphere arterielle Verschlusskrankheit",
      description: "Marker für generalisierte Atherosklerose"
    }
  },
  
  // ==========================================
  // METABOLIC
  // ==========================================
  METABOLIC: {
    description: "Stoffwechselerkrankungen",
    
    diabetes_type2: {
      uncontrolled: {
        value: -8,
        label: "Diabetes Typ 2, schlecht eingestellt (HbA1c >9%)",
        description: "Hohes Risiko für Folgeschäden"
      },
      
      controlled: {
        value: -4,
        label: "Diabetes Typ 2, gut eingestellt (HbA1c <7%)",
        description: "Risiko deutlich reduziert durch Kontrolle"
      }
    },
    
    diabetes_type1: {
      value: -6,
      label: "Diabetes Typ 1",
      description: "Autoimmun, lebenslange Therapie"
    },
    
    metabolic_syndrome: {
      value: -5,
      label: "Metabolisches Syndrom (ohne Diabetes)",
      description: "Cluster von Risikofaktoren"
    }
  },
  
  // ==========================================
  // CANCER
  // ==========================================
  CANCER: {
    description: "Krebserkrankungen - stark abhängig von Stadium und Prognose",
    
    active: {
      metastatic: {
        value: -20,
        label: "Metastasierter Krebs",
        description: "Schlechteste Prognose"
      },
      
      localized: {
        value: -15,
        label: "Lokalisierter aktiver Krebs",
        description: "In Behandlung"
      }
    },
    
    remission: {
      recent: {
        value: -8,
        label: "In Remission seit weniger als 2 Jahren",
        timeframe: "<2 Jahre",
        description: "Hohes Rezidivrisiko"
      },
      
      medium: {
        value: -5,
        label: "In Remission seit 2-5 Jahren",
        timeframe: "2-5 Jahre",
        description: "Rezidivrisiko sinkt"
      },
      
      long_term: {
        value: -2,
        label: "In Remission seit mehr als 5 Jahren",
        timeframe: ">5 Jahre",
        description: "Bei vielen Krebsarten gilt dies als geheilt"
      }
    }
  },
  
  // ==========================================
  // PULMONARY
  // ==========================================
  PULMONARY: {
    description: "Lungenerkrankungen",
    
    copd: {
      severe: {
        value: -10,
        label: "COPD GOLD III-IV (schwer)",
        description: "FEV1 <50%, hohe Mortalität"
      },
      
      moderate: {
        value: -6,
        label: "COPD GOLD II (moderat)",
        description: "FEV1 50-80%"
      },
      
      mild: {
        value: -3,
        label: "COPD GOLD I (leicht)",
        description: "FEV1 >80%, Symptome vorhanden"
      }
    },
    
    asthma: {
      uncontrolled: {
        value: -3,
        label: "Unkontrolliertes Asthma",
        description: "Häufige Exazerbationen"
      },
      
      controlled: {
        value: -1,
        label: "Kontrolliertes Asthma",
        description: "Gut eingestellt"
      }
    }
  },
  
  // ==========================================
  // RENAL
  // ==========================================
  RENAL: {
    description: "Nierenerkrankungen",
    
    kidney_failure: {
      dialysis: {
        value: -15,
        label: "Nierenversagen mit Dialyse",
        description: "5-Jahres-Überlebensrate ~40%"
      },
      
      stage4: {
        value: -10,
        label: "Chronische Nierenerkrankung Stadium 4 (GFR 15-30)",
        description: "Schwere Einschränkung"
      },
      
      stage3: {
        value: -5,
        label: "Chronische Nierenerkrankung Stadium 3 (GFR 30-60)",
        description: "Moderate Einschränkung"
      }
    }
  },
  
  // ==========================================
  // LIVER
  // ==========================================
  LIVER: {
    description: "Lebererkrankungen",
    
    cirrhosis: {
      decompensated: {
        value: -15,
        label: "Dekompensierte Leberzirrhose",
        description: "Aszites, Enzephalopathie, Blutungen"
      },
      
      compensated: {
        value: -10,
        label: "Kompensierte Leberzirrhose",
        description: "Keine akuten Komplikationen"
      }
    },
    
    hepatitis: {
      chronic: {
        value: -5,
        label: "Chronische Hepatitis (B/C)",
        description: "Erhöhtes Zirrhose- und Karzinom-Risiko"
      }
    }
  },
  
  // ==========================================
  // NEUROLOGICAL
  // ==========================================
  NEUROLOGICAL: {
    description: "Neurologische Erkrankungen",
    
    dementia: {
      severe: {
        value: -10,
        label: "Schwere Demenz",
        description: "Vollständig abhängig"
      },
      
      moderate: {
        value: -7,
        label: "Moderate Demenz",
        description: "Signifikante Einschränkung"
      },
      
      mild: {
        value: -4,
        label: "Leichte Demenz oder MCI",
        description: "Erste Symptome"
      }
    },
    
    parkinsons: {
      advanced: {
        value: -8,
        label: "Fortgeschrittener Parkinson",
        description: "Hoehn & Yahr Stadium 4-5"
      },
      
      early: {
        value: -4,
        label: "Früher Parkinson",
        description: "Hoehn & Yahr Stadium 1-2"
      }
    }
  },
  
  // ==========================================
  // FUNCTIONAL
  // ==========================================
  FUNCTIONAL: {
    description: "Funktionelle Einschränkungen - Marker für beschleunigte Alterung",
    
    frailty: {
      severe: {
        value: -10,
        label: "Schwere Gebrechlichkeit (Frailty)",
        description: "4-5 Fried-Kriterien erfüllt"
      },
      
      moderate: {
        value: -6,
        label: "Moderate Gebrechlichkeit",
        description: "3 Fried-Kriterien erfüllt"
      },
      
      mild: {
        value: -3,
        label: "Leichte Gebrechlichkeit (Pre-Frail)",
        description: "1-2 Fried-Kriterien erfüllt"
      }
    },
    
    polypharmacy: {
      extreme: {
        value: -5,
        label: "Polypharmazie extrem (10+ Medikamente)",
        description: "Hohes Interaktionsrisiko"
      },
      
      high: {
        value: -3,
        label: "Polypharmazie hoch (5-9 Medikamente)",
        description: "Multimorbidität"
      },
      
      moderate: {
        value: -1,
        label: "Polypharmazie moderat (3-4 Medikamente)",
        description: "Mehrere chronische Erkrankungen"
      }
    },
    
    cognitive_impairment: {
      value: -4,
      label: "Kognitive Einschränkung (ohne Demenz)",
      description: "Gedächtnis-/Konzentrationsprobleme im Alltag"
    },
    
    sensory_loss: {
      severe: {
        value: -3,
        label: "Schwere Seh-/Höreinschränkung trotz Hilfsmitteln",
        description: "Sturzrisiko, soziale Isolation"
      },
      
      moderate: {
        value: -2,
        label: "Moderate Seh-/Höreinschränkung",
        description: "Mit Hilfsmitteln kompensierbar"
      }
    }
  }
};

/**
 * ============================================
 * LÄNDER-MAXIMA
 * ============================================
 */

export const COUNTRY_MAXIMUM = {
  // Blue Zones & Top Countries
  japan: 100,
  italy: 99,
  greece: 99,
  spain: 99,
  
  // Sehr gute Systeme
  switzerland: 98,
  singapore: 98,
  australia: 98,
  iceland: 98,
  norway: 97,
  sweden: 97,
  netherlands: 97,
  france: 97,
  canada: 97,
  south_korea: 98,
  
  // Gute Systeme
  germany: 96,
  uk: 96,
  austria: 96,
  portugal: 96,
  belgium: 96,
  finland: 96,
  new_zealand: 97,
  
  // Durchschnitt
  usa: 95,
  poland: 95,
  czech_republic: 95,
  slovenia: 95,
  
  // Unterdurchschnitt
  russia: 92,
  brazil: 94,
  mexico: 94,
  india: 93,
  china: 95,
  
  // Default
  other: 95
};

/**
 * ============================================
 * VERWENDUNGSHINWEISE
 * ============================================
 * 
 * 1. VERHALTENS-PENALTIES:
 *    - Werden IMMER angewendet
 *    - Basieren auf aktuellen Gewohnheiten
 *    - Vergangene Expositionen (Rauchen) werden age-weighted
 * 
 * 2. KRANKHEITS-PENALTIES:
 *    - Werden NUR angewendet wenn Krankheit MANIFEST ist
 *    - Kommen ZUSÄTZLICH zu Verhaltens-Penalties
 *    - Gewichtet nach Schwere und Zeitpunkt
 * 
 * 3. BERECHNUNG:
 *    LE = COUNTRY_MAXIMUM + behaviorPenalties + diseasePenalties
 *    (alle Penalties sind negativ, außer Prevention +2)
 * 
 * 4. MINIMUM:
 *    LE >= currentAge + 1 (mindestens noch 1 Jahr)
 * 
 * 5. BEISPIEL:
 *    Deutscher, 60J, raucht 40 Jahre, kein Sport, Diabetes, Herzinfarkt
 *    
 *    Maximum: 96 (Deutschland)
 *    Verhalten:
 *      - Rauchen: -10 × (40/76) = -5.3
 *      - Kein Sport: -5
 *      - Ernährung schlecht: -8
 *    Krankheiten:
 *      - Diabetes: -4 (kontrolliert)
 *      - Herzinfarkt: -8 (vor 2J)
 *    
 *    Total: 96 - 5.3 - 5 - 8 - 4 - 8 = 65.7 Jahre
 *    Verbleibend: 5.7 Jahre
 */

export default {
  BEHAVIOR_PENALTIES,
  DISEASE_PENALTIES,
  COUNTRY_MAXIMUM
};