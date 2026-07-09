// Ved ENT Hospital - Interactive Javascript Logics

// DATASET: Surgeries & Treatments
const surgeriesData = [
  // Ear Surgeries
  { title: "Tympanoplasty", category: "ear", desc: "Surgical reconstruction of the eardrum (tympanic membrane) and hearing bones to restore hearing and treat chronic infections.", tag: "Ear Operation" },
  { title: "Mastoidectomy", category: "ear", desc: "Removal of diseased mastoid air cells in the hollow space behind the ear, often performed for cholesteatoma or chronic mastoiditis.", tag: "Ear Operation" },
  { title: "Myringotomy", category: "ear", desc: "A minor surgical procedure to relieve pressure or drain fluid from the middle ear by making a tiny incision in the eardrum.", tag: "Ear Operation" },
  { title: "Osteoma Removal", category: "ear", desc: "Excision of benign bony growths within the external auditory canal that can cause hearing loss or water trapping.", tag: "Ear Operation" },
  { title: "Polyp Removal (Ear)", category: "ear", desc: "Microscopic excision of inflammatory polyps originating from the middle ear canal or external auditory canal.", tag: "Ear Operation" },
  { title: "Hearing Loss Treatment", category: "ear", desc: "Diagnostic assessments followed by custom therapeutic corrections or surgical repairs for conductive hearing loss.", tag: "Hearing Care" },
  { title: "Vertigo Rehabilitation", category: "clinical", desc: "Specialized vestibular profiling and physical therapies to treat inner-ear induced imbalance and dizziness.", tag: "Specialist Care" },
  { title: "Hearing Aid & Speech Therapy", category: "clinical", desc: "Fitting modern digital hearing aids and speech rehabilitation sessions tailored for age-groups and clinical needs.", tag: "Therapy" },

  // Nose Surgeries
  { title: "Septoplasty", category: "nose", desc: "Corrective surgical procedure to straighten a deviated nasal septum, improving airflow, sleep quality, and nasal breathing.", tag: "Nose Operation" },
  { title: "FESS (Functional Endoscopic Sinus Surgery)", category: "nose", desc: "Minimally invasive procedure using endoscopes to clear blocked sinus passages and treat chronic sinusitis.", tag: "Nose Operation" },
  { title: "Cauterization for Nasal Bleeding", category: "nose", desc: "Locating and sealing ruptured blood vessels inside the nasal passages using chemical agent or electrocautery.", tag: "Nose Operation" },
  { title: "Polyp Removal (Nose)", category: "nose", desc: "Endoscopic resection of benign teardrop-shaped growths in the lining of nasal passages or sinus cavities.", tag: "Nose Operation" },
  { title: "Nasal Tumour Removal", category: "nose", desc: "Advanced endoscopic surgical excision of benign or malignant localized nasal cavity masses.", tag: "Nose Operation" },
  { title: "Adenoid Removal (Coblator)", category: "nose", desc: "State-of-the-art coblation technology for bloodless, quick extraction of enlarged pediatric adenoid tissues.", tag: "Nose Operation" },
  { title: "Sinusitis Management", category: "clinical", desc: "Comprehensive clinical medical therapies and endo-nasal wash protocols for sinus congestion and headache relief.", tag: "Nose Therapy" },
  { title: "Pediatric Otolaryngology", category: "clinical", desc: "Custom diagnostics and pediatric-friendly ENT management for tonsils, ears, and breathing difficulties.", tag: "Pediatric ENT" },

  // Throat & Oral Cavity
  { title: "Tonsillectomy", category: "throat-oral", desc: "Surgical removal of the tonsils, performed to resolve chronic tonsillitis or obstructive sleep apnea.", tag: "Throat Operation" },
  { title: "Oral Cancer Surgery", category: "throat-oral", desc: "Resection of oral lesions, cysts, or early-stage cancers with reconstruction protocols to restore speech and swallowing.", tag: "Cancer Surgery" },
  { title: "Oral Tumour & Cyst Removal", category: "throat-oral", desc: "Excision of benign or developmental cysts, salivary gland lesions, and localized benign growths in the mouth.", tag: "Oral Operation" },
  { title: "Incision & Drainage of Abscess", category: "throat-oral", desc: "Urgent clinical drainage of deep neck space or peritonsillar abscesses to relieve airway blockage.", tag: "Throat Operation" },
  { title: "Pharynx Biopsy", category: "throat-oral", desc: "Sampling suspicious tissues from the back of the throat or pharynx for microscopic pathological investigation.", tag: "Diagnostics" },
  { title: "Oral Submucous Fibrosis (OSMF)", category: "clinical", desc: "Therapeutic management, injection protocols, and jaw exercises for patients with restricted mouth opening.", tag: "Oral Therapy" },

  // Larynx & Neck Surgeries
  { title: "Thyroid Surgery (Thyroidectomy)", category: "larynx-neck", desc: "Partial or total excision of the thyroid gland to treat nodules, goiter, hyperthyroidism, or thyroid cancer.", tag: "Neck Operation" },
  { title: "Submandibular Gland Surgery", category: "larynx-neck", desc: "Surgical removal of the submandibular salivary gland due to chronic stones (sialolithiasis) or tumors.", tag: "Neck Operation" },
  { title: "Parotid Surgery (Parotidectomy)", category: "larynx-neck", desc: "Superficial or total excision of the parotid salivary gland, preserving the crucial facial nerve pathways.", tag: "Neck Operation" },
  { title: "Microlaryngeal Surgery (MLS)", category: "larynx-neck", desc: "Microscopic surgical procedure on vocal cords using endoscopes to treat cysts, nodules, or biopsy polyps.", tag: "Larynx Operation" },
  { title: "Laryngeal Cancer Surgery", category: "larynx-neck", desc: "Surgical interventions (partial or total laryngectomy) for voice box cancer to preserve vital airway mechanisms.", tag: "Cancer Surgery" },
  { title: "Lymph Node Biopsy & Removal", category: "larynx-neck", desc: "Removal of swollen cervical lymph nodes for diagnosis of infectious diseases, tuberculosis, or metastatic spread.", tag: "Neck Operation" },
  { title: "Neck Abscess Drainage", category: "larynx-neck", desc: "Emergency surgical decompression and drainage of deep neck space infections to prevent life-threatening sepsis.", tag: "Neck Operation" }
];

// DATASET: General ENT Checkup Info
const checkupData = {
  ear: {
    title: "Ear Evaluation",
    subtitle: "Assessment for general otological complications",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>`,
    symptoms: ["Pain (Otalgia)", "Discharge (Otorrhea)", "Decreased hearing", "Giddiness / Vertigo", "Tinnitus / Ringing sensation", "Wax removal", "Fungus (Otomycosis)"],
    btnText: "Book Ear Checkup"
  },
  nose: {
    title: "Nose & Sinus Assessment",
    subtitle: "Rhinological screening for respiratory & structural issues",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path></svg>`,
    symptoms: ["Allergy / Runny Nose", "Chronic Cough and Cold", "Nasal blockage / Congestion", "Children Nasal Allergy", "Adenoids inflammation", "Nasal bleeding (Epistaxis)", "Nasal Polyps", "Deviated Septum (DNS)"],
    btnText: "Book Nose Checkup"
  },
  throat: {
    title: "Throat & Pharynx Diagnostics",
    subtitle: "Clinical checkup for sore throat, swallowing, and tonsils",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
    symptoms: ["Tonsils inflammation / Tonsillitis", "Chronic throat pain", "Throat ulcers / White patches", "Pharyngeal / Throat Cancer screening"],
    btnText: "Book Throat Checkup"
  },
  "oral-cavity": {
    title: "Oral Cavity Screening",
    subtitle: "Comprehensive checkup for buccal mucosa and oral health",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    symptoms: ["Mouth Ulcers", "Oral Submucous Fibrosis (OSMF)", "Leukoplakia (Pre-cancerous spots)", "Oral Cancer screenings", "Oral Cysts", "Benign Oral Tumour"],
    btnText: "Book Oral Checkup"
  },
  larynx: {
    title: "Larynx & Voice Box Evaluation",
    subtitle: "Endoscopic visualization of vocal cords",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>`,
    symptoms: ["Change of voice / Hoarseness", "Vocal cord pain", "Laryngeal Cancer assessments"],
    btnText: "Book Voice Assessment"
  },
  neck: {
    title: "Neck swelling & Swallowing assessment",
    subtitle: "Glandular and thyroid diagnostics",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>`,
    symptoms: ["Thyroid enlargement", "Submandibular gland pain", "Parotid swelling", "Cervical node Cancer screenings", "Other Neck swelling"],
    btnText: "Book Glandular Assessment"
  },
  specialty: {
    title: "Specialty ENT Services",
    subtitle: "Tailored treatments for aesthetic & sleep disorders",
    icon: `<svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
    symptoms: ["Snoring therapy", "Sleep Apnea diagnostics", "Rhinoplasty (Nose reshaping corrective surgery)"],
    btnText: "Book Specialty Consult"
  }
};

// Page Switcher Mechanism
function switchPage(pageId) {
  // Hide all sections
  document.querySelectorAll('.section-page').forEach(sec => {
    sec.classList.remove('active');
  });

  // Show selected section
  const targetSection = document.getElementById(pageId);
  if (targetSection) {
    targetSection.classList.add('active');
  }

  // Update nav link highlighting
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${pageId}`) {
      link.classList.add('active');
    }
  });

  // Close mobile navigation on switch
  const navMenu = document.getElementById('nav-menu');
  const menuBtn = document.getElementById('menu-btn');
  if (navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('active');
  }

  // Smooth scroll to top of section (minus header height)
  const headerOffset = 80;
  const elementPosition = targetSection ? targetSection.getBoundingClientRect().top : 0;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Initialize Surgeries Grid
  renderSurgeries(surgeriesData);

  // Set default appointment date to tomorrow
  const dateInput = document.getElementById('app-date');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Render Surgeries and Treatments Grid
function renderSurgeries(data) {
  const container = document.getElementById('surgeries-container');
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <p>No matching surgeries or treatments found. Please try a different query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = data.map(item => `
    <div class="surgery-card" data-category="${item.category}">
      <span class="surgery-category">${item.category.replace('-', ' & ')}</span>
      <h3 class="surgery-title">${item.title}</h3>
      <p class="surgery-desc">${item.desc}</p>
      <div class="surgery-footer">
        <span class="surgery-tag">${item.tag}</span>
        <a href="https://wa.me/919512615150?text=Hi%20Ved%20ENT%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(item.title)}%20treatment." target="_blank" class="feature-link">
          Inquire
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Populate Inquiry Selection
function populateInquiry(surgeryTitle) {
  const messageArea = document.getElementById('message');
  if (messageArea) {
    messageArea.value = `Hello, I would like to inquire about the cost, process, and scheduling details for: ${surgeryTitle}.`;
  }
  const selectDept = document.getElementById('department');
  if (selectDept) {
    selectDept.value = "surgeries";
  }
}

// Search and Filter Surgeries
let currentCategoryFilter = 'all';

function filterCategory(category, button) {
  // Update active tab styles
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');

  currentCategoryFilter = category;
  applyFilters();
}

function filterSurgeries() {
  applyFilters();
}

function applyFilters() {
  const searchQuery = document.getElementById('surgery-search').value.toLowerCase();
  
  const filtered = surgeriesData.filter(item => {
    const matchesCategory = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  renderSurgeries(filtered);
}

// Switch Checkup Categories (Ear, Nose, Throat etc.)
function showCheckupCategory(categoryId, menuItemElement) {
  // Update active side menu option
  document.querySelectorAll('.checkup-menu-item').forEach(item => item.classList.remove('active'));
  menuItemElement.classList.add('active');

  const display = document.getElementById('checkup-details');
  const details = checkupData[categoryId];

  if (!details || !display) return;

  // Render checkup layout details
  display.style.animation = 'none';
  // Trigger reflow
  display.offsetHeight; 
  display.style.animation = 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';

  display.innerHTML = `
    <div class="display-header">
      <div class="display-icon">
        ${details.icon}
      </div>
      <div>
        <h3 class="display-title">${details.title}</h3>
        <p style="color:var(--text-muted); font-size:14px;">${details.subtitle}</p>
      </div>
    </div>
    <h4 style="margin-bottom:16px; font-size:18px;">Common Symptoms & Conditions Addressed:</h4>
    <div class="display-symptoms-list">
      ${details.symptoms.map(symp => `
        <div class="symptom-card"><div class="symptom-bullet"></div>${symp}</div>
      `).join('')}
    </div>
    <div class="display-cta-card">
      <div class="display-cta-text">
        <h4>Need diagnostic support for ${details.title}?</h4>
        <p>Book a consultation block with Dr. Vishal Parmar today.</p>
      </div>
      <a href="https://wa.me/919512615150" target="_blank" class="btn btn-accent">${details.btnText}</a>
    </div>
  `;
}

// Lightbox Modal functions
function openLightbox(imgSrc, title, caption) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightbox && lightboxImg && lightboxCaption) {
    lightboxImg.src = imgSrc;
    lightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size: 14px; color: rgba(255,255,255,0.7);">${caption}</span>`;
    lightbox.classList.add('active');
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
  }
}

// Close lightbox on escape key or clicking backdrop
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

// Handle Booking Form Submission
function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('app-date').value;
  const dept = document.getElementById('department').value;
  const msg = document.getElementById('message').value;

  // Premium interactive feedback alert simulation
  alert(`Thank you, ${name}! Your appointment inquiry for ${dept.toUpperCase()} checkup on ${date} has been sent. We will call you back on ${phone} to confirm.`);
  
  // Clear the form
  event.target.reset();
}
