/* =========================================================================
   DR. A.P.J. ABDUL KALAM — TRIBUTE PAGE
   Vanilla JS: theme toggle, nav behaviour, scroll-to-top, fade-in reveals,
   and the timeline "flight path" progress fill.
   ========================================================================= */

(function () {
  "use strict";

  const root = document.documentElement;
  const THEME_KEY = "kalam-tribute-theme";

  /* ---------- Dark / light mode toggle ---------- */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      root.setAttribute("data-theme", "dark");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  /* Dark is the intended default look (night-sky/ignition palette); only an
     explicit earlier choice by this visitor should override it. */
  const storedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(storedTheme === "light" ? "light" : "dark");

  themeToggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /* ---------- Fixed nav: solid background after scrolling past hero ---------- */
  const siteNav = document.getElementById("siteNav");
  function updateNavBackground() {
    siteNav.classList.toggle("scrolled", window.scrollY > 40);
  }
  updateNavBackground();
  window.addEventListener("scroll", updateNavBackground, { passive: true });

  /* ---------- Mobile nav menu ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.querySelector("i").className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  });

  /* ---------- Smooth scrolling for in-page navigation ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.querySelector("i").className = "fa-solid fa-bars";
      }
    });
  });

  /* ---------- Scroll-to-top button ---------- */
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  function updateScrollTopVisibility() {
    scrollTopBtn.classList.toggle("visible", window.scrollY > 600);
  }
  updateScrollTopVisibility();
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Fade-in reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".fade-in").forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------- Timeline flight-path: lights up nodes as they enter view ---------- */
  const timelineNodes = document.querySelectorAll(".timeline-node");
  const nodeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.6 }
  );
  timelineNodes.forEach(function (node) {
    nodeObserver.observe(node);
  });

  /* Fills the vertical rail proportionally to scroll progress through the
     timeline section, giving the impression of an ascending rocket trail. */
  const timelineTrack = document.getElementById("timelineTrack");
  const railFill = document.getElementById("railFill");

  function updateRailFill() {
    if (!timelineTrack || !railFill) return;
    const rect = timelineTrack.getBoundingClientRect();
    const viewportH = window.innerHeight;
    const total = rect.height + viewportH;
    const progressed = Math.min(Math.max(viewportH - rect.top, 0), total);
    const percent = total > 0 ? (progressed / total) * 100 : 0;
    railFill.style.setProperty("--fill", percent + "%");
    railFill.style.height = percent + "%";
  }
  updateRailFill();
  window.addEventListener("scroll", updateRailFill, { passive: true });
  window.addEventListener("resize", updateRailFill);
})();
