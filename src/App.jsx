import { useEffect, useState } from "react";
import "./App.css";

const isMobile = () => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const MAIL = "gauravmali345@gmail.com";
const mailHref = () =>
  isMobile()
    ? `mailto:${MAIL}`
    : `https://mail.google.com/mail/?view=cm&to=${MAIL}`;

const PROJECTS = [
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

const SKILLS = [
  "Python",
  "LangChain",
  "RAG",
  "Agentic AI",
  "LLM APIs",
  "FastAPI",
  "Data Pipelines",
  "Selenium",
];

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = resumeOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [resumeOpen]);

  return (
    <div className="wrap">
      <header className="topbar">
        <a href="#top" className="brand">
          Gaurav Mali
        </a>
      </header>

      <main id="top" className="track">
        <section className="panel hero">
          <p className="eyebrow">AI &amp; Data Software Developer</p>
          <h1>I build AI systems that reason, act, and automate real work.</h1>
          <p className="lead">
            Computer Science engineer based in India, focused on LLM
            applications, agentic AI workflows, and data pipelines that turn
            raw data into decisions.
          </p>
          <div className="actions">
            <a className="btn" href="#projects">
              View projects
            </a>
            <button className="btn ghost" onClick={() => setResumeOpen(true)}>
              Resume
            </button>
          </div>
        </section>

        <section id="about" className="panel">
          <h2>About</h2>
          <p>
            I design and ship intelligent applications that combine large
            language models, retrieval, and automation. My work spans agentic
            AI systems, data scraping and processing pipelines, and dashboards
            that make information usable.
          </p>
          <p>
            I like problems where an autonomous agent can replace repetitive
            manual work — reading context, making a decision, and acting on it.
            I keep experimenting with new tools to stay current in the AI space.
          </p>
        </section>

        <section id="projects" className="panel">
          <h2>Projects</h2>
          <ul className="projects">
            {PROJECTS.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p className="stack">{p.stack}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="panel">
          <h2>Skills</h2>
          <ul className="skills">
            {SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="panel">
          <h2>Contact</h2>
          <p>
            Open to opportunities and collaborations in AI and data. The
            fastest way to reach me:
          </p>
          <ul className="links">
            <li>
              <a href={mailHref()} target="_blank" rel="noreferrer">
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gaurav7519"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gauravmali75/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <footer>
            <span>© {new Date().getFullYear()} Gaurav Mali</span>
            <img
              className="mark"
              src={`${import.meta.env.BASE_URL}decepticon.svg`}
              alt=""
              title="Til all are one."
              width="16"
              height="16"
            />
          </footer>
        </section>
      </main>

      {resumeOpen && (
        <div className="modal" onClick={() => setResumeOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <span>Resume</span>
              <div>
                <a
                  className="btn"
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download
                >
                  Download
                </a>
                <button
                  className="btn ghost"
                  onClick={() => setResumeOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <iframe src={`${import.meta.env.BASE_URL}resume.pdf`} title="Resume" />
          </div>
        </div>
      )}
    </div>
  );
}
