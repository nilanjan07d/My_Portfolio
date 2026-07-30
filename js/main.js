/* ════════════════════════════════════════════════════════════
   MAIN — navigation, sidebar toggle, keyboard
════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  /* ── SECTION NAVIGATION ────────────────────────────────── */
  const navItems = document.querySelectorAll(".nav-item");
  const pages    = document.querySelectorAll(".page");

  function showSection(id) {
    pages.forEach(p    => p.classList.remove("active"));
    navItems.forEach(n => n.classList.remove("active"));

    const targetPage = document.getElementById(id);
    if (targetPage) {
      targetPage.classList.add("active");
      // Scroll content area to top
      document.querySelector(".content").scrollTo({ top: 0, behavior: "smooth" });
    }

    const targetNav = document.querySelector(`.nav-item[data-section="${id}"]`);
    if (targetNav) targetNav.classList.add("active");

    // Close mobile sidebar after navigating
    document.getElementById("sidebar").classList.remove("open");
  }

  // Exposed globally so HTML onclick="navigate(...)" works
  window.navigate = showSection;

  navItems.forEach(btn => {
    btn.addEventListener("click", () => showSection(btn.dataset.section));
  });

  /* ── MOBILE SIDEBAR TOGGLE ─────────────────────────────── */
  const menuToggle = document.getElementById("menuToggle");
  const sidebar    = document.getElementById("sidebar");

  menuToggle?.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  // Close sidebar when clicking outside on mobile
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
  // CV file path — update this if you rename the file
  const CV_PATH = "assets/cv/Resume.pdf";

  window.openCVModal = function () {
    const iframe = document.getElementById("cvIframe");
    // Only set src on first open to avoid reload every time
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
