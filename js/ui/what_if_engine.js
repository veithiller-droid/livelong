// ui/what_if_engine.js
// What-If Simulator für Dr. Livelong
// PAID ONLY - Simuliere Lifestyle-Änderungen und sehe sofort den Impact
// Version 1.2.0 - WITH AGE ADJUSTMENT + MULTILINGUAL

import { STATE, getCalculation, getAllMetaAnswers, getAllAnswers } from '../core/state.js';
import { calculateLifeExpectancy, simulateChange } from '../core/scoring.js';
import { checkAccess, showPaywall } from './paywall.js';
import { questions } from '../data/questions.js';
import { FACTORS } from '../data/factors.js';
import { UI_TEXTS } from '../data/texts.js';

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
// STATE
// ========================================

let currentScenarios = [];
let baselineResult = null;
let simulatedResult = null;

// ========================================
// MAIN RENDER FUNCTION
// ========================================

export function renderWhatIf() {
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
  
  baselineResult = calculation;
  
  const container = document.getElementById('whatif-container');
  
  if (!container) {
    console.error('What-If container not found');
    return;
  }
  
  container.innerHTML = '';
  
  renderHeader(container);
  renderIntro(container);
  renderScenarioBuilder(container);
  renderSelectedScenarios(container);
  renderCalculateButton(container);
  renderResults(container);
  renderPresetScenarios(container);
}

// ========================================
// HEADER
// ========================================

function renderHeader(container) {
  const header = document.createElement('div');
  header.className = 'what-if-header';
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
  title.textContent = getText('what_if_page.title');
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    margin: 0;
    font-size: 18px;
    opacity: 0.9;
  `;
  subtitle.textContent = getText('what_if_page.subtitle');
  
  header.appendChild(title);
  header.appendChild(subtitle);
  container.appendChild(header);
}

// ========================================
// INTRO
// ========================================

function renderIntro(container) {
  const intro = document.createElement('div');
  intro.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const icon = document.createElement('div');
  icon.style.cssText = `
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  `;
  icon.textContent = '🔮';
  
  const text = document.createElement('p');
  text.style.cssText = `
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 20px 0;
    text-align: center;
    color: #34495e;
  `;
  text.textContent = getText('what_if_page.intro');
  
  const tip = document.createElement('div');
  tip.style.cssText = `
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 15px;
    border-radius: 8px;
  `;
  tip.innerHTML = `
    <strong>💡 ${getText('what_if_page.tip').split(':')[0]}:</strong>
    ${getText('what_if_page.tip').split(':')[1]}
  `;
  
  intro.appendChild(icon);
  intro.appendChild(text);
  intro.appendChild(tip);
  container.appendChild(intro);
}

// ========================================
// SCENARIO BUILDER
// ========================================

function renderScenarioBuilder(container) {
  const section = document.createElement('div');
  section.className = 'scenario-builder-section';
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
  title.textContent = getText('what_if_page.scenario_builder_title');
  
  const categories = document.createElement('div');
  categories.style.cssText = `
    display: grid;
    gap: 20px;
  `;
  
  const scenarioCategories = [
    {
      name: getText('what_if_page.category_smoking'),
      icon: '🚬',
      color: '#e74c3c',
      scenarios: [
        { id: 'quit_smoking', label: getText('what_if_page.scenarios.quit_smoking') },
        { id: 'reduce_smoking', label: getText('what_if_page.scenarios.reduce_smoking') }
      ]
    },
    {
      name: getText('what_if_page.category_weight'),
      icon: '⚖️',
      color: '#9b59b6',
      scenarios: [
        { id: 'lose_weight_5', label: getText('what_if_page.scenarios.lose_weight_5') },
        { id: 'lose_weight_10', label: getText('what_if_page.scenarios.lose_weight_10') }
      ]
    },
    {
      name: getText('what_if_page.category_exercise'),
      icon: '🏃',
      color: '#3498db',
      scenarios: [
        { id: 'start_exercise', label: getText('what_if_page.scenarios.start_exercise') }
      ]
    },
    {
      name: getText('what_if_page.category_diet'),
      icon: '🥗',
      color: '#2ecc71',
      scenarios: [
        { id: 'improve_diet', label: getText('what_if_page.scenarios.improve_diet') }
      ]
    },
    {
      name: getText('what_if_page.category_alcohol'),
      icon: '🍷',
      color: '#e67e22',
      scenarios: [
        { id: 'reduce_alcohol', label: getText('what_if_page.scenarios.reduce_alcohol') },
        { id: 'quit_alcohol', label: getText('what_if_page.scenarios.quit_alcohol') }
      ]
    },
    {
      name: getText('what_if_page.category_sleep'),
      icon: '😴',
      color: '#34495e',
      scenarios: [
        { id: 'improve_sleep', label: getText('what_if_page.scenarios.improve_sleep') }
      ]
    },
    {
      name: getText('what_if_page.category_stress'),
      icon: '😰',
      color: '#c0392b',
      scenarios: [
        { id: 'reduce_stress', label: getText('what_if_page.scenarios.reduce_stress') }
      ]
    },
    {
      name: getText('what_if_page.category_social'),
      icon: '👥',
      color: '#16a085',
      scenarios: [
        { id: 'increase_social', label: getText('what_if_page.scenarios.increase_social') }
      ]
    }
  ];
  
  scenarioCategories.forEach(category => {
    const categoryCard = renderCategoryCard(category);
    categories.appendChild(categoryCard);
  });
  
  section.appendChild(title);
  section.appendChild(categories);
  container.appendChild(section);
}

function renderCategoryCard(category) {
  const card = document.createElement('div');
  card.style.cssText = `
    border: 2px solid ${category.color};
    border-radius: 12px;
    padding: 20px;
  `;
  
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
  icon.textContent = category.icon;
  
  const name = document.createElement('div');
  name.style.cssText = `
    font-size: 20px;
    font-weight: bold;
    color: ${category.color};
  `;
  name.textContent = category.name;
  
  header.appendChild(icon);
  header.appendChild(name);
  
  const scenarios = document.createElement('div');
  scenarios.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  
  category.scenarios.forEach(scenario => {
    const button = createScenarioButton(scenario, category.color);
    scenarios.appendChild(button);
  });
  
  card.appendChild(header);
  card.appendChild(scenarios);
  
  return card;
}

function createScenarioButton(scenario, color) {
  const isSelected = currentScenarios.some(s => s.id === scenario.id);
  
  const button = document.createElement('button');
  button.className = `scenario-button scenario-${scenario.id}`;
  button.style.cssText = `
    padding: 12px 20px;
    border: 2px solid ${color};
    background: ${isSelected ? color : 'white'};
    color: ${isSelected ? 'white' : color};
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.3s;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  
  const label = document.createElement('span');
  label.textContent = scenario.label;
  
  const checkbox = document.createElement('span');
  checkbox.style.cssText = `
    font-size: 18px;
  `;
  checkbox.textContent = isSelected ? '✅' : '○';
  
  button.appendChild(label);
  button.appendChild(checkbox);
  
  button.addEventListener('click', () => {
    toggleScenario(scenario);
    updateScenarioButton(button, scenario, color);
    updateSelectedScenarios();
  });
  
  button.addEventListener('mouseenter', () => {
    if (!isSelected) {
      button.style.background = `${color}20`;
    }
  });
  
  button.addEventListener('mouseleave', () => {
    if (!isSelected) {
      button.style.background = 'white';
    }
  });
  
  return button;
}

function updateScenarioButton(button, scenario, color) {
  const isSelected = currentScenarios.some(s => s.id === scenario.id);
  
  button.style.background = isSelected ? color : 'white';
  button.style.color = isSelected ? 'white' : color;
  
  const checkbox = button.querySelector('span:last-child');
  checkbox.textContent = isSelected ? '✅' : '○';
}

function toggleScenario(scenario) {
  const index = currentScenarios.findIndex(s => s.id === scenario.id);
  
  if (index > -1) {
    currentScenarios.splice(index, 1);
  } else {
    currentScenarios.push(scenario);
  }
}

// ========================================
// SELECTED SCENARIOS
// ========================================

function renderSelectedScenarios(container) {
  const existing = container.querySelector('.selected-scenarios-section');
  if (existing) {
    existing.remove();
  }
  
  const section = document.createElement('div');
  section.className = 'selected-scenarios-section';
  section.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h3');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 22px;
  `;
  title.textContent = getText('what_if_page.selected_changes');
  
  section.appendChild(title);
  
  if (currentScenarios.length === 0) {
    const empty = document.createElement('p');
    empty.style.cssText = `
      color: #999;
      font-size: 16px;
      text-align: center;
      padding: 20px;
    `;
    empty.textContent = getText('what_if_page.no_changes_selected');
    section.appendChild(empty);
  } else {
    const list = document.createElement('div');
    list.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    `;
    
    currentScenarios.forEach(scenario => {
      const chip = createScenarioChip(scenario);
      list.appendChild(chip);
    });
    
    section.appendChild(list);
    
    const resetButton = document.createElement('button');
    resetButton.style.cssText = `
      margin-top: 20px;
      padding: 10px 20px;
      background: #95a5a6;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.2s;
    `;
    resetButton.textContent = getText('what_if_page.reset_button');
    resetButton.addEventListener('click', resetScenarios);
    resetButton.addEventListener('mouseenter', () => {
      resetButton.style.background = '#7f8c8d';
    });
    resetButton.addEventListener('mouseleave', () => {
      resetButton.style.background = '#95a5a6';
    });
    
    section.appendChild(resetButton);
  }
  
  container.appendChild(section);
}

function createScenarioChip(scenario) {
  const chip = document.createElement('div');
  chip.style.cssText = `
    display: inline-flex;
    align-items: center;
    background: #3498db;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 14px;
    gap: 10px;
  `;
  
  const label = document.createElement('span');
  label.textContent = scenario.label;
  
  const removeButton = document.createElement('button');
  removeButton.style.cssText = `
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 0;
    line-height: 1;
  `;
  removeButton.textContent = '×';
  removeButton.addEventListener('click', () => {
    toggleScenario(scenario);
    updateAllScenarioButtons();
    updateSelectedScenarios();
  });
  
  chip.appendChild(label);
  chip.appendChild(removeButton);
  
  return chip;
}

function updateSelectedScenarios() {
  const container = document.getElementById('whatif-container');
  if (!container) return;
  
  renderSelectedScenarios(container);
  renderCalculateButton(container);
  
  const resultsSection = container.querySelector('.results-section');
  if (resultsSection) {
    resultsSection.remove();
  }
  simulatedResult = null;
}

function updateAllScenarioButtons() {
  document.querySelectorAll('.scenario-button').forEach(button => {
    const scenarioId = button.className.split('scenario-')[1].split(' ')[0];
    const scenario = { id: scenarioId };
    
    const isSelected = currentScenarios.some(s => s.id === scenarioId);
    
    const colorMatch = button.style.border.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (colorMatch) {
      const r = colorMatch[1];
      const g = colorMatch[2];
      const b = colorMatch[3];
      const color = `rgb(${r}, ${g}, ${b})`;
      
      button.style.background = isSelected ? color : 'white';
      button.style.color = isSelected ? 'white' : color;
      
      const checkbox = button.querySelector('span:last-child');
      if (checkbox) {
        checkbox.textContent = isSelected ? '✅' : '○';
      }
    }
  });
}

function resetScenarios() {
  currentScenarios = [];
  simulatedResult = null;
  updateAllScenarioButtons();
  updateSelectedScenarios();
}

// ========================================
// CALCULATE BUTTON
// ========================================

function renderCalculateButton(container) {
  const existing = container.querySelector('.calculate-button-section');
  if (existing) {
    existing.remove();
  }
  
  if (currentScenarios.length === 0) {
    return;
  }
  
  const section = document.createElement('div');
  section.className = 'calculate-button-section';
  section.style.cssText = `
    text-align: center;
    margin-bottom: 30px;
  `;
  
  const button = document.createElement('button');
  button.style.cssText = `
    padding: 20px 50px;
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
    transition: all 0.3s;
  `;
  button.textContent = `${getText('what_if_page.calculate_button')} (${currentScenarios.length} ${currentScenarios.length === 1 ? getText('what_if_page.change_label') : getText('what_if_page.changes_label')})`;
  
  button.addEventListener('click', calculateSimulation);
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-3px)';
    button.style.boxShadow = '0 6px 20px rgba(46, 204, 113, 0.5)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 15px rgba(46, 204, 113, 0.4)';
  });
  
  section.appendChild(button);
  container.appendChild(section);
}

// ========================================
// CALCULATE SIMULATION
// ========================================

async function calculateSimulation() {
  if (currentScenarios.length === 0) {
    alert(getText('what_if_page.select_at_least_one'));
    return;
  }
  
  const button = document.querySelector('.calculate-button-section button');
  if (button) {
    button.disabled = true;
    button.textContent = getText('what_if_page.calculating');
    button.style.opacity = '0.6';
  }
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const meta = getAllMetaAnswers();
  const answers = getAllAnswers();
  
  const changes = buildChanges(currentScenarios, meta, answers);

  // DEBUG: Was wird gebaut?
  console.log('=== WHAT-IF DEBUG ===');
  console.log('Selected scenarios:', currentScenarios);
  console.log('Built changes:', changes);
  console.log('Current meta:', meta);
  console.log('Current answers:', answers);

  try {
    simulatedResult = simulateChange(meta, answers, changes);
    
    // DEBUG: Was kommt raus?
    console.log('Simulation result:', simulatedResult);
    console.log('Original:', simulatedResult.original);
    console.log('Theoretical Modified:', simulatedResult.theoretical_modified);
    console.log('Realistic Modified:', simulatedResult.realistic_modified);
    console.log('Theoretical Difference:', simulatedResult.theoretical_difference);
    console.log('Realistic Difference:', simulatedResult.realistic_difference);
    console.log('Age Adjustment:', simulatedResult.age_adjustment_factor);
    console.log('Damage Adjustment:', simulatedResult.damage_adjustment_factor);
    console.log('Individual changes:', simulatedResult.changes);
    console.log('====================');
    
    if (button) {
      button.disabled = false;
      button.textContent = getText('what_if_page.calculate_button');
      button.style.opacity = '1';
    }
    
    renderResults(document.getElementById('whatif-container'));
    
    const resultsSection = document.querySelector('.results-section');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
  } catch (error) {
    console.error('Simulation error:', error);
    alert(getText('what_if_page.error_calculation'));
    
    if (button) {
      button.disabled = false;
      button.textContent = getText('what_if_page.calculate_button');
      button.style.opacity = '1';
    }
  }
}

function buildChanges(scenarios, meta, answers) {
  const changes = [];
  
  scenarios.forEach(scenario => {
    switch (scenario.id) {
      case 'quit_smoking':
        changes.push({
          type: 'meta',
          key: 'meta_smoking',
          new_value: 'never',
          description: getText('what_if_page.scenario_label_quit_smoking'),
          scenario_id: 'quit_smoking'
        });
        break;
        
      case 'reduce_smoking':
        const currentSmoking = meta.meta_smoking;
        if (currentSmoking === 'current_heavy' || currentSmoking === 'iqos_heavy') {
          changes.push({
            type: 'meta',
            key: 'meta_smoking',
            new_value: currentSmoking.includes('iqos') ? 'iqos_light' : 'current_light',
            description: getText('what_if_page.scenario_label_reduce_smoking'),
            scenario_id: 'reduce_smoking'
          });
        } else if (currentSmoking === 'current_moderate' || currentSmoking === 'iqos_moderate') {
          changes.push({
            type: 'meta',
            key: 'meta_smoking',
            new_value: currentSmoking.includes('iqos') ? 'iqos_light' : 'current_light',
            description: getText('what_if_page.scenario_label_reduce_smoking'),
            scenario_id: 'reduce_smoking'
          });
        }
        break;
        
      case 'lose_weight_5':
        if (meta.meta_weight) {
          changes.push({
            type: 'meta',
            key: 'meta_weight',
            new_value: meta.meta_weight - 5,
            description: getText('what_if_page.scenario_label_lose_weight_5'),
            scenario_id: 'lose_weight_5'
          });
        }
        break;
        
      case 'lose_weight_10':
        if (meta.meta_weight) {
          changes.push({
            type: 'meta',
            key: 'meta_weight',
            new_value: meta.meta_weight - 10,
            description: getText('what_if_page.scenario_label_lose_weight_10'),
            scenario_id: 'lose_weight_10'
          });
        }
        break;
        
      case 'start_exercise':
        if (!answers.fitness_01) {
          changes.push({
            type: 'answer',
            question_id: 'fitness_01',
            new_value: true,
            description: getText('what_if_page.scenario_label_start_exercise'),
            scenario_id: 'start_exercise'
          });
        }
        if (answers.fitness_02) {
          changes.push({
            type: 'answer',
            question_id: 'fitness_02',
            new_value: false,
            description: getText('what_if_page.scenario_label_start_exercise'),
            scenario_id: 'start_exercise'
          });
        }
        break;
        
      case 'improve_diet':
        const dietChanges = [];
        
        if (!answers.diet_01) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_01',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        if (!answers.diet_03) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_03',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        if (!answers.diet_04) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_04',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        if (!answers.diet_07) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_07',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        if (!answers.diet_08) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_08',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        if (answers.diet_09) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_09',
            new_value: false,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        if (answers.diet_11) {
          dietChanges.push({
            type: 'answer',
            question_id: 'diet_11',
            new_value: false,
            description: getText('what_if_page.scenario_label_improve_diet'),
            scenario_id: 'improve_diet'
          });
        }
        
        changes.push(...dietChanges);
        break;
        
      case 'reduce_alcohol':
        if (answers.alcohol_02 === 'six_plus' || answers.alcohol_02 === 'four_five') {
          changes.push({
            type: 'answer',
            question_id: 'alcohol_02',
            new_value: 'one',
            description: getText('what_if_page.scenario_label_reduce_alcohol'),
            scenario_id: 'reduce_alcohol'
          });
        }
        if (answers.alcohol_03 === 'yes') {
          changes.push({
            type: 'answer',
            question_id: 'alcohol_03',
            new_value: 'no',
            description: getText('what_if_page.scenario_label_reduce_alcohol'),
            scenario_id: 'reduce_alcohol'
          });
        }
        break;
        
      case 'quit_alcohol':
        if (answers.alcohol_01 !== 'never') {
          changes.push({
            type: 'answer',
            question_id: 'alcohol_01',
            new_value: 'never',
            description: getText('what_if_page.scenario_label_quit_alcohol'),
            scenario_id: 'quit_alcohol'
          });
        }
        if (answers.alcohol_02 !== 'none') {
          changes.push({
            type: 'answer',
            question_id: 'alcohol_02',
            new_value: 'none',
            description: getText('what_if_page.scenario_label_quit_alcohol'),
            scenario_id: 'quit_alcohol'
          });
        }
        if (answers.alcohol_03 !== 'no_alcohol') {
          changes.push({
            type: 'answer',
            question_id: 'alcohol_03',
            new_value: 'no_alcohol',
            description: getText('what_if_page.scenario_label_quit_alcohol'),
            scenario_id: 'quit_alcohol'
          });
        }
        break;
        
      case 'improve_sleep':
        if (!answers.sleep_01) {
          changes.push({
            type: 'answer',
            question_id: 'sleep_01',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_sleep'),
            scenario_id: 'improve_sleep'
          });
        }
        if (!answers.sleep_02) {
          changes.push({
            type: 'answer',
            question_id: 'sleep_02',
            new_value: true,
            description: getText('what_if_page.scenario_label_improve_sleep'),
            scenario_id: 'improve_sleep'
          });
        }
        break;
        
      case 'reduce_stress':
        if (answers.stress_01) {
          changes.push({
            type: 'answer',
            question_id: 'stress_01',
            new_value: false,
            description: getText('what_if_page.scenario_label_reduce_stress'),
            scenario_id: 'reduce_stress'
          });
        }
        if (!answers.stress_02) {
          changes.push({
            type: 'answer',
            question_id: 'stress_02',
            new_value: true,
            description: getText('what_if_page.scenario_label_reduce_stress'),
            scenario_id: 'reduce_stress'
          });
        }
        break;
        
      case 'increase_social':
        if (answers.social_01) {
          changes.push({
            type: 'answer',
            question_id: 'social_01',
            new_value: false,
            description: getText('what_if_page.scenario_label_increase_social'),
            scenario_id: 'increase_social'
          });
        }
        if (!answers.social_02) {
          changes.push({
            type: 'answer',
            question_id: 'social_02',
            new_value: true,
            description: getText('what_if_page.scenario_label_increase_social'),
            scenario_id: 'increase_social'
          });
        }
        break;
    }
  });
  
  return changes;
}

function groupChangesByScenario(changesWithImpact) {
  const grouped = {};
  
  changesWithImpact.forEach(change => {
    const scenarioId = change.scenario_id || 'other';
    
    if (!grouped[scenarioId]) {
      grouped[scenarioId] = {
        scenario_id: scenarioId,
        changes: [],
        total_realistic_impact: 0,
        total_theoretical_impact: 0
      };
    }
    
    grouped[scenarioId].changes.push(change);
    grouped[scenarioId].total_realistic_impact += (change.realistic_impact || change.impact);
    grouped[scenarioId].total_theoretical_impact += change.impact;
  });
  
  return Object.values(grouped);
}

// ========================================
// RESULTS
// ========================================

function renderResults(container) {
  const existing = container.querySelector('.results-section');
  if (existing) {
    existing.remove();
  }
  
  if (!simulatedResult) {
    return;
  }
  
  const section = document.createElement('div');
  section.className = 'results-section';
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
  title.textContent = getText('what_if_page.result_title');
  
  section.appendChild(title);
  
  const comparison = renderComparison();
  section.appendChild(comparison);
  
  const breakdown = renderBreakdown();
  section.appendChild(breakdown);
  
  const visualization = renderVisualization();
  section.appendChild(visualization);
  
  const actions = renderResultActions();
  section.appendChild(actions);
  
  container.appendChild(section);
}

function renderComparison() {
  const container = document.createElement('div');
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  `;
  
  // Card 1: Current
  const current = createResultCard(
    getText('what_if_page.current_label'),
    baselineResult.total_life_expectancy.toFixed(1),
    '#95a5a6',
    getText('what_if_page.current_label')
  );
  
  // Card 2: Realistic (age-adjusted)
  const realistic = createResultCard(
    getText('what_if_page.realistic_label'),
    simulatedResult.realistic_modified.toFixed(1),
    '#2ecc71',
    getText('what_if_page.with_changes_realistic')
  );
  
  // Card 3: Difference (realistic)
  const difference = createResultCard(
    getText('what_if_page.difference_label'),
    simulatedResult.realistic_difference >= 0 
      ? `+${simulatedResult.realistic_difference.toFixed(1)}`
      : simulatedResult.realistic_difference.toFixed(1),
    simulatedResult.realistic_difference >= 0 ? '#2ecc71' : '#e74c3c',
    getText('what_if_page.realistic_gain_label')
  );
  
  container.appendChild(current);
  container.appendChild(realistic);
  container.appendChild(difference);
  
  // Add info box about theoretical vs realistic
  const infoBox = document.createElement('div');
  infoBox.style.cssText = `
    grid-column: 1 / -1;
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 15px;
    border-radius: 8px;
    font-size: 14px;
    color: #856404;
    line-height: 1.6;
  `;
  
  // Use function from texts.js
  const infoTextFunc = getText('what_if_page.age_adjustment_info');
  infoBox.innerHTML = infoTextFunc(
    simulatedResult.theoretical_difference.toFixed(1),
    baselineResult.age,
    Math.round(simulatedResult.age_adjustment_factor * 100),
    100 - Math.round(simulatedResult.damage_adjustment_factor * 100),
    simulatedResult.realistic_difference.toFixed(1)
  );
  
  container.appendChild(infoBox);
  
  return container;
}

function createResultCard(label, value, color, subtitle) {
  const card = document.createElement('div');
  card.style.cssText = `
    background: ${color}15;
    border: 3px solid ${color};
    border-radius: 12px;
    padding: 30px;
    text-align: center;
  `;
  
  const labelEl = document.createElement('div');
  labelEl.style.cssText = `
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
  `;
  labelEl.textContent = label;
  
  const valueEl = document.createElement('div');
  valueEl.style.cssText = `
    font-size: 48px;
    font-weight: bold;
    color: ${color};
    margin-bottom: 5px;
  `;
  valueEl.textContent = value;
  
  const yearsLabel = document.createElement('div');
  yearsLabel.style.cssText = `
    font-size: 16px;
    color: #666;
  `;
  yearsLabel.textContent = getText('what_if_page.years');
  
  card.appendChild(labelEl);
  card.appendChild(valueEl);
  card.appendChild(yearsLabel);
  
  return card;
}

function renderBreakdown() {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 40px;
  `;
  
  const title = document.createElement('h3');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 22px;
  `;
  title.textContent = getText('what_if_page.detailed_breakdown');
  
  const table = document.createElement('div');
  table.style.cssText = `
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
  `;
  
  const tableHeader = document.createElement('div');
  tableHeader.style.cssText = `
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    padding-bottom: 15px;
    border-bottom: 2px solid #ddd;
    font-weight: bold;
    color: #666;
    font-size: 14px;
  `;
  
  const headerChange = document.createElement('div');
  headerChange.textContent = getText('what_if_page.change_label');
  
  const headerImpact = document.createElement('div');
  headerImpact.textContent = getText('what_if_page.realistic_impact');
  headerImpact.style.textAlign = 'right';
  
  tableHeader.appendChild(headerChange);
  tableHeader.appendChild(headerImpact);
  
  table.appendChild(tableHeader);
  
  // Group changes by scenario
  const groupedChanges = groupChangesByScenario(simulatedResult.changes);
  
  groupedChanges.forEach(group => {
    // Determine display strategy
    const shouldGroup = group.changes.length > 1 && 
                       (group.scenario_id === 'improve_diet' || 
                        group.scenario_id === 'improve_sleep' ||
                        group.scenario_id === 'quit_alcohol');
    
    if (shouldGroup) {
      // Show grouped summary (use realistic impact)
      const groupImpact = group.total_realistic_impact;
      
      // Only show if total impact > 0.1
      if (Math.abs(groupImpact) > 0.1) {
        const row = createBreakdownRow(
          getScenarioLabel(group.scenario_id),
          groupImpact,
          true // isGrouped
        );
        table.appendChild(row);
      }
    } else {
      // Show individual changes (use realistic impact)
      group.changes.forEach(change => {
        const realisticImpact = change.realistic_impact || change.impact;
        
        // Only show if impact > 0.1
        if (Math.abs(realisticImpact) > 0.1) {
          const row = createBreakdownRow(
            change.description || change.question_id,
            realisticImpact,
            false // isGrouped
          );
          table.appendChild(row);
        }
      });
    }
  });
  
  container.appendChild(title);
  container.appendChild(table);
  
  return container;
}

function createBreakdownRow(label, impact, isGrouped) {
  const row = document.createElement('div');
  row.style.cssText = `
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  `;
  
  const changeLabel = document.createElement('div');
  changeLabel.style.cssText = `
    font-size: 15px;
    color: #34495e;
    ${isGrouped ? 'font-weight: 600;' : ''}
  `;
  changeLabel.textContent = label;
  
  const impactValue = document.createElement('div');
  impactValue.style.cssText = `
    text-align: right;
    font-size: 18px;
    font-weight: bold;
    color: ${impact >= 0 ? '#2ecc71' : '#e74c3c'};
  `;
  impactValue.textContent = `${impact >= 0 ? '+' : ''}${impact.toFixed(1)} ${getText('what_if_page.years')}`;
  
  row.appendChild(changeLabel);
  row.appendChild(impactValue);
  
  return row;
}

function getScenarioLabel(scenarioId) {
  return getText(`what_if_page.scenario_label_${scenarioId}`);
}

function renderVisualization() {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 40px;
  `;
  
  const title = document.createElement('h3');
  title.style.cssText = `
    margin: 0 0 20px 0;
    font-size: 22px;
  `;
  title.textContent = getText('what_if_page.comparison_title') || 'Visualisierung';
  
  const chart = createComparisonChart();
  
  container.appendChild(title);
  container.appendChild(chart);
  
  return container;
}

function createComparisonChart() {
  const container = document.createElement('div');
  container.style.cssText = `
    background: #f8f9fa;
    padding: 30px;
    border-radius: 8px;
  `;
  
  const maxValue = Math.max(baselineResult.total_life_expectancy, simulatedResult.realistic_modified);
  const scale = 100 / maxValue;
  
  const currentBar = createBar(
    getText('what_if_page.current_label'),
    baselineResult.total_life_expectancy,
    scale,
    '#95a5a6'
  );
  
  const modifiedBar = createBar(
    getText('what_if_page.with_changes_realistic'),
    simulatedResult.realistic_modified,
    scale,
    '#2ecc71'
  );
  
  container.appendChild(currentBar);
  container.appendChild(modifiedBar);
  
  return container;
}

function createBar(label, value, scale, color) {
  const container = document.createElement('div');
  container.style.cssText = `
    margin-bottom: 25px;
  `;
  
  const header = document.createElement('div');
  header.style.cssText = `
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  `;
  
  const labelEl = document.createElement('div');
  labelEl.style.cssText = `
    font-weight: bold;
    font-size: 16px;
  `;
  labelEl.textContent = label;
  
  const valueEl = document.createElement('div');
  valueEl.style.cssText = `
    font-weight: bold;
    font-size: 16px;
    color: ${color};
  `;
  valueEl.textContent = `${value.toFixed(1)} ${getText('what_if_page.years')}`;
  
  header.appendChild(labelEl);
  header.appendChild(valueEl);
  
  const barContainer = document.createElement('div');
  barContainer.style.cssText = `
    width: 100%;
    height: 40px;
    background: #ecf0f1;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  `;
  
  const bar = document.createElement('div');
  bar.style.cssText = `
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, ${color}dd 0%, ${color} 100%);
    border-radius: 20px;
    transition: width 1s ease-out;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
    color: white;
    font-weight: bold;
  `;
  
  barContainer.appendChild(bar);
  
  setTimeout(() => {
    bar.style.width = `${value * scale}%`;
  }, 100);
  
  container.appendChild(header);
  container.appendChild(barContainer);
  
  return container;
}

function renderResultActions() {
  const container = document.createElement('div');
  container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 30px;
  `;
  
  const saveButton = createActionButton(
    getText('what_if_page.save_scenario_button'),
    '#3498db',
    () => saveScenario()
  );
  
  const newButton = createActionButton(
    getText('what_if_page.new_scenario_button'),
    '#9b59b6',
    () => resetScenarios()
  );
  
  const profileButton = createActionButton(
    getText('what_if_page.to_profile_button'),
    '#2ecc71',
    () => window.location.href = 'profile.html'
  );
  
  container.appendChild(saveButton);
  container.appendChild(newButton);
  container.appendChild(profileButton);
  
  return container;
}

function createActionButton(text, color, onClick) {
  const button = document.createElement('button');
  button.style.cssText = `
    padding: 15px 20px;
    background: ${color};
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: all 0.2s;
  `;
  button.textContent = text;
  
  button.addEventListener('click', onClick);
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = `0 4px 15px ${color}60`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = 'none';
  });
  
  return button;
}

// ========================================
// PRESET SCENARIOS
// ========================================

function renderPresetScenarios(container) {
  const section = document.createElement('div');
  section.className = 'preset-scenarios-section';
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
  title.textContent = getText('what_if_page.preset_scenarios_title');
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    color: #666;
    margin-bottom: 30px;
  `;
  subtitle.textContent = getText('what_if_page.preset_scenarios_subtitle');
  
  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  `;
  
  const presets = [
    {
      name: getText('what_if_page.preset_transformation_name'),
      description: getText('what_if_page.preset_transformation_desc'),
      scenarios: ['quit_smoking', 'lose_weight_10', 'start_exercise', 'improve_diet', 'reduce_stress', 'improve_sleep'],
      color: '#2ecc71'
    },
    {
      name: getText('what_if_page.preset_fitness_name'),
      description: getText('what_if_page.preset_fitness_desc'),
      scenarios: ['start_exercise', 'improve_diet', 'improve_sleep', 'lose_weight_5'],
      color: '#3498db'
    },
    {
      name: getText('what_if_page.preset_smokestop_name'),
      description: getText('what_if_page.preset_smokestop_desc'),
      scenarios: ['quit_smoking', 'start_exercise', 'reduce_stress'],
      color: '#e74c3c'
    },
    {
      name: getText('what_if_page.preset_stress_name'),
      description: getText('what_if_page.preset_stress_desc'),
      scenarios: ['reduce_stress', 'improve_sleep', 'increase_social'],
      color: '#9b59b6'
    },
    {
      name: getText('what_if_page.preset_diet_name'),
      description: getText('what_if_page.preset_diet_desc'),
      scenarios: ['improve_diet', 'lose_weight_5', 'reduce_alcohol'],
      color: '#27ae60'
    },
    {
      name: getText('what_if_page.preset_quickwins_name'),
      description: getText('what_if_page.preset_quickwins_desc'),
      scenarios: ['improve_sleep', 'reduce_alcohol', 'increase_social'],
      color: '#f39c12'
    }
  ];
  
  presets.forEach(preset => {
    const card = createPresetCard(preset);
    grid.appendChild(card);
  });
  
  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(grid);
  container.appendChild(section);
}

function createPresetCard(preset) {
  const card = document.createElement('div');
  card.style.cssText = `
    background: white;
    border: 2px solid ${preset.color};
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
    card.style.boxShadow = `0 8px 20px ${preset.color}40`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
  
  card.addEventListener('click', () => {
    loadPreset(preset);
  });
  
  const name = document.createElement('div');
  name.style.cssText = `
    font-size: 20px;
    font-weight: bold;
    color: ${preset.color};
    margin-bottom: 10px;
  `;
  name.textContent = preset.name;
  
  const description = document.createElement('div');
  description.style.cssText = `
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
  `;
  description.textContent = preset.description;
  
  const count = document.createElement('div');
  count.style.cssText = `
    font-size: 12px;
    color: #999;
  `;
  count.textContent = `${preset.scenarios.length} ${getText('what_if_page.changes_label')}`;
  
  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(count);
  
  return card;
}

function loadPreset(preset) {
  currentScenarios = [];
  
  preset.scenarios.forEach(scenarioId => {
    const label = getText(`what_if_page.scenarios.${scenarioId}`);
    currentScenarios.push({ id: scenarioId, label });
  });
  
  updateAllScenarioButtons();
  updateSelectedScenarios();
  renderCalculateButton(document.getElementById('whatif-container'));
  
  setTimeout(() => {
    const calculateSection = document.querySelector('.calculate-button-section');
    if (calculateSection) {
      calculateSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 100);
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function saveScenario() {
  if (!simulatedResult || currentScenarios.length === 0) {
    alert(getText('what_if_page.error_calculate_first'));
    return;
  }
  
  const scenarioData = {
    scenarios: currentScenarios,
    result: simulatedResult,
    timestamp: new Date().toISOString()
  };
  
  const saved = JSON.parse(localStorage.getItem('dr_livelong_scenarios') || '[]');
  saved.push(scenarioData);
  localStorage.setItem('dr_livelong_scenarios', JSON.stringify(saved));
  
  alert(getText('what_if_page.scenario_saved')
    .replace('{gain}', simulatedResult.realistic_difference.toFixed(1))
    .replace('{count}', currentScenarios.length));
}

function showError(message) {
  const container = document.getElementById('whatif-container');
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

// ========================================
// INIT
// ========================================

export function initWhatIfPage() {
  renderWhatIf();
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initWhatIfPage);
}

// ========================================
// EXPORT
// ========================================

export default {
  renderWhatIf,
  initWhatIfPage,
  calculateSimulation,
  resetScenarios
};