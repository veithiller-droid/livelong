// ui/test.js
// Test Flow Engine für Dr. Livelong
// Haupttest mit 64 Fragen, Navigation, Progress, Auto-Save
// Version 1.0.0

import { STATE, setAnswer, getAnswer, getAllAnswers, setProgress, getProgress, saveState, getCurrentAge, getBMI } from '../core/state.js';
import { questions } from '../data/questions.js';
import { calculateLifeExpectancy } from '../core/scoring.js';
import { UI_TEXTS } from '../data/texts.js';

const CURRENT_LANG = (localStorage.getItem('dr_livelong_lang') || 'de').toLowerCase().split('-')[0];


// ========================================
// STATE
// ========================================

let currentQuestionIndex = 0;
let totalQuestions = questions.length;
let autoSaveInterval = null;

// ========================================
// MAIN RENDER FUNCTION
// ========================================

export function renderTest() {
  const container = document.getElementById('test-container');
  
  if (!container) {
    console.error('Test container not found');
    return;
  }
  
  const savedProgress = getProgress('current_question');
  if (savedProgress && savedProgress > 0) {
    if (confirm(getText('test_page.resume_prompt'))) {
      currentQuestionIndex = savedProgress;
    } else {
      currentQuestionIndex = 0;
      setProgress('current_question', 0);
    }
  }
  
  container.innerHTML = '';
  
  renderHeader(container);
  renderProgressBar(container);
  renderQuestionCard(container);
  renderNavigation(container);
  
  startAutoSave();
}

// ========================================
// HEADER
// ========================================

function renderHeader(container) {
  const header = document.createElement('div');
  header.className = 'test-header';
  header.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h1');
  title.style.cssText = `
    margin: 0 0 10px 0;
    font-size: 28px;
  `;
  title.textContent = getText('test_page.title');
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    margin: 0;
    font-size: 16px;
    opacity: 0.9;
  `;
  subtitle.textContent = getText('test_page.subtitle').replace('{count}', totalQuestions);
  
  header.appendChild(title);
  header.appendChild(subtitle);
  container.appendChild(header);
}

// ========================================
// PROGRESS BAR
// ========================================

function renderProgressBar(container) {
  const existing = container.querySelector('.progress-bar-container');
  if (existing) {
    existing.remove();
  }
  
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-bar-container';
  progressContainer.style.cssText = `
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  `;
  
  const info = document.createElement('div');
  info.style.cssText = `
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
  `;
  
  const questionNumber = document.createElement('span');
  questionNumber.textContent = getText('test_page.progress')
    .replace('{current}', currentQuestionIndex + 1)
    .replace('{total}', totalQuestions);
  
  const percentage = document.createElement('span');
  percentage.style.fontWeight = 'bold';
  percentage.textContent = `${Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%`;
  
  info.appendChild(questionNumber);
  info.appendChild(percentage);
  
  const barContainer = document.createElement('div');
  barContainer.style.cssText = `
    width: 100%;
    height: 20px;
    background: #ecf0f1;
    border-radius: 10px;
    overflow: hidden;
  `;
  
  const bar = document.createElement('div');
  bar.className = 'progress-bar';
  bar.style.cssText = `
    height: 100%;
    width: ${((currentQuestionIndex + 1) / totalQuestions) * 100}%;
    background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
    transition: width 0.3s ease-out;
  `;
  
  barContainer.appendChild(bar);
  
  progressContainer.appendChild(info);
  progressContainer.appendChild(barContainer);
  container.appendChild(progressContainer);
}

// ========================================
// QUESTION CARD
// ========================================

function renderQuestionCard(container) {
  const existing = container.querySelector('.question-card');
  if (existing) {
    existing.remove();
  }
  
  const question = questions[currentQuestionIndex];
  
  if (!question) {
    console.error('Question not found:', currentQuestionIndex);
    return;
  }
  
  const card = document.createElement('div');
  card.className = 'question-card';
  card.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    min-height: 400px;
  `;
  
  const questionText = document.createElement('h2');
  questionText.style.cssText = `
    margin: 0 0 30px 0;
    font-size: 24px;
    line-height: 1.4;
    color: #2c3e50;
  `;
  questionText.textContent = question.text[CURRENT_LANG];
  
  card.appendChild(questionText);
  
  const currentAnswer = getAnswer(question.id);
  
  const answerContainer = document.createElement('div');
  answerContainer.className = 'answer-container';
  
  switch (question.type) {
    case 'boolean':
      renderBooleanAnswer(answerContainer, question, currentAnswer);
      break;
    case 'likert':
      renderLikertAnswer(answerContainer, question, currentAnswer);
      break;
    case 'select':
      renderSelectAnswer(answerContainer, question, currentAnswer);
      break;
    case 'multiselect':
      renderMultiselectAnswer(answerContainer, question, currentAnswer);
      break;
    case 'number':
      renderNumberAnswer(answerContainer, question, currentAnswer);
      break;
    default:
      console.error('Unknown question type:', question.type);
  }
  
  card.appendChild(answerContainer);
  
  if (question.help_text) {
    const helpText = document.createElement('div');
    helpText.style.cssText = `
      margin-top: 20px;
      padding: 15px;
      background: #e8f4f8;
      border-left: 4px solid #3498db;
      border-radius: 6px;
      font-size: 14px;
      color: #34495e;
    `;
    helpText.innerHTML = `<strong>ℹ️ Hinweis:</strong> ${question.help_text[CURRENT_LANG]}`;
    card.appendChild(helpText);
  }
  
  container.appendChild(card);
}

// ========================================
// ANSWER TYPES
// ========================================

function renderBooleanAnswer(container, question, currentAnswer) {
  const options = document.createElement('div');
  options.style.cssText = `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  `;
  
  const yesButton = createBooleanButton(
    question.options?.yes?.[CURRENT_LANG] || getText('common.yes'),
    true,
    currentAnswer === true,
    () => handleAnswer(question.id, true)
  );
  
  const noButton = createBooleanButton(
    question.options?.no?.[CURRENT_LANG] || getText('common.no'),
    false,
    currentAnswer === false,
    () => handleAnswer(question.id, false)
  );
  
  options.appendChild(yesButton);
  options.appendChild(noButton);
  container.appendChild(options);
}

function createBooleanButton(text, value, isSelected, onClick) {
  const button = document.createElement('button');
  button.style.cssText = `
    padding: 20px;
    border: 3px solid ${isSelected ? '#2ecc71' : '#ddd'};
    background: ${isSelected ? '#2ecc71' : 'white'};
    color: ${isSelected ? 'white' : '#2c3e50'};
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
  `;
  button.textContent = text;
  
  button.addEventListener('click', onClick);
  
  button.addEventListener('mouseenter', () => {
    if (!isSelected) {
      button.style.background = '#f8f9fa';
      button.style.borderColor = '#3498db';
    }
  });
  
  button.addEventListener('mouseleave', () => {
    if (!isSelected) {
      button.style.background = 'white';
      button.style.borderColor = '#ddd';
    }
  });
  
  return button;
}

function renderLikertAnswer(container, question, currentAnswer) {
  const scale = question.scale || 5;
  
  const scaleContainer = document.createElement('div');
  scaleContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 15px;
  `;
  
  for (let i = 1; i <= scale; i++) {
    const option = createLikertOption(
      i,
      scale,
      getText(`common.likert_scale.${i}`),
      currentAnswer === i,
      () => handleAnswer(question.id, i)
    );
    scaleContainer.appendChild(option);
  }
  
  container.appendChild(scaleContainer);
}

function createLikertOption(value, maxValue, text, isSelected, onClick) {
  const option = document.createElement('div');
  option.style.cssText = `
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border: 2px solid ${isSelected ? '#3498db' : '#ddd'};
    background: ${isSelected ? '#3498db15' : 'white'};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  const radio = document.createElement('div');
  radio.style.cssText = `
    width: 24px;
    height: 24px;
    border: 2px solid ${isSelected ? '#3498db' : '#ddd'};
    border-radius: 50%;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `;
  
  if (isSelected) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      width: 12px;
      height: 12px;
      background: #3498db;
      border-radius: 50%;
    `;
    radio.appendChild(dot);
  }
  
  const label = document.createElement('div');
  label.style.cssText = `
    flex: 1;
    font-size: 16px;
    color: ${isSelected ? '#2c3e50' : '#666'};
    font-weight: ${isSelected ? 'bold' : 'normal'};
  `;
  label.textContent = text;
  
  const number = document.createElement('div');
  number.style.cssText = `
    font-size: 14px;
    color: #999;
    margin-left: 10px;
  `;
  number.textContent = `${value}/${maxValue}`;
  
  option.appendChild(radio);
  option.appendChild(label);
  option.appendChild(number);
  
  option.addEventListener('click', onClick);
  
  option.addEventListener('mouseenter', () => {
    if (!isSelected) {
      option.style.background = '#f8f9fa';
      option.style.borderColor = '#3498db';
    }
  });
  
  option.addEventListener('mouseleave', () => {
    if (!isSelected) {
      option.style.background = 'white';
      option.style.borderColor = '#ddd';
    }
  });
  
  return option;
}

function renderSelectAnswer(container, question, currentAnswer) {
  const options = document.createElement('div');
  options.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;

  const opts = Array.isArray(question.options) ? question.options : [];

  opts.forEach((opt) => {
    const value = opt.value;
    const text =
      (opt.label && (opt.label[CURRENT_LANG] || opt.label.de || opt.label.en || opt.label.es)) ||
      value;

    const option = createSelectOption(
      value,
      text,
      currentAnswer === value,
      () => handleAnswer(question.id, value)
    );
    options.appendChild(option);
  });

  container.appendChild(options);
}


function createSelectOption(value, text, isSelected, onClick) {
  const option = document.createElement('div');
  option.style.cssText = `
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border: 2px solid ${isSelected ? '#2ecc71' : '#ddd'};
    background: ${isSelected ? '#2ecc7115' : 'white'};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  const radio = document.createElement('div');
  radio.style.cssText = `
    width: 24px;
    height: 24px;
    border: 2px solid ${isSelected ? '#2ecc71' : '#ddd'};
    border-radius: 50%;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `;
  
  if (isSelected) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      width: 12px;
      height: 12px;
      background: #2ecc71;
      border-radius: 50%;
    `;
    radio.appendChild(dot);
  }
  
  const label = document.createElement('div');
  label.style.cssText = `
    flex: 1;
    font-size: 16px;
    color: ${isSelected ? '#2c3e50' : '#666'};
    font-weight: ${isSelected ? 'bold' : 'normal'};
  `;
  label.textContent = text;
  
  option.appendChild(radio);
  option.appendChild(label);
  
  option.addEventListener('click', onClick);
  
  option.addEventListener('mouseenter', () => {
    if (!isSelected) {
      option.style.background = '#f8f9fa';
      option.style.borderColor = '#2ecc71';
    }
  });
  
  option.addEventListener('mouseleave', () => {
    if (!isSelected) {
      option.style.background = 'white';
      option.style.borderColor = '#ddd';
    }
  });
  
  return option;
}

function renderMultiselectAnswer(container, question, currentAnswer) {
  const selectedValues = Array.isArray(currentAnswer) ? currentAnswer : [];

  const options = document.createElement('div');
  options.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;

  const opts = Array.isArray(question.options) ? question.options : [];

  opts.forEach((opt) => {
    const value = opt.value;
    const isSelected = selectedValues.includes(value);
    const text =
      (opt.label && (opt.label[CURRENT_LANG] || opt.label.de || opt.label.en || opt.label.es)) ||
      value;

    const option = createMultiselectOption(
      value,
      text,
      isSelected,
      () => handleMultiselect(question.id, value, selectedValues)
    );
    options.appendChild(option);
  });

  container.appendChild(options);
}


function createMultiselectOption(value, text, isSelected, onClick) {
  const option = document.createElement('div');
  option.style.cssText = `
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border: 2px solid ${isSelected ? '#9b59b6' : '#ddd'};
    background: ${isSelected ? '#9b59b615' : 'white'};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  `;
  
  const checkbox = document.createElement('div');
  checkbox.style.cssText = `
    width: 24px;
    height: 24px;
    border: 2px solid ${isSelected ? '#9b59b6' : '#ddd'};
    border-radius: 4px;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: ${isSelected ? '#9b59b6' : 'white'};
  `;
  
  if (isSelected) {
    checkbox.textContent = '✓';
    checkbox.style.color = 'white';
    checkbox.style.fontWeight = 'bold';
  }
  
  const label = document.createElement('div');
  label.style.cssText = `
    flex: 1;
    font-size: 16px;
    color: ${isSelected ? '#2c3e50' : '#666'};
    font-weight: ${isSelected ? 'bold' : 'normal'};
  `;
  label.textContent = text;
  
  option.appendChild(checkbox);
  option.appendChild(label);
  
  option.addEventListener('click', onClick);
  
  option.addEventListener('mouseenter', () => {
    if (!isSelected) {
      option.style.background = '#f8f9fa';
      option.style.borderColor = '#9b59b6';
    }
  });
  
  option.addEventListener('mouseleave', () => {
    if (!isSelected) {
      option.style.background = 'white';
      option.style.borderColor = '#ddd';
    }
  });
  
  return option;
}

function renderNumberAnswer(container, question, currentAnswer) {
  const inputContainer = document.createElement('div');
  inputContainer.style.cssText = `
    max-width: 400px;
  `;
  
  const label = document.createElement('label');
  label.style.cssText = `
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #666;
  `;
  label.textContent = question.unit 
    ? `${getText('test_page.enter_value')} (${question.unit[CURRENT_LANG]}):`
    : getText('test_page.enter_value') + ':';
  
  const input = document.createElement('input');
  input.type = 'number';
  input.value = currentAnswer !== null && currentAnswer !== undefined ? currentAnswer : '';
  input.style.cssText = `
    width: 100%;
    padding: 15px;
    font-size: 18px;
    border: 2px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
  `;
  
  if (question.min !== undefined) {
    input.min = question.min;
  }
  if (question.max !== undefined) {
    input.max = question.max;
  }
  if (question.step !== undefined) {
    input.step = question.step;
  }
  
  input.addEventListener('focus', () => {
    input.style.borderColor = '#3498db';
  });
  
  input.addEventListener('blur', () => {
    input.style.borderColor = '#ddd';
    
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      handleAnswer(question.id, value);
    }
  });
  
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const value = parseFloat(input.value);
      if (!isNaN(value)) {
        handleAnswer(question.id, value);
        nextQuestion();
      }
    }
  });
  
  const range = document.createElement('div');
  range.style.cssText = `
    margin-top: 8px;
    font-size: 14px;
    color: #999;
  `;
  
  if (question.min !== undefined && question.max !== undefined) {
    range.textContent = `${getText('test_page.valid_range')}: ${question.min} - ${question.max}`;
  }
  
  inputContainer.appendChild(label);
  inputContainer.appendChild(input);
  if (range.textContent) {
    inputContainer.appendChild(range);
  }
  
  container.appendChild(inputContainer);
}

// ========================================
// ANSWER HANDLERS
// ========================================
function shouldAutoAdvance(question) {
  return question && (question.type === 'boolean' || question.type === 'likert' || question.type === 'select');
}


function handleAnswer(questionId, value) {
  setAnswer(questionId, value); // speichert bereits

  const q = questions[currentQuestionIndex];

  // Auto-Advance nur für Single-Choice
  if (shouldAutoAdvance(q)) {
    // kurzer Tick, damit der Klick "sitzt"
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        nextQuestion();
      } else {
        finishTest();
      }
    }, 120);
    return;
  }

  // Fallback: nur Navigation neu rendern
  const container = document.getElementById('test-container');
  if (container) renderNavigation(container);
}




function handleMultiselect(questionId, value, currentValues) {
  let newValues = [...currentValues];

  const index = newValues.indexOf(value);
  if (index > -1) {
    newValues.splice(index, 1);
  } else {
    newValues.push(value);
  }

  setAnswer(questionId, newValues); // speichert bereits

  const container = document.getElementById('test-container');
  if (!container) return;

  renderProgressBar(container);
  renderQuestionCard(container);
  renderNavigation(container);
}

// ========================================
// NAVIGATION
// ========================================

function renderNavigation(container) {
  const existing = container.querySelector('.navigation-container');
  if (existing) {
    existing.remove();
  }
  
  const nav = document.createElement('div');
  nav.className = 'navigation-container';
  nav.style.cssText = `
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
  `;
  
  const backButton = document.createElement('button');
  backButton.style.cssText = `
    padding: 15px 30px;
    background: ${currentQuestionIndex === 0 ? '#95a5a6' : '#3498db'};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: ${currentQuestionIndex === 0 ? 'not-allowed' : 'pointer'};
    transition: background 0.3s;
    min-width: 150px;
  `;
  backButton.textContent = `← ${getText('common.back')}`;
  backButton.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex > 0) {
    backButton.addEventListener('click', previousQuestion);
    backButton.addEventListener('mouseenter', () => {
      backButton.style.background = '#2980b9';
    });
    backButton.addEventListener('mouseleave', () => {
      backButton.style.background = '#3498db';
    });
  }
  
  const nextButton = document.createElement('button');
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const currentAnswer = getAnswer(questions[currentQuestionIndex].id);
  const hasAnswer = currentAnswer !== null && currentAnswer !== undefined;
  
  nextButton.style.cssText = `
    padding: 15px 30px;
    background: ${hasAnswer ? (isLastQuestion ? '#2ecc71' : '#3498db') : '#95a5a6'};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: ${hasAnswer ? 'pointer' : 'not-allowed'};
    transition: all 0.3s;
    min-width: 150px;
  `;
  nextButton.textContent = isLastQuestion 
    ? `${getText('test_page.finish_button')} ✓`
    : `${getText('common.next')} →`;
  nextButton.disabled = !hasAnswer;
  
  if (hasAnswer) {
    nextButton.addEventListener('click', () => {
      if (isLastQuestion) {
        finishTest();
      } else {
        nextQuestion();
      }
    });
    
    nextButton.addEventListener('mouseenter', () => {
      nextButton.style.background = isLastQuestion ? '#27ae60' : '#2980b9';
      nextButton.style.transform = 'translateY(-2px)';
      nextButton.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
    
    nextButton.addEventListener('mouseleave', () => {
      nextButton.style.background = isLastQuestion ? '#2ecc71' : '#3498db';
      nextButton.style.transform = 'translateY(0)';
      nextButton.style.boxShadow = 'none';
    });
  }
  
  nav.appendChild(backButton);
  nav.appendChild(nextButton);
  container.appendChild(nav);
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    setProgress('current_question', currentQuestionIndex);
    saveState();
    
    const container = document.getElementById('test-container');
    updateProgressBar();
    renderQuestionCard(container);
    renderNavigation(container);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function nextQuestion() {
  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
    setProgress('current_question', currentQuestionIndex);
    saveState();
    
    const container = document.getElementById('test-container');
    updateProgressBar();
    renderQuestionCard(container);
    renderNavigation(container);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateProgressBar() {
  const bar = document.querySelector('.progress-bar');
  if (bar) {
    bar.style.width = `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`;
  }
  
  const container = document.getElementById('test-container');
  if (container) {
    renderProgressBar(container);
  }
}

// ========================================
// FINISH TEST
// ========================================

async function finishTest() {
  const allAnswers = getAllAnswers();
  const answeredCount = Object.keys(allAnswers).length;
  
  if (answeredCount < totalQuestions * 0.8) {
    const proceed = confirm(
      `Du hast nur ${answeredCount} von ${totalQuestions} Fragen beantwortet.\n\n` +
      `Für eine zuverlässige Berechnung empfehlen wir mindestens ${Math.round(totalQuestions * 0.8)} Antworten.\n\n` +
      `Trotzdem fortfahren?`
    );
    
    if (!proceed) {
      return;
    }
  }
  
  const container = document.getElementById('test-container');
  
  showLoadingScreen(container);
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const meta = STATE.meta;
    const answers = STATE.answers;
    
    const calculation = calculateLifeExpectancy(meta, answers);
    
    STATE.calculation = calculation;
    STATE.progress.test_completed = true;
    saveState();
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    window.location.href = 'result.html';
    
  } catch (error) {
    console.error('Calculation error:', error);
    
    container.innerHTML = '';
    
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      background: #fff5f5;
      border: 2px solid #e74c3c;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      max-width: 600px;
      margin: 50px auto;
    `;
    errorDiv.innerHTML = `
      <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
      <h2 style="color: #e74c3c; margin: 0 0 10px 0;">Fehler bei der Berechnung</h2>
      <p style="color: #666; margin-bottom: 20px;">
        ${error.message || 'Ein unerwarteter Fehler ist aufgetreten.'}
      </p>
      <button onclick="location.reload()" style="
        padding: 12px 30px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
      ">
        Erneut versuchen
      </button>
    `;
    
    container.appendChild(errorDiv);
  }
}

function showLoadingScreen(container) {
  container.innerHTML = '';
  
  const loading = document.createElement('div');
  loading.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    text-align: center;
  `;
  
  const spinner = document.createElement('div');
  spinner.style.cssText = `
    width: 60px;
    height: 60px;
    border: 6px solid #ecf0f1;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 30px;
  `;
  
  const title = document.createElement('h2');
  title.style.cssText = `
    margin: 0 0 10px 0;
    font-size: 28px;
    color: #2c3e50;
  `;
  title.textContent = getText('test_page.calculating_title');
  
  const subtitle = document.createElement('p');
  subtitle.style.cssText = `
    margin: 0;
    font-size: 16px;
    color: #666;
  `;
  subtitle.textContent = getText('test_page.calculating_subtitle');
  
  loading.appendChild(spinner);
  loading.appendChild(title);
  loading.appendChild(subtitle);
  container.appendChild(loading);
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

// ========================================
// AUTO-SAVE
// ========================================

function startAutoSave() {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval);
  }
  
  autoSaveInterval = setInterval(() => {
    saveState();
  }, 30000);
}

function stopAutoSave() {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval);
    autoSaveInterval = null;
  }
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
      previousQuestion();
    }
    
    if (e.key === 'ArrowRight') {
      const currentAnswer = getAnswer(questions[currentQuestionIndex].id);
      const hasAnswer = currentAnswer !== null && currentAnswer !== undefined;
      
      if (hasAnswer) {
        if (currentQuestionIndex < totalQuestions - 1) {
          nextQuestion();
        } else {
          finishTest();
        }
      }
    }
    
    const question = questions[currentQuestionIndex];
    if (question.type === 'boolean') {
      if (e.key === 'y' || e.key === 'Y' || e.key === 'j' || e.key === 'J') {
        handleAnswer(question.id, true);
      }
      if (e.key === 'n' || e.key === 'N') {
        handleAnswer(question.id, false);
      }
    }
    
    if (question.type === 'likert') {
      const num = parseInt(e.key);
      if (num >= 1 && num <= (question.scale || 5)) {
        handleAnswer(question.id, num);
      }
    }
  });
}

// ========================================
// HELPER FUNCTIONS
// ========================================

function pickLabel(labels) {
  if (labels == null) return '';
  if (typeof labels === 'string') return labels;
  return labels[CURRENT_LANG] || labels.de || labels.en || labels.es || '';
}


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
// INIT
// ========================================

export function initTestPage() {
  renderTest();
  setupKeyboardNavigation();

  window.addEventListener('beforeunload', (e) => {
    if (!STATE.progress.test_completed && Object.keys(STATE.answers).length > 0) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}




// ========================================
// EXPORT
// ========================================

export default {
  renderTest,
  initTestPage,
  nextQuestion,
  previousQuestion,
  finishTest
};