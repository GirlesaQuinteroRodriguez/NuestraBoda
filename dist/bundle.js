/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asistencia_firebase.js":
/*!************************************!*\
  !*** ./src/asistencia_firebase.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   materialClick1: () => (/* binding */ materialClick1),\n/* harmony export */   materialClick2: () => (/* binding */ materialClick2),\n/* harmony export */   restart: () => (/* binding */ restart),\n/* harmony export */   restart2: () => (/* binding */ restart2)\n/* harmony export */ });\nvar bg;\r\nvar bg2;\r\nvar topc;\r\nvar calendar;\r\nvar content;\r\nvar controls;\r\nvar circle;\r\nvar bc;\r\nvar bc1;\r\nvar bc2\r\nvar button;\r\nvar button1;\r\nvar button2;\r\nvar button3;\r\nvar signIn1;\r\nvar signIn2;\r\nvar loader1;\r\nvar loader2;\r\nvar x;\r\nvar y;\r\nvar thankyou;\r\nvar tk;\r\nvar changeD;\r\nvar loader1; \r\nvar loader2;\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => { \r\n  const button1 = document.querySelector('.button1');\r\n  const button2 = document.querySelector('.button2');\r\n\r\n  button1.addEventListener('click', materialClick1);\r\n  button2.addEventListener('click', materialClick2);\r\n});\r\n\r\nasync function materialClick1(event) {\r\n  try {\r\n\r\n    // Obtén los datos del formulario\r\n    const nombreCompleto = document.querySelector('.inputs input:first-child').value;\r\n    const correoElectronico = document.querySelector('.inputs input[type=\"email\"]').value;\r\n\r\n    // Valida los datos (puedes agregar más validaciones)\r\n    if (!nombreCompleto || !correoElectronico) {\r\n      alert('Por favor, completa todos los campos.');\r\n      return; // Detener la ejecución si los datos no son válidos\r\n    }\r\n    console.log(\"Antes de guardar en Firestore\");\r\n    \r\n    // Lógica asíncrona (guardar en Firestore) - MOVIDA AL PRINCIPIO\r\n    await firebase.firestore().collection('invitados').add({\r\n      nombre: nombreCompleto,\r\n      correo: correoElectronico,\r\n      RSVP: 'SI',\r\n      mesa: '' // Puedes dejarlo vacío por ahora\r\n    });\r\n    console.log(\"Después de guardar en Firestore\");\r\n\r\n    // Feedback visual (opcional)\r\n    event.target.classList.add('loading'); // Agrega una clase para indicar que se está cargando\r\n    \r\n \r\n    thankyou = document.querySelector('.thankyou');\r\n    tk = document.querySelector('.tk')\r\n    changeD = document.querySelector('ChangeD')\r\n    bg = document.querySelector('.bg');\r\n    bg2 = document.querySelector('.bg2');\r\n    topc = document.querySelector('.top');\r\n    calendar = document.querySelector('.calendar');\r\n    content = document.querySelector('.content');\r\n    controls = document.querySelector('.controls');\r\n    circle1 = document.querySelector('.circle1');\r\n    bc1 = document.querySelector('.button-container1');\r\n    button1 = document.querySelector('.button1');\r\n    signIn1 = document.querySelector('.sign-in1');\r\n    loader1 = document.querySelector('.loader1');\r\n    x = event.offsetX - circle1.offsetWidth / 2;\r\n    y = event.offsetY - circle1.offsetHeight / 2;\r\n  \r\n    \r\n    circle1.classList.remove('animate1');\r\n    circle1.style.left = x + 'px';\r\n    circle1.style.top = y + 'px';\r\n    bc1.style.zIndex = 1;\r\n    setTimeout(function() {\r\n      circle1.classList.add('animate1');\r\n      button1.classList.add('animate1');\r\n      signIn1.classList.add('animate1');\r\n      loader1.classList.add('animate1');\r\n      setTimeout(function() {\r\n        loader1.classList.add('animateOut');\r\n      }, 1000);\r\n      setTimeout(function() {\r\n        controls.classList.add('hidden');\r\n        bg.classList.add('no-image');\r\n        bg2.classList.add('visible');\r\n        thankyou.classList.add('visible');\r\n        tk.classList.add('visible');\r\n        changeD.classList.add('visible');\r\n        topc.classList.add('visible');\r\n        calendar.classList.add('visible');\r\n      }, 1460);\r\n      setTimeout(function() {\r\n        content.classList.add('removed')\r\n      }, 2000);\r\n    }, 50);\r\n\r\n\r\n  } catch (error) {\r\n    console.error('Error al guardar la asistencia:', error);\r\n    alert('Hubo un error al procesar tu asistencia. Por favor, inténtalo de nuevo.');\r\n  } finally {\r\n    event.target.classList.remove('loading'); // Quita la clase de carga\r\n  }\r\n\r\n}\r\n  \r\nasync function materialClick2(event) {\r\n\r\n  try {\r\n    // Obtén los datos del formulario\r\n    const nombreCompleto = document.querySelector('.inputs input:first-child').value;\r\n    const correoElectronico = document.querySelector('.inputs input[type=\"email\"]').value;\r\n\r\n    // Valida los datos (puedes agregar más validaciones)\r\n    if (!nombreCompleto || !correoElectronico) {\r\n      alert('Por favor, completa todos los campos.');\r\n      return; // Detener la ejecución si los datos no son válidos\r\n    }\r\n\r\n    // Lógica asíncrona (guardar en Firestore) - MOVIDA AL PRINCIPIO\r\n    await firebase.firestore().collection('invitados').add({\r\n      nombre: nombreCompleto,\r\n      correo: correoElectronico,\r\n      RSVP: 'NO',\r\n      mesa: '' // Puedes dejarlo vacío por ahora\r\n    });\r\n\r\n    // Feedback visual (opcional)\r\n    event.target.classList.add('loading'); // Agrega una clase para indicar que se está cargando\r\n    \r\n    // Resto de la lógica de animaciones y transiciones\r\n    \r\n  thankyou = document.querySelector('.thankyou');\r\n  tk = document.querySelector('.tk')\r\n  changeD = document.querySelector('ChangeD')\r\n  bg = document.querySelector('.bg');\r\n  bg2 = document.querySelector('.bg2');\r\n  topc = document.querySelector('.top');\r\n  calendar = document.querySelector('.calendar');\r\n  content = document.querySelector('.content');\r\n  controls = document.querySelector('.controls');\r\n  circle2 = document.querySelector('.circle2');\r\n  bc2 = document.querySelector('.button-container2');\r\n  button2 = document.querySelector('.button2');\r\n  signIn2 = document.querySelector('.sign-in2');\r\n  loader2 = document.querySelector('.loader2');\r\n  x = event.offsetX - circle2.offsetWidth / 2;\r\n  y = event.offsetY - circle2.offsetHeight / 2;\r\n\r\n  \r\n  circle2.classList.remove('animate2');\r\n  circle2.style.left = x + 'px';\r\n  circle2.style.top = y + 'px';\r\n  bc2.style.zIndex = 1;\r\n  setTimeout(function() {\r\n    circle2.classList.add('animate2');\r\n    button2.classList.add('animate2');\r\n    signIn2.classList.add('animate2');\r\n    loader2.classList.add('animate2');\r\n    setTimeout(function() {\r\n      loader2.classList.add('animateOut2');\r\n    }, 1000);\r\n    setTimeout(function() {\r\n      controls.classList.add('hidden');\r\n      bg.classList.add('no-image');\r\n      bg2.classList.add('visible');\r\n      thankyou.classList.add('visible');\r\n      tk.classList.add('visible');\r\n      changeD.classList.add('visible');\r\n      topc.classList.add('visible');   \r\n      calendar.classList.add('visible');\r\n    }, 1460);\r\n    setTimeout(function() {\r\n      content.classList.add('removed')\r\n    }, 2000);\r\n  }, 50);\r\n    // ... (el resto del código se mantiene igual)\r\n\r\n  } catch (error) {\r\n    console.error('Error al guardar la asistencia:', error);\r\n    alert('Hubo un error al procesar tu asistencia. Por favor, inténtalo de nuevo.');\r\n  } finally {\r\n    event.target.classList.remove('loading'); // Quita la clase de carga\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\nfunction restart(event) {\r\n  bc1.style.zIndex = 0;\r\n  bc2.style.zIndex = 0;\r\n  button1.classList.remove('animate1');\r\n  button2.classList.remove('animate2');\r\n  signIn1.classList.remove('animate1');\r\n  loader1.classList.remove('animate1');\r\n  loader1.classList.remove('animateOut1');\r\n  signIn2.classList.remove('animate2');\r\n  loader2.classList.remove('animate2');\r\n  loader2.classList.remove('animateOut2');\r\n  controls.classList.remove('hidden');\r\n  bg.classList.remove('no-image');\r\n  bg2.classList.remove('visible');\r\n  topc.classList.remove('visible');\r\n  calendar.classList.remove('visible');\r\n  content.classList.remove('removed');\r\n  document.querySelectorAll('.input').forEach(input => input.value = '');\r\n}\r\n\r\nfunction restart2(event) {\r\n  // Reuse elements for clarity\r\n  const button1 = document.getElementById('button1');\r\n  const button2 = document.getElementById('button2');\r\n  const signIn2 = document.querySelector('.sign-in2');\r\n  const loader2 = document.querySelector('.loader2');\r\n  const signIn1 = document.querySelector('.sign-in1');\r\n  const loader1 = document.querySelector('.loader1');\r\n\r\n  const clickedButton = event.target.closest('.animate1, .animate2'); // Get the clicked button with either class\r\n  const animateClass = clickedButton ? (clickedButton.classList.contains('animate1') ? 'animate1' : 'animate2') : null;\r\n  console.log(animateClass)\r\n\r\n  // Get the corresponding elements to remove class from\r\n  const elementsToRemoveClass = [button1, signIn1, loader1, loader2, button2, signIn2, loader2]\r\n    .filter(element => element.classList)\r\n    .filter(element => {\r\n      const elementId = element.id;\r\n      const lastChar = elementId.charAt(elementId.length - 1);\r\n      return lastChar === animateClass[7];\r\n    });\r\n\r\n  // Remove relevant animation classes\r\n  elementsToRemoveClass.forEach(element => {\r\n    element.classList.remove(animateClass);\r\n    element.classList.remove(`animateOut${animateClass[7]}`); // Remove corresponding \"animateOut\" class\r\n  });\r\n\r\n  // Reset other elements\r\n  controls.classList.remove('hidden');\r\n  topc.classList.remove('visible');\r\n  calendar.classList.remove('visible');\r\n  thankyou.classList.remove('visible');\r\n  content.classList.remove('removed');\r\n\r\n  // Clear input values (assuming safe selectors)\r\n  document.querySelectorAll('.input').forEach(input => input.value = '');\r\n}\r\n\r\n\r\n \r\n\r\n \n\n//# sourceURL=webpack:///./src/asistencia_firebase.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/asistencia_firebase.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;