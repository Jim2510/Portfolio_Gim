"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toggleBtn = document.querySelector('.toggle_btn');
var toggleBtnIcon = document.querySelector('.toggle_btn i');
var dropDownMenu = document.querySelector('.dropdown_menu');
var revealOptions = {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  easing: 'ease-out',
  interval: 200
};
var aboutText = document.querySelector('.about-text');
var readMoreButtons = document.querySelectorAll('.read');
var overlay = document.getElementById('overlay');
var closeBtn = document.querySelector('.close-btn');
var isAboutTextShown = false;
var isOverlayOpen = false;
toggleBtn.addEventListener('click', function () {
  dropDownMenu.classList.toggle('open');
  toggleBtnIcon.classList.toggle('fa-xmark');
  toggleBtnIcon.classList.toggle('fa-bars');
});
ScrollReveal().reveal('.box', revealOptions);
ScrollReveal().reveal('.home-text', _objectSpread({}, revealOptions, {
  origin: 'left',
  duration: 2000
}));
ScrollReveal().reveal('.about-text', _objectSpread({}, revealOptions, {
  origin: 'right',
  duration: 2000,
  beforeReveal: function beforeReveal(el) {
    el.classList.add('show');
  }
}));
window.addEventListener('scroll', function () {
  if (isElementInViewport(aboutText) && !isAboutTextShown) {
    aboutText.classList.add('show');
    isAboutTextShown = true;
  }
});
ScrollReveal().reveal('.main-text', _objectSpread({}, revealOptions, {
  origin: 'bottom',
  duration: 1000,
  opacity: 0
}));
ScrollReveal().reveal('.row', _objectSpread({}, revealOptions, {
  origin: 'bottom',
  duration: 1000,
  opacity: 0,
  interval: 200
}));
readMoreButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    overlay.style.display = 'flex';
    disableScroll();
    isOverlayOpen = true;
  });
});
closeBtn.addEventListener('click', function () {
  overlay.style.display = 'none';
  enableScroll();
  isOverlayOpen = false;
});

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = 'auto';
}