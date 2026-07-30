/* ════════════════════════════════════════════════════════════
   EXPERIENCE DATA
   ──────────────────────────────────────────────────────────
   Each entry:
     • role        — your title / role
     • org         — company / organisation / event name
     • date        — period or year
     • description — what you did (supports plain text)
     • tags        — tech or keywords shown as chips

   To add a new entry: copy an object and paste before the ]
   Items are displayed newest-first (top of timeline).
════════════════════════════════════════════════════════════ */

const EXPERIENCE = [
  {
    role: "Intern — DevOps & Cloud Computing",
    org: "Employability.life × Federation University Australia (XPMC/XPro Program)",
    date: "2026",
    description: "Completed an industry internship in collaboration with Federation University Australia, building and deploying projects using DevOps pipelines and cloud computing platforms (AWS/Azure). Gained practical experience in CI/CD, containerisation, and cloud infrastructure.",
    tags: ["DevOps", "Cloud Computing", "AWS", "Azure", "CI/CD"]
  },
  {
    role: "SIH 2025 Participant",
    org: "Smart India Hackathon — Ministry of Education, India",
    date: "2025",
    description: "Built RakshaPath, a travel safety AI chatbot, as part of a team competing in the national-level Smart India Hackathon 2025. Integrated real-time AI responses and proactive safety features using React.js.",
    tags: ["React.js", "AI Integration", "Hackathon", "Team Lead"]
  },
  {
    role: "Full-Stack Developer — Hack 4 Bengal",
    org: "Hack 4 Bengal Hackathon",
    date: "2025",
    description: "Designed and built EcoXchange, a circular-economy e-commerce platform for sustainable waste management. Handled end-to-end development: React.js frontend, Node.js/Express backend, MongoDB, and product/transaction flows.",
    tags: ["React.js", "Node.js", "MongoDB", "Hackathon"]
  },
  {
    role: "Team Lead — GDG Solution Challenge",
    org: "Google Developer Groups",
    date: "2025",
    description: "Led a 4-person development team to build PulseLink, a MERN-stack healthcare assistant platform with real-time local health-centre discovery and live appointment assistance.",
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Team Lead"]
  },
  {
    role: "B.Tech — Computer Science & Engineering",
    org: "Sister Nivedita University, Kolkata",
    date: "2023 – 2027",
    description: "Final-year undergraduate student specialising in full-stack web and mobile development, AI/ML integration, and scalable software engineering. Active in open-source contribution and technical blogging.",
    tags: ["CS Engineering", "Full-Stack", "AI/ML", "Open Source"]
  }
  /* ── Add more experience entries below ───────────────────
  ,{
    role: "Your New Role",
    org: "Company / Event Name",
    date: "2025",
    description: "What you did and what you achieved.",
    tags: ["Skill 1", "Skill 2"]
  }
  ──────────────────────────────────────────────────────── */
];

/* ── RENDER ──────────────────────────────────────────────── */
function renderExperience() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  timeline.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item">
      <div class="timeline-date">${e.date}</div>
      <div class="timeline-card">
        <h3>${e.role}</h3>
        <div class="timeline-org">${e.org}</div>
        <p>${e.description}</p>
        <div class="timeline-tags">
          ${e.tags.map(t => `<span class="chip">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderExperience);
