const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ?
        'fa-solid fa-xmark' :
        'fa-solid fa-bars'
};

// Inizializza ScrollReveal
ScrollReveal().reveal('.box', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-out',
    interval: 200
});

window.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('.home-text', {
        delay: 300,
        distance: '50px',
        origin: 'left',
        duration: 2000
    });

    ScrollReveal().reveal('.about-text', {
        distance: '100px',
        origin: 'right',
        duration: 2000, // Aggiornato: aumenta il valore per rendere l'animazione più lenta
        delay: 300,
        interval: 0,
        reset: false,
        useDelay: 'always',
        beforeReveal: (el) => {
            el.classList.add('show'); // Aggiunge la classe 'show' per mostrare il testo
        }
    });
});

// Ottieni l'elemento about-text
const aboutText = document.querySelector('.about-text');

// Aggiungi un flag per controllare se l'elemento è già stato mostrato
let isAboutTextShown = false;

// Aggiungi un gestore di eventi per lo scroll della pagina
window.addEventListener('scroll', () => {
    // Verifica se l'elemento about-text è visibile e se non è già stato mostrato
    if (isElementInViewport(aboutText) && !isAboutTextShown) {
        // Mostra l'elemento about-text
        aboutText.classList.add('show');
        isAboutTextShown = true; // Imposta il flag a true per indicare che l'elemento è stato mostrato
    }
});

// Funzione per verificare se un elemento è visibile nella viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

ScrollReveal().reveal('.main-text', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
});

ScrollReveal().reveal('.row', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    opacity: 0,
    interval: 200, // Intervallo tra l'apparizione di ogni carta dei progetti
});

// Seleziona tutti i pulsanti "Read More"
const readMoreButtons = document.querySelectorAll('.read');

// Seleziona l'elemento di overlay
const overlay = document.getElementById('overlay');

// Aggiungi l'evento di click a ciascun pulsante
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });
});

// Aggiungi l'evento di click al pulsante di chiusura
let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function() {
  let overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
});

// Aggiungi un flag per tenere traccia dello stato dell'overlay
let isOverlayOpen = false;

// Funzione per disabilitare lo scroll
function disableScroll() {
  document.body.style.overflow = 'hidden';
}

// Funzione per abilitare lo scroll
function enableScroll() {
  document.body.style.overflow = 'auto';
}

// Aggiungi l'evento di click a ciascun pulsante "Read More"
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    overlay.style.display = 'flex';
    disableScroll(); // Disabilita lo scroll quando l'overlay viene aperto
    isOverlayOpen = true; // Imposta il flag a true
  });
});

// Aggiungi l'evento di click al pulsante di chiusura
closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
  enableScroll(); // Abilita lo scroll quando l'overlay viene chiuso
  isOverlayOpen = false; // Imposta il flag a false
});

// Aggiungi un gestore di eventi per lo scroll della pagina
window.addEventListener('scroll', () => {
  if (isOverlayOpen) {
    // Se l'overlay è aperto, reimposta la posizione dello scroll sulla cima
    window.scrollTo(0, 0);
  }
});
