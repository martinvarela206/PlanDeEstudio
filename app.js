// SUBJECTS DATASET
const SUBJECTS = [
  // Year 1 (Primero)
  {
    id: 1,
    name: "Algoritmos y Resolución de Problemas",
    year: 1,
    starred: true,
    correlativasCursar: { cursada: [], rendida: [] },
    correlativasRendir: []
  },
  {
    id: 2,
    name: "Matemática Básica",
    year: 1,
    starred: true,
    correlativasCursar: { cursada: [], rendida: [] },
    correlativasRendir: []
  },
  {
    id: 3,
    name: "Estructura y Funcionamiento de Computadoras",
    year: 1,
    starred: true,
    correlativasCursar: { cursada: [], rendida: [] },
    correlativasRendir: []
  },
  {
    id: 4,
    name: "Programación Procedural",
    year: 1,
    starred: true,
    correlativasCursar: { cursada: [1, 3], rendida: [] },
    correlativasRendir: [1, 3]
  },
  {
    id: 5,
    name: "Álgebra Lineal",
    year: 1,
    starred: true,
    correlativasCursar: { cursada: [2], rendida: [] },
    correlativasRendir: [2]
  },
  {
    id: 6,
    name: "Sistemas Operativos",
    year: 1,
    starred: true,
    correlativasCursar: { cursada: [1, 3], rendida: [] },
    correlativasRendir: [1, 3]
  },
  // Year 2 (Segundo)
  {
    id: 7,
    name: "Programación Orientada a Objetos",
    year: 2,
    starred: true,
    correlativasCursar: { cursada: [4], rendida: [1] },
    correlativasRendir: [4]
  },
  {
    id: 8,
    name: "Teoría de la Computación",
    year: 2,
    starred: true,
    correlativasCursar: { cursada: [5], rendida: [2] },
    correlativasRendir: [5]
  },
  {
    id: 9,
    name: "Análisis Matemático I",
    year: 2,
    starred: false,
    correlativasCursar: { cursada: [5], rendida: [2] },
    correlativasRendir: [5]
  },
  {
    id: 10,
    name: "Ingeniería de Sistemas",
    year: 2,
    starred: true,
    correlativasCursar: { cursada: [4], rendida: [1] },
    correlativasRendir: [4]
  },
  {
    id: 11,
    name: "Estructuras de Datos y Algoritmos",
    year: 2,
    starred: true,
    correlativasCursar: { cursada: [7, 8], rendida: [4] },
    correlativasRendir: [7, 8]
  },
  {
    id: 12,
    name: "Programación Web",
    year: 2,
    starred: true,
    correlativasCursar: { cursada: [7], rendida: [4] },
    correlativasRendir: [7]
  },
  {
    id: 13,
    name: "Análisis Matemático II",
    year: 2,
    starred: false,
    correlativasCursar: { cursada: [9], rendida: [5] },
    correlativasRendir: [9]
  },
  {
    id: 14,
    name: "Ingles I",
    year: 2,
    starred: true,
    correlativasCursar: { cursada: [4], rendida: [3] },
    correlativasRendir: [4]
  },
  // Year 3 (Tercero)
  {
    id: 15,
    name: "Paradigmas de Lenguajes",
    year: 3,
    starred: true,
    correlativasCursar: { cursada: [8, 11, 12], rendida: [7] },
    correlativasRendir: [8, 11, 12]
  },
  {
    id: 16,
    name: "Base de Datos I",
    year: 3,
    starred: true,
    correlativasCursar: { cursada: [8, 11], rendida: [5] },
    correlativasRendir: [8, 11]
  },
  {
    id: 17,
    name: "Ingles II",
    year: 3,
    starred: true,
    correlativasCursar: { cursada: [14], rendida: [] },
    correlativasRendir: [14]
  },
  {
    id: 18,
    name: "Ingeniería de Software I",
    year: 3,
    starred: false,
    correlativasCursar: { cursada: [7], rendida: [10] },
    correlativasRendir: [7]
  },
  {
    id: 19,
    name: "Redes",
    year: 3,
    starred: true,
    correlativasCursar: { cursada: [8, 14], rendida: [6] },
    correlativasRendir: [8, 14]
  },
  {
    id: 20,
    name: "Aspectos Profesionales y Sociales",
    year: 3,
    starred: false,
    correlativasCursar: { cursada: [16], rendida: [10] },
    correlativasRendir: [16]
  },
  {
    id: 21,
    name: "Legislación Profesional",
    year: 3,
    starred: false,
    correlativasCursar: { cursada: [16], rendida: [10] },
    correlativasRendir: [16]
  },
  {
    id: 22,
    name: "Probabilidad y Estadística",
    year: 3,
    starred: false,
    correlativasCursar: { cursada: [13], rendida: [9] },
    correlativasRendir: [13]
  },
  {
    id: 23,
    name: "Algoritmos Numéricos",
    year: 3,
    starred: false,
    correlativasCursar: { cursada: [13], rendida: [9] },
    correlativasRendir: [13]
  },
  // Year 4 (Cuarto)
  {
    id: 24,
    name: "Auditoría",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [18], rendida: [10] },
    correlativasRendir: [18]
  },
  {
    id: 25,
    name: "Ingeniería de Software II",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [18], rendida: [7, 10, 12] },
    correlativasRendir: [18]
  },
  {
    id: 26,
    name: "Computabilidad y Complejidad",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [23], rendida: [8, 11] },
    correlativasRendir: [23]
  },
  {
    id: 27,
    name: "Teoría de la Información",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [22, 23], rendida: [11] },
    correlativasRendir: [22, 23]
  },
  {
    id: 28,
    name: "Sistemas Distribuidos y Paralelismos",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [19], rendida: [11, 13] },
    correlativasRendir: [19]
  },
  {
    id: 29,
    name: "Base de Datos II",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [23], rendida: [16] },
    correlativasRendir: [23]
  },
  {
    id: 30,
    name: "Compiladores",
    year: 4,
    starred: false,
    correlativasCursar: { cursada: [26], rendida: [15] },
    correlativasRendir: [26]
  },
  // Year 5 (Quinto)
  {
    id: 31,
    name: "Inteligencia Artificial",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [29], rendida: [15, 23] },
    correlativasRendir: [29]
  },
  {
    id: 32,
    name: "Ingeniería de Software III",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [25], rendida: [16, 17, 18] },
    correlativasRendir: [25]
  },
  {
    id: 33,
    name: "Computación Gráfica y Visualización",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [22, 27], rendida: [12, 15] },
    correlativasRendir: [22, 27]
  },
  {
    id: 34,
    name: "Electiva I",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [], rendida: [] },
    correlativasRendir: []
  },
  {
    id: 35,
    name: "Epistemología y Metodología de la Investigación Científica",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [24], rendida: [20, 21, 22] },
    correlativasRendir: [24]
  },
  {
    id: 36,
    name: "Lógica y Optimización Aplicada",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [26], rendida: [15, 27] },
    correlativasRendir: [26]
  },
  {
    id: 37,
    name: "Proyectos de Innovación Tecnológica",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [29], rendida: [20, 21] },
    correlativasRendir: [29]
  },
  {
    id: 38,
    name: "Electiva II",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [], rendida: [] },
    correlativasRendir: []
  },
  {
    id: 39,
    name: "Trabajo Fin de Carrera",
    year: 5,
    starred: false,
    correlativasCursar: { cursada: [], rendida: ["INTERMEDIATE"] },
    correlativasRendir: Array.from({ length: 38 }, (_, i) => i + 1)
  }
];

// STATE MANAGEMENT
let userProgress = {}; // Key: subjectId -> { status: 'regularized' | 'approved', grade: number | null }
let pseCompleted = false; // Práctica Socio-Educativa check
let currentTheme = 'dark';
let activeModalSubjectId = null;

// Search & Filter state
let searchTerm = "";
let currentFilter = "all";
let showLines = true;
let showAllLinesAlways = false;

// DOM Elements
const mapContainer = document.getElementById('map-container');
const connectionsLayer = document.getElementById('connections-layer');
const inputSearch = document.getElementById('input-search');
const selectFilter = document.getElementById('select-filter');
const chkShowLines = document.getElementById('chk-show-lines');
const chkShowAllLines = document.getElementById('chk-show-all-lines');
const themeToggle = document.getElementById('theme-toggle');
const btnReset = document.getElementById('btn-reset');
const chkPse = document.getElementById('chk-pse');

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
function init() {
  loadFromLocalStorage();
  setupEventListeners();
  renderSubjectContainers();
  updateWorkflowState();
  
  // Initialize Lucide icons inside dynamically created elements
  if (window.lucide) {
    window.lucide.createIcons();
  }
  
  // Initial draw of connection lines
  setTimeout(drawConnectionPaths, 300);
}

// LOCAL STORAGE PERSISTENCE
function loadFromLocalStorage() {
  const savedProgress = localStorage.getItem('lcc_career_progress');
  if (savedProgress) {
    userProgress = JSON.parse(savedProgress);
  } else {
    userProgress = {};
  }

  const savedPse = localStorage.getItem('lcc_pse_completed');
  pseCompleted = savedPse === 'true';
  chkPse.checked = pseCompleted;

  const savedTheme = localStorage.getItem('lcc_theme') || 'dark';
  currentTheme = savedTheme;
  document.body.className = currentTheme === 'dark' ? 'dark-mode' : 'light-mode';

  // Load preferences
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
}

function saveToLocalStorage() {
  localStorage.setItem('lcc_career_progress', JSON.stringify(userProgress));
  localStorage.setItem('lcc_pse_completed', pseCompleted.toString());
  localStorage.setItem('lcc_theme', currentTheme);
  localStorage.setItem('lcc_pref_show_lines', showLines.toString());
  localStorage.setItem('lcc_pref_show_all_lines', showAllLinesAlways.toString());
}

// DYNAMIC EVALUATION LOGIC
function isIntermediateApproved() {
  // Starred subjects must be approved
  const starredSubjects = SUBJECTS.filter(s => s.starred);
  const allStarredApproved = starredSubjects.every(s => userProgress[s.id] && userProgress[s.id].status === 'approved');
  return allStarredApproved && pseCompleted;
}

function calculateSubjectStatuses() {
  const statuses = {};

  // Initialize status lookup
  SUBJECTS.forEach(subject => {
    if (userProgress[subject.id]) {
      statuses[subject.id] = userProgress[subject.id].status; // 'regularized' or 'approved'
    } else {
      statuses[subject.id] = null;
    }
  });

  // Evaluate prerequisites iteratively until no changes occur
  let changed = true;
  let iterations = 0;
  
  while (changed && iterations < 39) {
    changed = false;
    iterations++;

    SUBJECTS.forEach(subject => {
      // If subject already has a locked user state (regularized/approved), it retains it.
      if (userProgress[subject.id]) {
        return;
      }

      // Check "Correlativas para Cursar" requirements
      const reqCursar = subject.correlativasCursar;
      let cursarMet = true;

      // Cursada requirements (must be regularized or approved)
      for (const reqId of reqCursar.cursada) {
        const reqState = statuses[reqId];
        if (reqState !== 'regularized' && reqState !== 'approved') {
          cursarMet = false;
          break;
        }
      }

      // Rendida requirements (must be approved / verde)
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

// INTERACTIVE TOAST NOTIFICATIONS (Premium Detail)
function showToast(message, type = 'info') {
  // Remove existing toasts first
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

  // Animate toast
  setTimeout(() => toast.classList.add('active'), 10);

  // Auto-remove
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// STATS & DASHBOARD RE-CALCULATION
function updateDashboardStats() {
  const approvedCount = Object.values(userProgress).filter(p => p.status === 'approved').length;
  const regularCount = Object.values(userProgress).filter(p => p.status === 'regularized').length;
  
  // Progress overall
  const overallPercent = Math.round((approvedCount / 39) * 100);
  document.getElementById('txt-progress-overall').textContent = `${overallPercent}%`;
  document.getElementById('bar-progress-overall').style.width = `${overallPercent}%`;
  document.getElementById('txt-progress-overall-count').textContent = `${approvedCount} de 39 materias aprobadas`;

  // Intermediate title progress
  const starredSubjects = SUBJECTS.filter(s => s.starred);
  const approvedStarredCount = starredSubjects.filter(s => userProgress[s.id] && userProgress[s.id].status === 'approved').length;
  
  // Total requirements for intermediate is 16 starred subjects + 1 PSE = 17 points
  const intermediateScore = approvedStarredCount + (pseCompleted ? 1 : 0);
  const intermediatePercent = Math.round((intermediateScore / 17) * 100);
  document.getElementById('txt-progress-intermediate').textContent = `${intermediatePercent}%`;
  document.getElementById('bar-progress-intermediate').style.width = `${intermediatePercent}%`;
  
  let starredText = `${approvedStarredCount} de 16 materias`;
  if (pseCompleted) {
    starredText += " + PSE completada";
  } else {
    starredText += " (PSE pendiente)";
  }
  document.getElementById('txt-progress-intermediate-count').textContent = starredText;

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
  // Clear columns
  for (let y = 1; y <= 5; y++) {
    document.getElementById(`column-year-${y}`).innerHTML = "";
  }

  SUBJECTS.forEach(subject => {
    const column = document.getElementById(`column-year-${subject.year}`);
    if (!column) return;

    const card = document.createElement('div');
    card.className = `subject-card`;
    card.id = `subject-card-${subject.id}`;
    card.dataset.id = subject.id;
    
    // Star indicator for intermediate degree
    const starHtml = subject.starred ? `<span class="star-badge" title="Materia del Título Intermedio (Tecnicatura)">*</span>` : '';
    
    card.innerHTML = `
      <button class="card-clear-btn" title="Restaurar estado">&times;</button>
      <div class="card-header">
        <span class="subject-num">${subject.id}</span>
        <div class="badge-row">
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

    // Click handler for card
    card.addEventListener('click', (e) => {
      // If clicking clear button (X), don't trigger the modal opening
      if (e.target.classList.contains('card-clear-btn')) {
        handleClearSubject(subject.id);
        return;
      }

      handleSubjectClick(subject.id);
    });

    // Hover interactions for connection highlights
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

    // Reset state classes
    card.classList.remove('state-locked', 'state-available', 'state-regular', 'state-approved');
    
    const status = calculatedStatuses[subject.id];
    
    // Apply styling state class
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

    // Apply Filter & Search Dimming
    applyFiltersAndSearch(card, subject, status);
  });

  updateDashboardStats();
  saveToLocalStorage();
  
  // Re-draw connection lines in case positions shifted slightly
  drawConnectionPaths();
}

// SEARCH & FILTER APPLICATION
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
}

// EVENTS ROUTING AND BINDING
function setupEventListeners() {
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
    // Redraw SVG paths to match color scheme immediately
    drawConnectionPaths();
  });

  // Reset Button
  btnReset.addEventListener('click', () => {
    modalConfirmReset.classList.add('active');
  });

  // PSE Checkbox
  chkPse.addEventListener('change', (e) => {
    pseCompleted = e.target.checked;
    updateWorkflowState();
  });

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
    chkPse.checked = false;
    modalConfirmReset.classList.remove('active');
    updateWorkflowState();
    showToast("Se ha reiniciado el progreso de la carrera correctamente.", "info");
  });

  // Redraw SVG lines on window resize
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

  // Locked subjects cannot be clicked
  if (status === 'locked') {
    // Collect missing Cursar requirements to explain to the user
    const missing = [];
    subject.correlativasCursar.cursada.forEach(reqId => {
      const state = userProgress[reqId] ? userProgress[reqId].status : null;
      if (state !== 'regularized' && state !== 'approved') {
        const reqSubject = SUBJECTS.find(s => s.id === reqId);
        missing.push(`[${reqId}] ${reqSubject.name} (Cursada)`);
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
          missing.push(`[${reqId}] ${reqSubject.name} (Aprobada)`);
        }
      }
    });

    showToast(`No cumples con los requisitos para cursar: ${subject.name}. Pendientes: ${missing.join(', ')}`, "error");
    return;
  }

  // If regularized, check if "Correlativas para Rendir" are met
  if (status === 'regularized') {
    const missingRendir = [];
    subject.correlativasRendir.forEach(reqId => {
      const state = userProgress[reqId] ? userProgress[reqId].status : null;
      if (state !== 'approved') {
        const reqSubject = SUBJECTS.find(s => s.id === reqId);
        missingRendir.push(`[${reqId}] ${reqSubject.name}`);
      }
    });

    if (missingRendir.length > 0) {
      showToast(`No cumples con los requisitos para RENDIR el examen de ${subject.name}. Requiere aprobadas: ${missingRendir.join(', ')}`, "error");
      return;
    }
  }

  // Open the grade input modal
  activeModalSubjectId = subjectId;
  modalSubjectTitle.textContent = status === 'regularized' ? "Rendir Final" : "Cargar Nota de Cursada";
  modalSubjectNumber.textContent = subject.id;
  modalSubjectName.textContent = subject.name;
  
  // Fill in existing grade if present
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

// MODAL CONTROLLERS
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

  // If grade is empty/invalid or < 4, it counts as regularized (Naranja Fuerte)
  if (val === "" || isNaN(val)) {
    // Empty grade means regularized (naranja fuerte)
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
      // Grade >= 4 means approved (verde)
      userProgress[subjectId] = {
        status: 'approved',
        grade: grade
      };
      showToast(`¡Materia aprobada con ${grade}!: ${subject.name}`, "success");
    } else {
      // Grade < 4 also means regularized in this workflow
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

  const calculatedStatuses = calculateSubjectStatuses();
  const hoveredSubject = SUBJECTS.find(s => s.id === hoveredId);
  
  // Find all recursive prerequisites and dependencies to highlight
  const prerequisites = new Set();
  const dependants = new Set();

  // Helper for incoming dependencies (Prerequisites)
  function collectPrereqs(id) {
    const sub = SUBJECTS.find(s => s.id === id);
    if (!sub) return;

    // Union of cursar (cursada & rendida) and rendir
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

  // Helper for outgoing dependencies (Dependants)
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

  // Dim cards that are not related
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

  // Re-draw connection lines but with active styling for matching paths
  highlightConnectionPaths(hoveredId, prerequisites, dependants);
}

function handleSubjectHoverLeave() {
  if (!showLines) return;

  // Clear card highlights
  SUBJECTS.forEach(subject => {
    const card = document.getElementById(`subject-card-${subject.id}`);
    if (card) {
      card.classList.remove('highlight-hover', 'highlight-dependency', 'highlight-dependant');
    }
  });

  // Reapply standard filter and search dimming
  updateWorkflowState();
}

// SVG LINE DRAWING ENGINE
function drawConnectionPaths() {
  // Clear existing paths in the SVG
  connectionsLayer.innerHTML = `
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="context-stroke" />
      </marker>
    </defs>
  `;

  if (!showLines) return;

  // Set SVG canvas width/height to match container scroll size
  connectionsLayer.setAttribute('width', mapContainer.scrollWidth);
  connectionsLayer.setAttribute('height', mapContainer.scrollHeight);

  // Gather pairs to connect: B -> A (B is prerequisite, A is target subject)
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

  // Draw each connection line
  const containerRect = mapContainer.getBoundingClientRect();

  connections.forEach(conn => {
    const elFrom = document.getElementById(`subject-card-${conn.from}`);
    const elTo = document.getElementById(`subject-card-${conn.to}`);
    
    // Skip if elements aren't rendered or filtered out
    if (!elFrom || !elTo || elFrom.classList.contains('filter-dimmed') || elTo.classList.contains('filter-dimmed')) {
      return;
    }

    const rectFrom = elFrom.getBoundingClientRect();
    const rectTo = elTo.getBoundingClientRect();

    // Coordinates relative to the parent mapContainer
    const x1 = rectFrom.right - containerRect.left;
    const y1 = rectFrom.top + (rectFrom.height / 2) - containerRect.top;
    
    const x2 = rectTo.left - containerRect.left;
    const y2 = rectTo.top + (rectTo.height / 2) - containerRect.top;

    // Draw standard smooth bezier curve
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const dx = (x2 - x1) * 0.4;
    
    path.setAttribute('d', `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`);
    path.setAttribute('class', 'connection-path');
    path.setAttribute('marker-end', 'url(#arrow)');
    path.dataset.from = conn.from;
    path.dataset.to = conn.to;

    // Apply color/opacity based on global preference
    if (!showAllLinesAlways) {
      // If we don't show all lines, we hide paths initially by making them transparent/thin
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
      // Path leading INTO hovered subject (its prerequisites)
      path.classList.add('connection-path', 'path-dependency');
      path.style.opacity = '0.85';
    } else if (fromId === hoveredId && dependants.has(toId)) {
      // Path leading OUT OF hovered subject (its dependants)
      path.classList.add('connection-path', 'path-dependant');
      path.style.opacity = '0.85';
    } else {
      // Unrelated line
      path.style.opacity = '0.01';
    }
  });
}

// Window load trigger
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', drawConnectionPaths);
