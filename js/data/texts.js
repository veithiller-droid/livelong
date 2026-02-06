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
      de: "PDF herunterladen",
      en: "Download PDF",
      es: "Descargar PDF",
      fr: "Télécharger PDF"
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
// PROFILE PAGE (profile.html)
// ========================================
profile_page: {
  // Overview Cards
  card_age_label: {
    de: 'Alter',
    en: 'Age',
    es: 'Edad',
    fr: 'Âge'
  },
  card_life_expectancy_label: {
    de: 'Lebenserwartung',
    en: 'Life Expectancy',
    es: 'Esperanza de vida',
    fr: 'Espérance de vie'
  },
  card_comparison_label: {
    de: 'Vergleich',
    en: 'Comparison',
    es: 'Comparación',
    fr: 'Comparaison'
  },
  card_percentile_label: {
    de: 'Percentile',
    en: 'Percentile',
    es: 'Percentil',
    fr: 'Percentile'
  },
  card_confidence_label: {
    de: 'Konfidenz',
    en: 'Confidence',
    es: 'Confianza',
    fr: 'Confiance'
  },
  card_remaining_label: {
    de: 'Verbleibend',
    en: 'Remaining',
    es: 'Restante',
    fr: 'Restant'
  },
  years_unit: {
    de: 'Jahre',
    en: 'years',
    es: 'años',
    fr: 'ans'
  },
  top_percentile_prefix: {
    de: 'Top',
    en: 'Top',
    es: 'Top',
    fr: 'Top'
  },
  
  // Detailed Profile
  title: {
    de: "Dein detailliertes Gesundheitsprofil",
    en: "Your detailed health profile",
    es: "Tu perfil de salud detallado",
    fr: "Votre profil de santé détaillé"
  },
  
  subtitle: {
    de: "Analyse aller {count} Faktoren mit konkreten Empfehlungen",
    en: "Analysis of all {count} factors with concrete recommendations",
    es: "Análisis de todos los {count} factores con recomendaciones concretas",
    fr: "Analyse de tous les {count} facteurs avec recommandations concrètes"
  },
  
  summary_title: {
    de: "Zusammenfassung",
    en: "Summary",
    es: "Resumen",
    fr: "Résumé"
  },
  
  your_result: {
    de: "Dein Ergebnis",
    en: "Your result",
    es: "Tu resultado",
    fr: "Votre résultat"
  },
  
  risk_profile: {
    de: "Risiko-Profil",
    en: "Risk Profile",
    es: "Perfil de riesgo",
    fr: "Profil de risque"
  },
  
  risk_profile_labels: {
    low: {
      de: "Geringes Risiko ✅",
      en: "Low Risk ✅",
      es: "Riesgo bajo ✅",
      fr: "Risque faible ✅"
    },
    moderate: {
      de: "Mittleres Risiko ⚠️",
      en: "Moderate Risk ⚠️",
      es: "Riesgo moderado ⚠️",
      fr: "Risque modéré ⚠️"
    },
    high: {
      de: "Hohes Risiko ⚠️",
      en: "High Risk ⚠️",
      es: "Riesgo alto ⚠️",
      fr: "Risque élevé ⚠️"
    },
    very_high: {
      de: "Sehr hohes Risiko ❌",
      en: "Very High Risk ❌",
      es: "Riesgo muy alto ❌",
      fr: "Risque très élevé ❌"
    }
  },
  
  confidence: {
    de: "Konfidenz: {percent}%",
    en: "Confidence: {percent}%",
    es: "Confianza: {percent}%",
    fr: "Confiance : {percent}%"
  },
  
  confidence_explanation: {
    de: "Basierend auf der Vollständigkeit deiner Angaben und der Qualität der Daten",
    en: "Based on the completeness of your information and data quality",
    es: "Basado en la integridad de tu información y la calidad de los datos",
    fr: "Basé sur l'exhaustivité de vos informations et la qualité des données"
  },
  
  factor_breakdown_title: {
    de: "Faktor-Analyse",
    en: "Factor Analysis",
    es: "Análisis de factores",
    fr: "Analyse des facteurs"
  },
  
  cluster_titles: {
    physical_health: {
      de: "Körperliche Gesundheit",
      en: "Physical Health",
      es: "Salud física",
      fr: "Santé physique"
    },
    lifestyle: {
      de: "Lebensstil",
      en: "Lifestyle",
      es: "Estilo de vida",
      fr: "Mode de vie"
    },
    mental_wellbeing: {
      de: "Psychisches Wohlbefinden",
      en: "Mental Wellbeing",
      es: "Bienestar mental",
      fr: "Bien-être mental"
    },
    functional_status: {
      de: "Funktionsfähigkeit",
      en: "Functional Ability",
      es: "Capacidad funcional",
      fr: "Capacité fonctionnelle"
    },
    other: {
      de: "Weitere Faktoren",
      en: "Other Factors",
      es: "Otros factores",
      fr: "Autres facteurs"
    }
  },
  
  score_label: {
    de: "Score: {score}/100",
    en: "Score: {score}/100",
    es: "Puntuación: {score}/100",
    fr: "Score : {score}/100"
  },
  
  impact_label: {
    de: "Einfluss: {years} Jahre",
    en: "Impact: {years} years",
    es: "Impacto: {years} años",
    fr: "Impact : {years} ans"
  },
  
  level_labels: {
    excellent: {
      de: "Ausgezeichnet 🌟",
      en: "Excellent 🌟",
      es: "Excelente 🌟",
      fr: "Excellent 🌟"
    },
    good: {
      de: "Gut ✅",
      en: "Good ✅",
      es: "Bueno ✅",
      fr: "Bon ✅"
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
      es: "Moderado ⚠️",
      fr: "Modéré ⚠️"
    },
    poor: {
      de: "Schlecht ❌",
      en: "Poor ❌",
      es: "Malo ❌",
      fr: "Mauvais ❌"
    }
  },
  
  main_issues: {
    de: "Hauptprobleme",
    en: "Main Issues",
    es: "Problemas principales",
    fr: "Problèmes principaux"
  },
  
  strengths: {
    de: "Stärken",
    en: "Strengths",
    es: "Fortalezas",
    fr: "Forces"
  },
  
  recommendations_title: {
    de: "Deine personalisierten Empfehlungen",
    en: "Your personalized recommendations",
    es: "Tus recomendaciones personalizadas",
    fr: "Vos recommandations personnalisées"
  },
  
  recommendations_subtitle: {
    de: "Priorisiert nach Wichtigkeit und Umsetzbarkeit",
    en: "Prioritized by importance and feasibility",
    es: "Priorizadas por importancia y viabilidad",
    fr: "Priorisées par importance et faisabilité"
  },
  
  priority_label: {
    de: "Priorität {number}",
    en: "Priority {number}",
    es: "Prioridad {number}",
    fr: "Priorité {number}"
  },
  
  potential_gain: {
    de: "Möglicher Gewinn: +{years} Jahre",
    en: "Potential gain: +{years} years",
    es: "Ganancia potencial: +{years} años",
    fr: "Gain potentiel : +{years} ans"
  },
  
  difficulty_labels: {
    easy: {
      de: "Einfach 😊",
      en: "Easy 😊",
      es: "Fácil 😊",
      fr: "Facile 😊"
    },
    moderate: {
      de: "Mittel 🤔",
      en: "Moderate 🤔",
      es: "Moderado 🤔",
      fr: "Modéré 🤔"
    },
    hard: {
      de: "Schwierig 💪",
      en: "Hard 💪",
      es: "Difícil 💪",
      fr: "Difficile 💪"
    },
    very_hard: {
      de: "Sehr schwierig 🏔️",
      en: "Very hard 🏔️",
      es: "Muy difícil 🏔️",
      fr: "Très difficile 🏔️"
    }
  },
  
  timeframe: {
    de: "Zeitrahmen: {time}",
    en: "Timeframe: {time}",
    es: "Plazo: {time}",
    fr: "Délai : {time}"
  },
  
  interactions_title: {
    de: "Erkannte Interaktionen",
    en: "Detected Interactions",
    es: "Interacciones detectadas",
    fr: "Interactions détectées"
  },
  
  interactions_subtitle: {
    de: "Diese Faktoren verstärken sich gegenseitig",
    en: "These factors amplify each other",
    es: "Estos factores se amplifican mutuamente",
    fr: "Ces facteurs s'amplifient mutuellement"
  },
  
  negative_interactions: {
    de: "Negative Synergien",
    en: "Negative Synergies",
    es: "Sinergias negativas",
    fr: "Synergies négatives"
  },
  
  positive_interactions: {
    de: "Positive Synergien",
    en: "Positive Synergies",
    es: "Sinergias positivas",
    fr: "Synergies positives"
  },
  
  interaction_effect: {
    de: "Effekt: ×{multiplier}",
    en: "Effect: ×{multiplier}",
    es: "Efecto: ×{multiplier}",
    fr: "Effet : ×{multiplier}"
  },
  
  next_steps_title: {
    de: "Deine nächsten Schritte",
    en: "Your next steps",
    es: "Tus próximos pasos",
    fr: "Vos prochaines étapes"
  },
  
  download_pdf: {
    de: "Als PDF herunterladen",
    en: "Download as PDF",
    es: "Descargar como PDF",
    fr: "Télécharger en PDF"
  },
  
  open_simulator: {
    de: "What-If-Simulator öffnen",
    en: "Open What-If Simulator",
    es: "Abrir simulador What-If",
    fr: "Ouvrir simulateur What-If"
  },
  
  view_methodology: {
    de: "Methodologie ansehen",
    en: "View methodology",
    es: "Ver metodología",
    fr: "Voir la méthodologie"
  
},
timeframe_label: {
    de: 'Zeitrahmen',
    en: 'Timeframe',
    es: 'Plazo',
    fr: 'Délai'
  },
  factors_count: {
    de: '{count} Faktoren',
    en: '{count} factors',
    es: '{count} factores',
    fr: '{count} facteurs'
  },
  
  average_label: {
    de: 'Durchschnitt',
    en: 'Average',
    es: 'Promedio',
    fr: 'Moyenne'
  },
  
  weakest_label: {
    de: 'Schwächste:',
    en: 'Weakest:',
    es: 'Más débil:',
    fr: 'Plus faible :'
  },
  
  strongest_label: {
    de: 'Stärkste:',
    en: 'Strongest:',
    es: 'Más fuerte:',
    fr: 'Plus fort :'
  },

  action_recommendations_title: {
    de: 'Deine Empfehlungen',
    en: 'Your Recommendations',
    es: 'Tus recomendaciones',
    fr: 'Vos recommandations'
  },
  
  action_recommendations_desc: {
    de: 'Konkrete Schritte für ein längeres Leben',
    en: 'Concrete steps for a longer life',
    es: 'Pasos concretos para una vida más larga',
    fr: 'Étapes concrètes pour une vie plus longue'
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

    impact_years: {
  de: 'Impact: {value} Jahre',
  en: 'Impact: {value} years',
  es: 'Impacto: {value} años',
  fr: 'Impact : {value} ans'
},

possible_gain_years: {
  de: 'Möglicher Gewinn: +{value} Jahre',
  en: 'Possible gain: +{value} years',
  es: 'Ganancia posible: +{value} años',
  fr: 'Gain possible : +{value} ans'
},

show_details: {
  de: 'Details anzeigen →',
  en: 'Show details →',
  es: 'Mostrar detalles →',
  fr: 'Afficher les détails →'
},

next_steps_title: {
  de: "Deine nächsten Schritte",
  en: "Your next steps",
  es: "Tus próximos pasos",
  fr: "Vos prochaines étapes"
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
      de: "PDF Download",
      en: "PDF Download",
      es: "Descargar PDF",
      fr: "Télécharger PDF"
    }
  },

  // ========================================
// AGE CONTEXT INTERPRETATIONS (profile_render.js)
// ========================================
age_context: {
  title_template: {
    de: 'Für deine Altersgruppe ({age} Jahre)',
    en: 'For your age group ({age} years)',
    es: 'Para tu grupo de edad ({age} años)',
    fr: 'Pour votre groupe d\'âge ({age} ans)'
  },
  
  // EXCELLENT (70-100)
  excellent_young: {
    de: 'Normal bis gut - Das entspricht dem erwarteten Niveau für dein Alter. Halte diesen Standard bei!',
    en: 'Normal to good - This matches the expected level for your age. Keep this standard!',
    es: 'Normal a bueno - Esto coincide con el nivel esperado para tu edad. ¡Mantén este estándar!',
    fr: 'Normal à bon - Cela correspond au niveau attendu pour votre âge. Maintenez ce standard !'
  },
  excellent_middle: {
    de: 'Überdurchschnittlich - Du liegst deutlich über dem Durchschnitt deiner Altersgruppe. Sehr gut!',
    en: 'Above average - You are significantly above average for your age group. Very good!',
    es: 'Por encima del promedio - Estás significativamente por encima del promedio de tu grupo de edad. ¡Muy bien!',
    fr: 'Au-dessus de la moyenne - Vous êtes nettement au-dessus de la moyenne de votre groupe d\'âge. Très bien !'
  },
  excellent_old_80plus: {
    de: 'Außergewöhnlich - Nur 10-20% deiner Altersgruppe erreicht dieses Niveau!',
    en: 'Exceptional - Only 10-20% of your age group reaches this level!',
    es: '¡Excepcional - Solo el 10-20% de tu grupo de edad alcanza este nivel!',
    fr: 'Exceptionnel - Seulement 10-20% de votre groupe d\'âge atteint ce niveau !'
  },
  excellent_old: {
    de: 'Bemerkenswert - Nur 15-25% deiner Altersgruppe erreicht dieses Niveau!',
    en: 'Remarkable - Only 15-25% of your age group reaches this level!',
    es: '¡Notable - Solo el 15-25% de tu grupo de edad alcanza este nivel!',
    fr: 'Remarquable - Seulement 15-25% de votre groupe d\'âge atteint ce niveau !'
  },
  
  // GOOD (60-69)
  good_young: {
    de: 'Normal - Das ist ein solides Niveau für dein Alter.',
    en: 'Normal - This is a solid level for your age.',
    es: 'Normal - Este es un nivel sólido para tu edad.',
    fr: 'Normal - C\'est un niveau solide pour votre âge.'
  },
  good_middle: {
    de: 'Gut - Das liegt im oberen Durchschnitt für dein Alter.',
    en: 'Good - This is in the upper average for your age.',
    es: 'Bueno - Esto está en el promedio superior para tu edad.',
    fr: 'Bon - C\'est dans la moyenne supérieure pour votre âge.'
  },
  good_old: {
    de: 'Sehr gut für dein Alter - Das liegt deutlich über dem Durchschnitt!',
    en: 'Very good for your age - This is significantly above average!',
    es: '¡Muy bueno para tu edad - Esto está significativamente por encima del promedio!',
    fr: 'Très bon pour votre âge - C\'est nettement au-dessus de la moyenne !'
  },
  
  // NEUTRAL (50-59)
  neutral_young: {
    de: 'Durchschnitt - In deinem Alter gibt es Raum für Verbesserungen.',
    en: 'Average - At your age there is room for improvement.',
    es: 'Promedio - A tu edad hay espacio para mejorar.',
    fr: 'Moyen - À votre âge, il y a place à l\'amélioration.'
  },
  neutral_middle: {
    de: 'Durchschnitt - Typisch für deine Altersgruppe, aber verbesserbar.',
    en: 'Average - Typical for your age group, but improvable.',
    es: 'Promedio - Típico para tu grupo de edad, pero mejorable.',
    fr: 'Moyen - Typique pour votre groupe d\'âge, mais améliorable.'
  },
  neutral_old: {
    de: 'Akzeptabel für dein Alter - Verbesserungen sind möglich!',
    en: 'Acceptable for your age - Improvements are possible!',
    es: '¡Aceptable para tu edad - Las mejoras son posibles!',
    fr: 'Acceptable pour votre âge - Des améliorations sont possibles !'
  },
  
  // MODERATE (35-49)
  moderate_young: {
    de: 'Unterdurchschnittlich - In deinem Alter sollte dieser Wert besser sein.',
    en: 'Below average - At your age this value should be better.',
    es: 'Por debajo del promedio - A tu edad este valor debería ser mejor.',
    fr: 'En dessous de la moyenne - À votre âge, cette valeur devrait être meilleure.'
  },
  moderate_middle: {
    de: 'Unter dem Durchschnitt - Verbesserungen sind empfohlen.',
    en: 'Below average - Improvements are recommended.',
    es: 'Por debajo del promedio - Se recomiendan mejoras.',
    fr: 'En dessous de la moyenne - Des améliorations sont recommandées.'
  },
  moderate_old: {
    de: 'Häufig aber behandelbar - Das ist durchaus verbesserbar.',
    en: 'Common but treatable - This is quite improvable.',
    es: 'Común pero tratable - Esto es bastante mejorable.',
    fr: 'Fréquent mais traitable - C\'est tout à fait améliorable.'
  },
  
  // POOR (0-34)
  poor_young: {
    de: 'Ungewöhnlich kritisch - Das sollte dringend medizinisch abgeklärt werden!',
    en: 'Unusually critical - This should be urgently medically clarified!',
    es: '¡Inusualmente crítico - Esto debe ser aclarado médicamente con urgencia!',
    fr: 'Inhabituellement critique - Cela devrait être clarifié médicalement de toute urgence !'
  },
  poor_middle: {
    de: 'Kritisch - Dringender Handlungsbedarf!',
    en: 'Critical - Urgent action needed!',
    es: '¡Crítico - Se necesita acción urgente!',
    fr: 'Critique - Action urgente nécessaire !'
  },
  poor_old: {
    de: 'Behandlungsbedürftig - Auch im Alter ist vieles noch verbesserbar!',
    en: 'Needs treatment - Even at older age much can still be improved!',
    es: '¡Necesita tratamiento - Incluso en la vejez mucho todavía se puede mejorar!',
    fr: 'Nécessite un traitement - Même à un âge avancé, beaucoup peut encore être amélioré !'
  },
  
  // Fallback
  not_available: {
    de: 'Kontext nicht verfügbar',
    en: 'Context not available',
    es: 'Contexto no disponible',
    fr: 'Contexte non disponible'
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
    },
    
    // ========================================
    // NEW: Additional labels for multilingual support
    // ========================================
    
    category_smoking: {
      de: 'Rauchen',
      en: 'Smoking',
      es: 'Fumar',
      fr: 'Tabac'
    },
    category_weight: {
      de: 'Gewicht',
      en: 'Weight',
      es: 'Peso',
      fr: 'Poids'
    },
    category_exercise: {
      de: 'Bewegung',
      en: 'Exercise',
      es: 'Ejercicio',
      fr: 'Exercice'
    },
    category_diet: {
      de: 'Ernährung',
      en: 'Diet',
      es: 'Nutrición',
      fr: 'Alimentation'
    },
    category_alcohol: {
      de: 'Alkohol',
      en: 'Alcohol',
      es: 'Alcohol',
      fr: 'Alcool'
    },
    category_sleep: {
      de: 'Schlaf',
      en: 'Sleep',
      es: 'Sueño',
      fr: 'Sommeil'
    },
    category_stress: {
      de: 'Stress',
      en: 'Stress',
      es: 'Estrés',
      fr: 'Stress'
    },
    category_social: {
      de: 'Soziales',
      en: 'Social',
      es: 'Social',
      fr: 'Social'
    },
    
    realistic_label: {
      de: 'Realistisch',
      en: 'Realistic',
      es: 'Realista',
      fr: 'Réaliste'
    },
    realistic_gain_label: {
      de: 'Realistischer Gewinn',
      en: 'Realistic Gain',
      es: 'Ganancia realista',
      fr: 'Gain réaliste'
    },
    realistic_impact: {
      de: 'Realistischer Impact',
      en: 'Realistic Impact',
      es: 'Impacto realista',
      fr: 'Impact réaliste'
    },
    with_changes_realistic: {
      de: 'Mit Änderungen (realistisch)',
      en: 'With Changes (realistic)',
      es: 'Con cambios (realista)',
      fr: 'Avec changements (réaliste)'
    },
    
    age_adjustment_info: {
      de: (theoreticalDiff, age, agePercent, damagePercent, realisticDiff) => `
        <strong>ℹ️ Warum nicht die vollen +${theoreticalDiff} Jahre?</strong><br>
        Mit ${age} Jahren hast du noch ${agePercent}% des Zeitfensters für compound effects. Gleichzeitig sind etwa ${damagePercent}% früherer Lifestyle-Effekte nicht mehr vollständig reversibel.<br>
        <strong>Aber:</strong> Die realistischen <strong>+${realisticDiff} Jahre</strong> sind trotzdem massiv wertvoll – jede Verbesserung lohnt sich! 💪
      `,
      en: (theoreticalDiff, age, agePercent, damagePercent, realisticDiff) => `
        <strong>ℹ️ Why not the full +${theoreticalDiff} years?</strong><br>
        At ${age} years old, you have ${agePercent}% of the time window remaining for compound effects. Additionally, about ${damagePercent}% of past lifestyle effects are no longer fully reversible.<br>
        <strong>But:</strong> The realistic <strong>+${realisticDiff} years</strong> are still massively valuable – every improvement counts! 💪
      `,
      es: (theoreticalDiff, age, agePercent, damagePercent, realisticDiff) => `
        <strong>ℹ️ ¿Por qué no los ${theoreticalDiff} años completos?</strong><br>
        A los ${age} años, tienes ${agePercent}% del tiempo restante para efectos compuestos. Además, aproximadamente ${damagePercent}% de los efectos del estilo de vida pasado ya no son completamente reversibles.<br>
        <strong>Pero:</strong> Los <strong>+${realisticDiff} años</strong> realistas siguen siendo enormemente valiosos – ¡cada mejora cuenta! 💪
      `,
      fr: (theoreticalDiff, age, agePercent, damagePercent, realisticDiff) => `
        <strong>ℹ️ Pourquoi pas les ${theoreticalDiff} années complètes?</strong><br>
        À ${age} ans, il vous reste ${agePercent}% du temps pour les effets composés. De plus, environ ${damagePercent}% des effets du mode de vie passé ne sont plus totalement réversibles.<br>
        <strong>Mais:</strong> Les <strong>+${realisticDiff} années</strong> réalistes restent massivement précieuses – chaque amélioration compte! 💪
      `
    },
    
    save_scenario_button: {
      de: '💾 Szenario speichern',
      en: '💾 Save Scenario',
      es: '💾 Guardar escenario',
      fr: '💾 Sauvegarder scénario'
    },
    new_scenario_button: {
      de: '🔄 Neues Szenario',
      en: '🔄 New Scenario',
      es: '🔄 Nuevo escenario',
      fr: '🔄 Nouveau scénario'
    },
    to_profile_button: {
      de: '📊 Zum Profil',
      en: '📊 To Profile',
      es: '📊 Al perfil',
      fr: '📊 Vers profil'
    },
    
    scenario_label_quit_smoking: {
      de: 'Mit dem Rauchen aufhören',
      en: 'Quit smoking',
      es: 'Dejar de fumar',
      fr: 'Arrêter de fumer'
    },
    scenario_label_reduce_smoking: {
      de: 'Rauchen reduzieren',
      en: 'Reduce smoking',
      es: 'Reducir fumar',
      fr: 'Réduire tabac'
    },
    scenario_label_lose_weight_5: {
      de: '5 kg abnehmen',
      en: 'Lose 5 kg',
      es: 'Perder 5 kg',
      fr: 'Perdre 5 kg'
    },
    scenario_label_lose_weight_10: {
      de: '10 kg abnehmen',
      en: 'Lose 10 kg',
      es: 'Perder 10 kg',
      fr: 'Perdre 10 kg'
    },
    scenario_label_start_exercise: {
      de: 'Mit Sport beginnen',
      en: 'Start exercising',
      es: 'Comenzar ejercicio',
      fr: 'Commencer sport'
    },
    scenario_label_improve_diet: {
      de: 'Mediterrane Ernährung umsetzen',
      en: 'Adopt Mediterranean diet',
      es: 'Adoptar dieta mediterránea',
      fr: 'Adopter régime méditerranéen'
    },
    scenario_label_reduce_alcohol: {
      de: 'Alkohol reduzieren',
      en: 'Reduce alcohol',
      es: 'Reducir alcohol',
      fr: 'Réduire alcool'
    },
    scenario_label_quit_alcohol: {
      de: 'Kein Alkohol',
      en: 'No alcohol',
      es: 'Sin alcohol',
      fr: 'Pas d\'alcool'
    },
    scenario_label_improve_sleep: {
      de: 'Schlaf verbessern',
      en: 'Improve sleep',
      es: 'Mejorar sueño',
      fr: 'Améliorer sommeil'
    },
    scenario_label_reduce_stress: {
      de: 'Stress reduzieren',
      en: 'Reduce stress',
      es: 'Reducir estrés',
      fr: 'Réduire stress'
    },
    scenario_label_increase_social: {
      de: 'Soziale Kontakte ausbauen',
      en: 'Increase social contacts',
      es: 'Aumentar conexiones sociales',
      fr: 'Augmenter contacts sociaux'
    },
    
    preset_transformation_name: {
      de: '🚀 Komplette Transformation',
      en: '🚀 Complete Transformation',
      es: '🚀 Transformación completa',
      fr: '🚀 Transformation complète'
    },
    preset_transformation_desc: {
      de: 'Alle wichtigen Lifestyle-Faktoren optimiert',
      en: 'All important lifestyle factors optimized',
      es: 'Todos los factores importantes del estilo de vida optimizados',
      fr: 'Tous les facteurs de style de vie importants optimisés'
    },
    preset_fitness_name: {
      de: '💪 Fitness Focus',
      en: '💪 Fitness Focus',
      es: '💪 Enfoque Fitness',
      fr: '💪 Focus Fitness'
    },
    preset_fitness_desc: {
      de: 'Bewegung, Ernährung, Schlaf',
      en: 'Exercise, Diet, Sleep',
      es: 'Ejercicio, Nutrición, Sueño',
      fr: 'Exercice, Alimentation, Sommeil'
    },
    preset_smokestop_name: {
      de: '🚭 Rauch-Stopp Plus',
      en: '🚭 Smoke-Stop Plus',
      es: '🚭 Dejar de Fumar Plus',
      fr: '🚭 Arrêt Tabac Plus'
    },
    preset_smokestop_desc: {
      de: 'Rauchen aufhören + gesünderer Lifestyle',
      en: 'Quit smoking + healthier lifestyle',
      es: 'Dejar de fumar + estilo de vida más saludable',
      fr: 'Arrêter de fumer + mode de vie plus sain'
    },
    preset_stress_name: {
      de: '🧘 Stress-Management',
      en: '🧘 Stress Management',
      es: '🧘 Gestión de Estrés',
      fr: '🧘 Gestion du Stress'
    },
    preset_stress_desc: {
      de: 'Stress, Schlaf, Soziales optimieren',
      en: 'Optimize stress, sleep, social',
      es: 'Optimizar estrés, sueño, social',
      fr: 'Optimiser stress, sommeil, social'
    },
    preset_diet_name: {
      de: '🥗 Ernährungs-Boost',
      en: '🥗 Nutrition Boost',
      es: '🥗 Impulso Nutricional',
      fr: '🥗 Boost Nutritionnel'
    },
    preset_diet_desc: {
      de: 'Mediterrane Ernährung + Gewichtsverlust',
      en: 'Mediterranean diet + weight loss',
      es: 'Dieta mediterránea + pérdida de peso',
      fr: 'Régime méditerranéen + perte de poids'
    },
    preset_quickwins_name: {
      de: '🎯 Quick Wins',
      en: '🎯 Quick Wins',
      es: '🎯 Victorias Rápidas',
      fr: '🎯 Gains Rapides'
    },
    preset_quickwins_desc: {
      de: 'Leicht umsetzbare Änderungen',
      en: 'Easy to implement changes',
      es: 'Cambios fáciles de implementar',
      fr: 'Changements faciles à mettre en œuvre'
    },
    
    error_calculate_first: {
      de: 'Bitte berechne erst ein Szenario.',
      en: 'Please calculate a scenario first.',
      es: 'Por favor, calcula primero un escenario.',
      fr: 'Veuillez d\'abord calculer un scénario.'
    },
    error_calculation: {
      de: 'Fehler bei der Berechnung. Bitte versuche es erneut.',
      en: 'Calculation error. Please try again.',
      es: 'Error de cálculo. Por favor, inténtalo de nuevo.',
      fr: 'Erreur de calcul. Veuillez réessayer.'
    }
  },  // ← WICHTIG: Komma am Ende von what_if_page

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
      de: "Detailliertes Profil",
      en: "Detailed Profile",
      es: "Perfil Detallado",
      fr: "Profil Détaillé"
    },
    
    what_if_simulator: {
      de: "What-If Simulator",
      en: "What-If Simulator",
      es: "Simulador What-If",
      fr: "Simulateur What-If"
    },
    
    methodology: {
      de: "Methodologie",
      en: "Methodology",
      es: "Metodología",
      fr: "Méthodologie"
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
      de: "🫀 Hervorragend! Dein Herz-Kreislauf-System ist in exzellentem Zustand - Blutdruck optimal (<120/80 mmHg), keine Herzerkrankungen, vaskuläre Gesundheit top. Das ist nicht selbstverständlich: Nur 15-20% der über-50-Jährigen erreichen diesen Level. Optimaler Blutdruck reduziert Schlaganfall-Risiko um 40%, Herzinfarkt-Risiko um 25% im Vergleich zu leicht erhöhtem Blutdruck (130-139/85-89). Menschen mit exzellenter Herzgesundheit leben im Schnitt 7-10 Jahre länger und vor allem: ohne Behinderung. Um diesen Zustand zu erhalten: Bleib körperlich aktiv (150 Min/Woche, Krafttraining 2x), mediterrane Ernährung (senkt Risiko nochmal 30%), Stress-Management (chronischer Stress schadet dem Herzen), Schlaf 7-8h (Schlafmangel erhöht Blutdruck!), regelmäßige Checks (Blutdruck jährlich, Lipide alle 3-5 Jahre). Dein Herz ist dein Motor - behandle es gut und es trägt dich weit!",
      en: "🫀 Excellent! Your cardiovascular system is in excellent condition - blood pressure optimal (<120/80 mmHg), no heart disease, vascular health top. This is not self-evident: Only 15-20% of over-50s reach this level. Optimal blood pressure reduces stroke risk by 40%, heart attack risk by 25% compared to slightly elevated pressure (130-139/85-89). People with excellent heart health live on average 7-10 years longer and above all: without disability. To maintain this state: Stay physically active (150 min/week, strength training 2x), Mediterranean diet (reduces risk another 30%), stress management (chronic stress harms the heart), sleep 7-8h (sleep deprivation increases blood pressure!), regular checks (blood pressure annually, lipids every 3-5 years). Your heart is your engine - treat it well and it carries you far!",
      es: "🫀 ¡Excelente! Tu sistema cardiovascular está en excelente estado - presión arterial óptima (<120/80 mmHg), sin enfermedades cardíacas, salud vascular top. Esto no es evidente: Solo 15-20% de mayores de 50 alcanzan este nivel. Presión arterial óptima reduce riesgo de derrame en 40%, riesgo de infarto en 25% comparado con presión ligeramente elevada (130-139/85-89). Personas con excelente salud cardíaca viven en promedio 7-10 años más y sobre todo: sin discapacidad. Para mantener este estado: Mantente físicamente activo (150 min/semana, entrenamiento fuerza 2x), dieta mediterránea (reduce riesgo otro 30%), manejo estrés (estrés crónico daña corazón), dormir 7-8h (falta sueño aumenta presión!), controles regulares (presión anualmente, lípidos cada 3-5 años). Tu corazón es tu motor - ¡trátalo bien y te llevará lejos!",
      fr: "🫀 Excellent ! Votre système cardiovasculaire est en excellent état - tension optimale (<120/80 mmHg), pas de maladie cardiaque, santé vasculaire top. Ce n'est pas évident : Seulement 15-20% des plus de 50 ans atteignent ce niveau. Tension optimale réduit risque d'AVC de 40%, risque d'infarctus de 25% par rapport à tension légèrement élevée (130-139/85-89). Personnes avec excellente santé cardiaque vivent en moyenne 7-10 ans de plus et surtout : sans handicap. Pour maintenir cet état : Restez physiquement actif (150 min/semaine, musculation 2x), régime méditerranéen (réduit risque encore 30%), gestion stress (stress chronique nuit au cœur), sommeil 7-8h (manque sommeil augmente tension !), contrôles réguliers (tension annuellement, lipides tous les 3-5 ans). Votre cœur est votre moteur - traitez-le bien et il vous portera loin !"
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
        de: "❤️ ALARM: Dein Herz-Kreislauf-System ist in Gefahr. Bluthochdruck, hoher Cholesterin oder bestehende Herzkrankheiten sind die Todesursache #1 weltweit - und können dich 5-12 Jahre kosten. Die tückische Gefahr: Du fühlst dich oft jahrelang normal, während deine Gefäße sich zusetzen. Sofort zum Arzt wenn: Brustschmerzen, Atemnot, Schwindel, Herzrasen. Auch ohne Symptome: Lass Blutdruck und Cholesterin checken. Medikamente (Statine, Blutdrucksenker) sind keine Schwäche - sie sind wissenschaftlich bewiesen lebensrettend. Plus: Jeder Schritt zählt - schon 30 Min. Gehen täglich senkt dein Risiko um 30%.",
        en: "❤️ ALARM: Your cardiovascular system is in danger. Hypertension, high cholesterol or existing heart disease is the #1 cause of death worldwide - costing you 5-12 years. The insidious danger: You often feel normal for years while your vessels clog up. Immediate doctor visit if: chest pain, shortness of breath, dizziness, racing heart. Even without symptoms: Get blood pressure and cholesterol checked. Medications (statins, blood pressure lowering) aren't weakness - they're scientifically proven lifesaving. Plus: Every step counts - just 30 min. walking daily reduces your risk by 30%.",
        es: "❤️ ALARMA: Tu sistema cardiovascular está en peligro. Hipertensión, colesterol alto o enfermedad cardíaca existente es la causa de muerte #1 mundialmente - costándote 5-12 años. El peligro insidioso: A menudo te sientes normal durante años mientras tus vasos se obstruyen. Visita inmediata al médico si: dolor en el pecho, falta de aire, mareos, corazón acelerado. Incluso sin síntomas: Revisa presión arterial y colesterol. Los medicamentos (estatinas, reductores de presión) no son debilidad - están científicamente comprobados como salvavidas. Además: Cada paso cuenta - solo 30 min. de caminata diaria reduce tu riesgo en 30%.",
        fr: "❤️ ALARME : Votre système cardiovasculaire est en danger. L'hypertension, le cholestérol élevé ou les maladies cardiaques existantes sont la cause de décès #1 dans le monde - vous coûtant 5-12 ans. Le danger insidieux : Vous vous sentez souvent normal pendant des années pendant que vos vaisseaux se bouchent. Visite immédiate chez le médecin si : douleur thoracique, essoufflement, vertiges, cœur qui s'emballe. Même sans symptômes : Faites vérifier votre tension artérielle et votre cholestérol. Les médicaments (statines, antihypertenseurs) ne sont pas une faiblesse - ils sauvent scientifiquement des vies. De plus : Chaque pas compte - seulement 30 min. de marche par jour réduit votre risque de 30%."
      }
    },

    metabolic: {
      excellent: {
      de: "🩸 Hervorragend! Dein Stoffwechsel arbeitet optimal - Blutzucker stabil, Insulin-Sensitivität hoch, Gewicht im gesunden Bereich, Lipidprofil ausgezeichnet. Das ist Gold wert: Nur 12% der Erwachsenen haben einen wirklich gesunden Stoffwechsel. Ein gesunder Stoffwechsel schützt vor den großen Killern: Diabetes (-95% Risiko), Herzinfarkt (-60%), Schlaganfall (-50%), Demenz (-40%), sogar Krebs (-30%). Die Mechanik: Stabiler Blutzucker = keine Gefäßschäden, gute Insulin-Sensitivität = Zellen funktionieren optimal, gesundes Gewicht = minimale Entzündung. Um diesen Zustand zu bewahren: Bleib aktiv (Bewegung ist der beste Insulin-Sensitizer!), mediterrane Ernährung (niedrig-glykämisch), vermeide Gewichtszunahme (jedes Kilo mehr erhöht Diabetes-Risiko um 9%!), Krafttraining 2x/Woche (Muskeln = Glukose-Speicher), regelmäßige Checks (HbA1c alle 3 Jahre). Dein Stoffwechsel ist dein Fundament - halte ihn stabil!",
      en: "🩸 Excellent! Your metabolism works optimally - blood sugar stable, insulin sensitivity high, weight in healthy range, lipid profile excellent. This is gold: Only 12% of adults have truly healthy metabolism. Healthy metabolism protects against the big killers: Diabetes (-95% risk), heart attack (-60%), stroke (-50%), dementia (-40%), even cancer (-30%). The mechanics: Stable blood sugar = no vascular damage, good insulin sensitivity = cells function optimally, healthy weight = minimal inflammation. To preserve this state: Stay active (exercise is the best insulin sensitizer!), Mediterranean diet (low-glycemic), avoid weight gain (every kg more increases diabetes risk by 9%!), strength training 2x/week (muscles = glucose storage), regular checks (HbA1c every 3 years). Your metabolism is your foundation - keep it stable!",
      es: "🩸 ¡Excelente! Tu metabolismo funciona óptimamente - azúcar en sangre estable, sensibilidad insulina alta, peso en rango saludable, perfil lipídico excelente. Esto es oro: Solo 12% de adultos tienen metabolismo verdaderamente saludable. Metabolismo saludable protege contra grandes asesinos: Diabetes (-95% riesgo), infarto (-60%), derrame (-50%), demencia (-40%), incluso cáncer (-30%). La mecánica: Azúcar estable = sin daño vascular, buena sensibilidad insulina = células funcionan óptimamente, peso saludable = inflamación mínima. Para preservar este estado: Mantente activo (¡ejercicio es mejor sensibilizador insulina!), dieta mediterránea (bajo-glicémico), evita aumento peso (¡cada kg más aumenta riesgo diabetes 9%!), entrenamiento fuerza 2x/semana (músculos = almacén glucosa), controles regulares (HbA1c cada 3 años). Tu metabolismo es tu fundamento - ¡manténlo estable!",
      fr: "🩸 Excellent ! Votre métabolisme fonctionne de manière optimale - glycémie stable, sensibilité à l'insuline élevée, poids dans fourchette saine, profil lipidique excellent. C'est de l'or : Seulement 12% des adultes ont un métabolisme vraiment sain. Métabolisme sain protège contre grands tueurs : Diabète (-95% risque), infarctus (-60%), AVC (-50%), démence (-40%), même cancer (-30%). La mécanique : Glycémie stable = pas dommages vasculaires, bonne sensibilité insuline = cellules fonctionnent optimalement, poids sain = inflammation minimale. Pour préserver cet état : Restez actif (exercice est meilleur sensibilisateur insuline !), régime méditerranéen (bas-glycémique), évitez prise poids (chaque kg en plus augmente risque diabète 9% !), musculation 2x/semaine (muscles = stockage glucose), contrôles réguliers (HbA1c tous les 3 ans). Votre métabolisme est votre fondation - gardez-le stable !"
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
        de: "⚡ WARNUNG: Dein Stoffwechsel ist im kritischen Bereich. Unbehandelter Diabetes, starkes Übergewicht oder metabolisches Syndrom können dich 5-10 Jahre Lebenszeit kosten - plus massive Einschränkungen der Lebensqualität (Erblindung, Amputationen, Nierenversagen). Das ist vermeidbar! Erster Schritt: Arztbesuch für Bluttest (HbA1c, Nüchternblutzucker). Zweiter Schritt: Wenn diagnostiziert - nimm Medikamente ernst, sie retten dein Leben. Dritter Schritt: Lebensstil ist wichtiger als Medikamente - Gewichtsverlust und Bewegung können Diabetes Typ 2 sogar umkehren.",
        en: "⚡ WARNING: Your metabolism is in critical range. Untreated diabetes, severe obesity or metabolic syndrome can cost you 5-10 years of life - plus massive quality of life restrictions (blindness, amputations, kidney failure). This is preventable! First step: Doctor visit for blood test (HbA1c, fasting blood sugar). Second step: If diagnosed - take medications seriously, they save your life. Third step: Lifestyle is more important than medications - weight loss and exercise can even reverse type 2 diabetes.",
        es: "⚡ ADVERTENCIA: Tu metabolismo está en rango crítico. Diabetes no tratada, obesidad severa o síndrome metabólico pueden costarte 5-10 años de vida - más restricciones masivas de calidad de vida (ceguera, amputaciones, insuficiencia renal). ¡Esto es prevenible! Primer paso: Visita al médico para análisis de sangre (HbA1c, glucosa en ayunas). Segundo paso: Si diagnosticado - toma los medicamentos en serio, salvan tu vida. Tercer paso: El estilo de vida es más importante que los medicamentos - la pérdida de peso y el ejercicio pueden incluso revertir la diabetes tipo 2.",
        fr: "⚡ AVERTISSEMENT : Votre métabolisme est dans une zone critique. Le diabète non traité, l'obésité sévère ou le syndrome métabolique peuvent vous coûter 5-10 ans de vie - plus des restrictions massives de qualité de vie (cécité, amputations, insuffisance rénale). C'est évitable ! Première étape : Visite chez le médecin pour une analyse de sang (HbA1c, glycémie à jeun). Deuxième étape : Si diagnostiqué - prenez les médicaments au sérieux, ils sauvent votre vie. Troisième étape : Le mode de vie est plus important que les médicaments - la perte de poids et l'exercice peuvent même inverser le diabète de type 2."
  }
    },

   pulmonary: {
      excellent: {
        de: "🫁 Hervorragend! Deine Lungen sind gesund - keine chronischen Erkrankungen (COPD, Asthma), keine Atemprobleme, optimale Lungenfunktion. Das ist fundamentaler als die meisten denken: Gesunde Lungen bedeuten ausreichend Sauerstoff für jede Zelle, optimale körperliche Leistungsfähigkeit, und niedriges Risiko für Atemwegsinfekte. Die Mechanik: Lungen mit hoher Kapazität (FEV1 >80% des Sollwerts) ermöglichen effektiven Gasaustausch, starke Atemmuskulatur verhindert Erschöpfung, intaktes Flimmerepithel schützt vor Infekten. Menschen mit gesunden Lungen leben nicht nur länger, sondern vor allem aktiver - keine Atemnot beim Treppensteigen, keine Einschränkungen bei Sport oder Reisen. Um diesen Zustand zu erhalten: NIEMALS rauchen (auch nicht passiv!), vermeide Luftschadstoffe (Feinstaub, Ozon - check Luftqualitäts-Apps), bei Atemwegsinfekten frühzeitig behandeln (verschleppte Bronchitis → chronische Schäden), bleib körperlich aktiv (Ausdauersport stärkt Atemmuskulatur und Lungenkapazität), bei beruflicher Schadstoffbelastung: Atemschutz tragen. Screening: Low-Dose-CT bei Ex-Rauchern ab 50 (Lungenkrebs-Früherkennung). Deine Lungen sind dein Lebensmotor - schütze sie!",
        en: "🫁 Excellent! Your lungs are healthy - no chronic diseases (COPD, asthma), no breathing problems, optimal lung function. This is more fundamental than most think: Healthy lungs mean sufficient oxygen for every cell, optimal physical performance, and low risk for respiratory infections. The mechanics: Lungs with high capacity (FEV1 >80% predicted) enable effective gas exchange, strong respiratory muscles prevent exhaustion, intact ciliated epithelium protects against infections. People with healthy lungs not only live longer, but especially more actively - no breathlessness climbing stairs, no restrictions in sports or travel. To maintain this state: NEVER smoke (not even passively!), avoid air pollutants (particulate matter, ozone - check air quality apps), treat respiratory infections early (neglected bronchitis → chronic damage), stay physically active (endurance sports strengthen respiratory muscles and lung capacity), with occupational pollutant exposure: wear respiratory protection. Screening: Low-dose CT for ex-smokers from 50 (lung cancer early detection). Your lungs are your life engine - protect them!",
        es: "🫁 ¡Excelente! Tus pulmones están sanos - sin enfermedades crónicas (EPOC, asma), sin problemas respiratorios, función pulmonar óptima. Esto es más fundamental de lo que la mayoría piensa: Pulmones sanos significan suficiente oxígeno para cada célula, rendimiento físico óptimo, y bajo riesgo de infecciones respiratorias. La mecánica: Pulmones con alta capacidad (FEV1 >80% predicho) permiten intercambio gaseoso efectivo, músculos respiratorios fuertes previenen agotamiento, epitelio ciliado intacto protege contra infecciones. Personas con pulmones sanos no solo viven más, sino especialmente más activamente - sin falta de aire subiendo escaleras, sin restricciones en deportes o viajes. Para mantener este estado: NUNCA fumar (¡ni siquiera pasivamente!), evitar contaminantes aire (partículas, ozono - revisar apps calidad aire), tratar infecciones respiratorias temprano (bronquitis descuidada → daño crónico), mantenerse físicamente activo (deportes resistencia fortalecen músculos respiratorios y capacidad pulmonar), con exposición ocupacional contaminantes: usar protección respiratoria. Detección: TC baja dosis para ex-fumadores desde 50 (detección temprana cáncer pulmón). Tus pulmones son tu motor de vida - ¡protégelos!",
        fr: "🫁 Excellent ! Vos poumons sont sains - pas de maladies chroniques (BPCO, asthme), pas de problèmes respiratoires, fonction pulmonaire optimale. C'est plus fondamental que la plupart pensent : Poumons sains signifient oxygène suffisant pour chaque cellule, performance physique optimale, et faible risque d'infections respiratoires. La mécanique : Poumons avec haute capacité (VEMS >80% prédit) permettent échange gazeux efficace, muscles respiratoires forts préviennent épuisement, épithélium cilié intact protège contre infections. Personnes avec poumons sains vivent non seulement plus longtemps, mais surtout plus activement - pas d'essoufflement montant escaliers, pas de restrictions sports ou voyages. Pour maintenir cet état : JAMAIS fumer (même pas passivement !), éviter polluants atmosphériques (particules fines, ozone - vérifier apps qualité air), traiter infections respiratoires tôt (bronchite négligée → dommages chroniques), rester physiquement actif (sports endurance renforcent muscles respiratoires et capacité pulmonaire), avec exposition professionnelle polluants : porter protection respiratoire. Dépistage : Scanner faible dose pour ex-fumeurs dès 50 (détection précoce cancer poumon). Vos poumons sont votre moteur de vie - protégez-les !"
        },
  
      good: {
        de: "Gut! Deine Lungen funktionieren grundsätzlich gut, mit leichten Einschränkungen (z.B. gelegentliches Asthma, frühere Bronchitis). Achte auf Warnsignale und vermeide Verschlechterung durch Schutzmaßnahmen (kein Rauchen, Luftqualität, Infektprävention).",
        en: "Good! Your lungs function well overall, with minor limitations (e.g., occasional asthma, previous bronchitis). Watch for warning signs and prevent deterioration through protective measures (no smoking, air quality, infection prevention).",
        es: "¡Bien! Tus pulmones funcionan bien en general, con limitaciones menores (p. ej., asma ocasional, bronquitis previa). Observa señales de advertencia y prevén deterioro mediante medidas protectoras (no fumar, calidad aire, prevención infecciones).",
        fr: "Bien ! Vos poumons fonctionnent bien dans l'ensemble, avec limitations mineures (p. ex., asthme occasionnel, bronchite antérieure). Surveillez signaux d'alerte et prévenez détérioration par mesures protectrices (pas fumer, qualité air, prévention infections)."
        },
  
      neutral: {
        de: "Leichte Beeinträchtigung. Deine Lungenfunktion zeigt moderate Einschränkungen - möglicherweise leichtes Asthma, chronische Bronchitis, oder reduzierte Kapazität durch Inaktivität. Ein Score von 50-59/100 bedeutet: Deine Lungen funktionieren, aber nicht optimal. Häufig ist dies reversibel durch Lifestyle-Änderungen! Raucher: SOFORT aufhören (jeder Tag zählt), Ex-Raucher: Lungen regenerieren sich (nach 10 Jahren 50% weniger Lungenkrebs-Risiko), Inaktive: Ausdauertraining steigert Lungenkapazität messbar (3x/Woche 30 Min.), Asthmatiker: Medikation optimieren (unbehandeltes Asthma → COPD). Warnsignale ernst nehmen: Atemnot bei leichter Belastung, chronischer Husten, häufige Atemwegsinfekte. Lungenfunktionstest beim Arzt (Spirometrie) gibt Klarheit. Prävention: Vermeide Schadstoffe (Rauchen, Feinstaub, Dämpfe), Impfungen aktuell (Grippe, Pneumokokken), bei Infekten: Auskurieren! Lungen sind regenerationsfähig - nutze diese Chance.",
        en: "Mild impairment. Your lung function shows moderate limitations - possibly mild asthma, chronic bronchitis, or reduced capacity from inactivity. A score of 50-59/100 means: Your lungs function, but not optimally. Often this is reversible through lifestyle changes! Smokers: STOP immediately (every day counts), Ex-smokers: Lungs regenerate (after 10 years 50% less lung cancer risk), Inactive: Endurance training measurably increases lung capacity (3x/week 30 min.), Asthmatics: Optimize medication (untreated asthma → COPD). Take warning signs seriously: Breathlessness with mild exertion, chronic cough, frequent respiratory infections. Lung function test at doctor (spirometry) provides clarity. Prevention: Avoid pollutants (smoking, particulate matter, fumes), keep vaccinations current (flu, pneumococcus), with infections: Fully recover! Lungs are capable of regeneration - use this chance.",
        es: "Deterioro leve. Tu función pulmonar muestra limitaciones moderadas - posiblemente asma leve, bronquitis crónica, o capacidad reducida por inactividad. Una puntuación de 50-59/100 significa: Tus pulmones funcionan, pero no óptimamente. ¡A menudo esto es reversible mediante cambios de estilo de vida! Fumadores: PARAR inmediatamente (cada día cuenta), Ex-fumadores: Pulmones se regeneran (después 10 años 50% menos riesgo cáncer pulmón), Inactivos: Entrenamiento resistencia aumenta mensurablemente capacidad pulmonar (3x/semana 30 min.), Asmáticos: Optimizar medicación (asma no tratada → EPOC). Tomar señales advertencia en serio: Falta aire con esfuerzo leve, tos crónica, infecciones respiratorias frecuentes. Prueba función pulmonar en médico (espirometría) proporciona claridad. Prevención: Evitar contaminantes (fumar, partículas, humos), mantener vacunas actuales (gripe, neumococo), con infecciones: ¡Recuperarse completamente! Pulmones son capaces de regeneración - usa esta oportunidad.",
        fr: "Déficience légère. Votre fonction pulmonaire montre limitations modérées - possiblement asthme léger, bronchite chronique, ou capacité réduite par inactivité. Un score de 50-59/100 signifie : Vos poumons fonctionnent, mais pas optimalement. Souvent ceci est réversible par changements mode de vie ! Fumeurs : ARRÊTER immédiatement (chaque jour compte), Ex-fumeurs : Poumons se régénèrent (après 10 ans 50% moins risque cancer poumon), Inactifs : Entraînement endurance augmente mesurablement capacité pulmonaire (3x/semaine 30 min.), Asthmatiques : Optimiser médication (asthme non traité → BPCO). Prendre signaux alerte au sérieux : Essoufflement avec effort léger, toux chronique, infections respiratoires fréquentes. Test fonction pulmonaire chez médecin (spirométrie) donne clarté. Prévention : Éviter polluants (fumer, particules fines, fumées), garder vaccinations à jour (grippe, pneumocoque), avec infections : Récupérer complètement ! Poumons sont capables régénération - utilisez cette chance."
        },
  
      moderate: {
        de: "Deutliche Einschränkung. Deine Lungenfunktion ist signifikant reduziert - wahrscheinlich COPD, schweres Asthma, oder Folgen jahrelangen Rauchens. Ein Score von 35-49/100 bedeutet: Atemnot bei Alltagsaktivitäten, häufige Infekte, eingeschränkte Lebensqualität. COPD ist nicht heilbar, aber VERLANGSAMBAR! Wenn du noch rauchst: JETZT aufhören ist wichtiger als jede Medikation (jede weitere Zigarette verschlimmert irreversibel). Lungenfacharzt (Pneumologe) ist Pflicht: Spirometrie, Röntgen/CT, Medikamenten-Einstellung (Bronchodilatatoren, Kortison-Inhalatoren). Rehabilitation: Atemtherapie, Lungensport (speziell für COPD-Patienten), Sauerstoff-Therapie bei schwerer Hypoxie. Impfungen KRITISCH: Grippe jährlich, Pneumokokken (Lungenentzündung kann tödlich sein!). Prävention Verschlechterung: Vermeide Infekte (Händewaschen!), Luftschadstoffe meiden, bei Exazerbation sofort zum Arzt (Antibiotika/Kortison verhindern permanenten Schaden). Jede Verschlechterung ist irreversibel - handle proaktiv!",
        en: "Significant limitation. Your lung function is significantly reduced - probably COPD, severe asthma, or consequences of years of smoking. A score of 35-49/100 means: Breathlessness with daily activities, frequent infections, limited quality of life. COPD is not curable, but SLOWABLE! If you still smoke: STOP NOW is more important than any medication (every additional cigarette worsens irreversibly). Pulmonologist is mandatory: Spirometry, X-ray/CT, medication adjustment (bronchodilators, corticosteroid inhalers). Rehabilitation: Breathing therapy, pulmonary sports (specifically for COPD patients), oxygen therapy for severe hypoxia. Vaccinations CRITICAL: Flu annually, pneumococcus (pneumonia can be fatal!). Prevention of deterioration: Avoid infections (wash hands!), avoid air pollutants, with exacerbation immediately to doctor (antibiotics/cortisone prevent permanent damage). Every deterioration is irreversible - act proactively!",
        es: "Limitación significativa. Tu función pulmonar está significativamente reducida - probablemente EPOC, asma grave, o consecuencias de años de fumar. Una puntuación de 35-49/100 significa: Falta de aire con actividades diarias, infecciones frecuentes, calidad de vida limitada. ¡EPOC no es curable, pero RETARDABLE! Si aún fumas: PARAR AHORA es más importante que cualquier medicación (cada cigarrillo adicional empeora irreversiblemente). Neumólogo es obligatorio: Espirometría, rayos X/TC, ajuste medicación (broncodilatadores, inhaladores corticoides). Rehabilitación: Terapia respiratoria, deportes pulmonares (específicamente para pacientes EPOC), terapia oxígeno para hipoxia grave. Vacunas CRÍTICAS: Gripe anualmente, neumococo (¡neumonía puede ser fatal!). Prevención deterioro: Evitar infecciones (¡lavar manos!), evitar contaminantes aire, con exacerbación inmediatamente a médico (antibióticos/cortisona previenen daño permanente). Cada deterioro es irreversible - ¡actúa proactivamente!",
        fr: "Limitation significative. Votre fonction pulmonaire est significativement réduite - probablement BPCO, asthme sévère, ou conséquences années de tabagisme. Un score de 35-49/100 signifie : Essoufflement avec activités quotidiennes, infections fréquentes, qualité vie limitée. BPCO n'est pas guérissable, mais RALENTISSABLE ! Si vous fumez encore : ARRÊTER MAINTENANT est plus important que toute médication (chaque cigarette supplémentaire aggrave irréversiblement). Pneumologue est obligatoire : Spirométrie, rayons X/scanner, ajustement médication (bronchodilatateurs, inhalateurs corticoïdes). Réhabilitation : Thérapie respiratoire, sports pulmonaires (spécifiquement pour patients BPCO), thérapie oxygène pour hypoxie sévère. Vaccinations CRITIQUES : Grippe annuellement, pneumocoque (pneumonie peut être fatale !). Prévention détérioration : Éviter infections (laver mains !), éviter polluants atmosphériques, avec exacerbation immédiatement chez médecin (antibiotiques/cortisone préviennent dommages permanents). Chaque détérioration est irréversible - agissez proactivement !"
        },
  
      poor: {
        de: "🚨 KRITISCH: Schwere Lungenerkrankung! Deine Lungenfunktion ist massiv eingeschränkt - fortgeschrittene COPD, schweres Asthma, oder andere schwere Atemwegserkrankung. Bei Score <35/100 ist spezialisierte medizinische Betreuung essentiell. Die Realität: Atemnot in Ruhe, Sauerstoffmangel (Hypoxie), hohes Risiko für lebensbedrohliche Infekte, stark eingeschränkte Lebensqualität. Jede Treppe wird zum Berg, einfache Tätigkeiten erschöpfen dich. SOFORT ZUM PNEUMOLOGEN: Komplette Diagnostik (Spirometrie, CT, Blutgase), aggressive Medikation (Bronchodilatatoren, Kortison, ggf. Sauerstoff-Langzeittherapie), Rehabilitation (Atemtherapie, Lungensport unter Aufsicht). Wenn du noch rauchst: Aufhören ist JETZT die einzige Chance weitere Verschlechterung zu verhindern. Impfungen LEBENSNOTWENDIG: Grippe, Pneumokokken, COVID (Lungenentzündung kann tödlich sein!). Bei Atemnot-Verschlechterung: Notarzt (Exazerbation = Notfall!). Palliative Optionen bei Endstadium: Lungentransplantation (bei <65 Jahren), palliative Sauerstoff-Therapie. Deine Lungen sind kritisch geschädigt - jeder Tag ohne Behandlung ist gefährlich.",
        en: "🚨 CRITICAL: Severe lung disease! Your lung function is massively impaired - advanced COPD, severe asthma, or other severe respiratory disease. At score <35/100 specialized medical care is essential. Reality: Breathlessness at rest, oxygen deficiency (hypoxia), high risk for life-threatening infections, severely limited quality of life. Every staircase becomes a mountain, simple activities exhaust you. IMMEDIATE PULMONOLOGIST: Complete diagnostics (spirometry, CT, blood gases), aggressive medication (bronchodilators, cortisone, possibly long-term oxygen therapy), rehabilitation (breathing therapy, pulmonary sports under supervision). If you still smoke: Quitting is NOW the only chance to prevent further deterioration. Vaccinations LIFE-ESSENTIAL: Flu, pneumococcus, COVID (pneumonia can be fatal!). With worsening breathlessness: Emergency doctor (exacerbation = emergency!). Palliative options at end stage: Lung transplant (if <65 years), palliative oxygen therapy. Your lungs are critically damaged - every day without treatment is dangerous.",
        es: "🚨 CRÍTICO: ¡Enfermedad pulmonar grave! Tu función pulmonar está masivamente deteriorada - EPOC avanzada, asma grave, u otra enfermedad respiratoria grave. Con puntuación <35/100 atención médica especializada es esencial. Realidad: Falta de aire en reposo, deficiencia oxígeno (hipoxia), alto riesgo infecciones potencialmente mortales, calidad vida severamente limitada. Cada escalera se convierte en montaña, actividades simples te agotan. NEUMÓLOGO INMEDIATO: Diagnóstico completo (espirometría, TC, gases sangre), medicación agresiva (broncodilatadores, cortisona, posiblemente terapia oxígeno largo plazo), rehabilitación (terapia respiratoria, deportes pulmonares bajo supervisión). Si aún fumas: Dejar es AHORA única oportunidad prevenir mayor deterioro. Vacunas VITALES: Gripe, neumococo, COVID (¡neumonía puede ser fatal!). Con empeoramiento falta aire: Médico emergencia (¡exacerbación = emergencia!). Opciones paliativas etapa final: Trasplante pulmón (si <65 años), terapia oxígeno paliativa. Tus pulmones están críticamente dañados - cada día sin tratamiento es peligroso.",
        fr: "🚨 CRITIQUE : Maladie pulmonaire grave ! Votre fonction pulmonaire est massivement altérée - BPCO avancée, asthme sévère, ou autre maladie respiratoire grave. Avec score <35/100 soins médicaux spécialisés sont essentiels. Réalité : Essoufflement au repos, déficience oxygène (hypoxie), haut risque infections potentiellement mortelles, qualité vie sévèrement limitée. Chaque escalier devient montagne, activités simples vous épuisent. PNEUMOLOGUE IMMÉDIAT : Diagnostic complet (spirométrie, scanner, gaz sanguins), médication aggressive (bronchodilatateurs, cortisone, possiblement oxygénothérapie long terme), réhabilitation (thérapie respiratoire, sports pulmonaires sous supervision). Si vous fumez encore : Arrêter est MAINTENANT seule chance prévenir détérioration supplémentaire. Vaccinations VITALES : Grippe, pneumocoque, COVID (pneumonie peut être fatale !). Avec aggravation essoufflement : Médecin urgence (exacerbation = urgence !). Options palliatives stade final : Transplantation poumon (si <65 ans), oxygénothérapie palliative. Vos poumons sont gravement endommagés - chaque jour sans traitement est dangereux."
      }
    },

    lifestyle_smoke: {
      excellent: {
        de: "🫁 Hervorragend! Du bist Nichtraucher oder hast vor >15 Jahren aufgehört - deine Lungen haben sich weitgehend erholt. Das ist die beste Entscheidung für deine Gesundheit: Nichtraucher leben im Schnitt 10 Jahre länger als Raucher. Deine Lungen-Funktion ist altersgerecht optimal, dein Risiko für die großen Raucher-Krankheiten ist auf Nicht-Raucher-Level: Lungenkrebs (-95% vs. Raucher), COPD (-90%), Herzinfarkt (-50%), Schlaganfall (-50%). Die Zahlen: 15 Jahre nach Rauchstopp normalisiert sich das Herzinfarkt-Risiko komplett, nach 10 Jahren das Lungenkrebs-Risiko um 50%. Schütze deine Lungen weiter: Vermeide Passivrauchen, achte auf Luftqualität (Feinstaub, Ozon), bei Atemwegs-Infekten frühzeitig behandeln, Bewegung stärkt Lungen-Kapazität. Bleib dabei - jeder rauchfreie Tag ist ein Gewinn. Deine Lungen danken es dir mit jedem Atemzug!",
        en: "🫁 Excellent! You're a non-smoker or quit >15 years ago - your lungs have largely recovered. This is the best decision for your health: Non-smokers live on average 10 years longer than smokers. Your lung function is optimally age-appropriate, your risk for major smoking diseases is at non-smoker level: Lung cancer (-95% vs. smokers), COPD (-90%), heart attack (-50%), stroke (-50%). The numbers: 15 years after quitting, heart attack risk completely normalizes, after 10 years lung cancer risk drops by 50%. Continue protecting your lungs: Avoid secondhand smoke, watch air quality (particulate matter, ozone), treat respiratory infections early, exercise strengthens lung capacity. Stay with it - every smoke-free day is a win. Your lungs thank you with every breath!",
        es: "🫁 ¡Excelente! Eres no fumador o dejaste hace >15 años - tus pulmones se han recuperado en gran medida. Esta es la mejor decisión para tu salud: No fumadores viven en promedio 10 años más que fumadores. Tu función pulmonar es óptima para tu edad, tu riesgo para enfermedades mayores de fumadores está a nivel no fumador: Cáncer pulmón (-95% vs. fumadores), EPOC (-90%), infarto (-50%), derrame (-50%). Los números: 15 años después de dejar, riesgo infarto se normaliza completamente, después 10 años riesgo cáncer pulmón baja 50%. Sigue protegiendo tus pulmones: Evita humo pasivo, cuida calidad aire (partículas, ozono), trata infecciones respiratorias temprano, ejercicio fortalece capacidad pulmonar. Continúa así - cada día sin fumar es ganancia. ¡Tus pulmones te agradecen con cada respiración!",
        fr: "🫁 Excellent ! Vous êtes non-fumeur ou avez arrêté il y a >15 ans - vos poumons se sont largement rétablis. C'est la meilleure décision pour votre santé : Non-fumeurs vivent en moyenne 10 ans de plus que fumeurs. Votre fonction pulmonaire est optimale pour votre âge, votre risque pour maladies majeures liées au tabac est au niveau non-fumeur : Cancer poumon (-95% vs. fumeurs), BPCO (-90%), infarctus (-50%), AVC (-50%). Les chiffres : 15 ans après arrêt, risque infarctus se normalise complètement, après 10 ans risque cancer poumon baisse de 50%. Continuez à protéger vos poumons : Évitez fumée passive, surveillez qualité air (particules fines, ozone), traitez infections respiratoires tôt, exercice renforce capacité pulmonaire. Persévérez - chaque jour sans fumer est un gain. Vos poumons vous remercient à chaque respiration !"
  
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
        de: "🚨 ALARM! Rauchen ist dein größter Risikofaktor. Jede Zigarette verkürzt dein Leben messbar - bei starkem Rauchen verlierst du bis zu 10-15 Jahre Lebenserwartung. Dein Körper regeneriert sich bereits 20 Minuten nach der letzten Zigarette. Der beste Zeitpunkt aufzuhören? Jetzt. Auch nach Jahrzehnten lohnt es sich - dein Herzinfarktrisiko halbiert sich bereits nach einem rauchfreien Jahr.",
    en: "🚨 ALARM! Smoking is your biggest risk factor. Every cigarette measurably shortens your life - heavy smoking costs you 10-15 years of life expectancy. Your body starts regenerating 20 minutes after your last cigarette. Best time to quit? Now. Even after decades it's worth it - your heart attack risk halves after just one smoke-free year.",
    es: "🚨 ¡ALARMA! Fumar es tu mayor factor de riesgo. Cada cigarrillo acorta tu vida mediblemente - fumar mucho te cuesta 10-15 años de esperanza de vida. Tu cuerpo empieza a regenerarse 20 minutos después del último cigarrillo. ¿Mejor momento para dejarlo? Ahora. Incluso después de décadas vale la pena - tu riesgo de infarto se reduce a la mitad después de solo un año sin fumar.",
    fr: "🚨 ALARME ! Fumer est votre plus grand facteur de risque. Chaque cigarette raccourcit mesurablementvotre vie - le tabagisme intensif vous coûte 10-15 ans d'espérance de vie. Votre corps commence à se régénérer 20 minutes après votre dernière cigarette. Meilleur moment pour arrêter ? Maintenant. Même après des décennies, ça vaut le coup - votre risque d'infarctus diminue de moitié après seulement un an sans tabac."
      }
    },

    lifestyle_alcohol: {
      excellent: {
      de: "🍷 Hervorragend! Dein Alkoholkonsum liegt im optimalen Bereich (0-7 Drinks/Woche) oder du trinkst gar nicht - deine Leber, dein Herz und dein Gehirn danken es dir. Das ist seltener als du denkst: Nur 30% der Erwachsenen halten sich an diese Empfehlungen. Die Wissenschaft ist eindeutig: Moderater bis kein Alkoholkonsum maximiert Lebenserwartung. Null Alkohol bedeutet: Kein Leberschaden-Risiko, kein erhöhtes Krebs-Risiko (Alkohol ist Karzinogen Klasse 1!), optimale Schlafqualität, stabiler Blutdruck, keine kognitiven Einbußen. Die alten 'Rotwein ist gesund'-Studien sind widerlegt - die Vorteile kommen von Lebensstil, nicht vom Alkohol. Um dabei zu bleiben: Etabliere alkoholfreie Rituale (Sport statt Feierabend-Bier), entdecke alkoholfreie Alternativen (0%-Bier, Mocktails sind heute richtig gut!), bleib sozial aktiv ohne Trinken (geht!). Deine Leber arbeitet für dich - gib ihr die Chance zu glänzen!",
      en: "🍷 Excellent! Your alcohol consumption is in the optimal range (0-7 drinks/week) or you don't drink at all - your liver, heart and brain thank you. This is rarer than you think: Only 30% of adults follow these recommendations. The science is clear: Moderate to no alcohol maximizes life expectancy. Zero alcohol means: No liver damage risk, no increased cancer risk (alcohol is Class 1 carcinogen!), optimal sleep quality, stable blood pressure, no cognitive decline. The old 'red wine is healthy' studies are debunked - benefits come from lifestyle, not alcohol. To stay with it: Establish alcohol-free rituals (exercise instead of after-work beer), discover alcohol-free alternatives (0% beer, mocktails are really good now!), stay socially active without drinking (it works!). Your liver works for you - give it the chance to shine!",
      es: "🍷 ¡Excelente! Tu consumo de alcohol está en rango óptimo (0-7 bebidas/semana) o no bebes nada - tu hígado, corazón y cerebro te lo agradecen. Esto es más raro de lo que piensas: Solo 30% de adultos siguen estas recomendaciones. La ciencia es clara: Consumo moderado a nulo maximiza esperanza de vida. Cero alcohol significa: Sin riesgo daño hepático, sin riesgo cáncer aumentado (¡alcohol es carcinógeno Clase 1!), calidad sueño óptima, presión arterial estable, sin deterioro cognitivo. Los viejos estudios 'vino tinto es saludable' están desmentidos - beneficios vienen de estilo vida, no alcohol. Para continuar: Establece rituales sin alcohol (ejercicio en vez cerveza después trabajo), descubre alternativas sin alcohol (¡cerveza 0%, cócteles sin alcohol están muy buenos ahora!), mantente socialmente activo sin beber (¡funciona!). Tu hígado trabaja para ti - ¡dale oportunidad de brillar!",
      fr: "🍷 Excellent ! Votre consommation d'alcool est dans la fourchette optimale (0-7 verres/semaine) ou vous ne buvez pas du tout - votre foie, cœur et cerveau vous remercient. C'est plus rare que vous ne pensez : Seulement 30% des adultes suivent ces recommandations. La science est claire : Consommation modérée à nulle maximise espérance de vie. Zéro alcool signifie : Pas de risque dommages hépatiques, pas de risque cancer augmenté (alcool est cancérogène Classe 1 !), qualité sommeil optimale, tension stable, pas de déclin cognitif. Les vieilles études 'vin rouge est sain' sont réfutées - bénéfices viennent du mode de vie, pas alcool. Pour continuer : Établissez rituels sans alcool (sport au lieu bière après travail), découvrez alternatives sans alcool (bière 0%, mocktails sont vraiment bons maintenant !), restez socialement actif sans boire (ça marche !). Votre foie travaille pour vous - donnez-lui chance de briller !"
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
        de: "⚠️ Dein Alkoholkonsum liegt im kritischen Bereich. Regelmäßiger hoher Konsum schädigt Leber, Herz und Gehirn - und kann dich 5-10 Jahre Lebenszeit kosten. Die gute Nachricht: Dein Körper ist erstaunlich regenerationsfähig. Schon eine Reduktion auf 1-2 Drinks pro Tag bringt massive Verbesserungen. Betrachte alkoholfreie Tage als Investment in deine Zukunft. Wenn dir das Reduzieren schwerfällt, hol dir professionelle Unterstützung - das ist ein Zeichen von Stärke, nicht Schwäche.",
    en: "⚠️ Your alcohol consumption is in the critical range. Regular heavy drinking damages liver, heart and brain - costing you 5-10 years of life. Good news: Your body has amazing regenerative capacity. Even reducing to 1-2 drinks per day brings massive improvements. Consider alcohol-free days as investment in your future. If reducing is difficult, get professional support - that's a sign of strength, not weakness.",
    es: "⚠️ Tu consumo de alcohol está en el rango crítico. El consumo regular alto daña hígado, corazón y cerebro - costándote 5-10 años de vida. Buenas noticias: Tu cuerpo tiene una capacidad regenerativa asombrosa. Incluso reducir a 1-2 bebidas al día trae mejoras masivas. Considera días sin alcohol como inversión en tu futuro. Si reducir es difícil, busca apoyo profesional - eso es señal de fuerza, no debilidad.",
    fr: "⚠️ Votre consommation d'alcool est dans la zone critique. Une consommation régulière élevée endommage le foie, le cœur et le cerveau - vous coûtant 5-10 ans de vie. Bonnes nouvelles : Votre corps a une capacité de régénération étonnante. Même réduire à 1-2 verres par jour apporte des améliorations massives. Considérez les jours sans alcool comme un investissement dans votre avenir. Si réduire est difficile, obtenez un soutien professionnel - c'est un signe de force, pas de faiblesse."
      }
    },

    renal: {
  excellent: {
    de: "🫘 Hervorragend! Deine Nieren sind gesund - keine chronische Nierenerkrankung, normale Filterfunktion (GFR >90 ml/min), kein Protein im Urin. Das ist fundamentaler als die meisten denken: Gesunde Nieren bedeuten Entgiftung rund um die Uhr, Blutdruckregulation, Elektrolytbalance, Vitamin-D-Aktivierung, Blutbildung (Erythropoetin). Die Mechanik: Nieren filtern täglich 180 Liter Blut, entfernen Abfallstoffe (Harnstoff, Kreatinin), regulieren Wasser- und Salzhaushalt, produzieren Hormone. Menschen mit gesunden Nieren leben nicht nur länger, sondern vermeiden vor allem Dialyse - eine der belastendsten chronischen Therapien. Nierenversagen bedeutet: 3x/Woche je 4 Stunden Dialyse, massive Lebensqualitäts-Einbußen, 5-Jahres-Überlebensrate nur 40%. Um diesen Zustand zu erhalten: Kontrolliere Blutdruck streng (<130/80 mmHg - Hypertonie ist Nierenkiller Nr. 1!), vermeide Diabetes (diabetische Nephropathie = häufigste Dialyse-Ursache), trinke ausreichend (1,5-2L/Tag - verdünnt Giftstoffe), vorsichtig mit Schmerzmitteln (Ibuprofen/Diclofenac schädigen Nieren!), Laborcheck alle 2 Jahre (Kreatinin, GFR, Urin). Deine Nieren arbeiten still und leise - schütze sie!",
    
    en: "🫘 Excellent! Your kidneys are healthy - no chronic kidney disease, normal filtration function (GFR >90 ml/min), no protein in urine. This is more fundamental than most think: Healthy kidneys mean detoxification around the clock, blood pressure regulation, electrolyte balance, vitamin D activation, blood formation (erythropoietin). The mechanics: Kidneys filter 180 liters of blood daily, remove waste products (urea, creatinine), regulate water and salt balance, produce hormones. People with healthy kidneys not only live longer, but especially avoid dialysis - one of the most burdensome chronic therapies. Kidney failure means: 3x/week 4 hours dialysis each, massive quality of life impairments, 5-year survival rate only 40%. To maintain this state: Control blood pressure strictly (<130/80 mmHg - hypertension is kidney killer #1!), avoid diabetes (diabetic nephropathy = most common dialysis cause), drink sufficiently (1.5-2L/day - dilutes toxins), careful with painkillers (ibuprofen/diclofenac damage kidneys!), lab check every 2 years (creatinine, GFR, urine). Your kidneys work quietly and silently - protect them!",
    
    es: "🫘 ¡Excelente! Tus riñones están sanos - sin enfermedad renal crónica, función filtración normal (TFG >90 ml/min), sin proteína en orina. Esto es más fundamental de lo que la mayoría piensa: Riñones sanos significan desintoxicación las 24 horas, regulación presión arterial, balance electrolitos, activación vitamina D, formación sangre (eritropoyetina). La mecánica: Riñones filtran 180 litros sangre diariamente, eliminan productos desecho (urea, creatinina), regulan balance agua y sal, producen hormonas. Personas con riñones sanos no solo viven más, sino especialmente evitan diálisis - una de terapias crónicas más gravosas. Insuficiencia renal significa: 3x/semana 4 horas diálisis cada una, deterioros masivos calidad vida, tasa supervivencia 5 años solo 40%. Para mantener este estado: Controlar presión arterial estrictamente (<130/80 mmHg - ¡hipertensión es asesino riñones #1!), evitar diabetes (nefropatía diabética = causa diálisis más común), beber suficiente (1,5-2L/día - diluye toxinas), cuidado con analgésicos (¡ibuprofeno/diclofenaco dañan riñones!), control laboratorio cada 2 años (creatinina, TFG, orina). Tus riñones trabajan callada y silenciosamente - ¡protégelos!",
    
    fr: "🫘 Excellent ! Vos reins sont sains - pas de maladie rénale chronique, fonction filtration normale (DFG >90 ml/min), pas de protéine dans urine. C'est plus fondamental que la plupart pensent : Reins sains signifient détoxification 24h/24, régulation pression artérielle, équilibre électrolytes, activation vitamine D, formation sang (érythropoïétine). La mécanique : Reins filtrent 180 litres sang quotidiennement, éliminent produits déchets (urée, créatinine), régulent équilibre eau et sel, produisent hormones. Personnes avec reins sains vivent non seulement plus longtemps, mais surtout évitent dialyse - une des thérapies chroniques les plus lourdes. Insuffisance rénale signifie : 3x/semaine 4 heures dialyse chacune, détériorations massives qualité vie, taux survie 5 ans seulement 40%. Pour maintenir cet état : Contrôler pression artérielle strictement (<130/80 mmHg - hypertension est tueur reins #1 !), éviter diabète (néphropathie diabétique = cause dialyse plus commune), boire suffisamment (1,5-2L/jour - dilue toxines), prudent avec analgésiques (ibuprofène/diclofénac endommagent reins !), contrôle labo tous 2 ans (créatinine, DFG, urine). Vos reins travaillent calmement et silencieusement - protégez-les !"
  },
  
  good: {
    de: "Gut! Deine Nieren funktionieren grundsätzlich gut, mit leichten Einschränkungen (GFR 60-89 ml/min oder leicht erhöhtes Kreatinin). Stadium 2 der chronischen Nierenerkrankung - noch reversibel! Schütze deine Nieren durch Blutdruckkontrolle, ausreichend Trinken, Vorsicht mit Schmerzmitteln.",
    
    en: "Good! Your kidneys function well overall, with minor limitations (GFR 60-89 ml/min or slightly elevated creatinine). Stage 2 of chronic kidney disease - still reversible! Protect your kidneys through blood pressure control, sufficient drinking, caution with painkillers.",
    
    es: "¡Bien! Tus riñones funcionan bien en general, con limitaciones menores (TFG 60-89 ml/min o creatinina ligeramente elevada). Etapa 2 de enfermedad renal crónica - ¡aún reversible! Protege tus riñones mediante control presión arterial, beber suficiente, cuidado con analgésicos.",
    
    fr: "Bien ! Vos reins fonctionnent bien dans l'ensemble, avec limitations mineures (DFG 60-89 ml/min ou créatinine légèrement élevée). Stade 2 de maladie rénale chronique - encore réversible ! Protégez vos reins par contrôle pression artérielle, boire suffisamment, prudence avec analgésiques."
  },
  
  neutral: {
    de: "Leichte Nierenschädigung. Deine Nierenfunktion ist moderat eingeschränkt - GFR 45-59 ml/min (Stadium 3a der chronischen Nierenerkrankung). Ein Score von 50-59/100 bedeutet: Deine Nieren arbeiten mit etwa 50% Kapazität. Noch keine Dialyse, aber das Risiko steigt mit jedem Jahr ohne Intervention! Die Gefahr: Nierenerkrankungen verlaufen schleichend - du merkst nichts, bis es zu spät ist. Erst bei <30% Funktion treten Symptome auf (Müdigkeit, Wassereinlagerungen, Appetitlosigkeit). JETZT handeln verhindert Dialyse! Blutdruck ist kritisch: Ziel <130/80 mmHg (ACE-Hemmer/Sartane schützen Nieren doppelt - Blutdruck senken + Nierenfilter schützen), Diabetes optimal einstellen (HbA1c <7%), Protein reduzieren (max. 0,8g/kg Körpergewicht - entlastet Nieren), ausreichend trinken (1,5-2L/Tag), KEINE nephrotoxischen Medikamente (Ibuprofen, Diclofenac - frage Arzt nach Alternativen!). Nephrologe ist Pflicht: 2x/Jahr Kontrolle (Kreatinin, GFR, Urin-Albumin, Elektrolyte). Jedes Prozent Nierenfunktion das du verlierst kommt NIE zurück - schütze was übrig ist!",
    
    en: "Mild kidney damage. Your kidney function is moderately impaired - GFR 45-59 ml/min (stage 3a of chronic kidney disease). A score of 50-59/100 means: Your kidneys work at about 50% capacity. No dialysis yet, but risk increases each year without intervention! The danger: Kidney diseases progress insidiously - you notice nothing until it's too late. Only at <30% function do symptoms appear (fatigue, water retention, loss of appetite). ACT NOW prevents dialysis! Blood pressure is critical: Target <130/80 mmHg (ACE inhibitors/sartans protect kidneys doubly - lower blood pressure + protect kidney filters), optimize diabetes (HbA1c <7%), reduce protein (max. 0.8g/kg body weight - relieves kidneys), drink sufficiently (1.5-2L/day), NO nephrotoxic medications (ibuprofen, diclofenac - ask doctor for alternatives!). Nephrologist is mandatory: 2x/year control (creatinine, GFR, urine albumin, electrolytes). Every percent kidney function you lose NEVER returns - protect what remains!",
    
    es: "Daño renal leve. Tu función renal está moderadamente deteriorada - TFG 45-59 ml/min (etapa 3a de enfermedad renal crónica). Una puntuación de 50-59/100 significa: Tus riñones trabajan con aproximadamente 50% capacidad. Aún sin diálisis, ¡pero riesgo aumenta cada año sin intervención! El peligro: Enfermedades renales progresan insidiosamente - no notas nada hasta que es tarde. Solo con <30% función aparecen síntomas (fatiga, retención agua, pérdida apetito). ¡ACTUAR AHORA previene diálisis! Presión arterial es crítica: Objetivo <130/80 mmHg (inhibidores ECA/sartanes protegen riñones doblemente - bajan presión + protegen filtros renales), optimizar diabetes (HbA1c <7%), reducir proteína (máx. 0,8g/kg peso corporal - alivia riñones), beber suficiente (1,5-2L/día), SIN medicamentos nefrotóxicos (ibuprofeno, diclofenaco - ¡preguntar médico alternativas!). Nefrólogo es obligatorio: 2x/año control (creatinina, TFG, albúmina orina, electrolitos). Cada porcentaje función renal que pierdes NUNCA vuelve - ¡protege lo que queda!",
    
    fr: "Dommage rénal léger. Votre fonction rénale est modérément altérée - DFG 45-59 ml/min (stade 3a de maladie rénale chronique). Un score de 50-59/100 signifie : Vos reins travaillent à environ 50% capacité. Pas encore dialyse, mais risque augmente chaque année sans intervention ! Le danger : Maladies rénales progressent insidieusement - vous ne remarquez rien jusqu'à ce qu'il soit trop tard. Seulement à <30% fonction apparaissent symptômes (fatigue, rétention eau, perte appétit). AGIR MAINTENANT prévient dialyse ! Pression artérielle est critique : Cible <130/80 mmHg (inhibiteurs ECA/sartans protègent reins doublement - baissent pression + protègent filtres rénaux), optimiser diabète (HbA1c <7%), réduire protéines (max. 0,8g/kg poids corporel - soulage reins), boire suffisamment (1,5-2L/jour), AUCUN médicament néphrotoxique (ibuprofène, diclofénac - demander médecin alternatives !). Néphrologue est obligatoire : 2x/an contrôle (créatinine, DFG, albumine urine, électrolytes). Chaque pourcentage fonction rénale que vous perdez ne revient JAMAIS - protégez ce qui reste !"
  },
  
  moderate: {
    de: "Deutliche Nierenschädigung. Deine Nierenfunktion ist signifikant reduziert - GFR 30-44 ml/min (Stadium 3b) oder 15-29 ml/min (Stadium 4). Ein Score von 35-49/100 bedeutet: Deine Nieren arbeiten mit 15-45% Kapazität. Dialyse rückt näher - bei <15% GFR wird sie notwendig! Die Realität: Bei diesem Stadium treten oft erste Symptome auf - chronische Müdigkeit (Anämie durch fehlendes Erythropoetin), Wassereinlagerungen (Nieren können nicht mehr entwässern), Appetitlosigkeit, Juckreiz (Harnstoff-Ablagerungen in der Haut), Knochenschmerzen (Kalzium-Phosphat-Haushalt gestört). Nephrologe SOFORT: Monatliche Kontrollen, Dialyse-Vorbereitung (Shunt-Anlage dauert Monate!), aggressive Blutdruck-Therapie (ACE-Hemmer/Sartane sind essentiell), Phosphat-Binder (verhindert Knochenabbau), Erythropoetin-Spritzen (gegen Anämie), Diät (niedriges Protein, Kalium, Phosphat). Bei GFR <20: Transplantations-Evaluierung (Warteliste ist lang!). Dialyse bedeutet: 3x/Woche je 4 Stunden an Maschine, massive Lebenseinschränkung, 5-Jahres-Überlebensrate 40%. Jede Verzögerung zählt - kämpfe um jedes Prozent Nierenfunktion!",
    
    en: "Significant kidney damage. Your kidney function is significantly reduced - GFR 30-44 ml/min (stage 3b) or 15-29 ml/min (stage 4). A score of 35-49/100 means: Your kidneys work at 15-45% capacity. Dialysis is approaching - at <15% GFR it becomes necessary! Reality: At this stage first symptoms often appear - chronic fatigue (anemia from missing erythropoietin), water retention (kidneys can no longer dehydrate), loss of appetite, itching (urea deposits in skin), bone pain (calcium-phosphate balance disturbed). Nephrologist IMMEDIATELY: Monthly controls, dialysis preparation (shunt placement takes months!), aggressive blood pressure therapy (ACE inhibitors/sartans are essential), phosphate binders (prevents bone loss), erythropoietin injections (against anemia), diet (low protein, potassium, phosphate). At GFR <20: Transplant evaluation (waiting list is long!). Dialysis means: 3x/week 4 hours each on machine, massive life restrictions, 5-year survival rate 40%. Every delay counts - fight for every percent kidney function!",
    
    es: "Daño renal significativo. Tu función renal está significativamente reducida - TFG 30-44 ml/min (etapa 3b) o 15-29 ml/min (etapa 4). Una puntuación de 35-49/100 significa: Tus riñones trabajan con 15-45% capacidad. Diálisis se acerca - ¡con <15% TFG se vuelve necesaria! Realidad: En esta etapa a menudo aparecen primeros síntomas - fatiga crónica (anemia por falta eritropoyetina), retención agua (riñones ya no pueden deshidratar), pérdida apetito, picazón (depósitos urea en piel), dolor huesos (balance calcio-fosfato alterado). Nefrólogo INMEDIATAMENTE: Controles mensuales, preparación diálisis (¡colocación derivación toma meses!), terapia presión arterial agresiva (inhibidores ECA/sartanes son esenciales), quelantes fosfato (previene pérdida ósea), inyecciones eritropoyetina (contra anemia), dieta (proteína baja, potasio, fosfato). Con TFG <20: Evaluación trasplante (¡lista espera es larga!). Diálisis significa: 3x/semana 4 horas cada una en máquina, restricciones vida masivas, tasa supervivencia 5 años 40%. Cada retraso cuenta - ¡lucha por cada porcentaje función renal!",
    
    fr: "Dommage rénal significatif. Votre fonction rénale est significativement réduite - DFG 30-44 ml/min (stade 3b) ou 15-29 ml/min (stade 4). Un score de 35-49/100 signifie : Vos reins travaillent à 15-45% capacité. Dialyse approche - à <15% DFG elle devient nécessaire ! Réalité : À ce stade apparaissent souvent premiers symptômes - fatigue chronique (anémie par manque érythropoïétine), rétention eau (reins ne peuvent plus déshydrater), perte appétit, démangeaisons (dépôts urée dans peau), douleurs osseuses (équilibre calcium-phosphate perturbé). Néphrologue IMMÉDIATEMENT : Contrôles mensuels, préparation dialyse (pose shunt prend mois !), thérapie pression artérielle aggressive (inhibiteurs ECA/sartans sont essentiels), chélateurs phosphate (prévient perte osseuse), injections érythropoïétine (contre anémie), régime (protéines faibles, potassium, phosphate). À DFG <20 : Évaluation transplantation (liste attente est longue !). Dialyse signifie : 3x/semaine 4 heures chacune sur machine, restrictions vie massives, taux survie 5 ans 40%. Chaque retard compte - luttez pour chaque pourcentage fonction rénale !"
  },
  
  poor: {
    de: "🚨 KRITISCH: Schwere Niereninsuffizienz! Deine Nierenfunktion ist massiv eingeschränkt - GFR <15 ml/min (Stadium 5 = terminale Niereninsuffizienz). Bei Score <35/100 ist Dialyse unmittelbar bevorstehend oder bereits notwendig. Die Realität: Ohne Dialyse ist dein Leben akut bedroht - Giftstoffe (Harnstoff, Kreatinin) sammeln sich, Wasser kann nicht ausgeschieden werden (Lungenödem!), Kalium steigt (Herzrhythmusstörungen → Tod!), Übersäuerung (metabolische Azidose). Symptome: Extreme Müdigkeit, Übelkeit/Erbrechen, Atemnot, Verwirrtheit, Koma. SOFORT ZUM NEPHROLOGEN: Notfall-Dialyse (Hämodialyse 3x/Woche je 4h oder Peritonealdialyse täglich zu Hause), Shunt-Anlage (Gefäßzugang für Dialyse), aggressive Elektrolyt-Korrektur, strikte Diät (niedriges Kalium/Phosphat/Protein, Flüssigkeitsrestriktion oft <1L/Tag!). Transplantation ist einzige Heilung: Warteliste-Anmeldung dringend (Wartezeit oft Jahre!), Lebendspende prüfen (bessere Ergebnisse als Leichenspende). Ohne Behandlung: Lebenserwartung Wochen bis Monate. Mit Dialyse: 5-Jahres-Überlebensrate 40%, aber massive Lebensqualitäts-Einbußen. Deine Nieren sind ausgefallen - medizinische Hilfe ist überlebenswichtig!",
    en: "🚨 CRITICAL: Severe kidney failure! Your kidney function is massively impaired - GFR <15 ml/min (stage 5 = end-stage kidney disease). At score <35/100 dialysis is imminent or already necessary. Reality: Without dialysis your life is acutely threatened - toxins (urea, creatinine) accumulate, water cannot be excreted (pulmonary edema!), potassium rises (cardiac arrhythmias → death!), acidification (metabolic acidosis). Symptoms: Extreme fatigue, nausea/vomiting, shortness of breath, confusion, coma. IMMEDIATE NEPHROLOGIST: Emergency dialysis (hemodialysis 3x/week 4h each or peritoneal dialysis daily at home), shunt placement (vascular access for dialysis), aggressive electrolyte correction, strict diet (low potassium/phosphate/protein, fluid restriction often <1L/day!). Transplantation is only cure: Waiting list registration urgent (waiting time often years!), check living donation (better outcomes than deceased donation). Without treatment: Life expectancy weeks to months. With dialysis: 5-year survival rate 40%, but massive quality of life impairments. Your kidneys have failed - medical help is vital!",
    es: "🚨 CRÍTICO: ¡Insuficiencia renal grave! Tu función renal está masivamente deteriorada - TFG <15 ml/min (etapa 5 = enfermedad renal terminal). Con puntuación <35/100 diálisis es inminente o ya necesaria. Realidad: Sin diálisis tu vida está amenazada agudamente - toxinas (urea, creatinina) se acumulan, agua no puede excretarse (¡edema pulmonar!), potasio sube (arritmias cardíacas → ¡muerte!), acidificación (acidosis metabólica). Síntomas: Fatiga extrema, náuseas/vómitos, falta aire, confusión, coma. NEFRÓLOGO INMEDIATO: Diálisis emergencia (hemodiálisis 3x/semana 4h cada una o diálisis peritoneal diaria en casa), colocación derivación (acceso vascular para diálisis), corrección electrolitos agresiva, dieta estricta (potasio/fosfato/proteína bajos, restricción líquidos a menudo <1L/día!). Trasplante es única cura: Registro lista espera urgente (¡tiempo espera a menudo años!), verificar donación vivo (mejores resultados que donación fallecido). Sin tratamiento: Expectativa vida semanas a meses. Con diálisis: Tasa supervivencia 5 años 40%, pero deterioros masivos calidad vida. Tus riñones han fallado - ¡ayuda médica es vital!",
    fr: "🚨 CRITIQUE : Insuffisance rénale grave ! Votre fonction rénale est massivement altérée - DFG <15 ml/min (stade 5 = maladie rénale terminale). Avec score <35/100 dialyse est imminente ou déjà nécessaire. Réalité : Sans dialyse votre vie est menacée aiguëment - toxines (urée, créatinine) s'accumulent, eau ne peut être excrétée (œdème pulmonaire !), potassium monte (arythmies cardiaques → mort !), acidification (acidose métabolique). Symptômes : Fatigue extrême, nausées/vomissements, essoufflement, confusion, coma. NÉPHROLOGUE IMMÉDIAT : Dialyse urgence (hémodialyse 3x/semaine 4h chacune ou dialyse péritonéale quotidienne à domicile), pose shunt (accès vasculaire pour dialyse), correction électrolytes agressive, régime strict (potassium/phosphate/protéines faibles, restriction liquides souvent <1L/jour !). Transplantation est seule guérison : Inscription liste attente urgente (temps attente souvent années !), vérifier don vivant (meilleurs résultats que don décédé). Sans traitement : Espérance vie semaines à mois. Avec dialyse : Taux survie 5 ans 40%, mais détériorations massives qualité vie. Vos reins ont échoué - aide médicale est vitale !"
  }
},

cancer: {
  excellent: {
    de: "🎗️ Hervorragend! Keine Krebserkrankung - weder aktuell noch in der Vorgeschichte. Das ist fundamentaler als die meisten denken: Krebs ist die zweithäufigste Todesursache weltweit, aber viele Krebsarten sind vermeidbar oder heilbar wenn früh erkannt! Die Zahlen: 40% aller Krebserkrankungen sind durch Lifestyle beeinflussbar - Rauchen (Lungenkrebs -90%), Alkohol (mehrere Krebsarten), Übergewicht (13 Krebsarten!), UV-Strahlung (Hautkrebs), HPV/Hepatitis (Gebärmutterhals-/Leberkrebs). Menschen ohne Krebs leben im Durchschnitt 15-20 Jahre länger - aber vor allem ohne die Belastung von OP, Chemo, Bestrahlung. Die Mechanik: Jeder Mensch entwickelt täglich mutierte Zellen, aber ein gesundes Immunsystem eliminiert sie. Chronische Entzündungen, Giftstoffe und DNA-Schäden erhöhen das Risiko dass Zellen entarten. Um diesen Zustand zu erhalten: NIEMALS rauchen, Alkohol minimal, Normalgewicht halten, UV-Schutz (Sonnencreme!), Impfungen (HPV, Hepatitis B), Screening nutzen (Darmspiegelung ab 50, Mammographie, Hautkrebs-Check), entzündungshemmende Ernährung (Gemüse, Beeren, Omega-3). Prävention ist deine stärkste Waffe!",
    en: "🎗️ Excellent! No cancer - neither currently nor in medical history. This is more fundamental than most think: Cancer is the second leading cause of death worldwide, but many cancers are preventable or curable if detected early! The numbers: 40% of all cancers are influenced by lifestyle - smoking (lung cancer -90%), alcohol (multiple cancers), obesity (13 cancers!), UV radiation (skin cancer), HPV/hepatitis (cervical/liver cancer). People without cancer live on average 15-20 years longer - but especially without the burden of surgery, chemo, radiation. The mechanics: Every person develops mutated cells daily, but a healthy immune system eliminates them. Chronic inflammation, toxins and DNA damage increase risk that cells become malignant. To maintain this state: NEVER smoke, minimal alcohol, maintain normal weight, UV protection (sunscreen!), vaccinations (HPV, hepatitis B), use screening (colonoscopy from 50, mammography, skin cancer check), anti-inflammatory diet (vegetables, berries, omega-3). Prevention is your strongest weapon!",
    es: "🎗️ ¡Excelente! Sin cáncer - ni actualmente ni en historial médico. Esto es más fundamental de lo que la mayoría piensa: Cáncer es segunda causa principal muerte mundialmente, ¡pero muchos cánceres son prevenibles o curables si detectados temprano! Los números: 40% de todos cánceres son influenciados por estilo vida - fumar (cáncer pulmón -90%), alcohol (múltiples cánceres), obesidad (¡13 cánceres!), radiación UV (cáncer piel), VPH/hepatitis (cáncer cuello uterino/hígado). Personas sin cáncer viven promedio 15-20 años más - pero especialmente sin carga de cirugía, quimio, radiación. La mecánica: Cada persona desarrolla células mutadas diariamente, pero sistema inmune sano las elimina. Inflamación crónica, toxinas y daño ADN aumentan riesgo que células se vuelvan malignas. Para mantener este estado: NUNCA fumar, alcohol mínimo, mantener peso normal, protección UV (¡protector solar!), vacunas (VPH, hepatitis B), usar detección (colonoscopia desde 50, mamografía, chequeo cáncer piel), dieta antiinflamatoria (verduras, bayas, omega-3). ¡Prevención es tu arma más fuerte!",
    fr: "🎗️ Excellent ! Pas de cancer - ni actuellement ni dans antécédents médicaux. C'est plus fondamental que la plupart pensent : Cancer est deuxième cause principale mort mondialement, mais nombreux cancers sont évitables ou guérissables si détectés tôt ! Les chiffres : 40% de tous cancers sont influencés par mode de vie - fumer (cancer poumon -90%), alcool (multiples cancers), obésité (13 cancers !), radiation UV (cancer peau), HPV/hépatite (cancer col utérus/foie). Personnes sans cancer vivent moyenne 15-20 ans plus - mais surtout sans fardeau chirurgie, chimio, radiation. La mécanique : Chaque personne développe cellules mutées quotidiennement, mais système immunitaire sain les élimine. Inflammation chronique, toxines et dommages ADN augmentent risque que cellules deviennent malignes. Pour maintenir cet état : JAMAIS fumer, alcool minimal, maintenir poids normal, protection UV (crème solaire !), vaccinations (HPV, hépatite B), utiliser dépistage (coloscopie dès 50, mammographie, contrôle cancer peau), alimentation anti-inflammatoire (légumes, baies, oméga-3). Prévention est votre arme la plus forte !"
  },
  
  good: {
    de: "Gut! Keine aktive Krebserkrankung, aber erhöhtes Risiko (z.B. familiäre Vorbelastung, Präkanzerosen, überstandener Krebs in Remission). Engmaschige Screening-Kontrollen und präventive Maßnahmen sind essentiell um Rezidive oder Neuerkrankungen früh zu erkennen.",
    en: "Good! No active cancer, but increased risk (e.g., family history, precancerous lesions, previous cancer in remission). Close screening controls and preventive measures are essential to detect recurrences or new cancers early.",
    es: "¡Bien! Sin cáncer activo, pero riesgo aumentado (p. ej., antecedentes familiares, lesiones precancerosas, cáncer previo en remisión). Controles detección cercanos y medidas preventivas son esenciales para detectar recurrencias o nuevos cánceres temprano.",
    fr: "Bien ! Pas de cancer actif, mais risque accru (p. ex., antécédents familiaux, lésions précancéreuses, cancer précédent en rémission). Contrôles dépistage rapprochés et mesures préventives sont essentiels pour détecter récidives ou nouveaux cancers tôt."
  },
  
  neutral: {
    de: "Präkanzerose oder früher Krebs. Du hast eine Vorstufe von Krebs (z.B. hochgradige Dysplasie, Polypen, Barrett-Ösophagus) oder einen sehr frühen Tumor (Stadium 0-I). Ein Score von 50-59/100 bedeutet: Noch kein invasiver Krebs, aber die Zellen zeigen abnormales Wachstum. JETZT handeln verhindert Krebs! Die gute Nachricht: Präkanzerosen sind oft heilbar durch Entfernung (Polypektomie, Konisation, endoskopische Resektion). Die Zahlen: Darmpolypen entfernt → Darmkrebs-Risiko -90%, Barrett-Ösophagus überwacht → Speiseröhrenkrebs früh erkannt (5-Jahres-Überlebensrate 90% vs. 15% im Spätstadium!). SOFORT ZUM FACHARZT: Komplette Entfernung der Läsion (wenn möglich), engmaschige Kontrollen (alle 3-6 Monate!), Biopsien zur Verlaufskontrolle. Risikofaktoren eliminieren: Rauchen sofort stoppen (beschleunigt Progression!), Alkohol minimieren, Reflux behandeln (Barrett!), Normalgewicht erreichen, antioxidative Ernährung (Beeren, Kreuzblütler, grüner Tee). Screening NIEMALS auslassen - Präkanzerosen sind deine Chance Krebs zu verhindern!",
    en: "Precancerous or early cancer. You have a precursor to cancer (e.g., high-grade dysplasia, polyps, Barrett's esophagus) or a very early tumor (stage 0-I). A score of 50-59/100 means: No invasive cancer yet, but cells show abnormal growth. ACT NOW prevents cancer! The good news: Precancerous lesions are often curable through removal (polypectomy, conization, endoscopic resection). The numbers: Colon polyps removed → colon cancer risk -90%, Barrett's esophagus monitored → esophageal cancer detected early (5-year survival rate 90% vs. 15% late stage!). IMMEDIATE SPECIALIST: Complete removal of lesion (if possible), close monitoring (every 3-6 months!), biopsies for follow-up. Eliminate risk factors: Stop smoking immediately (accelerates progression!), minimize alcohol, treat reflux (Barrett!), achieve normal weight, antioxidant diet (berries, cruciferous vegetables, green tea). NEVER skip screening - precancerous lesions are your chance to prevent cancer!",
    es: "Precáncer o cáncer temprano. Tienes precursor de cáncer (p. ej., displasia alto grado, pólipos, Barrett esófago) o tumor muy temprano (etapa 0-I). Una puntuación de 50-59/100 significa: Aún sin cáncer invasivo, pero células muestran crecimiento anormal. ¡ACTUAR AHORA previene cáncer! Buenas noticias: Lesiones precancerosas son a menudo curables mediante extirpación (polipectomía, conización, resección endoscópica). Los números: Pólipos colon removidos → riesgo cáncer colon -90%, Barrett esófago monitoreado → cáncer esófago detectado temprano (¡tasa supervivencia 5 años 90% vs. 15% etapa tardía!). ESPECIALISTA INMEDIATO: Extirpación completa lesión (si posible), monitoreo cercano (¡cada 3-6 meses!), biopsias para seguimiento. Eliminar factores riesgo: Dejar fumar inmediatamente (¡acelera progresión!), minimizar alcohol, tratar reflujo (¡Barrett!), lograr peso normal, dieta antioxidante (bayas, crucíferas, té verde). NUNCA omitir detección - ¡lesiones precancerosas son tu oportunidad prevenir cáncer!",
    fr: "Précancer ou cancer précoce. Vous avez précurseur de cancer (p. ex., dysplasie haut grade, polypes, Barrett œsophage) ou tumeur très précoce (stade 0-I). Un score de 50-59/100 signifie : Pas encore cancer invasif, mais cellules montrent croissance anormale. AGIR MAINTENANT prévient cancer ! Bonnes nouvelles : Lésions précancéreuses sont souvent guérissables par ablation (polypectomie, conisation, résection endoscopique). Les chiffres : Polypes côlon retirés → risque cancer côlon -90%, Barrett œsophage surveillé → cancer œsophage détecté tôt (taux survie 5 ans 90% vs. 15% stade tardif !). SPÉCIALISTE IMMÉDIAT : Ablation complète lésion (si possible), surveillance rapprochée (tous 3-6 mois !), biopsies pour suivi. Éliminer facteurs risque : Arrêter fumer immédiatement (accélère progression !), minimiser alcool, traiter reflux (Barrett !), atteindre poids normal, alimentation antioxydante (baies, crucifères, thé vert). JAMAIS sauter dépistage - lésions précancéreuses sont votre chance prévenir cancer !"
  },
  
  moderate: {
    de: "Krebserkrankung aktiv oder kürzlich behandelt. Du hast oder hattest einen invasiven Tumor (Stadium II-III), bist in Behandlung oder im ersten Jahr nach Therapie. Ein Score von 35-49/100 bedeutet: Krebs ist/war systemisch gefährlich, aber potenziell heilbar. Stadium II-III bedeutet: Tumor ist lokal fortgeschritten oder hat Lymphknoten befallen, aber noch keine Fernmetastasen. Die Chancen: 5-Jahres-Überlebensrate stark abhängig von Krebsart und Therapieansprache (Brustkrebs Stadium II: 90%, Lungenkrebs Stadium III: 30%). ONKOLOGE IST ZENTRAL: Komplette Behandlung (OP + Chemo/Strahlung/Immuntherapie), regelmäßige Nachsorge (alle 3 Monate im ersten Jahr!), Tumormarker-Kontrollen, Bildgebung (CT/MRT). Rezidiv-Prävention: Lifestyle-Optimierung (Normalgewicht, Sport, mediterrane Diät - reduziert Rezidiv-Risiko um 30-40%!), psychoonkologische Betreuung (Depression verschlechtert Prognose!), Reha-Maßnahmen (Kraft aufbauen, Fatigue bekämpfen). Die ersten 5 Jahre sind kritisch - danach sinkt Rezidiv-Risiko drastisch. Screening anderer Organe wichtig (Zweitkarzinom-Risiko erhöht!). Jede Nachsorgetermin wahrnehmen - Früherkennung von Rezidiven rettet Leben!",
    
    en: "Cancer active or recently treated. You have or had an invasive tumor (stage II-III), are in treatment or in first year after therapy. A score of 35-49/100 means: Cancer is/was systemically dangerous, but potentially curable. Stage II-III means: Tumor is locally advanced or has affected lymph nodes, but no distant metastases yet. The chances: 5-year survival rate strongly dependent on cancer type and therapy response (breast cancer stage II: 90%, lung cancer stage III: 30%). ONCOLOGIST IS CENTRAL: Complete treatment (surgery + chemo/radiation/immunotherapy), regular follow-up (every 3 months in first year!), tumor marker controls, imaging (CT/MRI). Recurrence prevention: Lifestyle optimization (normal weight, exercise, Mediterranean diet - reduces recurrence risk by 30-40%!), psycho-oncological care (depression worsens prognosis!), rehabilitation measures (build strength, combat fatigue). First 5 years are critical - afterwards recurrence risk drops drastically. Screening other organs important (second cancer risk increased!). Attend every follow-up appointment - early detection of recurrences saves lives!",
    
    es: "Cáncer activo o recientemente tratado. Tienes o tuviste tumor invasivo (etapa II-III), estás en tratamiento o en primer año después terapia. Una puntuación de 35-49/100 significa: Cáncer es/fue sistémicamente peligroso, pero potencialmente curable. Etapa II-III significa: Tumor está localmente avanzado o ha afectado ganglios linfáticos, pero aún sin metástasis distantes. Las probabilidades: Tasa supervivencia 5 años fuertemente dependiente de tipo cáncer y respuesta terapia (cáncer mama etapa II: 90%, cáncer pulmón etapa III: 30%). ONCÓLOGO ES CENTRAL: Tratamiento completo (cirugía + quimio/radiación/inmunoterapia), seguimiento regular (¡cada 3 meses primer año!), controles marcadores tumorales, imágenes (TC/RM). Prevención recurrencia: Optimización estilo vida (peso normal, ejercicio, dieta mediterránea - ¡reduce riesgo recurrencia 30-40%!), atención psico-oncológica (¡depresión empeora pronóstico!), medidas rehabilitación (construir fuerza, combatir fatiga). Primeros 5 años son críticos - después riesgo recurrencia baja drásticamente. Detección otros órganos importante (¡riesgo segundo cáncer aumentado!). Asistir cada cita seguimiento - ¡detección temprana recurrencias salva vidas!",
    
    fr: "Cancer actif ou récemment traité. Vous avez ou aviez tumeur invasive (stade II-III), êtes en traitement ou première année après thérapie. Un score de 35-49/100 signifie : Cancer est/était systémiquement dangereux, mais potentiellement guérissable. Stade II-III signifie : Tumeur est localement avancée ou a affecté ganglions lymphatiques, mais pas encore métastases distantes. Les chances : Taux survie 5 ans fortement dépendant de type cancer et réponse thérapie (cancer sein stade II : 90%, cancer poumon stade III : 30%). ONCOLOGUE EST CENTRAL : Traitement complet (chirurgie + chimio/radiation/immunothérapie), suivi régulier (tous 3 mois première année !), contrôles marqueurs tumoraux, imagerie (scanner/IRM). Prévention récidive : Optimisation mode de vie (poids normal, exercice, régime méditerranéen - réduit risque récidive 30-40% !), soins psycho-oncologiques (dépression aggrave pronostic !), mesures réhabilitation (construire force, combattre fatigue). Premières 5 années sont critiques - après risque récidive baisse drastiquement. Dépistage autres organes important (risque second cancer augmenté !). Assister chaque rendez-vous suivi - détection précoce récidives sauve vies !"
  },
  
  poor: {
    de: "🚨 KRITISCH: Fortgeschrittener/metastasierter Krebs! Du hast einen Tumor im Stadium IV (Fernmetastasen) oder einen hochaggressiven Krebs mit schlechter Prognose. Bei Score <35/100 ist die Erkrankung systemisch verbreitet. Die Realität: Stadium IV bedeutet Metastasen in anderen Organen (Leber, Lunge, Knochen, Gehirn). Die meisten Krebsarten sind in diesem Stadium NICHT mehr heilbar, aber behandelbar. Mediane Überlebenszeit stark variabel: Brustkrebs IV mit Hormontherapie: 3-5 Jahre, Lungenkrebs IV: 8-12 Monate, Bauchspeicheldrüsenkrebs IV: 6-9 Monate. ONKOLOGISCHES ZENTRUM SOFORT: Systemische Therapie (Chemotherapie, zielgerichtete Therapie, Immuntherapie), Symptomkontrolle (Schmerzen, Übelkeit, Fatigue), palliative Maßnahmen (Bestrahlung einzelner Metastasen, Stents bei Verengungen). Neue Hoffnung: Immuntherapie (bei einigen Krebsarten dramatische Erfolge - z.B. Melanom: 5-Jahres-Überlebensrate von 10% auf 50%!), personalisierte Medizin (Tumor-Sequenzierung → passende Therapie). Lebensqualität ist JETZT Priorität: Schmerztherapie optimieren, psychoonkologische Betreuung, Hospiz-Dienste bei Bedarf, Patientenverfügung erstellen. Deine Zeit ist wertvoll - nutze sie mit deinen Liebsten!",
    
    en: "🚨 CRITICAL: Advanced/metastatic cancer! You have stage IV tumor (distant metastases) or highly aggressive cancer with poor prognosis. At score <35/100 disease is systemically spread. Reality: Stage IV means metastases in other organs (liver, lungs, bones, brain). Most cancers are NO longer curable at this stage, but treatable. Median survival time highly variable: Breast cancer IV with hormone therapy: 3-5 years, lung cancer IV: 8-12 months, pancreatic cancer IV: 6-9 months. ONCOLOGY CENTER IMMEDIATELY: Systemic therapy (chemotherapy, targeted therapy, immunotherapy), symptom control (pain, nausea, fatigue), palliative measures (radiation of individual metastases, stents for narrowings). New hope: Immunotherapy (dramatic success in some cancers - e.g., melanoma: 5-year survival rate from 10% to 50%!), personalized medicine (tumor sequencing → matching therapy). Quality of life is NOW priority: Optimize pain therapy, psycho-oncological care, hospice services if needed, create advance directive. Your time is precious - use it with your loved ones!",
    
    es: "🚨 CRÍTICO: ¡Cáncer avanzado/metastásico! Tienes tumor etapa IV (metástasis distantes) o cáncer altamente agresivo con pronóstico pobre. Con puntuación <35/100 enfermedad está sistémicamente extendida. Realidad: Etapa IV significa metástasis en otros órganos (hígado, pulmones, huesos, cerebro). Mayoría cánceres NO son ya curables en esta etapa, pero tratables. Tiempo supervivencia mediano altamente variable: Cáncer mama IV con terapia hormonal: 3-5 años, cáncer pulmón IV: 8-12 meses, cáncer páncreas IV: 6-9 meses. CENTRO ONCOLOGÍA INMEDIATAMENTE: Terapia sistémica (quimioterapia, terapia dirigida, inmunoterapia), control síntomas (dolor, náuseas, fatiga), medidas paliativas (radiación metástasis individuales, stents para estrechamientos). Nueva esperanza: Inmunoterapia (éxito dramático en algunos cánceres - p. ej., melanoma: ¡tasa supervivencia 5 años de 10% a 50%!), medicina personalizada (secuenciación tumor → terapia correspondiente). Calidad vida es AHORA prioridad: Optimizar terapia dolor, atención psico-oncológica, servicios hospicio si necesario, crear directiva anticipada. ¡Tu tiempo es precioso - úsalo con tus seres queridos!",
    
    fr: "🚨 CRITIQUE : Cancer avancé/métastatique ! Vous avez tumeur stade IV (métastases distantes) ou cancer hautement agressif avec pronostic pauvre. Avec score <35/100 maladie est systémiquement répandue. Réalité : Stade IV signifie métastases dans autres organes (foie, poumons, os, cerveau). Plupart cancers ne sont PLUS guérissables à ce stade, mais traitables. Temps survie médian hautement variable : Cancer sein IV avec thérapie hormonale : 3-5 ans, cancer poumon IV : 8-12 mois, cancer pancréas IV : 6-9 mois. CENTRE ONCOLOGIE IMMÉDIATEMENT : Thérapie systémique (chimiothérapie, thérapie ciblée, immunothérapie), contrôle symptômes (douleur, nausées, fatigue), mesures palliatives (radiation métastases individuelles, stents pour rétrécissements). Nouvel espoir : Immunothérapie (succès dramatique dans certains cancers - p. ex., mélanome : taux survie 5 ans de 10% à 50% !), médecine personnalisée (séquençage tumeur → thérapie correspondante). Qualité vie est MAINTENANT priorité : Optimiser thérapie douleur, soins psycho-oncologiques, services hospice si besoin, créer directive anticipée. Votre temps est précieux - utilisez-le avec vos proches !"
  }
},

    diet: {
      excellent: {
      de: "🥗 Hervorragend! Deine Ernährung folgt mediterranen Prinzipien - viel Gemüse, Obst, Fisch, Olivenöl, Nüsse, Vollkorn, wenig verarbeitetes Fleisch und Zucker. Das ist die wissenschaftlich best-belegte Ernährung für Langlebigkeit. Die PREDIMED-Studie zeigte: Mediterrane Ernährung reduziert kardiovaskuläre Ereignisse um 30%, Schlaganfälle um 49%, Diabetes um 52%, kognitive Einbußen um 40%. Die Mechanik: Anti-inflammatorisch (chronische Entzündung = Basis aller Alterskrankheiten), antioxidativ (schützt Zellen vor Schäden), niedrig-glykämisch (stabiler Blutzucker), gefäßschützend (Olivenöl, Omega-3). Menschen mit mediterraner Ernährung leben 2-5 Jahre länger - nicht durch ein Lebensmittel, sondern durch das Muster. Um dabei zu bleiben: Mach es zur Gewohnheit (Olivenöl immer griffbereit, Nüsse als Snack vorbereitet), koche selbst (Kontrolle über Zutaten), genieße bewusst (mediterrane Ernährung ist keine Diät, es ist Genuss!). Jede Mahlzeit ist eine Investition in deine Zukunft!",
      en: "🥗 Excellent! Your diet follows Mediterranean principles - lots of vegetables, fruit, fish, olive oil, nuts, whole grains, little processed meat and sugar. This is the most scientifically proven diet for longevity. The PREDIMED study showed: Mediterranean diet reduces cardiovascular events by 30%, strokes by 49%, diabetes by 52%, cognitive decline by 40%. The mechanics: Anti-inflammatory (chronic inflammation = basis of all age-related diseases), antioxidative (protects cells from damage), low-glycemic (stable blood sugar), vascular-protective (olive oil, omega-3). People with Mediterranean diet live 2-5 years longer - not through one food, but through the pattern. To stay with it: Make it a habit (olive oil always accessible, nuts prepared as snacks), cook yourself (control over ingredients), enjoy consciously (Mediterranean diet is not a diet, it's pleasure!). Every meal is an investment in your future!",
      es: "🥗 ¡Excelente! Tu dieta sigue principios mediterráneos - muchas verduras, frutas, pescado, aceite de oliva, nueces, granos integrales, poca carne procesada y azúcar. Esta es la dieta científicamente más probada para longevidad. El estudio PREDIMED mostró: Dieta mediterránea reduce eventos cardiovasculares 30%, derrames 49%, diabetes 52%, deterioro cognitivo 40%. La mecánica: Anti-inflamatoria (inflamación crónica = base de todas enfermedades edad), antioxidante (protege células de daños), bajo-glicémica (azúcar en sangre estable), protectora vascular (aceite oliva, omega-3). Personas con dieta mediterránea viven 2-5 años más - no por un alimento, sino por el patrón. Para continuar: Hazlo hábito (aceite oliva siempre accesible, nueces preparadas como snacks), cocina tú mismo (control sobre ingredientes), disfruta conscientemente (¡dieta mediterránea no es dieta, es placer!). ¡Cada comida es inversión en tu futuro!",
      fr: "🥗 Excellent ! Votre alimentation suit principes méditerranéens - beaucoup légumes, fruits, poisson, huile d'olive, noix, grains entiers, peu viande transformée et sucre. C'est l'alimentation scientifiquement la plus prouvée pour longévité. L'étude PREDIMED a montré : Régime méditerranéen réduit événements cardiovasculaires de 30%, AVC de 49%, diabète de 52%, déclin cognitif de 40%. La mécanique : Anti-inflammatoire (inflammation chronique = base toutes maladies liées âge), antioxydant (protège cellules des dommages), bas-glycémique (glycémie stable), protecteur vasculaire (huile olive, oméga-3). Personnes avec régime méditerranéen vivent 2-5 ans de plus - pas par un aliment, mais par le modèle. Pour continuer : Faites-en habitude (huile olive toujours accessible, noix préparées comme en-cas), cuisinez vous-même (contrôle ingrédients), appréciez consciemment (régime méditerranéen n'est pas régime, c'est plaisir !). Chaque repas est investissement dans votre avenir !"
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
        de: "🍔 Deine Ernährung ist ein Risikofaktor. Zu viel verarbeitetes Essen, Zucker und ungesunde Fette können dich 3-5 Jahre Lebenszeit kosten und erhöhen dein Risiko für Herzinfarkt, Schlaganfall und Krebs. Radikal umstellen musst du nicht - kleine, konstante Änderungen bringen mehr als perfektionistische Diäten. Start simple: Ersetze eine ungesunde Mahlzeit pro Tag durch Gemüse, Vollkorn oder Hülsenfrüchte. Mediterrane Ernährung (Olivenöl, Fisch, Nüsse, viel Gemüse) ist wissenschaftlich die beste Wahl für ein langes Leben.",
    en: "🍔 Your diet is a risk factor. Too much processed food, sugar and unhealthy fats can cost you 3-5 years of life and increase your risk for heart attack, stroke and cancer. You don't need radical change - small, consistent changes beat perfectionist diets. Start simple: Replace one unhealthy meal per day with vegetables, whole grains or legumes. Mediterranean diet (olive oil, fish, nuts, lots of vegetables) is scientifically the best choice for longevity.",
    es: "🍔 Tu dieta es un factor de riesgo. Demasiada comida procesada, azúcar y grasas no saludables pueden costarte 3-5 años de vida y aumentar tu riesgo de infarto, derrame cerebral y cáncer. No necesitas cambio radical - cambios pequeños y consistentes superan las dietas perfeccionistas. Empieza simple: Reemplaza una comida no saludable al día con vegetales, granos integrales o legumbres. La dieta mediterránea (aceite de oliva, pescado, nueces, muchas verduras) es científicamente la mejor opción para longevidad.",
    fr: "🍔 Votre alimentation est un facteur de risque. Trop de nourriture transformée, de sucre et de graisses malsaines peuvent vous coûter 3-5 ans de vie et augmenter votre risque d'infarctus, d'AVC et de cancer. Vous n'avez pas besoin de changement radical - de petits changements constants battent les régimes perfectionnistes. Commencez simple : Remplacez un repas malsain par jour par des légumes, des céréales complètes ou des légumineuses. Le régime méditerranéen (huile d'olive, poisson, noix, beaucoup de légumes) est scientifiquement le meilleur choix pour la longévité."
      }
    },
    fitness: {
      excellent: {
        de: "🏃 Hervorragend! Du bewegst dich regelmäßig und ausreichend (>150 Min/Woche moderate oder >75 Min intensive Aktivität) - das ist DER Gamechanger für Langlebigkeit. Bewegung ist die wirksamste 'Pille' die es gibt: Reduziert Gesamt-Mortalität um 30-40%, Herz-Kreislauf-Tod um 35%, Krebs-Tod um 20%, Demenz um 30%, Diabetes um 40%. Die Mechanik: Verbessert Insulin-Sensitivität, senkt Entzündungen, stärkt Herz und Gefäße, produziert Nervenwachstums-Faktoren (BDNF = Dünger fürs Gehirn!), erhält Muskelmasse (Muskel = metabolisches Organ). Menschen die sich regelmäßig bewegen leben 3-7 Jahre länger und vor allem: gesünder (compression of morbidity). Das Beste: Es ist nie zu spät - selbst mit 60+ zu starten bringt massive Vorteile. Um dabei zu bleiben: Finde Aktivitäten die du liebst (kein Zwang!), variiere (Kraft + Cardio + Beweglichkeit), mache es sozial (Gruppen-Motivation), integriere Bewegung in Alltag (Treppen, Rad fahren). Dein Körper ist gebaut für Bewegung - nutze ihn!",
        en: "🏃 Excellent! You exercise regularly and sufficiently (>150 min/week moderate or >75 min vigorous activity) - this is THE game changer for longevity. Exercise is the most effective 'pill' there is: Reduces all-cause mortality by 30-40%, cardiovascular death by 35%, cancer death by 20%, dementia by 30%, diabetes by 40%. The mechanics: Improves insulin sensitivity, reduces inflammation, strengthens heart and vessels, produces nerve growth factors (BDNF = fertilizer for brain!), maintains muscle mass (muscle = metabolic organ). People who exercise regularly live 3-7 years longer and above all: healthier (compression of morbidity). The best part: It's never too late - even starting at 60+ brings massive benefits. To stay with it: Find activities you love (no force!), vary (strength + cardio + flexibility), make it social (group motivation), integrate movement into daily life (stairs, cycling). Your body is built for movement - use it!",
        es: "🏃 ¡Excelente! Te mueves regularmente y suficientemente (>150 min/semana moderado o >75 min intenso) - esto es EL cambio de juego para longevidad. Ejercicio es la 'píldora' más efectiva que existe: Reduce mortalidad total 30-40%, muerte cardiovascular 35%, muerte por cáncer 20%, demencia 30%, diabetes 40%. La mecánica: Mejora sensibilidad insulina, reduce inflamación, fortalece corazón y vasos, produce factores crecimiento nervioso (¡BDNF = fertilizante para cerebro!), mantiene masa muscular (músculo = órgano metabólico). Personas que hacen ejercicio regularmente viven 3-7 años más y sobre todo: más saludables (compresión morbilidad). Lo mejor: Nunca es tarde - incluso empezar a 60+ trae beneficios masivos. Para continuar: Encuentra actividades que amas (¡sin forzar!), varía (fuerza + cardio + flexibilidad), hazlo social (motivación grupal), integra movimiento en vida diaria (escaleras, bicicleta). ¡Tu cuerpo está hecho para movimiento - úsalo!",
        fr: "🏃 Excellent ! Vous bougez régulièrement et suffisamment (>150 min/semaine modéré ou >75 min intense) - c'est LE changement de jeu pour longévité. Exercice est la 'pilule' la plus efficace qui existe : Réduit mortalité totale de 30-40%, mort cardiovasculaire de 35%, mort par cancer de 20%, démence de 30%, diabète de 40%. La mécanique : Améliore sensibilité insuline, réduit inflammation, renforce cœur et vaisseaux, produit facteurs croissance nerveuse (BDNF = engrais pour cerveau !), maintient masse musculaire (muscle = organe métabolique). Personnes qui font exercice régulièrement vivent 3-7 ans de plus et surtout : plus sainement (compression morbidité). Le meilleur : Jamais trop tard - même commencer à 60+ apporte bénéfices massifs. Pour continuer : Trouvez activités que vous aimez (pas de force !), variez (force + cardio + flexibilité), rendez-le social (motivation groupe), intégrez mouvement dans vie quotidienne (escaliers, vélo). Votre corps est fait pour mouvement - utilisez-le !"
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
        de: "🛋️ Bewegungsmangel ist ein stiller Killer. Wer dauerhaft inaktiv lebt, verliert 3-7 Jahre Lebenserwartung und riskiert Herzkrankheiten, Diabetes und Depressionen. Dein Körper ist für Bewegung gemacht - jede Minute Aktivität zählt. Du brauchst kein Fitnessstudio: 30 Minuten zügiges Gehen täglich reicht für den Anfang. Die ersten 2 Wochen sind hart, dann wird es zur Gewohnheit. Tipp: Mach es dir leicht - wähle eine Aktivität die dir Spaß macht, nicht die 'effektivste'.",
        en: "🛋️ Lack of movement is a silent killer. Permanent inactivity costs you 3-7 years of life expectancy and risks heart disease, diabetes and depression. Your body is made for movement - every minute of activity counts. You don't need a gym: 30 minutes of brisk walking daily is enough to start. First 2 weeks are hard, then it becomes habit. Tip: Make it easy - choose an activity you enjoy, not the 'most effective' one.",
        es: "🛋️ La falta de movimiento es un asesino silencioso. La inactividad permanente te cuesta 3-7 años de esperanza de vida y riesga enfermedades cardíacas, diabetes y depresión. Tu cuerpo está hecho para el movimiento - cada minuto de actividad cuenta. No necesitas un gimnasio: 30 minutos de caminata rápida diaria es suficiente para empezar. Las primeras 2 semanas son duras, luego se convierte en hábito. Consejo: Hazlo fácil - elige una actividad que disfrutes, no la 'más efectiva'.",
        fr: "🛋️ Le manque de mouvement est un tueur silencieux. L'inactivité permanente vous coûte 3-7 ans d'espérance de vie et risque les maladies cardiaques, le diabète et la dépression. Votre corps est fait pour le mouvement - chaque minute d'activité compte. Vous n'avez pas besoin d'une salle de sport : 30 minutes de marche rapide par jour suffisent pour commencer. Les 2 premières semaines sont dures, puis ça devient une habitude. Conseil : Facilitez-vous la vie - choisissez une activité que vous aimez, pas la 'plus efficace'."
      }   
    },
    
    sleep: {
      excellent: {
        de: "😴 Hervorragend! Du schläfst 7-8 Stunden pro Nacht und wachst erholt auf - das ist die optimale Schlafdauer für Langlebigkeit (U-Kurve: zu wenig UND zu viel erhöht Mortalität). Guter Schlaf ist kein Luxus, sondern biologische Notwendigkeit. Die Wissenschaft: 7-8h Schlaf minimiert Gesamt-Mortalität, Herz-Kreislauf-Risiko (-45% vs. <6h), Diabetes-Risiko (-40%), Demenz-Risiko (-30%). Was passiert im Schlaf: Gehirn 'entgiftet' (Glymphatisches System spült Abfallstoffe wie Beta-Amyloid raus!), Immunsystem regeneriert (Killerzellen werden produziert), Hormone regulieren (Wachstumshormon, Cortisol, Insulin), Gedächtnis konsolidiert (Lernen findet nachts statt). Menschen mit konsistent gutem Schlaf leben 4-6 Jahre länger. Um dabei zu bleiben: Feste Schlafzeiten (auch am Wochenende!), dunkles, kühles Zimmer (16-18°C optimal), keine Bildschirme 1h vor Schlaf (Blaulicht unterdrückt Melatonin), kein Alkohol als Schlafhilfe (zerstört Tiefschlaf!). Schlaf ist dein Reset-Knopf - drück ihn jeden Tag!",
        en: "😴 Excellent! You sleep 7-8 hours per night and wake refreshed - this is the optimal sleep duration for longevity (U-curve: too little AND too much increases mortality). Good sleep is not luxury, but biological necessity. The science: 7-8h sleep minimizes all-cause mortality, cardiovascular risk (-45% vs. <6h), diabetes risk (-40%), dementia risk (-30%). What happens during sleep: Brain 'detoxifies' (glymphatic system flushes waste like beta-amyloid!), immune system regenerates (killer cells are produced), hormones regulate (growth hormone, cortisol, insulin), memory consolidates (learning happens at night). People with consistently good sleep live 4-6 years longer. To stay with it: Fixed sleep times (even weekends!), dark, cool room (16-18°C optimal), no screens 1h before sleep (blue light suppresses melatonin), no alcohol as sleep aid (destroys deep sleep!). Sleep is your reset button - press it daily!",
        es: "😴 ¡Excelente! Duermes 7-8 horas por noche y despiertas descansado - esta es la duración óptima de sueño para longevidad (curva U: muy poco Y mucho aumenta mortalidad). Buen sueño no es lujo, sino necesidad biológica. La ciencia: 7-8h sueño minimiza mortalidad total, riesgo cardiovascular (-45% vs. <6h), riesgo diabetes (-40%), riesgo demencia (-30%). Qué pasa durante sueño: Cerebro 'desintoxica' (¡sistema glinfático elimina desechos como beta-amiloide!), sistema inmune regenera (células asesinas se producen), hormonas regulan (hormona crecimiento, cortisol, insulina), memoria consolida (aprendizaje ocurre de noche). Personas con buen sueño consistente viven 4-6 años más. Para continuar: Horarios fijos sueño (¡incluso fines semana!), habitación oscura, fresca (16-18°C óptimo), sin pantallas 1h antes dormir (luz azul suprime melatonina), sin alcohol como ayuda dormir (¡destruye sueño profundo!). Sueño es tu botón reset - ¡presiónalo diariamente!",
        fr: "😴 Excellent ! Vous dormez 7-8 heures par nuit et vous réveillez reposé - c'est la durée optimale de sommeil pour longévité (courbe U : trop peu ET trop augmente mortalité). Bon sommeil n'est pas luxe, mais nécessité biologique. La science : 7-8h sommeil minimise mortalité totale, risque cardiovasculaire (-45% vs. <6h), risque diabète (-40%), risque démence (-30%). Ce qui se passe pendant sommeil : Cerveau 'détoxifie' (système glymphatique évacue déchets comme bêta-amyloïde !), système immunitaire régénère (cellules tueuses sont produites), hormones régulent (hormone croissance, cortisol, insuline), mémoire consolide (apprentissage se fait la nuit). Personnes avec bon sommeil consistent vivent 4-6 ans de plus. Pour continuer : Horaires fixes sommeil (même week-ends !), chambre sombre, fraîche (16-18°C optimal), pas d'écrans 1h avant dormir (lumière bleue supprime mélatonine), pas d'alcool comme aide sommeil (détruit sommeil profond !). Sommeil est votre bouton reset - appuyez-le quotidiennement !"
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
        de: "😴 KRITISCH: Chronischer Schlafmangel ist brandgefährlich. Wer dauerhaft schlecht schläft, erhöht sein Risiko für Herzinfarkt, Alzheimer und Depression - und verliert 2-5 Jahre Lebenserwartung. Dein Gehirn braucht Schlaf um zu 'entgiften', dein Immunsystem um sich zu regenerieren. Priorität #1: Feste Schlafzeiten etablieren (auch am Wochenende). Priorität #2: 1 Stunde vor dem Schlafen alle Bildschirme aus. Wenn das nicht hilft: Sprich mit einem Arzt - Schlafstörungen sind behandelbar und du verdienst erholsamen Schlaf.",
        en: "😴 CRITICAL: Chronic sleep deprivation is extremely dangerous. Permanent poor sleep increases your risk for heart attack, Alzheimer's and depression - costing you 2-5 years of life expectancy. Your brain needs sleep to 'detoxify', your immune system to regenerate. Priority #1: Establish fixed sleep times (even on weekends). Priority #2: All screens off 1 hour before bed. If that doesn't help: Talk to a doctor - sleep disorders are treatable and you deserve restful sleep.",
        es: "😴 CRÍTICO: La privación crónica de sueño es extremadamente peligrosa. El mal sueño permanente aumenta tu riesgo de infarto, Alzheimer y depresión - costándote 2-5 años de esperanza de vida. Tu cerebro necesita sueño para 'desintoxicarse', tu sistema inmune para regenerarse. Prioridad #1: Establecer horarios fijos de sueño (incluso los fines de semana). Prioridad #2: Todas las pantallas apagadas 1 hora antes de dormir. Si eso no ayuda: Habla con un médico - los trastornos del sueño son tratables y mereces un sueño reparador.",
        fr: "😴 CRITIQUE : La privation chronique de sommeil est extrêmement dangereuse. Un mauvais sommeil permanent augmente votre risque d'infarctus, d'Alzheimer et de dépression - vous coûtant 2-5 ans d'espérance de vie. Votre cerveau a besoin de sommeil pour se 'détoxifier', votre système immunitaire pour se régénérer. Priorité #1 : Établir des heures de sommeil fixes (même le week-end). Priorité #2 : Tous les écrans éteints 1 heure avant de dormir. Si ça n'aide pas : Parlez à un médecin - les troubles du sommeil sont traitables et vous méritez un sommeil réparateur."
      }
    },
    
    mental: {
      excellent: {
        de: "🧠 Hervorragend! Deine psychische Gesundheit ist stabil - keine Depression, keine Angststörung, emotionale Ausgeglichenheit. Das ist fundamentaler als die meisten denken: Psychische Gesundheit ist genauso wichtig wie körperliche. Die Zahlen: Depression erhöht Gesamt-Mortalität um 50%, Herz-Kreislauf-Risiko um 60% (chronischer Stress = Entzündung = Gefäßschäden). Menschen mit stabiler psychischer Gesundheit leben 7-10 Jahre länger und vor allem: lebenswerter. Die Mechanik: Niedrige Cortisol-Level (chronisch hohes Cortisol schädigt Hippocampus), starkes Immunsystem (Psyche-Immun-Verbindung!), bessere Gesundheits-Verhaltensweisen (wer psychisch stabil ist, pflegt sich besser), soziale Verbindungen (psychische Gesundheit = soziale Gesundheit). Um dabei zu bleiben: Pflege soziale Kontakte (Einsamkeit ist toxisch), bewege dich regelmäßig (Sport = natürliches Antidepressivum), schlafe ausreichend, etabliere Stress-Management (Meditation, Atemübungen, Natur), suche Hilfe bei ersten Anzeichen (Prävention > Behandlung). Deine mentale Gesundheit ist dein Fundament - schütze sie!",
        en: "🧠 Excellent! Your mental health is stable - no depression, no anxiety disorder, emotional balance. This is more fundamental than most think: Mental health is as important as physical health. The numbers: Depression increases all-cause mortality by 50%, cardiovascular risk by 60% (chronic stress = inflammation = vascular damage). People with stable mental health live 7-10 years longer and above all: more worth living. The mechanics: Low cortisol levels (chronically high cortisol damages hippocampus), strong immune system (psyche-immune connection!), better health behaviors (who is mentally stable takes better care), social connections (mental health = social health). To stay with it: Maintain social contacts (loneliness is toxic), exercise regularly (sport = natural antidepressant), sleep sufficiently, establish stress management (meditation, breathing exercises, nature), seek help at first signs (prevention > treatment). Your mental health is your foundation - protect it!",
        es: "🧠 ¡Excelente! Tu salud mental es estable - sin depresión, sin trastorno ansiedad, equilibrio emocional. Esto es más fundamental de lo que la mayoría piensa: Salud mental es tan importante como salud física. Los números: Depresión aumenta mortalidad total 50%, riesgo cardiovascular 60% (estrés crónico = inflamación = daño vascular). Personas con salud mental estable viven 7-10 años más y sobre todo: más dignos de vivir. La mecánica: Niveles cortisol bajos (cortisol crónicamente alto daña hipocampo), sistema inmune fuerte (¡conexión psique-inmune!), mejores comportamientos salud (quien está mentalmente estable se cuida mejor), conexiones sociales (salud mental = salud social). Para continuar: Mantén contactos sociales (soledad es tóxica), ejercicio regularmente (deporte = antidepresivo natural), duerme suficiente, establece manejo estrés (meditación, ejercicios respiración, naturaleza), busca ayuda a primeros signos (prevención > tratamiento). Tu salud mental es tu fundamento - ¡protégela!",
        fr: "🧠 Excellent ! Votre santé mentale est stable - pas de dépression, pas de trouble anxieux, équilibre émotionnel. C'est plus fondamental que la plupart pensent : Santé mentale est aussi importante que santé physique. Les chiffres : Dépression augmente mortalité totale de 50%, risque cardiovasculaire de 60% (stress chronique = inflammation = dommages vasculaires). Personnes avec santé mentale stable vivent 7-10 ans de plus et surtout : plus digne d'être vécue. La mécanique : Niveaux cortisol bas (cortisol chroniquement élevé endommage hippocampe), système immunitaire fort (connexion psyché-immun !), meilleurs comportements santé (qui est mentalement stable prend mieux soin), connexions sociales (santé mentale = santé sociale). Pour continuer : Maintenez contacts sociaux (solitude est toxique), exercice régulièrement (sport = antidépresseur naturel), dormez suffisamment, établissez gestion stress (méditation, exercices respiration, nature), cherchez aide aux premiers signes (prévention > traitement). Votre santé mentale est votre fondation - protégez-la !"
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
        de: "🧠 Deine kognitive Gesundheit braucht Aufmerksamkeit. Depression, Angstzustände oder frühe Demenz-Anzeichen sind nicht 'normal' und kosten dich 2-5 Jahre Lebenserwartung - plus Lebensqualität. Psychische Gesundheit IST körperliche Gesundheit. Wenn du dich dauerhaft niedergeschlagen fühlst, keine Freude mehr empfindest oder Gedächtnisprobleme hast: Sprich mit einem Arzt. Depression ist behandelbar (Therapie + ggf. Medikamente). Prävention: Geistig aktiv bleiben (Lesen, Lernen, Rätsel), soziale Kontakte pflegen, Bewegung (ja, auch fürs Gehirn!). Dein Gehirn ist plastisch - es ist nie zu spät für Verbesserung.",
        en: "🧠 Your cognitive health needs attention. Depression, anxiety or early dementia signs aren't 'normal' and cost you 2-5 years of life expectancy - plus quality of life. Mental health IS physical health. If you feel persistently down, experience no joy or have memory problems: Talk to a doctor. Depression is treatable (therapy + possibly medication). Prevention: Stay mentally active (reading, learning, puzzles), maintain social contacts, exercise (yes, also for the brain!). Your brain is plastic - it's never too late for improvement.",
        es: "🧠 Tu salud cognitiva necesita atención. Depresión, ansiedad o señales tempranas de demencia no son 'normales' y te cuestan 2-5 años de esperanza de vida - más calidad de vida. La salud mental ES salud física. Si te sientes persistentemente deprimido, no experimentas alegría o tienes problemas de memoria: Habla con un médico. La depresión es tratable (terapia + posiblemente medicación). Prevención: Mantente mentalmente activo (lectura, aprendizaje, rompecabezas), mantén contactos sociales, ejercicio (¡sí, también para el cerebro!). Tu cerebro es plástico - nunca es tarde para mejorar.",
        fr: "🧠 Votre santé cognitive nécessite de l'attention. La dépression, l'anxiété ou les signes précoces de démence ne sont pas 'normaux' et vous coûtent 2-5 ans d'espérance de vie - plus la qualité de vie. La santé mentale EST la santé physique. Si vous vous sentez constamment déprimé, n'éprouvez aucune joie ou avez des problèmes de mémoire : Parlez à un médecin. La dépression est traitable (thérapie + éventuellement médicaments). Prévention : Restez mentalement actif (lecture, apprentissage, énigmes), maintenez les contacts sociaux, exercice (oui, aussi pour le cerveau !). Votre cerveau est plastique - il n'est jamais trop tard pour s'améliorer."
  }
    },
    
    social: {
      excellent: {
        de: "👥 Hervorragend! Du hast starke soziale Bindungen - regelmäßige Kontakte, tiefe Beziehungen, Gemeinschaftsgefühl. Das ist einer der mächtigsten Langlebigkeits-Faktoren überhaupt! Die Wissenschaft ist eindeutig: Starke soziale Verbindungen reduzieren Gesamt-Mortalität um 50% - das ist vergleichbar mit dem Effekt von Nicht-Rauchen! Menschen mit gutem sozialen Netz leben 7-15 Jahre länger. Die berühmten 'Blue Zones' (Regionen mit den meisten Hundertjährigen) haben alle eines gemeein: starke soziale Strukturen. Die Mechanik: Soziale Isolation = chronischer Stress = Cortisol ↑ = Entzündung ↑ = Krankheit. Umgekehrt: Soziale Verbindungen = Oxytocin ↑ = Stress ↓ = Immunsystem ↑. Einsamkeit ist so schädlich wie 15 Zigaretten/Tag (Studie: Holt-Lunstad, 2015). Um dabei zu bleiben: Investiere Zeit in Beziehungen (Qualität > Quantität), sei verlässlich präsent, engagiere dich in Gemeinschaften (Vereine, Ehrenamt), pflege intergenerationale Kontakte (Alt + Jung = gegenseitiger Nutzen). Menschen sind soziale Wesen - lebe danach!",
        en: "👥 Excellent! You have strong social bonds - regular contacts, deep relationships, sense of community. This is one of the most powerful longevity factors ever! The science is clear: Strong social connections reduce all-cause mortality by 50% - comparable to the effect of not smoking! People with good social networks live 7-15 years longer. The famous 'Blue Zones' (regions with most centenarians) all share one thing: strong social structures. The mechanics: Social isolation = chronic stress = cortisol ↑ = inflammation ↑ = disease. Conversely: Social connections = oxytocin ↑ = stress ↓ = immune system ↑. Loneliness is as harmful as 15 cigarettes/day (Study: Holt-Lunstad, 2015). To stay with it: Invest time in relationships (quality > quantity), be reliably present, engage in communities (clubs, volunteering), maintain intergenerational contacts (old + young = mutual benefit). Humans are social beings - live accordingly!",
        es: "👥 ¡Excelente! Tienes vínculos sociales fuertes - contactos regulares, relaciones profundas, sentido comunidad. ¡Este es uno de los factores longevidad más poderosos! La ciencia es clara: Conexiones sociales fuertes reducen mortalidad total 50% - ¡comparable al efecto de no fumar! Personas con buena red social viven 7-15 años más. Las famosas 'Zonas Azules' (regiones con más centenarios) todas comparten una cosa: estructuras sociales fuertes. La mecánica: Aislamiento social = estrés crónico = cortisol ↑ = inflamación ↑ = enfermedad. Al revés: Conexiones sociales = oxitocina ↑ = estrés ↓ = sistema inmune ↑. Soledad es tan dañina como 15 cigarrillos/día (Estudio: Holt-Lunstad, 2015). Para continuar: Invierte tiempo en relaciones (calidad > cantidad), sé presente confiablemente, participa en comunidades (clubes, voluntariado), mantén contactos intergeneracionales (viejo + joven = beneficio mutuo). Humanos son seres sociales - ¡vive así!",
        fr: "👥 Excellent ! Vous avez liens sociaux forts - contacts réguliers, relations profondes, sentiment communauté. C'est l'un des facteurs longévité les plus puissants ! La science est claire : Connexions sociales fortes réduisent mortalité totale de 50% - comparable à effet de ne pas fumer ! Personnes avec bon réseau social vivent 7-15 ans de plus. Les fameuses 'Zones Bleues' (régions avec plus de centenaires) partagent toutes une chose : structures sociales fortes. La mécanique : Isolement social = stress chronique = cortisol ↑ = inflammation ↑ = maladie. Inversement : Connexions sociales = ocytocine ↑ = stress ↓ = système immunitaire ↑. Solitude est aussi nocive que 15 cigarettes/jour (Étude : Holt-Lunstad, 2015). Pour continuer : Investissez temps dans relations (qualité > quantité), soyez présent de manière fiable, engagez-vous dans communautés (clubs, bénévolat), maintenez contacts intergénérationnels (vieux + jeune = bénéfice mutuel). Humains sont êtres sociaux - vivez en conséquence !"
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
        de: "💔 Soziale Isolation ist so gefährlich wie 15 Zigaretten täglich. Menschen ohne enge Beziehungen sterben im Schnitt 3-5 Jahre früher und haben ein deutlich höheres Risiko für Depression, Demenz und Herzkrankheiten. Du bist ein soziales Wesen - das ist keine Schwäche sondern Biologie. Erster Schritt: Reaktiviere einen alten Kontakt (WhatsApp reicht für den Anfang). Zweiter Schritt: Regelmäßigkeit schlägt Intensität - lieber einmal die Woche kurz telefonieren als einmal im Jahr lange Treffen. Dritter Schritt: Erwäge Gruppen/Vereine - gemeinsame Aktivitäten erleichtern Kontakte.",
    en: "💔 Social isolation is as dangerous as smoking 15 cigarettes daily. People without close relationships die on average 3-5 years earlier and have significantly higher risk for depression, dementia and heart disease. You are a social being - that's not weakness but biology. First step: Reactivate an old contact (WhatsApp is enough to start). Second step: Regularity beats intensity - better to call briefly once a week than long meetings once a year. Third step: Consider groups/clubs - shared activities make contacts easier.",
    es: "💔 El aislamiento social es tan peligroso como fumar 15 cigarrillos diarios. Las personas sin relaciones cercanas mueren en promedio 3-5 años antes y tienen riesgo significativamente mayor de depresión, demencia y enfermedades cardíacas. Eres un ser social - eso no es debilidad sino biología. Primer paso: Reactiva un contacto antiguo (WhatsApp es suficiente para empezar). Segundo paso: La regularidad supera la intensidad - mejor llamar brevemente una vez a la semana que reuniones largas una vez al año. Tercer paso: Considera grupos/clubes - las actividades compartidas facilitan los contactos.",
    fr: "💔 L'isolement social est aussi dangereux que fumer 15 cigarettes par jour. Les personnes sans relations proches meurent en moyenne 3-5 ans plus tôt et ont un risque significativement plus élevé de dépression, de démence et de maladies cardiaques. Vous êtes un être social - ce n'est pas une faiblesse mais de la biologie. Première étape : Réactivez un ancien contact (WhatsApp suffit pour commencer). Deuxième étape : La régularité bat l'intensité - mieux vaut appeler brièvement une fois par semaine que de longues réunions une fois par an. Troisième étape : Envisagez des groupes/clubs - les activités partagées facilitent les contacts."
  }
    },
    
    stress: {
      excellent: {
        de: "😰 Hervorragend! Du managst Stress gut und hast ausreichend Erholung - dein Nervensystem ist im Gleichgewicht (Sympathikus ↔ Parasympathikus). Das ist essentiell für Langlebigkeit: Chronischer Stress ist ein stiller Killer. Die Wissenschaft: Chronisch hohes Cortisol (Stress-Hormon) erhöht Herz-Kreislauf-Risiko um 40%, Schlaganfall um 50%, beschleunigt Zell-Alterung (Telomere verkürzen sich!), schwächt Immunsystem, fördert Entzündungen. Menschen mit gutem Stress-Management leben 5-8 Jahre länger und bleiben kognitiv fitter. Die Mechanik: Stress → Cortisol ↑ → Blutdruck ↑ → Gefäßschäden → Entzündung → Krankheit. Gegenmittel: Erholung aktiviert Parasympathikus (Ruhe-Nerv) → Regeneration. Um dabei zu bleiben: Etabliere tägliche Entspannungs-Rituale (10 Min Meditation/Atemübungen reichen!), Natur-Zeit (nachweislich stressreduzierend), ausreichend Schlaf (Schlafmangel = Stress-Verstärker), Bewegung (baut Cortisol ab), setze Grenzen (Nein sagen lernen!), pflege Hobbies. Stress ist unvermeidbar - aber wie du damit umgehst entscheidet!",
        en: "😰 Excellent! You manage stress well and have sufficient recovery - your nervous system is balanced (sympathetic ↔ parasympathetic). This is essential for longevity: Chronic stress is a silent killer. The science: Chronically high cortisol (stress hormone) increases cardiovascular risk by 40%, stroke by 50%, accelerates cell aging (telomeres shorten!), weakens immune system, promotes inflammation. People with good stress management live 5-8 years longer and stay cognitively fitter. The mechanics: Stress → cortisol ↑ → blood pressure ↑ → vascular damage → inflammation → disease. Antidote: Recovery activates parasympathetic (rest nerve) → regeneration. To stay with it: Establish daily relaxation rituals (10 min meditation/breathing exercises suffice!), nature time (proven stress-reducing), sufficient sleep (sleep deprivation = stress amplifier), movement (breaks down cortisol), set boundaries (learn to say no!), maintain hobbies. Stress is unavoidable - but how you handle it decides!",
        es: "😰 ¡Excelente! Manejas estrés bien y tienes suficiente recuperación - tu sistema nervioso está equilibrado (simpático ↔ parasimpático). Esto es esencial para longevidad: Estrés crónico es asesino silencioso. La ciencia: Cortisol crónicamente alto (hormona estrés) aumenta riesgo cardiovascular 40%, derrame 50%, acelera envejecimiento celular (¡telómeros se acortan!), debilita sistema inmune, promueve inflamación. Personas con buen manejo estrés viven 5-8 años más y permanecen cognitivamente más aptos. La mecánica: Estrés → cortisol ↑ → presión arterial ↑ → daño vascular → inflamación → enfermedad. Antídoto: Recuperación activa parasimpático (nervio descanso) → regeneración. Para continuar: Establece rituales relajación diarios (¡10 min meditación/ejercicios respiración bastan!), tiempo naturaleza (probadamente reduce estrés), sueño suficiente (falta sueño = amplificador estrés), movimiento (descompone cortisol), establece límites (¡aprende decir no!), mantén hobbies. Estrés es inevitable - ¡pero cómo lo manejas decide!",
        fr: "😰 Excellent ! Vous gérez bien stress et avez suffisamment récupération - votre système nerveux est équilibré (sympathique ↔ parasympathique). C'est essentiel pour longévité : Stress chronique est tueur silencieux. La science : Cortisol chroniquement élevé (hormone stress) augmente risque cardiovasculaire de 40%, AVC de 50%, accélère vieillissement cellulaire (télomères raccourcissent !), affaiblit système immunitaire, favorise inflammation. Personnes avec bonne gestion stress vivent 5-8 ans de plus et restent cognitivement plus aptes. La mécanique : Stress → cortisol ↑ → tension artérielle ↑ → dommages vasculaires → inflammation → maladie. Antidote : Récupération active parasympathique (nerf repos) → régénération. Pour continuer : Établissez rituels relaxation quotidiens (10 min méditation/exercices respiration suffisent !), temps nature (prouvé réducteur stress), sommeil suffisant (manque sommeil = amplificateur stress), mouvement (décompose cortisol), fixez limites (apprenez dire non !), maintenez hobbies. Stress est inévitable - mais comment vous le gérez décide !"
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
        de: "🔥 Chronischer Stress tötet langsam aber sicher. Dauerstress erhöht dein Risiko für Herzinfarkt um 40%, schwächt dein Immunsystem und kann dich 2-4 Jahre Lebenszeit kosten. Das ist keine Schwäche - das ist Biologie. Dein Körper ist nicht für permanenten Alarmzustand gemacht. Sofort-Tipp: 5 Minuten tiefes Atmen täglich (wirklich nur 5 Minuten!) senkt nachweislich Cortisol. Langfristig: Identifiziere deine größten Stressoren und ändere was du ändern kannst. Was du nicht ändern kannst - lerne damit umzugehen (Therapie ist keine Schande).",
    en: "🔥 Chronic stress kills slowly but surely. Permanent stress increases your heart attack risk by 40%, weakens your immune system and can cost you 2-4 years of life. This isn't weakness - it's biology. Your body isn't made for permanent alarm state. Immediate tip: 5 minutes of deep breathing daily (really just 5 minutes!) demonstrably lowers cortisol. Long-term: Identify your biggest stressors and change what you can change. What you can't change - learn to cope with it (therapy isn't shameful).",
    es: "🔥 El estrés crónico mata lenta pero seguramente. El estrés permanente aumenta tu riesgo de infarto en 40%, debilita tu sistema inmune y puede costarte 2-4 años de vida. Esto no es debilidad - es biología. Tu cuerpo no está hecho para estado de alarma permanente. Consejo inmediato: 5 minutos de respiración profunda diaria (¡realmente solo 5 minutos!) reduce demostrablemente el cortisol. A largo plazo: Identifica tus mayores estresores y cambia lo que puedas cambiar. Lo que no puedes cambiar - aprende a manejarlo (la terapia no es vergonzosa).",
    fr: "🔥 Le stress chronique tue lentement mais sûrement. Le stress permanent augmente votre risque d'infarctus de 40%, affaiblit votre système immunitaire et peut vous coûter 2-4 ans de vie. Ce n'est pas une faiblesse - c'est de la biologie. Votre corps n'est pas fait pour un état d'alarme permanent. Conseil immédiat : 5 minutes de respiration profonde par jour (vraiment juste 5 minutes !) abaisse démontrablement le cortisol. À long terme : Identifiez vos plus grands facteurs de stress et changez ce que vous pouvez changer. Ce que vous ne pouvez pas changer - apprenez à y faire face (la thérapie n'est pas une honte)."
  }
    },
    
    frailty: {
       excellent: {
          de: "🚶 Hervorragend! Du bist vollständig selbstständig und funktionell fit - keine ADL/IADL-Einschränkungen (Activities of Daily Living / Instrumental Activities). Das ist der beste Prädiktor für Langlebigkeit im Alter! Funktionelle Unabhängigkeit bedeutet: Du kannst dich selbst versorgen, bist mobil, kognitiv fit. Die Wissenschaft: Menschen mit vollständiger funktioneller Kapazität leben nicht nur länger, sondern vor allem gesünder ('compression of morbidity' - Krankheit wird ans Lebensende komprimiert statt Jahre zu leiden). Der Unterschied: 10+ Jahre mehr gesunde Lebensjahre! Die Mechanik: Funktionelle Fitness = muskuläre Kraft + Balance + Kognition + Ausdauer. Dies verhindert Stürze (Hauptursache für Pflegebedürftigkeit!), erhält Selbstständigkeit, schützt Kognition. Um dabei zu bleiben: Krafttraining 2x/Woche (Muskel = Anti-Aging!), Balance-Übungen (Einbeinstand, Tai Chi), bleib geistig aktiv (Lernen hält jung), sozial engagiert, achte auf Sinne (Sehen/Hören = Sturzprävention). Deine Selbstständigkeit ist dein größtes Gut - erhalte sie!",
          en: "🚶 Excellent! You are fully independent and functionally fit - no ADL/IADL limitations (Activities of Daily Living / Instrumental Activities). This is the best predictor for longevity in old age! Functional independence means: You can take care of yourself, are mobile, cognitively fit. The science: People with full functional capacity not only live longer, but especially healthier ('compression of morbidity' - disease is compressed to end of life instead of years of suffering). The difference: 10+ years more healthy life years! The mechanics: Functional fitness = muscular strength + balance + cognition + endurance. This prevents falls (main cause of need for care!), maintains independence, protects cognition. To stay with it: Strength training 2x/week (muscle = anti-aging!), balance exercises (single-leg stand, Tai Chi), stay mentally active (learning keeps young), socially engaged, watch senses (sight/hearing = fall prevention). Your independence is your greatest asset - preserve it!",
          es: "🚶 ¡Excelente! Eres completamente independiente y funcionalmente apto - sin limitaciones ADL/IADL (Actividades Vida Diaria / Actividades Instrumentales). ¡Este es el mejor predictor para longevidad en edad avanzada! Independencia funcional significa: Puedes cuidarte, eres móvil, cognitivamente apto. La ciencia: Personas con capacidad funcional completa no solo viven más, sino especialmente más saludables ('compresión morbilidad' - enfermedad se comprime al final vida en vez años sufriendo). ¡La diferencia: 10+ años más de vida saludable! La mecánica: Aptitud funcional = fuerza muscular + equilibrio + cognición + resistencia. Esto previene caídas (¡principal causa necesidad cuidados!), mantiene independencia, protege cognición. Para continuar: Entrenamiento fuerza 2x/semana (¡músculo = anti-envejecimiento!), ejercicios equilibrio (parado una pierna, Tai Chi), mantente mentalmente activo (aprender mantiene joven), socialmente comprometido, cuida sentidos (vista/oído = prevención caídas). Tu independencia es tu mayor bien - ¡presérvala!",
          fr: "🚶 Excellent ! Vous êtes complètement autonome et fonctionnellement apte - pas de limitations ADL/IADL (Activités Vie Quotidienne / Activités Instrumentales). C'est le meilleur prédicteur pour longévité dans vieillesse ! Indépendance fonctionnelle signifie : Vous pouvez prendre soin de vous, êtes mobile, cognitivement apte. La science : Personnes avec capacité fonctionnelle complète vivent non seulement plus longtemps, mais surtout plus sainement ('compression morbidité' - maladie est comprimée à fin vie au lieu années de souffrance). La différence : 10+ ans de plus en bonne santé ! La mécanique : Aptitude fonctionnelle = force musculaire + équilibre + cognition + endurance. Cela prévient chutes (principale cause besoin soins !), maintient indépendance, protège cognition. Pour continuer : Musculation 2x/semaine (muscle = anti-âge !), exercices équilibre (tenir sur une jambe, Tai Chi), restez mentalement actif (apprendre garde jeune), socialement engagé, surveillez sens (vue/ouïe = prévention chutes). Votre indépendance est votre plus grand bien - préservez-la !"
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
        de: "🦴 ALARM: Du zeigst deutliche Zeichen von Gebrechlichkeit. Frailty ist nicht einfach 'Alter' - es ist ein medizinisches Syndrom das dein Sterberisiko verdreifacht und dich 5-8 Jahre kosten kann. Warnsignale: Ungewollter Gewichtsverlust (>5kg/Jahr), extreme Erschöpfung, Muskelschwund, langsames Gehen (<0.8m/s), wiederholte Stürze. Das Gute: Frailty ist reversibel! Selbst mit 80+ kannst du Kraft und Funktion zurückgewinnen. Priorität #1: Protein (1.2g/kg Körpergewicht täglich - das sind 84g bei 70kg!). Priorität #2: Krafttraining (2x/Woche, auch mit Physiotherapeut möglich). Priorität #3: Vitamin D checken (Ziel: >30ng/ml). Ignoriere 'das ist halt das Alter' - das ist behandelbarer Muskelschwund. Jeder Tag zählt - heute anfangen, nicht 'irgendwann'.",
        en: "🦴 ALARM: You show clear signs of frailty. Frailty isn't simply 'aging' - it's a medical syndrome that triples your mortality risk and can cost you 5-8 years. Warning signs: Unintentional weight loss (>5kg/year), extreme exhaustion, muscle wasting, slow walking (<0.8m/s), repeated falls. The good news: Frailty is reversible! Even at 80+ you can regain strength and function. Priority #1: Protein (1.2g/kg body weight daily - that's 84g at 70kg!). Priority #2: Strength training (2x/week, also possible with physiotherapist). Priority #3: Check vitamin D (target: >30ng/ml). Ignore 'that's just age' - this is treatable muscle wasting. Every day counts - start today, not 'sometime'.",
        es: "🦴 ALARMA: Muestras signos claros de fragilidad. Fragilidad no es simplemente 'envejecimiento' - es síndrome médico que triplica tu riesgo de mortalidad y puede costarte 5-8 años. Señales de advertencia: Pérdida de peso no intencional (>5kg/año), agotamiento extremo, desgaste muscular, caminar lento (<0.8m/s), caídas repetidas. Buenas noticias: ¡Fragilidad es reversible! Incluso a 80+ puedes recuperar fuerza y función. Prioridad #1: Proteína (1.2g/kg peso corporal diario - ¡eso es 84g a 70kg!). Prioridad #2: Entrenamiento de fuerza (2x/semana, también posible con fisioterapeuta). Prioridad #3: Verificar vitamina D (objetivo: >30ng/ml). Ignora 'es solo la edad' - esto es desgaste muscular tratable. Cada día cuenta - empezar hoy, no 'algún día'.",
        fr: "🦴 ALARME : Vous montrez des signes clairs de fragilité. Fragilité n'est pas simplement 'vieillissement' - c'est syndrome médical qui triple votre risque de mortalité et peut vous coûter 5-8 ans. Signaux d'alerte : Perte de poids involontaire (>5kg/an), épuisement extrême, fonte musculaire, marche lente (<0.8m/s), chutes répétées. Bonnes nouvelles : Fragilité est réversible ! Même à 80+ vous pouvez regagner force et fonction. Priorité #1 : Protéine (1.2g/kg poids corporel quotidien - c'est 84g à 70kg !). Priorité #2 : Entraînement force (2x/semaine, aussi possible avec kinésithérapeute). Priorité #3 : Vérifier vitamine D (objectif : >30ng/ml). Ignorez 'c'est juste l'âge' - c'est fonte musculaire traitable. Chaque jour compte - commencer aujourd'hui, pas 'un jour'."
  }
    },

  general_health: {
    excellent: {
      de: "Hervorragend! Du fühlst dich vital und energiegeladen. Deine subjektive Gesundheitseinschätzung ist ein starker Prädiktor für Langlebigkeit - Menschen die sich 'ausgezeichnet' fühlen, leben im Schnitt 5 Jahre länger als der Durchschnitt. Das ist kein Placebo-Effekt: Dein Körpergefühl spiegelt oft früher als Bluttests, wie gut deine Systeme funktionieren. Behalte bei was du tust - dein Lebensstil funktioniert offensichtlich. Achte weiter auf die Balance zwischen Aktivität und Erholung, und höre auf die Signale deines Körpers.",
      en: "Excellent! You feel vital and energized. Your subjective health assessment is a strong predictor of longevity - people who feel 'excellent' live on average 5 years longer than average. This isn't placebo effect: Your body feeling often reflects earlier than blood tests how well your systems function. Keep doing what you're doing - your lifestyle obviously works. Continue paying attention to the balance between activity and recovery, and listen to your body's signals.",
      es: "¡Excelente! Te sientes vital y lleno de energía. Tu evaluación subjetiva de salud es predictor fuerte de longevidad - personas que se sienten 'excelente' viven en promedio 5 años más que el promedio. Esto no es efecto placebo: Tu sensación corporal refleja a menudo antes que análisis de sangre qué tan bien funcionan tus sistemas. Sigue haciendo lo que haces - tu estilo de vida obviamente funciona. Continúa prestando atención al equilibrio entre actividad y recuperación, y escucha señales de tu cuerpo.",
      fr: "Excellent ! Vous vous sentez vital et énergisé. Votre évaluation subjective de santé est prédicteur fort de longévité - personnes qui se sentent 'excellent' vivent en moyenne 5 ans de plus que moyenne. Ce n'est pas effet placebo : Votre sensation corporelle reflète souvent plus tôt que analyses sanguines comment vos systèmes fonctionnent. Continuez ce que vous faites - votre mode de vie fonctionne évidemment. Continuez à prêter attention à équilibre entre activité et récupération, et écoutez signaux de votre corps."
    },
    good: {
      de: "Gut! Du fühlst dich grundsätzlich gesund und leistungsfähig. Deine positive Gesundheitswahrnehmung korreliert mit einem um 2-3 Jahre erhöhten Lebenserwartung. Kleine Verbesserungen in Schlafqualität, Stressmanagement oder Bewegung können dein Wohlbefinden weiter steigern. Wichtig: Auch wenn du dich gut fühlst, vernachlässige nicht die objektiven Check-ups (Blutdruck, Blutwerte). Manchmal kompensiert der Körper lange, bevor Symptome auftreten.",
      en: "Good! You generally feel healthy and capable. Your positive health perception correlates with 2-3 years increased life expectancy. Small improvements in sleep quality, stress management or movement can further enhance your wellbeing. Important: Even if you feel good, don't neglect objective check-ups (blood pressure, blood values). Sometimes the body compensates long before symptoms appear.",
      es: "¡Bien! Generalmente te sientes saludable y capaz. Tu percepción positiva de salud correlaciona con 2-3 años de esperanza de vida aumentada. Pequeñas mejoras en calidad de sueño, manejo de estrés o movimiento pueden mejorar aún más tu bienestar. Importante: Incluso si te sientes bien, no descuides chequeos objetivos (presión arterial, valores sanguíneos). A veces el cuerpo compensa mucho antes de que aparezcan síntomas.",
      fr: "Bien ! Vous vous sentez généralement en bonne santé et capable. Votre perception positive de santé corrèle avec 2-3 ans d'espérance de vie augmentée. Petites améliorations en qualité de sommeil, gestion du stress ou mouvement peuvent améliorer davantage votre bien-être. Important : Même si vous vous sentez bien, ne négligez pas examens objectifs (tension artérielle, valeurs sanguines). Parfois le corps compense longtemps avant que symptômes apparaissent."
    },
    neutral: {
      de: "Solide Basis mit Optimierungspotenzial. Du fühlst dich 'okay' - nicht krank, aber auch nicht optimal vital. Ein Score von 50-59/100 bedeutet: Dein Körpergefühl liegt im Durchschnitt. Interessanterweise ist der Unterschied zwischen 'okay' und 'gut' fühlen mit 1-2 Jahren Lebenserwartung messbar. Oft stecken dahinter behandelbare Faktoren: Suboptimaler Schlaf, leichter Nährstoffmangel (Vitamin D, B12), unerkannter Stress, oder zu wenig Bewegung. Check: Wachst du erholt auf? Hast du Energie für Hobbys? Wenn nein: Das ist verbesserbar! Großes Blutbild beim Arzt kann versteckte Mängel aufdecken. Schon 20 Min. tägliche Bewegung und besserer Schlaf können dein Wohlbefinden deutlich steigern.",
      en: "Solid foundation with optimization potential. You feel 'okay' - not sick, but also not optimally vital. A score of 50-59/100 means: Your body feeling is average. Interestingly, the difference between feeling 'okay' and 'good' is measurable with 1-2 years life expectancy. Often treatable factors are behind it: Suboptimal sleep, mild nutrient deficiency (vitamin D, B12), unrecognized stress, or too little movement. Check: Do you wake up refreshed? Do you have energy for hobbies? If not: This is improvable! Comprehensive blood work at doctor can reveal hidden deficiencies. Just 20 min. daily movement and better sleep can significantly improve your wellbeing.",
      es: "Base sólida con potencial de optimización. Te sientes 'bien' - no enfermo, pero tampoco óptimamente vital. Puntuación de 50-59/100 significa: Tu sensación corporal está en promedio. Curiosamente, diferencia entre sentirse 'bien' y 'muy bien' es medible con 1-2 años esperanza de vida. A menudo factores tratables están detrás: Sueño subóptimo, deficiencia leve de nutrientes (vitamina D, B12), estrés no reconocido, o muy poco movimiento. Verificar: ¿Despiertas renovado? ¿Tienes energía para hobbies? Si no: ¡Esto es mejorable! Análisis de sangre completo en médico puede revelar deficiencias ocultas. Solo 20 min. movimiento diario y mejor sueño pueden mejorar significativamente tu bienestar.",
      fr: "Base solide avec potentiel d'optimisation. Vous vous sentez 'correct' - pas malade, mais aussi pas optimalement vital. Score de 50-59/100 signifie : Votre sensation corporelle est moyenne. Curieusement, différence entre se sentir 'correct' et 'bien' est mesurable avec 1-2 ans espérance de vie. Souvent facteurs traitables sont derrière : Sommeil sous-optimal, carence légère en nutriments (vitamine D, B12), stress non reconnu, ou trop peu de mouvement. Vérifier : Vous réveillez-vous rafraîchi ? Avez-vous énergie pour hobbies ? Si non : C'est améliorable ! Analyses sanguines complètes chez médecin peuvent révéler carences cachées. Juste 20 min. mouvement quotidien et meilleur sommeil peuvent améliorer significativement votre bien-être."
    },
    moderate: {
      de: "Erhöhtes Risiko – Handlung empfohlen. Du fühlst dich häufig unwohl, müde oder eingeschränkt. Ein Score von 35-49/100 bedeutet: Dein Körper sendet deutliche Warnsignale. Menschen mit diesem Gesundheitsgefühl haben ein 2-3x erhöhtes Mortalitätsrisiko. Das ist KEIN 'Jammertal-Effekt' - dein Körper kommuniziert echte Probleme. Häufige Ursachen: Chronische niedriggradige Entzündung, Vitamin-D-Mangel (<20ng/ml), Eisenmangel, Schilddrüsen-Unterfunktion, versteckte Depression, oder unbehandelter Schlafapnoe. Sofort-Aktion: Ausführliches Blutbild (inkl. CRP, Vitamin D, B12, Ferritin, TSH). Wenn Arzt sagt 'alles normal': Zweite Meinung! Dein Leiden ist real und oft behandelbar. Bewegung (auch wenn du dich müde fühlst - paradoxerweise gibt es Energie!), Schlafhygiene, und soziale Kontakte können bereits helfen.",
      en: "Elevated risk – action recommended. You frequently feel unwell, tired or limited. A score of 35-49/100 means: Your body sends clear warning signals. People with this health feeling have 2-3x increased mortality risk. This is NOT 'valley of complaints' effect - your body communicates real problems. Common causes: Chronic low-grade inflammation, vitamin D deficiency (<20ng/ml), iron deficiency, hypothyroidism, hidden depression, or untreated sleep apnea. Immediate action: Comprehensive blood work (incl. CRP, vitamin D, B12, ferritin, TSH). If doctor says 'all normal': Second opinion! Your suffering is real and often treatable. Movement (even if you feel tired - paradoxically gives energy!), sleep hygiene, and social contacts can already help.",
      es: "Riesgo elevado – acción recomendada. Frecuentemente te sientes mal, cansado o limitado. Puntuación de 35-49/100 significa: Tu cuerpo envía señales de advertencia claras. Personas con esta sensación de salud tienen riesgo de mortalidad 2-3x aumentado. Esto NO es efecto 'valle de quejas' - tu cuerpo comunica problemas reales. Causas comunes: Inflamación crónica de bajo grado, deficiencia vitamina D (<20ng/ml), deficiencia hierro, hipotiroidismo, depresión oculta, o apnea sueño no tratada. Acción inmediata: Análisis sangre completo (incl. CRP, vitamina D, B12, ferritina, TSH). Si médico dice 'todo normal': ¡Segunda opinión! Tu sufrimiento es real y a menudo tratable. Movimiento (incluso si te sientes cansado - ¡paradójicamente da energía!), higiene sueño, y contactos sociales pueden ayudar ya.",
      fr: "Risque élevé – action recommandée. Vous vous sentez fréquemment mal, fatigué ou limité. Score de 35-49/100 signifie : Votre corps envoie signaux d'alerte clairs. Personnes avec cette sensation de santé ont risque mortalité 2-3x augmenté. Ce n'est PAS effet 'vallée des plaintes' - votre corps communique problèmes réels. Causes communes : Inflammation chronique bas grade, carence vitamine D (<20ng/ml), carence fer, hypothyroïdie, dépression cachée, ou apnée sommeil non traitée. Action immédiate : Analyses sanguines complètes (incl. CRP, vitamine D, B12, ferritine, TSH). Si médecin dit 'tout normal' : Deuxième avis ! Votre souffrance est réelle et souvent traitable. Mouvement (même si vous vous sentez fatigué - paradoxalement donne énergie !), hygiène sommeil, et contacts sociaux peuvent déjà aider."
    },
    poor: {
      de: "KRITISCH: Deine subjektive Gesundheitseinschätzung ist alarmierend - und das ist ein ernstes Warnsignal. Menschen die ihre Gesundheit als 'schlecht' bewerten, sterben 3-5 Jahre früher als solche die sich 'gut' fühlen - UNABHÄNGIG von objektiven Werten! Warum? Weil dein Körper-Gefühl oft früher warnt als Bluttests. Wenn du dich dauerhaft unwohl, erschöpft oder krank fühlst: Das ist NICHT normal, auch nicht im Alter. Mögliche Ursachen: Versteckte Entzündungen, Vitamin-Mängel (besonders B12, D), Schilddrüse, Depression, chronische Infektion. Handlung: Großes Blutbild beim Arzt (nicht nur 'Routine'), ehrlich über Befinden sprechen. Oft sind es behandelbare Ursachen. Dein Bauchgefühl ist valide - ignoriere es nicht. Gesundheit ist nicht Abwesenheit von Diagnose, sondern Präsenz von Vitalität.",
      en: "CRITICAL: Your subjective health assessment is alarming - and that's a serious warning signal. People who rate their health as 'poor' die 3-5 years earlier than those who feel 'good' - INDEPENDENT of objective values! Why? Because your body feeling often warns earlier than blood tests. If you feel persistently unwell, exhausted or sick: That's NOT normal, even in old age. Possible causes: Hidden inflammation, vitamin deficiencies (especially B12, D), thyroid, depression, chronic infection. Action: Comprehensive blood work at doctor (not just 'routine'), speak honestly about condition. Often treatable causes. Your gut feeling is valid - don't ignore it. Health isn't absence of diagnosis, but presence of vitality.",
      es: "CRÍTICO: Tu evaluación subjetiva de salud es alarmante - y eso es señal de advertencia seria. Personas que califican su salud como 'mala' mueren 3-5 años antes que quienes se sienten 'bien' - ¡INDEPENDIENTE de valores objetivos! ¿Por qué? Porque tu sensación corporal a menudo advierte antes que análisis de sangre. Si te sientes persistentemente mal, exhausto o enfermo: Eso NO es normal, incluso en vejez. Causas posibles: Inflamación oculta, deficiencias vitamínicas (especialmente B12, D), tiroides, depresión, infección crónica. Acción: Análisis de sangre completo en médico (no solo 'rutina'), hablar honestamente sobre condición. A menudo causas tratables. Tu intuición es válida - no la ignores. Salud no es ausencia de diagnóstico, sino presencia de vitalidad.",
      fr: "CRITIQUE : Votre évaluation subjective de santé est alarmante - et c'est signal d'alerte sérieux. Personnes qui évaluent leur santé comme 'mauvaise' meurent 3-5 ans plus tôt que ceux qui se sentent 'bien' - INDÉPENDANT des valeurs objectives ! Pourquoi ? Parce que votre sensation corporelle avertit souvent plus tôt que analyses sanguines. Si vous vous sentez persistamment mal, épuisé ou malade : Ce n'est PAS normal, même en vieillesse. Causes possibles : Inflammation cachée, carences vitaminiques (surtout B12, D), thyroïde, dépression, infection chronique. Action : Analyses sanguines complètes chez médecin (pas juste 'routine'), parler honnêtement de condition. Souvent causes traitables. Votre intuition est valide - ne l'ignorez pas. Santé n'est pas absence de diagnostic, mais présence de vitalité."
    }
  },

polypharmacy: {
    excellent: {
      de: "Hervorragend! Du nimmst keine oder minimal Medikamente - das ist der beste Zustand. Weniger Medikamente bedeutet: Keine Wechselwirkungen, keine Nebenwirkungen, kein Sturz-Risiko durch Schwindel. Dein Körper regelt sich selbst - das ist Ziel #1 der Medizin. Um diesen Zustand zu erhalten: Lifestyle first (Bewegung statt Blutdrucksenker, Ernährung statt Statine), präventiv handeln bevor Medikamente nötig werden, bei jedem neuen Medikament kritisch fragen 'Gibt es Alternativen?'. Wenn du älter wirst: Bleib wachsam. Ärzte verschreiben schnell, absetzen ist schwer. Regel: Jedes Medikament das du NICHT nimmst ist ein gewonnenes Risiko. Du machst es richtig!",
      en: "Excellent! You take no or minimal medications - that's the best state. Less medication means: No interactions, no side effects, no fall risk from dizziness. Your body regulates itself - that's goal #1 of medicine. To maintain this state: Lifestyle first (movement instead of blood pressure meds, diet instead of statins), act preventively before medications become necessary, critically ask with every new medication 'Are there alternatives?'. As you age: Stay vigilant. Doctors prescribe quickly, discontinuing is hard. Rule: Every medication you DON'T take is a won risk. You're doing it right!",
      es: "¡Excelente! No tomas o tomas mínimos medicamentos - ese es mejor estado. Menos medicación significa: Sin interacciones, sin efectos secundarios, sin riesgo caídas por mareos. Tu cuerpo se regula solo - ese es objetivo #1 de medicina. Para mantener este estado: Estilo de vida primero (movimiento en lugar de medicamentos presión, dieta en lugar de estatinas), actuar preventivamente antes que medicamentos sean necesarios, preguntar críticamente con cada nuevo medicamento '¿Hay alternativas?'. Al envejecer: Mantente vigilante. Médicos prescriben rápido, descontinuar es difícil. Regla: Cada medicamento que NO tomas es riesgo ganado. ¡Lo estás haciendo bien!",
      fr: "Excellent ! Vous ne prenez pas ou minimalement de médicaments - c'est meilleur état. Moins médicaments signifie : Pas interactions, pas effets secondaires, pas risque chutes par vertiges. Votre corps se régule seul - c'est objectif #1 de médecine. Pour maintenir cet état : Style de vie d'abord (mouvement au lieu médicaments tension, régime au lieu statines), agir préventivement avant médicaments deviennent nécessaires, demander critiquement avec chaque nouveau médicament 'Y a-t-il alternatives ?'. En vieillissant : Restez vigilant. Médecins prescrivent vite, arrêter est difficile. Règle : Chaque médicament que vous ne prenez PAS est risque gagné. Vous faites bien !"
    },
    good: {
      de: "Gut! Du nimmst 1-2 Medikamente regelmäßig - das ist im gesunden Bereich und gut managebar. Wichtig ist: Du hast den Überblick und nimmst nur was wirklich nötig ist. Um in diesem sicheren Bereich zu bleiben: Jährlicher Medikamenten-Check beim Hausarzt (alle Packungen mitbringen!), frage bei jedem neuen Rezept 'Brauche ich das wirklich? Wie lange?', dokumentiere Nebenwirkungen (oft werden die als neue Krankheit behandelt), priorisiere Lifestyle-Änderungen vor neuen Medikamenten. Achte auf 'Verschreibungs-Kaskaden': Ein Medikament verursacht Nebenwirkung, die mit weiterem Medikament behandelt wird. Ziel: Nicht mehr als 3-4 Dauermedikamente, und jedes mit klarer Begründung.",
      en: "Good! You take 1-2 medications regularly - that's in healthy range and well manageable. Important: You have overview and only take what's truly necessary. To stay in this safe range: Annual medication review with family doctor (bring all packages!), ask with every new prescription 'Do I really need this? For how long?', document side effects (often treated as new disease), prioritize lifestyle changes before new medications. Watch for 'prescription cascades': One medication causes side effect, treated with another medication. Goal: Not more than 3-4 long-term medications, each with clear justification.",
      es: "¡Bien! Tomas 1-2 medicamentos regularmente - eso está en rango saludable y bien manejable. Importante: Tienes visión general y solo tomas lo realmente necesario. Para permanecer en este rango seguro: Revisión anual medicamentos con médico familia (¡traer todos paquetes!), preguntar con cada nueva receta '¿Realmente necesito esto? ¿Por cuánto tiempo?', documentar efectos secundarios (a menudo tratados como nueva enfermedad), priorizar cambios estilo vida antes nuevos medicamentos. Atención a 'cascadas prescripción': Un medicamento causa efecto secundario, tratado con otro medicamento. Meta: No más 3-4 medicamentos largo plazo, cada uno con justificación clara.",
      fr: "Bien ! Vous prenez 1-2 médicaments régulièrement - c'est dans plage saine et bien gérable. Important : Vous avez vue d'ensemble et ne prenez que ce qui est vraiment nécessaire. Pour rester dans cette plage sûre : Révision annuelle médicaments avec médecin famille (apporter tous paquets !), demander avec chaque nouvelle prescription 'Ai-je vraiment besoin ? Pour combien temps ?', documenter effets secondaires (souvent traités comme nouvelle maladie), prioriser changements style vie avant nouveaux médicaments. Attention 'cascades prescription' : Un médicament cause effet secondaire, traité avec autre médicament. But : Pas plus 3-4 médicaments long terme, chacun avec justification claire."
    },
    neutral: {
      de: "Moderate Medikation mit Optimierungspotenzial. Du nimmst 3-4 Medikamente - das ist managebar, aber du näherst dich der kritischen Grenze zur Polypharmazie (5+). Ab 3 Medikamenten steigt das Wechselwirkungs-Risiko exponentiell. Jetzt handeln bevor es mehr werden! Sofort-Check: Sind alle wirklich noch nötig? Oft werden Medikamente jahrelang genommen obwohl der Grund längst weg ist. Konkreter Plan: Termin für Medikamenten-Review (alle 6 Monate!), jeden Wirkstoff hinterfragen, Prioritäten setzen (was ist kritisch? Was 'nice to have'?), Lifestyle-Alternativen prüfen (Blutdruck oft durch Gewicht/Bewegung senkbar). Ziel: Nicht weiter aufstocken. Jedes neue Medikament erhöht Komplexität und Risiko. Dokumentiere Nebenwirkungen genau - oft werden die falsch als 'neue Krankheit' interpretiert.",
      en: "Moderate medication with optimization potential. You take 3-4 medications - that's manageable, but approaching critical boundary to polypharmacy (5+). From 3 medications, interaction risk rises exponentially. Act now before it becomes more! Immediate check: Are all still really necessary? Often medications taken for years though reason long gone. Concrete plan: Appointment for medication review (every 6 months!), question each active ingredient, set priorities (what's critical? What 'nice to have'?), check lifestyle alternatives (blood pressure often reducible through weight/movement). Goal: Don't increase further. Every new medication increases complexity and risk. Document side effects precisely - often misinterpreted as 'new disease'.",
      es: "Medicación moderada con potencial optimización. Tomas 3-4 medicamentos - eso es manejable, pero acercándote límite crítico polifarmacia (5+). Desde 3 medicamentos, riesgo interacción sube exponencialmente. ¡Actuar ahora antes que sean más! Verificación inmediata: ¿Son todos realmente necesarios todavía? A menudo medicamentos tomados años aunque razón hace tiempo desapareció. Plan concreto: Cita revisión medicamentos (¡cada 6 meses!), cuestionar cada ingrediente activo, establecer prioridades (¿qué es crítico? ¿Qué 'deseable'?), verificar alternativas estilo vida (presión arterial a menudo reducible mediante peso/movimiento). Meta: No aumentar más. Cada nuevo medicamento aumenta complejidad y riesgo. Documentar efectos secundarios precisamente - a menudo malinterpretados como 'nueva enfermedad'.",
      fr: "Médication modérée avec potentiel optimisation. Vous prenez 3-4 médicaments - c'est gérable, mais approchant limite critique polypharmacie (5+). À partir 3 médicaments, risque interaction monte exponentiellement. Agir maintenant avant que devienne plus ! Vérification immédiate : Sont-ils tous encore vraiment nécessaires ? Souvent médicaments pris pendant années bien que raison disparue depuis longtemps. Plan concret : Rendez-vous révision médicaments (tous 6 mois !), questionner chaque ingrédient actif, établir priorités (qu'est critique ? Qu'est 'souhaitable' ?), vérifier alternatives style vie (tension artérielle souvent réductible par poids/mouvement). But : Ne pas augmenter davantage. Chaque nouveau médicament augmente complexité et risque. Documenter effets secondaires précisément - souvent mal interprétés comme 'nouvelle maladie'."
    },
    moderate: {
      de: "WARNUNG: Polypharmazie-Risiko! Du nimmst 5+ Medikamente gleichzeitig - das erhöht dein Risiko für gefährliche Wechselwirkungen, Stürze, Verwirrtheit und Organschäden drastisch. Ab 5 Medikamenten kann KEIN Arzt mehr alle Interaktionen überblicken - zu komplex! Studien zeigen: 30-50% der Medikamente bei Polypharmazie sind verzichtbar ohne Risiko-Erhöhung. Das Problem: Jeder Facharzt verschreibt isoliert, niemand hat Gesamt-Überblick. Nebenwirkungen werden als 'neue Krankheit' mit weiterem Medikament behandelt - Teufelskreis! SOFORTIGE AKTION: Hausarzt-Termin für kompletten Medikamenten-Review, ALLE Packungen mitbringen (auch rezeptfreie!), strukturiert durchgehen: Was ist unverzichtbar? Was kann reduziert werden? Was kann ganz weg? Priorisiere brutal: Herz/Krebs-Medikamente vor 'Komfort'-Medikamenten. Oft sind 2-3 eliminierbar. Ziel: Unter 5 kommen. Jedes weniger = gewonnene Sicherheit.",
      en: "WARNING: Polypharmacy risk! You take 5+ medications simultaneously - this drastically increases your risk for dangerous interactions, falls, confusion and organ damage. From 5 medications, NO doctor can overview all interactions - too complex! Studies show: 30-50% of medications in polypharmacy are dispensable without increased risk. Problem: Each specialist prescribes in isolation, nobody has total overview. Side effects treated as 'new disease' with another medication - vicious cycle! IMMEDIATE ACTION: Family doctor appointment for complete medication review, bring ALL packages (including over-counter!), go through structured: What's indispensable? What can be reduced? What can go completely? Prioritize brutally: Heart/cancer medications before 'comfort' medications. Often 2-3 eliminable. Goal: Get under 5. Each less = won safety.",
      es: "ADVERTENCIA: ¡Riesgo polifarmacia! Tomas 5+ medicamentos simultáneamente - esto aumenta drásticamente tu riesgo interacciones peligrosas, caídas, confusión y daño órganos. Desde 5 medicamentos, NINGÚN médico puede ver todas interacciones - ¡demasiado complejo! Estudios muestran: 30-50% medicamentos en polifarmacia son prescindibles sin riesgo aumentado. Problema: Cada especialista prescribe aisladamente, nadie tiene visión total. Efectos secundarios tratados como 'nueva enfermedad' con otro medicamento - ¡círculo vicioso! ACCIÓN INMEDIATA: Cita médico familia para revisión completa medicamentos, traer TODOS paquetes (¡incluyendo sin receta!), revisar estructurado: ¿Qué es indispensable? ¿Qué puede reducirse? ¿Qué puede irse completamente? Priorizar brutalmente: Medicamentos corazón/cáncer antes medicamentos 'confort'. A menudo 2-3 eliminables. Meta: Bajar de 5. Cada menos = seguridad ganada.",
      fr: "AVERTISSEMENT : Risque polypharmacie ! Vous prenez 5+ médicaments simultanément - cela augmente drastiquement votre risque interactions dangereuses, chutes, confusion et dommages organes. À partir 5 médicaments, AUCUN médecin ne peut voir toutes interactions - trop complexe ! Études montrent : 30-50% médicaments en polypharmacie sont dispensables sans risque augmenté. Problème : Chaque spécialiste prescrit isolément, personne n'a vue totale. Effets secondaires traités comme 'nouvelle maladie' avec autre médicament - cercle vicieux ! ACTION IMMÉDIATE : Rendez-vous médecin famille pour révision complète médicaments, apporter TOUS paquets (y compris sans ordonnance !), passer structuré : Qu'est indispensable ? Qu'est réductible ? Qu'est complètement éliminable ? Prioriser brutalement : Médicaments cœur/cancer avant médicaments 'confort'. Souvent 2-3 éliminables. But : Descendre sous 5. Chaque moins = sécurité gagnée."
    },
    poor: {
      de: "KRITISCH: Schwere Polypharmazie! Du nimmst 8+ Medikamente - das ist extrem gefährlich. Dein Risiko für lebensbedrohliche Wechselwirkungen, Stürze (→ Hüftfraktur!), Delir, Nieren-/Leber-Schäden ist massiv erhöht. Bei 8+ Medikamenten ist es mathematisch UNMÖGLICH alle Interaktionen zu überblicken - selbst Computer-Systeme versagen. Studien zeigen: Bis zu 50% können abgesetzt werden ohne Verschlechterung! Problem: Jeder Arzt verschreibt, keiner nimmt weg. Nebenwirkungen werden als 'Alterserscheinung' oder 'neue Krankheit' mit WEITEREM Medikament behandelt - absurd! SOFORT ZUM ARZT: Spezialisierter Medikamenten-Review (ggf. Klinik-Apotheker!), ALLE Medikamente mitbringen, systematisch prüfen: Lebensnotwendig? Verzichtbar? Kombinierbar? Oft sind 3-5 eliminierbar. Priorisiere: Herz/Krebs/Schmerz vor allem anderen. Ziel: Unter 5 Medikamente. Jedes Medikament das du NICHT nimmst verlängert dein Leben. Das ist keine Übertreibung - das ist Evidenz.",
      en: "CRITICAL: Severe polypharmacy! You take 8+ medications - that's extremely dangerous. Your risk for life-threatening interactions, falls (→ hip fracture!), delirium, kidney/liver damage is massively increased. At 8+ medications it's mathematically IMPOSSIBLE to overview all interactions - even computer systems fail. Studies show: Up to 50% can be discontinued without deterioration! Problem: Every doctor prescribes, nobody removes. Side effects treated as 'aging' or 'new disease' with ANOTHER medication - absurd! IMMEDIATE DOCTOR VISIT: Specialized medication review (possibly clinic pharmacist!), bring ALL medications, systematically check: Life-essential? Dispensable? Combinable? Often 3-5 eliminable. Prioritize: Heart/cancer/pain before everything else. Goal: Under 5 medications. Every medication you DON'T take extends your life. That's not exaggeration - that's evidence.",
      es: "CRÍTICO: ¡Polifarmacia severa! Tomas 8+ medicamentos - eso es extremadamente peligroso. Tu riesgo interacciones potencialmente mortales, caídas (→ ¡fractura cadera!), delirio, daño riñones/hígado está masivamente aumentado. Con 8+ medicamentos es matemáticamente IMPOSIBLE ver todas interacciones - incluso sistemas computadora fallan. Estudios muestran: ¡Hasta 50% pueden discontinuarse sin deterioro! Problema: Cada médico prescribe, nadie quita. Efectos secundarios tratados como 'envejecimiento' o 'nueva enfermedad' con OTRO medicamento - ¡absurdo! VISITA INMEDIATA MÉDICO: Revisión especializada medicamentos (¡posiblemente farmacéutico clínica!), traer TODOS medicamentos, verificar sistemáticamente: ¿Esencial vida? ¿Prescindible? ¿Combinable? A menudo 3-5 eliminables. Priorizar: Corazón/cáncer/dolor antes todo demás. Meta: Bajo 5 medicamentos. Cada medicamento que NO tomas extiende tu vida. No es exageración - es evidencia.",
      fr: "CRITIQUE : Polypharmacie sévère ! Vous prenez 8+ médicaments - c'est extrêmement dangereux. Votre risque interactions potentiellement mortelles, chutes (→ fracture hanche !), délire, dommages reins/foie est massivement augmenté. À 8+ médicaments c'est mathématiquement IMPOSSIBLE voir toutes interactions - même systèmes informatiques échouent. Études montrent : Jusqu'à 50% peuvent être arrêtés sans détérioration ! Problème : Chaque médecin prescrit, personne n'enlève. Effets secondaires traités comme 'vieillissement' ou 'nouvelle maladie' avec AUTRE médicament - absurde ! VISITE IMMÉDIATE MÉDECIN : Révision spécialisée médicaments (possiblement pharmacien clinique !), apporter TOUS médicaments, vérifier systématiquement : Essentiel vie ? Dispensable ? Combinable ? Souvent 3-5 éliminables. Prioriser : Cœur/cancer/douleur avant tout reste. But : Sous 5 médicaments. Chaque médicament que vous ne prenez PAS prolonge votre vie. Ce n'est pas exagération - c'est évidence."
    }
  },
    
  prevention: {
    excellent: {
      de: "🌟 Vorbildlich! Du nimmst Vorsorge ernst und gehst regelmäßig zu allen empfohlenen Screenings. Das ist Investment in deine Zukunft - Menschen die konsequent Vorsorge betreiben, leben im Schnitt 3-5 Jahre länger. Warum? Weil Krankheiten im Frühstadium zu 80-90% heilbar sind, im Spätstadium oft tödlich. Dein Verhalten zeigt: Du verstehst dass Prävention wichtiger ist als Behandlung. Behalte deine Routine bei: Jährlicher Check-up, altersgerechte Screenings (Darmkrebs ab 50, Hautkrebs jährlich, Frauen: Mammographie, Männer: Prostata), Impfungen aktuell halten (Grippe, Pneumokokken, Gürtelrose ab 60). Du bist Vorbild - erzähl anderen davon. Vorsorge rettet Leben, aber nur wenn man hingeht.",
      en: "🌟 Exemplary! You take prevention seriously and regularly attend all recommended screenings. That's investment in your future - people who consistently practice prevention live on average 3-5 years longer. Why? Because diseases are 80-90% curable in early stages, often fatal in late stages. Your behavior shows: You understand prevention is more important than treatment. Keep your routine: Annual check-up, age-appropriate screenings (colon cancer from 50, skin cancer annually, Women: mammography, Men: prostate), keep vaccinations current (flu, pneumococcus, shingles from 60). You're role model - tell others. Prevention saves lives, but only if you go.",
      es: "🌟 ¡Ejemplar! Tomas la prevención en serio y asistes regularmente a todas las pruebas recomendadas. Eso es inversión en tu futuro - personas que practican prevención consistentemente viven en promedio 3-5 años más. ¿Por qué? Porque enfermedades son 80-90% curables en etapas tempranas, a menudo fatales en etapas tardías. Tu comportamiento muestra: Entiendes que prevención es más importante que tratamiento. Mantén tu rutina: Chequeo anual, pruebas apropiadas edad (cáncer colon desde 50, cáncer piel anualmente, Mujeres: mamografía, Hombres: próstata), mantener vacunas actuales (gripe, neumococo, culebrilla desde 60). Eres modelo - cuéntalo a otros. Prevención salva vidas, pero solo si vas.",
      fr: "🌟 Exemplaire ! Vous prenez la prévention au sérieux et assistez régulièrement à tous dépistages recommandés. C'est investissement dans votre avenir - personnes qui pratiquent prévention systématiquement vivent en moyenne 3-5 ans de plus. Pourquoi ? Parce que maladies sont 80-90% curables stades précoces, souvent fatales stades tardifs. Votre comportement montre : Vous comprenez prévention est plus importante que traitement. Gardez votre routine : Bilan annuel, dépistages appropriés âge (cancer côlon dès 50, cancer peau annuellement, Femmes : mammographie, Hommes : prostate), vaccins à jour (grippe, pneumocoque, zona dès 60). Vous êtes modèle - dites-le aux autres. Prévention sauve vies, mais seulement si vous y allez."
    },
    
    good: {
      de: "✅ Gut! Du gehst zu den meisten wichtigen Vorsorgeuntersuchungen. Das ist bereits ein Schutzfaktor - regelmäßige Screenings können deine Lebenserwartung um 2-3 Jahre erhöhen. Um von 'gut' zu 'hervorragend' zu kommen: Checke ob du alle altersgerechten Untersuchungen machst. Standard ab 50: Darmkrebs-Screening (Koloskopie alle 10 Jahre oder jährlich Stuhltest), Hautkrebs-Check (jährlich), Blutdruck/Cholesterin (alle 2 Jahre). Frauen: Mammographie ab 50 (alle 2 Jahre), Männer: PSA-Test ab 50 (jährlich, kontrovers aber sinnvoll bei Risiko). Tipp: Trag alle Termine in Kalender ein mit Wiederholung - so vergisst du nichts. Vorsorge ist lästig, aber 1 Stunde pro Jahr vs. potentiell Jahre Leben? No-Brainer.",
      en: "✅ Good! You attend most important preventive examinations. That's already protective factor - regular screenings can increase your life expectancy by 2-3 years. To progress from 'good' to 'excellent': Check if you're doing all age-appropriate examinations. Standard from 50: Colon cancer screening (colonoscopy every 10 years or annual stool test), skin cancer check (annually), blood pressure/cholesterol (every 2 years). Women: Mammography from 50 (every 2 years), Men: PSA test from 50 (annually, controversial but sensible with risk). Tip: Enter all appointments in calendar with repetition - so you forget nothing. Prevention is annoying, but 1 hour per year vs. potentially years of life? No-brainer.",
      es: "✅ ¡Bien! Asistes a la mayoría de exámenes preventivos importantes. Eso ya es factor protector - pruebas regulares pueden aumentar tu esperanza de vida 2-3 años. Para progresar de 'bueno' a 'excelente': Verifica si haces todos exámenes apropiados edad. Estándar desde 50: Detección cáncer colon (colonoscopia cada 10 años o prueba heces anual), revisión cáncer piel (anualmente), presión/colesterol (cada 2 años). Mujeres: Mamografía desde 50 (cada 2 años), Hombres: Test PSA desde 50 (anualmente, controvertido pero sensato con riesgo). Consejo: Anota todas citas en calendario con repetición - así no olvidas nada. Prevención es molesta, pero ¿1 hora al año vs. potencialmente años de vida? Obvio.",
      fr: "✅ Bien ! Vous assistez à plupart examens préventifs importants. C'est déjà facteur protecteur - dépistages réguliers peuvent augmenter votre espérance vie 2-3 ans. Pour progresser de 'bon' à 'excellent' : Vérifiez si vous faites tous examens appropriés âge. Standard dès 50 : Dépistage cancer côlon (coloscopie tous 10 ans ou test selles annuel), contrôle cancer peau (annuellement), tension/cholestérol (tous 2 ans). Femmes : Mammographie dès 50 (tous 2 ans), Hommes : Test PSA dès 50 (annuellement, controversé mais sensé avec risque). Conseil : Notez tous rendez-vous calendrier avec répétition - ainsi vous n'oubliez rien. Prévention est ennuyeuse, mais 1 heure par an vs. potentiellement années vie ? Évident."
    },
    
    neutral: {
      de: "🔄 Ausbaufähig. Du gehst zu einigen Vorsorgeuntersuchungen, aber nicht konsequent zu allen wichtigen. Ein Score von 50-59/100 bedeutet: Du verstehst Vorsorge ist wichtig, aber Umsetzung hapert. Das Problem: Gerade die wichtigsten Screenings (Darmkrebs, Hautkrebs) werden oft aufgeschoben - 'hab keine Zeit', 'ist unangenehm', 'hab keine Beschwerden'. Aber genau das ist der Punkt: Vorsorge funktioniert NUR wenn man keine Symptome hat! Wenn Symptome da sind, ist es oft zu spät. Statistik: Darmkrebs im Stadium 1 → 90% Heilung. Stadium 4 → 10% Überleben. Der Unterschied? Früherkennung durch Vorsorge. Konkret: Mach JETZT Termine für fehlende Screenings. Priorität: Darmkrebs (ab 50), Hautkrebs (jährlich), Blutdruck/Cholesterin. 3 Termine, 1-2 Stunden total, potentiell +2-3 Jahre Leben. Rechne selbst.",
      en: "🔄 Room for improvement. You attend some preventive examinations, but not consistently all important ones. A score of 50-59/100 means: You understand prevention is important, but implementation is lacking. Problem: Especially most important screenings (colon cancer, skin cancer) are often postponed - 'no time', 'uncomfortable', 'no complaints'. But that's exactly the point: Prevention ONLY works when you have no symptoms! When symptoms are there, it's often too late. Statistics: Colon cancer stage 1 → 90% cure. Stage 4 → 10% survival. The difference? Early detection through prevention. Concrete: Make appointments NOW for missing screenings. Priority: Colon cancer (from 50), skin cancer (annually), blood pressure/cholesterol. 3 appointments, 1-2 hours total, potentially +2-3 years life. Do the math.",
      es: "🔄 Mejorable. Asistes a algunos exámenes preventivos, pero no consistentemente a todos importantes. Puntuación 50-59/100 significa: Entiendes prevención es importante, pero implementación falla. Problema: Especialmente pruebas más importantes (cáncer colon, cáncer piel) son a menudo pospuestas - 'no tengo tiempo', 'incómodo', 'sin molestias'. Pero ese es exactamente el punto: ¡Prevención SOLO funciona cuando no tienes síntomas! Cuando síntomas están ahí, a menudo es tarde. Estadística: Cáncer colon etapa 1 → 90% cura. Etapa 4 → 10% supervivencia. ¿La diferencia? Detección temprana mediante prevención. Concreto: Haz citas AHORA para pruebas faltantes. Prioridad: Cáncer colon (desde 50), cáncer piel (anualmente), presión/colesterol. 3 citas, 1-2 horas total, potencialmente +2-3 años vida. Haz el cálculo.",
      fr: "🔄 Améliorable. Vous assistez à certains examens préventifs, mais pas systématiquement tous importants. Score 50-59/100 signifie : Vous comprenez prévention est importante, mais mise en œuvre manque. Problème : Surtout dépistages plus importants (cancer côlon, cancer peau) sont souvent reportés - 'pas temps', 'inconfortable', 'pas plaintes'. Mais c'est exactement le point : Prévention fonctionne SEULEMENT quand vous n'avez pas symptômes ! Quand symptômes sont là, c'est souvent trop tard. Statistique : Cancer côlon stade 1 → 90% guérison. Stade 4 → 10% survie. Différence ? Détection précoce par prévention. Concret : Prenez rendez-vous MAINTENANT pour dépistages manquants. Priorité : Cancer côlon (dès 50), cancer peau (annuellement), tension/cholestérol. 3 rendez-vous, 1-2 heures total, potentiellement +2-3 ans vie. Faites calcul."
    },
    
    moderate: {
      de: "⚠️ WARNUNG: Du vernachlässigst Vorsorge - und das ist gefährlich. Menschen die Vorsorge ignorieren, verlieren durchschnittlich 2-4 Jahre Lebenserwartung. Warum? Weil viele Krankheiten (Krebs, Diabetes, Bluthochdruck) im Frühstadium heilbar sind, im Spätstadium tödlich. Ohne Screening findet man sie erst wenn Symptome da sind - oft zu spät. Beispiel Darmkrebs: Vorsorge-Koloskopie findet und entfernt Polypen BEVOR sie Krebs werden. Ohne Vorsorge: Diagnose erst bei Blut im Stuhl → oft schon metastasiert → Chemo, OP, 50% sterben. Mit Vorsorge: Polyp entfernt, nie Krebs, fertig. SOFORTIGE AKTION: Termin beim Hausarzt, kompletten Vorsorge-Status checken (wann war letzte Untersuchung?), fehlende Termine vereinbaren. Minimum: Blutdruck jährlich, Cholesterin/Blutzucker alle 2 Jahre, Hautkrebs jährlich, Darmkrebs ab 50 (einmalig Koloskopie oder jährlich Stuhltest). Ja, unangenehm. Aber 1 Stunde Arztbesuch vs. Jahre Leben? Deine Wahl.",
      en: "⚠️ WARNING: You're neglecting prevention - and that's dangerous. People who ignore prevention lose on average 2-4 years life expectancy. Why? Because many diseases (cancer, diabetes, hypertension) are curable in early stages, fatal in late stages. Without screening you find them only when symptoms appear - often too late. Example colon cancer: Prevention colonoscopy finds and removes polyps BEFORE they become cancer. Without prevention: Diagnosis only with blood in stool → often already metastasized → chemo, surgery, 50% die. With prevention: Polyp removed, never cancer, done. IMMEDIATE ACTION: Doctor appointment, check complete prevention status (when was last examination?), schedule missing appointments. Minimum: Blood pressure annually, cholesterol/blood sugar every 2 years, skin cancer annually, colon cancer from 50 (one-time colonoscopy or annual stool test). Yes, uncomfortable. But 1 hour doctor visit vs. years of life? Your choice.",
      es: "⚠️ ADVERTENCIA: Estás descuidando prevención - y eso es peligroso. Personas que ignoran prevención pierden en promedio 2-4 años esperanza vida. ¿Por qué? Porque muchas enfermedades (cáncer, diabetes, hipertensión) son curables etapas tempranas, fatales etapas tardías. Sin detección las encuentras solo cuando síntomas aparecen - a menudo tarde. Ejemplo cáncer colon: Colonoscopia prevención encuentra y elimina pólipos ANTES que se conviertan cáncer. Sin prevención: Diagnóstico solo con sangre heces → a menudo ya metastatizado → quimio, cirugía, 50% mueren. Con prevención: Pólipo eliminado, nunca cáncer, listo. ACCIÓN INMEDIATA: Cita médico, verificar estado prevención completo (¿cuándo fue último examen?), programar citas faltantes. Mínimo: Presión arterial anualmente, colesterol/azúcar cada 2 años, cáncer piel anualmente, cáncer colon desde 50 (colonoscopia única o prueba heces anual). Sí, incómodo. Pero ¿1 hora visita médico vs. años vida? Tu elección.",
      fr: "⚠️ AVERTISSEMENT : Vous négligez prévention - et c'est dangereux. Personnes qui ignorent prévention perdent en moyenne 2-4 ans espérance vie. Pourquoi ? Parce que nombreuses maladies (cancer, diabète, hypertension) sont curables stades précoces, fatales stades tardifs. Sans dépistage vous les trouvez seulement quand symptômes apparaissent - souvent trop tard. Exemple cancer côlon : Coloscopie prévention trouve et enlève polypes AVANT qu'ils deviennent cancer. Sans prévention : Diagnostic seulement avec sang selles → souvent déjà métastasé → chimio, chirurgie, 50% meurent. Avec prévention : Polype enlevé, jamais cancer, fini. ACTION IMMÉDIATE : Rendez-vous médecin, vérifier statut prévention complet (quand était dernier examen ?), programmer rendez-vous manquants. Minimum : Tension annuellement, cholestérol/sucre tous 2 ans, cancer peau annuellement, cancer côlon dès 50 (coloscopie unique ou test selles annuel). Oui, inconfortable. Mais 1 heure visite médecin vs. années vie ? Votre choix."
    },
    
    poor: {
      de: "🚨 KRITISCH: Du ignorierst Vorsorge komplett - das ist hochriskant! Menschen ohne Vorsorge verlieren 3-5 Jahre Lebenserwartung und haben massiv erhöhtes Risiko für vermeidbare Todesfälle. Die brutale Wahrheit: Darmkrebs ist zu 90% heilbar wenn früh erkannt, aber du lässt ihn wachsen bis Symptome da sind - dann ist es oft metastasiert. Hautkrebs ist mit bloßem Auge erkennbar und zu 99% heilbar - aber du gehst nicht hin. Bluthochdruck und hoher Cholesterin töten leise über Jahre - aber du lässt es nicht checken. Das ist nicht Pech - das ist vermeidbar! SOFORT ZUM ARZT: Kompletter Gesundheits-Check (Blutdruck, Blutwerte, EKG), alle fehlenden Screenings nachholen (Hautkrebs, Darmkrebs, geschlechtsspezifisch), Impfstatus prüfen (Tetanus, Grippe, Pneumokokken). Ja, das kostet einen Nachmittag. Aber die Alternative? Jahre früher sterben an etwas das man hätte verhindern können. Deine Entscheidung. Vorsorge ist nicht optional - sie rettet Leben. Aber nur wenn du hingehst.",
      en: "🚨 CRITICAL: You're completely ignoring prevention - that's high risk! People without prevention lose 3-5 years life expectancy and have massively increased risk for preventable deaths. Brutal truth: Colon cancer is 90% curable when detected early, but you let it grow until symptoms appear - then it's often metastasized. Skin cancer is visible to naked eye and 99% curable - but you don't go. Hypertension and high cholesterol kill silently over years - but you don't check. This isn't bad luck - it's preventable! IMMEDIATE DOCTOR VISIT: Complete health check (blood pressure, blood values, ECG), catch up all missing screenings (skin cancer, colon cancer, gender-specific), check vaccination status (tetanus, flu, pneumococcus). Yes, costs an afternoon. But alternative? Die years earlier from something preventable. Your decision. Prevention isn't optional - it saves lives. But only if you go.",
      es: "🚨 CRÍTICO: Estás ignorando prevención completamente - ¡eso es alto riesgo! Personas sin prevención pierden 3-5 años esperanza vida y tienen riesgo masivamente aumentado muertes prevenibles. Verdad brutal: Cáncer colon es 90% curable cuando detectado temprano, pero lo dejas crecer hasta síntomas aparecen - entonces a menudo metastatizado. Cáncer piel es visible ojo desnudo y 99% curable - pero no vas. Hipertensión y colesterol alto matan silenciosamente años - pero no verificas. Esto no es mala suerte - ¡es prevenible! VISITA INMEDIATA MÉDICO: Chequeo salud completo (presión arterial, valores sangre, ECG), recuperar todos exámenes faltantes (cáncer piel, cáncer colon, específico género), verificar estado vacunación (tétanos, gripe, neumococo). Sí, cuesta una tarde. ¿Pero alternativa? Morir años antes por algo prevenible. Tu decisión. Prevención no es opcional - salva vidas. Pero solo si vas.",
      fr: "🚨 CRITIQUE : Vous ignorez prévention complètement - c'est haut risque ! Personnes sans prévention perdent 3-5 ans espérance vie et ont risque massivement augmenté décès évitables. Vérité brutale : Cancer côlon est 90% curable quand détecté tôt, mais vous le laissez grandir jusqu'à symptômes apparaissent - alors souvent métastasé. Cancer peau est visible œil nu et 99% curable - mais vous n'allez pas. Hypertension et cholestérol élevé tuent silencieusement années - mais vous ne vérifiez pas. Ce n'est pas malchance - c'est évitable ! VISITE IMMÉDIATE MÉDECIN : Bilan santé complet (tension artérielle, valeurs sang, ECG), rattraper tous dépistages manquants (cancer peau, cancer côlon, spécifique genre), vérifier statut vaccination (tétanos, grippe, pneumocoque). Oui, coûte après-midi. Mais alternative ? Mourir années plus tôt de quelque chose évitable. Votre décision. Prévention n'est pas optionnelle - sauve vies. Mais seulement si vous y allez."
    }
  },

  // ========================================
  // 4. SENSORY
  // ========================================
  sensory: {
    excellent: {
      de: "👁️👂 Hervorragend! Dein Seh- und Hörvermögen sind in exzellentem Zustand. Intakte Sinnesorgane sind fundamentaler als die meisten denken - sie sind deine Verbindung zur Welt und essentiell für Gehirngesundheit. Menschen mit gutem Seh- und Hörvermögen haben 40% niedrigeres Demenz-Risiko! Warum? Weil dein Gehirn konstanten sensorischen Input braucht um aktiv zu bleiben. Erhalte diesen Zustand: Augen-Check alle 2 Jahre (ab 40 jährlich wegen Glaukom-Risiko), Hörtest alle 3-5 Jahre, schütze deine Sinne (Sonnenschutz für Augen, Gehörschutz bei Lärm >85dB), achte auf Warnsignale (verschwommenes Sehen, Probleme im Dämmerlicht, 'Rauschen' in Ohren). Deine Sinne sind Fenster zur Welt - behandle sie gut!",
      en: "👁️👂 Excellent! Your vision and hearing are in excellent condition. Intact sensory organs are more fundamental than most think - they're your connection to world and essential for brain health. People with good vision and hearing have 40% lower dementia risk! Why? Because your brain needs constant sensory input to stay active. Maintain this state: Eye check every 2 years (from 40 annually due to glaucoma risk), hearing test every 3-5 years, protect your senses (sun protection for eyes, hearing protection at noise >85dB), watch for warning signs (blurred vision, problems in twilight, 'ringing' in ears). Your senses are windows to world - treat them well!",
      es: "👁️👂 ¡Excelente! Tu visión y audición están en excelente condición. Órganos sensoriales intactos son más fundamentales que la mayoría piensa - son tu conexión con mundo y esenciales para salud cerebral. ¡Personas con buena visión y audición tienen 40% menor riesgo demencia! ¿Por qué? Porque tu cerebro necesita entrada sensorial constante para mantenerse activo. Mantén este estado: Revisión ojos cada 2 años (desde 40 anualmente debido riesgo glaucoma), prueba audición cada 3-5 años, protege tus sentidos (protección solar ojos, protección audición ruido >85dB), atención señales advertencia (visión borrosa, problemas crepúsculo, 'zumbido' oídos). Tus sentidos son ventanas al mundo - ¡trátalos bien!",
      fr: "👁️👂 Excellent ! Votre vision et audition sont en excellente condition. Organes sensoriels intacts sont plus fondamentaux que plupart pensent - ils sont votre connexion au monde et essentiels pour santé cérébrale. Personnes avec bonne vision et audition ont 40% risque démence inférieur ! Pourquoi ? Parce que votre cerveau a besoin entrée sensorielle constante pour rester actif. Maintenez cet état : Contrôle yeux tous 2 ans (dès 40 annuellement à cause risque glaucome), test audition tous 3-5 ans, protégez vos sens (protection solaire yeux, protection audition bruit >85dB), attention signaux alerte (vision floue, problèmes crépuscule, 'bourdonnement' oreilles). Vos sens sont fenêtres sur monde - traitez-les bien !"
    },
    
    good: {
      de: "✅ Gut! Dein Seh- und Hörvermögen funktionieren gut, mit leichten altersgerechten Anpassungen. Das ist normal - nach 40 brauchen die meisten Menschen Lesebrillen, nach 60 häufig leichte Hörhilfen. Wichtig: Diese 'leichten Defizite' nicht ignorieren! Schon milde Hörminderung erhöht Demenz-Risiko um 30%, weil dein Gehirn mehr Energie für's Verstehen braucht statt für Denken. Brillen und moderne Hörgeräte sind keine Schwäche - sie sind Gehirn-Schutz. Um den guten Zustand zu halten: Regelmäßige Checks (Augen alle 2 Jahre, Gehör alle 3 Jahre), bei Veränderung sofort reagieren (neue Brille, Hörgerät anpassen), Sinnesorgane schützen (UV-Schutz, Lärm vermeiden). Dein Gehirn dankt es dir mit Klarheit und niedrigerem Demenz-Risiko.",
      en: "✅ Good! Your vision and hearing function well, with slight age-appropriate adjustments. That's normal - after 40 most people need reading glasses, after 60 often mild hearing aids. Important: Don't ignore these 'mild deficits'! Even mild hearing loss increases dementia risk by 30%, because your brain needs more energy for understanding instead of thinking. Glasses and modern hearing aids aren't weakness - they're brain protection. To maintain good state: Regular checks (eyes every 2 years, hearing every 3 years), react immediately to changes (new glasses, adjust hearing aid), protect sensory organs (UV protection, avoid noise). Your brain thanks you with clarity and lower dementia risk.",
      es: "✅ ¡Bien! Tu visión y audición funcionan bien, con ligeros ajustes apropiados edad. Eso es normal - después 40 mayoría personas necesitan gafas lectura, después 60 a menudo ayudas audición leves. Importante: ¡No ignores estos 'déficits leves'! Incluso pérdida audición leve aumenta riesgo demencia 30%, porque tu cerebro necesita más energía para entender en lugar pensar. Gafas y audífonos modernos no son debilidad - son protección cerebral. Para mantener buen estado: Revisiones regulares (ojos cada 2 años, audición cada 3 años), reaccionar inmediatamente cambios (gafas nuevas, ajustar audífono), proteger órganos sensoriales (protección UV, evitar ruido). Tu cerebro te agradece con claridad y menor riesgo demencia.",
      fr: "✅ Bien ! Votre vision et audition fonctionnent bien, avec légers ajustements appropriés âge. C'est normal - après 40 plupart personnes ont besoin lunettes lecture, après 60 souvent aides audition légères. Important : N'ignorez pas ces 'déficits légers' ! Même perte audition légère augmente risque démence 30%, parce que votre cerveau a besoin plus énergie pour comprendre au lieu penser. Lunettes et aides auditives modernes ne sont pas faiblesse - c'est protection cérébrale. Pour maintenir bon état : Contrôles réguliers (yeux tous 2 ans, audition tous 3 ans), réagir immédiatement changements (nouvelles lunettes, ajuster aide auditive), protéger organes sensoriels (protection UV, éviter bruit). Votre cerveau vous remercie avec clarté et risque démence inférieur."
    },
    
    neutral: {
      de: "🔄 Eingeschränkt aber kompensierbar. Dein Seh- oder Hörvermögen zeigt moderate Defizite - das ist NICHT 'normal fürs Alter' und sollte behandelt werden. Ein Score von 50-59/100 bedeutet: Du kompensierst wahrscheinlich - lauter TV, näher rangehen, Gespräche meiden. Problem: Kompensation kostet mentale Energie! Studien zeigen: Unbehandelte Sinnesdefizite erhöhen Demenz-Risiko um 50% und Sturz-Risiko um 300%. Warum fallen und Demenz? Weil dein Gehirn für Sehen/Hören so viel Energie braucht dass für Balance und Denken nichts übrig bleibt. Lösung ist simpel: Augenarzt (neue Brille? Katarakt-OP?), HNO-Arzt (Hörtest, moderne Hörgeräte sind fast unsichtbar!). Kosten: 1-2 Arzttermine. Gewinn: Lebensqualität, Sicherheit, Demenz-Prävention. Dein Gehirn braucht Input - gib ihm die Werkzeuge!",
      en: "🔄 Limited but compensable. Your vision or hearing shows moderate deficits - that's NOT 'normal for age' and should be treated. A score of 50-59/100 means: You're probably compensating - louder TV, getting closer, avoiding conversations. Problem: Compensation costs mental energy! Studies show: Untreated sensory deficits increase dementia risk by 50% and fall risk by 300%. Why falls and dementia? Because your brain needs so much energy for seeing/hearing that nothing remains for balance and thinking. Solution is simple: Eye doctor (new glasses? Cataract surgery?), ENT doctor (hearing test, modern hearing aids are almost invisible!). Cost: 1-2 doctor appointments. Gain: Quality of life, safety, dementia prevention. Your brain needs input - give it the tools!",
      es: "🔄 Limitado pero compensable. Tu visión o audición muestra déficits moderados - eso NO es 'normal para edad' y debe tratarse. Puntuación 50-59/100 significa: Probablemente estás compensando - TV más alto, acercarte más, evitar conversaciones. Problema: ¡Compensación cuesta energía mental! Estudios muestran: Déficits sensoriales no tratados aumentan riesgo demencia 50% y riesgo caídas 300%. ¿Por qué caídas y demencia? Porque tu cerebro necesita tanta energía para ver/oír que nada queda para equilibrio y pensar. Solución es simple: Oftalmólogo (¿gafas nuevas? ¿Cirugía cataratas?), Otorrino (prueba audición, ¡audífonos modernos casi invisibles!). Costo: 1-2 citas médico. Ganancia: Calidad vida, seguridad, prevención demencia. ¡Tu cerebro necesita entrada - dale herramientas!",
      fr: "🔄 Limité mais compensable. Votre vision ou audition montre déficits modérés - ce n'est PAS 'normal pour âge' et devrait être traité. Score 50-59/100 signifie : Vous compensez probablement - TV plus fort, vous rapprocher, éviter conversations. Problème : Compensation coûte énergie mentale ! Études montrent : Déficits sensoriels non traités augmentent risque démence 50% et risque chutes 300%. Pourquoi chutes et démence ? Parce que votre cerveau a besoin tellement énergie pour voir/entendre que rien reste pour équilibre et penser. Solution est simple : Ophtalmologue (nouvelles lunettes ? Chirurgie cataracte ?), ORL (test audition, aides auditives modernes presque invisibles !). Coût : 1-2 rendez-vous médecin. Gain : Qualité vie, sécurité, prévention démence. Votre cerveau a besoin entrée - donnez-lui outils !"
    },
    
    moderate: {
      de: "⚠️ WARNUNG: Deutliche Sinnesdefizite! Dein Seh- oder Hörvermögen ist stark eingeschränkt - das ist gefährlich für Gesundheit UND Lebensqualität. Ein Score von 35-49/100 bedeutet: Du hast massive Probleme im Alltag (Lesen schwierig, Gespräche anstrengend, Orientierung unsicher). Die Folgen sind dramatisch: Unbehandelte starke Sehschwäche → Sturzrisiko +400%, Isolation, Depression. Unbehandelte starke Schwerhörigkeit → Demenz-Risiko +500% (!), weil dein Gehirn permanent Energie für's Verstehen verschwendet statt für Kognition. Soziale Isolation (weil Gespräche zu anstrengend) verschlimmert alles. SOFORT ZUM ARZT: Augenarzt (Brille, Katarakt-OP, Makuladegeneration behandeln), HNO (professioneller Hörtest, Hörgeräte-Anpassung). Moderne Hörgeräte sind technologische Wunder - fast unsichtbar, hocheffektiv. Brille/Hörgerät sind nicht 'Schwäche' sondern Gehirn-Rettung. Jeder Tag ohne Behandlung erhöht Demenz- und Sturzrisiko.",
      en: "⚠️ WARNING: Significant sensory deficits! Your vision or hearing is severely impaired - that's dangerous for health AND quality of life. A score of 35-49/100 means: You have massive daily problems (reading difficult, conversations exhausting, orientation uncertain). Consequences are dramatic: Untreated severe vision weakness → fall risk +400%, isolation, depression. Untreated severe hearing loss → dementia risk +500% (!), because your brain permanently wastes energy for understanding instead of cognition. Social isolation (because conversations too exhausting) worsens everything. IMMEDIATE DOCTOR VISIT: Eye doctor (glasses, cataract surgery, treat macular degeneration), ENT (professional hearing test, hearing aid fitting). Modern hearing aids are technological marvels - almost invisible, highly effective. Glasses/hearing aids aren't 'weakness' but brain rescue. Every day without treatment increases dementia and fall risk.",
      es: "⚠️ ADVERTENCIA: ¡Déficits sensoriales significativos! Tu visión o audición está severamente deteriorada - eso es peligroso para salud Y calidad vida. Puntuación 35-49/100 significa: Tienes problemas masivos diarios (lectura difícil, conversaciones agotadoras, orientación incierta). Consecuencias son dramáticas: Debilidad visual severa no tratada → riesgo caídas +400%, aislamiento, depresión. Pérdida audición severa no tratada → riesgo demencia +500% (!), porque tu cerebro permanentemente desperdicia energía para entender en lugar cognición. Aislamiento social (porque conversaciones demasiado agotadoras) empeora todo. VISITA INMEDIATA MÉDICO: Oftalmólogo (gafas, cirugía cataratas, tratar degeneración macular), Otorrino (prueba audición profesional, ajuste audífonos). Audífonos modernos son maravillas tecnológicas - casi invisibles, altamente efectivos. Gafas/audífonos no son 'debilidad' sino rescate cerebral. Cada día sin tratamiento aumenta riesgo demencia y caídas.",
      fr: "⚠️ AVERTISSEMENT : Déficits sensoriels significatifs ! Votre vision ou audition est sévèrement altérée - c'est dangereux pour santé ET qualité vie. Score 35-49/100 signifie : Vous avez problèmes massifs quotidiens (lecture difficile, conversations épuisantes, orientation incertaine). Conséquences sont dramatiques : Faiblesse vision sévère non traitée → risque chutes +400%, isolement, dépression. Perte audition sévère non traitée → risque démence +500% (!), parce que votre cerveau gaspille en permanence énergie pour comprendre au lieu cognition. Isolement social (parce que conversations trop épuisantes) aggrave tout. VISITE IMMÉDIATE MÉDECIN : Ophtalmologue (lunettes, chirurgie cataracte, traiter dégénérescence maculaire), ORL (test audition professionnel, ajustement aides auditives). Aides auditives modernes sont merveilles technologiques - presque invisibles, hautement efficaces. Lunettes/aides auditives ne sont pas 'faiblesse' mais sauvetage cérébral. Chaque jour sans traitement augmente risque démence et chutes."
    },
    
    poor: {
      de: "🚨 KRITISCH: Schwere Sinnesdefizite! Dein Seh- oder Hörvermögen ist massiv eingeschränkt - das bedroht deine Selbstständigkeit und Gesundheit akut. Bei diesem Schweregrad (Score <35/100) ist sofortiges Handeln essentiell. Die Realität: Starke Sehschwäche ohne Korrektur → Sturzrisiko +600%, Hüftfrakturen (50% sterben innerhalb 1 Jahr!), totale Isolation, Depression. Starke Schwerhörigkeit ohne Hörgerät → Demenz-Risiko +800% (!), weil dein Gehirn 'verhungert' ohne Input, soziale Isolation (niemand mag ständig schreien), Verlust Selbstständigkeit. NOTFALL-AKTION: MORGEN Termin Augenarzt (akute Sehprobleme können Schlaganfall/Netzhautablösung bedeuten!), HNO-Arzt (professionelle Hörgeräte-Versorgung, GKV zahlt Basis-Modelle!). Ignoriere nicht Kosten-Argumente - Hörgeräte kosten 500-2000€, aber Demenz kostet dich dein Leben. Moderne Technologie kann fast alles korrigieren - aber nur wenn du sie nutzt. Deine Sinne sind deine Verbindung zur Welt - ohne sie stirbt dein Gehirn langsam ab. Handle JETZT!",
      en: "🚨 CRITICAL: Severe sensory deficits! Your vision or hearing is massively impaired - this acutely threatens your independence and health. At this severity (score <35/100) immediate action is essential. Reality: Severe vision weakness without correction → fall risk +600%, hip fractures (50% die within 1 year!), total isolation, depression. Severe hearing loss without hearing aid → dementia risk +800% (!), because your brain 'starves' without input, social isolation (nobody likes constantly shouting), loss of independence. EMERGENCY ACTION: TOMORROW appointment eye doctor (acute vision problems can mean stroke/retinal detachment!), ENT doctor (professional hearing aid provision, insurance covers basic models!). Ignore cost arguments - hearing aids cost €500-2000, but dementia costs you your life. Modern technology can correct almost everything - but only if you use it. Your senses are your connection to world - without them your brain slowly dies. Act NOW!",
      es: "🚨 CRÍTICO: ¡Déficits sensoriales severos! Tu visión o audición está masivamente deteriorada - esto amenaza agudamente tu independencia y salud. Con esta severidad (puntuación <35/100) acción inmediata es esencial. Realidad: Debilidad visual severa sin corrección → riesgo caídas +600%, fracturas cadera (¡50% mueren dentro 1 año!), aislamiento total, depresión. Pérdida audición severa sin audífono → riesgo demencia +800% (!), porque tu cerebro 'muere de hambre' sin entrada, aislamiento social (nadie gusta gritar constantemente), pérdida independencia. ACCIÓN EMERGENCIA: MAÑANA cita oftalmólogo (¡problemas visión agudos pueden significar derrame/desprendimiento retina!), Otorrino (provisión profesional audífonos, ¡seguro cubre modelos básicos!). Ignora argumentos costos - audífonos cuestan €500-2000, pero demencia te cuesta tu vida. Tecnología moderna puede corregir casi todo - pero solo si la usas. Tus sentidos son tu conexión con mundo - sin ellos tu cerebro muere lentamente. ¡Actúa AHORA!",
      fr: "🚨 CRITIQUE : Déficits sensoriels sévères ! Votre vision ou audition est massivement altérée - cela menace acutement votre indépendance et santé. À cette sévérité (score <35/100) action immédiate est essentielle. Réalité : Faiblesse vision sévère sans correction → risque chutes +600%, fractures hanche (50% meurent dans 1 an !), isolement total, dépression. Perte audition sévère sans aide auditive → risque démence +800% (!), parce que votre cerveau 'meurt de faim' sans entrée, isolement social (personne n'aime crier constamment), perte indépendance. ACTION URGENCE : DEMAIN rendez-vous ophtalmologue (problèmes vision aigus peuvent signifier AVC/décollement rétine !), ORL (fourniture professionnelle aides auditives, assurance couvre modèles de base !). Ignorez arguments coûts - aides auditives coûtent €500-2000, mais démence vous coûte votre vie. Technologie moderne peut corriger presque tout - mais seulement si vous l'utilisez. Vos sens sont votre connexion au monde - sans eux votre cerveau meurt lentement. Agissez MAINTENANT !"
    }
  },

  // ========================================
  // 5. COGNITIVE
  // ========================================
  cognitive: {
    excellent: {
      de: "🧠 Hervorragend! Deine kognitive Gesundheit ist in exzellentem Zustand - Gedächtnis scharf, Konzentration stark, Stimmung stabil. Das ist nicht selbstverständlich: Nur 20% der über-60-Jährigen erreichen diesen Level. Dein Gehirn profitiert offensichtlich von deinem Lebensstil. Um diesen Zustand zu erhalten: Bleib geistig aktiv (Lernen ist das beste Demenz-Medikament), pflege soziale Kontakte (Einsamkeit ist toxisch fürs Gehirn), bewege dich regelmäßig (Sport produziert Nervenwachstumsfaktoren!), schlaf ausreichend (Gehirn 'entgiftet' nachts), manage Stress (Cortisol schädigt Hippocampus). Dein Gehirn ist plastisch - es kann sich bis ins hohe Alter verbessern. Nutze es oder verliere es!",
      en: "🧠 Excellent! Your cognitive health is in excellent condition - memory sharp, concentration strong, mood stable. That's not given: Only 20% of over-60s reach this level. Your brain obviously benefits from your lifestyle. To maintain this state: Stay mentally active (learning is best dementia medicine), nurture social contacts (loneliness is toxic for brain), move regularly (exercise produces nerve growth factors!), sleep adequately (brain 'detoxifies' at night), manage stress (cortisol damages hippocampus). Your brain is plastic - it can improve into old age. Use it or lose it!",
      es: "🧠 ¡Excelente! Tu salud cognitiva está en excelente condición - memoria aguda, concentración fuerte, humor estable. Eso no es obvio: Solo 20% mayores 60 alcanzan este nivel. Tu cerebro obviamente se beneficia de tu estilo vida. Para mantener este estado: Mantente mentalmente activo (aprender es mejor medicina demencia), cultiva contactos sociales (soledad es tóxica para cerebro), muévete regularmente (¡ejercicio produce factores crecimiento nervioso!), duerme adecuadamente (cerebro 'desintoxica' noche), maneja estrés (cortisol daña hipocampo). Tu cerebro es plástico - puede mejorar hasta vejez avanzada. ¡Úsalo o piérdelo!",
      fr: "🧠 Excellent ! Votre santé cognitive est en excellente condition - mémoire vive, concentration forte, humeur stable. Ce n'est pas évident : Seulement 20% des plus de 60 ans atteignent ce niveau. Votre cerveau bénéficie évidemment de votre mode de vie. Pour maintenir cet état : Restez mentalement actif (apprentissage est meilleur médicament démence), cultivez contacts sociaux (solitude est toxique pour cerveau), bougez régulièrement (exercice produit facteurs croissance nerveuse !), dormez adéquatement (cerveau 'détoxifie' nuit), gérez stress (cortisol endommage hippocampe). Votre cerveau est plastique - peut s'améliorer jusqu'à grand âge. Utilisez-le ou perdez-le !"
    },
    
    good: {
      de: "✅ Gut! Deine kognitive Gesundheit ist solide - gelegentliche Vergesslichkeit ist normal und kein Grund zur Sorge. Ein Score von 60-79/100 bedeutet: Dein Gehirn funktioniert gut, aber es gibt Optimierungspotenzial. Wichtig zu verstehen: 'Normale' Vergesslichkeit (wo hab ich Schlüssel hingelegt?) vs. besorgniserregende Vergesslichkeit (hab ich heute schon gegessen?) sind unterschiedlich. Wenn du dir Sorgen machst: Sprich mit Arzt, lass Vitamin B12 und D checken (Mängel machen 'Pseudo-Demenz'). Um besser zu werden: Lerne Neues (Sprache, Instrument - erzeugt neue Nervenverbindungen), soziale Aktivitäten (Gespräche = Gehirn-Training), Bewegung (30 Min./Tag steigert kognitive Funktion messbar), Schlaf (7-8h zwingend für Gedächtnis-Konsolidierung). Dein Gehirn kann noch besser werden - investiere!",
      en: "✅ Good! Your cognitive health is solid - occasional forgetfulness is normal and no cause for concern. A score of 60-79/100 means: Your brain functions well, but there's optimization potential. Important to understand: 'Normal' forgetfulness (where did I put keys?) vs. concerning forgetfulness (did I eat today?) are different. If worried: Talk to doctor, check vitamin B12 and D (deficiencies cause 'pseudo-dementia'). To improve: Learn new things (language, instrument - creates new nerve connections), social activities (conversations = brain training), movement (30 min./day measurably improves cognitive function), sleep (7-8h mandatory for memory consolidation). Your brain can still improve - invest!",
      es: "✅ ¡Bien! Tu salud cognitiva es sólida - olvido ocasional es normal y no causa preocupación. Puntuación 60-79/100 significa: Tu cerebro funciona bien, pero hay potencial optimización. Importante entender: Olvido 'normal' (¿dónde puse llaves?) vs. olvido preocupante (¿comí hoy?) son diferentes. Si preocupado: Habla con médico, verifica vitamina B12 y D (deficiencias causan 'pseudo-demencia'). Para mejorar: Aprende cosas nuevas (idioma, instrumento - crea nuevas conexiones nerviosas), actividades sociales (conversaciones = entrenamiento cerebral), movimiento (30 min./día mejora mensurablemente función cognitiva), sueño (7-8h obligatorio para consolidación memoria). Tu cerebro puede mejorar todavía - ¡invierte!",
      fr: "✅ Bien ! Votre santé cognitive est solide - oubli occasionnel est normal et pas cause inquiétude. Score 60-79/100 signifie : Votre cerveau fonctionne bien, mais il y a potentiel optimisation. Important comprendre : Oubli 'normal' (où ai-je mis clés ?) vs. oubli préoccupant (ai-je mangé aujourd'hui ?) sont différents. Si inquiet : Parlez à médecin, vérifiez vitamine B12 et D (carences causent 'pseudo-démence'). Pour améliorer : Apprenez nouvelles choses (langue, instrument - crée nouvelles connexions nerveuses), activités sociales (conversations = entraînement cérébral), mouvement (30 min./jour améliore mesurablement fonction cognitive), sommeil (7-8h obligatoire pour consolidation mémoire). Votre cerveau peut encore s'améliorer - investissez !"
    },
    
    neutral: {
      de: "🔄 Beobachtungswürdig. Deine kognitive Funktion zeigt leichte Defizite - das kann viele Ursachen haben (behandelbar!). Ein Score von 50-59/100 bedeutet: Mehr als normale Vergesslichkeit, vielleicht Konzentrationsprobleme, möglicherweise Stimmungsschwankungen. WICHTIG: Das ist NICHT automatisch Demenz! Häufige behandelbare Ursachen: Vitamin B12-Mangel (macht 'Pseudo-Demenz'), Vitamin D-Mangel, Schilddrüsen-Unterfunktion, Schlafapnoe, Depression, Medikamenten-Nebenwirkungen (besonders Anticholinergika), chronischer Stress. Erste Schritte: Hausarzt-Check (Blutbild mit B12, D, TSH, Glukose), Schlafqualität prüfen, Medikamenten-Review (manche Medikamente vernebeln Denken), Stress reduzieren. Oft verschwinden kognitive Probleme wenn Ursache behoben wird. Parallel: Gehirn fordern (Lernen, Rätsel), Bewegung (verbessert Durchblutung), soziale Kontakte (stimulieren). Handeln statt warten!",
      en: "🔄 Worth monitoring. Your cognitive function shows mild deficits - this can have many causes (treatable!). A score of 50-59/100 means: More than normal forgetfulness, perhaps concentration problems, possibly mood swings. IMPORTANT: This is NOT automatically dementia! Common treatable causes: Vitamin B12 deficiency (causes 'pseudo-dementia'), vitamin D deficiency, hypothyroidism, sleep apnea, depression, medication side effects (especially anticholinergics), chronic stress. First steps: Family doctor check (blood work with B12, D, TSH, glucose), check sleep quality, medication review (some medications fog thinking), reduce stress. Often cognitive problems disappear when cause is addressed. Parallel: Challenge brain (learning, puzzles), movement (improves circulation), social contacts (stimulate). Act instead of waiting!",
      es: "🔄 Digno de monitoreo. Tu función cognitiva muestra déficits leves - esto puede tener muchas causas (¡tratables!). Puntuación 50-59/100 significa: Más que olvido normal, quizás problemas concentración, posiblemente cambios humor. IMPORTANTE: ¡Esto NO es automáticamente demencia! Causas tratables comunes: Deficiencia vitamina B12 (causa 'pseudo-demencia'), deficiencia vitamina D, hipotiroidismo, apnea sueño, depresión, efectos secundarios medicamentos (especialmente anticolinérgicos), estrés crónico. Primeros pasos: Chequeo médico familia (análisis sangre con B12, D, TSH, glucosa), verificar calidad sueño, revisión medicamentos (algunos medicamentos nublan pensamiento), reducir estrés. A menudo problemas cognitivos desaparecen cuando causa se aborda. Paralelo: Desafiar cerebro (aprendizaje, rompecabezas), movimiento (mejora circulación), contactos sociales (estimulan). ¡Actuar en lugar esperar!",
      fr: "🔄 Digne surveillance. Votre fonction cognitive montre déficits légers - cela peut avoir nombreuses causes (traitables !). Score 50-59/100 signifie : Plus qu'oubli normal, peut-être problèmes concentration, possiblement sautes humeur. IMPORTANT : Ce n'est PAS automatiquement démence ! Causes traitables communes : Carence vitamine B12 (cause 'pseudo-démence'), carence vitamine D, hypothyroïdie, apnée sommeil, dépression, effets secondaires médicaments (surtout anticholinergiques), stress chronique. Premières étapes : Bilan médecin famille (analyses sang avec B12, D, TSH, glucose), vérifier qualité sommeil, révision médicaments (certains médicaments brouillent pensée), réduire stress. Souvent problèmes cognitifs disparaissent quand cause est traitée. Parallèle : Défier cerveau (apprentissage, énigmes), mouvement (améliore circulation), contacts sociaux (stimulent). Agir au lieu attendre !"
    },
    
    moderate: {
      de: "⚠️ WARNUNG: Deutliche kognitive Defizite! Du hast merkbare Probleme mit Gedächtnis, Konzentration oder Orientierung. Ein Score von 35-49/100 bedeutet: Das geht über normale Vergesslichkeit hinaus. SOFORT ZUM ARZT - das kann behandelbare Ursachen haben! Mögliche Gründe: Schwerer Vitamin B12-Mangel (B12 <200 pg/ml verursacht neurolog. Schäden!), Schilddrüsen-Unterfunktion, schwere Schlafapnoe (Sauerstoffmangel schädigt Gehirn), Depression (macht 'Pseudo-Demenz'), Medikamenten-Nebenwirkungen (Check alle Medikamente!), beginnende Demenz (aber oft noch behandelbar/verlangsambar). Diagnostik: Neurologe, ausführliche Tests (MMST, MoCA, MRT), Blutbild komplett. Wenn Demenz: Frühe Behandlung (Acetylcholinesterase-Hemmer) kann Verlauf um Jahre verzögern! Parallel: Gehirntraining intensiv, tägliche Bewegung (30+ Min.), sozial bleiben (Isolation beschleunigt Abbau), Stress minimieren. Frühe Diagnose = mehr Behandlungsoptionen!",
      en: "⚠️ WARNING: Significant cognitive deficits! You have noticeable problems with memory, concentration or orientation. A score of 35-49/100 means: This goes beyond normal forgetfulness. IMMEDIATE DOCTOR VISIT - this can have treatable causes! Possible reasons: Severe vitamin B12 deficiency (B12 <200 pg/ml causes neurological damage!), hypothyroidism, severe sleep apnea (oxygen deficiency damages brain), depression (causes 'pseudo-dementia'), medication side effects (check all medications!), beginning dementia (but often still treatable/slowable). Diagnostics: Neurologist, comprehensive tests (MMSE, MoCA, MRI), complete blood work. If dementia: Early treatment (acetylcholinesterase inhibitors) can delay progression by years! Parallel: Intensive brain training, daily movement (30+ min.), stay social (isolation accelerates decline), minimize stress. Early diagnosis = more treatment options!",
      es: "⚠️ ADVERTENCIA: ¡Déficits cognitivos significativos! Tienes problemas notables con memoria, concentración u orientación. Puntuación 35-49/100 significa: Esto va más allá olvido normal. VISITA INMEDIATA MÉDICO - ¡esto puede tener causas tratables! Razones posibles: Deficiencia severa vitamina B12 (B12 <200 pg/ml ¡causa daño neurológico!), hipotiroidismo, apnea sueño severa (deficiencia oxígeno daña cerebro), depresión (causa 'pseudo-demencia'), efectos secundarios medicamentos (¡revisar todos medicamentos!), demencia incipiente (pero a menudo aún tratable/retrasable). Diagnóstico: Neurólogo, pruebas completas (MMSE, MoCA, resonancia), análisis sangre completo. Si demencia: ¡Tratamiento temprano (inhibidores acetilcolinesterasa) puede retrasar progresión años! Paralelo: Entrenamiento cerebral intensivo, movimiento diario (30+ min.), mantener social (aislamiento acelera declive), minimizar estrés. ¡Diagnóstico temprano = más opciones tratamiento!",
      fr: "⚠️ AVERTISSEMENT : Déficits cognitifs significatifs ! Vous avez problèmes notables avec mémoire, concentration ou orientation. Score 35-49/100 signifie : Cela va au-delà oubli normal. VISITE IMMÉDIATE MÉDECIN - cela peut avoir causes traitables ! Raisons possibles : Carence sévère vitamine B12 (B12 <200 pg/ml cause dommages neurologiques !), hypothyroïdie, apnée sommeil sévère (déficience oxygène endommage cerveau), dépression (cause 'pseudo-démence'), effets secondaires médicaments (vérifier tous médicaments !), démence débutante (mais souvent encore traitable/ralentissable). Diagnostic : Neurologue, tests complets (MMSE, MoCA, IRM), analyses sang complètes. Si démence : Traitement précoce (inhibiteurs acétylcholinestérase) peut retarder progression années ! Parallèle : Entraînement cérébral intensif, mouvement quotidien (30+ min.), rester social (isolement accélère déclin), minimiser stress. Diagnostic précoce = plus options traitement !"
    },
    
    poor: {
      de: "🚨 KRITISCH: Schwere kognitive Beeinträchtigung! Du hast massive Probleme mit Gedächtnis, Denken oder Orientierung - das ist medizinischer Notfall! Bei Score <35/100 ist sofortige fachärztliche Abklärung zwingend. Die Realität: Entweder hast du schwere behandelbare Ursache (B12-Mangel, Schilddrüse, Depression, Medikamente) ODER fortgeschrittene Demenz. Beides erfordert SOFORT Handlung. Selbst bei Demenz: Frühe Behandlung kann noch Jahre Lebensqualität retten! Medikamente (Donepezil, Memantin) verzögern Verlauf, nicht-medikamentöse Therapien helfen. NOTFALL-PLAN: Morgen Neurologen-Termin (wenn nicht möglich: Hausarzt mit Überweisung), Blutbild komplett (B12, D, TSH, Glukose, Leber, Niere), Medikamenten-Check (Stop Anticholinergika!), MRT Kopf, neuropsychologische Tests. Parallel: Angehörige einbeziehen (du brauchst Unterstützung!), strukturiere Alltag (Routine hilft), maximiere soziale Kontakte (Isolation = Tod fürs Gehirn), bewege dich täglich. Ignoriere nicht - handle JETZT. Frühe Diagnose rettet kognitive Funktion!",
      en: "🚨 CRITICAL: Severe cognitive impairment! You have massive problems with memory, thinking or orientation - this is medical emergency! At score <35/100 immediate specialist evaluation is mandatory. Reality: Either you have severe treatable cause (B12 deficiency, thyroid, depression, medications) OR advanced dementia. Both require IMMEDIATE action. Even with dementia: Early treatment can still save years of quality of life! Medications (donepezil, memantine) delay progression, non-pharmacological therapies help. EMERGENCY PLAN: Tomorrow neurologist appointment (if not possible: family doctor with referral), complete blood work (B12, D, TSH, glucose, liver, kidney), medication check (stop anticholinergics!), brain MRI, neuropsychological tests. Parallel: Involve relatives (you need support!), structure daily life (routine helps), maximize social contacts (isolation = death for brain), move daily. Don't ignore - act NOW. Early diagnosis saves cognitive function!",
      es: "🚨 CRÍTICO: ¡Deterioro cognitivo severo! Tienes problemas masivos con memoria, pensamiento u orientación - ¡esto es emergencia médica! Con puntuación <35/100 evaluación especialista inmediata es obligatoria. Realidad: O tienes causa tratable severa (deficiencia B12, tiroides, depresión, medicamentos) O demencia avanzada. Ambos requieren acción INMEDIATA. Incluso con demencia: ¡Tratamiento temprano puede salvar años calidad vida! Medicamentos (donepezilo, memantina) retrasan progresión, terapias no farmacológicas ayudan. PLAN EMERGENCIA: Mañana cita neurólogo (si no posible: médico familia con referencia), análisis sangre completo (B12, D, TSH, glucosa, hígado, riñón), revisión medicamentos (¡detener anticolinérgicos!), resonancia cerebro, pruebas neuropsicológicas. Paralelo: Involucrar familiares (¡necesitas apoyo!), estructurar vida diaria (rutina ayuda), maximizar contactos sociales (aislamiento = muerte para cerebro), moverse diariamente. No ignores - actúa AHORA. ¡Diagnóstico temprano salva función cognitiva!",
      fr: "🚨 CRITIQUE : Détérioration cognitive sévère ! Vous avez problèmes massifs avec mémoire, pensée ou orientation - c'est urgence médicale ! Avec score <35/100 évaluation spécialiste immédiate est obligatoire. Réalité : Soit vous avez cause traitable sévère (carence B12, thyroïde, dépression, médicaments) OU démence avancée. Les deux nécessitent action IMMÉDIATE. Même avec démence : Traitement précoce peut encore sauver années qualité vie ! Médicaments (donépézil, mémantine) retardent progression, thérapies non médicamenteuses aident. PLAN URGENCE : Demain rendez-vous neurologue (si pas possible : médecin famille avec référence), analyses sang complètes (B12, D, TSH, glucose, foie, rein), vérification médicaments (arrêter anticholinergiques !), IRM cerveau, tests neuropsychologiques. Parallèle : Impliquer proches (vous avez besoin soutien !), structurer vie quotidienne (routine aide), maximiser contacts sociaux (isolement = mort pour cerveau), bouger quotidiennement. N'ignorez pas - agissez MAINTENANT. Diagnostic précoce sauve fonction cognitive !"
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