function changeLanguage() {
  const langSelect = document.getElementById('language-select');
  if (!langSelect) return;
  const lang = langSelect.value;

  // Gérer la page projet
  const projectFr = document.getElementById('project-fr');
  const projectEn = document.getElementById('project-en');
  if (projectFr && projectEn) {
    projectFr.style.display = lang === 'fr' ? 'block' : 'none';
    projectEn.style.display = lang === 'en' ? 'block' : 'none';
  }

  // Gérer la page partenaires
  const partnersFr = document.getElementById('partners-fr');
  const partnersEn = document.getElementById('partners-en');
  if (partnersFr && partnersEn) {
    partnersFr.style.display = lang === 'fr' ? 'block' : 'none';
    partnersEn.style.display = lang === 'en' ? 'block' : 'none';
  }

  // Gérer la page d'accueil
  const homeFr = document.getElementById('home-fr');
  const homeEn = document.getElementById('home-en');
  if (homeFr && homeEn) {
    homeFr.style.display = lang === 'fr' ? 'block' : 'none';
    homeEn.style.display = lang === 'en' ? 'block' : 'none';
  }

  // Gérer la FAQ
  const faqFr = document.getElementById('faq-fr');
  const faqEn = document.getElementById('faq-en');
  if (faqFr && faqEn) {
    faqFr.style.display = lang === 'fr' ? 'block' : 'none';
    faqEn.style.display = lang === 'en' ? 'block' : 'none';
  }

  // Gérer la page Contact
  if (window.location.pathname.endsWith('contact.html')) {
    const contactFr = document.getElementById('contact-fr');
    const contactEn = document.getElementById('contact-en');
    if (contactFr && contactEn) {
      contactFr.style.display = lang === 'fr' ? 'block' : 'none';
      contactEn.style.display = lang === 'en' ? 'block' : 'none';
    }
  }

  // Gérer la page Offre de poste
  const path = decodeURIComponent(window.location.pathname).toLowerCase();
  if (path.includes('offre') && document.getElementById('offre-fr')) {
    const offreFr = document.getElementById('offre-fr');
    const offreEn = document.getElementById('offre-en');
    if (offreFr && offreEn) {
      offreFr.style.display = lang === 'fr' ? 'block' : 'none';
      offreEn.style.display = lang === 'en' ? 'block' : 'none';
    }
  }

  // Gérer la page Publications
  if (window.location.pathname.endsWith('publications.html')) {
    const publicationsFr = document.getElementById('publications-fr');
    const publicationsEn = document.getElementById('publications-en');
    if (publicationsFr && publicationsEn) {
      publicationsFr.style.display = lang === 'fr' ? 'block' : 'none';
      publicationsEn.style.display = lang === 'en' ? 'block' : 'none';
    }

    const dataFr = document.getElementById('data-fr');
    const dataEn = document.getElementById('data-en');
    if (dataFr && dataEn) {
      dataFr.style.display = lang === 'fr' ? 'block' : 'none';
      dataEn.style.display = lang === 'en' ? 'block' : 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();

  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.addEventListener('change', changeLanguage);
  }
});
