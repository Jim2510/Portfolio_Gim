import ScrollReveal from '../node_modules/scrollreveal/dist/scrollreveal.min.js';


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