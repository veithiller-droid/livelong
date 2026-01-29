// ui/result_render.js
// Ergebnis-Rendering für Dr. Livelong
// FREE Version: Basis-Ergebnis + Top 3 Risks/Strengths
// Version 1.0.0

import { STATE, getCalculation, getCurrentAge, getBMI } from '../core/state.js';
import { getCalculationSummary, getTopRisks, getTopStrengths } from '../core/scoring.js';
import { checkAccess, showPaywall } from './paywall.js';
import { FACTORS } from '../data/factors.js';
import { UI_TEXTS } from '../data/texts.js';

// Get language from localStorage or default to 'de'
const CURRENT_LANG = localStorage.getItem('dr_livelong_lang') || 'de';

// ========================================
// HELPER FUNCTION
// ========================================

function getText(path, replacements = {}) {
  const keys = path.split('.');
  let text = UI_TEXTS;
  
  for (const key of keys) {
    text = text[key];
    if (!text) return path;
  }
  
  let translated = text[CURRENT_LANG] || text.de || text;
  
  // Replace placeholders {key} with values from replacements object
  if (typeof translated === 'string' && Object.keys(replacements).length > 0) {
    translated = translated.replace(/\{(\w+)\}/g, (match, key) => {
      return replacements[key] !== undefined ? replacements[key] : match;
    });
  }
  
  return translated;
}

// ========================================
// MAIN RENDER FUNCTION
// ========================================

export function renderResult() {
  const calculation = getCalculation();
  
  if (!calculation || !calculation.timestamp) {
    showError('Keine Berechnung gefunden. Bitte führe zuerst den Test durch.');
    return;
  }
  
  const summary = getCalculationSummary(calculation);
  const container = document.getElementById('result-container');
  
  if (!container) {
    console.error('Result container not found');
    return;
  }
  
  container.innerHTML = '';
  
  renderHeader(container, summary);
  renderLifeExpectancy(container, summary, calculation);
  renderComparison(container, summary, calculation);
  renderTopFactors(container, summary, calculation);
  renderNextSteps(container, summary);
  renderDisclaimer(container);
  
  if (checkAccess()) {
    renderPaidFeatures(container, calculation);
  }
}

// ========================================
// HEADER
// ========================================

function renderHeader(container, summary) {
  const header = document.createElement('div');
  header.className = 'result-header';
  header.style.cssText = `
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px;
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h1');
  title.style.cssText = `
    margin: 0 0 10px 0;
    font-size: 32px;
  `;
  title.textContent = getText('result_page.title');
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    margin: 0;
    font-size: 18px;
    opacity: 0.9;
  `;
  subtitle.textContent = `${getText('result_page.calculated_on')} ${new Date().toLocaleDateString(CURRENT_LANG === 'de' ? 'de-DE' : CURRENT_LANG === 'es' ? 'es-ES' : CURRENT_LANG === 'fr' ? 'fr-FR' : 'en-GB')}`;
  
  header.appendChild(title);
  header.appendChild(subtitle);
  container.appendChild(header);
}

// ========================================
// LIFE EXPECTANCY
// ========================================

function renderLifeExpectancy(container, summary, calculation) {
  const section = document.createElement('div');
  section.className = 'life-expectancy-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    text-align: center;
  `;
  
  const mainNumber = document.createElement('div');
  mainNumber.style.cssText = `
    font-size: 72px;
    font-weight: bold;
    color: ${summary.is_above_average ? '#2ecc71' : '#e74c3c'};
    margin: 20px 0;
  `;
  mainNumber.textContent = calculation.total_life_expectancy.toFixed(1);
  
  const yearsLabel = document.createElement('div');
  yearsLabel.style.cssText = `
    font-size: 24px;
    color: #666;
    margin-bottom: 30px;
  `;
  yearsLabel.textContent = getText('result_page.years_label');
  
  const ageInfo = document.createElement('div');
  ageInfo.style.cssText = `
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
  `;
  const currentAge = calculation.age;
  const yearsToLive = Math.max(0, calculation.total_life_expectancy - currentAge);
  ageInfo.innerHTML = `
    ${getText('result_page.age_text', { age: currentAge })}<br>
    ${getText('result_page.years_to_live_text', { years: yearsToLive.toFixed(1) })}
  `;
  
  const confidence = document.createElement('div');
  confidence.style.cssText = `
    font-size: 14px;
    color: #999;
    margin-top: 20px;
  `;
  confidence.textContent = getText('result_page.confidence_text', { percent: summary.confidence });
  
  section.appendChild(mainNumber);
  section.appendChild(yearsLabel);
  section.appendChild(ageInfo);
  section.appendChild(confidence);
  container.appendChild(section);
}

// ========================================
// COMPARISON
// ========================================

function renderComparison(container, summary, calculation) {
  const section = document.createElement('div');
  section.className = 'comparison-section';
  section.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 24px;
    text-align: center;
  `;
  title.textContent = getText('result_page.comparison_title');
  
  const baseline = calculation.baseline;
  const diff = summary.years_difference;
  const isAbove = summary.is_above_average;
  
  const comparisonText = document.createElement('p');
  comparisonText.style.cssText = `
    font-size: 18px;
    text-align: center;
    margin: 20px 0;
  `;
  
  if (isAbove) {
    comparisonText.innerHTML = getText('result_page.difference_above')
      .replace('{diff}', `<strong style="color: #2ecc71;">${diff.toFixed(1)}</strong>`);
  } else if (diff === 0) {
    comparisonText.textContent = getText('result_page.difference_equal');
  } else {
    comparisonText.innerHTML = getText('result_page.difference_below')
      .replace('{diff}', `<strong style="color: #e74c3c;">${diff.toFixed(1)}</strong>`);
  }
  
  const baselineInfo = document.createElement('p');
  baselineInfo.style.cssText = `
    font-size: 16px;
    color: #666;
    text-align: center;
  `;
  baselineInfo.textContent = getText('result_page.baseline_compare')
    .replace('{baseline}', baseline.toFixed(1));
  
  const percentileBar = renderPercentileBar(summary.percentile);
  
  const percentileText = document.createElement('p');
  percentileText.style.cssText = `
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
  `;
  percentileText.innerHTML = getText('result_page.percentile')
    .replace('{percent}', `<strong>${summary.percentile}</strong>`);
  
  section.appendChild(title);
  section.appendChild(comparisonText);
  section.appendChild(baselineInfo);
  section.appendChild(percentileBar);
  section.appendChild(percentileText);
  container.appendChild(section);
}

function renderPercentileBar(percentile) {
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    height: 40px;
    background: #ecf0f1;
    border-radius: 20px;
    position: relative;
    margin: 20px 0;
    overflow: hidden;
  `;
  
  const fill = document.createElement('div');
  fill.style.cssText = `
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${percentile}%;
    background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
    border-radius: 20px;
    transition: width 1s ease-out;
  `;
  
  const marker = document.createElement('div');
  marker.style.cssText = `
    position: absolute;
    left: ${percentile}%;
    top: -5px;
    transform: translateX(-50%);
    width: 3px;
    height: 50px;
    background: #e74c3c;
  `;
  
  const label = document.createElement('div');
  label.style.cssText = `
    position: absolute;
    left: ${percentile}%;
    top: -30px;
    transform: translateX(-50%);
    background: #e74c3c;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
  `;
  label.textContent = `Du: ${percentile}%`;
  
  container.appendChild(fill);
  container.appendChild(marker);
  container.appendChild(label);
  
  setTimeout(() => {
    fill.style.width = `${percentile}%`;
  }, 100);
  
  return container;
}

// ========================================
// TOP FACTORS (FREE: Top 3 only, blurred)
// ========================================

function renderTopFactors(container, summary, calculation) {
  const section = document.createElement('div');
  section.className = 'top-factors-section';
  section.style.cssText = `
    margin-bottom: 30px;
  `;
  
  const topRisks = getTopRisks(calculation.factors, 3);
  const topStrengths = getTopStrengths(calculation.factors, 3);
  
  if (topRisks.length > 0) {
    const risksSection = renderTopFactorsList(
      getText('result_page.top_risks_title'),
      topRisks,
      'risk',
      !checkAccess()
    );
    section.appendChild(risksSection);
  }
  
  if (topStrengths.length > 0) {
    const strengthsSection = renderTopFactorsList(
      getText('result_page.top_strengths_title'),
      topStrengths,
      'strength',
      !checkAccess()
    );
    section.appendChild(strengthsSection);
  }
  
  container.appendChild(section);
}

function renderTopFactorsList(title, factors, type, blurred) {
  const section = document.createElement('div');
  section.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    position: relative;
  `;
  
 const heading = document.createElement('h2');
heading.style.cssText = `
  margin: 0 0 20px 0;
  font-size: 24px;
  color: ${type === 'risk' ? '#e74c3c' : '#2ecc71'};
`;

// DYNAMIC TITLE based on actual count
if (type === 'risk') {
  const count = factors.length;
  heading.textContent = count === 0 ? 'Keine Risikofaktoren ✅'
                      : count === 1 ? 'Dein größter Risikofaktor'
                      : count === 2 ? 'Deine 2 größten Risikofaktoren'
                      : 'Deine Top 3 Risikofaktoren';
} else {
  const count = factors.length;
  heading.textContent = count === 0 ? 'Keine besonderen Stärken'
                      : count === 1 ? 'Deine größte Stärke'
                      : count === 2 ? 'Deine 2 größten Stärken'
                      : 'Deine Top 3 Stärken';
}
  
  const list = document.createElement('div');
  list.style.cssText = `
    ${blurred ? 'filter: blur(5px); pointer-events: none;' : ''}
  `;
  
  factors.forEach((factor, index) => {
    const factorData = FACTORS[factor.id];
    if (!factorData) return;
    
    const item = document.createElement('div');
    item.style.cssText = `
      display: flex;
      align-items: center;
      padding: 15px;
      background: ${type === 'risk' ? '#fff5f5' : '#f0fff4'};
      border-left: 4px solid ${type === 'risk' ? '#e74c3c' : '#2ecc71'};
      border-radius: 8px;
      margin-bottom: 15px;
    `;
    
    const icon = document.createElement('div');
    icon.style.cssText = `
      font-size: 32px;
      margin-right: 15px;
    `;
    icon.textContent = factorData.icon || (type === 'risk' ? '⚠️' : '✅');
    
    const content = document.createElement('div');
    content.style.cssText = `
      flex: 1;
    `;
    
    const factorTitle = document.createElement('div');
    factorTitle.style.cssText = `
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 5px;
    `;
    factorTitle.textContent = `${index + 1}. ${factorData.label[CURRENT_LANG]}`;
    
    const score = document.createElement('div');
    score.style.cssText = `
      font-size: 14px;
      color: #666;
    `;
    score.textContent = getText('result_page.score_impact', {
      score: factor.score,
      impact: `${factor.impact > 0 ? '+' : ''}${factor.impact.toFixed(1)}`
    });
    
    content.appendChild(factorTitle);
    content.appendChild(score);
    item.appendChild(icon);
    item.appendChild(content);
    list.appendChild(item);
  });
  
  section.appendChild(heading);
  section.appendChild(list);
  
  if (blurred) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(255, 255, 255, 0.95);
      padding: 20px 30px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      text-align: center;
      cursor: pointer;
    `;
    overlay.innerHTML = `
      <div style="font-size: 48px; margin-bottom: 10px;">🔒</div>
      <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">
        ${getText('result_page.locked_hint')}
      </div>
      <div style="font-size: 14px; color: #666;">
        Nur €9.99 für vollständige Analyse
      </div>
    `;
    overlay.addEventListener('click', showPaywall);
    section.appendChild(overlay);
  }
  
  return section;
}

// ========================================
// NEXT STEPS (FREE)
// ========================================

function renderNextSteps(container, summary) {
  const section = document.createElement('div');
  section.className = 'next-steps-section';
  section.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 24px;
  `;
  title.textContent = getText('result_page.next_steps_title');
  
  const options = document.createElement('div');
  options.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  `;
  
  const unlockButton = createActionButton(
    getText('result_page.unlock_full_profile'),
    getText('result_page.unlock_description'),
    '#2ecc71',
    () => showPaywall()
  );
  
  const retakeButton = createActionButton(
    getText('result_page.repeat_test'),
    getText('result_page.repeat_test_description'),
    '#3498db',
    () => {
      if (confirm(getText('result_page.confirm_restart'))) {
        window.location.href = 'meta.html';
      }
    }
  );
  
  const shareButton = createActionButton(
    getText('result_page.share_result'),
    getText('result_page.share_result_description'),
    '#9b59b6',
    () => shareResult(summary)
  );
  
  const downloadButton = createActionButton(
    getText('result_page.download_pdf'),
    getText('result_page.download_pdf_description'),
    '#e67e22',
    () => {
      if (checkAccess()) {
        downloadPDF();
      } else {
        alert(getText('result_page.pdf_only_premium'));
        showPaywall();
      }
    }
  );
  
  options.appendChild(unlockButton);
  options.appendChild(retakeButton);
  options.appendChild(shareButton);
  options.appendChild(downloadButton);
  
  section.appendChild(title);
  section.appendChild(options);
  container.appendChild(section);
}

function createActionButton(title, description, color, onClick) {
  const button = document.createElement('div');
  button.style.cssText = `
    background: ${color};
    color: white;
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  `;
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
  });
  button.addEventListener('click', onClick);
  
  const titleEl = document.createElement('div');
  titleEl.style.cssText = `
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  `;
  titleEl.textContent = title;
  
  const descEl = document.createElement('div');
  descEl.style.cssText = `
    font-size: 14px;
    opacity: 0.9;
  `;
  descEl.textContent = description;
  
  button.appendChild(titleEl);
  button.appendChild(descEl);
  
  return button;
}

// ========================================
// PAID FEATURES (nur wenn unlocked)
// ========================================

function renderPaidFeatures(container, calculation) {
  const section = document.createElement('div');
  section.className = 'paid-features-section';
  section.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 24px;
  `;
  title.textContent = getText('result_page.premium_unlocked_title');
  
  const description = document.createElement('p');
  description.style.cssText = `
    font-size: 16px;
    margin-bottom: 20px;
  `;
  description.textContent = getText('result_page.premium_access_description');
  
  const links = document.createElement('div');
  links.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  `;
  
  const profileLink = createPaidLink(getText('common.detailed_profile'), 'profile.html');
  const whatIfLink = createPaidLink(getText('common.what_if_simulator'), 'what-if.html');
  const methodLink = createPaidLink(getText('common.methodology'), 'methodology.html');
  
  links.appendChild(profileLink);
  links.appendChild(whatIfLink);
  links.appendChild(methodLink);
  
  section.appendChild(title);
  section.appendChild(description);
  section.appendChild(links);
  container.appendChild(section);
}

function createPaidLink(text, href) {
  const link = document.createElement('a');
  link.href = href;
  link.style.cssText = `
    display: block;
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: background 0.2s;
  `;
  link.addEventListener('mouseenter', () => {
    link.style.background = 'rgba(255, 255, 255, 0.3)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.background = 'rgba(255, 255, 255, 0.2)';
  });
  link.textContent = text;
  return link;
}

// ========================================
// DISCLAIMER
// ========================================

function renderDisclaimer(container) {
  const disclaimer = document.createElement('div');
  disclaimer.style.cssText = `
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
  `;
  
  const icon = document.createElement('span');
  icon.style.cssText = `
    font-size: 24px;
    margin-right: 10px;
  `;
  icon.textContent = 'ℹ️';
  
  const text = document.createElement('span');
  text.style.cssText = `
    font-size: 14px;
    color: #856404;
  `;
  text.textContent = getText('result_page.disclaimer');
  
  disclaimer.appendChild(icon);
  disclaimer.appendChild(text);
  container.appendChild(disclaimer);
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function showError(message) {
  const container = document.getElementById('result-container');
  if (!container) return;
  
  container.innerHTML = `
    <div style="
      background: #fff5f5;
      border: 2px solid #e74c3c;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      margin: 50px auto;
      max-width: 600px;
    ">
      <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
      <div style="font-size: 20px; font-weight: bold; margin-bottom: 10px; color: #e74c3c;">
        Fehler
      </div>
      <div style="font-size: 16px; color: #666; margin-bottom: 20px;">
        ${message}
      </div>
      <button onclick="window.location.href='index.html'" style="
        background: #3498db;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
      ">
        Zurück zur Startseite
      </button>
    </div>
  `;
}

function shareResult(summary) {
  const text = `Ich habe meine Lebenserwartung berechnet: ${summary.life_expectancy.toFixed(1)} Jahre! ${summary.is_above_average ? '🎉' : ''} Probier es selbst aus:`;
  const url = window.location.origin;
  
  if (navigator.share) {
    navigator.share({
      title: 'Dr. Livelong - Mein Ergebnis',
      text: text,
      url: url
    }).catch(err => console.log('Share cancelled', err));
  } else {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
  }
}

function downloadPDF() {
  alert(getText('result_page.pdf_download_coming'));
}

// ========================================
// INIT
// ========================================

export function initResultPage() {
  renderResult();
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initResultPage);
}

// ========================================
// EXPORT
// ========================================

export default {
  renderResult,
  initResultPage
};