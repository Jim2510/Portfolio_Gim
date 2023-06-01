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

eval("// Inizializza ScrollReveal\r\nScrollReveal().reveal('.box', {\r\n    delay: 200,\r\n    distance: '50px',\r\n    origin: 'bottom',\r\n    easing: 'ease-out',\r\n    interval: 200\r\n});\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    const aboutText = document.querySelector('.about-text');\r\n\r\n    const revealAboutText = () => {\r\n        aboutText.classList.add('show');\r\n    };\r\n\r\n    const scrollOptions = {\r\n        distance: '100px',\r\n        origin: 'right',\r\n        duration: 500,\r\n        delay: 200,\r\n        reset: false,\r\n        useDelay: 'always',\r\n        beforeReveal: revealAboutText\r\n    };\r\n\r\n    ScrollReveal().reveal(aboutText, scrollOptions);\r\n});\n\n//# sourceURL=webpack://progetto-html-css-di-gianmarco-guglielmino/./src/main.js?");

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