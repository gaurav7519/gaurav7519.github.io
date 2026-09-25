import { useEffect, useState } from "react";
import "./App.css";
import {
  SITE,
  PRESSME,
  PROJECTS,
  SKILLS,
  CONTACT_INTRO,
} from "./content.js";

const isMobile = () => /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const mailHref = () =>
  isMobile()
    ? `mailto:${SITE.email}`
    : `https://mail.google.com/mail/?view=cm&to=${SITE.email}`;

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    document.body.style.overflow = resumeOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [resumeOpen]);

  useEffect(() => {
    const root = document.documentElement.style;
    const i = step % PRESSME.accents.length;
    const accent = PRESSME.accents[i];
    root.setProperty("--accent", accent);
    root.setProperty("--bg", PRESSME.tints[i][0]);
    root.setProperty("--bg-soft", PRESSME.tints[i][1]);
  }, [step]);

  useEffect(() => {
    const setFavicon = (accent) => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="33" font-family="Arial Black, Arial, Helvetica, sans-serif" font-size="60" font-weight="900" text-anchor="middle" dominant-baseline="central" fill="${accent}" stroke="#151515" stroke-width="4" paint-order="stroke" stroke-linejoin="round">G</text></svg>`;
      document.querySelectorAll("link[rel~='icon'], link[rel='apple-touch-icon']").forEach((link) => {
        link.setAttribute("href", `data:image/svg+xml,${encodeURIComponent(svg)}`);
      });
    };

    let i = 0;
    setFavicon(PRESSME.accents[i]);
    const id = setInterval(() => {
      i = (i + 1) % PRESSME.accents.length;
      setFavicon(PRESSME.accents[i]);
    }, 600);
    return () => clearInterval(id);
  }, []);

  const lineIdx = Math.min(step, PRESSME.lines.length - 1);

  return (
    <div className="wrap">
      <header className="topbar">
        <a href="#top" className="brand">
          {SITE.name}
        </a>
      </header>

      <main id="top" className="track">
        <section className="panel hero">
          <p className="eyebrow">{SITE.role}</p>
          <h1>{SITE.tagline}</h1>
          <p className="lead">{SITE.summary}</p>
          <div className="actions">
            <button className="btn" onClick={() => setResumeOpen(true)}>
              Resume
            </button>
          </div>
          <p className="press">
            <button
              className="inline-btn"
              onClick={() => setStep((s) => s + 1)}
            >
              {step === 0 ? PRESSME.label : PRESSME.labelAfter}
            </button>{" "}
            {PRESSME.lines[lineIdx]}
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
          <h2>Toolkit</h2>
          <ul className="skills">
            {SKILLS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="panel">
          <h2>Contact</h2>
          <p>{CONTACT_INTRO}</p>
          <ul className="links">
            <li>
              <a href={mailHref()} target="_blank" rel="noreferrer">
                Email
              </a>
            </li>
            <li>
              <a href={SITE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <footer>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
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
                  href={`${import.meta.env.BASE_URL}${SITE.resume}`}
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
            <iframe
              src={`${import.meta.env.BASE_URL}${SITE.resume}`}
              title="Resume"
            />
          </div>
        </div>
      )}
    </div>
  );
}
