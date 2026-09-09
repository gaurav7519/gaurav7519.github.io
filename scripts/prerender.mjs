// Runs after `vite build`. Bakes the full page content into dist/index.html
// as real HTML (so crawlers and LLMs that don't run JS get everything),
// adds JSON-LD structured data, and emits llms.txt / robots.txt / sitemap.xml.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  SITE,
  ABOUT,
  PRESSME,
  PROJECTS,
  SKILLS,
  CONTACT_INTRO,
} from "../src/content.js";

const aboutParas = [...ABOUT, PRESSME.lines[0]];

const dist = resolve(process.cwd(), "dist");
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/* ---------- baked HTML body ---------- */
const projectsHtml = PROJECTS.map(
  (p) => `      <li>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.stack)}</p>
        <ul>${p.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </li>`
).join("\n");

const bodyHtml = `<div id="root"><div class="wrap">
  <header><a href="#top"><strong>${esc(SITE.name)}</strong></a></header>
  <main id="top">
    <section>
      <p>${esc(SITE.role)}</p>
      <h1>${esc(SITE.tagline)}</h1>
      <p>${esc(SITE.summary)}</p>
    </section>
    <section id="about">
      <h2>About</h2>
${aboutParas.map((p) => `      <p>${esc(p)}</p>`).join("\n")}
    </section>
    <section id="projects">
      <h2>Projects</h2>
      <ul>
${projectsHtml}
      </ul>
    </section>
    <section id="skills">
      <h2>Skills</h2>
      <ul>${SKILLS.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>${esc(CONTACT_INTRO)}</p>
      <ul>
        <li><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></li>
        <li><a href="${esc(SITE.github)}">GitHub</a></li>
        <li><a href="${esc(SITE.linkedin)}">LinkedIn</a></li>
        <li><a href="${esc(SITE.resume)}">Resume (PDF)</a></li>
      </ul>
      <footer>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</footer>
    </section>
  </main>
</div></div>`;

/* ---------- JSON-LD ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  description: SITE.summary,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  address: { "@type": "PostalAddress", addressCountry: SITE.location },
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: SKILLS,
};
const ldTag = `<script type="application/ld+json">${JSON.stringify(
  jsonLd
)}</script>`;

/* ---------- patch dist/index.html ---------- */
const idxPath = resolve(dist, "index.html");
let html = readFileSync(idxPath, "utf8");
html = html
  .replace(
    "</head>",
    `    <link rel="canonical" href="${SITE.url}" />\n` +
      `    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />\n` +
      `    <link rel="alternate" type="text/plain" href="/llms.txt" title="Plain-text version" />\n` +
      `    ${ldTag}\n  </head>`
  )
  .replace('<div id="root"></div>', bodyHtml);
writeFileSync(idxPath, html);

/* ---------- llms.txt (plain markdown profile) ---------- */
const llms = `# ${SITE.name}

> ${SITE.role} — ${SITE.summary}

- Location: ${SITE.location}
- Website: ${SITE.url}
- Email: ${SITE.email}
- GitHub: ${SITE.github}
- LinkedIn: ${SITE.linkedin}
- Resume (PDF): ${SITE.url}${SITE.resume}

## About

${aboutParas.join("\n\n")}

## Projects

${PROJECTS.map(
  (p) => `### ${p.title}\n\nStack: ${p.stack}\n\n${p.points.map((x) => `- ${x}`).join("\n")}`
).join("\n\n")}

## Skills

${SKILLS.map((s) => `- ${s}`).join("\n")}

## Contact

${CONTACT_INTRO}
`;
writeFileSync(resolve(dist, "llms.txt"), llms);

/* ---------- robots.txt + sitemap.xml ---------- */
writeFileSync(
  resolve(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}sitemap.xml\n`
);
writeFileSync(
  resolve(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE.url}</loc><lastmod>${
    new Date().toISOString().split("T")[0]
  }</lastmod></url>\n</urlset>\n`
);

console.log("prerender: index.html baked, llms.txt / robots.txt / sitemap.xml written");
