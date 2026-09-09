// Single source of truth for the site's text content.
// Used by the React app (App.jsx) and the build-time prerender
// (scripts/prerender.mjs) that bakes a plain-HTML copy + llms.txt
// so any crawler or LLM can read the whole page without running JS.

export const SITE = {
  name: "Gaurav Mali",
  role: "AI & Data Software Developer",
  url: "https://gaurav7519.github.io/",
  location: "India",
  tagline: "I build AI systems that reason, act, and automate real work.",
  summary:
    "Computer Science engineer based in India, focused on LLM applications, agentic AI workflows, and data pipelines that turn raw data into decisions.",
  email: "gauravmali345@gmail.com",
  github: "https://github.com/gaurav7519",
  linkedin: "https://www.linkedin.com/in/gauravmali75/",
  resume: "resume.pdf",
};

export const ABOUT = [
  "I design and ship intelligent applications that combine large language models, retrieval, and automation. My work spans agentic AI systems, data scraping and processing pipelines, and dashboards that make information usable.",
  "I like problems where an autonomous agent can replace repetitive manual work — reading context, making a decision, and acting on it. I keep experimenting with new tools to stay current in the AI space.",
];

// A tiny interaction: the button stays put; each press advances a small,
// deadpan "agent loop" through the text that follows it.
export const PRESSME = {
  label: "Press me",
  labelAfter: "Again",
  // Accent cycles through these on each press — no colour repeats
  // until the whole list has been used. Index 0 is the site default.
  accents: [
    "#ff4f00",
    "#2563eb",
    "#0d9488",
    "#7c3aed",
    "#db2777",
    "#b45309",
    "#0891b2",
    "#dc2626",
  ],
  // Paired faint, near-white page tints [--bg, --bg-soft] for each accent.
  tints: [
    ["#fffefb", "#f8f4f0"],
    ["#f7f9ff", "#eef2fd"],
    ["#f4faf8", "#e9f5f1"],
    ["#f9f7ff", "#f1ecfd"],
    ["#fff6fb", "#fbeaf3"],
    ["#fdf9f3", "#f6efe3"],
    ["#f3fafc", "#e7f4f8"],
    ["#fff7f6", "#fceae8"],
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
  "Data Pipelines",
  "Selenium",
];

export const CONTACT_INTRO =
  "Open to opportunities and collaborations in AI and data. The fastest way to reach me:";
