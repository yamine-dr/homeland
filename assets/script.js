// set language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.setAttribute("lang", lang); // set <html> "lang" attribute
}

// fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`assets/lang/${lang}.json`);
  return response.json();
}

// update content based on selected language
function updateContent(langData) {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = langData[key];
  });
}

// change language
async function changeLanguage(lang) {
  setLanguagePreference(lang);
  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

window.addEventListener('DOMContentLoaded', async () => {
  console.log("localStorage language: ", localStorage.getItem("language"));
  console.log("<html> lang: ", document.documentElement.getAttribute("lang"));
});