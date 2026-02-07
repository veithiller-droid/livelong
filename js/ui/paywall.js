// ui/paywall.js
// Payment & Access Control für Dr. Livelong
// Inkl. DEV_MODE für Testing
// Version 1.0.0

import { STATE, setPaymentStatus, isPaid } from '../core/state.js';

// ========================================
// DEV MODE CONFIGURATION
// ========================================

export const DEV_MODE = true;  // ← Testphase: Paywall komplett aus!

if (DEV_MODE) {
  console.log('%c🔓 DEV MODE ACTIVE', 'background: #00ff00; color: #000; font-size: 20px; padding: 10px;');
  console.log('Paywall bypassed. All features unlocked.');
}

// ========================================
// ACCESS CONTROL
// ========================================

export function checkAccess() {
  if (DEV_MODE) {
    return true;
  }
  
  return isPaid();
}

export function requireAccess() {
  if (!checkAccess()) {
    showPaywall();
    return false;
  }
  return true;
}

export function unlockFeatures() {
  if (DEV_MODE) {
    console.log('🔓 DEV MODE: Features already unlocked');
    return true;
  }
  
  return isPaid();
}

// ========================================
// DEV MODE CONTROLS
// ========================================

export function toggleDevMode() {
  const current = localStorage.getItem('dr_livelong_dev_mode') === 'true';
  localStorage.setItem('dr_livelong_dev_mode', (!current).toString());
  location.reload();
}

export function isDevModeActive() {
  return DEV_MODE;
}

export function getDevModeStatus() {
  return {
    active: DEV_MODE,
    reason: getDevModeReason(),
    can_toggle: true
  };
}

function getDevModeReason() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'localhost';
  }
  if (window.location.search.includes('dev')) {
    return 'url_parameter';
  }
  if (localStorage.getItem('dr_livelong_dev_mode') === 'true') {
    return 'localstorage';
  }
  return 'disabled';
}

// ========================================
// PAYWALL UI
// ========================================

export function showPaywall() {
  if (DEV_MODE) {
    console.log('🔓 DEV MODE: Paywall would show here, but skipped');
    return;
  }
  
  const modal = createPaywallModal();
  document.body.appendChild(modal);
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

export function hidePaywall() {
  const modal = document.getElementById('paywall-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

function createPaywallModal() {
  const modal = document.createElement('div');
  modal.id = 'paywall-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;
  
  const content = document.createElement('div');
  content.style.cssText = `
    background: white;
    padding: 40px;
    border-radius: 12px;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
  `;
  
  content.innerHTML = `
    <button onclick="document.getElementById('paywall-modal').remove(); document.body.style.overflow = 'auto';" 
            style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 24px; cursor: pointer;">
      ✕
    </button>
    
    <h2 style="margin-top: 0;">🔒 Erhalte dein vollständiges Gesundheitsprofil</h2>
    
    <p style="font-size: 18px; color: #666;">
      Du hast deine Lebenserwartung berechnet. Jetzt ist es Zeit für die Details!
    </p>
    
    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0;">Das erhältst du:</h3>
      <ul style="line-height: 1.8;">
        <li>✅ Detaillierte Analyse aller 19 Gesundheitsfaktoren</li>
        <li>✅ Personalisierte Empfehlungen mit konkreten Jahren-Gewinnen</li>
        <li>✅ What-If-Simulator: "Was wenn ich aufhöre zu rauchen?"</li>
        <li>✅ Interaktions-Analyse: Wie verstärken sich deine Risiken?</li>
        <li>✅ Wissenschaftliche Methodologie mit Quellen</li>
        <li>✅ PDF-Report zum Ausdrucken</li>
        <li>✅ Lebenslanger Zugriff auf dein Profil</li>
      </ul>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <div style="font-size: 32px; font-weight: bold; color: #2ecc71;">
        Nur €9.99
      </div>
      <div style="color: #666; margin-top: 5px;">
        Einmalig, kein Abo
      </div>
    </div>
    
    <button id="payment-button" style="
      width: 100%;
      padding: 18px;
      background: #2ecc71;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    " onmouseover="this.style.background='#27ae60'" onmouseout="this.style.background='#2ecc71'">
      Jetzt für €9.99 freischalten
    </button>
    
    <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
      🛡️ 30 Tage Geld-zurück-Garantie<br>
      🔒 Sichere Zahlung via Stripe
    </div>
  `;
  
  modal.appendChild(content);
  
  const paymentButton = content.querySelector('#payment-button');
  paymentButton.addEventListener('click', initiatePayment);
  
  return modal;
}

// ========================================
// PAYMENT HANDLING
// ========================================

export async function initiatePayment() {
  const button = document.getElementById('payment-button');
  if (!button) return;
  
  button.disabled = true;
  button.textContent = 'Zahlung wird verarbeitet...';
  
  try {
    if (DEV_MODE) {
      console.log('🔓 DEV MODE: Simulating successful payment');
      await simulatePayment();
      return;
    }
    
    await processRealPayment();
    
  } catch (error) {
    console.error('Payment error:', error);
    showPaymentError(error.message);
    button.disabled = false;
    button.textContent = 'Jetzt für €9.99 freischalten';
  }
}

async function simulatePayment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fakeTransactionId = 'dev_' + Date.now();
      handleSuccessfulPayment(fakeTransactionId);
      resolve();
    }, 1000);
  });
}

async function processRealPayment() {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: 'dr_livelong_full_profile',
      price: 999,
      currency: 'eur'
    })
  });
  
  if (!response.ok) {
    throw new Error('Payment initialization failed');
  }
  
  const data = await response.json();
  
  if (data.url) {
    window.location.href = data.url;
  } else if (data.session_id) {
    const stripe = Stripe(data.publishable_key);
    await stripe.redirectToCheckout({ sessionId: data.session_id });
  } else {
    throw new Error('Invalid payment response');
  }
}

export function handleSuccessfulPayment(transactionId) {
  setPaymentStatus(true, transactionId);
  
  hidePaywall();
  
  showSuccessMessage();
  
  setTimeout(() => {
    location.reload();
  }, 2000);
}

function showSuccessMessage() {
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2ecc71;
    color: white;
    padding: 30px 50px;
    border-radius: 12px;
    font-size: 24px;
    font-weight: bold;
    z-index: 10001;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  `;
  message.textContent = '✅ Zahlung erfolgreich! Lade neu...';
  document.body.appendChild(message);
  
  setTimeout(() => message.remove(), 3000);
}

function showPaymentError(errorMessage) {
  const error = document.createElement('div');
  error.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #e74c3c;
    color: white;
    padding: 20px 30px;
    border-radius: 8px;
    font-size: 16px;
    z-index: 10001;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  `;
  error.textContent = `❌ Zahlung fehlgeschlagen: ${errorMessage}`;
  document.body.appendChild(error);
  
  setTimeout(() => error.remove(), 5000);
}

// ========================================
// PAYMENT STATUS CHECK (für Rückkehrer)
// ========================================

export function checkPaymentStatus() {
  const urlParams = new URLSearchParams(window.location.search);
  
  if (urlParams.get('payment') === 'success') {
    const sessionId = urlParams.get('session_id');
    if (sessionId) {
      handleSuccessfulPayment(sessionId);
    }
  }
  
  if (urlParams.get('payment') === 'cancelled') {
    showPaymentCancelledMessage();
  }
}

function showPaymentCancelledMessage() {
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #f39c12;
    color: white;
    padding: 20px 30px;
    border-radius: 8px;
    font-size: 16px;
    z-index: 10001;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  `;
  message.textContent = 'ℹ️ Zahlung abgebrochen. Du kannst jederzeit erneut kaufen.';
  document.body.appendChild(message);
  
  setTimeout(() => message.remove(), 5000);
}

// ========================================
// DEV CONTROLS UI (optional)
// ========================================

export function renderDevControls() {
  if (!DEV_MODE) return;
  
  const controls = document.createElement('div');
  controls.id = 'dev-controls';
  controls.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: #00ff00;
    color: #000;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    cursor: pointer;
    user-select: none;
  `;
  
  const status = getDevModeStatus();
  controls.innerHTML = `
    🔧 DEV MODE<br>
    <small style="font-weight: normal;">${status.reason}</small>
  `;
  
  controls.addEventListener('click', () => {
    if (confirm('DEV MODE deaktivieren?')) {
      toggleDevMode();
    }
  });
  
  document.body.appendChild(controls);
}

// ========================================
// INIT
// ========================================

export function initPaywall() {
  checkPaymentStatus();
  
  if (DEV_MODE) {
    renderDevControls();
  }
}

// Auto-init wenn Seite lädt
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initPaywall);
}

// ========================================
// EXPORT
// ========================================

export default {
  DEV_MODE,
  checkAccess,
  requireAccess,
  unlockFeatures,
  showPaywall,
  hidePaywall,
  initiatePayment,
  handleSuccessfulPayment,
  toggleDevMode,
  isDevModeActive,
  getDevModeStatus,
  initPaywall
};