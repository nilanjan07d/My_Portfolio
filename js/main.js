/* ════════════════════════════════════════════════════════════
   MAIN — navigation, sidebar toggle, keyboard, auto-scroll
════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ── SECTION NAVIGATION with smooth scroll ────────────── */
  const navItems = document.querySelectorAll(".nav-item");
  const pages    = document.querySelectorAll(".page");

  function showSection(id) {
    // Update active states
    navItems.forEach(n => n.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    const targetNav = document.querySelector(`.nav-item[data-section="${id}"]`);
    if (targetNav) targetNav.classList.add("active");

    const targetPage = document.getElementById(id);
    if (targetPage) {
      targetPage.classList.add("active");
      // Smooth scroll to the section
      targetPage.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }

    // Close mobile sidebar after navigating
    document.getElementById("sidebar").classList.remove("open");
  }

  // Exposed globally so HTML onclick="navigate(...)" works
  window.navigate = showSection;

  navItems.forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.section));
  });

  /* ── AUTO-SCROLL ON SCROLL ────────────────────────────── */
  // Update active nav item based on scroll position
  function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.page');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('data-section') || section.id;
      }
    });

    if (currentSection) {
      navItems.forEach(n => n.classList.remove('active'));
      const activeNav = document.querySelector(`.nav-item[data-section="${currentSection}"]`);
      if (activeNav) activeNav.classList.add('active');
    }
  }

  // Throttled scroll listener for better performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      updateActiveNavOnScroll();
      scrollTimeout = null;
    }, 100);
  });

  // Initial update
  setTimeout(updateActiveNavOnScroll, 100);

  /* ── MOBILE SIDEBAR TOGGLE ─────────────────────────────── */
  const menuToggle = document.getElementById("menuToggle");
  const sidebar    = document.getElementById("sidebar");

  menuToggle?.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  document.addEventListener("click", e => {
    if (
      window.innerWidth <= 900 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      e.target !== menuToggle &&
      !menuToggle?.contains(e.target)
    ) {
      sidebar.classList.remove("open");
    }
  });

  /* ── CV PREVIEW MODAL ─────────────────────────────────── */
  const CV_PATH = "assets/cv/Resume.pdf";

  window.openCVModal = function () {
    const iframe = document.getElementById("cvIframe");
    if (!iframe.src || iframe.src === window.location.href) {
      iframe.src = CV_PATH;
    }
    document.getElementById("cvModal").classList.add("open");
    document.body.style.overflow = "hidden";
  };

  document.getElementById("cvModalClose")?.addEventListener("click", () => {
    document.getElementById("cvModal").classList.remove("open");
    document.body.style.overflow = "";
  });

  document.getElementById("cvModal")?.addEventListener("click", e => {
    if (e.target === e.currentTarget) {
      document.getElementById("cvModal").classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  /* ── KEYBOARD ESC — close any open modal ──────────────── */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.open").forEach(m => {
        m.classList.remove("open");
        document.body.style.overflow = "";
      });
    }
  });

});