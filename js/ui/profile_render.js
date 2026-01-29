// ui/profile_render.js
// Detailliertes Profil-Rendering für Dr. Livelong
// PAID ONLY - Alle 19 Faktoren, Empfehlungen, Interaktionen
// Version 1.0.0

import { STATE, getCalculation, getAllMetaAnswers, getAllAnswers } from '../core/state.js';
import { generateProfile } from '../core/profile.js';
import { getFactorLevel } from '../core/scoring.js';
import { checkAccess, showPaywall } from './paywall.js';
import { FACTORS, CLUSTERS } from '../data/factors.js';
import { UI_TEXTS } from '../data/texts.js';
import { questions } from '../data/questions.js';
import META_QUESTIONS from '../data/meta_questions.js';

// Get language from localStorage or default to 'de'
const CURRENT_LANG = localStorage.getItem('dr_livelong_lang') || 'de';

// ========================================
// HELPER FUNCTION
// ========================================

function getText(path) {
  const keys = path.split('.');
  let text = UI_TEXTS;
  
  for (const key of keys) {
    text = text[key];
    if (!text) return path;
  }
  
  return text[CURRENT_LANG] || text.de || text;
}

// ========================================
// MAIN RENDER FUNCTION
// ========================================

export function renderProfile() {
  if (!checkAccess()) {
    showPaywall();
    setTimeout(() => {
      window.location.href = 'result.html';
    }, 3000);
    return;
  }
  
  const calculation = getCalculation();
  
  if (!calculation || !calculation.timestamp) {
    showError('Keine Berechnung gefunden. Bitte führe zuerst den Test durch.');
    return;
  }
  
  const meta = getAllMetaAnswers();
  const answers = getAllAnswers();
  
  const profile = generateProfile(calculation, meta, answers);
  
  const container = document.getElementById('profile-container');
  
  if (!container) {
    console.error('Profile container not found');
    return;
  }
  
  container.innerHTML = '';
  
  renderProfileHeader(container, profile);
  renderOverview(container, profile);
  renderRiskProfile(container, profile);
  renderClusterSummary(container, profile);
  renderDetailedFactors(container, profile);
  renderInteractions(container, profile);
  renderRecommendations(container, profile);
  renderPriorities(container, profile);
  renderInsights(container, profile);
  renderActions(container, profile);
}

// ========================================
// HEADER
// ========================================

function renderProfileHeader(container, profile) {
  const header = document.createElement('div');
  header.className = 'profile-header';
  header.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 50px 30px;
    border-radius: 12px;
    margin-bottom: 30px;
    text-align: center;
  `;
  
  const title = document.createElement('h1');
  title.style.cssText = `
    margin: 0 0 10px 0;
    font-size: 36px;
  `;
  title.textContent = getText('profile_page.title');
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    margin: 0;
    font-size: 18px;
    opacity: 0.9;
  `;
  subtitle.textContent = getText('profile_page.subtitle').replace('{count}', '19');
  
  const timestamp = document.createElement('p');
  timestamp.style.cssText = `
    margin: 10px 0 0 0;
    font-size: 14px;
    opacity: 0.8;
  `;
  timestamp.textContent = `${getText('profile_page.created_at')} ${new Date(profile.timestamp).toLocaleString(CURRENT_LANG === 'de' ? 'de-DE' : CURRENT_LANG === 'es' ? 'es-ES' : CURRENT_LANG === 'fr' ? 'fr-FR' : 'en-GB')}`;
  
  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(timestamp);
  container.appendChild(header);
}

// ========================================
// OVERVIEW (Zusammenfassung)
// ========================================

function renderOverview(container, profile) {
  const section = document.createElement('div');
  section.className = 'overview-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 30px 0;
    font-size: 28px;
    text-align: center;
  `;
  title.textContent = getText('profile_page.summary_title') || 'Zusammenfassung';
  
  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  `;
  
  const cards = [
    {
      icon: '🎂',
      label: 'Alter',
      value: `${profile.overview.age} Jahre`,
      color: '#3498db'
    },
    {
      icon: '⏳',
      label: 'Lebenserwartung',
      value: `${profile.overview.life_expectancy.toFixed(1)} Jahre`,
      color: profile.overview.is_above_average ? '#2ecc71' : '#e74c3c'
    },
    {
      icon: '📊',
      label: 'Vergleich',
      value: `${profile.overview.is_above_average ? '+' : ''}${profile.overview.difference.toFixed(1)} Jahre`,
      color: profile.overview.is_above_average ? '#2ecc71' : '#e74c3c'
    },
    {
      icon: '🎯',
      label: 'Percentile',
      value: `Top ${100 - profile.overview.percentile}%`,
      color: '#9b59b6'
    },
    {
      icon: '✅',
      label: 'Konfidenz',
      value: `${profile.overview.confidence}%`,
      color: profile.overview.confidence >= 80 ? '#2ecc71' : '#f39c12'
    },
    {
      icon: '⏱️',
      label: 'Verbleibend',
      value: `~${profile.overview.years_to_live.toFixed(1)} Jahre`,
      color: '#16a085'
    }
  ];
  
  cards.forEach(card => {
    const cardEl = createStatCard(card);
    grid.appendChild(cardEl);
  });
  
  const summaryText = document.createElement('div');
  summaryText.style.cssText = `
    background: #f8f9fa;
    padding: 25px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    font-size: 16px;
    line-height: 1.6;
  `;
  summaryText.textContent = profile.overview.summary[CURRENT_LANG];
  
  section.appendChild(title);
  section.appendChild(grid);
  section.appendChild(summaryText);
  container.appendChild(section);
}

function createStatCard(card) {
  const cardEl = document.createElement('div');
  cardEl.style.cssText = `
    background: white;
    border: 2px solid ${card.color};
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  `;
  cardEl.addEventListener('mouseenter', () => {
    cardEl.style.transform = 'translateY(-5px)';
    cardEl.style.boxShadow = `0 8px 20px ${card.color}40`;
  });
  cardEl.addEventListener('mouseleave', () => {
    cardEl.style.transform = 'translateY(0)';
    cardEl.style.boxShadow = 'none';
  });
  
  const icon = document.createElement('div');
  icon.style.cssText = `
    font-size: 40px;
    margin-bottom: 10px;
  `;
  icon.textContent = card.icon;
  
  const label = document.createElement('div');
  label.style.cssText = `
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  `;
  label.textContent = card.label;
  
  const value = document.createElement('div');
  value.style.cssText = `
    font-size: 24px;
    font-weight: bold;
    color: ${card.color};
  `;
  value.textContent = card.value;
  
  cardEl.appendChild(icon);
  cardEl.appendChild(label);
  cardEl.appendChild(value);
  
  return cardEl;
}

// ========================================
// RISK PROFILE
// ========================================

function renderRiskProfile(container, profile) {
  const section = document.createElement('div');
  section.className = 'risk-profile-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 28px;
  `;
  title.textContent = getText('profile_page.your_result') || 'Dein Risiko-Profil';
  
  const riskLevel = profile.risk_profile.level;
  const riskColors = {
    low: '#2ecc71',
    moderate: '#f39c12',
    high: '#e67e22',
    very_high: '#e74c3c'
  };
  
  const riskBadge = document.createElement('div');
  riskBadge.style.cssText = `
    display: inline-block;
    padding: 10px 20px;
    background: ${riskColors[riskLevel]};
    color: white;
    border-radius: 20px;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 20px;
  `;
  riskBadge.textContent = getText(`profile_page.risk_profile_labels.${riskLevel}`) || riskLevel.toUpperCase();
  
  const description = document.createElement('p');
  description.style.cssText = `
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
  `;
  description.textContent = profile.risk_profile.description[CURRENT_LANG];
  
  const stats = document.createElement('div');
  stats.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0;
  `;
  
  const statCards = [
    {
      label: 'Risikofaktoren',
      value: profile.risk_profile.risk_factor_count,
      color: '#e74c3c',
      icon: '⚠️'
    },
    {
      label: 'Schutzfaktoren',
      value: profile.risk_profile.protective_factor_count,
      color: '#2ecc71',
      icon: '✅'
    },
    {
      label: 'Kritische Interaktionen',
      value: profile.risk_profile.has_critical_interactions ? 'Ja' : 'Nein',
      color: profile.risk_profile.has_critical_interactions ? '#e74c3c' : '#95a5a6',
      icon: profile.risk_profile.has_critical_interactions ? '⚡' : '○'
    }
  ];
  
  statCards.forEach(stat => {
    const card = document.createElement('div');
    card.style.cssText = `
      background: ${stat.color}15;
      border: 2px solid ${stat.color};
      border-radius: 8px;
      padding: 20px;
      text-align: center;
    `;
    
    const icon = document.createElement('div');
    icon.style.cssText = 'font-size: 32px; margin-bottom: 10px;';
    icon.textContent = stat.icon;
    
    const value = document.createElement('div');
    value.style.cssText = `font-size: 28px; font-weight: bold; color: ${stat.color}; margin-bottom: 5px;`;
    value.textContent = stat.value;
    
    const label = document.createElement('div');
    label.style.cssText = 'font-size: 14px; color: #666;';
    label.textContent = stat.label;
    
    card.appendChild(icon);
    card.appendChild(value);
    card.appendChild(label);
    stats.appendChild(card);
  });
  
  const recommendation = document.createElement('div');
  recommendation.style.cssText = `
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  `;
  
  const recIcon = document.createElement('span');
  recIcon.style.cssText = 'font-size: 24px; margin-right: 10px;';
  recIcon.textContent = '💡';
  
  const recText = document.createElement('span');
  recText.style.cssText = 'font-size: 16px;';
  recText.textContent = profile.risk_profile.recommendations[CURRENT_LANG];
  
  recommendation.appendChild(recIcon);
  recommendation.appendChild(recText);
  
  section.appendChild(title);
  section.appendChild(riskBadge);
  section.appendChild(description);
  section.appendChild(stats);
  section.appendChild(recommendation);
  container.appendChild(section);
}

// ========================================
// CLUSTER SUMMARY
// ========================================

function renderClusterSummary(container, profile) {
  const section = document.createElement('div');
  section.className = 'cluster-summary-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 30px 0;
    font-size: 28px;
  `;
  title.textContent = getText('profile_page.health_areas_title');
  
  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  `;
  
  const clusterSummary = profile.factor_analysis.cluster_summary;
  
  for (const [clusterId, summary] of Object.entries(clusterSummary)) {
    const cluster = CLUSTERS[clusterId];
    if (!cluster) continue;
    
    const card = createClusterCard(cluster, summary);
    grid.appendChild(card);
  }
  
  section.appendChild(title);
  section.appendChild(grid);
  container.appendChild(section);
}

function createClusterCard(cluster, summary) {
  const level = summary.level;
  const levelColors = {
  excellent: '#27ae60',   // Saftiges Dunkelgrün ✅✅
  good: '#52c77a',        // Noch helleres Grün ✅ (aufgehellt!)
  neutral: '#f1c40f',     // Gelb 😐
  moderate: '#e67e22',    // Orange ⚠️
  poor: '#e74c3c'         // Rot ❌
};
  
  const card = document.createElement('div');
  card.style.cssText = `
    background: white;
    border: 3px solid ${levelColors[level]};
    border-radius: 12px;
    padding: 25px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  `;
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = `0 10px 25px ${levelColors[level]}40`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
  
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  `;
  
  const icon = document.createElement('div');
  icon.style.cssText = `
    font-size: 32px;
    margin-right: 15px;
  `;
  icon.textContent = cluster.icon;
  
  const titleDiv = document.createElement('div');
  titleDiv.style.cssText = 'flex: 1;';
  
  const name = document.createElement('div');
  name.style.cssText = `
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  `;
  name.textContent = cluster.label[CURRENT_LANG];
  
  const factorCount = document.createElement('div');
  factorCount.style.cssText = `
    font-size: 12px;
    color: #666;
  `;
  factorCount.textContent = `${summary.factor_count} Faktoren`;
  
  titleDiv.appendChild(name);
  titleDiv.appendChild(factorCount);
  header.appendChild(icon);
  header.appendChild(titleDiv);
  
  const scoreBar = createScoreBar(summary.avg_score);
  
  const stats = document.createElement('div');
  stats.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  `;
  
  const avgScore = document.createElement('div');
  avgScore.style.cssText = 'text-align: center;';
  avgScore.innerHTML = `
    <div style="font-size: 24px; font-weight: bold; color: ${levelColors[level]};">${summary.avg_score}/100</div>
    <div style="font-size: 12px; color: #666;">Durchschnitt</div>
  `;
  
  const impact = document.createElement('div');
  impact.style.cssText = 'text-align: center;';
  const impactColor = summary.total_impact >= 0 ? '#2ecc71' : '#e74c3c';
  impact.innerHTML = `
    <div style="font-size: 24px; font-weight: bold; color: ${impactColor};">
      ${summary.total_impact >= 0 ? '+' : ''}${summary.total_impact.toFixed(1)}
    </div>
    <div style="font-size: 12px; color: #666;">${getText('profile_page.years_impact')}</div>
  `;
  
  stats.appendChild(avgScore);
  stats.appendChild(impact);
  
  const worstBest = document.createElement('div');
  worstBest.style.cssText = `
    font-size: 12px;
    color: #666;
    margin-top: 10px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 6px;
  `;
  
  const worstFactor = FACTORS[summary.worst_factor.id];
  const bestFactor = FACTORS[summary.best_factor.id];
  
  worstBest.innerHTML = `
    <div style="margin-bottom: 5px;">
      ⚠️ Schwächste: <strong>${worstFactor ? worstFactor.label[CURRENT_LANG] : summary.worst_factor.id}</strong> (${summary.worst_factor.score})
    </div>
    <div>
      ✅ Stärkste: <strong>${bestFactor ? bestFactor.label[CURRENT_LANG] : summary.best_factor.id}</strong> (${summary.best_factor.score})
    </div>
  `;
  
  card.appendChild(header);
  card.appendChild(scoreBar);
  card.appendChild(stats);
  card.appendChild(worstBest);
  
  card.addEventListener('click', () => {
    const factorsSection = document.getElementById(`cluster-${cluster.id}`);
    if (factorsSection) {
      factorsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
  return card;
}

function createScoreBar(score) {
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    height: 12px;
    background: #ecf0f1;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 15px 0;
  `;
  
  const fill = document.createElement('div');
  const color = score >= 70 ? '#2ecc71' : score >= 50 ? '#3498db' : score >= 30 ? '#f39c12' : '#e74c3c';
  fill.style.cssText = `
    height: 100%;
    width: 0%;
    background: ${color};
    transition: width 1s ease-out;
  `;
  
  container.appendChild(fill);
  
  setTimeout(() => {
    fill.style.width = `${score}%`;
  }, 100);
  
  return container;
}

// ========================================
// DETAILED FACTORS (alle 19)
// ========================================

function renderDetailedFactors(container, profile) {
  const section = document.createElement('div');
  section.className = 'detailed-factors-section';
  section.style.cssText = `
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    font-size: 32px;
    margin-bottom: 30px;
    text-align: center;
  `;
  title.textContent = getText('profile_page.factor_breakdown_title') || 'Detaillierte Faktor-Analyse';
  
  section.appendChild(title);
  
  for (const [clusterId, cluster] of Object.entries(CLUSTERS)) {
    const clusterSection = renderClusterFactors(clusterId, cluster, profile);
    section.appendChild(clusterSection);
  }
  
  container.appendChild(section);
}

function renderClusterFactors(clusterId, cluster, profile) {
  const section = document.createElement('div');
  section.id = `cluster-${clusterId}`;
  section.className = `cluster-factors cluster-${clusterId}`;
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid ${cluster.color};
  `;
  
  const icon = document.createElement('div');
  icon.style.cssText = `
    font-size: 48px;
    margin-right: 20px;
  `;
  icon.textContent = cluster.icon;
  
  const titleDiv = document.createElement('div');
  titleDiv.style.cssText = 'flex: 1;';
  
  const name = document.createElement('h3');
  name.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 28px;
    color: ${cluster.color};
  `;
  name.textContent = cluster.label[CURRENT_LANG];
  
  const description = document.createElement('p');
  description.style.cssText = `
    margin: 0;
    color: #666;
    font-size: 16px;
  `;
  description.textContent = cluster.description[CURRENT_LANG];
  
  titleDiv.appendChild(name);
  titleDiv.appendChild(description);
  header.appendChild(icon);
  header.appendChild(titleDiv);
  section.appendChild(header);
  
  const factorsGrid = document.createElement('div');
  factorsGrid.style.cssText = `
    display: grid;
    gap: 20px;
  `;
  
  cluster.factors.forEach(factorId => {
    const factorData = profile.factor_analysis.factors[factorId];
    if (!factorData) return;
    
    const factorCard = renderFactorCard(factorId, factorData);
    factorsGrid.appendChild(factorCard);
  });
  
  section.appendChild(factorsGrid);
  
  return section;
}

function renderFactorCard(factorId, factorData) {
  const factor = FACTORS[factorId];
  if (!factor) return document.createElement('div');
  
  const level = factorData.level;
 const levelColors = {
  excellent: '#27ae60',   // Saftiges Dunkelgrün ✅✅
  good: '#52c77a',        // Noch helleres Grün ✅ (aufgehellt!)
  neutral: '#f1c40f',     // Gelb 😐
  moderate: '#e67e22',    // Orange ⚠️
  poor: '#e74c3c'         // Rot ❌
};
  
  const card = document.createElement('div');
  card.className = `factor-card factor-${factorId}`;
  card.style.cssText = `
    background: white;
    border: 2px solid ${levelColors[level]};
    border-radius: 12px;
    padding: 25px;
    transition: all 0.3s;
  `;
  
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  `;
  
  const icon = document.createElement('div');
  icon.style.cssText = `
    font-size: 40px;
    margin-right: 15px;
  `;
  icon.textContent = factor.icon || '📊';
  
  const titleDiv = document.createElement('div');
  titleDiv.style.cssText = 'flex: 1;';
  
  const name = document.createElement('h4');
  name.style.cssText = `
    margin: 0 0 5px 0;
    font-size: 22px;
  `;
  name.textContent = factor.label[CURRENT_LANG];
  
  const description = document.createElement('p');
  description.style.cssText = `
    margin: 0;
    font-size: 14px;
    color: #666;
  `;
  description.textContent = factor.description[CURRENT_LANG];
  
  titleDiv.appendChild(name);
  titleDiv.appendChild(description);
  
  const levelBadge = document.createElement('div');
  levelBadge.style.cssText = `
    padding: 5px 12px;
    background: ${levelColors[level]};
    color: white;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
  `;
  levelBadge.textContent = getText(`profile_page.level_labels.${level}`) || level.toUpperCase();
  
  header.appendChild(icon);
  header.appendChild(titleDiv);
  header.appendChild(levelBadge);
  
  const scoreSection = document.createElement('div');
  scoreSection.style.cssText = `
    margin: 20px 0;
  `;
  
  const scoreHeader = document.createElement('div');
  scoreHeader.style.cssText = `
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  `;
  
  const scoreLabel = document.createElement('span');
  scoreLabel.style.cssText = `
    font-size: 14px;
    color: #666;
  `;
  scoreLabel.textContent = getText('profile_page.score_label').replace('{score}', factorData.score);
  
  const impactLabel = document.createElement('span');
  impactLabel.style.cssText = `
    font-size: 14px;
    font-weight: bold;
    color: ${factorData.impact >= 0 ? '#2ecc71' : '#e74c3c'};
  `;
  impactLabel.textContent = getText('profile_page.impact_label')
    .replace('{years}', `${factorData.impact >= 0 ? '+' : ''}${factorData.impact.toFixed(1)}`);
  
  scoreHeader.appendChild(scoreLabel);
  scoreHeader.appendChild(impactLabel);
  
  const scoreBar = createDetailedScoreBar(factorData.score, levelColors[level]);
  
  scoreSection.appendChild(scoreHeader);
  scoreSection.appendChild(scoreBar);
  
  const interpretation = document.createElement('div');
  interpretation.style.cssText = `
    background: ${levelColors[level]}10;
    border-left: 4px solid ${levelColors[level]};
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
    font-size: 15px;
    line-height: 1.6;
  `;
  interpretation.textContent = factorData.interpretation[CURRENT_LANG];
  
  const coverage = document.createElement('div');
  coverage.style.cssText = `
    font-size: 12px;
    color: #999;
    margin: 10px 0;
  `;
  coverage.innerHTML = `
    ${getText('profile_page.coverage_label')}: ${factorData.items_answered}/${factorData.items_total} ${getText('profile_page.questions_label')} 
    (<strong>${factorData.coverage}%</strong> Coverage)
  `;
  
  card.appendChild(header);
  card.appendChild(scoreSection);
  card.appendChild(interpretation);
  
  if (factorData.actionable_items && factorData.actionable_items.length > 0) {
    const actions = renderActionableItems(factorData.actionable_items);
    card.appendChild(actions);
  }
  
  if (factorData.medical_context) {
    const medContext = renderMedicalContext(factorData.medical_context);
    card.appendChild(medContext);
  }
  
  card.appendChild(coverage);
  
  const expandButton = document.createElement('button');
  expandButton.style.cssText = `
    width: 100%;
    padding: 10px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 15px;
    transition: background 0.2s;
  `;
  expandButton.textContent = `📋 ${getText('profile_page.details_show')}`;
  
  const detailsDiv = document.createElement('div');
  detailsDiv.style.cssText = `
    display: none;
    margin-top: 15px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 6px;
  `;
  
  const detailsList = document.createElement('ul');
  detailsList.style.cssText = `
    margin: 0;
    padding-left: 20px;
    font-size: 13px;
  `;
  
  factorData.details.forEach(detail => {
    const li = document.createElement('li');
    li.style.marginBottom = '5px';
    
    // Find question text in both questions and meta_questions
    const question = questions.find(q => q.id === detail.id) || 
                     META_QUESTIONS.find(q => q.id === detail.id);
    const questionText = question?.text?.[CURRENT_LANG] || question?.text?.de || detail.id;
    
    li.innerHTML = `
      <strong>${questionText}:</strong> 
      Impact: <span style="color: ${detail.impact >= 0 ? '#2ecc71' : '#e74c3c'};">
        ${detail.impact >= 0 ? '+' : ''}${detail.impact.toFixed(1)} Jahre
      </span>
    `;
    detailsList.appendChild(li);
  });
  
  detailsDiv.appendChild(detailsList);
  
  let expanded = false;
  expandButton.addEventListener('click', () => {
    expanded = !expanded;
    detailsDiv.style.display = expanded ? 'block' : 'none';
    expandButton.textContent = expanded 
      ? `📋 ${getText('profile_page.details_hide')}`
      : `📋 ${getText('profile_page.details_show')}`;
  });
  
  expandButton.addEventListener('mouseenter', () => {
    expandButton.style.background = '#e9ecef';
  });
  expandButton.addEventListener('mouseleave', () => {
    expandButton.style.background = '#f8f9fa';
  });
  
  card.appendChild(expandButton);
  card.appendChild(detailsDiv);
  
  return card;
}

function createDetailedScoreBar(score, color) {
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    height: 20px;
    background: #ecf0f1;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  `;
  
  const fill = document.createElement('div');
  fill.style.cssText = `
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, ${color}dd 0%, ${color} 100%);
    transition: width 1s ease-out;
    position: relative;
  `;
  
  const label = document.createElement('div');
  label.style.cssText = `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  `;
  label.textContent = `${score}/100`;
  
  fill.appendChild(label);
  container.appendChild(fill);
  
  setTimeout(() => {
    fill.style.width = `${score}%`;
  }, 100);
  
  return container;
}

function renderActionableItems(items) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-top: 20px;
  `;
  
  const title = document.createElement('div');
  title.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 16px;
  `;
  title.textContent = `🎯 ${getText('profile_page.recommendations_title')}`;
  
  const list = document.createElement('div');
  list.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  
  items.forEach(item => {
    const priorityColors = {
      critical: '#e74c3c',
      high: '#e67e22',
      medium: '#f39c12',
      low: '#3498db'
    };
    
    const actionItem = document.createElement('div');
    actionItem.style.cssText = `
      background: ${priorityColors[item.priority]}15;
      border-left: 4px solid ${priorityColors[item.priority]};
      padding: 12px;
      border-radius: 6px;
      font-size: 14px;
    `;
    
    const badge = document.createElement('span');
    badge.style.cssText = `
      background: ${priorityColors[item.priority]};
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      margin-right: 8px;
      font-weight: bold;
    `;
    badge.textContent = item.priority.toUpperCase();
    
    const text = document.createElement('span');
    text.textContent = item.description[CURRENT_LANG];
    
    if (item.potential_gain) {
      const gain = document.createElement('span');
      gain.style.cssText = `
        color: #2ecc71;
        font-weight: bold;
        margin-left: 8px;
      `;
      gain.textContent = `(+${item.potential_gain.toFixed(1)} Jahre)`;
      text.appendChild(gain);
    }
    
    actionItem.appendChild(badge);
    actionItem.appendChild(text);
    list.appendChild(actionItem);
  });
  
  container.appendChild(title);
  container.appendChild(list);
  
  return container;
}

function renderMedicalContext(context) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-top: 20px;
    padding: 15px;
    background: #e8f4f8;
    border-left: 4px solid #3498db;
    border-radius: 6px;
  `;
  
  const title = document.createElement('div');
  title.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 14px;
    color: #2c3e50;
  `;
  title.textContent = `🔬 ${getText('profile_page.medical_context_title')}`;
  
  const content = document.createElement('div');
  content.style.cssText = `
    font-size: 13px;
    color: #34495e;
  `;
  
  if (context.key_markers) {
    const markers = document.createElement('div');
    markers.style.marginBottom = '8px';
    markers.innerHTML = `<strong>${getText('profile_page.important_markers')}:</strong> ${context.key_markers.join(', ')}`;
    content.appendChild(markers);
  }
  
  if (context.screening) {
    const screening = document.createElement('div');
    screening.innerHTML = `<strong>${getText('profile_page.screening')}:</strong> ${context.screening[CURRENT_LANG]}`;
    content.appendChild(screening);
  }
  
  container.appendChild(title);
  container.appendChild(content);
  
  return container;
}

// ========================================
// INTERACTIONS
// ========================================

function renderInteractions(container, profile) {
  if (!profile.interaction_analysis.has_interactions) {
    return;
  }
  
  const section = document.createElement('div');
  section.className = 'interactions-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 28px;
  `;
  title.textContent = getText('profile_page.interactions_title') || 'Faktor-Interaktionen';
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    color: #666;
    font-size: 16px;
    margin-bottom: 30px;
  `;
  subtitle.textContent = getText('profile_page.interactions_subtitle') || 'Diese Faktoren beeinflussen sich gegenseitig';
  
  section.appendChild(title);
  section.appendChild(subtitle);
  
  if (profile.interaction_analysis.negative.length > 0) {
    const negativeSection = renderInteractionList(
      getText('profile_page.negative_interactions') || 'Negative Synergien',
      profile.interaction_analysis.negative,
      'negative'
    );
    section.appendChild(negativeSection);
  }
  
  if (profile.interaction_analysis.positive.length > 0) {
    const positiveSection = renderInteractionList(
      getText('profile_page.positive_interactions') || 'Positive Synergien',
      profile.interaction_analysis.positive,
      'positive'
    );
    section.appendChild(positiveSection);
  }
  
  container.appendChild(section);
}

function renderInteractionList(title, interactions, type) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 30px;
  `;
  
  const heading = document.createElement('h3');
  heading.style.cssText = `
    margin: 0 0 15px 0;
    font-size: 22px;
    color: ${type === 'negative' ? '#e74c3c' : '#2ecc71'};
  `;
  heading.textContent = title;
  
  const list = document.createElement('div');
  list.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;
  
  interactions.forEach(interaction => {
    const card = document.createElement('div');
    card.style.cssText = `
      background: ${type === 'negative' ? '#fff5f5' : '#f0fff4'};
      border: 2px solid ${type === 'negative' ? '#e74c3c' : '#2ecc71'};
      border-radius: 8px;
      padding: 20px;
    `;
    
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    `;
    
    const name = document.createElement('div');
    name.style.cssText = `
      font-weight: bold;
      font-size: 18px;
    `;
    name.textContent = interaction.name[CURRENT_LANG];
    
    const effect = document.createElement('div');
    effect.style.cssText = `
      background: ${type === 'negative' ? '#e74c3c' : '#2ecc71'};
      color: white;
      padding: 5px 12px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: bold;
    `;
    effect.textContent = `×${interaction.effect.toFixed(2)}`;
    
    header.appendChild(name);
    header.appendChild(effect);
    
    const description = document.createElement('p');
    description.style.cssText = `
      margin: 10px 0;
      font-size: 15px;
      line-height: 1.6;
    `;
    description.textContent = interaction.description[CURRENT_LANG];
    
    const significance = document.createElement('div');
    significance.style.cssText = `
      background: white;
      padding: 12px;
      border-radius: 6px;
      font-size: 14px;
      margin-top: 10px;
      border-left: 4px solid ${type === 'negative' ? '#e74c3c' : '#2ecc71'};
    `;
    
    if (type === 'negative') {
      significance.innerHTML = `
        <strong>💡 Medizinische Bedeutung:</strong><br>
        ${interaction.medical_significance[CURRENT_LANG]}
      `;
    } else {
      significance.innerHTML = `
        <strong>✨ Nutzen:</strong><br>
        ${interaction.benefit_description[CURRENT_LANG]}
      `;
    }
    
    card.appendChild(header);
    card.appendChild(description);
    card.appendChild(significance);
    list.appendChild(card);
  });
  
  container.appendChild(heading);
  container.appendChild(list);
  
  return container;
}

// ========================================
// RECOMMENDATIONS
// ========================================

function renderRecommendations(container, profile) {
  if (!profile.recommendations || profile.recommendations.length === 0) {
    return;
  }
  
  const section = document.createElement('div');
  section.className = 'recommendations-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 28px;
  `;
  title.textContent = getText('profile_page.recommendations_title') || 'Deine personalisierten Empfehlungen';
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    color: #666;
    font-size: 16px;
    margin-bottom: 30px;
  `;
  subtitle.textContent = getText('profile_page.recommendations_subtitle') || 'Priorisiert nach Wichtigkeit und Umsetzbarkeit';
  
  section.appendChild(title);
  section.appendChild(subtitle);
  
  profile.recommendations.forEach((rec, index) => {
    const recCard = renderRecommendationCard(rec, index + 1);
    section.appendChild(recCard);
  });
  
  container.appendChild(section);
}

function renderRecommendationCard(rec, priority) {
  const priorityColors = {
    critical: '#e74c3c',
    high: '#e67e22',
    medium: '#f39c12',
    low: '#3498db'
  };
  
  const difficultyIcons = {
    easy: '😊',
    moderate: '🤔',
    hard: '💪',
    very_hard: '🏔️'
  };
  
  const card = document.createElement('div');
  card.style.cssText = `
    background: white;
    border: 3px solid ${priorityColors[rec.priority]};
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 20px;
  `;
  
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
  `;
  
  const titleDiv = document.createElement('div');
  titleDiv.style.cssText = 'flex: 1;';
  
  const priorityBadge = document.createElement('div');
  priorityBadge.style.cssText = `
    background: ${priorityColors[rec.priority]};
    color: white;
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    display: inline-block;
  `;
  priorityBadge.textContent = `PRIORITÄT ${priority}`;
  
  const title = document.createElement('h3');
  title.style.cssText = `
    margin: 10px 0 5px 0;
    font-size: 22px;
  `;
  title.textContent = rec.title[CURRENT_LANG];
  
  const gain = document.createElement('div');
  gain.style.cssText = `
    font-size: 24px;
    font-weight: bold;
    color: #2ecc71;
    text-align: right;
  `;
  gain.textContent = `+${rec.potential_gain.toFixed(1)} Jahre`;
  
  titleDiv.appendChild(priorityBadge);
  titleDiv.appendChild(title);
  header.appendChild(titleDiv);
  header.appendChild(gain);
  
  const description = document.createElement('p');
  description.style.cssText = `
    font-size: 15px;
    line-height: 1.6;
    margin: 15px 0;
    color: #34495e;
  `;
  description.textContent = rec.description[CURRENT_LANG];
  
  const meta = document.createElement('div');
  meta.style.cssText = `
    display: flex;
    gap: 15px;
    margin: 15px 0;
    font-size: 14px;
  `;
  
  const difficulty = document.createElement('div');
  difficulty.innerHTML = `
    <strong>Schwierigkeit:</strong> 
    ${difficultyIcons[rec.difficulty]} 
    ${getText(`profile_page.difficulty_labels.${rec.difficulty}`) || rec.difficulty}
  `;
  
  const timeframe = document.createElement('div');
  timeframe.innerHTML = `
    <strong>Zeitrahmen:</strong> ${rec.timeframe}
  `;
  
  meta.appendChild(difficulty);
  meta.appendChild(timeframe);
  
  const whyMatters = document.createElement('div');
  whyMatters.style.cssText = `
    background: #e8f4f8;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
  `;
  
  const whyTitle = document.createElement('div');
  whyTitle.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
    color: #2c3e50;
  `;
  whyTitle.textContent = `💡 ${getText('profile_page.why_important')}`;
  
  const whyList = document.createElement('ul');
  whyList.style.cssText = `
    margin: 0;
    padding-left: 20px;
    font-size: 14px;
  `;
  
  rec.why_it_matters[CURRENT_LANG].forEach(point => {
    const li = document.createElement('li');
    li.style.marginBottom = '5px';
    li.textContent = point;
    whyList.appendChild(li);
  });
  
  whyMatters.appendChild(whyTitle);
  whyMatters.appendChild(whyList);
  
  const actionSteps = document.createElement('div');
  actionSteps.style.cssText = `
    background: #f0fff4;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
  `;
  
  const actionTitle = document.createElement('div');
  actionTitle.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
    color: #2c3e50;
  `;
  actionTitle.textContent = `📋 ${getText('profile_page.concrete_steps')}`;
  
  const actionList = document.createElement('ol');
  actionList.style.cssText = `
    margin: 0;
    padding-left: 20px;
    font-size: 14px;
  `;
  
  rec.action_steps[CURRENT_LANG].forEach(step => {
    const li = document.createElement('li');
    li.style.marginBottom = '8px';
    li.textContent = step;
    actionList.appendChild(li);
  });
  
  actionSteps.appendChild(actionTitle);
  actionSteps.appendChild(actionList);
  
  const expandButton = document.createElement('button');
  expandButton.style.cssText = `
    width: 100%;
    padding: 12px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 15px;
    transition: background 0.2s;
  `;
  expandButton.textContent = `📖 ${getText('profile_page.details_show_more')}`;
  
  const detailsDiv = document.createElement('div');
  detailsDiv.style.cssText = `
    display: none;
    margin-top: 15px;
  `;
  
  if (rec.implementation_timeline) {
    const timeline = renderTimeline(rec.implementation_timeline[CURRENT_LANG]);
    detailsDiv.appendChild(timeline);
  }
  
  if (rec.success_metrics) {
    const metrics = renderMetrics(rec.success_metrics[CURRENT_LANG]);
    detailsDiv.appendChild(metrics);
  }
  
  if (rec.barriers) {
    const barriers = renderBarriers(rec.barriers[CURRENT_LANG]);
    detailsDiv.appendChild(barriers);
  }
  
  if (rec.support_resources) {
    const resources = renderResources(rec.support_resources[CURRENT_LANG]);
    detailsDiv.appendChild(resources);
  }
  
  let expanded = false;
  expandButton.addEventListener('click', () => {
    expanded = !expanded;
    detailsDiv.style.display = expanded ? 'block' : 'none';
    expandButton.textContent = expanded ? `📖 ${getText('profile_page.details_hide')}` : `📖 ${getText('profile_page.details_show_more')}`;
  });
  
  expandButton.addEventListener('mouseenter', () => {
    expandButton.style.background = '#e9ecef';
  });
  expandButton.addEventListener('mouseleave', () => {
    expandButton.style.background = '#f8f9fa';
  });
  
  const scientific = document.createElement('div');
  scientific.style.cssText = `
    margin-top: 15px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 6px;
    font-size: 12px;
    color: #666;
  `;
  scientific.innerHTML = `<strong>📚 ${getText('profile_page.scientific_basis')}:</strong> ${rec.scientific_basis[CURRENT_LANG]}`;
  
  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(meta);
  card.appendChild(whyMatters);
  card.appendChild(actionSteps);
  card.appendChild(expandButton);
  card.appendChild(detailsDiv);
  card.appendChild(scientific);
  
  return card;
}

function renderTimeline(timeline) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 15px;
    padding: 15px;
    background: #fff3cd;
    border-radius: 8px;
  `;
  
  const title = document.createElement('div');
  title.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
  `;
  title.textContent = '⏱️ Umsetzungs-Timeline:';
  
  const list = document.createElement('ul');
  list.style.cssText = `
    margin: 0;
    padding-left: 20px;
    font-size: 13px;
  `;
  
  timeline.forEach(phase => {
    const li = document.createElement('li');
    li.style.marginBottom = '5px';
    li.textContent = phase;
    list.appendChild(li);
  });
  
  container.appendChild(title);
  container.appendChild(list);
  
  return container;
}

function renderMetrics(metrics) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 15px;
    padding: 15px;
    background: #e8f4f8;
    border-radius: 8px;
  `;
  
  const title = document.createElement('div');
  title.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
  `;
  title.textContent = '📊 Erfolgsmetriken:';
  
  const list = document.createElement('div');
  list.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 13px;
  `;
  
  metrics.forEach(metric => {
    const badge = document.createElement('span');
    badge.style.cssText = `
      background: #3498db;
      color: white;
      padding: 5px 10px;
      border-radius: 12px;
    `;
    badge.textContent = metric;
    list.appendChild(badge);
  });
  
  container.appendChild(title);
  container.appendChild(list);
  
  return container;
}

function renderBarriers(barriers) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 15px;
    padding: 15px;
    background: #fff5f5;
    border-radius: 8px;
  `;
  
  const title = document.createElement('div');
  title.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
  `;
  title.textContent = '⚠️ Mögliche Hindernisse:';
  
  const list = document.createElement('ul');
  list.style.cssText = `
    margin: 0;
    padding-left: 20px;
    font-size: 13px;
  `;
  
  barriers.forEach(barrier => {
    const li = document.createElement('li');
    li.style.marginBottom = '5px';
    li.textContent = barrier;
    list.appendChild(li);
  });
  
  container.appendChild(title);
  container.appendChild(list);
  
  return container;
}

function renderResources(resources) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 15px;
    padding: 15px;
    background: #f0fff4;
    border-radius: 8px;
  `;
  
  const title = document.createElement('div');
  title.style.cssText = `
    font-weight: bold;
    margin-bottom: 10px;
  `;
  title.textContent = '🔗 Hilfreiche Ressourcen:';
  
  const list = document.createElement('ul');
  list.style.cssText = `
    margin: 0;
    padding-left: 20px;
    font-size: 13px;
  `;
  
  resources.forEach(resource => {
    const li = document.createElement('li');
    li.style.marginBottom = '5px';
    li.textContent = resource;
    list.appendChild(li);
  });
  
  container.appendChild(title);
  container.appendChild(list);
  
  return container;
}

// ========================================
// PRIORITIES
// ========================================

function renderPriorities(container, profile) {
  const section = document.createElement('div');
  section.className = 'priorities-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 30px 0;
    font-size: 28px;
  `;
  title.textContent = getText('profile_page.next_steps_title') || 'Deine Handlungsprioritäten';
  
  section.appendChild(title);
  
  if (profile.priorities.critical && profile.priorities.critical.length > 0) {
    const critical = renderPrioritySection('🚨 KRITISCH - Sofort handeln', profile.priorities.critical, '#e74c3c');
    section.appendChild(critical);
  }
  
  if (profile.priorities.high_impact && profile.priorities.high_impact.length > 0) {
    const highImpact = renderPrioritySection('⚡ Hoher Impact - Große Hebelwirkung', profile.priorities.high_impact, '#e67e22');
    section.appendChild(highImpact);
  }
  
  if (profile.priorities.quick_wins && profile.priorities.quick_wins.length > 0) {
    const quickWins = renderPrioritySection('🎯 Quick Wins - Leicht umzusetzen', profile.priorities.quick_wins, '#2ecc71');
    section.appendChild(quickWins);
  }
  
  container.appendChild(section);
}

function renderPrioritySection(title, items, color) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 25px;
  `;
  
  const heading = document.createElement('h3');
  heading.style.cssText = `
    color: ${color};
    margin: 0 0 15px 0;
    font-size: 20px;
  `;
  heading.textContent = title;
  
  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    gap: 15px;
  `;
  
  items.forEach(item => {
    const factor = FACTORS[item.factor_id];
    if (!factor) return;
    
    const card = document.createElement('div');
    card.style.cssText = `
      background: ${color}10;
      border-left: 4px solid ${color};
      padding: 15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;
    
    const info = document.createElement('div');
    
    const name = document.createElement('div');
    name.style.cssText = `
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 5px;
    `;
    name.textContent = `${factor.icon} ${factor.label[CURRENT_LANG]}`;
    
    const details = document.createElement('div');
    details.style.cssText = `
      font-size: 13px;
      color: #666;
    `;
    
    if (item.score !== undefined) {
      details.innerHTML += `Score: <strong>${item.score}/100</strong> | `;
    }
    
    if (item.impact !== undefined) {
      details.innerHTML += `Impact: <strong style="color: ${item.impact >= 0 ? '#2ecc71' : '#e74c3c'};">
        ${item.impact >= 0 ? '+' : ''}${item.impact.toFixed(1)} Jahre
      </strong> | `;
    }
    
    if (item.potential_gain !== undefined) {
      details.innerHTML += `Möglicher Gewinn: <strong style="color: #2ecc71;">
        +${item.potential_gain.toFixed(1)} Jahre
      </strong>`;
    }
    
    if (item.timeframe) {
      details.innerHTML += ` | Zeitrahmen: <strong>${item.timeframe}</strong>`;
    }
    
    info.appendChild(name);
    info.appendChild(details);
    
    const actionButton = document.createElement('button');
    actionButton.style.cssText = `
      background: ${color};
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      white-space: nowrap;
      transition: opacity 0.2s;
    `;
    actionButton.textContent = `${getText('profile_page.details_show')} →`;
    actionButton.addEventListener('mouseenter', () => {
      actionButton.style.opacity = '0.8';
    });
    actionButton.addEventListener('mouseleave', () => {
      actionButton.style.opacity = '1';
    });
    actionButton.addEventListener('click', () => {
      const factorCard = document.querySelector(`.factor-${item.factor_id}`);
      if (factorCard) {
        factorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        factorCard.style.animation = 'pulse 1s';
        setTimeout(() => {
          factorCard.style.animation = '';
        }, 1000);
      }
    });
    
    card.appendChild(info);
    card.appendChild(actionButton);
    grid.appendChild(card);
  });
  
  container.appendChild(heading);
  container.appendChild(grid);
  
  return container;
}

// ========================================
// INSIGHTS
// ========================================

function renderInsights(container, profile) {
  if (!profile.insights || profile.insights.length === 0) {
    return;
  }
  
  const section = document.createElement('div');
  section.className = 'insights-section';
  section.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 30px 0;
    font-size: 28px;
  `;
  title.textContent = `💡 ${getText('profile_page.key_insights')}`;
  
  section.appendChild(title);
  
  profile.insights.forEach(insight => {
    const card = renderInsightCard(insight);
    section.appendChild(card);
  });
  
  container.appendChild(section);
}

function renderInsightCard(insight) {
  const severityColors = {
    critical: '#e74c3c',
    high: '#e67e22',
    medium: '#f39c12',
    low: '#3498db'
  };
  
  const severityIcons = {
    critical: '🚨',
    high: '⚠️',
    medium: '💡',
    low: '✨'
  };
  
  const card = document.createElement('div');
  card.style.cssText = `
    background: ${severityColors[insight.severity]}15;
    border-left: 4px solid ${severityColors[insight.severity]};
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
  `;
  
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;
  
  const icon = document.createElement('span');
  icon.style.cssText = `
    font-size: 24px;
    margin-right: 10px;
  `;
  icon.textContent = severityIcons[insight.severity];
  
  const type = document.createElement('span');
  type.style.cssText = `
    font-weight: bold;
    font-size: 14px;
    color: ${severityColors[insight.severity]};
    text-transform: uppercase;
  `;
  type.textContent = insight.type.replace('_', ' ');
  
  header.appendChild(icon);
  header.appendChild(type);
  
  const message = document.createElement('p');
  message.style.cssText = `
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
  `;
  message.textContent = insight.message[CURRENT_LANG];
  
  card.appendChild(header);
  card.appendChild(message);
  
  return card;
}

// ========================================
// ACTIONS (Bottom Buttons)
// ========================================

function renderActions(container, profile) {
  const section = document.createElement('div');
  section.className = 'actions-section';
  section.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 12px;
    margin-bottom: 30px;
    text-align: center;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 30px 0;
    font-size: 28px;
  `;
  title.textContent = 'Was möchtest du als Nächstes tun?';
  
  const buttons = document.createElement('div');
  buttons.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  `;
  
  const actionButtons = [
    {
      text: getText('common.what_if_simulator'),
      description: getText('profile_page.simulate_changes') || 'Simuliere Änderungen',
      href: 'what-if.html',
      color: '#3498db'
    },
    {
      text: getText('common.methodology'),
      description: getText('profile_page.scientific_basis') || 'Wissenschaftliche Basis',
      href: 'methodology.html',
      color: '#9b59b6'
    },
    {
      text: getText('profile_page.pdf_download') || '📄 PDF Download',
      description: getText('profile_page.download_report') || 'Report herunterladen',
      onClick: () => downloadPDF(),
      color: '#e67e22'
    },
    {
      text: '🔄 Test wiederholen',
      description: 'Neustart',
      onClick: () => {
        if (confirm('Wirklich von vorne beginnen?')) {
          window.location.href = 'meta.html';
        }
      },
      color: '#95a5a6'
    }
  ];
  
  actionButtons.forEach(btn => {
    const button = createActionButtonPaid(btn);
    buttons.appendChild(button);
  });
  
  section.appendChild(title);
  section.appendChild(buttons);
  container.appendChild(section);
}

function createActionButtonPaid(config) {
  const button = document.createElement(config.href ? 'a' : 'button');
  
  if (config.href) {
    button.href = config.href;
  } else if (config.onClick) {
    button.addEventListener('click', config.onClick);
  }
  
  button.style.cssText = `
    display: block;
    background: ${config.color};
    color: white;
    padding: 25px 20px;
    border-radius: 12px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    text-align: center;
  `;
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-5px)';
    button.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
  });
  
  const text = document.createElement('div');
  text.style.cssText = `
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  `;
  text.textContent = config.text;
  
  const description = document.createElement('div');
  description.style.cssText = `
    font-size: 14px;
    opacity: 0.9;
  `;
  description.textContent = config.description;
  
  button.appendChild(text);
  button.appendChild(description);
  
  return button;
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function showError(message) {
  const container = document.getElementById('profile-container');
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
      <button onclick="window.location.href='result.html'" style="
        background: #3498db;
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
      ">
        Zurück zum Ergebnis
      </button>
    </div>
  `;
}

function downloadPDF() {
  alert('PDF-Download wird implementiert...');
}

// ========================================
// INIT
// ========================================

export function initProfilePage() {
  renderProfile();
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initProfilePage);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.02); box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
    }
  `;
  document.head.appendChild(style);
}

// ========================================
// EXPORT
// ========================================

export default {
  renderProfile,
  initProfilePage
};