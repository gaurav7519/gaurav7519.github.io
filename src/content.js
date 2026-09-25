// Single source of truth for the site's text content.
// Used by the React app (App.jsx) and the build-time prerender
// (scripts/prerender.mjs) that bakes a plain-HTML copy + llms.txt
// so any crawler or LLM can read the whole page without running JS.

export const SITE = {
  name: "Gaurav Mali",
  role: "AI Software Developer",
  url: "https://gaurav7519.github.io/",
  location: "India",
  tagline: "I build AI systems.",
  summary:
    "Computer Science engineer focused on LLM applications and agentic AI workflows.",
  email: "gauravmali345@gmail.com",
  github: "https://github.com/gaurav7519",
  linkedin: "https://www.linkedin.com/in/gauravmali75/",
  resume: "resume.pdf",
};

// A tiny interaction: the button stays put; each press advances a small,
// deadpan "agent loop" through the text that follows it.
export const PRESSME = {
  label: "Press me",
  labelAfter: "Again",
  // Accent cycles through these on each press — no colour repeats
  // until the whole list has been used. Punchy, high-saturation hues,
  // picked to catch the eye when they change. Index 0 is the site default.
  accents: [
    "#ff1a1a",
    "#0057ff",
    "#00b34d",
    "#8000ff",
    "#ff0090",
    "#ff6a00",
    "#00b8d9",
    "#e6a700",
  ],
  // Paired faint, near-white page tints [--bg, --bg-soft] for each accent.
  tints: [
    ["#fff5f5", "#ffe8e8"],
    ["#f2f6ff", "#e3ecff"],
    ["#f0fdf6", "#dcfce9"],
    ["#f8f2ff", "#efe0ff"],
    ["#fff0f8", "#ffe0f0"],
    ["#fff6ee", "#ffe9d6"],
    ["#eefcff", "#d6f6ff"],
    ["#fffaf0", "#fff2d6"],
  ],
  lines: [
    "You don't really know what a tool does until you press the button.",
    "Analysing your request. Mostly nodding.",
    "Reading documentation nobody wrote.",
    "Executing step 3 of 47. Please don't ask about steps 1 and 2.",
    "That failed. Trying the identical approach with more confidence.",
    "Task complete. Deliverable attached in spirit.",
    "Awaiting further instructions. Or a nap.",
  ],
};

export const PROJECTS = [
  {
    title: "AI Customer Support Bot",
    stack: "Agentic AI · LangChain · Qdrant · OpenAI",
    points: [
      "Detects brand, sentiment, and intent from incoming messages",
      "Retrieval-augmented answers over a vector knowledge base",
      "Generates structured, human-like responses automatically",
    ],
  },
  {
    title: "Social Media Data Automation",
    stack: "Python · Selenium · Data Pipelines",
    points: [
      "Scrapes and structures data across major social platforms",
      "Reusable processing pipeline for analytics and reporting",
      "Turns raw activity into insight-ready datasets",
    ],
  },
];

export const SKILLS = [
  "Python",
  "LangChain",
  "RAG",
  "Agentic AI",
  "LLM APIs",
  "FastAPI",
];

export const CONTACT_INTRO =
  "Open to opportunities and collaborations in AI and data. The fastest way to reach me:";
