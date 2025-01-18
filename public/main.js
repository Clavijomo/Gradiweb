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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/header.scss */ \"./src/styles/header.scss\");\n/* harmony import */ var _styles_hero_banner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/hero-banner.scss */ \"./src/styles/hero-banner.scss\");\n/* harmony import */ var _styles_carrousel_products_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/carrousel-products.scss */ \"./src/styles/carrousel-products.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/footer.scss */ \"./src/styles/footer.scss\");\n/* harmony import */ var _styles_latest_collection_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/latest-collection.scss */ \"./src/styles/latest-collection.scss\");\n/* harmony import */ var _config_settings_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/settings_data.json */ \"./config/settings_data.json\");\n/* harmony import */ var _marquee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marquee */ \"./src/js/marquee.js\");\n/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggleMenu */ \"./src/js/toggleMenu.js\");\n/* harmony import */ var _smoothScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./smoothScroll */ \"./src/js/smoothScroll.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products */ \"./src/js/products.js\");\n\n\n\n\n\n\n\n\n\n\nvar sections = _config_settings_data_json__WEBPACK_IMPORTED_MODULE_5__.sections;\nvar topBarContent = document.querySelector('.top-bar__content');\nvar heroBanner = document.querySelector('.hero-banner__marquee');\nvar toggleButton = document.querySelector('.header__menu__toggle');\nvar navMenu = document.querySelector('.header__nav');\nvar message = 'FREE SHIPPING FOR ORDERS OVER $100';\nvar header = document.querySelector('.header');\nvar messageMarquee = sections.heroBanner.settings.marquee_text;\nvar heroIconPath = './assets/star.svg';\nvar viewAllButton = document.querySelector('#view-all-button');\nvar repeatCount = 100;\nvar productsList = document.querySelector('#products-list');\nif (topBarContent) {\n  (0,_marquee__WEBPACK_IMPORTED_MODULE_6__.generateTopBarMarquee)(topBarContent, message, repeatCount);\n}\nif (heroBanner) {\n  (0,_marquee__WEBPACK_IMPORTED_MODULE_6__.generateHeroMarquee)(heroBanner, messageMarquee, repeatCount, heroIconPath);\n}\n(0,_toggleMenu__WEBPACK_IMPORTED_MODULE_7__.attachToggleMenu)(toggleButton, navMenu, header);\n(0,_smoothScroll__WEBPACK_IMPORTED_MODULE_8__.attachSmoothScrollToLinks)('.header__nav__list__item__link', null);\n(0,_smoothScroll__WEBPACK_IMPORTED_MODULE_8__.attachSmoothScrollToLinks)('.section-information__list-buttons-footer a', '.section-information__list-buttons-footer button');\nviewAllButton.addEventListener('click', function () {\n  return (0,_products__WEBPACK_IMPORTED_MODULE_9__.renderAdditionalProducts)(productsList, viewAllButton);\n});\n\n//# sourceURL=webpack://shopify-simulator/./src/js/app.js?");

/***/ }),

/***/ "./src/js/marquee.js":
/*!***************************!*\
  !*** ./src/js/marquee.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateHeroMarquee: () => (/* binding */ generateHeroMarquee),\n/* harmony export */   generateTopBarMarquee: () => (/* binding */ generateTopBarMarquee)\n/* harmony export */ });\nfunction generateHeroMarquee(container, message, repeatCount, iconPath) {\n  if (!container) return;\n  for (var i = 0; i < repeatCount; i++) {\n    var span = document.createElement('span');\n    span.textContent = message;\n    span.style.marginRight = '2rem';\n    container.appendChild(span);\n    if (i < repeatCount - 1) {\n      var img = document.createElement('img');\n      img.src = iconPath;\n      img.alt = 'Star icon';\n      img.style.width = '80px';\n      img.style.height = '80px';\n      img.style.marginRight = '1rem';\n      container.appendChild(img);\n    }\n  }\n}\nfunction generateTopBarMarquee(container, message, repeatCount) {\n  if (!container) return;\n  for (var i = 0; i < repeatCount; i++) {\n    var span = document.createElement('span');\n    span.textContent = message;\n    span.style.marginRight = '2rem';\n    container.appendChild(span);\n  }\n}\n\n//# sourceURL=webpack://shopify-simulator/./src/js/marquee.js?");

/***/ }),

/***/ "./src/js/products.js":
/*!****************************!*\
  !*** ./src/js/products.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAdditionalProducts: () => (/* binding */ fetchAdditionalProducts),\n/* harmony export */   renderAdditionalProducts: () => (/* binding */ renderAdditionalProducts)\n/* harmony export */ });\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/products.json */ \"./data/products.json\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\nfunction fetchAdditionalProducts() {\n  return new Promise(function (resolve) {\n    setTimeout(function () {\n      var additionalProducts = _data_products_json__WEBPACK_IMPORTED_MODULE_0__.slice(4);\n      resolve(additionalProducts);\n    }, 150);\n  });\n}\nfunction renderAdditionalProducts(_x, _x2) {\n  return _renderAdditionalProducts.apply(this, arguments);\n}\nfunction _renderAdditionalProducts() {\n  _renderAdditionalProducts = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(productsList, viewAllButton) {\n    var additionalProducts;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return fetchAdditionalProducts();\n        case 3:\n          additionalProducts = _context.sent;\n          additionalProducts.forEach(function (product) {\n            var productCard = document.createElement('div');\n            productCard.classList.add('product-card', 'hidden');\n            var tagsHTML = product.tags ? \"<ul class=\\\"product-card__list-tags\\\">\\n                    \".concat(product.tags.map(function (tag) {\n              return \"<li>\".concat(tag, \" | </li>\");\n            }).join(''), \"\\n                   </ul>\") : '';\n            productCard.innerHTML = \"\\n                <div class=\\\"product-card__container-image\\\">\\n                    <img\\n                        class=\\\"product-card__image-product\\\"\\n                        src=\\\"\".concat(product.image, \"\\\"\\n                        alt=\\\"\").concat(product.title, \"\\\"\\n                        width=\\\"100%\\\"\\n                        height=\\\"100%\\\"\\n                    />\\n                </div>\\n                <div class=\\\"product-card__container-actions-product\\\">\\n                    <div class=\\\"product-card__container-actions-product__container-description\\\">\\n                        <h3 class=\\\"product-card__title-product\\\">\").concat(product.title, \"</h3>\\n                        <p class=\\\"product-card__text-price\\\">$\").concat(product.price.toFixed(2), \"</p>\\n                        \").concat(tagsHTML, \"\\n                    </div>\\n                    <button class=\\\"product-card__button\\\">\\n                        <img src=\\\"./assets/shop.svg\\\" alt=\\\"Cart icon\\\" width=\\\"20\\\" />\\n                    </button>\\n                </div>\\n            \");\n            productsList.appendChild(productCard);\n            setTimeout(function () {\n              productCard.classList.remove('hidden');\n              productCard.classList.add('fade-in');\n            }, 100);\n          });\n          viewAllButton.style.display = 'none';\n          _context.next = 11;\n          break;\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](0);\n          console.error('Error fetching additional products:', _context.t0);\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n  return _renderAdditionalProducts.apply(this, arguments);\n}\n\n//# sourceURL=webpack://shopify-simulator/./src/js/products.js?");

/***/ }),

/***/ "./src/js/smoothScroll.js":
/*!********************************!*\
  !*** ./src/js/smoothScroll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attachSmoothScrollToLinks: () => (/* binding */ attachSmoothScrollToLinks),\n/* harmony export */   smoothScrollTo: () => (/* binding */ smoothScrollTo)\n/* harmony export */ });\nfunction attachSmoothScrollToLinks(linkSelector, buttonSelector) {\n  var links = document.querySelectorAll(linkSelector);\n  links.forEach(function (link) {\n    var href = link.getAttribute('href');\n    if (href && href.startsWith('#')) {\n      link.addEventListener('click', function (event) {\n        event.preventDefault();\n        var targetId = href.slice(1);\n        smoothScrollTo(targetId);\n      });\n    } else {\n      console.warn(\"Invalid href detected: \".concat(href));\n    }\n  });\n  var buttons = document.querySelectorAll(buttonSelector);\n  buttons.forEach(function (button) {\n    var targetId = button.dataset.target;\n    if (targetId) {\n      button.addEventListener('click', function () {\n        smoothScrollTo(targetId);\n      });\n    } else {\n      console.warn(\"Invalid data-target detected: \".concat(button.outerHTML));\n    }\n  });\n}\nfunction smoothScrollTo(targetId) {\n  var targetElement = document.getElementById(targetId);\n  if (targetElement) {\n    window.scrollTo({\n      top: targetElement.offsetTop - 120,\n      behavior: 'smooth'\n    });\n  }\n}\n\n//# sourceURL=webpack://shopify-simulator/./src/js/smoothScroll.js?");

/***/ }),

/***/ "./src/js/toggleMenu.js":
/*!******************************!*\
  !*** ./src/js/toggleMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attachToggleMenu: () => (/* binding */ attachToggleMenu)\n/* harmony export */ });\nfunction attachToggleMenu(toggleButton, navMenu, header) {\n  toggleButton.addEventListener('click', function () {\n    var isOpen = navMenu.classList.toggle('active');\n    header.classList.toggle('menu-open');\n    toggleButton.textContent = isOpen ? 'X' : '☰';\n    toggleButton.style.color = isOpen ? 'white' : '#6f42c1';\n    toggleButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');\n  });\n}\n\n//# sourceURL=webpack://shopify-simulator/./src/js/toggleMenu.js?");

/***/ }),

/***/ "./src/styles/carrousel-products.scss":
/*!********************************************!*\
  !*** ./src/styles/carrousel-products.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles/carrousel-products.scss?");

/***/ }),

/***/ "./src/styles/footer.scss":
/*!********************************!*\
  !*** ./src/styles/footer.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles/footer.scss?");

/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles/header.scss?");

/***/ }),

/***/ "./src/styles/hero-banner.scss":
/*!*************************************!*\
  !*** ./src/styles/hero-banner.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles/hero-banner.scss?");

/***/ }),

/***/ "./src/styles/latest-collection.scss":
/*!*******************************************!*\
  !*** ./src/styles/latest-collection.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles/latest-collection.scss?");

/***/ }),

/***/ "./config/settings_data.json":
/*!***********************************!*\
  !*** ./config/settings_data.json ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"sections\":{\"featured-products\":{\"type\":\"featured-products\",\"settings\":{\"heading\":\"Our Featured Products\",\"background_color\":\"#ffffff\"}},\"header\":{\"type\":\"header\",\"settings\":{\"logo_url\":\"/assets/logo.png\",\"site_name\":\"MyShopify\"}},\"heroBanner\":{\"type\":\"hero-banner\",\"settings\":{\"button_text\":\"Shop Now\",\"button_link\":\"/collections/all\",\"marquee_text\":\"Free Shipping on Orders Over $50\",\"background_image\":\"/assets/hero_banner_img.avif\"}},\"footer\":{\"type\":\"footer\",\"settings\":{\"logo_text\":\"MyShopify\",\"links\":[{\"label\":\"Home\",\"url\":\"/\"},{\"label\":\"Cart\",\"url\":\"/cart\"},{\"label\":\"All Products\",\"url\":\"/collections/all\"},{\"label\":\"Collections\",\"url\":\"/collections\"},{\"label\":\"Refund Policy\",\"url\":\"/refund-policy\"},{\"label\":\"Privacy Policy\",\"url\":\"/privacy-policy\"},{\"label\":\"Terms of Service\",\"url\":\"/terms-of-service\"}]}}}}');\n\n//# sourceURL=webpack://shopify-simulator/./config/settings_data.json?");

/***/ }),

/***/ "./data/products.json":
/*!****************************!*\
  !*** ./data/products.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":1,\"title\":\"Shuffle Crewneck Black\",\"price\":49.99,\"tags\":[\"clothing\",\"sweater\"],\"image\":\"assets/shuffle_crewneck_black.avif\",\"description\":\"A stylish black crewneck sweater.\"},{\"id\":2,\"title\":\"Shuffle Hoodie Purple\",\"price\":59.99,\"tags\":[\"clothing\",\"hoodie\"],\"image\":\"assets/shuffle_crewneck_grey.avif\",\"description\":\"A comfortable purple hoodie for everyday wear.\"},{\"id\":3,\"title\":\"Shuffle Essentials\",\"price\":29.99,\"tags\":[\"accessories\",\"daily\"],\"image\":\"assets/shuffle_essentials.webp\",\"description\":\"Your daily essential accessory set.\"},{\"id\":4,\"title\":\"Shuffle Hat Black\",\"price\":19.99,\"tags\":[\"clothing\",\"hat\"],\"image\":\"assets/shuffle_hat_black.avif\",\"description\":\"A black hat for all seasons.\"},{\"id\":5,\"title\":\"Shuffle Hat Purple\",\"price\":19.99,\"tags\":[\"clothing\",\"hat\"],\"image\":\"assets/shuffle_hat_purple.avif\",\"description\":\"A purple hat to match your hoodie.\"},{\"id\":6,\"title\":\"Shuffle Hoodie Black\",\"price\":59.99,\"tags\":[\"clothing\",\"hoodie\"],\"image\":\"assets/shuffle_hoodie_black.avif\",\"description\":\"A versatile black hoodie for daily use.\"},{\"id\":7,\"title\":\"Shuffle T-Shirt White\",\"price\":25.99,\"tags\":[\"clothing\",\"t-shirt\"],\"image\":\"assets/shuffle_t_shirt_white.avif\",\"description\":\"A classic white t-shirt for every occasion.\"},{\"id\":8,\"title\":\"Shuffle T-Shirt Black\",\"price\":25.99,\"tags\":[\"clothing\",\"t-shirt\"],\"image\":\"assets/shuffle_t_shirt_white.avif\",\"description\":\"A stylish black t-shirt for casual wear.\"},{\"id\":9,\"title\":\"Ket Club Mug\",\"price\":15.99,\"tags\":[\"home\",\"mug\"],\"image\":\"assets/ket_club.jpg\",\"description\":\"A premium mug for coffee lovers.\"},{\"id\":10,\"title\":\"Waifu Body Pillow\",\"price\":89.99,\"tags\":[\"home\",\"decor\"],\"image\":\"assets/waifu_body_pillow.avif\",\"description\":\"Comfortable body pillow with a unique design.\"}]');\n\n//# sourceURL=webpack://shopify-simulator/./data/products.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;