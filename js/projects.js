/* ════════════════════════════════════════════════════════════
   PROJECTS DATA
   ──────────────────────────────────────────────────────────
   To edit a project:
     • title        — project name shown on card & modal
     • tag          — category label (e.g. "Web App", "Mobile", "AI")
     • shortDesc    — 1–2 line teaser shown on card
     • fullDesc     — longer description shown inside the modal
     • tech         — array of tech-stack chips
     • liveLink     — URL of deployed/demo site (use "#" if none)
     • githubLink   — GitHub repo URL (use "#" if private/none)
     • coverColor   — CSS gradient used as cover when no image
     • coverImage   — path to cover image, e.g. "assets/images/memora.jpg"
                      Set to "" to use the gradient placeholder instead

   To ADD a new project: copy one object, paste it at the end of
   the array (before the closing ]), update the fields, save.
════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: "memora",
    title: "Memora",
    tag: "Mobile App",
    shortDesc: "AI-powered collaborative travel journal app — create journeys, capture memories, upload photos, and share with friends.",
    fullDesc: "Memora is a full-stack cross-platform mobile application built with React Native and Expo Go. It lets users create journeys, upload photos to Cloudinary, write memory entries, and collaborate with friends in shared journals. The app features a purple-primary design system, responsive layouts for phones and tablets, and a seamless auth flow backed by Node.js and MongoDB.",
    tech: ["React Native", "Expo Go", "Node.js", "MongoDB", "Cloudinary", "TypeScript"],
    liveLink: "https://expo.dev/accounts/nilanjan07/projects/Memora/builds/f4889fcd-6250-47fb-84cd-c9a553ce20b3",
    githubLink: "https://github.com/nilanjan07d/Memora.git",
    coverColor: "linear-gradient(135deg, #3d2e66 0%, #7c5cbf 100%)",
    coverImage: "assets/images/memora.png"
  },
  {
    id: "rakshapath",
    title: "RakshaPath",
    tag: "AI Chatbot · SIH 2025",
    shortDesc: "Travel safety assistance chatbot with AI integration, built for Smart India Hackathon 2025.",
    fullDesc: "RakshaPath is a travel safety chatbot developed for Smart India Hackathon 2025. Built with React.js and AI integration, it provides proactive safety alerts, route risk assessments, and emergency contacts based on the user's travel destination. The chatbot leverages natural language processing to answer safety queries in real time.",
    tech: ["React.js", "AI Integration", "Node.js", "REST API"],
    liveLink: "https://rakshapath.vercel.app/",                    
    githubLink: "https://github.com/nilanjan07d/Rakshapath.git",
    coverColor: "linear-gradient(135deg, #1a1200 0%, #b8860b 100%)",
    coverImage: "assets/images/rakshapath.png"
  },
  {
    id: "codesense",
    title: "Codesense",
    tag: "AI Tool",
    shortDesc: "AI-powered code review assistant that helps developers understand, analyze, and improve their codebases.",
    fullDesc: "Codesense is an AI-powered code review assistant designed to help developers quickly understand unfamiliar codebases, spot potential issues, and receive actionable improvement suggestions. It accepts code snippets or repository context and returns structured feedback powered by large language models.",
    tech: ["Python", "AI/LLM", "React.js", "Node.js"],
    liveLink: "https://codesense-five.vercel.app/",
    githubLink: "https://github.com/nilanjan07d/Codesense.git",
    coverColor: "linear-gradient(135deg, #001a2e 0%, #0066aa 100%)",
    coverImage: "assets/images/Codesense.png"
  },
  {
    id: "echo",
    title: "Echo",
    tag: "Musical Tool",
    shortDesc: "Echo is designed to provide a sleek and minimal listening experience with a clean, responsive UI.",
    fullDesc: "Echo is a modern music streaming web application built with React.js and Tailwind CSS, designed to deliver a seamless and immersive listening experience. Users can discover new music, browse curated playlists, search for their favorite songs and artists, and enjoy a clean, responsive interface across devices. The project focuses on intuitive UI/UX, smooth navigation, and an engaging music discovery experience while showcasing modern frontend development practices.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    liveLink: "https://echo-sooty-nine.vercel.app/",
    githubLink: "https://github.com/nilanjan07d/Echo.git",
    coverColor: "linear-gradient(135deg, #1a001a 0%, #660066 100%)",
    coverImage: "assets/images/echo.png"
  },
  {
    id: "ecoxchange",
    title: "EcoXchange",
    tag: "Web App · Hack 4 Bengal",
    shortDesc: "Full-stack e-commerce platform for sustainable waste management and recycling, built at Hack 4 Bengal.",
    fullDesc: "EcoXchange is a web-based e-commerce platform created during Hack 4 Bengal that promotes a circular economy by letting users list, buy, and sell waste materials for recycling. I built the full stack — React.js frontend, Node.js/Express backend, MongoDB database — and handled product inventory, user transaction flows, and a clean resource-listing UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    liveLink: "#",                             
    githubLink: "https://github.com/nilanjan07d/EcoXchange.git",
    coverColor: "linear-gradient(135deg, #0a2200 0%, #2d6a00 100%)",
    coverImage: "assets/images/ecoxchange.png"                             
  },
  {
    id: "pulselink",
    title: "PulseLink",
    tag: "Healthcare · MERN",
    shortDesc: "Real-time healthcare assistant platform with a live local health-center finder, built for GDG Solution Challenge.",
    fullDesc: "PulseLink is a real-time healthcare assistant web app developed during the GDG Solution Challenge. I led a 4-person team and architected a MERN-stack (React.js, Node.js, MongoDB) platform that surfaces nearby health centres and offers live appointment assistance. Key features include a real-time health-center map, user authentication, and a REST API backend.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    liveLink: "https://pulselink-ecd2.onrender.com/",                                 
    githubLink: "https://github.com/nilanjan07d/Pulselink.git",
    coverColor: "linear-gradient(135deg, #0d3b2e 0%, #1a7a5e 100%)",
    coverImage: "assets/images/pulselink.jpeg"                              
  },
  /* ── Add more projects below ─────────────────────────────
  ,{
    id: "my-new-project",
    title: "My New Project",
    tag: "Web App",
    shortDesc: "Short teaser line for the card.",
    fullDesc: "Longer description shown in the modal when the card is clicked.",
    tech: ["React.js", "Node.js"],
    liveLink: "https://myproject.com",
    githubLink: "https://github.com/nilanjan07d/my-new-project",
    coverColor: "linear-gradient(135deg, #001 0%, #336 100%)",
    coverImage: ""   // or "assets/images/my-new-project.jpg"
  }
  ──────────────────────────────────────────────────────── */
];

/* ── RENDER ──────────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card" onclick="openProjectModal('${p.id}')">
      ${p.coverImage
        ? `<img class="project-cover" src="${p.coverImage}" alt="${p.title} cover" loading="lazy" />`
        : `<div class="project-cover-placeholder" style="background:${p.coverColor}">${p.title.slice(0,2).toUpperCase()}</div>`
      }
      <div class="project-info">
        <span class="project-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.shortDesc}</p>
        <div class="project-footer">
          <div class="project-tech-chips">
            ${p.tech.slice(0, 3).map(t => `<span class="chip">${t}</span>`).join("")}
          </div>
          <div class="project-open-btn">
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ── MODAL ───────────────────────────────────────────────── */
function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById("modalTag").textContent   = p.tag;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent  = p.fullDesc;

  // Cover image or gradient placeholder
  const imgWrap = document.getElementById("modalImage").parentElement;
  if (p.coverImage) {
    document.getElementById("modalImage").src = p.coverImage;
    document.getElementById("modalImage").style.display = "block";
    const ph = imgWrap.querySelector(".modal-img-placeholder");
    if (ph) ph.remove();
  } else {
    document.getElementById("modalImage").style.display = "none";
    imgWrap.style.background = p.coverColor;
    let ph = imgWrap.querySelector(".modal-img-placeholder");
    if (!ph) {
      ph = document.createElement("div");
      ph.className = "modal-img-placeholder";
      imgWrap.appendChild(ph);
    }
    ph.textContent = p.title.slice(0, 2).toUpperCase();
  }

  // Tech chips
  document.getElementById("modalTech").innerHTML =
    p.tech.map(t => `<span class="chip">${t}</span>`).join("");

  // Links — hide button if link is "#"
  const liveBtn   = document.getElementById("modalLiveLink");
  const githubBtn = document.getElementById("modalGithubLink");

  liveBtn.href = p.liveLink;
  liveBtn.style.display = (p.liveLink && p.liveLink !== "#") ? "inline-flex" : "none";

  githubBtn.href = p.githubLink;
  githubBtn.style.display = (p.githubLink && p.githubLink !== "#") ? "inline-flex" : "none";

  document.getElementById("projectModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

// Close
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  document.getElementById("modalClose").addEventListener("click", closeProjectModal);
  document.getElementById("projectModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeProjectModal();
  });
});

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("open");
  document.body.style.overflow = "";
}
