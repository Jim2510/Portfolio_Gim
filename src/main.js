const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
  dropDownMenu.classList.toggle('open');
  toggleBtnIcon.classList.toggle('fa-xmark');
  toggleBtnIcon.classList.toggle('fa-bars');
});

const revealOptions = {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-out',
  interval: 200,
};

ScrollReveal().reveal('.box', revealOptions);

ScrollReveal().reveal('.home-text', {
  ...revealOptions,
  origin: 'left',
  duration: 2000,
});

ScrollReveal().reveal('.about-text', {
  ...revealOptions,
  origin: 'right',
  duration: 2000,
  beforeReveal: (el) => {
    el.classList.add('show');
  },
});

const aboutText = document.querySelector('.about-text');
let isAboutTextShown = false;

window.addEventListener('scroll', () => {
  if (isElementInViewport(aboutText) && !isAboutTextShown) {
    aboutText.classList.add('show');
    isAboutTextShown = true;
  }
});

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
  ...revealOptions,
  origin: 'bottom',
  duration: 1000,
  opacity: 0,
});

ScrollReveal().reveal('.row', {
  ...revealOptions,
  origin: 'bottom',
  duration: 1000,
  opacity: 0,
  interval: 200,
});

const readMoreButtons = document.querySelectorAll('.read');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');
let isOverlayOpen = false;

readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    overlay.style.display = 'flex';
    disableScroll();
    isOverlayOpen = true;
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  enableScroll();
  isOverlayOpen = false;
});

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}
