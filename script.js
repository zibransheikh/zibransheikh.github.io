// ------------------------------------------------------------
// Projects shown in "Selected Works".
// Edit this list to add, remove or reorder projects.
//   theme:  "dark" or "light" card
//   motif:  the little illustration on the card
//           (doc | chat | rank | tasks | formula | chart | grid)
//   link:   GitHub repo or live demo
// ------------------------------------------------------------
const PROJECTS = [
  {
    name: "Scholarly",
    headline: "Research with integrity",
    category: "AI Research Copilot",
    type: "Built at Rizmak · LLM",
    theme: "dark",
    motif: "doc",
    highlight: "0.98 ROC-AUC in-house AI-text detector",
    summary:
      "Upload a paper (PDF or DOCX) and get consistency checks, writing suggestions, citation gaps, novelty notes, and similarity against external literature. Includes an \"Ask My Paper\" chat and an in-house AI-text detector (DistilRoBERTa + TF-IDF fusion) served with ONNX Runtime in place of a paid API.",
    stack: ["React", "TypeScript", "Express", "Claude API", "DistilRoBERTa", "ONNX Runtime", "OpenAlex", "Supabase"],
    link: "https://scholar.click",
  },
  {
    name: "NurAI",
    headline: "Answers grounded in source",
    category: "Islamic Guidance System",
    type: "RAG · Full-Stack",
    theme: "light",
    motif: "chat",
    summary:
      "Ask questions about Islam and get short answers grounded only in the Quran, Sahih al-Bukhari, Sahih Muslim and Tafsir Ibn Kathir. Built a full pipeline: PDF cleaning, chunking, embedding into Qdrant, and retrieval-augmented answers from Llama 3.",
    stack: ["React", "Tailwind", "FastAPI", "Qdrant", "Sentence-Transformers", "Llama 3"],
    link: "https://github.com/zibransheikh",
  },
  {
    name: "FITRON",
    headline: "Rank, don't just predict",
    category: "Open-Source ML Library",
    type: "Python · PyPI",
    theme: "dark",
    motif: "rank",
    summary:
      "A Python library for ranking-first decision intelligence on tabular binary problems. Combines fuzzy feature transforms, calibrated classification and TOPSIS multi-criteria ranking with adaptive, drift-aware weights — and explains each ranking at the feature level. Published on PyPI.",
    stack: ["Python", "NumPy", "scikit-learn", "Fuzzy Logic", "TOPSIS", "PyPI"],
    link: "https://pypi.org/project/fitron/",
  },
  {
    name: "KaamShaam",
    headline: "Your week, in one place",
    category: "Task-Management Platform",
    type: "Web · iOS · Android",
    theme: "light",
    motif: "tasks",
    summary:
      "A task-management platform with projects, calendar, inbox capture, progress tracking and weekly reviews. One Next.js + TypeScript codebase for the web and for iOS and Android through Capacitor, backed by Supabase with PostgreSQL row-level security and authentication.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "PostgreSQL RLS", "Capacitor"],
    link: "https://kaamshaam.vercel.app",
  },
  {
    name: "NLP Tutor",
    headline: "A textbook that answers back",
    category: "Textbook-Grounded Tutor",
    type: "RAG · Hybrid Search",
    theme: "dark",
    motif: "formula",
    highlight: "0.93 Recall@5 over a 646-page textbook",
    summary:
      "A tutor over Jurafsky & Martin's Speech and Language Processing (646 pages). Hybrid retrieval (dense Qdrant + BM25, fused with RRF and re-ranked by a cross-encoder) gives cited answers down to chapter, section and page, with conversation memory and KaTeX math in the chat UI.",
    stack: ["FastAPI", "Qdrant", "BM25", "Cross-Encoder", "Gemini", "React", "KaTeX", "Docker"],
    link: "https://github.com/zibransheikh",
  },
  {
    name: "Distributor ERP",
    headline: "Every crate accounted for",
    category: "Beverage Distribution ERP",
    type: "Full-Stack · Postgres",
    theme: "light",
    motif: "chart",
    summary:
      "A distributor management system covering master data, warehouse inventory on an append-only stock ledger, and the full van-sales trip: load, sell, collect, count returns, and a reconciliation check before the day can close. JWT auth, action-based RBAC, audit logs, expenses approval and reports.",
    stack: ["React", "shadcn/ui", "Recharts", "Node.js", "PostgreSQL", "JWT", "Docker"],
    link: "https://github.com/zibransheikh",
  },
  {
    name: "Timetable AI",
    headline: "Schedules without clashes",
    category: "College Timetable System",
    type: "AI Tools · Constraints",
    theme: "dark",
    motif: "grid",
    highlight: "9 department timetables imported from PDF",
    summary:
      "Turns college timetable PDFs into structured data, then offers natural-language search, room and faculty availability, conflict detection and validated editing. A deterministic constraint engine is the source of truth; the LLM only calls controlled tools. Also ranks free substitutes when a teacher is absent.",
    stack: ["Next.js", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "pdfplumber", "LLM Tool Calling"],
    link: "https://github.com/zibransheikh/TIME-TABLE",
  },
];

// ---------- little illustrations for each card ----------
const MOTIFS = {
  doc: () => `
    <div class="m-doc">
      <i></i><i></i><i class="hl"></i><i></i><i class="short"></i>
      <span class="m-tag">94% original</span>
    </div>`,
  chat: () => `
    <div class="m-chat">
      <span class="q">What does the Quran say about patience?</span>
      <span class="a"><i></i><i></i><i class="short"></i><em>Al-Baqarah 2:153</em></span>
    </div>`,
  rank: () => `
    <div class="m-rank">
      ${[92, 78, 61, 44, 30].map((w, i) => `<div><b>${i + 1}</b><span style="width:${w}%"></span></div>`).join("")}
    </div>`,
  tasks: () => `
    <div class="m-tasks">
      <div class="done"><i></i><span></span></div>
      <div class="done"><i></i><span class="short"></span></div>
      <div><i></i><span></span></div>
      <div><i></i><span class="short"></span></div>
    </div>`,
  formula: () => `
    <div class="m-formula">
      <span>P(w<sub>n</sub> | w<sub>1:n−1</sub>)</span>
      <em>§ 3.1 · p. 34</em>
    </div>`,
  chart: () => `
    <div class="m-chart">
      ${[40, 65, 50, 85, 70, 95].map((h) => `<span style="height:${h}%"></span>`).join("")}
    </div>`,
  grid: () => `
    <div class="m-grid">
      ${Array.from({ length: 20 }, (_, i) => `<span class="${[2, 6, 9, 13, 17].includes(i) ? "on" : ""}${i === 11 ? " clash" : ""}"></span>`).join("")}
    </div>`,
};

// ---------- link helpers ----------
const isLive = (url) => !/github\.com|pypi\.org/.test(url);
const linkLabel = (url) =>
  url.includes("github.com") ? "View on GitHub" : url.includes("pypi.org") ? "View on PyPI" : "Visit live site";

// ---------- render cards ----------
const grid = document.getElementById("works-grid");

grid.innerHTML = PROJECTS.map(
  (p, i) => `
  <article class="work" data-index="${i}" tabindex="0" role="button" aria-label="Open ${p.name} details">
    <div class="work__screen work__screen--${p.theme}">
      <div class="work__nav"><b>${p.name}</b><span></span><span></span><span></span></div>
      <h3 class="work__headline">${p.headline}</h3>
      ${MOTIFS[p.motif]()}
    </div>
    <p class="work__name">${p.name}${isLive(p.link) ? ' <span class="live">Live</span>' : ""}</p>
    <p class="work__meta">${p.category}<br>${p.type}</p>
  </article>`
).join("") + `
  <a class="work work--more" href="https://github.com/zibransheikh" target="_blank" rel="noopener">
    <div class="work__screen"><span>More work<br>on GitHub</span><em>⟶</em></div>
    <p class="work__name">GitHub</p>
    <p class="work__meta">@zibransheikh<br>All repositories</p>
  </a>`;

// ---------- details popup ----------
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openProject(i) {
  const p = PROJECTS[i];
  modalBody.innerHTML = `
    <p class="eyebrow eyebrow--gold">${p.category}</p>
    <h3 class="modal__title">${p.name}</h3>
    ${p.highlight ? `<p class="modal__highlight">✦ ${p.highlight}</p>` : ""}
    <p class="modal__text">${p.summary}</p>
    <ul class="modal__stack">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
    <a class="modal__link" href="${p.link}" target="_blank" rel="noopener">${linkLabel(p.link)} <span>⟶</span></a>`;
  modal.showModal();
}

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".work");
  if (card) openProject(card.dataset.index);
});
grid.addEventListener("keydown", (e) => {
  const card = e.target.closest(".work");
  if (card && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    openProject(card.dataset.index);
  }
});
modal.querySelector(".modal__close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close(); // click outside the box
});

// ---------- skills ticker: repeat content so the loop is seamless ----------
const track = document.querySelector(".ticker__track");
if (track) track.innerHTML += track.innerHTML;

// ---------- fade sections in on scroll ----------
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
  { threshold: 0.12 }
);
document.querySelectorAll(".work, .services li, .process li, .quote, .stat, .entry").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});
