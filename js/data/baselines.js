// data/baselines.js
// Lebenserwartungs-Baselines nach Land, Geschlecht und Alter
// VERSION 2.0.0 - Erweitert für Penalty-System
// Basierend auf offiziellen Sterbetafeln 2022-2024

/**
 * DATENQUELLEN:
 * 
 * Deutschland: Destatis Sterbetafel 2022/2024
 * - https://www.destatis.de/EN/Themes/Society-Environment/Population/Deaths-Life-Expectancy/
 * - Männer: 78.47 Jahre bei Geburt (2022-2024)
 * - Frauen: 83.27 Jahre bei Geburt (2022-2024)
 * 
 * Spanien: INE (Instituto Nacional de Estadística) 2023
 * - https://www.ine.es/
 * - Männer: 81.11 Jahre bei Geburt (2023)
 * - Frauen: 86.34 Jahre bei Geburt (2023)
 * 
 * UK: ONS (Office for National Statistics) 2022-2024
 * - https://www.ons.gov.uk/
 * - Männer: 79.1 Jahre bei Geburt (2022-2024)
 * - Frauen: 83.0 Jahre bei Geburt (2022-2024)
 * 
 * USA: CDC NCHS Life Tables 2023
 * - https://www.cdc.gov/nchs/nvss/life-expectancy.htm
 * - Männer: 75.8 Jahre bei Geburt (2023)
 * - Frauen: 81.1 Jahre bei Geburt (2023)
 * 
 * WICHTIG: Die Werte sind "verbleibende Lebenserwartung" ab dem angegebenen Alter.
 * Um das Gesamt-Lebensalter zu berechnen: currentAge + baseline[age]
 */

// ========================================
// BASELINES - DURCHSCHNITTLICHE LEBENSERWARTUNG
// ========================================
// Diese Werte repräsentieren die DURCHSCHNITTLICHE Lebenserwartung
// und werden für VERGLEICHE verwendet ("Du liegst X Jahre über/unter Durchschnitt")

export const BASELINES = {
  // ========================================
  // DEUTSCHLAND (2022-2024)
  // ========================================
  de: {
    male: {
      0: 78.47,   // Bei Geburt
      1: 77.73,   // Mit 1 Jahr
      5: 73.82,
      10: 68.85,
      15: 63.88,
      20: 58.94,
      25: 54.08,
      30: 49.24,
      35: 44.42,
      40: 39.55,
      45: 34.73,
      50: 30.00,
      55: 25.40,
      60: 21.58,   // Mit 60 Jahren: noch 21.58 Jahre
      65: 17.71,   // Mit 65 Jahren: noch 17.71 Jahre → Gesamt: 82.71
      70: 14.12,
      75: 10.81,
      80: 8.00,
      85: 5.72,
      90: 4.02,
      95: 2.82,
      100: 2.01
    },
    female: {
      0: 83.27,   // Bei Geburt
      1: 82.51,
      5: 78.59,
      10: 73.62,
      15: 68.64,
      20: 63.68,
      25: 58.76,
      30: 53.85,
      35: 48.95,
      40: 44.06,
      45: 39.20,
      50: 34.40,
      55: 29.68,
      60: 25.05,
      65: 20.56,   // Mit 65 Jahren: noch 20.56 Jahre → Gesamt: 85.56
      70: 16.26,
      75: 12.26,
      80: 8.74,
      85: 6.02,
      90: 4.08,
      95: 2.78,
      100: 1.93
    }
  },

  // ========================================
  // SPANIEN (2023)
  // ========================================
  es: {
    male: {
      0: 81.11,   // Bei Geburt (Spanien hat höchste Lebenserwartung)
      1: 80.35,
      5: 76.41,
      10: 71.44,
      15: 66.46,
      20: 61.52,
      25: 56.63,
      30: 51.75,
      35: 46.88,
      40: 42.02,
      45: 37.19,
      50: 32.42,
      55: 27.76,
      60: 23.22,
      65: 18.86,   // Mit 65: noch 18.86 Jahre → Gesamt: 83.86
      70: 14.78,
      75: 11.08,
      80: 7.93,
      85: 5.45,
      90: 3.68,
      95: 2.51,
      100: 1.79
    },
    female: {
      0: 86.34,   // Bei Geburt
      1: 85.57,
      5: 81.63,
      10: 76.65,
      15: 71.67,
      20: 66.70,
      25: 61.74,
      30: 56.80,
      35: 51.87,
      40: 46.96,
      45: 42.08,
      50: 37.25,
      55: 32.49,
      60: 27.83,
      65: 23.29,   // Mit 65: noch 23.29 Jahre → Gesamt: 88.29
      70: 18.94,
      75: 14.84,
      80: 11.08,
      85: 7.84,
      90: 5.36,
      95: 3.61,
      100: 2.46
    }
  },

  // ========================================
  // VEREINIGTES KÖNIGREICH (2022-2024)
  // ========================================
  uk: {
    male: {
      0: 79.1,    // Bei Geburt
      1: 78.3,
      5: 74.4,
      10: 69.4,
      15: 64.5,
      20: 59.6,
      25: 54.7,
      30: 49.9,
      35: 45.0,
      40: 40.2,
      45: 35.4,
      50: 30.7,
      55: 26.2,
      60: 21.9,
      65: 18.7,    // Mit 65: noch 18.7 Jahre → Gesamt: 83.7
      70: 14.8,
      75: 11.3,
      80: 8.2,
      85: 5.8,
      90: 4.0,
      95: 2.8,
      100: 2.0
    },
    female: {
      0: 83.0,    // Bei Geburt
      1: 82.2,
      5: 78.3,
      10: 73.3,
      15: 68.3,
      20: 63.4,
      25: 58.5,
      30: 53.6,
      35: 48.7,
      40: 43.8,
      45: 39.0,
      50: 34.3,
      55: 29.6,
      60: 25.1,
      65: 21.2,    // Mit 65: noch 21.2 Jahre → Gesamt: 86.2
      70: 16.9,
      75: 12.9,
      80: 9.4,
      85: 6.5,
      90: 4.4,
      95: 3.0,
      100: 2.1
    }
  },

  // ========================================
  // USA (2023)
  // ========================================
  us: {
    male: {
      0: 75.8,    // Bei Geburt (niedriger als Europa)
      1: 75.2,
      5: 71.3,
      10: 66.3,
      15: 61.4,
      20: 56.6,
      25: 52.0,
      30: 47.3,
      35: 42.6,
      40: 37.9,
      45: 33.3,
      50: 28.9,
      55: 24.6,
      60: 20.6,
      65: 18.2,    // Mit 65: noch 18.2 Jahre → Gesamt: 83.2
      70: 14.3,
      75: 10.9,
      80: 7.9,
      85: 5.6,
      90: 3.9,
      95: 2.7,
      100: 1.9
    },
    female: {
      0: 81.1,    // Bei Geburt
      1: 80.4,
      5: 76.5,
      10: 71.5,
      15: 66.6,
      20: 61.7,
      25: 56.8,
      30: 52.0,
      35: 47.1,
      40: 42.3,
      45: 37.6,
      50: 32.9,
      55: 28.4,
      60: 24.1,
      65: 20.7,    // Mit 65: noch 20.7 Jahre → Gesamt: 85.7
      70: 16.6,
      75: 12.8,
      80: 9.5,
      85: 6.7,
      90: 4.6,
      95: 3.1,
      100: 2.2
    }
  },

  // ========================================
  // FALLBACK: Globaler Durchschnitt
  // ========================================
  other: {
    male: {
      0: 73.0,
      1: 72.4,
      5: 68.5,
      10: 63.5,
      15: 58.6,
      20: 53.8,
      25: 49.0,
      30: 44.3,
      35: 39.6,
      40: 35.0,
      45: 30.5,
      50: 26.2,
      55: 22.0,
      60: 18.2,
      65: 14.8,
      70: 11.7,
      75: 8.9,
      80: 6.5,
      85: 4.6,
      90: 3.2,
      95: 2.2,
      100: 1.6
    },
    female: {
      0: 78.0,
      1: 77.3,
      5: 73.4,
      10: 68.5,
      15: 63.5,
      20: 58.6,
      25: 53.7,
      30: 48.9,
      35: 44.1,
      40: 39.3,
      45: 34.6,
      50: 30.0,
      55: 25.6,
      60: 21.4,
      65: 17.5,
      70: 13.9,
      75: 10.6,
      80: 7.8,
      85: 5.5,
      90: 3.8,
      95: 2.6,
      100: 1.8
    }
  }
};

// ========================================
// COUNTRY MAXIMUMS - FÜR PENALTY SYSTEM
// ========================================
// Diese Werte repräsentieren das MAXIMUM bei perfektem Leben
// und sind der STARTPUNKT für die Penalty-Berechnung
// 
// PHILOSOPHIE:
// - Start: Country Maximum (99 Jahre für beste Länder)
// - Schlechtes Verhalten = Penalty (Abzug)
// - Gutes Verhalten = Keine Penalty (0)
// - Resultat: Maximale Lebenserwartung für dieses Land
//
// BEGRÜNDUNG DER WERTE:
// - Japan: 100 (Okinawa Blue Zone, höchste Lebenserwartung weltweit)
// - Spanien/Italien/Griechenland: 99 (Mediterrane Ernährung, Blue Zones)
// - Schweiz/Nordeuropa: 97-98 (Exzellente Gesundheitssysteme)
// - Deutschland/UK/Frankreich: 96 (Gute Systeme, nicht optimal)
// - USA: 95 (Adipositas-Epidemie, Healthcare-Zugang)
// - Other: 95 (Konservativer globaler Durchschnitt)

export const COUNTRY_MAXIMUM = {
  // Blue Zones & Top Countries
  'japan': 100,
  'jp': 100,
  
  'italy': 99,
  'it': 99,
  
  'spain': 99,
  'es': 99,
  
  'greece': 99,
  'gr': 99,
  
  // Sehr gute Systeme
  'switzerland': 98,
  'ch': 98,
  
  'singapore': 98,
  'sg': 98,
  
  'australia': 98,
  'au': 98,
  
  'iceland': 98,
  'is': 98,
  
  'norway': 97,
  'no': 97,
  
  'sweden': 97,
  'se': 97,
  
  'netherlands': 97,
  'nl': 97,
  
  'france': 97,
  'fr': 97,
  
  'canada': 97,
  'ca': 97,
  
  'south_korea': 98,
  'kr': 98,
  
  'new_zealand': 97,
  'nz': 97,
  
  // Gute Systeme
  'germany': 96,
  'de': 96,
  
  'united_kingdom': 96,
  'uk': 96,
  'gb': 96,
  
  'austria': 96,
  'at': 96,
  
  'portugal': 96,
  'pt': 96,
  
  'belgium': 96,
  'be': 96,
  
  'finland': 96,
  'fi': 96,
  
  'ireland': 96,
  'ie': 96,
  
  'luxembourg': 97,
  'lu': 97,
  
  'denmark': 96,
  'dk': 96,
  
  // Durchschnitt
  'united_states': 95,
  'usa': 95,
  'us': 95,
  
  'poland': 95,
  'pl': 95,
  
  'czech_republic': 95,
  'cz': 95,
  
  'slovenia': 95,
  'si': 95,
  
  'estonia': 95,
  'ee': 95,
  
  'chile': 95,
  'cl': 95,
  
  'costa_rica': 95,
  'cr': 95,
  
  // Unterdurchschnitt
  'russia': 92,
  'ru': 92,
  
  'brazil': 94,
  'br': 94,
  
  'mexico': 94,
  'mx': 94,
  
  'argentina': 94,
  'ar': 94,
  
  'china': 95,
  'cn': 95,
  
  'india': 93,
  'in': 93,
  
  'turkey': 94,
  'tr': 94,
  
  'south_africa': 92,
  'za': 92,
  
  // Default
  'other': 95
};

// ========================================
// HELPER FUNCTIONS - BASELINES
// ========================================

/**
 * Hole Baseline für ein bestimmtes Land, Geschlecht und Alter
 * @param {string} country - Ländercode ('de', 'es', 'uk', 'us', 'other')
 * @param {string} gender - 'male', 'female', oder 'other'
 * @param {number} age - Alter in Jahren
 * @returns {number} Verbleibende Lebenserwartung in Jahren
 */
export function getBaseline(country, gender, age) {
  // Normalisiere inputs
  const normalizedCountry = country?.toLowerCase() || 'other';
  const normalizedGender = gender?.toLowerCase() || 'male';
  
  // Fallback auf 'other' wenn Land nicht existiert
  const countryData = BASELINES[normalizedCountry] || BASELINES.other;
  
  // Für 'other' gender: Durchschnitt von male/female
  let genderData;
  if (normalizedGender === 'other' || normalizedGender === 'diverse') {
    const maleBaseline = getBaseline(normalizedCountry, 'male', age);
    const femaleBaseline = getBaseline(normalizedCountry, 'female', age);
    return (maleBaseline + femaleBaseline) / 2;
  } else {
    genderData = countryData[normalizedGender] || countryData.male;
  }
  
  // Hole verfügbare Altersstufen (sortiert)
  const availableAges = Object.keys(genderData)
    .map(Number)
    .sort((a, b) => a - b);
  
  // Exakte Übereinstimmung?
  if (genderData[age] !== undefined) {
    return genderData[age];
  }
  
  // Finde umgebende Altersstufen für Interpolation
  const lowerAge = availableAges.filter(a => a <= age).pop();
  const upperAge = availableAges.find(a => a > age);
  
  // Wenn Alter unter kleinster Stufe
  if (lowerAge === undefined) {
    return genderData[upperAge];
  }
  
  // Wenn Alter über größter Stufe
  if (upperAge === undefined) {
    return genderData[lowerAge];
  }
  
  // Lineare Interpolation
  const lowerValue = genderData[lowerAge];
  const upperValue = genderData[upperAge];
  const ratio = (age - lowerAge) / (upperAge - lowerAge);
  
  return lowerValue + (upperValue - lowerValue) * ratio;
}

/**
 * Berechne Gesamt-Lebensalter (current age + remaining years)
 * @param {string} country - Ländercode
 * @param {string} gender - 'male', 'female', 'other'
 * @param {number} currentAge - Aktuelles Alter
 * @returns {number} Voraussichtliches Gesamt-Lebensalter
 */
export function getTotalLifeExpectancy(country, gender, currentAge) {
  const remainingYears = getBaseline(country, gender, currentAge);
  return currentAge + remainingYears;
}

/**
 * Vergleiche User mit Durchschnitt
 * @param {string} country - Ländercode
 * @param {string} gender - Geschlecht
 * @param {number} currentAge - Aktuelles Alter
 * @param {number} userLifeExpectancy - Berechnete User-Lebenserwartung
 * @returns {object} Vergleichsdaten
 */
export function compareToBaseline(country, gender, currentAge, userLifeExpectancy) {
  const baseline = getTotalLifeExpectancy(country, gender, currentAge);
  const difference = userLifeExpectancy - baseline;
  const percentile = calculatePercentile(difference);
  
  return {
    baseline: Math.round(baseline * 10) / 10,
    userValue: Math.round(userLifeExpectancy * 10) / 10,
    difference: Math.round(difference * 10) / 10,
    percentile,
    betterThan: percentile,
    worseThan: 100 - percentile
  };
}

/**
 * Schätze Perzentil basierend auf Abweichung vom Durchschnitt
 * Annahme: Normalverteilung mit Standardabweichung ~8 Jahre
 * @param {number} difference - Abweichung vom Durchschnitt in Jahren
 * @returns {number} Perzentil (0-100)
 */
function calculatePercentile(difference) {
  // Standardabweichung der Lebenserwartung: ~8 Jahre
  const standardDeviation = 8;
  
  // Z-Score berechnen
  const zScore = difference / standardDeviation;
  
  // Approximative Normalverteilungs-CDF
  // Für einfache Schätzung: Sigmoid-Funktion
  const percentile = 50 + 50 * (2 / (1 + Math.exp(-zScore)) - 1);
  
  return Math.round(Math.max(1, Math.min(99, percentile)));
}

// ========================================
// HELPER FUNCTIONS - COUNTRY MAXIMUM
// ========================================

/**
 * Hole Country Maximum für Penalty-Berechnung
 * @param {string} country - Ländercode (z.B. 'de', 'germany', 'es', 'spain')
 * @returns {number} Maximum Lebenserwartung für dieses Land
 */
export function getCountryMaximum(country) {
  const normalized = country?.toLowerCase().trim() || 'other';
  return COUNTRY_MAXIMUM[normalized] || COUNTRY_MAXIMUM['other'];
}

/**
 * Hole alle verfügbaren Länder (BASELINES)
 * @returns {Array} Liste der Ländercodes
 */
export function getAvailableCountries() {
  return Object.keys(BASELINES).filter(k => k !== 'other');
}

/**
 * Hole alle verfügbaren Länder (COUNTRY_MAXIMUM)
 * @returns {Array} Liste der Ländercodes mit Maximums
 */
export function getAvailableCountryMaximums() {
  const countries = Object.keys(COUNTRY_MAXIMUM);
  // Entferne Duplikate (z.B. 'de' und 'germany')
  const unique = {};
  countries.forEach(code => {
    const max = COUNTRY_MAXIMUM[code];
    if (!unique[max] || code.length < unique[max].length) {
      unique[max] = code;
    }
  });
  return Object.values(unique).filter(c => c !== 'other');
}

/**
 * Hole länderspezifische Metadaten
 * @param {string} country - Ländercode
 * @returns {object} Metadaten
 */
export function getCountryMetadata(country) {
  const metadata = {
    de: {
      name: { de: 'Deutschland', en: 'Germany', es: 'Alemania', fr: 'Allemagne' },
      dataYear: '2022-2024',
      source: 'Destatis',
      url: 'https://www.destatis.de/',
      maximum: COUNTRY_MAXIMUM['de']
    },
    es: {
      name: { de: 'Spanien', en: 'Spain', es: 'España', fr: 'Espagne' },
      dataYear: '2023',
      source: 'INE',
      url: 'https://www.ine.es/',
      maximum: COUNTRY_MAXIMUM['es']
    },
    uk: {
      name: { de: 'Vereinigtes Königreich', en: 'United Kingdom', es: 'Reino Unido', fr: 'Royaume-Uni' },
      dataYear: '2022-2024',
      source: 'ONS',
      url: 'https://www.ons.gov.uk/',
      maximum: COUNTRY_MAXIMUM['uk']
    },
    us: {
      name: { de: 'USA', en: 'USA', es: 'EE.UU.', fr: 'États-Unis' },
      dataYear: '2023',
      source: 'CDC NCHS',
      url: 'https://www.cdc.gov/nchs/',
      maximum: COUNTRY_MAXIMUM['us']
    },
    other: {
      name: { de: 'Anderes', en: 'Other', es: 'Otro', fr: 'Autre' },
      dataYear: '~2023',
      source: 'WHO Global Average',
      url: 'https://www.who.int/',
      maximum: COUNTRY_MAXIMUM['other']
    }
  };
  
  return metadata[country] || metadata.other;
}

/**
 * Validiere Country-Code
 * @param {string} country - Ländercode
 * @returns {boolean} Ist gültig?
 */
export function isValidCountry(country) {
  return BASELINES.hasOwnProperty(country?.toLowerCase());
}

/**
 * Validiere Country-Code für Maximum
 * @param {string} country - Ländercode
 * @returns {boolean} Ist gültig?
 */
export function isValidCountryMaximum(country) {
  return COUNTRY_MAXIMUM.hasOwnProperty(country?.toLowerCase());
}

/**
 * Validiere Gender
 * @param {string} gender - Geschlecht
 * @returns {boolean} Ist gültig?
 */
export function isValidGender(gender) {
  const normalized = gender?.toLowerCase();
  return ['male', 'female', 'other', 'diverse'].includes(normalized);
}

/**
 * Mappe Common Country Names zu Codes
 * @param {string} countryInput - Länderbezeichnung (z.B. 'Germany', 'deutschland', 'DE')
 * @returns {string} Normalisierter Ländercode
 */
export function normalizeCountryCode(countryInput) {
  const input = countryInput?.toLowerCase().trim();
  
  // Mapping von Namen zu Codes
  const mapping = {
    'germany': 'de',
    'deutschland': 'de',
    'spain': 'es',
    'españa': 'es',
    'spanien': 'es',
    'united kingdom': 'uk',
    'vereinigtes königreich': 'uk',
    'great britain': 'uk',
    'england': 'uk',
    'united states': 'us',
    'usa': 'us',
    'vereinigte staaten': 'us',
    'japan': 'jp',
    'italy': 'it',
    'italien': 'it',
    'france': 'fr',
    'frankreich': 'fr',
    'switzerland': 'ch',
    'schweiz': 'ch',
    // Add more as needed
  };
  
  return mapping[input] || input || 'other';
}

// ========================================
// EXPORT DEFAULT
// ========================================
export default BASELINES;