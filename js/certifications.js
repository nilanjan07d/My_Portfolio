/* ════════════════════════════════════════════════════════════
   CERTIFICATIONS DATA
   ──────────────────────────────────────────────────────────
   Each certificate:
     • title      — certificate name
     • issuer     — issuing organisation
     • date       — when issued/earned
     • emoji      — icon shown on the card
     • previewImg — path to certificate image for preview
                    e.g. "assets/certificates/aws-cloud.jpg"
                    Set to "" if you don't have an image yet.

   Visitors can PREVIEW the certificate image but NOT download it.
   To add a new cert: copy an object and paste before the closing ]
════════════════════════════════════════════════════════════ */

const CERTIFICATIONS = [
  {
    id: "xpro",
    title: "XPMC / XPro Program",
    issuer: "Employability.life × Federation University Australia",
    date: "2026",
    emoji: "🎓",
    previewImg: "assets/certificates/xpro.jpeg"
  },
  {
    id: "gdg-challenge",
    title: "GDG Solution Challenge",
    issuer: "Google Developer Groups",
    date: "2024",
    emoji: "🌐",
    previewImg: "assets/certificates/gdg.jpeg"
  },
  
  /* ── Add more certifications below ───────────────────────
  ,{
    id: "my-cert",
    title: "My New Certificate",
    issuer: "Issuing Organisation",
    date: "2025",
    emoji: "📜",
    previewImg: "assets/certificates/my-cert.jpeg"
  }
  ──────────────────────────────────────────────────────── */
];

/* ── RENDER CARDS ────────────────────────────────────────── */
function renderCertifications() {
  const grid = document.getElementById("certsGrid");
  if (!grid) return;

  grid.innerHTML = CERTIFICATIONS.map(c => `
    <div class="cert-card" onclick="openCertModal('${c.id}')">
      <div class="cert-badge">${c.emoji}</div>
      <div>
        <h3>${c.title}</h3>
        <span class="cert-issuer">${c.issuer}</span>
      </div>
      <div class="cert-date">${c.date}</div>
      <button class="cert-preview-btn">
        <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        Preview Certificate
      </button>
    </div>
  `).join("");
}

/* ── MODAL ───────────────────────────────────────────────── */
function openCertModal(id) {
  const c = CERTIFICATIONS.find(x => x.id === id);
  if (!c) return;

  document.getElementById("certModalTitle").textContent = c.title;

  const area = document.getElementById("certPreviewArea");
  if (c.previewImg) {
    area.innerHTML = `<img src="${c.previewImg}" alt="${c.title} certificate" />`;
  } else {
    area.innerHTML = `<p class="cert-no-preview">Certificate image not yet added.<br/>Place it at: <code>assets/certificates/${id}.jpg</code> and update the <code>previewImg</code> field in <code>js/certifications.js</code>.</p>`;
  }

  document.getElementById("certModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  document.getElementById("certModal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  renderCertifications();

  document.getElementById("certModalClose").addEventListener("click", closeCertModal);
  document.getElementById("certModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeCertModal();
  });
});
