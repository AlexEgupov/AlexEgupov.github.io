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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__.slider)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.timer)('16 jule 2022');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)(document.getElementById('calc-total'));\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_4__.smoothScroll)();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.calc)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/animate.js":
/*!****************************!*\
  !*** ./modules/animate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) { timeFraction = 1; }\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/animate.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc)\n/* harmony export */ });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./modules/animate.js\");\n\r\n\r\nconst calc = () => {\r\n\r\n    try {\r\n        const calcType = document.getElementById('calc-type');\r\n        const calcTypeMaterial = document.getElementById('calc-type-material');\r\n        const calcInput = document.getElementById('calc-input');\r\n        const calcTotal = document.getElementById('calc-total');\r\n\r\n        let totalValue = 0;\r\n\r\n        calcType.setAttribute(\"required\", true);\r\n        calcTypeMaterial.setAttribute(\"required\", true);\r\n\r\n        const countCalc = () => {\r\n            totalValue = calcInput.value * +calcType.options[calcType.selectedIndex].value * +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;\r\n\r\n            calcTotal.value = totalValue;\r\n\r\n            (0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 500,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    calcTotal.value = Math.round(totalValue * progress);\r\n                }\r\n            });\r\n        };\r\n\r\n        const selectListeners = (select) => {\r\n            select.addEventListener('change', () => {\r\n                if (!isNaN(+select.options[select.selectedIndex].value) && calcInput.value > 0) {\r\n                    countCalc();\r\n                }\r\n            });\r\n        };\r\n\r\n        calcInput.addEventListener('input', () => {\r\n            calcInput.value = calcInput.value.replace(/\\D/g, '');\r\n\r\n            if (!isNaN(+calcType.options[calcType.selectedIndex].value) || !isNaN(+calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value)) {\r\n                countCalc();\r\n            }\r\n\r\n        });\r\n\r\n        selectListeners(calcType);\r\n        selectListeners(calcTypeMaterial);\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n};\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n    const services = document.getElementById('services');\r\n    const overlay = document.querySelector('.overlay');\r\n    const servicesModal = document.querySelector('.services-modal');\r\n    const header = document.getElementById('header');\r\n    const headerModal = document.querySelector('.header-modal');\r\n    const imgModal = document.querySelector('.img-modal');\r\n    const documents = document.getElementById('documents');\r\n\r\n    const displayBlock = (btnClass, modal, block) => {\r\n        block.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.target.matches(btnClass)) {\r\n                overlay.style.display = 'block';\r\n                modal.style.display = 'block';\r\n            }\r\n        });\r\n    };\r\n\r\n    const displayNone = (btnClass, modal) => {\r\n        document.querySelector(btnClass).addEventListener('click', () => {\r\n            overlay.style.display = 'none';\r\n            modal.style.display = 'none';\r\n        });\r\n    };\r\n\r\n    document.querySelectorAll('.document-overlay').forEach(el => {\r\n        el.style.display = 'none';\r\n    });\r\n\r\n    displayBlock('.btn-header', headerModal, header);\r\n    displayNone('.header-modal__close', headerModal);\r\n\r\n    displayBlock('.btn-sm', servicesModal, services);\r\n    displayNone('.services-modal__close', servicesModal);\r\n\r\n    displayBlock('.img-responsive', imgModal, documents);\r\n    displayNone('.img-modal__close', imgModal);\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = (someElem) => {\r\n    const forms = document.querySelectorAll('.form-horizontal');\r\n    const headerForm = document.querySelector('.header-form');\r\n    const servicesForm = document.querySelector('.services-form');\r\n    const statusBlock = document.createElement('div');\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется!';\r\n\r\n    let nameInputs = document.querySelectorAll('.nameInput');\r\n    let phoneInputs = document.querySelectorAll('.phoneInput');\r\n\r\n    const phoneCheck = (input) => {\r\n        input.forEach((e) => {\r\n            e.addEventListener('input', () => {\r\n                let word = e.value.replace(/[^0-9\\+]/gi, '');\r\n                word = word.replace(/\\++/g, '+');\r\n\r\n                e.value = word;\r\n            });\r\n        });\r\n    };\r\n\r\n    const textCheck = (input) => {\r\n        input.forEach((e) => {\r\n            e.addEventListener('blur', (e) => {\r\n                let word = e.target.value.replace(/[^а-яёa-z\\s+]/gi, '');\r\n                word = word.replace(/^\\s+|\\s+$/g, '');\r\n                word = word.replace(/\\s+/g, ' ');\r\n\r\n                e.target.value = word;\r\n                if (word != '') {\r\n                    e.target.value = e.target.value.replace(/( |^)[а-яёa-z]/ig, (w) => { return w.toUpperCase(); });\r\n                }\r\n            });\r\n        });\r\n\r\n\r\n    };\r\n\r\n    phoneCheck(phoneInputs);\r\n    textCheck(nameInputs);\r\n\r\n    const sendData = (user) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(user),\r\n            headers: {\r\n                \"Content-type\": \"application/json\",\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const formCheck = (form, name, phone) => {\r\n        let user = {\r\n            name: name.value,\r\n            phone: phone.value,\r\n            count: someElem !== null ? someElem.value : 0\r\n        };\r\n\r\n        if (name.value === '' || phone.value === '') {\r\n            alert('Нельзя отправить пустую форму!');\r\n            return;\r\n        } else {\r\n            statusBlock.style.cssText = `width: 50px; height: 50px; margin: auto;\r\n                background-color: #5d5d5d;\r\n                animation:  infinite ease-in-out;`;\r\n            let animation = statusBlock.animate([\r\n\r\n                { transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)' },\r\n                { transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)' },\r\n                { transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)' }\r\n\r\n            ], {\r\n                duration: 1000,\r\n                iterations: Infinity\r\n            });\r\n            form.append(statusBlock);\r\n            sendData(user).then(data => {\r\n                animation.cancel();\r\n                statusBlock.style.cssText = `color: #5d5d5d`;\r\n                statusBlock.textContent = successText;\r\n\r\n                setTimeout(() => {\r\n                    statusBlock.textContent = '';\r\n                }, 3000);\r\n            })\r\n            form.reset();\r\n        }\r\n    };\r\n\r\n    const submit = (form, nameInput, phoneInput) => {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            formCheck(form, nameInput, phoneInput);\r\n        });\r\n    };\r\n\r\n    submit(forms[0], nameInputs[0], phoneInputs[0]);\r\n    submit(forms[1], nameInputs[1], phoneInputs[1]);\r\n    submit(headerForm, nameInputs[2], phoneInputs[2]);\r\n    submit(servicesForm, nameInputs[3], phoneInputs[3]);\r\n\r\n};\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nconst slider = () => {\r\n    const benefitsArrows = document.querySelector('.benefits-arrows');\r\n    const benefitsItems = document.querySelectorAll('.benefits__item');\r\n    const servicesArrows = document.querySelector('.services-arrows');\r\n    const serviceItems = document.querySelectorAll('.service-block');\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass);\r\n    };\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass);\r\n    };\r\n\r\n    const lowWidth = (items, classActive) => {\r\n        window.addEventListener('resize', () => {\r\n            if (document.body.clientWidth < 576) {\r\n                items.forEach(item => {\r\n                    item.classList.remove(classActive);\r\n                });\r\n                items[0].classList.add(classActive);\r\n            } else if (document.body.clientWidth > 576) {\r\n                if (items.length === 6) {\r\n                    items.forEach(item => {\r\n                        item.classList.remove(classActive);\r\n                    });\r\n                    items[0].classList.add(classActive);\r\n                    items[1].classList.add(classActive);\r\n                    items[2].classList.add(classActive);\r\n                } else if (items.length === 4) {\r\n                    items.forEach(item => {\r\n                        item.classList.remove(classActive);\r\n                    });\r\n                    items[0].classList.add(classActive);\r\n                    items[1].classList.add(classActive);\r\n                }\r\n            }\r\n        });\r\n    };\r\n\r\n    const listener = (arrowsBlock, classLeft, classRight, items, classActive) => {\r\n        let currentSlide = 0;\r\n        arrowsBlock.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n\r\n            if (e.target.matches(classRight) || e.target.matches(classLeft)) {\r\n                if (document.body.clientWidth > 576) {\r\n                    items.forEach(item => {\r\n                        item.classList.toggle(classActive);\r\n                    });\r\n                } else if (document.body.clientWidth < 576) {\r\n                    prevSlide(items, currentSlide, classActive);\r\n\r\n                    if (e.target.matches(classRight)) {\r\n                        currentSlide++;\r\n                    } else if (e.target.matches(classLeft)) {\r\n                        currentSlide--;\r\n                    }\r\n\r\n                    if (currentSlide >= items.length) {\r\n                        currentSlide = 0;\r\n                    }\r\n\r\n                    if (currentSlide < 0) {\r\n                        currentSlide = items.length - 1;\r\n                    }\r\n\r\n                    nextSlide(items, currentSlide, classActive);\r\n                }\r\n            }\r\n\r\n        });\r\n    };\r\n\r\n    lowWidth(benefitsItems, 'benefits__item--active');\r\n    lowWidth(serviceItems, 'service-block--active');\r\n\r\n    listener(benefitsArrows, '.arrow-left', '.arrow-right', benefitsItems, 'benefits__item--active');\r\n    listener(servicesArrows, '.arrow-left', '.arrow-right', serviceItems, 'service-block--active');\r\n};\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n\r\n    const html = document.querySelector('html');\r\n    const header = document.getElementById('header');\r\n    const smoothScrollBtn = document.querySelector('.smooth-scroll');\r\n\r\n    smoothScrollBtn.style.display = 'none';\r\n    smoothScrollBtn.style.cursor = 'pointer';\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (html.scrollTop > 860) {\r\n            smoothScrollBtn.style.display = 'block';\r\n        } else {\r\n            smoothScrollBtn.style.display = 'none';\r\n        }\r\n    });\r\n\r\n    smoothScrollBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        header.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start'\r\n        });\r\n    });\r\n};\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timer\": () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const countDays = document.querySelectorAll('.days');\r\n    const countHours = document.querySelectorAll('.hours');\r\n    const countMinutes = document.querySelectorAll('.minutes');\r\n    const countSeconds = document.querySelectorAll('.seconds');\r\n\r\n    const wordDays = document.querySelectorAll('.daysWord');\r\n    const wordHours = document.querySelectorAll('.hoursWord');\r\n    const wordMinutes = document.querySelectorAll('.minutesWord');\r\n    const wordSeconds = document.querySelectorAll('.secondsWord');\r\n\r\n    let interval;\r\n\r\n    const getTimeRemaining = () => {\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n    };\r\n\r\n    function zeroPlus(item) {\r\n        let num = item < 10 ? '0' + item : item;\r\n        return num;\r\n    }\r\n\r\n    const numWord = (value, words) => {\r\n        value = Math.abs(value) % 100;\r\n        const lastNum = value % 10;\r\n\r\n        if (value > 10 & value < 20) { return words[2] };\r\n        if (lastNum > 1 && lastNum < 5) { return words[1] };\r\n        if (lastNum === 1) { return words[0] };\r\n\r\n        return words[2];\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            countDays.forEach(day => day.textContent = zeroPlus(getTime.days));\r\n            countHours.forEach(day => day.textContent = zeroPlus(getTime.hours));\r\n            countMinutes.forEach(day => day.textContent = zeroPlus(getTime.minutes));\r\n            countSeconds.forEach(day => day.textContent = zeroPlus(getTime.seconds));\r\n        } else {\r\n            countDays.forEach(day => day.textContent = \"00\");\r\n            countHours.forEach(day => day.textContent = \"00\");\r\n            countMinutes.forEach(day => day.textContent = \"00\");\r\n            countSeconds.forEach(day => day.textContent = \"00\");\r\n            clearInterval(interval);\r\n        }\r\n\r\n        wordDays.forEach(word => word.textContent = numWord(getTime.days, ['День:', 'Дня:', 'Дней:']));\r\n        wordHours.forEach(word => word.textContent = numWord(getTime.hours, ['Час:', 'Часа:', 'Часов:']));\r\n        wordMinutes.forEach(word => word.textContent = numWord(getTime.minutes, ['Минута:', 'Минуты:', 'Минут:']));\r\n        wordSeconds.forEach(word => word.textContent = numWord(getTime.seconds, ['Секунда:', 'Секунды:', 'Секунд:']));\r\n    };\r\n    interval = setInterval(updateClock, 1000);\r\n};\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;