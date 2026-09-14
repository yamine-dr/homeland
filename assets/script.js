// multilingual feature inspired from: https://medium.com/%40nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505

// set language preference
function setLanguagePreference(lang) {
  localStorage.setItem('language', lang);
}

// fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`assets/lang/${lang}.json`);
  return response.json();
}

// update content based on selected language
function updateContent(langData) {
  document.documentElement.setAttribute("lang", langData); // set <html> "lang" attribute
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    element.innerHTML = langData[key];
  });
}

// change language
async function changeLanguage(lang) {
  setLanguagePreference(lang);
  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

// set language on page load
window.addEventListener('DOMContentLoaded', async () => {
  const preferredLang = localStorage.getItem("language") || "fr";
  changeLanguage(preferredLang);
  
});