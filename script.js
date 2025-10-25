// --- Fade-in effect for sections ---
const fadeSections = document.querySelectorAll(".fade-section");

function revealOnScroll() {
  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;

    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// --- Language System ---
const translations = {
  en: {
    home: "Home",
    profile: "Profile",
    stats: "Statistics",
    media: "Media",
    contact: "Contact",
    heroTitle: "Alkaly Morlaye Soumah",
    heroSubtitle: "Professional Forward — Eintracht Trier",
    heroButton: "View Career",
    profileTitle: "Player Profile",
    about: "Full Name: Alkaly Morlaye Soumah",
    position: "Position: Forward",
    club: "Current Club: Eintracht Trier",
    quote: "“Speed, precision and determination — football is my passion.”",
    statsTitle: "Season Statistics 2025",
    matches: "Matches",
    goals: "Goals",
    assists: "Assists",
    minutes: "Minutes Played",
    yellow: "Yellow Cards",
    red: "Red Cards",
    performance: "Performance",
    pace: "Pace",
    shooting: "Shooting",
    dribbling: "Dribbling",
    passing: "Passing",
    defense: "Defense",
    physical: "Physical",
    gallery: "Gallery",
    contactTitle: "Contact",
    contactText: "For professional inquiries, please contact: ",
    footer: "© 2025 Alkaly Morlaye Soumah. All rights reserved."
  },
  fr: {
    home: "Accueil",
    profile: "Profil",
    stats: "Statistiques",
    media: "Médias",
    contact: "Contact",
    heroTitle: "Alkaly Morlaye Soumah",
    heroSubtitle: "Avant-centre — Eintracht Trier",
    heroButton: "Voir la carrière",
    profileTitle: "Profil du Joueur",
    about: "Nom complet : Alkaly Morlaye Soumah",
    position: "Poste : Avant-centre",
    club: "Club actuel : Eintracht Trier",
    quote: "« Vitesse, précision et détermination — le football est ma passion. »",
    statsTitle: "Statistiques Saison 2025",
    matches: "Matchs",
    goals: "Buts",
    assists: "Passes décisives",
    minutes: "Minutes jouées",
    yellow: "Cartons Jaunes",
    red: "Cartons Rouges",
    performance: "Performance",
    pace: "Vitesse",
    shooting: "Finition",
    dribbling: "Dribble",
    passing: "Passe",
    defense: "Défense",
    physical: "Physique",
    gallery: "Galerie",
    contactTitle: "Contact",
    contactText: "Pour tout contact professionnel, veuillez écrire à : ",
    footer: "© 2025 Alkaly Morlaye Soumah. Tous droits réservés."
  },
  de: {
    home: "Startseite",
    profile: "Profil",
    stats: "Statistiken",
    media: "Medien",
    contact: "Kontakt",
    heroTitle: "Alkaly Morlaye Soumah",
    heroSubtitle: "Stürmer — Eintracht Trier",
    heroButton: "Karriere ansehen",
    profileTitle: "Spielerprofil",
    about: "Vollständiger Name: Alkaly Morlaye Soumah",
    position: "Position: Stürmer",
    club: "Aktueller Verein: Eintracht Trier",
    quote: "„Geschwindigkeit, Präzision und Entschlossenheit — Fußball ist meine Leidenschaft.“",
    statsTitle: "Saisonstatistik 2025",
    matches: "Spiele",
    goals: "Tore",
    assists: "Vorlagen",
    minutes: "Spielminuten",
    yellow: "Gelbe Karten",
    red: "Rote Karten",
    performance: "Leistung",
    pace: "Tempo",
    shooting: "Schuss",
    dribbling: "Dribbling",
    passing: "Passen",
    defense: "Verteidigung",
    physical: "Physis",
    gallery: "Galerie",
    contactTitle: "Kontakt",
    contactText: "Für geschäftliche Anfragen bitte kontaktieren: ",
    footer: "© 2025 Alkaly Morlaye Soumah. Alle Rechte vorbehalten."
  },
  es: {
    home: "Inicio",
    profile: "Perfil",
    stats: "Estadísticas",
    media: "Medios",
    contact: "Contacto",
    heroTitle: "Alkaly Morlaye Soumah",
    heroSubtitle: "Delantero — Eintracht Trier",
    heroButton: "Ver carrera",
    profileTitle: "Perfil del Jugador",
    about: "Nombre completo: Alkaly Morlaye Soumah",
    position: "Posición: Delantero",
    club: "Club actual: Eintracht Trier",
    quote: "« Velocidad, precisión y determinación — el fútbol es mi pasión. »",
    statsTitle: "Estadísticas Temporada 2025",
    matches: "Partidos",
    goals: "Goles",
    assists: "Asistencias",
    minutes: "Minutos Jugados",
    yellow: "Tarjetas Amarillas",
    red: "Tarjetas Rojas",
    performance: "Rendimiento",
    pace: "Velocidad",
    shooting: "Tiro",
    dribbling: "Regate",
    passing: "Pase",
    defense: "Defensa",
    physical: "Físico",
    gallery: "Galería",
    contactTitle: "Contacto",
    contactText: "Para consultas profesionales, por favor contactar: ",
    footer: "© 2025 Alkaly Morlaye Soumah. Todos los derechos reservados."
  },
  pt: {
    home: "Início",
    profile: "Perfil",
    stats: "Estatísticas",
    media: "Mídia",
    contact: "Contato",
    heroTitle: "Alkaly Morlaye Soumah",
    heroSubtitle: "Atacante — Eintracht Trier",
    heroButton: "Ver carreira",
    profileTitle: "Perfil do Jogador",
    about: "Nome completo: Alkaly Morlaye Soumah",
    position: "Posição: Atacante",
    club: "Clube atual: Eintracht Trier",
    quote: "« Velocidade, precisão e determinação — o futebol é minha paixão. »",
    statsTitle: "Estatísticas Temporada 2025",
    matches: "Jogos",
    goals: "Gols",
    assists: "Assistências",
    minutes: "Minutos Jogados",
    yellow: "Cartões Amarelos",
    red: "Cartões Vermelhos",
    performance: "Desempenho",
    pace: "Velocidade",
    shooting: "Chute",
    dribbling: "Drible",
    passing: "Passe",
    defense: "Defesa",
    physical: "Físico",
    gallery: "Galeria",
    contactTitle: "Contato",
    contactText: "Para consultas profissionais, entre em contato: ",
    footer: "© 2025 Alkaly Morlaye Soumah. Todos os direitos reservados."
  }
};

// --- Apply translation ---
function changeLanguage(lang) {
  const textElements = document.querySelectorAll("[data-translate]");

  textElements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Save choice
  localStorage.setItem("selectedLang", lang);
}

// --- Load saved language ---
const savedLang = localStorage.getItem("selectedLang") || "en";
changeLanguage(savedLang);

// --- Handle language flag click ---
document.querySelectorAll(".lang-dropdown img").forEach(flag => {
  flag.addEventListener("click", () => {
    const lang = flag.getAttribute("data-lang");
    changeLanguage(lang);
  });
});
