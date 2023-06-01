/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("// Inizializza ScrollReveal\r\nScrollReveal().reveal('.box', {\r\n    delay: 200,\r\n    distance: '50px',\r\n    origin: 'bottom',\r\n    easing: 'ease-out',\r\n    interval: 200\r\n});\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    ScrollReveal().reveal('.home-text', {\r\n        delay: 1000,\r\n        distance: '50px',\r\n        origin: 'left',\r\n        duration: 1000\r\n    });\r\n\r\n    ScrollReveal().reveal('.about-text', {\r\n        distance: '100px',\r\n        origin: 'right',\r\n        duration: 1000, // Aggiornato: aumenta il valore per rendere l'animazione più lenta\r\n        delay: 200,\r\n        interval: 0,\r\n        reset: false,\r\n        useDelay: 'always',\r\n        beforeReveal: (el) => {\r\n            el.classList.add('show'); // Aggiunge la classe 'show' per mostrare il testo\r\n        }\r\n    });\r\n});\r\n\r\n// Ottieni l'elemento about-text\r\nconst aboutText = document.querySelector('.about-text');\r\n\r\n// Aggiungi un flag per controllare se l'elemento è già stato mostrato\r\nlet isAboutTextShown = false;\r\n\r\n// Aggiungi un gestore di eventi per lo scroll della pagina\r\nwindow.addEventListener('scroll', () => {\r\n    // Verifica se l'elemento about-text è visibile e se non è già stato mostrato\r\n    if (isElementInViewport(aboutText) && !isAboutTextShown) {\r\n        // Mostra l'elemento about-text\r\n        aboutText.classList.add('show');\r\n        isAboutTextShown = true; // Imposta il flag a true per indicare che l'elemento è stato mostrato\r\n    }\r\n});\r\n\r\n// Funzione per verificare se un elemento è visibile nella viewport\r\nfunction isElementInViewport(element) {\r\n    const rect = element.getBoundingClientRect();\r\n    return (\r\n        rect.top >= 0 &&\r\n        rect.left >= 0 &&\r\n        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\r\n        rect.right <= (window.innerWidth || document.documentElement.clientWidth)\r\n    );\r\n}\n\n//# sourceURL=webpack://progetto-html-css-di-gianmarco-guglielmino/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;