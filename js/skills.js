/* ════════════════════════════════════════════════════════════
   SKILLS DATA
   ──────────────────────────────────────────────────────────
   To add/remove a skill: edit the array inside each group.
   Each skill: { name: "React.js", icon: "fa-brands fa-react" }
   Uses Font Awesome 6 icons (free version)
════════════════════════════════════════════════════════════ */

const SKILLS = [
  {
    group: "Programming Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: "fa-brands fa-js" },
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "C++", icon: "fa-solid fa-code" }
    ]
  },

  {
    group: "Web & Mobile Development",
    items: [
      { name: "React.js", icon: "fa-brands fa-react" },
      { name: "React Native", icon: "fa-brands fa-react" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express.js", icon: "fa-solid fa-server" },
      { name: "Expo", icon: "fa-solid fa-cube" },
      { name: "REST APIs", icon: "fa-solid fa-link" }
    ]
  },

  {
    group: "Databases & Storage",
    items: [
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "Cloudinary", icon: "fa-solid fa-cloud" }
    ]
  },

  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS (Concepts)", icon: "fa-brands fa-aws" },
      { name: "Azure DevOps", icon: "fa-brands fa-microsoft" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Cloud Computing", icon: "fa-solid fa-cloud" }
    ]
  },

  {
    group: "AI / ML",
    items: [
      { name: "AI Integration", icon: "fa-solid fa-robot" },
      { name: "NLP", icon: "fa-solid fa-language" },
      { name: "LLM APIs", icon: "fa-solid fa-comment-dots" }
    ]
  },

  {
    group: "Core CS",
    items: [
      { name: "Data Structures & Algorithms", icon: "fa-solid fa-diagram-project" },
      { name: "System Design", icon: "fa-solid fa-sitemap" },
      { name: "Cybersecurity Fundamentals", icon: "fa-solid fa-shield-halved" }
    ]
  },

  {
    group: "Tools & Platforms",
    items: [
      { name: "Postman", icon: "fa-solid fa-paper-plane" },
      { name: "VS Code", icon: "fa-solid fa-code" },
      { name: "EAS Build", icon: "fa-solid fa-mobile-screen-button" },
      { name: "Render", icon: "fa-solid fa-server" },
      { name: "Vercel", icon: "fa-solid fa-triangle-exclamation" }
    ]
  }
];

/* ── RENDER ──────────────────────────────────────────────── */
function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  container.innerHTML = SKILLS.map(group => `
    <div class="skill-group">
      <h3>${group.group}</h3>
      <div class="skill-pills">
        ${group.items.map(s => `
          <div class="skill-pill">
            <i class="${s.icon}"></i>
            <span>${s.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSkills);