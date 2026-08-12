// DEFAULT / FALLBACK PLAN DATA (LCC 2023)
const DEFAULT_LCC_2023_PLAN = {
  "id": "lcc-2023",
  "title": "Plan Académico LCC",
  "degree": "Licenciatura en Ciencias de la Computación",
  "plan": "2023",
  "subtitle": "Licenciatura en Ciencias de la Computación • Plan 2023",
  "intermediateTitle": "Título Intermedio (Tecnicatura)",
  "totalYears": 5,
  "hasIntermediate": true,
  "subjects": [
    { "id": 1, "name": "Algoritmos y Resolución de Problemas", "year": 1, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [], "rendida": [] }, "correlativasRendir": [] },
    { "id": 2, "name": "Matemática Básica", "year": 1, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [], "rendida": [] }, "correlativasRendir": [] },
    { "id": 3, "name": "Estructura y Funcionamiento de Computadoras", "year": 1, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [], "rendida": [] }, "correlativasRendir": [] },
    { "id": 4, "name": "Programación Procedural", "year": 1, "cuatrimestre": 2, "starred": true, "correlativasCursar": { "cursada": [1, 3], "rendida": [] }, "correlativasRendir": [1, 3] },
    { "id": 5, "name": "Álgebra Lineal", "year": 1, "cuatrimestre": 2, "starred": true, "correlativasCursar": { "cursada": [2], "rendida": [] }, "correlativasRendir": [2] },
    { "id": 6, "name": "Sistemas Operativos", "year": 1, "cuatrimestre": 2, "starred": true, "correlativasCursar": { "cursada": [1, 3], "rendida": [] }, "correlativasRendir": [1, 3] },
    { "id": 7, "name": "Programación Orientada a Objetos", "year": 2, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [4], "rendida": [1] }, "correlativasRendir": [4] },
    { "id": 8, "name": "Teoría de la Computación", "year": 2, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [5], "rendida": [2] }, "correlativasRendir": [5] },
    { "id": 9, "name": "Análisis Matemático I", "year": 2, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [5], "rendida": [2] }, "correlativasRendir": [5] },
    { "id": 10, "name": "Ingeniería de Sistemas", "year": 2, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [4], "rendida": [1] }, "correlativasRendir": [4] },
    { "id": 11, "name": "Estructuras de Datos y Algoritmos", "year": 2, "cuatrimestre": 2, "starred": true, "correlativasCursar": { "cursada": [7, 8], "rendida": [4] }, "correlativasRendir": [7, 8] },
    { "id": 12, "name": "Programación Web", "year": 2, "cuatrimestre": 2, "starred": true, "correlativasCursar": { "cursada": [7], "rendida": [4] }, "correlativasRendir": [7] },
    { "id": 13, "name": "Análisis Matemático II", "year": 2, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [9], "rendida": [5] }, "correlativasRendir": [9] },
    { "id": 14, "name": "Ingles I", "year": 2, "cuatrimestre": 2, "starred": true, "correlativasCursar": { "cursada": [4], "rendida": [3] }, "correlativasRendir": [4] },
    { "id": 15, "name": "Paradigmas de Lenguajes", "year": 3, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [8, 11, 12], "rendida": [7] }, "correlativasRendir": [8, 11, 12] },
    { "id": 16, "name": "Base de Datos I", "year": 3, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [8, 11], "rendida": [5] }, "correlativasRendir": [8, 11] },
    { "id": 17, "name": "Ingles II", "year": 3, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [14], "rendida": [] }, "correlativasRendir": [14] },
    { "id": 18, "name": "Ingeniería de Software I", "year": 3, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [7], "rendida": [10] }, "correlativasRendir": [7] },
    { "id": 19, "name": "Redes", "year": 3, "cuatrimestre": 1, "starred": true, "correlativasCursar": { "cursada": [8, 14], "rendida": [6] }, "correlativasRendir": [8, 14] },
    { "id": 20, "name": "Aspectos Profesionales y Sociales", "year": 3, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [16], "rendida": [10] }, "correlativasRendir": [16] },
    { "id": 21, "name": "Legislación Profesional", "year": 3, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [16], "rendida": [10] }, "correlativasRendir": [16] },
    { "id": 22, "name": "Probabilidad y Estadística", "year": 3, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [13], "rendida": [9] }, "correlativasRendir": [13] },
    { "id": 23, "name": "Algoritmos Numéricos", "year": 3, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [13], "rendida": [9] }, "correlativasRendir": [13] },
    { "id": 24, "name": "Auditoría", "year": 4, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [18], "rendida": [10] }, "correlativasRendir": [18] },
    { "id": 25, "name": "Ingeniería de Software II", "year": 4, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [18], "rendida": [7, 10, 12] }, "correlativasRendir": [18] },
    { "id": 26, "name": "Computabilidad y Complejidad", "year": 4, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [23], "rendida": [8, 11] }, "correlativasRendir": [23] },
    { "id": 27, "name": "Teoría de la Información", "year": 4, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [22, 23], "rendida": [11] }, "correlativasRendir": [22, 23] },
    { "id": 28, "name": "Sistemas Distribuidos y Paralelismos", "year": 4, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [19], "rendida": [11, 13] }, "correlativasRendir": [19] },
    { "id": 29, "name": "Base de Datos II", "year": 4, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [23], "rendida": [16] }, "correlativasRendir": [23] },
    { "id": 30, "name": "Compiladores", "year": 4, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [26], "rendida": [15] }, "correlativasRendir": [26] },
    { "id": 31, "name": "Inteligencia Artificial", "year": 5, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [29], "rendida": [15, 23] }, "correlativasRendir": [29] },
    { "id": 32, "name": "Ingeniería de Software III", "year": 5, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [25], "rendida": [16, 17, 18] }, "correlativasRendir": [25] },
    { "id": 33, "name": "Computación Gráfica y Visualización", "year": 5, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [22, 27], "rendida": [12, 15] }, "correlativasRendir": [22, 27] },
    { "id": 34, "name": "Electiva I", "year": 5, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [], "rendida": [] }, "correlativasRendir": [] },
    { "id": 35, "name": "Epistemología y Metodología de la Investigación Científica", "year": 5, "cuatrimestre": 1, "starred": false, "correlativasCursar": { "cursada": [24], "rendida": [20, 21, 22] }, "correlativasRendir": [24] },
    { "id": 36, "name": "Lógica y Optimización Aplicada", "year": 5, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [26], "rendida": [15, 27] }, "correlativasRendir": [26] },
    { "id": 37, "name": "Proyectos de Innovación Tecnológica", "year": 5, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [29], "rendida": [20, 21] }, "correlativasRendir": [29] },
    { "id": 38, "name": "Electiva II", "year": 5, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [], "rendida": [] }, "correlativasRendir": [] },
    { "id": 39, "name": "Trabajo Fin de Carrera", "year": 5, "cuatrimestre": 2, "starred": false, "correlativasCursar": { "cursada": [], "rendida": ["INTERMEDIATE"] }, "correlativasRendir": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38] }
  ]
};

// STATE MANAGEMENT
let currentPlan = DEFAULT_LCC_2023_PLAN;
let SUBJECTS = DEFAULT_LCC_2023_PLAN.subjects;
let currentPlanId = 'lcc-2023';
let userProgress = {}; // Key: subjectId -> { status: 'regularized' | 'approved', grade: number | null }
let pseCompleted = false; // Práctica Socio-Educativa check
let currentTheme = 'dark';
let activeModalSubjectId = null;

// Search & Filter state
let searchTerm = "";
let currentFilter = "all";
let currentPeriod = "anual"; // "anual" | "1" | "2"
let showLines = true;
let showAllLinesAlways = false;

// DOM Elements
const mapContainer = document.getElementById('map-container');
const connectionsLayer = document.getElementById('connections-layer');
const inputSearch = document.getElementById('input-search');
const selectFilter = document.getElementById('select-filter');
const selectPlan = document.getElementById('select-plan');
const selectPeriod = document.getElementById('select-period');
const chkShowLines = document.getElementById('chk-show-lines');
const chkShowAllLines = document.getElementById('chk-show-all-lines');
const themeToggle = document.getElementById('theme-toggle');
const btnReset = document.getElementById('btn-reset');
const chkPse = document.getElementById('chk-pse');
const appTitle = document.getElementById('app-title');
const appSubtitle = document.getElementById('app-subtitle');

// Modals
const modalGrade = document.getElementById('modal-grade');
const formGrade = document.getElementById('form-grade');
const inputGrade = document.getElementById('input-grade');
const modalSubjectTitle = document.getElementById('modal-subject-title');
const modalSubjectNumber = document.getElementById('modal-subject-number');
const modalSubjectName = document.getElementById('modal-subject-name');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnModalCancel = document.getElementById('btn-modal-cancel');

const modalConfirmReset = document.getElementById('modal-confirm-reset');
const btnCloseConfirm = document.getElementById('btn-close-confirm');
const btnConfirmCancel = document.getElementById('btn-confirm-cancel');
const btnConfirmAccept = document.getElementById('btn-confirm-accept');

// INIT APPLICATION
async function init() {
  loadGeneralPreferences();
  await loadAvailablePlans();
  await switchPlan(currentPlanId, false);
  setupEventListeners();
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  setTimeout(drawConnectionPaths, 300);
}

// PLAN SWITCHING & FETCHING
async function loadAvailablePlans() {
  try {
    const res = await fetch('resources/plans/plans.json');
    if (res.ok) {
      const plansList = await res.json();
      if (Array.isArray(plansList) && plansList.length > 0) {
        selectPlan.innerHTML = plansList.map(p => 
          `<option value="${p.id}">${p.name} (${p.plan})</option>`
        ).join('');
      }
    }
  } catch (e) {
    console.warn("Could not fetch plans.json, using default options", e);
  }

  const savedPlanId = localStorage.getItem('lcc_selected_plan');
  if (savedPlanId) {
    currentPlanId = savedPlanId;
    selectPlan.value = currentPlanId;
  }
}

async function switchPlan(planId, notify = true) {
  currentPlanId = planId;
  let planData = null;

  try {
    const res = await fetch(`resources/plans/${planId}.json`);
    if (res.ok) {
      planData = await res.json();
    }
  } catch (e) {
    console.warn(`Could not load resources/plans/${planId}.json dynamically, falling back to default.`, e);
  }

  if (!planData) {
    if (planId === 'lcc-2023') {
      planData = DEFAULT_LCC_2023_PLAN;
    } else {
      showToast("No se pudo cargar el plan seleccionado.", "error");
      return;
    }
  }

  currentPlan = planData;
  SUBJECTS = planData.subjects || [];

  // Update Header Title & Subtitle
  if (appTitle && planData.title) appTitle.textContent = planData.title;
  if (appSubtitle && planData.subtitle) appSubtitle.textContent = planData.subtitle;

  loadPlanProgress(planId);
  renderSubjectContainers();
  updateWorkflowState();
  
  if (notify) {
    showToast(`Cargado plan: ${planData.degree} (${planData.plan})`, "info");
  }
}

// LOCAL STORAGE PERSISTENCE
function loadGeneralPreferences() {
  const savedTheme = localStorage.getItem('lcc_theme') || 'dark';
  currentTheme = savedTheme;
  document.body.className = currentTheme === 'dark' ? 'dark-mode' : 'light-mode';

  const savedShowLines = localStorage.getItem('lcc_pref_show_lines');
  if (savedShowLines !== null) {
    showLines = savedShowLines === 'true';
    chkShowLines.checked = showLines;
  }
  
  const savedShowAllLines = localStorage.getItem('lcc_pref_show_all_lines');
  if (savedShowAllLines !== null) {
    showAllLinesAlways = savedShowAllLines === 'true';
    chkShowAllLines.checked = showAllLinesAlways;
  }

  const savedPeriod = localStorage.getItem('lcc_pref_period');
  if (savedPeriod !== null) {
    currentPeriod = savedPeriod;
    selectPeriod.value = currentPeriod;
  }
}

function loadPlanProgress(planId) {
  const planKey = `plan_progress_${planId}`;
  let savedProgress = localStorage.getItem(planKey);

  // Migration from legacy key if LCC 2023
  if (!savedProgress && planId === 'lcc-2023') {
    const legacy = localStorage.getItem('lcc_career_progress');
    if (legacy) {
      savedProgress = legacy;
      localStorage.setItem(planKey, legacy);
    }
  }

  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
  } else {
    userProgress = {};
  }

  const savedPse = localStorage.getItem(`pse_completed_${planId}`) || localStorage.getItem('lcc_pse_completed');
  pseCompleted = savedPse === 'true';
  if (chkPse) chkPse.checked = pseCompleted;
}

function saveToLocalStorage() {
  localStorage.setItem(`plan_progress_${currentPlanId}`, JSON.stringify(userProgress));
  localStorage.setItem(`pse_completed_${currentPlanId}`, pseCompleted.toString());
  localStorage.setItem('lcc_selected_plan', currentPlanId);
  localStorage.setItem('lcc_pref_period', currentPeriod);
  localStorage.setItem('lcc_theme', currentTheme);
  localStorage.setItem('lcc_pref_show_lines', showLines.toString());
  localStorage.setItem('lcc_pref_show_all_lines', showAllLinesAlways.toString());
}

// DYNAMIC EVALUATION LOGIC
function isIntermediateApproved() {
  const starredSubjects = SUBJECTS.filter(s => s.starred);
  if (starredSubjects.length === 0) return true;
  const allStarredApproved = starredSubjects.every(s => userProgress[s.id] && userProgress[s.id].status === 'approved');
  return allStarredApproved && pseCompleted;
}

function calculateSubjectStatuses() {
  const statuses = {};

  SUBJECTS.forEach(subject => {
    if (userProgress[subject.id]) {
      statuses[subject.id] = userProgress[subject.id].status;
    } else {
      statuses[subject.id] = null;
    }
  });

  let changed = true;
  let iterations = 0;
  
  while (changed && iterations < SUBJECTS.length) {
    changed = false;
    iterations++;

    SUBJECTS.forEach(subject => {
      if (userProgress[subject.id]) return;

      const reqCursar = subject.correlativasCursar;
      let cursarMet = true;

      for (const reqId of reqCursar.cursada) {
        const reqState = statuses[reqId];
        if (reqState !== 'regularized' && reqState !== 'approved') {
          cursarMet = false;
          break;
        }
      }

      if (cursarMet) {
        for (const reqId of reqCursar.rendida) {
          if (reqId === "INTERMEDIATE") {
            if (!isIntermediateApproved()) {
              cursarMet = false;
              break;
            }
          } else {
            const reqState = statuses[reqId];
            if (reqState !== 'approved') {
              cursarMet = false;
              break;
            }
          }
        }
      }

      const calculatedState = cursarMet ? 'available' : 'locked';
      if (statuses[subject.id] !== calculatedState) {
        statuses[subject.id] = calculatedState;
        changed = true;
      }
    });
  }

  return statuses;
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
  const existingToasts = document.querySelectorAll('.toast-notification');
  existingToasts.forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.innerHTML = `
    <i data-lucide="info" class="toast-icon"></i>
    <span class="toast-message">${message}</span>
  `;
  document.body.appendChild(toast);
  
  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => toast.classList.add('active'), 10);
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// STATS & DASHBOARD RE-CALCULATION
function updateDashboardStats() {
  const totalSubjects = SUBJECTS.length;
  if (totalSubjects === 0) return;

  const approvedCount = Object.values(userProgress).filter(p => p.status === 'approved').length;
  const regularCount = Object.values(userProgress).filter(p => p.status === 'regularized').length;
  
  // Progress overall
  const overallPercent = Math.round((approvedCount / totalSubjects) * 100);
  document.getElementById('txt-progress-overall').textContent = `${overallPercent}%`;
  document.getElementById('bar-progress-overall').style.width = `${overallPercent}%`;
  document.getElementById('txt-progress-overall-count').textContent = `${approvedCount} de ${totalSubjects} materias aprobadas`;

  // Intermediate title progress
  const starredSubjects = SUBJECTS.filter(s => s.starred);
  if (starredSubjects.length > 0) {
    const approvedStarredCount = starredSubjects.filter(s => userProgress[s.id] && userProgress[s.id].status === 'approved').length;
    const totalIntermediateReqs = starredSubjects.length + 1;
    const intermediateScore = approvedStarredCount + (pseCompleted ? 1 : 0);
    const intermediatePercent = Math.round((intermediateScore / totalIntermediateReqs) * 100);
    
    document.getElementById('txt-progress-intermediate').textContent = `${intermediatePercent}%`;
    document.getElementById('bar-progress-intermediate').style.width = `${intermediatePercent}%`;
    
    let starredText = `${approvedStarredCount} de ${starredSubjects.length} materias`;
    starredText += pseCompleted ? " + PSE completada" : " (PSE pendiente)";
    document.getElementById('txt-progress-intermediate-count').textContent = starredText;
  } else {
    document.getElementById('txt-progress-intermediate').textContent = `-`;
    document.getElementById('bar-progress-intermediate').style.width = `0%`;
    document.getElementById('txt-progress-intermediate-count').textContent = `No aplica a este plan`;
  }

  // Numerical Counts
  document.getElementById('txt-count-approved').textContent = approvedCount;
  document.getElementById('txt-count-regularized').textContent = regularCount;

  // Academic Averages calculation
  const approvedGrades = Object.values(userProgress)
    .filter(p => p.status === 'approved' && p.grade !== null)
    .map(p => p.grade);
    
  const regularGrades = Object.values(userProgress)
    .filter(p => p.status === 'regularized' && p.grade !== null)
    .map(p => p.grade);

  const allGrades = [...approvedGrades, ...regularGrades];

  if (approvedGrades.length > 0) {
    const sumApproved = approvedGrades.reduce((a, b) => a + b, 0);
    const avgWithoutFailures = (sumApproved / approvedGrades.length).toFixed(2);
    document.getElementById('txt-average-with-failures').textContent = `Sin aplazos: ${avgWithoutFailures}`;
  } else {
    document.getElementById('txt-average-with-failures').textContent = `Sin aplazos: -`;
  }

  if (allGrades.length > 0) {
    const sumAll = allGrades.reduce((a, b) => a + b, 0);
    const avgWithFailures = (sumAll / allGrades.length).toFixed(2);
    document.getElementById('txt-average-grade').textContent = avgWithFailures;
  } else {
    document.getElementById('txt-average-grade').textContent = `-`;
  }
}

// SUBJECTS CARD UI RENDERING
function renderSubjectContainers() {
  for (let y = 1; y <= 5; y++) {
    const col = document.getElementById(`column-year-${y}`);
    if (col) col.innerHTML = "";
  }

  SUBJECTS.forEach(subject => {
    const column = document.getElementById(`column-year-${subject.year}`);
    if (!column) return;

    const card = document.createElement('div');
    card.className = `subject-card`;
    card.id = `subject-card-${subject.id}`;
    card.dataset.id = subject.id;
    
    const starHtml = subject.starred ? `<span class="star-badge" title="Materia del Título Intermedio (Tecnicatura)">*</span>` : '';
    const cuatrHtml = subject.cuatrimestre ? `<span class="cuatrimestre-badge">${subject.cuatrimestre}º C</span>` : '';

    card.innerHTML = `
      <button class="card-clear-btn" title="Restaurar estado">&times;</button>
      <div class="card-header">
        <span class="subject-num">${subject.id}</span>
        <div class="badge-row">
          ${cuatrHtml}
          ${starHtml}
          <span class="status-text-badge"></span>
        </div>
      </div>
      <div class="subject-title">${subject.name}</div>
      <div class="subject-meta">
        <span class="txt-grade-label"></span>
        <span class="txt-grade-val"></span>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('card-clear-btn')) {
        handleClearSubject(subject.id);
        return;
      }
      handleSubjectClick(subject.id);
    });

    card.addEventListener('mouseenter', () => handleSubjectHoverEnter(subject.id));
    card.addEventListener('mouseleave', () => handleSubjectHoverLeave());

    column.appendChild(card);
  });
}

function updateWorkflowState() {
  const calculatedStatuses = calculateSubjectStatuses();
  
  SUBJECTS.forEach(subject => {
    const card = document.getElementById(`subject-card-${subject.id}`);
    if (!card) return;

    card.classList.remove('state-locked', 'state-available', 'state-regular', 'state-approved');
    const status = calculatedStatuses[subject.id];
    
    if (status === 'approved') {
      card.classList.add('state-approved');
      card.querySelector('.status-text-badge').textContent = "Aprobada";
      const userState = userProgress[subject.id];
      if (userState && userState.grade !== null) {
        card.querySelector('.txt-grade-label').textContent = "Nota:";
        card.querySelector('.txt-grade-val').textContent = userState.grade;
      } else {
        card.querySelector('.txt-grade-label').textContent = "Aprobada";
        card.querySelector('.txt-grade-val').textContent = "";
      }
    } 
    else if (status === 'regularized') {
      card.classList.add('state-regular');
      card.querySelector('.status-text-badge').textContent = "Regular";
      const userState = userProgress[subject.id];
      if (userState && userState.grade !== null) {
        card.querySelector('.txt-grade-label').textContent = "Nota Cursada:";
        card.querySelector('.txt-grade-val').textContent = userState.grade;
      } else {
        card.querySelector('.txt-grade-label').textContent = "Regularizada";
        card.querySelector('.txt-grade-val').textContent = "";
      }
    } 
    else if (status === 'available') {
      card.classList.add('state-available');
      card.querySelector('.status-text-badge').textContent = "";
      card.querySelector('.txt-grade-label').textContent = "";
      card.querySelector('.txt-grade-val').textContent = "";
    } 
    else {
      card.classList.add('state-locked');
      card.querySelector('.status-text-badge').textContent = "";
      card.querySelector('.txt-grade-label').textContent = "";
      card.querySelector('.txt-grade-val').textContent = "";
    }

    applyFiltersAndSearch(card, subject, status);
  });

  updateDashboardStats();
  saveToLocalStorage();
  drawConnectionPaths();
}

// SEARCH, PERIOD & FILTER APPLICATION
function applyFiltersAndSearch(card, subject, calculatedStatus) {
  let matchesSearch = true;
  let matchesFilter = true;

  // Search filter
  if (searchTerm.trim() !== "") {
    const term = searchTerm.toLowerCase().trim();
    const idStr = subject.id.toString();
    const nameStr = subject.name.toLowerCase();
    matchesSearch = idStr.includes(term) || nameStr.includes(term);
  }

  // Category filter
  if (currentFilter !== "all") {
    if (currentFilter === "cursables" && calculatedStatus !== "available") {
      matchesFilter = false;
    } else if (currentFilter === "regularizadas" && calculatedStatus !== "regularized") {
      matchesFilter = false;
    } else if (currentFilter === "aprobadas" && calculatedStatus !== "approved") {
      matchesFilter = false;
    } else if (currentFilter === "bloqueadas" && calculatedStatus !== "locked") {
      matchesFilter = false;
    } else if (currentFilter === "intermediate" && !subject.starred) {
      matchesFilter = false;
    }
  }

  if (matchesSearch && matchesFilter) {
    card.classList.remove('filter-dimmed');
  } else {
    card.classList.add('filter-dimmed');
  }

  // Period filter (Anual, 1er Cuatrimestre, 2do Cuatrimestre)
  if (currentPeriod !== "anual") {
    const periodNum = parseInt(currentPeriod);
    if (subject.cuatrimestre && subject.cuatrimestre !== periodNum && subject.cuatrimestre !== 0) {
      card.classList.add('period-dimmed');
    } else {
      card.classList.remove('period-dimmed');
    }
  } else {
    card.classList.remove('period-dimmed');
  }
}

// EVENTS ROUTING AND BINDING
function setupEventListeners() {
  // Plan Selector
  selectPlan.addEventListener('change', (e) => {
    switchPlan(e.target.value);
  });

  // Period Selector
  selectPeriod.addEventListener('change', (e) => {
    currentPeriod = e.target.value;
    updateWorkflowState();
    saveToLocalStorage();
  });

  // Search Input
  inputSearch.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    updateWorkflowState();
  });

  // Filter Dropdown
  selectFilter.addEventListener('change', (e) => {
    currentFilter = e.target.value;
    updateWorkflowState();
  });

  // Checkboxes
  chkShowLines.addEventListener('change', (e) => {
    showLines = e.target.checked;
    drawConnectionPaths();
    saveToLocalStorage();
  });

  chkShowAllLines.addEventListener('change', (e) => {
    showAllLinesAlways = e.target.checked;
    drawConnectionPaths();
    saveToLocalStorage();
  });

  // Theme Toggle
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.className = currentTheme === 'dark' ? 'dark-mode' : 'light-mode';
    saveToLocalStorage();
    drawConnectionPaths();
  });

  // Reset Button
  btnReset.addEventListener('click', () => {
    modalConfirmReset.classList.add('active');
  });

  // PSE Checkbox
  if (chkPse) {
    chkPse.addEventListener('change', (e) => {
      pseCompleted = e.target.checked;
      updateWorkflowState();
    });
  }

  // Form Submit (Grade modal)
  formGrade.addEventListener('submit', handleModalSubmit);

  // Close modals
  btnCloseModal.addEventListener('click', closeModal);
  btnModalCancel.addEventListener('click', closeModal);
  modalGrade.addEventListener('click', (e) => {
    if (e.target === modalGrade) closeModal();
  });

  btnCloseConfirm.addEventListener('click', () => modalConfirmReset.classList.remove('active'));
  btnConfirmCancel.addEventListener('click', () => modalConfirmReset.classList.remove('active'));
  modalConfirmReset.addEventListener('click', (e) => {
    if (e.target === modalConfirmReset) modalConfirmReset.classList.remove('active');
  });

  // Confirm Reset career
  btnConfirmAccept.addEventListener('click', () => {
    userProgress = {};
    pseCompleted = false;
    if (chkPse) chkPse.checked = false;
    modalConfirmReset.classList.remove('active');
    updateWorkflowState();
    showToast("Se ha reiniciado el progreso de la carrera correctamente.", "info");
  });

  // Window resize listener for SVG
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawConnectionPaths, 150);
  });
}

// SUBJECT INTERACTION HANDLERS
function handleSubjectClick(subjectId) {
  const card = document.getElementById(`subject-card-${subjectId}`);
  if (!card) return;

  const subject = SUBJECTS.find(s => s.id === subjectId);
  const status = calculateSubjectStatuses()[subjectId];

  if (status === 'locked') {
    const missing = [];
    subject.correlativasCursar.cursada.forEach(reqId => {
      const state = userProgress[reqId] ? userProgress[reqId].status : null;
      if (state !== 'regularized' && state !== 'approved') {
        const reqSubject = SUBJECTS.find(s => s.id === reqId);
        missing.push(`[${reqId}] ${reqSubject ? reqSubject.name : reqId} (Cursada)`);
      }
    });

    subject.correlativasCursar.rendida.forEach(reqId => {
      if (reqId === "INTERMEDIATE") {
        if (!isIntermediateApproved()) {
          missing.push(`Título Intermedio (Tecnicatura aprobado y PSE)`);
        }
      } else {
        const state = userProgress[reqId] ? userProgress[reqId].status : null;
        if (state !== 'approved') {
          const reqSubject = SUBJECTS.find(s => s.id === reqId);
          missing.push(`[${reqId}] ${reqSubject ? reqSubject.name : reqId} (Aprobada)`);
        }
      }
    });

    showToast(`No cumples con los requisitos para cursar: ${subject.name}. Pendientes: ${missing.join(', ')}`, "error");
    return;
  }

  if (status === 'regularized') {
    const missingRendir = [];
    subject.correlativasRendir.forEach(reqId => {
      const state = userProgress[reqId] ? userProgress[reqId].status : null;
      if (state !== 'approved') {
        const reqSubject = SUBJECTS.find(s => s.id === reqId);
        missingRendir.push(`[${reqId}] ${reqSubject ? reqSubject.name : reqId}`);
      }
    });

    if (missingRendir.length > 0) {
      showToast(`No cumples con los requisitos para RENDIR el examen de ${subject.name}. Requiere aprobadas: ${missingRendir.join(', ')}`, "error");
      return;
    }
  }

  activeModalSubjectId = subjectId;
  modalSubjectTitle.textContent = status === 'regularized' ? "Rendir Final" : "Cargar Nota de Cursada";
  modalSubjectNumber.textContent = subject.id;
  modalSubjectName.textContent = subject.name;
  
  const existingGrade = userProgress[subjectId] ? userProgress[subjectId].grade : null;
  inputGrade.value = existingGrade !== null ? existingGrade : "";
  
  modalGrade.classList.add('active');
  inputGrade.focus();
}

function handleClearSubject(subjectId) {
  if (userProgress[subjectId]) {
    const subject = SUBJECTS.find(s => s.id === subjectId);
    delete userProgress[subjectId];
    updateWorkflowState();
    showToast(`Se eliminó el progreso de: ${subject.name}`, "info");
  }
}

function closeModal() {
  modalGrade.classList.remove('active');
  activeModalSubjectId = null;
  inputGrade.value = "";
}

function handleModalSubmit(e) {
  if (e) e.preventDefault();
  if (activeModalSubjectId === null) return;

  const val = inputGrade.value.trim();
  const subjectId = activeModalSubjectId;
  const subject = SUBJECTS.find(s => s.id === subjectId);

  if (val === "" || isNaN(val)) {
    userProgress[subjectId] = {
      status: 'regularized',
      grade: null
    };
    showToast(`Materia regularizada: ${subject.name}`, "info");
  } else {
    const grade = parseFloat(val);
    if (grade < 1 || grade > 10) {
      showToast("La nota debe estar entre 1 y 10.", "error");
      return;
    }

    if (grade >= 4) {
      userProgress[subjectId] = {
        status: 'approved',
        grade: grade
      };
      showToast(`¡Materia aprobada con ${grade}!: ${subject.name}`, "success");
    } else {
      userProgress[subjectId] = {
        status: 'regularized',
        grade: grade
      };
      showToast(`Materia regularizada con nota cursada ${grade}: ${subject.name}`, "info");
    }
  }

  closeModal();
  updateWorkflowState();
}

// HOVER GRAPH VISUAL HIGHLIGHTS
function handleSubjectHoverEnter(hoveredId) {
  if (!showLines) return;

  const hoveredSubject = SUBJECTS.find(s => s.id === hoveredId);
  if (!hoveredSubject) return;

  const prerequisites = new Set();
  const dependants = new Set();

  function collectPrereqs(id) {
    const sub = SUBJECTS.find(s => s.id === id);
    if (!sub) return;

    const reqs = [
      ...sub.correlativasCursar.cursada,
      ...sub.correlativasCursar.rendida.filter(rid => rid !== "INTERMEDIATE"),
      ...sub.correlativasRendir
    ];

    reqs.forEach(reqId => {
      if (!prerequisites.has(reqId)) {
        prerequisites.add(reqId);
        collectPrereqs(reqId);
      }
    });
  }

  function collectDependants(id) {
    SUBJECTS.forEach(sub => {
      const isDep = 
        sub.correlativasCursar.cursada.includes(id) || 
        sub.correlativasCursar.rendida.includes(id) ||
        sub.correlativasRendir.includes(id);

      if (isDep && !dependants.has(sub.id)) {
        dependants.add(sub.id);
        collectDependants(sub.id);
      }
    });
  }

  collectPrereqs(hoveredId);
  collectDependants(hoveredId);

  SUBJECTS.forEach(subject => {
    const card = document.getElementById(`subject-card-${subject.id}`);
    if (!card) return;

    if (subject.id === hoveredId) {
      card.classList.add('highlight-hover');
    } else if (prerequisites.has(subject.id)) {
      card.classList.add('highlight-dependency');
    } else if (dependants.has(subject.id)) {
      card.classList.add('highlight-dependant');
    } else {
      card.classList.add('filter-dimmed');
    }
  });

  highlightConnectionPaths(hoveredId, prerequisites, dependants);
}

function handleSubjectHoverLeave() {
  if (!showLines) return;

  SUBJECTS.forEach(subject => {
    const card = document.getElementById(`subject-card-${subject.id}`);
    if (card) {
      card.classList.remove('highlight-hover', 'highlight-dependency', 'highlight-dependant');
    }
  });

  updateWorkflowState();
}

// SVG LINE DRAWING ENGINE
function drawConnectionPaths() {
  connectionsLayer.innerHTML = `
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="context-stroke" />
      </marker>
    </defs>
  `;

  if (!showLines) return;

  connectionsLayer.setAttribute('width', mapContainer.scrollWidth);
  connectionsLayer.setAttribute('height', mapContainer.scrollHeight);

  const connections = [];

  SUBJECTS.forEach(subject => {
    const reqs = [
      ...new Set([
        ...subject.correlativasCursar.cursada,
        ...subject.correlativasCursar.rendida.filter(id => id !== "INTERMEDIATE")
      ])
    ];

    reqs.forEach(reqId => {
      connections.push({ from: reqId, to: subject.id, type: 'cursar' });
    });
  });

  const containerRect = mapContainer.getBoundingClientRect();

  connections.forEach(conn => {
    const elFrom = document.getElementById(`subject-card-${conn.from}`);
    const elTo = document.getElementById(`subject-card-${conn.to}`);
    
    if (!elFrom || !elTo || elFrom.classList.contains('filter-dimmed') || elTo.classList.contains('filter-dimmed')) {
      return;
    }

    const rectFrom = elFrom.getBoundingClientRect();
    const rectTo = elTo.getBoundingClientRect();

    const x1 = rectFrom.right - containerRect.left;
    const y1 = rectFrom.top + (rectFrom.height / 2) - containerRect.top;
    
    const x2 = rectTo.left - containerRect.left;
    const y2 = rectTo.top + (rectTo.height / 2) - containerRect.top;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const dx = (x2 - x1) * 0.4;
    
    path.setAttribute('d', `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`);
    path.setAttribute('class', 'connection-path');
    path.setAttribute('marker-end', 'url(#arrow)');
    path.dataset.from = conn.from;
    path.dataset.to = conn.to;

    if (!showAllLinesAlways) {
      path.style.opacity = '0.04';
    } else {
      path.style.opacity = '0.22';
    }

    connectionsLayer.appendChild(path);
  });
}

function highlightConnectionPaths(hoveredId, prerequisites, dependants) {
  const paths = connectionsLayer.querySelectorAll('.connection-path');
  
  paths.forEach(path => {
    const fromId = parseInt(path.dataset.from);
    const toId = parseInt(path.dataset.to);

    if (toId === hoveredId && prerequisites.has(fromId)) {
      path.classList.add('connection-path', 'path-dependency');
      path.style.opacity = '0.85';
    } else if (fromId === hoveredId && dependants.has(toId)) {
      path.classList.add('connection-path', 'path-dependant');
      path.style.opacity = '0.85';
    } else {
      path.style.opacity = '0.01';
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', drawConnectionPaths);
