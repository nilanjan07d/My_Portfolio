/* ════════════════════════════════════════════════════════════
   SKILLS DATA
   ──────────────────────────────────────────────────────────
   To add/remove a skill: edit the array inside each group.
   Each skill: { name: "React.js", emoji: "⚛️" }
════════════════════════════════════════════════════════════ */

const SKILLS = [
  {
    group: "Programming Languages",
    items: [
      { name: "JavaScript (ES6+)", emoji: "🟨" },
      { name: "TypeScript",        emoji: "🔷" },
      { name: "Python",            emoji: "🐍" },
      { name: "C++",               emoji: "⚙️" }
    ]
  },
  {
    group: "Web & Mobile Development",
    items: [
      { name: "React.js",      emoji: "⚛️" },
      { name: "React Native",  emoji: "📱" },
      { name: "Node.js",       emoji: "🟩" },
      { name: "Express.js",    emoji: "🚂" },
      { name: "Expo Go",       emoji: "📦" },
      { name: "REST APIs",     emoji: "🔗" }
    ]
  },
  {
    group: "Databases & Storage",
    items: [
      { name: "MongoDB",    emoji: "🍃" },
      { name: "MySQL",      emoji: "🐬" },
      { name: "Cloudinary", emoji: "☁️" }
    ]
  },
  {
    group: "Cloud & DevOps",
    items: [
      { name: "AWS (concepts)",   emoji: "☁️" },
      { name: "Azure (concepts)", emoji: "🔵" },
      { name: "Git",              emoji: "🌿" },
      { name: "GitHub",           emoji: "🐙" },
      { name: "Cloud Computing",  emoji: "🌐" }
    ]
  },
  {
    group: "Core CS",
    items: [
      { name: "Data Structures & Algorithms", emoji: "🧮" },
      { name: "System Design",                emoji: "🏗️" },
      { name: "Cybersecurity Fundamentals",   emoji: "🔒" }
    ]
  },
  {
    group: "AI / ML",
    items: [
      { name: "AI Integration",  emoji: "🤖" },
      { name: "ML Applications", emoji: "📊" },
      { name: "LLM APIs",        emoji: "💬" }
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
            <span class="skill-emoji">${s.emoji}</span>
            <span>${s.name}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSkills);
