"use strict";

var toggleBtn = document.querySelector('.toggle_btn');
var toggleBtnIcon = document.querySelector('.toggle_btn i');
var dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  var isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}; // Inizializza ScrollReveal


ScrollReveal().reveal('.box', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-out',
  interval: 200
});
window.addEventListener('DOMContentLoaded', function () {
  ScrollReveal().reveal('.home-text', {
    delay: 300,
    distance: '50px',
    origin: 'left',
    duration: 2000
  });
  ScrollReveal().reveal('.about-text', {
    distance: '100px',
    origin: 'right',
    duration: 2000,
    // Aggiornato: aumenta il valore per rendere l'animazione più lenta
    delay: 300,
    interval: 0,
    reset: false,
    useDelay: 'always',
    beforeReveal: function beforeReveal(el) {
      el.classList.add('show'); // Aggiunge la classe 'show' per mostrare il testo
    }
  });
}); // Ottieni l'elemento about-text

var aboutText = document.querySelector('.about-text'); // Aggiungi un flag per controllare se l'elemento è già stato mostrato

var isAboutTextShown = false; // Aggiungi un gestore di eventi per lo scroll della pagina

window.addEventListener('scroll', function () {
  // Verifica se l'elemento about-text è visibile e se non è già stato mostrato
  if (isElementInViewport(aboutText) && !isAboutTextShown) {
    // Mostra l'elemento about-text
    aboutText.classList.add('show');
    isAboutTextShown = true; // Imposta il flag a true per indicare che l'elemento è stato mostrato
  }
}); // Funzione per verificare se un elemento è visibile nella viewport

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

ScrollReveal().reveal('.main-text', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  opacity: 0
});
ScrollReveal().reveal('.row', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  opacity: 0,
  interval: 200 // Intervallo tra l'apparizione di ogni carta dei progetti

});