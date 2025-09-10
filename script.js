// THEME
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

function updateThemeIcon() {
  themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
}

if (savedTheme) {
  document.body.classList.toggle("dark", savedTheme === "dark");
} else {
  document.body.classList.toggle("dark", prefersDark);
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});


// LANGUAGE
const langToggle = document.getElementById("lang-toggle");
let savedLang = localStorage.getItem("lang");

if (!savedLang) {
  // Detect browser language on first visit
  const browserLang = navigator.language || navigator.userLanguage;
  savedLang = browserLang.startsWith("es") ? "es" : "en"; 
  localStorage.setItem("lang", savedLang);
}

setLanguage(savedLang);

langToggle.addEventListener("click", () => {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === "es" ? "en" : "es";
  setLanguage(newLang);
  localStorage.setItem("lang", newLang);
});

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-es]").forEach(el => {
    el.innerText = el.getAttribute(`data-${lang}`);
  });
  langToggle.textContent = lang === "es" ? "English" : "Español";
}

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
