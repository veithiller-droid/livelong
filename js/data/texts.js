// data/texts.js
// Alle UI-Texte für Dr. Livelong
// Alles mehrsprachig (DE/EN/ES/FR)
// Version 2.0 - INTERNATIONALIZED WITH 33+ RESULT_PAGE KEYS
// Last Updated: 2025-01-26
// MD5: VERIFY_THIS_VERSION

/**
 * STRUKTUR:
 * - Jeder Bereich hat Texte in DE/EN/ES/FR
 * - Platzhalter mit {variable} für dynamische Werte
 * - Konsistente Terminologie über alle Texte
 */

export const UI_TEXTS = {
  // ========================================
  // LANDING PAGE (index.html)
  // ========================================
  landing: {
    hero_title: {
      de: "Wie alt wirst du?",
      en: "How long will you live?",
      es: "¿Cuánto vivirás?"
    },
    
    hero_subtitle: {
      de: "Wissenschaftlich fundierte Lebenserwartungs-Berechnung basierend auf deinem Gesundheitszustand und Lebensstil",
      en: "Scientifically based life expectancy calculation based on your health and lifestyle",
      es: "Cálculo científico de esperanza de vida basado en tu salud y estilo de vida"
    },
    
    hero_description: {
      de: "Beantworte 64 Fragen zu deiner Gesundheit, Ernährung und Lebensweise. Erhalte eine personalisierte Prognose und konkrete Empfehlungen.",
      en: "Answer 64 questions about your health, diet and lifestyle. Get a personalized forecast and concrete recommendations.",
      es: "Responde 64 preguntas sobre tu salud, dieta y estilo de vida. Obtén un pronóstico personalizado y recomendaciones concretas."
    },
    
    cta_button: {
      de: "Jetzt kostenlos starten",
      en: "Start now for free",
      es: "Comenzar gratis ahora"
    },
    
    time_estimate: {
      de: "Dauer: ca. 15-20 Minuten",
      en: "Duration: approx. 15-20 minutes",
      es: "Duración: aprox. 15-20 minutos"
    },
    
    features_title: {
      de: "Was macht Dr. Livelong besonders?",
      en: "What makes Dr. Livelong special?",
      es: "¿Qué hace especial a Dr. Livelong?"
    },
    
    features: [
      {
        icon: "🔬",
        title: {
          de: "Medizinisch fundiert",
          en: "Medically based",
          es: "Médicamente fundamentado"
        },
        description: {
          de: "Basierend auf Framingham Heart Study, QRISK3 und aktuellen Mortalitäts-Studien",
          en: "Based on Framingham Heart Study, QRISK3 and current mortality studies",
          es: "Basado en Framingham Heart Study, QRISK3 y estudios de mortalidad actuales"
        }
      },
      {
        icon: "🎯",
        title: {
          de: "Konkrete Empfehlungen",
          en: "Concrete recommendations",
          es: "Recomendaciones concretas"
        },
        description: {
          de: "Erhalte umsetzbare Empfehlungen mit Jahren-Gewinn: 'Wenn du aufhörst zu rauchen: +12 Jahre'",
          en: "Get actionable recommendations with year gains: 'If you quit smoking: +12 years'",
          es: "Obtén recomendaciones accionables con ganancias en años: 'Si dejas de fumar: +12 años'"
        }
      },
      {
        icon: "🔮",
        title: {
          de: "What-If-Simulator",
          en: "What-If Simulator",
          es: "Simulador What-If"
        },
        description: {
          de: "Simuliere Änderungen: 'Was wenn ich 5kg abnehme?' - Sofortige Berechnung des Effekts",
          en: "Simulate changes: 'What if I lose 5kg?' - Immediate calculation of effect",
          es: "Simula cambios: '¿Qué pasa si pierdo 5kg?' - Cálculo inmediato del efecto"
        }
      },
      {
        icon: "🔒",
        title: {
          de: "Deine Daten bleiben privat",
          en: "Your data stays private",
          es: "Tus datos permanecen privados"
        },
        description: {
          de: "Alle Berechnungen lokal im Browser. Keine Speicherung sensibler Gesundheitsdaten auf Servern.",
          en: "All calculations local in browser. No storage of sensitive health data on servers.",
          es: "Todos los cálculos locales en el navegador. Sin almacenamiento de datos de salud sensibles en servidores."
        }
      }
    ],
    
    how_it_works_title: {
      de: "So funktioniert's",
      en: "How it works",
      es: "Cómo funciona"
    },
    
    steps: [
      {
        number: "1",
        title: {
          de: "Basisdaten eingeben",
          en: "Enter basic data",
          es: "Ingresar datos básicos"
        },
        description: {
          de: "Alter, Geschlecht, Land und grundlegende Gesundheitswerte",
          en: "Age, gender, country and basic health values",
          es: "Edad, género, país y valores de salud básicos"
        }
      },
      {
        number: "2",
        title: {
          de: "64 Fragen beantworten",
          en: "Answer 64 questions",
          es: "Responder 64 preguntas"
        },
        description: {
          de: "Zu Gesundheit, Ernährung, Bewegung, Psyche und sozialem Umfeld",
          en: "About health, diet, exercise, mental health and social environment",
          es: "Sobre salud, dieta, ejercicio, salud mental y entorno social"
        }
      },
      {
        number: "3",
        title: {
          de: "Ergebnis erhalten",
          en: "Get result",
          es: "Obtener resultado"
        },
        description: {
          de: "Sofortige Berechnung deiner geschätzten Lebenserwartung",
          en: "Immediate calculation of your estimated life expectancy",
          es: "Cálculo inmediato de tu esperanza de vida estimada"
        }
      },
      {
        number: "4",
        title: {
          de: "Profil freischalten",
          en: "Unlock profile",
          es: "Desbloquear perfil"
        },
        description: {
          de: "Für €9.99: Detaillierte Analyse, Empfehlungen und What-If-Simulator",
          en: "For €9.99: Detailed analysis, recommendations and What-If simulator",
          es: "Por €9.99: Análisis detallado, recomendaciones y simulador What-If"
        }
      }
    ],
    
    testimonials_title: {
      de: "Was Nutzer sagen",
      en: "What users say",
      es: "Lo que dicen los usuarios"
    },
    
    faq_title: {
      de: "Häufige Fragen",
      en: "Frequently asked questions",
      es: "Preguntas frecuentes"
    },
    
    faq: [
      {
        question: {
          de: "Wie genau ist die Berechnung?",
          en: "How accurate is the calculation?",
          es: "¿Qué tan preciso es el cálculo?"
        },
        answer: {
          de: "Die Berechnung basiert auf etablierten medizinischen Risikomodellen (Framingham, QRISK3) und aktuellen Mortalitäts-Daten. Sie gibt eine statistische Schätzung basierend auf bekannten Risikofaktoren. Individuelle Abweichungen sind möglich.",
          en: "The calculation is based on established medical risk models (Framingham, QRISK3) and current mortality data. It provides a statistical estimate based on known risk factors. Individual variations are possible.",
          es: "El cálculo se basa en modelos médicos de riesgo establecidos (Framingham, QRISK3) y datos de mortalidad actuales. Proporciona una estimación estadística basada en factores de riesgo conocidos. Son posibles variaciones individuales."
        }
      },
      {
        question: {
          de: "Werden meine Daten gespeichert?",
          en: "Is my data stored?",
          es: "¿Se almacenan mis datos?"
        },
        answer: {
          de: "Alle Berechnungen erfolgen lokal in deinem Browser. Wir speichern keine sensiblen Gesundheitsdaten auf Servern. Bei Bezahlung werden nur Payment-Daten verschlüsselt übertragen.",
          en: "All calculations are performed locally in your browser. We do not store sensitive health data on servers. Only payment data is transmitted encrypted during purchase.",
          es: "Todos los cálculos se realizan localmente en tu navegador. No almacenamos datos de salud sensibles en servidores. Solo los datos de pago se transmiten encriptados durante la compra."
        }
      },
      {
        question: {
          de: "Was kostet die detaillierte Auswertung?",
          en: "What does the detailed analysis cost?",
          es: "¿Cuánto cuesta el análisis detallado?"
        },
        answer: {
          de: "Der Basis-Test ist kostenlos und zeigt deine Lebenserwartung sowie Top 3 Risiken/Stärken. Die detaillierte Analyse mit allen Funktionen kostet einmalig €9.99 (kein Abo).",
          en: "The basic test is free and shows your life expectancy plus top 3 risks/strengths. The detailed analysis with all features costs €9.99 one-time (no subscription).",
          es: "La prueba básica es gratuita y muestra tu esperanza de vida más los 3 principales riesgos/fortalezas. El análisis detallado con todas las funciones cuesta €9.99 una vez (sin suscripción)."
        }
      },
      {
        question: {
          de: "Ersetzt dies eine ärztliche Beratung?",
          en: "Does this replace medical advice?",
          es: "¿Esto reemplaza el consejo médico?"
        },
        answer: {
          de: "Nein. Dr. Livelong ist ein statistisches Tool zur Selbsteinschätzung. Es ersetzt keine medizinische Diagnose oder Behandlung. Bei gesundheitlichen Fragen konsultiere bitte einen Arzt.",
          en: "No. Dr. Livelong is a statistical tool for self-assessment. It does not replace medical diagnosis or treatment. Please consult a doctor for health questions.",
          es: "No. Dr. Livelong es una herramienta estadística para autoevaluación. No reemplaza el diagnóstico o tratamiento médico. Por favor consulta a un médico para preguntas de salud."
        }
      }
    ]
  },

  // ========================================
  // META-FRAGEN SEITE (meta.html)
  // ========================================
  meta_page: {
    title: {
      de: "Zunächst ein paar Basisfragen",
      en: "First, some basic questions",
      es: "Primero, algunas preguntas básicas"
    },
    
    subtitle: {
      de: "Diese Angaben helfen uns, deine Baseline-Lebenserwartung zu bestimmen",
      en: "These details help us determine your baseline life expectancy",
      es: "Estos detalles nos ayudan a determinar tu esperanza de vida base"
    },
    
    progress: {
      de: "Frage {current} von {total}",
      en: "Question {current} of {total}",
      es: "Pregunta {current} de {total}"
    },
    
    progress_percent: {
      de: "{percent}% abgeschlossen",
      en: "{percent}% complete",
      es: "{percent}% completado"
    },
    
    next_button: {
      de: "Weiter",
      en: "Next",
      es: "Siguiente"
    },
    
    back_button: {
      de: "Zurück",
      en: "Back",
      es: "Atrás"
    },
    
    skip_button: {
      de: "Überspringen (optional)",
      en: "Skip (optional)",
      es: "Omitir (opcional)"
    },
    
    continue_to_test: {
      de: "Zum Haupttest",
      en: "Continue to main test",
      es: "Continuar a prueba principal"
    }
  },

  // ========================================
  // HAUPTTEST SEITE (test.html)
  // ========================================
  test_page: {
    title: {
      de: "Haupttest",
      en: "Main Assessment",
      es: "Evaluación principal"
    },
    
    subtitle: {
      de: "Beantworte jetzt die folgenden {count} Fragen zu deinem Gesundheitszustand und Lebensstil",
      en: "Now answer the following {count} questions about your health and lifestyle",
      es: "Ahora responde las siguientes {count} preguntas sobre tu salud y estilo de vida"
    },
    
    intro: {
      de: "Sei bitte ehrlich bei deinen Antworten. Die Genauigkeit deines Ergebnisses hängt von der Qualität deiner Angaben ab. Alle Daten bleiben privat.",
      en: "Please be honest with your answers. The accuracy of your result depends on the quality of your information. All data remains private.",
      es: "Por favor sé honesto con tus respuestas. La precisión de tu resultado depende de la calidad de tu información. Todos los datos permanecen privados."
    },
    
    groups: {
      health: {
        de: "Gesundheitszustand",
        en: "Health Status",
        es: "Estado de salud"
      },
      fitness: {
        de: "Bewegung & Schlaf",
        en: "Exercise & Sleep",
        es: "Ejercicio y sueño"
      },
      lifestyle: {
        de: "Rauchen & Alkohol",
        en: "Smoking & Alcohol",
        es: "Tabaco y alcohol"
      },
      diagnoses: {
        de: "Diagnosen & Medikamente",
        en: "Diagnoses & Medications",
        es: "Diagnósticos y medicamentos"
      },
      mental: {
        de: "Psyche & Sinne",
        en: "Mental Health & Senses",
        es: "Salud mental y sentidos"
      },
      diet: {
        de: "Ernährung",
        en: "Diet",
        es: "Dieta"
      },
      social: {
        de: "Soziales & Stress",
        en: "Social & Stress",
        es: "Social y estrés"
      },
      prevention: {
        de: "Vorsorge",
        en: "Prevention",
        es: "Prevención"
      }
    },
    
    progress: {
      de: "Frage {current} von {total}",
      en: "Question {current} of {total}",
      es: "Pregunta {current} de {total}"
    },
    
    save_progress: {
      de: "Fortschritt gespeichert ✓",
      en: "Progress saved ✓",
      es: "Progreso guardado ✓"
    },
    
    auto_save: {
      de: "Wird automatisch gespeichert",
      en: "Saving automatically",
      es: "Guardando automáticamente"
    },
    
    resume_prompt: {
      de: "Du hast bereits mit dem Test begonnen. Möchtest du fortfahren?",
      en: "You've already started the test. Would you like to continue?",
      es: "Ya has comenzado la prueba. ¿Quieres continuar?"
    },
    
   calculate_button: {
      de: "Ergebnis berechnen",
      en: "Calculate result",
      es: "Calcular resultado",
      fr: "Calculer le résultat"
    },
    
    finish_button: {
      de: "Test abschließen",
      en: "Finish test",
      es: "Finalizar prueba",
      fr: "Terminer le test"
    },
    
    enter_value: {
      de: "Bitte Wert eingeben",
      en: "Please enter value",
      es: "Por favor ingresa el valor",
      fr: "Veuillez entrer la valeur"
    },
    
    valid_range: {
      de: "Gültiger Bereich",
      en: "Valid range",
      es: "Rango válido",
      fr: "Plage valide"
    },
    
    calculating: {
      de: "Berechne dein Ergebnis...",
      en: "Calculating your result...",
      es: "Calculando tu resultado..."
    },
    
    calculating_title: {
      de: "Einen Moment...",
      en: "One moment...",
      es: "Un momento..."
    },
    
    calculating_subtitle: {
      de: "Wir analysieren deine Antworten und berechnen deine persönliche Lebenserwartung",
      en: "We're analyzing your answers and calculating your personal life expectancy",
      es: "Estamos analizando tus respuestas y calculando tu esperanza de vida personal"
    }
  },

  // ========================================
  // BASIS-ERGEBNIS SEITE (result.html) - FREE
  // ========================================
   result_page: {
    title: {
      de: "Deine geschätzte Lebenserwartung",
      en: "Your estimated life expectancy",
      es: "Tu esperanza de vida estimada"
    },
    
    years_label: {
      de: "Jahre",
      en: "years",
      es: "años"
    },
    
    age_label: {
      de: "Alter",
      en: "Age",
      es: "Edad"
    },
    
    baseline_compare: {
      de: "Durchschnitt für dein Alter/Geschlecht: {baseline} Jahre",
      en: "Average for your age/gender: {baseline} years",
      es: "Promedio para tu edad/género: {baseline} años"
    },
    
    difference_above: {
      de: "Du liegst {diff} Jahre über dem Durchschnitt! 🎉",
      en: "You're {diff} years above average! 🎉",
      es: "¡Estás {diff} años por encima del promedio! 🎉"
    },
    
    difference_below: {
      de: "Du liegst {diff} Jahre unter dem Durchschnitt",
      en: "You're {diff} years below average",
      es: "Estás {diff} años por debajo del promedio"
    },
    
    difference_equal: {
      de: "Du liegst genau im Durchschnitt",
      en: "You're exactly at the average",
      es: "Estás exactamente en el promedio"
    },
    
    percentile: {
      de: "Du bist besser als {percent}% der Menschen in deiner Altersgruppe",
      en: "You're better than {percent}% of people in your age group",
      es: "Estás mejor que el {percent}% de las personas en tu grupo de edad"
    },
    
    top_risks_title: {
      de: "Deine Top 3 Risikofaktoren",
      en: "Your Top 3 Risk Factors",
      es: "Tus 3 principales factores de riesgo",
      fr: "Vos 3 principaux facteurs de risque"
    },
    
    top_strengths_title: {
      de: "Deine Top 3 Stärken",
      en: "Your Top 3 Strengths",
      es: "Tus 3 principales fortalezas",
      fr: "Vos 3 principales forces"
    },
    
    locked_hint: {
      de: "🔒 Details freischalten",
      en: "🔒 Unlock details",
      es: "🔒 Desbloquear detalles",
      fr: "🔒 Débloquer les détails"
    },
    
    want_details: {
      de: "Möchtest du mehr erfahren?",
      en: "Want to know more?",
      es: "¿Quieres saber más?"
    },
    
    share_title: {
      de: "Ergebnis teilen",
      en: "Share result",
      es: "Compartir resultado"
    },
    
    retake_test: {
      de: "Test wiederholen",
      en: "Retake test",
      es: "Repetir prueba"
    },
    
    disclaimer: {
      de: "Dies ist eine statistische Schätzung. Individuelle Abweichungen sind möglich. Ersetzt keine ärztliche Beratung.",
      en: "This is a statistical estimate. Individual variations are possible. Does not replace medical advice.",
      es: "Esta es una estimación estadística. Son posibles variaciones individuales. No reemplaza el consejo médico.",
      fr: "Ceci est une estimation statistique. Des variations individuelles sont possibles. Ne remplace pas les conseils médicaux."
    },
    
    // NEW KEYS - Phase 3a additions
    calculated_on: {
      de: "Berechnet am",
      en: "Calculated on",
      es: "Calculado el",
      fr: "Calculé le"
    },
    
    confidence_text: {
      de: "Konfidenz: {percent}% (basierend auf Vollständigkeit deiner Angaben)",
      en: "Confidence: {percent}% (based on completeness of your data)",
      es: "Confianza: {percent}% (basado en integridad de tus datos)",
      fr: "Confiance : {percent}% (basé sur l'exhaustivité de vos données)"
    },
    
    comparison_title: {
      de: "Vergleich mit dem Durchschnitt",
      en: "Comparison with average",
      es: "Comparación con el promedio",
      fr: "Comparaison avec la moyenne"
    },
    
    age_text: {
      de: "Du bist jetzt <strong>{age}</strong> Jahre alt.",
      en: "You are now <strong>{age}</strong> years old.",
      es: "Ahora tienes <strong>{age}</strong> años.",
      fr: "Vous avez maintenant <strong>{age}</strong> ans."
    },
    
    years_to_live_text: {
      de: "Das bedeutet noch ca. <strong>{years}</strong> Jahre zu leben.",
      en: "That means approximately <strong>{years}</strong> years left to live.",
      es: "Eso significa aproximadamente <strong>{years}</strong> años más de vida.",
      fr: "Cela signifie environ <strong>{years}</strong> années à vivre."
    },
    
    score_impact: {
      de: "Score: {score}/100 | Impact: {impact} Jahre",
      en: "Score: {score}/100 | Impact: {impact} years",
      es: "Puntuación: {score}/100 | Impacto: {impact} años",
      fr: "Score : {score}/100 | Impact : {impact} ans"
    },
    
    unlock_full_profile: {
      de: "🔓 Vollständiges Profil freischalten",
      en: "🔓 Unlock full profile",
      es: "🔓 Desbloquear perfil completo",
      fr: "🔓 Débloquer le profil complet"
    },
    
    unlock_description: {
      de: "Detaillierte Analyse aller Faktoren + Empfehlungen",
      en: "Detailed analysis of all factors + recommendations",
      es: "Análisis detallado de todos los factores + recomendaciones",
      fr: "Analyse détaillée de tous les facteurs + recommandations"
    },
    
    repeat_test: {
      de: "🔄 Test wiederholen",
      en: "🔄 Repeat test",
      es: "🔄 Repetir prueba",
      fr: "🔄 Répéter le test"
    },
    
    repeat_test_description: {
      de: "Starte von vorne mit neuen Antworten",
      en: "Start over with new answers",
      es: "Empezar de nuevo con nuevas respuestas",
      fr: "Recommencer avec de nouvelles réponses"
    },
    
    share_result: {
      de: "📤 Ergebnis teilen",
      en: "📤 Share result",
      es: "📤 Compartir resultado",
      fr: "📤 Partager le résultat"
    },
    
    share_result_description: {
      de: "Teile dein Ergebnis mit Freunden",
      en: "Share your result with friends",
      es: "Comparte tu resultado con amigos",
      fr: "Partagez votre résultat avec des amis"
    },
    
    download_pdf: {
      de: "📄 PDF herunterladen",
      en: "📄 Download PDF",
      es: "📄 Descargar PDF",
      fr: "📄 Télécharger PDF"
    },
    
    download_pdf_description: {
      de: "Speichere dein Ergebnis als PDF",
      en: "Save your result as PDF",
      es: "Guarda tu resultado como PDF",
      fr: "Enregistrez votre résultat en PDF"
    },
    
    pdf_only_premium: {
      de: "PDF-Download ist nur in der Vollversion verfügbar",
      en: "PDF download is only available in the full version",
      es: "Descarga PDF solo disponible en versión completa",
      fr: "Téléchargement PDF disponible uniquement dans la version complète"
    },
    
    premium_unlocked_title: {
      de: "✅ Vollversion freigeschaltet!",
      en: "✅ Full version unlocked!",
      es: "✅ ¡Versión completa desbloqueada!",
      fr: "✅ Version complète débloquée !"
    },
    
    premium_access_description: {
      de: "Du hast Zugriff auf alle Premium-Features:",
      en: "You have access to all premium features:",
      es: "Tienes acceso a todas las funciones premium:",
      fr: "Vous avez accès à toutes les fonctionnalités premium :"
    },
    
    pdf_download_coming: {
      de: "PDF-Download wird implementiert...",
      en: "PDF download coming soon...",
      es: "Descarga PDF próximamente...",
      fr: "Téléchargement PDF bientôt disponible..."
    },
    
    next_steps_title: {
      de: "Was als Nächstes?",
      en: "What's next?",
      es: "¿Qué sigue?",
      fr: "Et maintenant ?"
    },
    
    confirm_restart: {
      de: "Möchtest du wirklich von vorne beginnen? Alle bisherigen Antworten gehen verloren.",
      en: "Do you really want to start over? All previous answers will be lost.",
      es: "¿Realmente quieres empezar de nuevo? Se perderán todas las respuestas anteriores.",
      fr: "Voulez-vous vraiment recommencer ? Toutes les réponses précédentes seront perdues."
    }
  },

  // ========================================
  // PAYWALL / CTA
  // ========================================
  paywall: {
    cta_title: {
      de: "Erhalte dein vollständiges Gesundheitsprofil",
      en: "Get your complete health profile",
      es: "Obtén tu perfil de salud completo"
    },
    
    cta_subtitle: {
      de: "Verstehe genau, welche Faktoren deine Lebenserwartung beeinflussen und was du konkret verbessern kannst",
      en: "Understand exactly which factors affect your life expectancy and what you can specifically improve",
      es: "Comprende exactamente qué factores afectan tu esperanza de vida y qué puedes mejorar específicamente"
    },
    
    features_title: {
      de: "Das erhältst du:",
      en: "What you get:",
      es: "Lo que obtienes:"
    },
    
    features: {
      de: [
        "✅ Detaillierte Faktor-Analyse aller 19 Bereiche mit Scores 0-100",
        "✅ Personalisierte Empfehlungen mit konkreten Jahren-Gewinnen",
        "✅ What-If-Simulator: 'Was wenn ich aufhöre zu rauchen?' (+12 Jahre)",
        "✅ Interaktions-Analyse: Wie verstärken sich deine Risikofaktoren?",
        "✅ Wissenschaftliche Methodologie mit Quellen und Studien",
        "✅ PDF-Report zum Ausdrucken und für deinen Arzt",
        "✅ Lebenslanger Zugriff auf dein Profil"
      ],
      en: [
        "✅ Detailed factor analysis of all 19 areas with scores 0-100",
        "✅ Personalized recommendations with concrete year gains",
        "✅ What-If simulator: 'What if I quit smoking?' (+12 years)",
        "✅ Interaction analysis: How do your risk factors amplify each other?",
        "✅ Scientific methodology with sources and studies",
        "✅ Printable PDF report for you and your doctor",
        "✅ Lifetime access to your profile"
      ],
      es: [
        "✅ Análisis detallado de factores de las 19 áreas con puntuaciones 0-100",
        "✅ Recomendaciones personalizadas con ganancias concretas en años",
        "✅ Simulador What-If: '¿Qué pasa si dejo de fumar?' (+12 años)",
        "✅ Análisis de interacciones: ¿Cómo se amplifican tus factores de riesgo?",
        "✅ Metodología científica con fuentes y estudios",
        "✅ Informe PDF imprimible para ti y tu médico",
        "✅ Acceso de por vida a tu perfil"
      ]
    },
    
    price: {
      de: "Nur €9.99 einmalig",
      en: "Only €9.99 one-time",
      es: "Solo €9.99 una vez"
    },
    
    price_detail: {
      de: "Keine Abo-Falle, keine versteckten Kosten",
      en: "No subscription trap, no hidden costs",
      es: "Sin trampa de suscripción, sin costos ocultos"
    },
    
    button: {
      de: "Jetzt für €9.99 freischalten",
      en: "Unlock now for €9.99",
      es: "Desbloquear ahora por €9.99"
    },
    
    button_processing: {
      de: "Zahlung wird verarbeitet...",
      en: "Processing payment...",
      es: "Procesando pago..."
    },
    
    guarantee: {
      de: "🛡️ 30 Tage Geld-zurück-Garantie",
      en: "🛡️ 30-day money-back guarantee",
      es: "🛡️ Garantía de devolución de 30 días"
    },
    
    secure_payment: {
      de: "🔒 Sichere Zahlung via Stripe",
      en: "🔒 Secure payment via Stripe",
      es: "🔒 Pago seguro vía Stripe"
    },
    
    testimonial: {
      de: "\"Die What-If-Simulation hat mir konkret gezeigt, wie viel ich durch Rauch-Stopp gewinnen würde. Das war der Trigger, den ich brauchte.\" - Michael, 47",
      en: "\"The What-If simulation showed me concretely how much I would gain by quitting smoking. That was the trigger I needed.\" - Michael, 47",
      es: "\"La simulación What-If me mostró concretamente cuánto ganaría dejando de fumar. Ese fue el impulso que necesitaba.\" - Michael, 47"
    },
    
    already_paid: {
      de: "Bereits bezahlt?",
      en: "Already paid?",
      es: "¿Ya pagaste?"
    },
    
    restore_purchase: {
      de: "Kauf wiederherstellen",
      en: "Restore purchase",
      es: "Restaurar compra",
      fr: "Restaurer l'achat"
    },
    
    // PHASE 3a ADDITIONS - With French support
    calculated_on: {
      de: "Berechnet am",
      en: "Calculated on",
      es: "Calculado el",
      fr: "Calculé le"
    },
    
    confidence_text: {
      de: "Konfidenz: {percent}% (basierend auf Vollständigkeit deiner Angaben)",
      en: "Confidence: {percent}% (based on completeness of your data)",
      es: "Confianza: {percent}% (basado en integridad de tus datos)",
      fr: "Confiance : {percent}% (basé sur l'exhaustivité de vos données)"
    },
    
    comparison_title: {
      de: "Vergleich mit dem Durchschnitt",
      en: "Comparison with average",
      es: "Comparación con el promedio",
      fr: "Comparaison avec la moyenne"
    },
    
    you_label: {
      de: "Du",
      en: "You",
      es: "Tú",
      fr: "Vous"
    },
    
    average_label: {
      de: "Durchschnitt",
      en: "Average",
      es: "Promedio",
      fr: "Moyenne"
    },
    
    next_steps_title: {
      de: "Was als Nächstes?",
      en: "What's next?",
      es: "¿Qué sigue?",
      fr: "Et maintenant ?"
    },
    
    pdf_only_premium: {
      de: "PDF-Download ist nur in der Vollversion verfügbar",
      en: "PDF download is only available in the full version",
      es: "Descarga PDF solo disponible en versión completa",
      fr: "Téléchargement PDF disponible uniquement dans la version complète"
    },
    
    premium_unlocked_title: {
      de: "✅ Vollversion freigeschaltet!",
      en: "✅ Full version unlocked!",
      es: "✅ ¡Versión completa desbloqueada!",
      fr: "✅ Version complète débloquée !"
    },
    
    premium_access_description: {
      de: "Du hast Zugriff auf alle Premium-Features:",
      en: "You have access to all premium features:",
      es: "Tienes acceso a todas las funciones premium:",
      fr: "Vous avez accès à toutes les fonctionnalités premium :"
    },
    
    pdf_download_coming: {
      de: "PDF-Download wird implementiert...",
      en: "PDF download coming soon...",
      es: "Descarga PDF próximamente...",
      fr: "Téléchargement PDF bientôt disponible..."
    },
    
    // Age and years to live
    age_text: {
      de: "Du bist jetzt <strong>{age}</strong> Jahre alt.",
      en: "You are now <strong>{age}</strong> years old.",
      es: "Ahora tienes <strong>{age}</strong> años.",
      fr: "Vous avez maintenant <strong>{age}</strong> ans."
    },
    
    years_to_live_text: {
      de: "Das bedeutet noch ca. <strong>{years}</strong> Jahre zu leben.",
      en: "That means approximately <strong>{years}</strong> years left to live.",
      es: "Eso significa aproximadamente <strong>{years}</strong> años más de vida.",
      fr: "Cela signifie environ <strong>{years}</strong> années à vivre."
    },
    
    // Score and Impact labels
    score_impact: {
      de: "Score: {score}/100 | Impact: {impact} Jahre",
      en: "Score: {score}/100 | Impact: {impact} years",
      es: "Puntuación: {score}/100 | Impacto: {impact} años",
      fr: "Score : {score}/100 | Impact : {impact} ans"
    },
    
    // Action buttons
    unlock_full_profile: {
      de: "🔓 Vollständiges Profil freischalten",
      en: "🔓 Unlock full profile",
      es: "🔓 Desbloquear perfil completo",
      fr: "🔓 Débloquer le profil complet"
    },
    
    unlock_description: {
      de: "Detaillierte Analyse aller Faktoren + Empfehlungen",
      en: "Detailed analysis of all factors + recommendations",
      es: "Análisis detallado de todos los factores + recomendaciones",
      fr: "Analyse détaillée de tous les facteurs + recommandations"
    },
    
    repeat_test: {
      de: "🔄 Test wiederholen",
      en: "🔄 Repeat test",
      es: "🔄 Repetir prueba",
      fr: "🔄 Répéter le test"
    },
    
    repeat_test_description: {
      de: "Starte von vorne mit neuen Antworten",
      en: "Start over with new answers",
      es: "Empezar de nuevo con nuevas respuestas",
      fr: "Recommencer avec de nouvelles réponses"
    },
    
    share_result: {
      de: "📤 Ergebnis teilen",
      en: "📤 Share result",
      es: "📤 Compartir resultado",
      fr: "📤 Partager le résultat"
    },
    
    share_result_description: {
      de: "Teile dein Ergebnis mit Freunden",
      en: "Share your result with friends",
      es: "Comparte tu resultado con amigos",
      fr: "Partagez votre résultat avec des amis"
    },
    
    download_pdf: {
      de: "📄 PDF herunterladen",
      en: "📄 Download PDF",
      es: "📄 Descargar PDF",
      fr: "📄 Télécharger PDF"
    },
    
    download_pdf_description: {
      de: "Speichere dein Ergebnis als PDF",
      en: "Save your result as PDF",
      es: "Guarda tu resultado como PDF",
      fr: "Enregistrez votre résultat en PDF"
    },
    
    // Disclaimer
    disclaimer: {
      de: "ℹ️ Dies ist eine statistische Schätzung. Individuelle Abweichungen sind möglich. Ersetzt keine ärztliche Beratung.",
      en: "ℹ️ This is a statistical estimate. Individual variations are possible. Does not replace medical advice.",
      es: "ℹ️ Esta es una estimación estadística. Son posibles variaciones individuales. No reemplaza el consejo médico.",
      fr: "ℹ️ Ceci est une estimation statistique. Des variations individuelles sont possibles. Ne remplace pas les conseils médicaux."
    },
    
    // Confirm dialog
    confirm_restart: {
      de: "Möchtest du wirklich von vorne beginnen? Alle bisherigen Antworten gehen verloren.",
      en: "Do you really want to start over? All previous answers will be lost.",
      es: "¿Realmente quieres empezar de nuevo? Se perderán todas las respuestas anteriores.",
      fr: "Voulez-vous vraiment recommencer ? Toutes les réponses précédentes seront perdues."
    }
  },

  // ========================================
  // DETAILLIERTES PROFIL (profile.html) - PAID
  // ========================================
  profile_page: {
    title: {
      de: "Dein detailliertes Gesundheitsprofil",
      en: "Your detailed health profile",
      es: "Tu perfil de salud detallado"
    },
    
    subtitle: {
      de: "Analyse aller {count} Faktoren mit konkreten Empfehlungen",
      en: "Analysis of all {count} factors with concrete recommendations",
      es: "Análisis de todos los {count} factores con recomendaciones concretas"
    },
    
    summary_title: {
      de: "Zusammenfassung",
      en: "Summary",
      es: "Resumen"
    },
    
    your_result: {
      de: "Dein Ergebnis",
      en: "Your result",
      es: "Tu resultado"
    },
    
    risk_profile: {
      de: "Risiko-Profil",
      en: "Risk Profile",
      es: "Perfil de riesgo"
    },
    
    risk_profile_labels: {
      low: {
        de: "Geringes Risiko ✅",
        en: "Low Risk ✅",
        es: "Riesgo bajo ✅"
      },
      moderate: {
        de: "Mittleres Risiko ⚠️",
        en: "Moderate Risk ⚠️",
        es: "Riesgo moderado ⚠️"
      },
      high: {
        de: "Hohes Risiko ⚠️",
        en: "High Risk ⚠️",
        es: "Riesgo alto ⚠️"
      },
      very_high: {
        de: "Sehr hohes Risiko ❌",
        en: "Very High Risk ❌",
        es: "Riesgo muy alto ❌"
      }
    },
    
    confidence: {
      de: "Konfidenz: {percent}%",
      en: "Confidence: {percent}%",
      es: "Confianza: {percent}%"
    },
    
    confidence_explanation: {
      de: "Basierend auf der Vollständigkeit deiner Angaben und der Qualität der Daten",
      en: "Based on the completeness of your information and data quality",
      es: "Basado en la integridad de tu información y la calidad de los datos"
    },
    
    factor_breakdown_title: {
      de: "Faktor-Analyse",
      en: "Factor Analysis",
      es: "Análisis de factores"
    },
    
    cluster_titles: {
      physical_health: {
        de: "Körperliche Gesundheit",
        en: "Physical Health",
        es: "Salud física"
      },
      lifestyle: {
        de: "Lebensstil",
        en: "Lifestyle",
        es: "Estilo de vida"
      },
      mental_wellbeing: {
        de: "Psychisches Wohlbefinden",
        en: "Mental Wellbeing",
        es: "Bienestar mental"
      },
      functional_status: {
        de: "Funktionsfähigkeit",
        en: "Functional Ability",
        es: "Capacidad funcional"
      },
      other: {
        de: "Weitere Faktoren",
        en: "Other Factors",
        es: "Otros factores"
      }
    },
    
    score_label: {
      de: "Score: {score}/100",
      en: "Score: {score}/100",
      es: "Puntuación: {score}/100"
    },
    
    impact_label: {
      de: "Einfluss: {years} Jahre",
      en: "Impact: {years} years",
      es: "Impacto: {years} años"
    },
    
    level_labels: {
      excellent: {
        de: "Ausgezeichnet 🌟",
        en: "Excellent 🌟",
        es: "Excelente 🌟"
      },
      good: {
        de: "Gut ✅",
        en: "Good ✅",
        es: "Bueno ✅"
      },
       neutral: { 
      de: "Solide", 
      en: "Solid", 
      es: "Sólido", 
      fr: "Solide" 
    },
      moderate: {
        de: "Mittel ⚠️",
        en: "Moderate ⚠️",
        es: "Moderado ⚠️"
      },
      poor: {
        de: "Schlecht ❌",
        en: "Poor ❌",
        es: "Malo ❌"
      }
    },
    
    main_issues: {
      de: "Hauptprobleme",
      en: "Main Issues",
      es: "Problemas principales"
    },
    
    strengths: {
      de: "Stärken",
      en: "Strengths",
      es: "Fortalezas"
    },
    
    recommendations_title: {
      de: "Deine personalisierten Empfehlungen",
      en: "Your personalized recommendations",
      es: "Tus recomendaciones personalizadas"
    },
    
    recommendations_subtitle: {
      de: "Priorisiert nach Wichtigkeit und Umsetzbarkeit",
      en: "Prioritized by importance and feasibility",
      es: "Priorizadas por importancia y viabilidad"
    },
    
    priority_label: {
      de: "Priorität {number}",
      en: "Priority {number}",
      es: "Prioridad {number}"
    },
    
    potential_gain: {
      de: "Möglicher Gewinn: +{years} Jahre",
      en: "Potential gain: +{years} years",
      es: "Ganancia potencial: +{years} años"
    },
    
    difficulty_labels: {
      easy: {
        de: "Einfach 😊",
        en: "Easy 😊",
        es: "Fácil 😊"
      },
      moderate: {
        de: "Mittel 🤔",
        en: "Moderate 🤔",
        es: "Moderado 🤔"
      },
      hard: {
        de: "Schwierig 💪",
        en: "Hard 💪",
        es: "Difícil 💪"
      },
      very_hard: {
        de: "Sehr schwierig 🏔️",
        en: "Very hard 🏔️",
        es: "Muy difícil 🏔️"
      }
    },
    
    timeframe: {
      de: "Zeitrahmen: {time}",
      en: "Timeframe: {time}",
      es: "Plazo: {time}"
    },
    
    interactions_title: {
      de: "Erkannte Interaktionen",
      en: "Detected Interactions",
      es: "Interacciones detectadas"
    },
    
    interactions_subtitle: {
      de: "Diese Faktoren verstärken sich gegenseitig",
      en: "These factors amplify each other",
      es: "Estos factores se amplifican mutuamente"
    },
    
    negative_interactions: {
      de: "Negative Synergien",
      en: "Negative Synergies",
      es: "Sinergias negativas"
    },
    
    positive_interactions: {
      de: "Positive Synergien",
      en: "Positive Synergies",
      es: "Sinergias positivas"
    },
    
    interaction_effect: {
      de: "Effekt: ×{multiplier}",
      en: "Effect: ×{multiplier}",
      es: "Efecto: ×{multiplier}"
    },
    
    next_steps_title: {
      de: "Deine nächsten Schritte",
      en: "Your next steps",
      es: "Tus próximos pasos"
    },
    
    download_pdf: {
      de: "Als PDF herunterladen",
      en: "Download as PDF",
      es: "Descargar como PDF"
    },
    
    open_simulator: {
      de: "What-If-Simulator öffnen",
      en: "Open What-If Simulator",
      es: "Abrir simulador What-If"
    },
    
    view_methodology: {
      de: "Methodologie ansehen",
      en: "View methodology",
      es: "Ver metodología",
      fr: "Voir la méthodologie"
    },
    
    // PHASE 1 ADDITIONS - With French support
    created_at: {
      de: "Erstellt am",
      en: "Created on",
      es: "Creado el",
      fr: "Créé le"
    },
    
    years: {
      de: "Jahre",
      en: "years",
      es: "años",
      fr: "ans"
    },
    
    years_impact: {
      de: "Jahre Impact",
      en: "years Impact",
      es: "años Impacto",
      fr: "ans Impact"
    },
    
    coverage_label: {
      de: "Erfasst",
      en: "Covered",
      es: "Cubierto",
      fr: "Couvert"
    },
    
    questions_label: {
      de: "Fragen",
      en: "questions",
      es: "preguntas",
      fr: "questions"
    },
    
    coverage_text: {
      de: "{answered}/{total} Fragen ({percent}% Coverage)",
      en: "{answered}/{total} questions ({percent}% Coverage)",
      es: "{answered}/{total} preguntas ({percent}% Cobertura)",
      fr: "{answered}/{total} questions ({percent}% Couverture)"
    },
    
    details_show: {
      de: "Details anzeigen",
      en: "Show details",
      es: "Mostrar detalles",
      fr: "Afficher les détails"
    },
    
    details_hide: {
      de: "Details ausblenden",
      en: "Hide details",
      es: "Ocultar detalles",
      fr: "Masquer les détails"
    },
    
    details_show_more: {
      de: "Weitere Details anzeigen",
      en: "Show more details",
      es: "Mostrar más detalles",
      fr: "Afficher plus de détails"
    },
    
    recommendations_title: {
      de: "Konkrete Handlungsempfehlungen:",
      en: "Concrete action recommendations:",
      es: "Recomendaciones de acción concretas:",
      fr: "Recommandations d'action concrètes :"
    },
    
    see_recommendations: {
      de: "Siehe Empfehlungen für konkrete Verbesserungsvorschläge",
      en: "See recommendations for concrete improvement suggestions",
      es: "Ver recomendaciones para sugerencias concretas de mejora",
      fr: "Voir les recommandations pour des suggestions d'amélioration concrètes"
    },
    
    medical_context_title: {
      de: "Medizinischer Kontext:",
      en: "Medical context:",
      es: "Contexto médico:",
      fr: "Contexte médical :"
    },
    
    important_markers: {
      de: "Wichtige Marker",
      en: "Important markers",
      es: "Marcadores importantes",
      fr: "Marqueurs importants"
    },
    
    screening: {
      de: "Screening",
      en: "Screening",
      es: "Detección",
      fr: "Dépistage"
    },
    
    difficulty_easy: {
      de: "🟢 Leicht 🟢",
      en: "🟢 Easy 🟢",
      es: "🟢 Fácil 🟢",
      fr: "🟢 Facile 🟢"
    },
    
    difficulty_medium: {
      de: "🤔 Mittel 🤔",
      en: "🤔 Medium 🤔",
      es: "🤔 Moderado 🤔",
      fr: "🤔 Moyen 🤔"
    },
    
    difficulty_hard: {
      de: "💪 Schwierig 💪",
      en: "💪 Difficult 💪",
      es: "💪 Difícil 💪",
      fr: "💪 Difficile 💪"
    },
    
    timeframe_label: {
      de: "Zeitrahmen",
      en: "Timeframe",
      es: "Marco temporal",
      fr: "Délai"
    },
    
    timeframe_1_3_months: {
      de: "1-3 Monate",
      en: "1-3 months",
      es: "1-3 meses",
      fr: "1-3 mois"
    },
    
    timeframe_3_6_months: {
      de: "3-6 Monate",
      en: "3-6 months",
      es: "3-6 meses",
      fr: "3-6 mois"
    },
    
    timeframe_6_12_months: {
      de: "6-12 Monate",
      en: "6-12 months",
      es: "6-12 meses",
      fr: "6-12 mois"
    },
    
    why_important: {
      de: "Warum das wichtig ist:",
      en: "Why this matters:",
      es: "Por qué esto importa:",
      fr: "Pourquoi c'est important :"
    },
    
    concrete_steps: {
      de: "Konkrete Schritte:",
      en: "Concrete steps:",
      es: "Pasos concretos:",
      fr: "Étapes concrètes :"
    },
    
    scientific_basis: {
      de: "Wissenschaftliche Basis",
      en: "Scientific basis",
      es: "Base científica",
      fr: "Base scientifique"
    },
    
    priority_1: {
      de: "PRIORITÄT 1",
      en: "PRIORITY 1",
      es: "PRIORIDAD 1",
      fr: "PRIORITÉ 1"
    },
    
    priority_2: {
      de: "PRIORITÄT 2",
      en: "PRIORITY 2",
      es: "PRIORIDAD 2",
      fr: "PRIORITÉ 2"
    },
    
    priority_3: {
      de: "PRIORITÄT 3",
      en: "PRIORITY 3",
      es: "PRIORIDAD 3",
      fr: "PRIORITÉ 3"
    },
    
    health_areas_title: {
      de: "Gesundheitsbereiche im Überblick",
      en: "Health areas overview",
      es: "Resumen de áreas de salud",
      fr: "Aperçu des domaines de santé"
    },
    
    factors_count: {
      de: "{count} Faktoren",
      en: "{count} factors",
      es: "{count} factores",
      fr: "{count} facteurs"
    },
    
    weakest_label: {
      de: "Schwächste",
      en: "Weakest",
      es: "Más débil",
      fr: "Le plus faible"
    },
    
    strongest_label: {
      de: "Stärkste",
      en: "Strongest",
      es: "Más fuerte",
      fr: "Le plus fort"
    },
    
    factor_analysis_title: {
      de: "Faktor-Analyse",
      en: "Factor analysis",
      es: "Análisis de factores",
      fr: "Analyse des facteurs"
    },
    
    interactions_title: {
      de: "Erkannte Interaktionen",
      en: "Detected interactions",
      es: "Interacciones detectadas",
      fr: "Interactions détectées"
    },
    
    interactions_subtitle: {
      de: "Diese Faktoren verstärken sich gegenseitig",
      en: "These factors amplify each other",
      es: "Estos factores se amplifican mutuamente",
      fr: "Ces facteurs s'amplifient mutuellement"
    },
    
    positive_synergies: {
      de: "Positive Synergien",
      en: "Positive synergies",
      es: "Sinergias positivas",
      fr: "Synergies positives"
    },
    
    negative_interactions: {
      de: "Negative Interaktionen",
      en: "Negative interactions",
      es: "Interacciones negativas",
      fr: "Interactions négatives"
    },
    
    personalized_recommendations: {
      de: "Deine personalisierten Empfehlungen",
      en: "Your personalized recommendations",
      es: "Tus recomendaciones personalizadas",
      fr: "Vos recommandations personnalisées"
    },
    
    prioritized_by: {
      de: "Priorisiert nach Wichtigkeit und Umsetzbarkeit",
      en: "Prioritized by importance and feasibility",
      es: "Priorizadas por importancia y viabilidad",
      fr: "Classées par importance et faisabilité"
    },
    
    next_steps_title: {
      de: "Deine nächsten Schritte",
      en: "Your next steps",
      es: "Tus próximos pasos",
      fr: "Vos prochaines étapes"
    },
    
    critical_immediate: {
      de: "KRITISCH - Sofort handeln",
      en: "CRITICAL - Act immediately",
      es: "CRÍTICO - Actuar inmediatamente",
      fr: "CRITIQUE - Agir immédiatement"
    },
    
    high_impact: {
      de: "Hoher Impact - Große Hebelwirkung",
      en: "High impact - Great leverage",
      es: "Alto impacto - Gran apalancamiento",
      fr: "Fort impact - Grand levier"
    },
    
    quick_wins: {
      de: "Quick Wins - Leicht umzusetzen",
      en: "Quick wins - Easy to implement",
      es: "Victorias rápidas - Fácil de implementar",
      fr: "Gains rapides - Facile à mettre en œuvre"
    },
    
    possible_gain: {
      de: "Möglicher Gewinn",
      en: "Possible gain",
      es: "Ganancia posible",
      fr: "Gain possible"
    },
    
    key_insights: {
      de: "Wichtige Erkenntnisse",
      en: "Key insights",
      es: "Conocimientos clave",
      fr: "Informations clés"
    },
    
    what_if_simulator: {
      de: "What-If Simulator",
      en: "What-If Simulator",
      es: "Simulador What-If",
      fr: "Simulateur What-If"
    },
    
    simulate_changes: {
      de: "Simuliere Änderungen",
      en: "Simulate changes",
      es: "Simular cambios",
      fr: "Simuler des changements"
    },
    
    methodology: {
      de: "Methodologie",
      en: "Methodology",
      es: "Metodología",
      fr: "Méthodologie"
    },
    
    scientific_basis_link: {
      de: "Wissenschaftliche Basis",
      en: "Scientific basis",
      es: "Base científica",
      fr: "Base scientifique"
    },
    
    pdf_download: {
      de: "PDF Download",
      en: "PDF Download",
      es: "Descargar PDF",
      fr: "Télécharger PDF"
    },
    
    download_report: {
      de: "Report herunterladen",
      en: "Download report",
      es: "Descargar informe",
      fr: "Télécharger le rapport"
    },
    
    repeat_test: {
      de: "Test wiederholen",
      en: "Repeat test",
      es: "Repetir prueba",
      fr: "Répéter le test"
    },
    
  restart: {
      de: "Neustart",
      en: "Restart",
      es: "Reiniciar",
      fr: "Redémarrer"
    },
    
    simulate_changes: {
      de: "Simuliere Änderungen",
      en: "Simulate changes",
      es: "Simular cambios",
      fr: "Simuler les changements"
    },
    
    scientific_basis: {
      de: "Wissenschaftliche Basis",
      en: "Scientific basis",
      es: "Base científica",
      fr: "Base scientifique"
    },
    
    pdf_download: {
      de: "📄 PDF Download",
      en: "📄 PDF Download",
      es: "📄 Descargar PDF",
      fr: "📄 Télécharger PDF"
    }
  },

  // ========================================
  // WHAT-IF SIMULATOR (what-if.html) - PAID
  // ========================================
  what_if_page: {
    title: {
      de: "Was-wäre-wenn-Simulator",
      en: "What-If Simulator",
      es: "Simulador What-If"
    },
    
    subtitle: {
      de: "Simuliere Änderungen an deinem Lebensstil und sehe sofort die Auswirkungen auf deine Lebenserwartung",
      en: "Simulate changes to your lifestyle and see immediate impact on your life expectancy",
      es: "Simula cambios en tu estilo de vida y observa el impacto inmediato en tu esperanza de vida"
    },
    
    intro: {
      de: "Wähle eine oder mehrere Änderungen und berechne den Effekt. Du kannst verschiedene Szenarien durchspielen.",
      en: "Choose one or more changes and calculate the effect. You can play through different scenarios.",
      es: "Elige uno o más cambios y calcula el efecto. Puedes jugar diferentes escenarios."
    },
    
    scenario_builder_title: {
      de: "Erstelle ein Szenario",
      en: "Create a scenario",
      es: "Crear un escenario"
    },
    
    scenarios: {
      quit_smoking: {
        de: "Mit dem Rauchen aufhören",
        en: "Quit smoking",
        es: "Dejar de fumar"
      },
      reduce_smoking: {
        de: "Rauchen reduzieren (auf <10/Tag)",
        en: "Reduce smoking (to <10/day)",
        es: "Reducir fumar (a <10/día)"
      },
      lose_weight_5: {
        de: "5 kg abnehmen",
        en: "Lose 5 kg",
        es: "Perder 5 kg"
      },
      lose_weight_10: {
        de: "10 kg abnehmen",
        en: "Lose 10 kg",
        es: "Perder 10 kg"
      },
      start_exercise: {
        de: "Mit Sport beginnen (3x/Woche)",
        en: "Start exercising (3x/week)",
        es: "Comenzar ejercicio (3x/semana)"
      },
      improve_diet: {
        de: "Mediterrane Ernährung umsetzen",
        en: "Adopt Mediterranean diet",
        es: "Adoptar dieta mediterránea"
      },
      reduce_alcohol: {
        de: "Alkoholkonsum reduzieren",
        en: "Reduce alcohol consumption",
        es: "Reducir consumo de alcohol"
      },
      quit_alcohol: {
        de: "Alkohol komplett stoppen",
        en: "Stop alcohol completely",
        es: "Dejar alcohol completamente"
      },
      improve_sleep: {
        de: "Schlaf verbessern (7-8h)",
        en: "Improve sleep (7-8h)",
        es: "Mejorar sueño (7-8h)"
      },
      reduce_stress: {
        de: "Stress reduzieren",
        en: "Reduce stress",
        es: "Reducir estrés"
      },
      increase_social: {
        de: "Soziale Kontakte ausbauen",
        en: "Increase social connections",
        es: "Aumentar conexiones sociales"
      }
    },
    
    selected_changes: {
      de: "Ausgewählte Änderungen:",
      en: "Selected changes:",
      es: "Cambios seleccionados:"
    },
    
    no_changes_selected: {
      de: "Noch keine Änderungen ausgewählt",
      en: "No changes selected yet",
      es: "Aún no se han seleccionado cambios"
    },
    
    calculate_button: {
      de: "Berechnen",
      en: "Calculate",
      es: "Calcular"
    },
    
    reset_button: {
      de: "Zurücksetzen",
      en: "Reset",
      es: "Reiniciar"
    },
    
    result_title: {
      de: "Ergebnis",
      en: "Result",
      es: "Resultado"
    },
    
    current_label: {
      de: "Jetzt",
      en: "Current",
      es: "Actual"
    },
    
    modified_label: {
      de: "Mit Änderungen",
      en: "With changes",
      es: "Con cambios"
    },
    
    difference_label: {
      de: "Unterschied",
      en: "Difference",
      es: "Diferencia"
    },
    
    gain_label: {
      de: "+{years} Jahre",
      en: "+{years} years",
      es: "+{years} años"
    },
    
    loss_label: {
      de: "{years} Jahre",
      en: "{years} years",
      es: "{years} años"
    },
    
    detailed_breakdown: {
      de: "Detaillierte Aufschlüsselung",
      en: "Detailed breakdown",
      es: "Desglose detallado"
    },
    
    save_scenario: {
      de: "Szenario speichern",
      en: "Save scenario",
      es: "Guardar escenario"
    },
    
    comparison_title: {
      de: "Vergleich",
      en: "Comparison",
      es: "Comparación"
    },
    
    tip: {
      de: "💡 Tipp: Kombiniere mehrere Änderungen, um den maximalen Effekt zu sehen",
      en: "💡 Tip: Combine multiple changes to see the maximum effect",
      es: "💡 Consejo: Combina varios cambios para ver el efecto máximo",
      fr: "💡 Conseil : Combinez plusieurs changements pour voir l'effet maximum"
    },
    
    // Additional keys for UI
    years: {
      de: "Jahre",
      en: "years",
      es: "años",
      fr: "ans"
    },
    
    change_label: {
      de: "Änderung",
      en: "Change",
      es: "Cambio",
      fr: "Changement"
    },
    
    changes_label: {
      de: "Änderungen",
      en: "Changes",
      es: "Cambios",
      fr: "Changements"
    },
    
    estimated_impact: {
      de: "Geschätzter Impact",
      en: "Estimated impact",
      es: "Impacto estimado",
      fr: "Impact estimé"
    },
    
    calculating: {
      de: "Berechne...",
      en: "Calculating...",
      es: "Calculando...",
      fr: "Calcul en cours..."
    },
    
    select_at_least_one: {
      de: "Bitte wähle mindestens eine Änderung aus.",
      en: "Please select at least one change.",
      es: "Por favor selecciona al menos un cambio.",
      fr: "Veuillez sélectionner au moins un changement."
    },
    
    preset_scenarios_title: {
      de: "🎯 Vorgefertigte Szenarien",
      en: "🎯 Preset Scenarios",
      es: "🎯 Escenarios predefinidos",
      fr: "🎯 Scénarios prédéfinis"
    },
    
    preset_scenarios_subtitle: {
      de: "Häufige Kombinationen für schnelle Tests",
      en: "Common combinations for quick tests",
      es: "Combinaciones comunes para pruebas rápidas",
      fr: "Combinaisons courantes pour des tests rapides"
    },
    
    scenario_saved: {
      de: "✅ Szenario gespeichert!\n\nGewinn: +{gain} Jahre\nÄnderungen: {count}",
      en: "✅ Scenario saved!\n\nGain: +{gain} years\nChanges: {count}",
      es: "✅ ¡Escenario guardado!\n\nGanancia: +{gain} años\nCambios: {count}",
      fr: "✅ Scénario sauvegardé !\n\nGain : +{gain} ans\nChangements : {count}"
    }
  },

  // ========================================
  // METHODOLOGIE (methodology.html) - PAID
  // ========================================
  methodology_page: {
    title: {
      de: "Wissenschaftliche Methodologie",
      en: "Scientific Methodology",
      es: "Metodología científica"
    },
    
    intro: {
      de: "Dr. Livelong basiert auf etablierten medizinischen Risikomodellen und aktuellen Studien zur Lebenserwartung. Hier erfährst du, wie wir deine Lebenserwartung berechnen.",
      en: "Dr. Livelong is based on established medical risk models and current life expectancy studies. Here you'll learn how we calculate your life expectancy.",
      es: "Dr. Livelong se basa en modelos médicos de riesgo establecidos y estudios actuales sobre esperanza de vida. Aquí aprenderás cómo calculamos tu esperanza de vida."
    },
    
    calculation_process_title: {
      de: "Berechnungsprozess",
      en: "Calculation Process",
      es: "Proceso de cálculo"
    },
    
    step1_title: {
      de: "1. Baseline-Bestimmung",
      en: "1. Baseline Determination",
      es: "1. Determinación de línea base"
    },
    
    step1_description: {
      de: "Basierend auf deinem Alter, Geschlecht und Land bestimmen wir deine statistische Baseline-Lebenserwartung aus offiziellen Sterbetafeln (Destatis für Deutschland, INE für Spanien, ONS für UK, CDC für USA).",
      en: "Based on your age, gender and country, we determine your statistical baseline life expectancy from official mortality tables (Destatis for Germany, INE for Spain, ONS for UK, CDC for USA).",
      es: "Basándonos en tu edad, género y país, determinamos tu esperanza de vida base estadística a partir de tablas de mortalidad oficiales (Destatis para Alemania, INE para España, ONS para Reino Unido, CDC para EE.UU.)."
    },
    
    step2_title: {
      de: "2. Faktor-Bewertung",
      en: "2. Factor Assessment",
      es: "2. Evaluación de factores"
    },
    
    step2_description: {
      de: "Wir analysieren 19 verschiedene Faktoren (Herz-Kreislauf, Stoffwechsel, Lebensstil, etc.) und berechnen für jeden einen Score von 0-100 sowie den Impact in Jahren.",
      en: "We analyze 19 different factors (cardiovascular, metabolic, lifestyle, etc.) and calculate a score of 0-100 and the impact in years for each.",
      es: "Analizamos 19 factores diferentes (cardiovascular, metabólico, estilo de vida, etc.) y calculamos una puntuación de 0-100 y el impacto en años para cada uno."
    },
    
    step3_title: {
      de: "3. Interaktions-Analyse",
      en: "3. Interaction Analysis",
      es: "3. Análisis de interacciones"
    },
    
    step3_description: {
      de: "Risikofaktoren wirken nicht isoliert. Wir berücksichtigen 16 wissenschaftlich belegte Interaktionen (z.B. Rauchen × Diabetes verstärkt das Risiko um Faktor 1.8).",
      en: "Risk factors don't work in isolation. We consider 16 scientifically proven interactions (e.g., smoking × diabetes amplifies risk by factor 1.8).",
      es: "Los factores de riesgo no funcionan aisladamente. Consideramos 16 interacciones científicamente probadas (p. ej., fumar × diabetes amplifica el riesgo por un factor de 1.8)."
    },
    
    step4_title: {
      de: "4. Alters-Adjustierung",
      en: "4. Age Adjustment",
      es: "4. Ajuste por edad"
    },
    
    step4_description: {
      de: "Der Impact einzelner Faktoren variiert mit dem Alter. Ein 30-Jähriger verliert mehr Jahre durch Rauchen als ein 80-Jähriger, da mehr Jahre 'auf dem Spiel' stehen.",
      en: "The impact of individual factors varies with age. A 30-year-old loses more years from smoking than an 80-year-old, as more years are 'at stake'.",
      es: "El impacto de factores individuales varía con la edad. Una persona de 30 años pierde más años por fumar que una de 80 años, ya que hay más años 'en juego'."
    },
    
    sources_title: {
      de: "Wissenschaftliche Quellen",
      en: "Scientific Sources",
      es: "Fuentes científicas"
    },
    
    sources: [
      {
        name: "Framingham Heart Study",
        description: {
          de: "Langzeitstudie zu kardiovaskulären Risikofaktoren seit 1948. Grundlage für die meisten modernen Risikomodelle.",
          en: "Long-term study on cardiovascular risk factors since 1948. Foundation for most modern risk models.",
          es: "Estudio a largo plazo sobre factores de riesgo cardiovascular desde 1948. Fundamento de la mayoría de modelos de riesgo modernos."
        },
        url: "https://www.framinghamheartstudy.org/"
      },
      {
        name: "QRISK3",
        description: {
          de: "Britisches Risikomodell zur Vorhersage kardiovaskulärer Ereignisse. Berücksichtigt Interaktionen zwischen Risikofaktoren.",
          en: "British risk model for predicting cardiovascular events. Considers interactions between risk factors.",
          es: "Modelo de riesgo británico para predecir eventos cardiovasculares. Considera interacciones entre factores de riesgo."
        },
        url: "https://qrisk.org/"
      },
      {
        name: "PREDIMED Study",
        description: {
          de: "Spanische Studie zum Effekt mediterraner Ernährung. Zeigte positive Synergien zwischen Diät und Bewegung.",
          en: "Spanish study on Mediterranean diet effects. Showed positive synergies between diet and exercise.",
          es: "Estudio español sobre efectos de la dieta mediterránea. Mostró sinergias positivas entre dieta y ejercicio."
        },
        url: "https://www.predimed.es/"
      }
    ],
    
    limitations_title: {
      de: "Limitationen",
      en: "Limitations",
      es: "Limitaciones"
    },
    
    limitations: {
      de: [
        "Statistische Schätzung basierend auf Bevölkerungsdaten - individuelle Abweichungen möglich",
        "Genetische Faktoren nicht vollständig berücksichtigt",
        "Zukünftige medizinische Fortschritte nicht vorhersehbar",
        "Basiert auf Selbstangaben - Genauigkeit hängt von Ehrlichkeit ab",
        "Ersetzt keine medizinische Diagnose oder Behandlung"
      ],
      en: [
        "Statistical estimate based on population data - individual variations possible",
        "Genetic factors not fully considered",
        "Future medical advances unpredictable",
        "Based on self-reporting - accuracy depends on honesty",
        "Does not replace medical diagnosis or treatment"
      ],
      es: [
        "Estimación estadística basada en datos poblacionales - variaciones individuales posibles",
        "Factores genéticos no completamente considerados",
        "Avances médicos futuros impredecibles",
        "Basado en autoinformes - precisión depende de honestidad",
        "No reemplaza diagnóstico o tratamiento médico"
      ]
    },
    
    transparency_title: {
      de: "Transparenz",
      en: "Transparency",
      es: "Transparencia"
    },
    
    transparency_text: {
      de: "Alle Berechnungen erfolgen transparent und nachvollziehbar. Der vollständige Quellcode der Scoring-Engine ist auf Anfrage einsehbar.",
      en: "All calculations are transparent and traceable. The complete source code of the scoring engine is available upon request.",
      es: "Todos los cálculos son transparentes y trazables. El código fuente completo del motor de puntuación está disponible bajo petición."
    }
  },

  // ========================================
  // ALLGEMEINE UI-ELEMENTE
  // ========================================
  common: {
    loading: {
      de: "Lädt...",
      en: "Loading...",
      es: "Cargando..."
    },
    
    error: {
      de: "Ein Fehler ist aufgetreten",
      en: "An error occurred",
      es: "Ocurrió un error"
    },
    
    yes: {
      de: "Ja",
      en: "Yes",
      es: "Sí"
    },
    
    no: {
      de: "Nein",
      en: "No",
      es: "No"
    },
    
    save: {
      de: "Speichern",
      en: "Save",
      es: "Guardar"
    },
    
    cancel: {
      de: "Abbrechen",
      en: "Cancel",
      es: "Cancelar"
    },
    
    close: {
      de: "Schließen",
      en: "Close",
      es: "Cerrar"
    },
    
    continue: {
      de: "Weiter",
      en: "Continue",
      es: "Continuar"
    },
    
    back: {
      de: "Zurück",
      en: "Back",
      es: "Atrás"
    },
    
    next: {
      de: "Nächste",
      en: "Next",
      es: "Siguiente"
    },
    
    previous: {
      de: "Vorherige",
      en: "Previous",
      es: "Anterior"
    },
    
   finish: {
      de: "Fertig",
      en: "Finish",
      es: "Finalizar",
      fr: "Terminer"
    },
    
    // Navigation Links
    detailed_profile: {
      de: "📊 Detailliertes Profil",
      en: "📊 Detailed Profile",
      es: "📊 Perfil Detallado",
      fr: "📊 Profil Détaillé"
    },
    
    what_if_simulator: {
      de: "🔮 What-If Simulator",
      en: "🔮 What-If Simulator",
      es: "🔮 Simulador What-If",
      fr: "🔮 Simulateur What-If"
    },
    
    methodology: {
      de: "🔬 Methodologie",
      en: "🔬 Methodology",
      es: "🔬 Metodología",
      fr: "🔬 Méthodologie"
    },
    
    optional: {
      de: "(optional)",
      en: "(optional)",
      es: "(opcional)"
    },
    
    required: {
      de: "(erforderlich)",
      en: "(required)",
      es: "(obligatorio)"
    },
    
    likert_scale: {
      1: {
        de: "Stimme gar nicht zu",
        en: "Strongly disagree",
        es: "Muy en desacuerdo"
      },
      2: {
        de: "Stimme nicht zu",
        en: "Disagree",
        es: "En desacuerdo"
      },
      3: {
        de: "Neutral",
        en: "Neutral",
        es: "Neutral"
      },
      4: {
        de: "Stimme zu",
        en: "Agree",
        es: "De acuerdo"
      },
      5: {
        de: "Stimme voll zu",
        en: "Strongly agree",
        es: "Muy de acuerdo"
      },
      6: { de: "Stimme absolut zu",   
          en: "Fully agree",       
          es: "Totalmente de acuerdo" }
    }
  },

  // ========================================
  // FEHLERMELDUNGEN
  // ========================================
  errors: {
    required_field: {
      de: "Dieses Feld ist erforderlich",
      en: "This field is required",
      es: "Este campo es obligatorio"
    },
    
    invalid_email: {
      de: "Bitte gib eine gültige E-Mail-Adresse ein",
      en: "Please enter a valid email address",
      es: "Por favor ingresa una dirección de correo válida"
    },
    
    invalid_age: {
      de: "Bitte gib ein gültiges Alter ein (18-100)",
      en: "Please enter a valid age (18-100)",
      es: "Por favor ingresa una edad válida (18-100)"
    },
    
    invalid_number: {
      de: "Bitte gib eine gültige Zahl ein",
      en: "Please enter a valid number",
      es: "Por favor ingresa un número válido"
    },
    
    min_value: {
      de: "Mindestwert: {min}",
      en: "Minimum value: {min}",
      es: "Valor mínimo: {min}"
    },
    
    max_value: {
      de: "Höchstwert: {max}",
      en: "Maximum value: {max}",
      es: "Valor máximo: {max}"
    },
    
    network_error: {
      de: "Netzwerkfehler. Bitte überprüfe deine Internetverbindung.",
      en: "Network error. Please check your internet connection.",
      es: "Error de red. Por favor verifica tu conexión a internet."
    },
    
    payment_failed: {
      de: "Zahlung fehlgeschlagen. Bitte versuche es erneut oder verwende eine andere Zahlungsmethode.",
      en: "Payment failed. Please try again or use a different payment method.",
      es: "Pago fallido. Por favor intenta nuevamente o usa otro método de pago."
    },
    
    session_expired: {
      de: "Deine Sitzung ist abgelaufen. Bitte lade die Seite neu.",
      en: "Your session has expired. Please reload the page.",
      es: "Tu sesión ha expirado. Por favor recarga la página."
    },
    
    generic_error: {
      de: "Etwas ist schiefgelaufen. Bitte versuche es später erneut.",
      en: "Something went wrong. Please try again later.",
      es: "Algo salió mal. Por favor intenta más tarde."
    }
  },

  // ========================================
  // NAVIGATION
  // ========================================
  navigation: {
    home: {
      de: "Start",
      en: "Home",
      es: "Inicio"
    },
    
    about: {
      de: "Über uns",
      en: "About",
      es: "Acerca de"
    },
    
    methodology: {
      de: "Methodologie",
      en: "Methodology",
      es: "Metodología"
    },
    
    faq: {
      de: "FAQ",
      en: "FAQ",
      es: "FAQ"
    },
    
    contact: {
      de: "Kontakt",
      en: "Contact",
      es: "Contacto"
    },
    
    privacy: {
      de: "Datenschutz",
      en: "Privacy",
      es: "Privacidad"
    },
    
    terms: {
      de: "AGB",
      en: "Terms",
      es: "Términos"
    },
    
    imprint: {
      de: "Impressum",
      en: "Imprint",
      es: "Aviso legal"
    }
  },

  // ========================================
  // FOOTER
  // ========================================
  footer: {
    tagline: {
      de: "Wissenschaftlich fundierte Lebenserwartungs-Berechnung",
      en: "Scientifically based life expectancy calculation",
      es: "Cálculo científico de esperanza de vida"
    },
    
    disclaimer: {
      de: "Dr. Livelong ersetzt keine ärztliche Beratung. Bei gesundheitlichen Fragen konsultiere bitte einen Arzt.",
      en: "Dr. Livelong does not replace medical advice. Please consult a doctor for health questions.",
      es: "Dr. Livelong no reemplaza el consejo médico. Por favor consulta a un médico para preguntas de salud."
    },
    
    copyright: {
      de: "© {year} Dr. Livelong. Alle Rechte vorbehalten.",
      en: "© {year} Dr. Livelong. All rights reserved.",
      es: "© {year} Dr. Livelong. Todos los derechos reservados."
    },
    
    made_with: {
      de: "Gemacht mit ❤️ und Wissenschaft",
      en: "Made with ❤️ and science",
      es: "Hecho con ❤️ y ciencia"
    }
  },

  // ========================================
  // PROFILE PAGE - UI STRINGS
  // ========================================

  // ========================================
  // RESULT PAGE - UI STRINGS
  // ========================================

  // ========================================
  // FACTOR INTERPRETATIONS
  // ========================================
  factor_interpretations: {
    
    cardiovascular: {
      excellent: {
        de: "Hervorragend! Dein Herz-Kreislauf-System ist in exzellentem Zustand. Blutdruck, Herzgesundheit und vaskuläre Funktion liegen im optimalen Bereich.",
        en: "Excellent! Your cardiovascular system is in excellent condition. Blood pressure, heart health and vascular function are in optimal range.",
        es: "¡Excelente! Tu sistema cardiovascular está en excelente condición. Presión arterial, salud cardíaca y función vascular están en rango óptimo.",
        fr: "Excellent ! Votre système cardiovasculaire est en excellent état. Pression artérielle, santé cardiaque et fonction vasculaire sont optimales."
      },
      good: {
        de: "Gut! Dein Herz-Kreislauf-System funktioniert gut. Kleinere Optimierungen können den Schutz weiter verstärken.",
        en: "Good! Your cardiovascular system functions well. Minor optimizations can further strengthen protection.",
        es: "¡Bien! Tu sistema cardiovascular funciona bien. Pequeñas optimizaciones pueden fortalecer aún más la protección.",
        fr: "Bien ! Votre système cardiovasculaire fonctionne bien. De petites optimisations peuvent renforcer davantage la protection."
      },

      neutral: {
        de: "Solide Basis mit Optimierungspotenzial. Dein Herz-Kreislauf-System funktioniert grundsätzlich gut und zeigt bereits einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Deine Herzgesundheit liegt über dem Durchschnitt, aber noch nicht im optimal-schützenden Bereich. Um von 'gut' zu 'hervorragend' zu gelangen: Achte besonders auf regelmäßige Bewegung (mindestens 150 Min/Woche), kontrolliere deinen Blutdruck (Zielwert <130/85 mmHg), und optimiere dein Cholesterin durch mediterrane Ernährung. Jede dieser Maßnahmen kann deinen Schutz um weitere 2-3 Jahre erhöhen. Herz-Kreislauf-Erkrankungen sind die häufigste Todesursache weltweit, aber auch am besten präventierbar – kleine Verbesserungen haben große Wirkung.",
        en: "Solid foundation with optimization potential. Your cardiovascular system functions well overall and already shows a slight protective effect. A score of 50-59/100 means: Your heart health is above average, but not yet in the optimally protective range. To progress from 'good' to 'excellent': Focus especially on regular exercise (at least 150 min/week), monitor your blood pressure (target <130/85 mmHg), and optimize your cholesterol through Mediterranean diet. Each of these measures can increase your protection by an additional 2-3 years. Cardiovascular diseases are the leading cause of death worldwide, but also the most preventable – small improvements have major impact.",
        es: "Base sólida con potencial de optimización. Tu sistema cardiovascular funciona bien en general y ya muestra un ligero efecto protector. Una puntuación de 50-59/100 significa: Tu salud cardíaca está por encima del promedio, pero aún no en el rango óptimamente protector. Para progresar de 'bueno' a 'excelente': Concéntrate especialmente en ejercicio regular (al menos 150 min/semana), controla tu presión arterial (objetivo <130/85 mmHg), y optimiza tu colesterol mediante dieta mediterránea. Cada una de estas medidas puede aumentar tu protección en 2-3 años adicionales. Las enfermedades cardiovasculares son la principal causa de muerte mundial, pero también las más prevenibles – pequeñas mejoras tienen un gran impacto.",
        fr: "Base solide avec potentiel d'optimisation. Votre système cardiovasculaire fonctionne bien dans l'ensemble et montre déjà un léger effet protecteur. Un score de 50-59/100 signifie : Votre santé cardiaque est au-dessus de la moyenne, mais pas encore dans la plage optimalement protectrice. Pour progresser de 'bon' à 'excellent' : Concentrez-vous particulièrement sur l'exercice régulier (au moins 150 min/semaine), surveillez votre tension artérielle (objectif <130/85 mmHg), et optimisez votre cholestérol par un régime méditerranéen. Chacune de ces mesures peut augmenter votre protection de 2-3 ans supplémentaires. Les maladies cardiovasculaires sont la première cause de décès dans le monde, mais aussi les plus évitables – de petites améliorations ont un impact majeur."
      },

    moderate: {
        de: "Erhöhtes Risiko – Handlung empfohlen. Dein Herz-Kreislauf-System zeigt mehrere Warnsignale. Ein Score von 35-49/100 bedeutet: Wahrscheinlich erhöhter Blutdruck (>140/90), ungünstige Cholesterinwerte, oder Bewegungsmangel – oft in Kombination. Dein 10-Jahres-Risiko für Herzinfarkt liegt bei 10-20%, aber Herz-Kreislauf-Erkrankungen sind zu 80% vermeidbar! Konkrete Maßnahmen: Blutdruck kontrollieren (Ziel <130/85), Lipidprofil checken (LDL <100), 150 Min Bewegung/Woche, Mittelmeer-Diät starten. Bei Blutdruck >160/100: Ärztliche Abklärung! Medikamente sind keine Niederlage – sie können +10 Jahre bringen. Jeder Monat Verzögerung erhöht Risiko, jeder Monat Verbesserung senkt es messbar.",
        en: "Elevated risk – action recommended. Your cardiovascular system shows several warning signals. A score of 35-49/100 means: Likely elevated blood pressure (>140/90), unfavorable cholesterol, or lack of exercise – often in combination. Your 10-year risk for heart attack is 10-20%, but cardiovascular diseases are 80% preventable! Concrete measures: Check blood pressure (target <130/85), check lipid profile (LDL <100), 150 min exercise/week, start Mediterranean diet. With blood pressure >160/100: Medical evaluation! Medications are not defeat – they can bring +10 years. Every month of delay increases risk, every month of improvement measurably reduces it.",
        es: "Riesgo elevado – acción recomendada. Tu sistema cardiovascular muestra varias señales de advertencia. Una puntuación de 35-49/100 significa: Probablemente presión arterial elevada (>140/90), colesterol desfavorable, o falta de ejercicio – a menudo en combinación. Tu riesgo a 10 años de infarto es 10-20%, ¡pero las enfermedades cardiovasculares son 80% prevenibles! Medidas concretas: Controlar presión arterial (objetivo <130/85), revisar perfil lipídico (LDL <100), 150 min ejercicio/semana, iniciar dieta mediterránea. Con presión arterial >160/100: ¡Evaluación médica! Medicamentos no son derrota – pueden traer +10 años. Cada mes de retraso aumenta riesgo, cada mes de mejora lo reduce mensurablemente.",
        fr: "Risque élevé – action recommandée. Votre système cardiovasculaire montre plusieurs signaux d'alerte. Un score de 35-49/100 signifie : Probablement tension artérielle élevée (>140/90), cholestérol défavorable, ou manque d'exercice – souvent en combinaison. Votre risque à 10 ans d'infarctus est 10-20%, mais maladies cardiovasculaires sont 80% évitables ! Mesures concrètes : Contrôler tension artérielle (objectif <130/85), vérifier profil lipidique (LDL <100), 150 min exercice/semaine, débuter régime méditerranéen. Avec tension >160/100 : Évaluation médicale ! Médicaments ne sont pas défaite – ils peuvent apporter +10 ans. Chaque mois de retard augmente risque, chaque mois d'amélioration le réduit mesurablement."
      },

      poor: {
        de: "ACHTUNG! Dein Herz-Kreislauf-System ist stark belastet. Hoher Blutdruck, Herzerkrankungen oder multiple Risikofaktoren liegen vor. Ärztliche Kontrolle notwendig!",
        en: "ATTENTION! Your cardiovascular system is heavily burdened. High blood pressure, heart disease or multiple risk factors present. Medical checkup necessary!",
        es: "¡ATENCIÓN! Tu sistema cardiovascular está muy cargado. Presión arterial alta, enfermedad cardíaca o múltiples factores de riesgo presentes. ¡Chequeo médico necesario!",
        fr: "ATTENTION ! Votre système cardiovasculaire est fortement sollicité. Hypertension, maladie cardiaque ou multiples facteurs de risque présents. Bilan médical nécessaire !"
      }
    },

    metabolic: {
      excellent: {
        de: "Perfekt! Dein Stoffwechsel funktioniert optimal. Blutzucker, Gewicht und Cholesterin im idealen Bereich.",
        en: "Perfect! Your metabolism functions optimally. Blood sugar, weight and cholesterol in ideal range.",
        es: "¡Perfecto! Tu metabolismo funciona óptimamente. Azúcar en sangre, peso y colesterol en rango ideal.",
        fr: "Parfait ! Votre métabolisme fonctionne de manière optimale. Glycémie, poids et cholestérol dans la plage idéale."
      },
      good: {
        de: "Gut! Dein Stoffwechsel arbeitet effizient. Kleinere Anpassungen können präventiv wirken.",
        en: "Good! Your metabolism works efficiently. Minor adjustments can have preventive effects.",
        es: "¡Bien! Tu metabolismo trabaja eficientemente. Pequeños ajustes pueden tener efectos preventivos.",
        fr: "Bien ! Votre métabolisme fonctionne efficacement. De petits ajustements peuvent avoir des effets préventifs."
      },
      neutral: {
        de: "Stabiler Stoffwechsel mit Verbesserungspotenzial. Dein Metabolismus funktioniert grundsätzlich gut und zeigt keine akuten Warnsignale. Ein Score von 50-59/100 bedeutet: Dein Gewicht, Blutzucker und Cholesterin liegen im akzeptablen Bereich, aber mit Optimierungspotenzial. Der Stoffwechsel ist hochgradig beeinflussbar – bereits 5-7% Gewichtsreduktion (falls nötig) senken das Diabetes-Risiko um 58%. Optimiere durch: Mediterrane Ernährung (Olivenöl, Nüsse, Gemüse, Fisch), regelmäßige Bewegung (Muskeln sind metabolisch aktiv!), und vermeide verarbeitete Kohlenhydrate. Zielwerte: BMI 20-25, Nüchternblutzucker <100 mg/dl, HbA1c <5.7%. Metabolische Gesundheit ist der Schlüssel zu gesundem Altern.",
        en: "Stable metabolism with improvement potential. Your metabolism functions well overall and shows no acute warning signs. A score of 50-59/100 means: Your weight, blood sugar and cholesterol are in acceptable range, but with optimization potential. Metabolism is highly modifiable – even 5-7% weight reduction (if needed) reduces diabetes risk by 58%. Optimize through: Mediterranean diet (olive oil, nuts, vegetables, fish), regular exercise (muscles are metabolically active!), and avoid processed carbohydrates. Target values: BMI 20-25, fasting glucose <100 mg/dl, HbA1c <5.7%. Metabolic health is key to healthy aging.",
        es: "Metabolismo estable con potencial de mejora. Tu metabolismo funciona bien en general y no muestra señales de advertencia agudas. Una puntuación de 50-59/100 significa: Tu peso, azúcar en sangre y colesterol están en rango aceptable, pero con potencial de optimización. El metabolismo es altamente modificable – incluso una reducción de peso del 5-7% (si es necesario) reduce el riesgo de diabetes en un 58%. Optimiza mediante: Dieta mediterránea (aceite de oliva, nueces, verduras, pescado), ejercicio regular (¡los músculos son metabólicamente activos!), y evita carbohidratos procesados. Valores objetivo: IMC 20-25, glucosa en ayunas <100 mg/dl, HbA1c <5.7%. La salud metabólica es clave para el envejecimiento saludable.",
        fr: "Métabolisme stable avec potentiel d'amélioration. Votre métabolisme fonctionne bien dans l'ensemble et ne montre aucun signe d'alerte aigu. Un score de 50-59/100 signifie : Votre poids, glycémie et cholestérol sont dans une plage acceptable, mais avec un potentiel d'optimisation. Le métabolisme est hautement modifiable – même une réduction de poids de 5-7% (si nécessaire) réduit le risque de diabète de 58%. Optimisez par : Régime méditerranéen (huile d'olive, noix, légumes, poisson), exercice régulier (les muscles sont métaboliquement actifs !), et évitez les glucides transformés. Valeurs cibles : IMC 20-25, glycémie à jeun <100 mg/dl, HbA1c <5.7%. La santé métabolique est la clé du vieillissement en bonne santé."
      },
   moderate: {
        de: "Prädiabetes-Bereich – Jetzt gegensteuern! Dein Stoffwechsel zeigt Warnsignale für metabolisches Syndrom. Ein Score von 35-49/100 bedeutet: Wahrscheinlich 2-3 Faktoren wie Übergewicht (BMI >27), Bauchumfang erhöht, Nüchternblutzucker 100-125 mg/dl (Prädiabetes), erhöhte Cholesterin/Triglyceride. 50% Diabetes-Risiko in 10 Jahren – ABER: 58% Reduktion möglich! Die DPP-Studie zeigte: 7% Gewichtsverlust + 150 Min Bewegung/Woche wirken besser als Metformin. Konkrete Maßnahmen: Bluttest (Nüchternglukose, HbA1c), 5-10kg abnehmen, verarbeitete Kohlenhydrate eliminieren, Krafttraining starten (Muskeln = Glukose-Speicher). Bei HbA1c >6.0%: Ärztlich abklären! Metabolische Gesundheit ist nicht genetisch fixiert – du hast es in der Hand.",
        en: "Pre-diabetes range – Counter now! Your metabolism shows warning signals for metabolic syndrome. A score of 35-49/100 means: Likely 2-3 factors like overweight (BMI >27), increased waist circumference, fasting glucose 100-125 mg/dl (pre-diabetes), elevated cholesterol/triglycerides. 50% diabetes risk in 10 years – BUT: 58% reduction possible! The DPP study showed: 7% weight loss + 150 min exercise/week work better than Metformin. Concrete measures: Blood test (fasting glucose, HbA1c), lose 5-10kg, eliminate processed carbs, start strength training (muscles = glucose storage). With HbA1c >6.0%: Medical evaluation! Metabolic health is not genetically fixed – you have control.",
        es: "Rango de prediabetes – ¡Contrarresta ahora! Tu metabolismo muestra señales de advertencia de síndrome metabólico. Una puntuación de 35-49/100 significa: Probablemente 2-3 factores como sobrepeso (IMC >27), circunferencia cintura aumentada, glucosa en ayunas 100-125 mg/dl (prediabetes), colesterol/triglicéridos elevados. 50% riesgo diabetes en 10 años – PERO: ¡58% reducción posible! El estudio DPP mostró: 7% pérdida peso + 150 min ejercicio/semana funcionan mejor que Metformina. Medidas concretas: Análisis sangre (glucosa en ayunas, HbA1c), perder 5-10kg, eliminar carbohidratos procesados, comenzar entrenamiento fuerza (músculos = almacenamiento glucosa). Con HbA1c >6.0%: ¡Evaluación médica! Salud metabólica no está fijada genéticamente – tú tienes control.",
        fr: "Zone de prédiabète – Contrer maintenant ! Votre métabolisme montre signaux d'alerte de syndrome métabolique. Un score de 35-49/100 signifie : Probablement 2-3 facteurs comme surpoids (IMC >27), tour de taille augmenté, glycémie à jeun 100-125 mg/dl (prédiabète), cholestérol/triglycérides élevés. 50% risque diabète en 10 ans – MAIS : 58% réduction possible ! L'étude DPP a montré : 7% perte poids + 150 min exercice/semaine fonctionnent mieux que Metformine. Mesures concrètes : Analyse sang (glucose à jeun, HbA1c), perdre 5-10kg, éliminer glucides transformés, commencer entraînement force (muscles = stockage glucose). Avec HbA1c >6.0% : Évaluation médicale ! Santé métabolique n'est pas fixée génétiquement – vous avez contrôle."
      },
      poor: {
        de: "KRITISCH! Metabolisches Syndrom oder Diabetes liegt vor. Sofortiges Handeln erforderlich - Ernährungsumstellung, Gewichtsreduktion, ärztliche Betreuung!",
        en: "CRITICAL! Metabolic syndrome or diabetes present. Immediate action required - dietary changes, weight reduction, medical care!",
        es: "¡CRÍTICO! Síndrome metabólico o diabetes presente. Acción inmediata requerida - cambios dietéticos, reducción de peso, atención médica!",
        fr: "CRITIQUE ! Syndrome métabolique ou diabète présent. Action immédiate requise - changements alimentaires, réduction du poids, soins médicaux !"
      }
    },

    lifestyle_smoke: {
      excellent: {
        de: "Perfekt! Du rauchst nicht oder hast vor >10 Jahren aufgehört. Deine Lungen danken es dir!",
        en: "Perfect! You don't smoke or quit >10 years ago. Your lungs thank you!",
        es: "¡Perfecto! No fumas o dejaste hace >10 años. ¡Tus pulmones te lo agradecen!",
        fr: "Parfait ! Vous ne fumez pas ou avez arrêté il y a >10 ans. Vos poumons vous remercient !"
      },
      good: {
        de: "Gut! Du hast aufgehört zu rauchen. Dein Körper regeneriert sich bereits. Nach 10 Jahren rauchfrei normalisiert sich das Risiko fast vollständig.",
        en: "Good! You quit smoking. Your body is already regenerating. After 10 years smoke-free the risk normalizes almost completely.",
        es: "¡Bien! Dejaste de fumar. Tu cuerpo ya se está regenerando. Después de 10 años sin fumar el riesgo se normaliza casi completamente.",
        fr: "Bien ! Vous avez arrêté de fumer. Votre corps se régénère déjà. Après 10 ans sans tabac, le risque se normalise presque complètement."
      },
       neutral: {
        de: "Auf dem Heilungsweg – bleib standhaft! Du hast vor 1-5 Jahren aufgehört zu rauchen und dein Körper regeneriert sich bereits. Ein Score von 50-59/100 bedeutet: Die akute Gefahr ist vorbei, aber der vollständige Heilungsprozess braucht 10-15 Jahre. Wo du jetzt stehst (1-5 Jahre rauchfrei): Herzinfarkt-Risiko bereits um 50% gesunken, Schlaganfall-Risiko normalisiert sich, Lungenfunktion verbessert sich jährlich um 5-10%, Krebsrisiko sinkt kontinuierlich (aber langsam). Die kritische Phase: Jahre 1-5 haben höchstes Rückfall-Risiko (40% der Ex-Raucher). Bleib stark durch: Trigger identifizieren und vermeiden, Ersatzstrategien (Sport statt Zigarette bei Stress!), soziales Umfeld optimieren (Raucher-Freunde meiden in kritischen Momenten), Nikotin-Ersatz bei Bedarf (Pflaster/Kaugummi besser als Rückfall). Nach 10 Jahren rauchfrei: Lungenkrebs-Risiko halbiert, nach 15 Jahren: fast wie Nie-Raucher. Du hast die härteste Phase (Entzug) geschafft – jetzt nicht aufgeben! Jeder rauchfreie Tag addiert Lebenszeit.",
        en: "On the healing path – stay strong! You quit smoking 1-5 years ago and your body is already regenerating. A score of 50-59/100 means: The acute danger is over, but complete healing takes 10-15 years. Where you stand now (1-5 years smoke-free): Heart attack risk already reduced by 50%, stroke risk normalizing, lung function improving 5-10% annually, cancer risk declining continuously (but slowly). The critical phase: Years 1-5 have highest relapse risk (40% of ex-smokers). Stay strong through: Identify and avoid triggers, replacement strategies (exercise instead of cigarette for stress!), optimize social environment (avoid smoker friends in critical moments), nicotine replacement if needed (patches/gum better than relapse). After 10 years smoke-free: lung cancer risk halved, after 15 years: almost like never-smoker. You've overcome the hardest phase (withdrawal) – don't give up now! Every smoke-free day adds lifetime.",
        es: "¡En el camino de curación – mantente fuerte! Dejaste de fumar hace 1-5 años y tu cuerpo ya se está regenerando. Una puntuación de 50-59/100 significa: El peligro agudo ha pasado, pero la curación completa toma 10-15 años. Dónde estás ahora (1-5 años sin fumar): Riesgo de infarto ya reducido en 50%, riesgo de accidente cerebrovascular normalizándose, función pulmonar mejorando 5-10% anualmente, riesgo de cáncer disminuyendo continuamente (pero lentamente). La fase crítica: Años 1-5 tienen mayor riesgo de recaída (40% de ex-fumadores). Mantente fuerte mediante: Identificar y evitar desencadenantes, estrategias de reemplazo (¡ejercicio en vez de cigarrillo para estrés!), optimizar entorno social (evitar amigos fumadores en momentos críticos), reemplazo de nicotina si es necesario (parches/chicles mejor que recaída). Después de 10 años sin fumar: riesgo de cáncer pulmonar reducido a la mitad, después de 15 años: casi como nunca-fumador. Has superado la fase más difícil (abstinencia) – ¡no te rindas ahora! Cada día sin fumar añade tiempo de vida.",
        fr: "Sur le chemin de la guérison – restez fort ! Vous avez arrêté de fumer il y a 1-5 ans et votre corps se régénère déjà. Un score de 50-59/100 signifie : Le danger aigu est passé, mais la guérison complète prend 10-15 ans. Où vous en êtes maintenant (1-5 ans sans fumée) : Risque d'infarctus déjà réduit de 50%, risque d'AVC se normalisant, fonction pulmonaire s'améliorant de 5-10% annuellement, risque de cancer diminuant continuellement (mais lentement). La phase critique : Années 1-5 ont le plus haut risque de rechute (40% des ex-fumeurs). Restez fort par : Identifier et éviter déclencheurs, stratégies de remplacement (exercice au lieu de cigarette pour stress !), optimiser environnement social (éviter amis fumeurs dans moments critiques), remplacement nicotine si nécessaire (patchs/gommes mieux que rechute). Après 10 ans sans fumée : risque cancer poumon réduit de moitié, après 15 ans : presque comme jamais-fumeur. Vous avez surmonté la phase la plus difficile (sevrage) – n'abandonnez pas maintenant ! Chaque jour sans fumée ajoute du temps de vie."
      },
      moderate: {
        de: "Aktiver Raucher mit moderatem Konsum – Gefahr erkannt? Du rauchst aktuell, aber 'nur' 5-10 Zigaretten täglich oder gelegentlich. Ein Score von 35-49/100 bedeutet: Es gibt KEIN sicheres Level des Rauchens – bereits 1 Zigarette/Tag erhöht Herzinfarkt-Risiko um 50% im Vergleich zu Nie-Rauchern! Rauchen ist die vermeidbarste Todesursache weltweit. Dein aktuelles Risiko: Lungenkrebs +1500%, COPD +1000%, Herzinfarkt +200%, Schlaganfall +200%, 12 weitere Krebsarten erhöht. Durchschnittlich verlierst du 10 Jahre Lebenserwartung. Konkrete Maßnahmen: AUFHÖREN, nicht reduzieren! Jeder Tag Verzögerung kostet Lebenszeit. Nutze professionelle Hilfe (Raucherentwöhnung, Nikotinersatz, Medikamente wie Vareniclin/Bupropion – verdreifachen Erfolgsrate!), identifiziere Trigger, baue Ersatzstrategien auf. Bei Entzugssymptomen: Normal und temporär (2-4 Wochen). Nach 1 Jahr rauchfrei: Herzinfarkt-Risiko halbiert. Die beste Zeit aufzuhören war vor 20 Jahren – die zweitbeste ist JETZT.",
        en: "Active smoker with moderate consumption – danger recognized? You currently smoke, but 'only' 5-10 cigarettes daily or occasionally. A score of 35-49/100 means: There is NO safe level of smoking – even 1 cigarette/day increases heart attack risk by 50% compared to never-smokers! Smoking is the most preventable cause of death worldwide. Your current risk: lung cancer +1500%, COPD +1000%, heart attack +200%, stroke +200%, 12 other cancers increased. On average you lose 10 years life expectancy. Concrete measures: QUIT, don't reduce! Every day of delay costs lifetime. Use professional help (smoking cessation, nicotine replacement, medications like Varenicline/Bupropion – triple success rate!), identify triggers, build replacement strategies. With withdrawal symptoms: Normal and temporary (2-4 weeks). After 1 year smoke-free: heart attack risk halved. Best time to quit was 20 years ago – second best is NOW.",
        es: "Fumador activo con consumo moderado – ¿peligro reconocido? Actualmente fumas, pero 'solo' 5-10 cigarrillos diarios u ocasionalmente. Una puntuación de 35-49/100 significa: ¡NO existe nivel seguro de fumar – incluso 1 cigarrillo/día aumenta riesgo de infarto en 50% comparado con nunca-fumadores! Fumar es la causa de muerte más prevenible mundialmente. Tu riesgo actual: cáncer pulmón +1500%, EPOC +1000%, infarto +200%, accidente cerebrovascular +200%, 12 otros cánceres aumentados. En promedio pierdes 10 años esperanza de vida. Medidas concretas: ¡DEJAR, no reducir! Cada día de retraso cuesta tiempo de vida. Usa ayuda profesional (cesación tabáquica, reemplazo nicotina, medicamentos como Vareniclina/Bupropión – ¡triplican tasa éxito!), identifica desencadenantes, construye estrategias reemplazo. Con síntomas abstinencia: Normal y temporal (2-4 semanas). Después de 1 año sin fumar: riesgo infarto reducido a la mitad. Mejor momento para dejar fue hace 20 años – segundo mejor es AHORA.",
        fr: "Fumeur actif avec consommation modérée – danger reconnu ? Vous fumez actuellement, mais 'seulement' 5-10 cigarettes quotidiennement ou occasionnellement. Un score de 35-49/100 signifie : Il N'EXISTE PAS de niveau sûr de tabagisme – même 1 cigarette/jour augmente risque infarctus de 50% comparé aux jamais-fumeurs ! Fumer est cause de décès la plus évitable mondialement. Votre risque actuel : cancer poumon +1500%, BPCO +1000%, infarctus +200%, AVC +200%, 12 autres cancers augmentés. En moyenne vous perdez 10 ans espérance de vie. Mesures concrètes : ARRÊTER, pas réduire ! Chaque jour de retard coûte temps de vie. Utilisez aide professionnelle (sevrage tabagique, remplacement nicotine, médicaments comme Varénicline/Bupropion – triplent taux succès !), identifiez déclencheurs, construisez stratégies remplacement. Avec symptômes sevrage : Normal et temporaire (2-4 semaines). Après 1 an sans fumée : risque infarctus réduit de moitié. Meilleur moment arrêter était il y a 20 ans – deuxième meilleur est MAINTENANT."
      },
      poor: {
        de: "ALARM! Starkes Rauchen (>20 Zig./Tag) kostet dich 10-12 Jahre Lebenserwartung. Lungenkrebs-Risiko ist 20x höher. SOFORT AUFHÖREN!",
        en: "ALARM! Heavy smoking (>20 cig./day) costs you 10-12 years of life expectancy. Lung cancer risk is 20x higher. QUIT IMMEDIATELY!",
        es: "¡ALARMA! Fumar mucho (>20 cig./día) te cuesta 10-12 años de esperanza de vida. Riesgo de cáncer de pulmón es 20x mayor. ¡DEJA INMEDIATAMENTE!",
        fr: "ALARME ! Tabagisme intense (>20 cig./jour) vous coûte 10-12 ans d'espérance de vie. Risque de cancer du poumon 20x plus élevé. ARRÊTEZ IMMÉDIATEMENT !"
      }
    },

    lifestyle_alcohol: {
      excellent: {
        de: "Optimal! Dein Alkoholkonsum liegt im gesunden Bereich oder du trinkst gar nicht. Keine Belastung für Leber, Herz und Gehirn.",
        en: "Optimal! Your alcohol consumption is in healthy range or you don't drink at all. No burden on liver, heart and brain.",
        es: "¡Óptimo! Tu consumo de alcohol está en rango saludable o no bebes en absoluto. Sin carga para hígado, corazón y cerebro.",
        fr: "Optimal ! Votre consommation d'alcool est dans la plage saine ou vous ne buvez pas du tout. Aucune charge pour le foie, le cœur et le cerveau."
      },
      good: {
        de: "Gut! Du trinkst moderat (max 1-2 Drinks/Tag). Der J-Kurven-Effekt könnte sogar leicht schützend sein, überschreite diese Grenze aber nicht.",
        en: "Good! You drink moderately (max 1-2 drinks/day). The J-curve effect could even be slightly protective, but don't exceed this limit.",
        es: "¡Bien! Bebes moderadamente (máx 1-2 bebidas/día). El efecto de curva J podría incluso ser ligeramente protector, pero no excedas este límite.",
        fr: "Bien ! Vous buvez modérément (max 1-2 verres/jour). L'effet courbe en J pourrait même être légèrement protecteur, mais ne dépassez pas cette limite."
      },
      neutral: {
        de: "Kontrolliertes Trinkverhalten. Dein Alkoholkonsum liegt im moderaten, gesundheitlich akzeptablen Bereich und zeigt sogar einen leichten Schutzeffekt. Mit monatlichem bis gelegentlichem Konsum von 1-2 Drinks bewegst du dich in einem Bereich, der kardiovaskulär neutral bis leicht schützend wirken kann. Du vermeidest Binge-Drinking, was entscheidend ist – denn nicht die Gesamtmenge, sondern das Trinkmuster bestimmt Gesundheitsrisiken. Bleib bei dieser Frequenz (monatlich oder seltener, max 1-2 Drinks pro Gelegenheit). Ab 14+ Drinks/Woche steigt das Risiko für Lebererkrankungen (+40%), Bluthochdruck (+30%), und 7 Krebsarten (Mund, Rachen, Speiseröhre, Leber, Brust, Darm) deutlich an. Dein aktuelles Verhalten schützt dich vor diesen Risiken. Die oft zitierte 'schützende Wirkung' von Alkohol ist umstritten – Abstinenz ist die sicherste Option.",
        en: "Controlled drinking behavior. Your alcohol consumption is in a moderate, health-acceptable range and even shows a slight protective effect. With monthly to occasional consumption of 1-2 drinks, you're in a range that can be cardiovascularly neutral to slightly protective. You avoid binge drinking, which is crucial – because it's not the total amount but the drinking pattern that determines health risks. Stay at this frequency (monthly or less, max 1-2 drinks per occasion). Above 14+ drinks/week, risk for liver disease (+40%), hypertension (+30%), and 7 cancers (mouth, throat, esophagus, liver, breast, colon) increases significantly. Your current behavior protects you from these risks. The often-cited 'protective effect' of alcohol is controversial – abstinence is the safest option.",
        es: "Comportamiento de bebida controlado. Tu consumo de alcohol está en un rango moderado, aceptable para la salud e incluso muestra un ligero efecto protector. Con consumo mensual a ocasional de 1-2 bebidas, te encuentras en un rango que puede ser cardiovascularmente neutral a ligeramente protector. Evitas el binge drinking, lo cual es crucial – porque no es la cantidad total sino el patrón de consumo lo que determina los riesgos para la salud. Mantente en esta frecuencia (mensual o menos, máx 1-2 bebidas por ocasión). Por encima de 14+ bebidas/semana, el riesgo de enfermedad hepática (+40%), hipertensión (+30%) y 7 cánceres (boca, garganta, esófago, hígado, mama, colon) aumenta significativamente. Tu comportamiento actual te protege de estos riesgos. El frecuentemente citado 'efecto protector' del alcohol es controvertido – la abstinencia es la opción más segura.",
        fr: "Comportement de consommation contrôlé. Votre consommation d'alcool se situe dans une plage modérée, acceptable pour la santé et montre même un léger effet protecteur. Avec une consommation mensuelle à occasionnelle de 1-2 verres, vous êtes dans une plage qui peut être cardiovasculairement neutre à légèrement protectrice. Vous évitez la consommation excessive, ce qui est crucial – car ce n'est pas la quantité totale mais le modèle de consommation qui détermine les risques pour la santé. Restez à cette fréquence (mensuelle ou moins, max 1-2 verres par occasion). Au-dessus de 14+ verres/semaine, le risque de maladie hépatique (+40%), d'hypertension (+30%) et de 7 cancers (bouche, gorge, œsophage, foie, sein, côlon) augmente significativement. Votre comportement actuel vous protège de ces risques. L'effet 'protecteur' souvent cité de l'alcool est controversé – l'abstinence est l'option la plus sûre."
      },
      moderate: {
        de: "Risiko-Bereich. Dein Alkoholkonsum liegt über den gesundheitlich empfohlenen Grenzen. Mit 2-3 Drinks täglich oder regelmäßigem Binge-Drinking (4+ Drinks pro Gelegenheit) bewegst du dich in einem Bereich, der nachweislich Gesundheitsschäden verursacht. Ab 14 Drinks/Woche steigt das Risiko für Lebererkrankungen (+40%), Bluthochdruck (+30%), 7 Krebsarten (Mund, Rachen, Speiseröhre, Leber, Brust, Darm), und Demenz deutlich. Konkrete Maßnahmen: Reduziere auf maximal 1-2 Drinks pro Tag, lege alkoholfreie Tage ein (mindestens 2-3 pro Woche), vermeide Binge-Drinking komplett, führe Trink-Tagebuch (bewusster Konsum). Bei täglichem Konsum: Schrittweise reduzieren, nicht abrupt stoppen (Entzugsgefahr bei >6 Drinks/Tag). Bei Leberwerter (GGT, GPT) erhöht: Ärztlich abklären! Alkohol ist ein Zellgift – kein Organ profitiert davon.",
        en: "Risk zone. Your alcohol consumption exceeds health-recommended limits. With 2-3 drinks daily or regular binge drinking (4+ drinks per occasion), you're in a range that demonstrably causes health damage. Above 14 drinks/week, risk for liver disease (+40%), hypertension (+30%), 7 cancers (mouth, throat, esophagus, liver, breast, colon), and dementia increases significantly. Concrete measures: Reduce to maximum 1-2 drinks per day, implement alcohol-free days (at least 2-3 per week), avoid binge drinking completely, keep drinking diary (conscious consumption). With daily consumption: Reduce gradually, don't stop abruptly (withdrawal risk with >6 drinks/day). With elevated liver values (GGT, ALT): Medical evaluation! Alcohol is a cell toxin – no organ benefits from it.",
        es: "Zona de riesgo. Tu consumo de alcohol excede los límites recomendados para la salud. Con 2-3 bebidas diarias o binge drinking regular (4+ bebidas por ocasión), te encuentras en un rango que demostrablemente causa daño a la salud. Por encima de 14 bebidas/semana, el riesgo de enfermedad hepática (+40%), hipertensión (+30%), 7 cánceres (boca, garganta, esófago, hígado, mama, colon), y demencia aumenta significativamente. Medidas concretas: Reduce a máximo 1-2 bebidas por día, implementa días sin alcohol (al menos 2-3 por semana), evita binge drinking completamente, lleva diario de consumo (consumo consciente). Con consumo diario: Reduce gradualmente, no pares abruptamente (riesgo de abstinencia con >6 bebidas/día). Con valores hepáticos elevados (GGT, ALT): ¡Evaluación médica! Alcohol es toxina celular – ningún órgano se beneficia.",
        fr: "Zone à risque. Votre consommation d'alcool dépasse les limites recommandées pour la santé. Avec 2-3 verres quotidiens ou binge drinking régulier (4+ verres par occasion), vous êtes dans une plage qui cause des dommages à la santé de manière démontrable. Au-dessus de 14 verres/semaine, le risque de maladie hépatique (+40%), d'hypertension (+30%), de 7 cancers (bouche, gorge, œsophage, foie, sein, côlon), et de démence augmente significativement. Mesures concrètes : Réduisez à maximum 1-2 verres par jour, mettez en place des jours sans alcool (au moins 2-3 par semaine), évitez binge drinking complètement, tenez journal de consommation (consommation consciente). Avec consommation quotidienne : Réduisez progressivement, n'arrêtez pas brutalement (risque sevrage avec >6 verres/jour). Avec valeurs hépatiques élevées (GGT, ALT) : Évaluation médicale ! Alcool est toxine cellulaire – aucun organe n'en bénéficie."
      },
      poor: {
        de: "GEFÄHRLICH! Massiver Alkoholkonsum (>6 Drinks oder daily heavy drinking) führt zu Organschäden. Leberzirrhose, Kardiomyopathie und 7 Krebsarten drohen!",
        en: "DANGEROUS! Massive alcohol consumption (>6 drinks or daily heavy drinking) leads to organ damage. Liver cirrhosis, cardiomyopathie and 7 cancer types threaten!",
        es: "¡PELIGROSO! Consumo masivo de alcohol (>6 bebidas o consumo diario excesivo) conduce a daño orgánico. ¡Cirrosis hepática, cardiomiopatía y 7 tipos de cáncer amenazan!",
        fr: "DANGEREUX ! Consommation massive d'alcool (>6 verres ou consommation quotidienne excessive) entraîne des lésions organiques. Cirrhose du foie, cardiomyopathie et 7 types de cancer menacent !"
      }
    },

    diet: {
      excellent: {
        de: "Hervorragend! Deine Ernährung folgt mediterranen Prinzipien: viel Gemüse, Obst, Fisch, Olivenöl, Nüsse. Das schützt Herz, Gehirn und Stoffwechsel optimal.",
        en: "Excellent! Your diet follows Mediterranean principles: lots of vegetables, fruit, fish, olive oil, nuts. This optimally protects heart, brain and metabolism.",
        es: "¡Excelente! Tu dieta sigue principios mediterráneos: muchas verduras, frutas, pescado, aceite de oliva, frutos secos. Esto protege óptimamente corazón, cerebro y metabolismo.",
        fr: "Excellent ! Votre alimentation suit les principes méditerranéens : beaucoup de légumes, fruits, poisson, huile d'olive, noix. Cela protège de manière optimale le cœur, le cerveau et le métabolisme."
      },
      good: {
        de: "Gut! Deine Ernährung hat gesunde Elemente. Durch konsequente Umsetzung mediterraner Prinzipien kannst du den Schutz noch verstärken.",
        en: "Good! Your diet has healthy elements. Through consistent implementation of Mediterranean principles you can strengthen protection further.",
        es: "¡Bien! Tu dieta tiene elementos saludables. A través de la implementación consistente de principios mediterráneos puedes fortalecer aún más la protección.",
        fr: "Bien ! Votre alimentation contient des éléments sains. Par une mise en œuvre cohérente des principes méditerranéens, vous pouvez renforcer davantage la protection."
      },
      neutral: {
        de: "Gute Grundlage mit Optimierungspotenzial. Deine Ernährung enthält bereits gesunde Elemente und zeigt einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du isst einige protektive Lebensmittel (Olivenöl, Nüsse, Fisch, Gemüse), aber noch nicht konsequent genug. Ernährung ist der mächtigste Lifestyle-Faktor – die PREDIMED-Studie zeigte: Mediterrane Ernährung reduziert kardiovaskuläre Ereignisse um 30%, Schlaganfälle um 49%. Optimiere durch: TÄGLICH Olivenöl als Hauptfett, 3+ Portionen Gemüse, Handvoll Nüsse. WÖCHENTLICH 3+ Portionen Fisch, Hülsenfrüchte 3x. REDUZIERE rotes Fleisch auf 1-2x/Woche, vermeide verarbeitetes Fleisch und Zucker. Schon 80% Compliance bringt massive Vorteile. Jede Mahlzeit ist eine Chance für Gesundheit oder Krankheit – wähle weise.",
        en: "Good foundation with optimization potential. Your diet already contains healthy elements and shows a slight protective effect. A score of 50-59/100 means: You eat some protective foods (olive oil, nuts, fish, vegetables), but not consistently enough yet. Diet is the most powerful lifestyle factor – the PREDIMED study showed: Mediterranean diet reduces cardiovascular events by 30%, strokes by 49%. Optimize through: DAILY olive oil as main fat, 3+ servings vegetables, handful of nuts. WEEKLY 3+ servings fish, legumes 3x. REDUCE red meat to 1-2x/week, avoid processed meat and sugar. Even 80% compliance brings massive benefits. Every meal is a chance for health or disease – choose wisely.",
        es: "Buena base con potencial de optimización. Tu dieta ya contiene elementos saludables y muestra un ligero efecto protector. Una puntuación de 50-59/100 significa: Comes algunos alimentos protectores (aceite de oliva, nueces, pescado, verduras), pero aún no lo suficientemente consistente. La dieta es el factor de estilo de vida más poderoso – el estudio PREDIMED mostró: La dieta mediterránea reduce eventos cardiovasculares en 30%, accidentes cerebrovasculares en 49%. Optimiza mediante: DIARIO aceite de oliva como grasa principal, 3+ porciones verduras, puñado de nueces. SEMANAL 3+ porciones pescado, legumbres 3x. REDUCE carne roja a 1-2x/semana, evita carne procesada y azúcar. Incluso 80% de cumplimiento trae beneficios masivos. Cada comida es una oportunidad para la salud o la enfermedad – elige sabiamente.",
        fr: "Bonne base avec potentiel d'optimisation. Votre alimentation contient déjà des éléments sains et montre un léger effet protecteur. Un score de 50-59/100 signifie : Vous mangez certains aliments protecteurs (huile d'olive, noix, poisson, légumes), mais pas encore assez régulièrement. L'alimentation est le facteur de style de vie le plus puissant – l'étude PREDIMED a montré : Le régime méditerranéen réduit les événements cardiovasculaires de 30%, les AVC de 49%. Optimisez par : QUOTIDIEN huile d'olive comme matière grasse principale, 3+ portions légumes, poignée de noix. HEBDOMADAIRE 3+ portions poisson, légumineuses 3x. RÉDUISEZ viande rouge à 1-2x/semaine, évitez viande transformée et sucre. Même 80% de conformité apporte des avantages massifs. Chaque repas est une chance pour la santé ou la maladie – choisissez judicieusement."
      },
      moderate: {
        de: "Verbesserungswürdig – Western Diet dominiert. Deine Ernährung enthält zu viel rotes Fleisch, Zucker und verarbeitete Lebensmittel, zu wenig Gemüse, Obst und gesunde Fette. Ein Score von 35-49/100 bedeutet: Deine Ernährung fördert chronische Entzündungen (inflammatorische Diät), was Risiko für Herzkrankheiten, Diabetes, Krebs und Demenz erhöht. Die gute Nachricht: Ernährung ist der am schnellsten änderbare Risikofaktor – Effekte zeigen sich in Wochen! Konkrete Maßnahmen: ELIMINIERE verarbeitetes Fleisch (Wurst, Schinken) komplett, reduziere rotes Fleisch auf 1x/Woche, Zucker drastisch senken (keine Softdrinks!), STARTE mit 2 Portionen Gemüse pro Mahlzeit, Olivenöl als Hauptfett, Handvoll Nüsse täglich. Bereits 50% Compliance bringt messbare Verbesserungen. Jede Mahlzeit ist eine Entscheidung – ändere 2 Mahlzeiten/Tag und du siehst Effekte in 4 Wochen (Gewicht, Energie, Blutdruck).",
        en: "Needs improvement – Western Diet dominates. Your diet contains too much red meat, sugar and processed foods, too few vegetables, fruit and healthy fats. A score of 35-49/100 means: Your diet promotes chronic inflammation (inflammatory diet), increasing risk for heart disease, diabetes, cancer and dementia. Good news: Diet is the fastest changeable risk factor – effects show in weeks! Concrete measures: ELIMINATE processed meat (sausage, ham) completely, reduce red meat to 1x/week, drastically lower sugar (no soft drinks!), START with 2 servings vegetables per meal, olive oil as main fat, handful nuts daily. Even 50% compliance brings measurable improvements. Every meal is a decision – change 2 meals/day and you see effects in 4 weeks (weight, energy, blood pressure).",
        es: "Necesita mejora – Dieta occidental domina. Tu dieta contiene demasiada carne roja, azúcar y alimentos procesados, muy pocas verduras, frutas y grasas saludables. Una puntuación de 35-49/100 significa: Tu dieta promueve inflamación crónica (dieta inflamatoria), aumentando riesgo de enfermedad cardíaca, diabetes, cáncer y demencia. Buenas noticias: Dieta es el factor de riesgo más rápido de cambiar – ¡efectos se muestran en semanas! Medidas concretas: ELIMINA carne procesada (embutidos, jamón) completamente, reduce carne roja a 1x/semana, baja azúcar drásticamente (¡sin refrescos!), COMIENZA con 2 porciones verduras por comida, aceite de oliva como grasa principal, puñado de nueces diariamente. Incluso 50% cumplimiento trae mejoras medibles. Cada comida es una decisión – cambia 2 comidas/día y ves efectos en 4 semanas (peso, energía, presión arterial).",
        fr: "À améliorer – Régime occidental domine. Votre alimentation contient trop de viande rouge, sucre et aliments transformés, trop peu de légumes, fruits et graisses saines. Un score de 35-49/100 signifie : Votre régime favorise inflammation chronique (régime inflammatoire), augmentant risque de maladies cardiaques, diabète, cancer et démence. Bonnes nouvelles : Alimentation est le facteur de risque le plus rapide à changer – effets se montrent en semaines ! Mesures concrètes : ÉLIMINEZ viande transformée (saucisse, jambon) complètement, réduisez viande rouge à 1x/semaine, baissez sucre drastiquement (pas de sodas !), COMMENCEZ avec 2 portions légumes par repas, huile d'olive comme graisse principale, poignée noix quotidiennement. Même 50% conformité apporte améliorations mesurables. Chaque repas est décision – changez 2 repas/jour et vous voyez effets en 4 semaines (poids, énergie, tension)."
      },
      poor: {
        de: "SCHLECHT! Western Diet dominiert: Fast Food, Zucker, rotes Fleisch, kaum Gemüse. Das fördert Entzündungen, Diabetes, Herzkrankheiten und Krebs massiv!",
        en: "BAD! Western Diet dominates: Fast Food, sugar, red meat, hardly any vegetables. This massively promotes inflammation, diabetes, heart disease and cancer!",
        es: "¡MALO! Dieta occidental domina: Comida rápida, azúcar, carne roja, apenas verduras. ¡Esto promueve masivamente inflamación, diabetes, enfermedades cardíacas y cáncer!",
        fr: "MAUVAIS ! Régime occidental domine : Fast-food, sucre, viande rouge, peu de légumes. Cela favorise massivement l'inflammation, le diabète, les maladies cardiaques et le cancer !"
      }
    },
    fitness: {
      excellent: {
        de: "Spitze! Du bewegst dich regelmäßig (>150 Min/Woche). Das ist der beste natürliche Schutz gegen Herzkrankheiten, Diabetes, Demenz und Krebs.",
        en: "Top! You exercise regularly (>150 min/week). This is the best natural protection against heart disease, diabetes, dementia and cancer.",
        es: "¡Excelente! Te ejercitas regularmente (>150 min/semana). Esta es la mejor protección natural contra enfermedad cardíaca, diabetes, demencia y cáncer."
      },
      good: {
        de: "Gut! Du bist aktiv. Steigere Intensität oder Häufigkeit, um den vollen präventiven Effekt zu erreichen (WHO: 150-300 Min/Woche).",
        en: "Good! You're active. Increase intensity or frequency to achieve full preventive effect (WHO: 150-300 min/week).",
        es: "¡Bien! Estás activo. Aumenta intensidad o frecuencia para lograr el efecto preventivo completo (OMS: 150-300 min/semana)."
      },
      neutral: {
        de: "Gute Basis, aber ausbaufähig. Deine Bewegungsgewohnheiten zeigen bereits einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du bewegst dich gelegentlich (100-150 Min/Woche), aber noch nicht optimal. Bewegung ist die mächtigste Einzelintervention für Gesundheit – WHO-Ziel: 150-300 Min moderate Aktivität/Woche. Jede 15-Minuten-Einheit täglich reduziert Gesamtmortalität um 4%. Optimiere durch: 30 Min zügiges Gehen täglich (oder 5x/Woche), 2x Krafttraining für Muskelmasse (ab 50 kritisch!), Alltagsbewegung maximieren (Treppen statt Lift, Fahrrad statt Auto). Bewegung schützt vor: Herzkrankheiten (-30%), Diabetes (-50%), Darmkrebs (-25%), Demenz (-40%), Depression (-30%). Bereits 75 Min intensive Aktivität/Woche senken Sterberisiko um 23%.",
        en: "Good foundation, but expandable. Your movement habits already show a slight protective effect. A score of 50-59/100 means: You move occasionally (100-150 min/week), but not yet optimally. Exercise is the most powerful single intervention for health – WHO target: 150-300 min moderate activity/week. Every 15-minute daily session reduces all-cause mortality by 4%. Optimize through: 30 min brisk walking daily (or 5x/week), 2x strength training for muscle mass (critical after 50!), maximize everyday movement (stairs instead of elevator, bike instead of car). Exercise protects against: heart disease (-30%), diabetes (-50%), colon cancer (-25%), dementia (-40%), depression (-30%). Just 75 min intense activity/week reduces mortality risk by 23%.",
        es: "Buena base, pero expandible. Tus hábitos de movimiento ya muestran un ligero efecto protector. Una puntuación de 50-59/100 significa: Te mueves ocasionalmente (100-150 min/semana), pero aún no óptimamente. El ejercicio es la intervención individual más poderosa para la salud – objetivo OMS: 150-300 min actividad moderada/semana. Cada sesión diaria de 15 minutos reduce mortalidad por todas las causas en 4%. Optimiza mediante: 30 min caminata rápida diaria (o 5x/semana), 2x entrenamiento de fuerza para masa muscular (¡crítico después de 50!), maximizar movimiento cotidiano (escaleras en vez de ascensor, bici en vez de auto). El ejercicio protege contra: enfermedad cardíaca (-30%), diabetes (-50%), cáncer de colon (-25%), demencia (-40%), depresión (-30%). Solo 75 min actividad intensa/semana reduce riesgo de mortalidad en 23%.",
        fr: "Bonne base, mais extensible. Vos habitudes de mouvement montrent déjà un léger effet protecteur. Un score de 50-59/100 signifie : Vous bougez occasionnellement (100-150 min/semaine), mais pas encore de manière optimale. L'exercice est l'intervention unique la plus puissante pour la santé – objectif OMS : 150-300 min activité modérée/semaine. Chaque séance quotidienne de 15 minutes réduit la mortalité toutes causes de 4%. Optimisez par : 30 min marche rapide quotidienne (ou 5x/semaine), 2x entraînement de force pour masse musculaire (critique après 50 !), maximiser mouvement quotidien (escaliers au lieu d'ascenseur, vélo au lieu de voiture). L'exercice protège contre : maladies cardiaques (-30%), diabète (-50%), cancer du côlon (-25%), démence (-40%), dépression (-30%). Seulement 75 min activité intense/semaine réduit risque de mortalité de 23%."
      },
     moderate: {
        de: "Zu wenig Bewegung – Gesundheitsrisiko! Du bewegst dich kaum und sitzt wahrscheinlich >8h täglich. Ein Score von 35-49/100 bedeutet: Dein Körper befindet sich in einem Zustand, den Forscher 'das neue Rauchen' nennen. Sitzen >8h/Tag erhöht kardiovaskuläres Risiko um 147%, jede Stunde zusätzliches Sitzen erhöht Sterberisiko um 6%. Muskelabbau (Sarkopenie) beginnt ab 30, beschleunigt ab 50 – ohne Gegenwirken verlierst du 3-8% Muskelmasse pro Dekade. Konkrete Maßnahmen: STARTE sofort mit täglichen 20-30 Min zügigem Gehen (keine Ausreden!), baue Alltagsbewegung ein (Treppen, Fahrrad, aufstehen jede Stunde), beginne 2x/Woche Krafttraining (Eigengewicht reicht anfangs). Ziel: 150 Min moderate Aktivität/Woche in 8-12 Wochen. Bewegung ist Medizin – kein Medikament senkt Sterberisiko so stark (-30% bei 150 Min/Woche). Jeder Schritt zählt, aber 3000+ Schritte täglich sind Minimum.",
        en: "Too little movement – health risk! You hardly move and probably sit >8h daily. A score of 35-49/100 means: Your body is in a state researchers call 'the new smoking'. Sitting >8h/day increases cardiovascular risk by 147%, each additional hour sitting increases mortality risk by 6%. Muscle loss (sarcopenia) begins at 30, accelerates after 50 – without counteraction you lose 3-8% muscle mass per decade. Concrete measures: START immediately with daily 20-30 min brisk walking (no excuses!), build everyday movement (stairs, bike, stand up every hour), begin 2x/week strength training (bodyweight is enough initially). Goal: 150 min moderate activity/week in 8-12 weeks. Exercise is medicine – no medication reduces mortality risk as strongly (-30% at 150 min/week). Every step counts, but 3000+ steps daily is minimum.",
        es: "Muy poco movimiento – ¡riesgo para la salud! Apenas te mueves y probablemente te sientas >8h diariamente. Una puntuación de 35-49/100 significa: Tu cuerpo está en un estado que investigadores llaman 'el nuevo fumar'. Sentarse >8h/día aumenta riesgo cardiovascular en 147%, cada hora adicional sentado aumenta riesgo de mortalidad en 6%. Pérdida muscular (sarcopenia) comienza a los 30, acelera después de 50 – sin contramedidas pierdes 3-8% masa muscular por década. Medidas concretas: COMIENZA inmediatamente con 20-30 min caminata rápida diaria (¡sin excusas!), construye movimiento cotidiano (escaleras, bici, levántate cada hora), inicia 2x/semana entrenamiento fuerza (peso corporal es suficiente inicialmente). Meta: 150 min actividad moderada/semana en 8-12 semanas. Ejercicio es medicina – ningún medicamento reduce riesgo mortalidad tan fuertemente (-30% con 150 min/semana). Cada paso cuenta, pero 3000+ pasos diarios es mínimo.",
        fr: "Trop peu de mouvement – risque santé ! Vous bougez à peine et êtes probablement assis >8h quotidiennement. Un score de 35-49/100 signifie : Votre corps est dans un état que chercheurs appellent 'la nouvelle cigarette'. S'asseoir >8h/jour augmente risque cardiovasculaire de 147%, chaque heure supplémentaire assise augmente risque mortalité de 6%. Perte musculaire (sarcopénie) commence à 30, accélère après 50 – sans contre-mesure vous perdez 3-8% masse musculaire par décennie. Mesures concrètes : COMMENCEZ immédiatement avec 20-30 min marche rapide quotidienne (pas d'excuses !), construisez mouvement quotidien (escaliers, vélo, levez-vous chaque heure), débutez 2x/semaine entraînement force (poids corporel suffit initialement). Objectif : 150 min activité modérée/semaine en 8-12 semaines. Exercice est médicament – aucun médicament ne réduit risque mortalité aussi fortement (-30% avec 150 min/semaine). Chaque pas compte, mais 3000+ pas quotidiens est minimum."
      },
      poor: {
        de: "KRITISCH! Völlige Inaktivität. Dein Risiko für Herzkrankheiten (+30%), Diabetes (+50%), Darmkrebs (+25%) und Demenz (+40%) ist massiv erhöht!",
        en: "CRITICAL! Complete inactivity. Your risk for heart disease (+30%), diabetes (+50%), colon cancer (+25%) and dementia (+40%) is massively increased!",
        es: "¡CRÍTICO! Inactividad completa. ¡Tu riesgo de enfermedad cardíaca (+30%), diabetes (+50%), cáncer de colon (+25%) y demencia (+40%) está masivamente aumentado!"
      }
    },
    
    sleep: {
      excellent: {
        de: "Perfekt! Du schläfst 7-8 Stunden und erholst dich gut. Das ist die optimale Schlafdauer für Langlebigkeit (U-Kurve).",
        en: "Perfect! You sleep 7-8 hours and recover well. This is the optimal sleep duration for longevity (U-curve).",
        es: "¡Perfecto! Duermes 7-8 horas y te recuperas bien. Esta es la duración óptima de sueño para longevidad (curva U)."
      },
      good: {
        de: "Okay. Deine Schlafdauer ist akzeptabel, aber Qualität könnte besser sein. Erholsamer Schlaf ist genauso wichtig wie Dauer.",
        en: "Okay. Your sleep duration is acceptable, but quality could be better. Restorative sleep is just as important as duration.",
        es: "Okay. Tu duración de sueño es aceptable, pero la calidad podría ser mejor. El sueño reparador es tan importante como la duración."
      },
      neutral: {
        de: "Akzeptabler Schlaf mit Verbesserungspotenzial. Deine Schlafgewohnheiten zeigen einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du schläfst 6-7 Stunden oder 7-8 Stunden mit gelegentlichen Unterbrechungen – grundsätzlich OK, aber nicht optimal. Schlaf ist keine 'verlorene Zeit' – während du schläfst, repariert der Körper DNA, konsolidiert Gedächtnis, reinigt das Gehirn (Glymphatisches System). Optimiere durch: REGELMÄSSIGKEIT (gleiche Schlaf-/Aufwachzeit, auch am Wochenende!), 7-9 Stunden anstreben, Schlafumgebung optimieren (dunkel, kühl 16-19°C, leise), 2h vor Schlaf kein Blaulicht (Bildschirme), kein Koffein nach 14 Uhr. Chronischer Schlafmangel (<6h) erhöht Risiko: Herzkrankheiten (+48%), Diabetes (+28%), Alzheimer (Beta-Amyloid-Akkumulation), Krebs, Übergewicht. Bereits 1h mehr Schlaf kann +2 Jahre Lebenserwartung bringen.",
        en: "Acceptable sleep with improvement potential. Your sleep habits show a slight protective effect. A score of 50-59/100 means: You sleep 6-7 hours or 7-8 hours with occasional interruptions – basically OK, but not optimal. Sleep is not 'lost time' – while you sleep, the body repairs DNA, consolidates memory, cleans the brain (glymphatic system). Optimize through: REGULARITY (same sleep/wake time, even on weekends!), aim for 7-9 hours, optimize sleep environment (dark, cool 16-19°C, quiet), no blue light 2h before sleep (screens), no caffeine after 2 PM. Chronic sleep deprivation (<6h) increases risk: heart disease (+48%), diabetes (+28%), Alzheimer's (beta-amyloid accumulation), cancer, obesity. Just 1h more sleep can bring +2 years life expectancy.",
        es: "Sueño aceptable con potencial de mejora. Tus hábitos de sueño muestran un ligero efecto protector. Una puntuación de 50-59/100 significa: Duermes 6-7 horas o 7-8 horas con interrupciones ocasionales – básicamente OK, pero no óptimo. El sueño no es 'tiempo perdido' – mientras duermes, el cuerpo repara ADN, consolida memoria, limpia el cerebro (sistema glinfático). Optimiza mediante: REGULARIDAD (misma hora dormir/despertar, ¡incluso fines de semana!), apuntar a 7-9 horas, optimizar ambiente de sueño (oscuro, fresco 16-19°C, silencioso), sin luz azul 2h antes de dormir (pantallas), sin cafeína después de 14h. Privación crónica de sueño (<6h) aumenta riesgo: enfermedad cardíaca (+48%), diabetes (+28%), Alzheimer (acumulación beta-amiloide), cáncer, obesidad. Solo 1h más de sueño puede traer +2 años esperanza de vida.",
        fr: "Sommeil acceptable avec potentiel d'amélioration. Vos habitudes de sommeil montrent un léger effet protecteur. Un score de 50-59/100 signifie : Vous dormez 6-7 heures ou 7-8 heures avec interruptions occasionnelles – fondamentalement OK, mais pas optimal. Le sommeil n'est pas du 'temps perdu' – pendant que vous dormez, le corps répare l'ADN, consolide la mémoire, nettoie le cerveau (système glymphatique). Optimisez par : RÉGULARITÉ (même heure coucher/réveil, même le week-end !), viser 7-9 heures, optimiser environnement de sommeil (sombre, frais 16-19°C, calme), pas de lumière bleue 2h avant sommeil (écrans), pas de caféine après 14h. Privation chronique de sommeil (<6h) augmente risque : maladies cardiaques (+48%), diabète (+28%), Alzheimer (accumulation bêta-amyloïde), cancer, obésité. Seulement 1h de sommeil en plus peut apporter +2 ans d'espérance de vie."
      },
     moderate: {
        de: "Chronischer Schlafmangel – Gesundheit leidet. Du schläfst regelmäßig <6 Stunden oder hast schwere Schlafstörungen (häufige Unterbrechungen, Einschlafprobleme). Ein Score von 35-49/100 bedeutet: Dein Körper befindet sich in permanentem Erholungsdefizit. Chronischer Schlafmangel (<6h über Monate) erhöht Herzinfarkt-Risiko um 48%, Diabetes um 28%, Schlaganfall um 15%, und beschleunigt Alzheimer-Entwicklung (Beta-Amyloid-Akkumulation im Schlaf nicht ausreichend entfernt). Dein Immunsystem ist geschwächt – Infektanfälligkeit verdreifacht! Konkrete Maßnahmen: PRIORITÄT Nummer 1: Schlaf auf 7-8h erhöhen (nicht verhandelbar!), feste Schlafenszeiten auch am Wochenende, Schlafumgebung optimieren (dunkel, kühl 16-18°C, leise), 2h vor Schlaf kein Bildschirm, bei Schlafapnoe-Verdacht (Schnarchen + Tagesmüdigkeit): Schlaflabor! Schlaf ist keine verschwendete Zeit – es ist die wichtigste Regenerationsphase. Jede Stunde unter 7h kostet Lebenszeit.",
        en: "Chronic sleep deprivation – health suffers. You regularly sleep <6 hours or have severe sleep disorders (frequent interruptions, difficulty falling asleep). A score of 35-49/100 means: Your body is in permanent recovery deficit. Chronic sleep deprivation (<6h over months) increases heart attack risk by 48%, diabetes by 28%, stroke by 15%, and accelerates Alzheimer's development (beta-amyloid accumulation not sufficiently removed during sleep). Your immune system is weakened – infection susceptibility tripled! Concrete measures: PRIORITY number 1: Increase sleep to 7-8h (non-negotiable!), fixed sleep times even on weekends, optimize sleep environment (dark, cool 16-18°C, quiet), no screen 2h before sleep, with sleep apnea suspicion (snoring + daytime fatigue): sleep lab! Sleep is not wasted time – it's the most important regeneration phase. Every hour under 7h costs lifetime.",
        es: "Privación crónica de sueño – la salud sufre. Duermes regularmente <6 horas o tienes trastornos graves de sueño (interrupciones frecuentes, dificultad para dormir). Una puntuación de 35-49/100 significa: Tu cuerpo está en déficit permanente de recuperación. Privación crónica de sueño (<6h durante meses) aumenta riesgo de infarto en 48%, diabetes en 28%, accidente cerebrovascular en 15%, y acelera desarrollo de Alzheimer (acumulación beta-amiloide no suficientemente eliminada durante sueño). ¡Tu sistema inmune está debilitado – susceptibilidad a infecciones triplicada! Medidas concretas: PRIORIDAD número 1: Aumentar sueño a 7-8h (¡no negociable!), horarios de sueño fijos incluso fines de semana, optimizar ambiente de sueño (oscuro, fresco 16-18°C, silencioso), sin pantalla 2h antes de dormir, con sospecha apnea del sueño (ronquidos + fatiga diurna): ¡laboratorio del sueño! Sueño no es tiempo desperdiciado – es la fase de regeneración más importante. Cada hora bajo 7h cuesta tiempo de vida.",
        fr: "Privation chronique de sommeil – santé souffre. Vous dormez régulièrement <6 heures ou avez troubles sévères du sommeil (interruptions fréquentes, difficulté à s'endormir). Un score de 35-49/100 signifie : Votre corps est en déficit permanent de récupération. Privation chronique de sommeil (<6h sur mois) augmente risque infarctus de 48%, diabète de 28%, AVC de 15%, et accélère développement Alzheimer (accumulation bêta-amyloïde pas suffisamment éliminée pendant sommeil). Votre système immunitaire est affaibli – susceptibilité infections triplée ! Mesures concrètes : PRIORITÉ numéro 1 : Augmenter sommeil à 7-8h (non négociable !), horaires sommeil fixes même week-ends, optimiser environnement sommeil (sombre, frais 16-18°C, calme), pas d'écran 2h avant sommeil, avec suspicion apnée du sommeil (ronflement + fatigue diurne) : laboratoire sommeil ! Sommeil n'est pas temps perdu – c'est phase régénération la plus importante. Chaque heure sous 7h coûte temps de vie."
      },
      poor: {
        de: "ALARMIEREND! Chronischer Schlafmangel (<5h) erhöht Herzinfarkt-Risiko um 48%, Diabetes-Risiko um 33%. Schlafapnoe möglich - Arzt konsultieren!",
        en: "ALARMING! Chronic sleep deprivation (<5h) increases heart attack risk by 48%, diabetes risk by 33%. Sleep apnea possible - consult doctor!",
        es: "¡ALARMANTE! Privación crónica del sueño (<5h) aumenta riesgo de infarto en 48%, riesgo de diabetes en 33%. Apnea del sueño posible - ¡consulta médico!"
      }
    },
    
    mental: {
      excellent: {
        de: "Stark! Deine psychische Gesundheit ist stabil. Keine Depression oder Angststörung. Das schützt auch dein körperliches Wohlbefinden.",
        en: "Strong! Your mental health is stable. No depression or anxiety disorder. This also protects your physical wellbeing.",
        es: "¡Fuerte! Tu salud mental es estable. Sin depresión o trastorno de ansiedad. Esto también protege tu bienestar físico."
      },
      good: {
        de: "Weitgehend stabil. Leichte Stimmungsschwankungen sind normal, aber achte auf Warnsignale und pflege präventiv deine mentale Gesundheit.",
        en: "Largely stable. Mild mood swings are normal, but watch for warning signs and proactively maintain your mental health.",
        es: "Mayormente estable. Cambios de humor leves son normales, pero observa señales de advertencia y mantén proactivamente tu salud mental."
      },
      neutral: {
        de: "Stabile Psyche mit Achtsamkeit empfohlen. Deine mentale Gesundheit zeigt einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du hast keine akuten psychischen Erkrankungen, aber gelegentliche Belastungen (leichte Ängste, Stimmungsschwankungen, Überforderung). Psychische und körperliche Gesundheit sind untrennbar – Depression verdoppelt Herzinfarkt-Risiko, Angststörungen erhöhen Schlaganfall-Risiko um 60%. Optimiere durch: Professionelle Unterstützung bei Bedarf (Therapie ist Stärke, nicht Schwäche!), soziale Verbindungen pflegen (siehe Social), Sinn und Zweck kultivieren (Ehrenamt, Hobbys, Lernen), körperliche Aktivität (Sport = Antidepressivum!), Achtsamkeitspraxis, Schlafhygiene. Frühe Intervention ist entscheidend – leichte Symptome heute können schwere Erkrankungen morgen verhindern. Mental Health ist genauso wichtig wie Blutdruck – ignoriere Warnsignale nicht.",
        en: "Stable psyche with mindfulness recommended. Your mental health shows a slight protective effect. A score of 50-59/100 means: You have no acute mental illnesses, but occasional stresses (mild anxiety, mood swings, overwhelm). Mental and physical health are inseparable – depression doubles heart attack risk, anxiety disorders increase stroke risk by 60%. Optimize through: Professional support when needed (therapy is strength, not weakness!), maintain social connections (see Social), cultivate meaning and purpose (volunteering, hobbies, learning), physical activity (exercise = antidepressant!), mindfulness practice, sleep hygiene. Early intervention is crucial – mild symptoms today can prevent severe illnesses tomorrow. Mental health is as important as blood pressure – don't ignore warning signs.",
        es: "Psique estable con atención plena recomendada. Tu salud mental muestra un ligero efecto protector. Una puntuación de 50-59/100 significa: No tienes enfermedades mentales agudas, pero tensiones ocasionales (ansiedad leve, cambios de humor, agobio). Salud mental y física son inseparables – depresión duplica riesgo de infarto, trastornos ansiedad aumentan riesgo de accidente cerebrovascular en 60%. Optimiza mediante: Apoyo profesional cuando sea necesario (¡terapia es fortaleza, no debilidad!), mantener conexiones sociales (ver Social), cultivar significado y propósito (voluntariado, hobbies, aprendizaje), actividad física (¡ejercicio = antidepresivo!), práctica mindfulness, higiene del sueño. Intervención temprana es crucial – síntomas leves hoy pueden prevenir enfermedades graves mañana. Salud mental es tan importante como presión arterial – no ignores señales de advertencia.",
        fr: "Psyché stable avec pleine conscience recommandée. Votre santé mentale montre un léger effet protecteur. Un score de 50-59/100 signifie : Vous n'avez pas de maladies mentales aiguës, mais tensions occasionnelles (anxiété légère, sautes d'humeur, surcharge). Santé mentale et physique sont inséparables – dépression double risque d'infarctus, troubles anxieux augmentent risque d'AVC de 60%. Optimisez par : Soutien professionnel si besoin (thérapie est force, pas faiblesse !), maintenir connexions sociales (voir Social), cultiver sens et but (bénévolat, hobbies, apprentissage), activité physique (exercice = antidépresseur !), pratique pleine conscience, hygiène du sommeil. Intervention précoce est cruciale – symptômes légers aujourd'hui peuvent prévenir maladies graves demain. Santé mentale est aussi importante que tension artérielle – n'ignorez pas signaux d'alerte."
      },
      moderate: {
        de: "Psychische Belastung – Professionelle Hilfe empfohlen. Du zeigst Symptome von Depression, Angststörungen, oder anderen psychischen Belastungen. Ein Score von 35-49/100 bedeutet: Du befindest dich im klinisch relevanten Bereich – das ist keine 'schlechte Phase', sondern behandlungsbedürftig. Depression verdoppelt Herzinfarkt-Risiko, Angststörungen erhöhen Schlaganfall-Risiko um 60%, chronische mentale Belastung beschleunigt kognitiven Abbau um 50%. Psychische Erkrankungen sind körperliche Erkrankungen – Neurotransmitter, Entzündungen, Stresshormone sind messbar verändert. Konkrete Maßnahmen: DRINGEND: Professionelle Hilfe suchen (Therapeut, Psychiater – keine Schande!), bei Suizidgedanken: Sofort Krisendienst/Notarzt, Medikamente bei Bedarf akzeptieren (sie retten Leben!), soziale Isolation durchbrechen, Sport als Co-Therapie (wirkt wie Antidepressivum). Mental Health ist genauso wichtig wie Blutdruck – ignoriere Warnsignale nicht. Du bist nicht schwach, du bist krank. Heilung ist möglich.",
        en: "Mental distress – professional help recommended. You show symptoms of depression, anxiety disorders, or other mental burdens. A score of 35-49/100 means: You're in clinically relevant range – this is not a 'bad phase' but requires treatment. Depression doubles heart attack risk, anxiety disorders increase stroke risk by 60%, chronic mental burden accelerates cognitive decline by 50%. Mental illnesses are physical illnesses – neurotransmitters, inflammation, stress hormones are measurably altered. Concrete measures: URGENT: Seek professional help (therapist, psychiatrist – no shame!), with suicidal thoughts: Immediately crisis service/emergency doctor, accept medications if needed (they save lives!), break social isolation, exercise as co-therapy (works like antidepressant). Mental health is as important as blood pressure – don't ignore warning signs. You're not weak, you're ill. Healing is possible.",
        es: "Angustia mental – ayuda profesional recomendada. Muestras síntomas de depresión, trastornos de ansiedad, u otras cargas mentales. Una puntuación de 35-49/100 significa: Estás en rango clínicamente relevante – esto no es una 'fase mala' sino que requiere tratamiento. Depresión duplica riesgo de infarto, trastornos de ansiedad aumentan riesgo de accidente cerebrovascular en 60%, carga mental crónica acelera declive cognitivo en 50%. Enfermedades mentales son enfermedades físicas – neurotransmisores, inflamación, hormonas del estrés están mensurablemente alterados. Medidas concretas: URGENTE: Buscar ayuda profesional (terapeuta, psiquiatra – ¡sin vergüenza!), con pensamientos suicidas: Inmediatamente servicio crisis/médico emergencia, aceptar medicamentos si es necesario (¡salvan vidas!), romper aislamiento social, ejercicio como co-terapia (funciona como antidepresivo). Salud mental es tan importante como presión arterial – no ignores señales de advertencia. No eres débil, estás enfermo. Curación es posible.",
        fr: "Détresse mentale – aide professionnelle recommandée. Vous montrez symptômes de dépression, troubles anxieux, ou autres charges mentales. Un score de 35-49/100 signifie : Vous êtes dans plage cliniquement pertinente – ce n'est pas une 'mauvaise phase' mais nécessite traitement. Dépression double risque infarctus, troubles anxieux augmentent risque AVC de 60%, charge mentale chronique accélère déclin cognitif de 50%. Maladies mentales sont maladies physiques – neurotransmetteurs, inflammation, hormones stress sont altérés de manière mesurable. Mesures concrètes : URGENT : Chercher aide professionnelle (thérapeute, psychiatre – pas de honte !), avec pensées suicidaires : Immédiatement service crise/médecin urgence, accepter médicaments si nécessaire (ils sauvent vies !), briser isolement social, exercice comme co-thérapie (fonctionne comme antidépresseur). Santé mentale est aussi importante que tension artérielle – n'ignorez pas signaux alerte. Vous n'êtes pas faible, vous êtes malade. Guérison est possible."
      },
      poor: {
        de: "ERNST! Schwere Depression oder Angststörung. Das verdoppelt kardiovaskuläres Risiko und erhöht Mortalität um 50%. THERAPEUTISCHE HILFE SUCHEN!",
        en: "SERIOUS! Severe depression or anxiety disorder. This doubles cardiovascular risk and increases mortality by 50%. SEEK THERAPEUTIC HELP!",
        es: "¡SERIO! Depresión severa o trastorno de ansiedad. Esto duplica riesgo cardiovascular y aumenta mortalidad en 50%. ¡BUSCA AYUDA TERAPÉUTICA!"
      }
    },
    
    social: {
      excellent: {
        de: "Fantastisch! Du hast starke soziale Bindungen. Das ist genauso schützend wie Nicht-Rauchen und verlängert dein Leben um Jahre!",
        en: "Fantastic! You have strong social bonds. This is as protective as not smoking and extends your life by years!",
        es: "¡Fantástico! Tienes vínculos sociales fuertes. ¡Esto es tan protector como no fumar y extiende tu vida años!"
      },
      good: {
        de: "Solide. Du hast soziale Kontakte, könntest aber Qualität oder Häufigkeit noch steigern. Tiefe Bindungen schützen mehr als viele oberflächliche.",
        en: "Solid. You have social contacts, but could increase quality or frequency. Deep bonds protect more than many superficial ones.",
        es: "Sólido. Tienes contactos sociales, pero podrías aumentar calidad o frecuencia. Vínculos profundos protegen más que muchos superficiales."
      },
      neutral: {
        de: "Solides soziales Netz mit Ausbau-Potenzial. Deine sozialen Verbindungen zeigen bereits einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du hast regelmäßigen Kontakt zu Familie/Freunden, aber könntest die Qualität oder Häufigkeit steigern. Soziale Isolation ist so schädlich wie 15 Zigaretten/Tag – die Harvard Adult Development Study (85 Jahre Laufzeit!) zeigt: Beziehungsqualität ist der stärkste Prädiktor für Gesundheit und Glück im Alter. Optimiere durch: Mindestens 1-2 tiefe Gespräche pro Woche (nicht nur Small Talk), gemeinsame Aktivitäten (Sport, Hobbys, Ehrenamt), Qualität vor Quantität (3 enge Freunde besser als 30 Bekannte), echte Präsenz (kein Handy beim Treffen!). Starke soziale Bindungen reduzieren: Sterberisiko (-50%), Demenz (-40%), Depression (-70%), Herzerkrankungen (-30%). Menschen mit starken Bindungen leben durchschnittlich 7 Jahre länger.",
        en: "Solid social network with expansion potential. Your social connections already show a slight protective effect. A score of 50-59/100 means: You have regular contact with family/friends, but could increase quality or frequency. Social isolation is as harmful as 15 cigarettes/day – the Harvard Adult Development Study (85 years duration!) shows: relationship quality is the strongest predictor of health and happiness in old age. Optimize through: At least 1-2 deep conversations per week (not just small talk), shared activities (sports, hobbies, volunteering), quality over quantity (3 close friends better than 30 acquaintances), genuine presence (no phone during meetings!). Strong social bonds reduce: mortality risk (-50%), dementia (-40%), depression (-70%), heart disease (-30%). People with strong bonds live on average 7 years longer.",
        es: "Red social sólida con potencial de expansión. Tus conexiones sociales ya muestran un ligero efecto protector. Una puntuación de 50-59/100 significa: Tienes contacto regular con familia/amigos, pero podrías aumentar calidad o frecuencia. El aislamiento social es tan dañino como 15 cigarrillos/día – el Harvard Adult Development Study (¡85 años de duración!) muestra: la calidad de relaciones es el predictor más fuerte de salud y felicidad en vejez. Optimiza mediante: Al menos 1-2 conversaciones profundas por semana (no solo charla superficial), actividades compartidas (deportes, hobbies, voluntariado), calidad sobre cantidad (3 amigos cercanos mejor que 30 conocidos), presencia genuina (¡sin teléfono durante encuentros!). Vínculos sociales fuertes reducen: riesgo de mortalidad (-50%), demencia (-40%), depresión (-70%), enfermedad cardíaca (-30%). Personas con vínculos fuertes viven en promedio 7 años más.",
        fr: "Réseau social solide avec potentiel d'expansion. Vos connexions sociales montrent déjà un léger effet protecteur. Un score de 50-59/100 signifie : Vous avez un contact régulier avec famille/amis, mais pourriez augmenter qualité ou fréquence. L'isolement social est aussi nocif que 15 cigarettes/jour – l'étude Harvard Adult Development (85 ans de durée !) montre : la qualité des relations est le prédicteur le plus fort de santé et bonheur dans la vieillesse. Optimisez par : Au moins 1-2 conversations profondes par semaine (pas seulement bavardage), activités partagées (sports, hobbies, bénévolat), qualité plutôt que quantité (3 amis proches mieux que 30 connaissances), présence authentique (pas de téléphone pendant rencontres !). Liens sociaux forts réduisent : risque de mortalité (-50%), démence (-40%), dépression (-70%), maladies cardiaques (-30%). Les personnes avec liens forts vivent en moyenne 7 ans de plus."
      },
     moderate: {
        de: "Soziale Isolation – Gesundheitsrisiko! Du hast wenig soziale Kontakte, fühlst dich oft einsam, oder lebst isoliert. Ein Score von 35-49/100 bedeutet: Deine soziale Situation entspricht gesundheitlich dem Rauchen von 15 Zigaretten täglich (Holt-Lunstad Meta-Analyse, 148 Studien). Soziale Isolation erhöht Sterberisiko um 50%, Demenz-Risiko um 64%, Depression-Risiko um 200%, Herzinfarkt um 29%. Einsamkeit ist messbar toxisch – sie erhöht chronische Entzündungen und Cortisol dauerhaft. Konkrete Maßnahmen: AKTIV werden (Isolation löst sich nicht von selbst!), tritt einem Verein/Gruppe bei (Sport, Chor, Ehrenamt), reaktiviere alte Kontakte (ein Anruf reicht zum Start), bei Depression/Angst: professionelle Hilfe (Therapie!), erwäge Umzug wenn Umfeld toxisch. Qualität schlägt Quantität – 2-3 echte Freunde sind wertvoller als 50 Bekannte. Soziale Gesundheit = körperliche Gesundheit. Handle jetzt.",
        en: "Social isolation – health risk! You have few social contacts, often feel lonely, or live isolated. A score of 35-49/100 means: Your social situation health-wise equals smoking 15 cigarettes daily (Holt-Lunstad meta-analysis, 148 studies). Social isolation increases mortality risk by 50%, dementia risk by 64%, depression risk by 200%, heart attack by 29%. Loneliness is measurably toxic – it permanently increases chronic inflammation and cortisol. Concrete measures: Become ACTIVE (isolation doesn't resolve itself!), join club/group (sports, choir, volunteering), reactivate old contacts (one call is enough to start), with depression/anxiety: professional help (therapy!), consider moving if environment is toxic. Quality beats quantity – 2-3 real friends are more valuable than 50 acquaintances. Social health = physical health. Act now.",
        es: "Aislamiento social – ¡riesgo para la salud! Tienes pocos contactos sociales, a menudo te sientes solo, o vives aislado. Una puntuación de 35-49/100 significa: Tu situación social en términos de salud equivale a fumar 15 cigarrillos diarios (metaanálisis Holt-Lunstad, 148 estudios). Aislamiento social aumenta riesgo de mortalidad en 50%, riesgo de demencia en 64%, riesgo de depresión en 200%, infarto en 29%. Soledad es mensurablemente tóxica – aumenta permanentemente inflamación crónica y cortisol. Medidas concretas: Vuélvete ACTIVO (¡aislamiento no se resuelve solo!), únete a club/grupo (deportes, coro, voluntariado), reactiva contactos antiguos (una llamada es suficiente para empezar), con depresión/ansiedad: ayuda profesional (¡terapia!), considera mudarte si entorno es tóxico. Calidad supera cantidad – 2-3 amigos reales son más valiosos que 50 conocidos. Salud social = salud física. Actúa ahora.",
        fr: "Isolement social – risque santé ! Vous avez peu de contacts sociaux, vous sentez souvent seul, ou vivez isolé. Un score de 35-49/100 signifie : Votre situation sociale équivaut en termes de santé à fumer 15 cigarettes quotidiennement (méta-analyse Holt-Lunstad, 148 études). Isolement social augmente risque mortalité de 50%, risque démence de 64%, risque dépression de 200%, infarctus de 29%. Solitude est toxique de manière mesurable – elle augmente inflammation chronique et cortisol de façon permanente. Mesures concrètes : Devenez ACTIF (isolement ne se résout pas seul !), rejoignez club/groupe (sports, chorale, bénévolat), réactivez anciens contacts (un appel suffit pour commencer), avec dépression/anxiété : aide professionnelle (thérapie !), considérez déménagement si environnement toxique. Qualité bat quantité – 2-3 vrais amis sont plus précieux que 50 connaissances. Santé sociale = santé physique. Agissez maintenant."
      },
      poor: {
        de: "ISOLATION! Schwere soziale Isolation erhöht Mortalität um 50%, Demenz-Risiko um 60%. Depression und Immunschwäche folgen. HILFE SUCHEN!",
        en: "ISOLATION! Severe social isolation increases mortality by 50%, dementia risk by 60%. Depression and immune weakness follow. SEEK HELP!",
        es: "¡AISLAMIENTO! Aislamiento social severo aumenta mortalidad en 50%, riesgo de demencia en 60%. Depresión y debilidad inmune siguen. ¡BUSCA AYUDA!"
      }
    },
    
    stress: {
      excellent: {
        de: "Ausgeglichen! Du managst Stress gut und hast ausreichend Erholung. Das schützt Herz, Immunsystem und Gehirn.",
        en: "Balanced! You manage stress well and have sufficient recovery. This protects heart, immune system and brain.",
        es: "¡Equilibrado! Manejas bien el estrés y tienes suficiente recuperación. Esto protege corazón, sistema inmunológico y cerebro."
      },
      good: {
        de: "Ganz gut. Gelegentlicher Stress ist normal, aber achte auf Erholungsphasen. Chronischer Stress ohne Pausen wird schädlich.",
        en: "Quite good. Occasional stress is normal, but pay attention to recovery phases. Chronic stress without breaks becomes harmful.",
        es: "Bastante bien. Estrés ocasional es normal, pero presta atención a fases de recuperación. Estrés crónico sin pausas se vuelve dañino."
      },
      neutral: {
        de: "Handhabbarer Stress mit Optimierungspotenzial. Dein Stressmanagement zeigt einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du hast gelegentlich stressige Phasen, kannst aber grundsätzlich damit umgehen. Chronischer Stress ist nicht 'im Kopf' – er erhöht Cortisol dauerhaft, was Entzündungen fördert, Immunsystem schwächt, Telomere verkürzt (zelluläre Alterung!). Optimiere durch: TÄGLICHE Erholungsmomente (nicht erst Urlaub!), bewährte Techniken: Meditation 10-20 Min (senkt Cortisol um 25%), Atemübungen (4-7-8 Technik), Natur-Aufenthalt 2h/Woche (messbare Stressreduktion), soziale Unterstützung aktivieren, Grenzen setzen (Nein-Sagen lernen). Chronischer Stress erhöht Risiko: Herzkrankheiten (+40%), Schlaganfall (+50%), Diabetes (+45%), Demenz (+60%), Depression. Stressmanagement ist keine 'Wellness' – es ist medizinische Notwendigkeit.",
        en: "Manageable stress with optimization potential. Your stress management shows a slight protective effect. A score of 50-59/100 means: You have occasional stressful phases, but can basically cope. Chronic stress is not 'in your head' – it permanently elevates cortisol, promoting inflammation, weakening immune system, shortening telomeres (cellular aging!). Optimize through: DAILY recovery moments (not just vacation!), proven techniques: meditation 10-20 min (reduces cortisol by 25%), breathing exercises (4-7-8 technique), nature exposure 2h/week (measurable stress reduction), activate social support, set boundaries (learn to say no). Chronic stress increases risk: heart disease (+40%), stroke (+50%), diabetes (+45%), dementia (+60%), depression. Stress management is not 'wellness' – it's medical necessity.",
        es: "Estrés manejable con potencial de optimización. Tu manejo del estrés muestra un ligero efecto protector. Una puntuación de 50-59/100 significa: Tienes fases estresantes ocasionales, pero puedes básicamente afrontarlas. El estrés crónico no está 'en tu cabeza' – eleva cortisol permanentemente, promoviendo inflamación, debilitando sistema inmune, acortando telómeros (¡envejecimiento celular!). Optimiza mediante: Momentos de recuperación DIARIOS (¡no solo vacaciones!), técnicas probadas: meditación 10-20 min (reduce cortisol en 25%), ejercicios respiración (técnica 4-7-8), exposición naturaleza 2h/semana (reducción estrés medible), activar apoyo social, establecer límites (aprender a decir no). Estrés crónico aumenta riesgo: enfermedad cardíaca (+40%), accidente cerebrovascular (+50%), diabetes (+45%), demencia (+60%), depresión. Manejo del estrés no es 'bienestar' – es necesidad médica.",
        fr: "Stress gérable avec potentiel d'optimisation. Votre gestion du stress montre un léger effet protecteur. Un score de 50-59/100 signifie : Vous avez des phases stressantes occasionnelles, mais pouvez fondamentalement faire face. Le stress chronique n'est pas 'dans votre tête' – il élève le cortisol de façon permanente, favorisant l'inflammation, affaiblissant le système immunitaire, raccourcissant les télomères (vieillissement cellulaire !). Optimisez par : Moments de récupération QUOTIDIENS (pas seulement vacances !), techniques éprouvées : méditation 10-20 min (réduit cortisol de 25%), exercices de respiration (technique 4-7-8), exposition nature 2h/semaine (réduction stress mesurable), activer soutien social, poser limites (apprendre à dire non). Stress chronique augmente risque : maladies cardiaques (+40%), AVC (+50%), diabète (+45%), démence (+60%), dépression. Gestion du stress n'est pas du 'bien-être' – c'est une nécessité médicale."
      },
      moderate: {
        de: "Chronischer Stress – Körper unter Dauerlast. Du bist häufig gestresst, überfordert, oder hast keine Erholungsphasen. Ein Score von 35-49/100 bedeutet: Dein Cortisol-Level ist dauerhaft erhöht, was systematisch Schaden anrichtet. Chronischer Stress erhöht Herzinfarkt-Risiko um 40% (Whitehall II Study), Schlaganfall um 50%, beschleunigt Telomer-Verkürzung (zelluläre Alterung um 9-17 Jahre!), schwächt Immunsystem dauerhaft. Stress ist kein 'Luxusproblem' – es ist medizinische Krise. Konkrete Maßnahmen: NOTWENDIG, nicht optional: Tägliche Entspannung (10-20 Min Meditation, Atemübungen), Prioritäten setzen (Nein-Sagen lernen!), bei Überlastung: Arbeitszeit reduzieren oder Job wechseln (Gesundheit > Geld), professionelle Hilfe bei Burnout-Gefahr, Sport als Stress-Ventil (nicht als weiterer Stressor). Bei Panikattacken, Schlafstörungen, körperlichen Symptomen: Sofort zum Arzt! Chronischer Stress killt – buchstäblich. Handle jetzt oder zahle später.",
        en: "Chronic stress – body under constant load. You're frequently stressed, overwhelmed, or have no recovery phases. A score of 35-49/100 means: Your cortisol level is permanently elevated, causing systematic damage. Chronic stress increases heart attack risk by 40% (Whitehall II Study), stroke by 50%, accelerates telomere shortening (cellular aging by 9-17 years!), permanently weakens immune system. Stress is not a 'luxury problem' – it's medical crisis. Concrete measures: NECESSARY, not optional: Daily relaxation (10-20 min meditation, breathing exercises), set priorities (learn to say no!), with overload: reduce work hours or change job (health > money), professional help with burnout risk, exercise as stress valve (not as additional stressor). With panic attacks, sleep disorders, physical symptoms: See doctor immediately! Chronic stress kills – literally. Act now or pay later.",
        es: "Estrés crónico – cuerpo bajo carga constante. Estás frecuentemente estresado, agobiado, o no tienes fases de recuperación. Una puntuación de 35-49/100 significa: Tu nivel de cortisol está permanentemente elevado, causando daño sistemático. Estrés crónico aumenta riesgo de infarto en 40% (estudio Whitehall II), accidente cerebrovascular en 50%, acelera acortamiento de telómeros (¡envejecimiento celular en 9-17 años!), debilita permanentemente sistema inmune. Estrés no es 'problema de lujo' – es crisis médica. Medidas concretas: NECESARIO, no opcional: Relajación diaria (10-20 min meditación, ejercicios respiración), establecer prioridades (¡aprende a decir no!), con sobrecarga: reducir horas trabajo o cambiar empleo (salud > dinero), ayuda profesional con riesgo burnout, ejercicio como válvula de estrés (no como estresor adicional). Con ataques de pánico, trastornos de sueño, síntomas físicos: ¡Ver médico inmediatamente! Estrés crónico mata – literalmente. Actúa ahora o paga después.",
        fr: "Stress chronique – corps sous charge constante. Vous êtes fréquemment stressé, débordé, ou n'avez pas de phases récupération. Un score de 35-49/100 signifie : Votre niveau cortisol est élevé de façon permanente, causant dommages systématiques. Stress chronique augmente risque infarctus de 40% (étude Whitehall II), AVC de 50%, accélère raccourcissement télomères (vieillissement cellulaire de 9-17 ans !), affaiblit système immunitaire de façon permanente. Stress n'est pas 'problème de luxe' – c'est crise médicale. Mesures concrètes : NÉCESSAIRE, pas optionnel : Relaxation quotidienne (10-20 min méditation, exercices respiration), fixer priorités (apprenez à dire non !), avec surcharge : réduire heures travail ou changer emploi (santé > argent), aide professionnelle avec risque burnout, exercice comme soupape stress (pas comme stresseur additionnel). Avec attaques panique, troubles sommeil, symptômes physiques : Voir médecin immédiatement ! Stress chronique tue – littéralement. Agissez maintenant ou payez plus tard."
      },
      poor: {
        de: "BURNOUT-GEFAHR! Extremer Dauerstress erhöht Herzinfarkt-Risiko um 60% (Whitehall II Study). Psychosomatische Erkrankungen drohen. SOFORT GEGENSTEUERN!",
        en: "BURNOUT DANGER! Extreme chronic stress increases heart attack risk by 60% (Whitehall II Study). Psychosomatic illnesses threaten. TAKE IMMEDIATE ACTION!",
        es: "¡PELIGRO DE BURNOUT! Estrés crónico extremo aumenta riesgo de infarto en 60% (Whitehall II Study). Enfermedades psicosomáticas amenazan. ¡TOMA ACCIÓN INMEDIATA!"
      }
    },
    
    frailty: {
      excellent: {
        de: "Robust! Du bist vollständig selbstständig und funktionell fit. Keine ADL/IADL-Einschränkungen. Das ist der beste Prädiktor für Langlebigkeit im Alter.",
        en: "Robust! You're completely independent and functionally fit. No ADL/IADL limitations. This is the best predictor for longevity in old age.",
        es: "¡Robusto! Eres completamente independiente y funcionalmente apto. Sin limitaciones de AVD/AIVD. Este es el mejor predictor de longevidad en la vejez."
      },
      good: {
        de: "Weitgehend fit. Kleinere funktionelle Einschränkungen, aber im Wesentlichen selbstständig. Präventive Maßnahmen können Verschlechterung verhindern.",
        en: "Largely fit. Minor functional limitations, but essentially independent. Preventive measures can prevent deterioration.",
        es: "Mayormente apto. Limitaciones funcionales menores, pero esencialmente independiente. Medidas preventivas pueden prevenir deterioro."
      },
      neutral: {
        de: "Grundsätzlich selbstständig mit leichten Einschränkungen. Du bist funktionell weitgehend fit und zeigst einen leichten Schutzeffekt. Ein Score von 50-59/100 bedeutet: Du hast keine schwere Gebrechlichkeit (Frailty), aber erste Warnsignale (gelegentliche Gleichgewichtsprobleme, leichte Kraftabnahme, oder seltene Stürze). Frailty ist KEIN unvermeidliches Altern – es ist präventierbar und reversibel! Die Fried Frailty Criteria (5 Punkte: Gewichtsverlust, Erschöpfung, geringe Aktivität, langsames Gehen, schwacher Griff) sind der Goldstandard. Optimiere durch: KRAFTTRAINING 2-3x/Woche (absolut kritisch ab 50!), Proteinzufuhr 1.0-1.2g/kg Körpergewicht täglich (Muskelerhalt), Gleichgewichtsübungen (Einbeinstand, Tai Chi), Vitamin D optimieren (Ziel >30ng/ml, Sturz-Prävention), soziale Aktivität (Isolation fördert Frailty). Frailty erhöht Sturz-Risiko um 300%, Hospitalisierung um 200%, Mortalität um 150%. Jede Kraftübung zählt – Muskelaufbau ist in jedem Alter möglich!",
        en: "Basically independent with minor limitations. You're functionally largely fit and show a slight protective effect. A score of 50-59/100 means: You don't have severe frailty, but initial warning signs (occasional balance problems, mild strength decline, or rare falls). Frailty is NOT inevitable aging – it's preventable and reversible! The Fried Frailty Criteria (5 points: weight loss, exhaustion, low activity, slow walking, weak grip) are the gold standard. Optimize through: STRENGTH TRAINING 2-3x/week (absolutely critical after 50!), protein intake 1.0-1.2g/kg body weight daily (muscle preservation), balance exercises (single-leg stand, Tai Chi), optimize Vitamin D (target >30ng/ml, fall prevention), social activity (isolation promotes frailty). Frailty increases fall risk by 300%, hospitalization by 200%, mortality by 150%. Every strength exercise counts – muscle building is possible at any age!",
        es: "Básicamente independiente con limitaciones menores. Estás funcionalmente en gran medida apto y muestras un ligero efecto protector. Una puntuación de 50-59/100 significa: No tienes fragilidad severa, pero señales de advertencia iniciales (problemas de equilibrio ocasionales, disminución leve de fuerza, o caídas raras). ¡La fragilidad NO es envejecimiento inevitable – es prevenible y reversible! Los Criterios de Fragilidad de Fried (5 puntos: pérdida de peso, agotamiento, baja actividad, caminar lento, agarre débil) son el estándar de oro. Optimiza mediante: ENTRENAMIENTO DE FUERZA 2-3x/semana (¡absolutamente crítico después de 50!), ingesta de proteína 1.0-1.2g/kg peso corporal diariamente (preservación muscular), ejercicios de equilibrio (parado en una pierna, Tai Chi), optimizar Vitamina D (objetivo >30ng/ml, prevención de caídas), actividad social (aislamiento promueve fragilidad). Fragilidad aumenta riesgo de caídas en 300%, hospitalización en 200%, mortalidad en 150%. ¡Cada ejercicio de fuerza cuenta – desarrollo muscular es posible a cualquier edad!",
        fr: "Fondamentalement indépendant avec limitations mineures. Vous êtes fonctionnellement largement en forme et montrez un léger effet protecteur. Un score de 50-59/100 signifie : Vous n'avez pas de fragilité sévère, mais signaux d'alerte initiaux (problèmes d'équilibre occasionnels, déclin léger de force, ou chutes rares). La fragilité N'EST PAS un vieillissement inévitable – elle est évitable et réversible ! Les Critères de Fragilité de Fried (5 points : perte de poids, épuisement, faible activité, marche lente, prise faible) sont le standard d'or. Optimisez par : ENTRAÎNEMENT DE FORCE 2-3x/semaine (absolument critique après 50 !), apport protéique 1.0-1.2g/kg poids corporel quotidiennement (préservation musculaire), exercices d'équilibre (debout sur une jambe, Tai Chi), optimiser Vitamine D (objectif >30ng/ml, prévention chutes), activité sociale (isolement favorise fragilité). Fragilité augmente risque de chute de 300%, hospitalisation de 200%, mortalité de 150%. Chaque exercice de force compte – développement musculaire est possible à tout âge !"
      },
      moderate: {
        de: "Frailty (Gebrechlichkeit) erkennbar – Gegensteuern notwendig. Du zeigst mehrere Frailty-Kriterien: Mobilitätsprobleme, Stürze, Kraftverlust, oder ADL-Einschränkungen (Aktivitäten des täglichen Lebens). Ein Score von 35-49/100 bedeutet: Du erfüllst 2-3 der Fried Frailty Criteria (Gewichtsverlust, Erschöpfung, geringe Aktivität, langsames Gehen, schwacher Griff). Frailty ist NICHT normales Altern – es ist reversibler Zustand! Frailty erhöht Sturz-Risiko um 300%, Hospitalisierung um 200%, 5-Jahres-Mortalität um 150%. Aber: Intervention funktioniert noch! Konkrete Maßnahmen: SOFORT Krafttraining starten (2-3x/Woche, auch mit 80+ wirksam!), Protein erhöhen auf 1.2-1.5g/kg täglich (Muskeln brauchen Material), Vitamin D checken (Ziel >30ng/ml, Sturz-Prävention), Gleichgewichtstraining (Tai Chi, Physiotherapie), soziale Aktivierung. Bei Stürzen >1x/Jahr: Sturzambulanz! Geriatrische Betreuung bei mehreren ADL-Einschränkungen. Frailty ist keine Einbahnstraße – handle jetzt!",
        en: "Frailty recognizable – counteraction necessary. You show multiple frailty criteria: mobility problems, falls, strength loss, or ADL limitations (activities of daily living). A score of 35-49/100 means: You meet 2-3 of the Fried Frailty Criteria (weight loss, exhaustion, low activity, slow walking, weak grip). Frailty is NOT normal aging – it's reversible condition! Frailty increases fall risk by 300%, hospitalization by 200%, 5-year mortality by 150%. But: Intervention still works! Concrete measures: START strength training immediately (2-3x/week, effective even at 80+!), increase protein to 1.2-1.5g/kg daily (muscles need material), check Vitamin D (target >30ng/ml, fall prevention), balance training (Tai Chi, physiotherapy), social activation. With falls >1x/year: fall clinic! Geriatric care with multiple ADL limitations. Frailty is not one-way street – act now!",
        es: "Fragilidad reconocible – contramedidas necesarias. Muestras múltiples criterios de fragilidad: problemas de movilidad, caídas, pérdida de fuerza, o limitaciones AVD (actividades de vida diaria). Una puntuación de 35-49/100 significa: Cumples 2-3 de los Criterios de Fragilidad de Fried (pérdida de peso, agotamiento, baja actividad, caminar lento, agarre débil). ¡Fragilidad NO es envejecimiento normal – es condición reversible! Fragilidad aumenta riesgo de caídas en 300%, hospitalización en 200%, mortalidad a 5 años en 150%. Pero: ¡Intervención aún funciona! Medidas concretas: COMENZAR entrenamiento de fuerza inmediatamente (2-3x/semana, ¡efectivo incluso a 80+!), aumentar proteína a 1.2-1.5g/kg diariamente (músculos necesitan material), verificar Vitamina D (objetivo >30ng/ml, prevención caídas), entrenamiento equilibrio (Tai Chi, fisioterapia), activación social. Con caídas >1x/año: ¡clínica de caídas! Atención geriátrica con múltiples limitaciones AVD. Fragilidad no es calle de un solo sentido – ¡actúa ahora!",
        fr: "Fragilité reconnaissable – contre-mesures nécessaires. Vous montrez multiples critères de fragilité : problèmes mobilité, chutes, perte force, ou limitations AVQ (activités vie quotidienne). Un score de 35-49/100 signifie : Vous remplissez 2-3 des Critères de Fragilité de Fried (perte poids, épuisement, faible activité, marche lente, prise faible). Fragilité N'EST PAS vieillissement normal – c'est condition réversible ! Fragilité augmente risque chute de 300%, hospitalisation de 200%, mortalité 5 ans de 150%. Mais : Intervention fonctionne encore ! Mesures concrètes : COMMENCER entraînement force immédiatement (2-3x/semaine, efficace même à 80+ !), augmenter protéine à 1.2-1.5g/kg quotidiennement (muscles ont besoin matériau), vérifier Vitamine D (objectif >30ng/ml, prévention chute), entraînement équilibre (Tai Chi, physiothérapie), activation sociale. Avec chutes >1x/an : clinique chutes ! Soins gériatriques avec multiples limitations AVQ. Fragilité n'est pas rue à sens unique – agissez maintenant !"
      },
      poor: {
        de: "SEVERE FRAILTY! Schwere funktionelle Einschränkungen, Stürze, Abhängigkeit bei ADL. 5-Jahres-Mortalität extrem erhöht. Geriatrische Betreuung notwendig!",
        en: "SEVERE FRAILTY! Severe functional limitations, falls, dependency in ADL. 5-year mortality extremely increased. Geriatric care necessary!",
        es: "¡FRAGILIDAD SEVERA! Limitaciones funcionales severas, caídas, dependencia en AVD. Mortalidad a 5 años extremadamente aumentada. ¡Atención geriátrica necesaria!"
      }
    }
    
    // NOTE: Weitere Faktoren können bei Bedarf hinzugefügt werden:
    // fitness, sleep, mental_health, social, stress, pulmonary, renal, cancer, etc.
  }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Hole Text für aktuellen Sprachcode
 */
export function getText(path, lang = 'de', replacements = {}) {
  const keys = path.split('.');
  let text = UI_TEXTS;
  
  for (const key of keys) {
    text = text[key];
    if (!text) return path; // Fallback: return path if not found
  }
  
  // Hole Übersetzung für Sprache
  const translated = text[lang] || text.de || text;
  
  // Ersetze Platzhalter
  if (typeof translated === 'string') {
    return translated.replace(/\{(\w+)\}/g, (match, key) => {
      return replacements[key] !== undefined ? replacements[key] : match;
    });
  }
  
  return translated;
}

/**
 * Validiere ob Sprache unterstützt wird
 */
export function isValidLanguage(lang) {
  return ['de', 'en', 'es', 'fr'].includes(lang);
}

/**
 * Hole aktuell eingestellte Sprache
 */
export function getCurrentLanguage() {
  return localStorage.getItem('dr_livelong_lang') || 
         navigator.language.split('-')[0] || 
         'de';
}

/**
 * Setze Sprache
 */
export function setLanguage(lang) {
  if (!isValidLanguage(lang)) return false;
  localStorage.setItem('dr_livelong_lang', lang);
  return true;
}

// ========================================
// EXPORT
// ========================================
export default UI_TEXTS;