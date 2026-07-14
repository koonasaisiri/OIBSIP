# OIBSIP — Oasis Infobyte Internship Tasks

**Web Development & Design Internship** submissions by **Koona Sai Siri**.

This repository contains the tasks completed as part of the **Oasis Infobyte Student Internship Program (OIBSIP)**. Each task is a self-contained website built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

## Repository Structure

```
OIBSIP/
├── KOONA_SAI_SIRI_TASK_1/      # Task 1 — Personal Portfolio Website
│   ├── index.html              # Single-file portfolio (HTML + inline CSS)
│   └── Saisiri_Koona_Resume.docx
│
├── KOONA_SAI_SIRI_TASK_2/      # Task 2 — Tribute Page
│   ├── index.html              # Page structure and content
│   ├── style.css               # Styling and theming
│   ├── script.js               # Interactivity (vanilla JS)
│   └── images/                 # Portrait and gallery photos
│
└── README.md
```

## Task 1 — Personal Portfolio Website

A personal portfolio for Saisiri Koona, B.Tech (AI & ML) student, built as a **single HTML file** with all styling inline.

**Sections:** Hero, Career Objective, Technical Skills, Projects (CodSoft Python series), Education, Soft Skills & Languages, and a Contact footer.

**Highlights:**
- Blueprint/grid-paper dark theme with a monospace-accented design system built on CSS custom properties
- Sticky navigation header with smooth in-page scrolling
- Fully responsive layout using `clamp()`-based fluid spacing
- Accessible focus states (`:focus-visible`) and semantic HTML
- Resume included alongside the page (`Saisiri_Koona_Resume.docx`)

**Run it:** open `KOONA_SAI_SIRI_TASK_1/index.html` in any browser.

## Task 2 — Tribute Page: Dr. A.P.J. Abdul Kalam

A tribute website honoring **Dr. A.P.J. Abdul Kalam** — aerospace scientist, "Missile Man of India," and the 11th President of India.

**Sections:** Hero (with portrait and starfield), Introduction, Biography, Timeline, Achievements, Gallery, and a closing Quote.

**Highlights:**
- **Dark / light theme toggle** with the choice persisted in `localStorage`
- **Animated timeline "flight path"** — a vertical rail that fills as you scroll, with milestone nodes lighting up on entry (IntersectionObserver)
- Fade-in reveal animations on scroll
- Responsive navigation with a mobile hamburger menu and smooth scrolling
- Scroll-to-top button that appears after scrolling
- Typography via Google Fonts (Fraunces, Work Sans, JetBrains Mono) and Font Awesome icons

**Run it:** open `KOONA_SAI_SIRI_TASK_2/index.html` in any browser (internet connection needed for the Google Fonts / Font Awesome CDNs).

## Tech Stack

| | |
|---|---|
| **Languages** | HTML5, CSS3, JavaScript (ES5+, vanilla) |
| **Techniques** | CSS custom properties, flexbox/grid, IntersectionObserver, `localStorage`, responsive design |
| **Dependencies** | None to install — Task 2 loads fonts/icons from public CDNs |

## Author

**Koona Sai Siri**
B.Tech — Artificial Intelligence & Machine Learning
Web Development & Design Intern @ Oasis Infobyte
