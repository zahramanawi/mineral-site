// script.js

let translations = {};
let currentLang = 'fr';

function changeLanguage() {
  const select = document.getElementById("language-select");
  currentLang = select.value;
  localStorage.setItem("lang", currentLang);
  loadLanguage(currentLang);
}

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations = data;
      applyTranslations();
    });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[key]) {
      elem.innerHTML = translations[key];
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  document.getElementById("language-select").value = savedLang;
  loadLanguage(savedLang);
});
