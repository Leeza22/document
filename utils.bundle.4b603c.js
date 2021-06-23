!function(e,_){"object"==typeof exports&&"object"==typeof module?module.exports=_():"function"==typeof define&&define.amd?define([],_):"object"==typeof exports?exports.myutils=_():e.myutils=_()}(self,(function(){return(()=>{"use strict";var __webpack_modules__={"./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "amount": () => (/* reexport module object */ _lib_amount__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   "compute": () => (/* reexport module object */ _lib_compute__WEBPACK_IMPORTED_MODULE_1__)\n/* harmony export */ });\n/* harmony import */ var _lib_amount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/amount */ "./lib/amount.js");\n/* harmony import */ var _lib_compute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/compute */ "./lib/compute.js");\n\n\n\n//# sourceURL=webpack://myutils/./index.js?')},"./lib/amount.js":
/*!***********************!*\
  !*** ./lib/amount.js ***!
  \***********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AmountCapitalizedConVersion\": () => (/* binding */ AmountCapitalizedConVersion)\n/* harmony export */ });\n\nconst AmountCapitalizedConVersion = (n) => {\n\tlet fraction = ['角', '分']\n\tlet digit = [\n\t\t'零', '壹', '贰', '叁', '肆',\n\t\t'伍', '陆', '柒', '捌', '玖'\n\t];\n\tlet unit = [\n\t\t['元', '万', '亿'],\n\t\t['', '拾', '佰', '仟']\n\t];\n\tlet head = n < 0 ? '欠' : ''\n\tn = Math.abs(n)\n\tlet s = ''\n\tfor (let i = 0; i < fraction.length; i++) {\n\t\ts += (digit[Math.floor(Math.floor(n * 1000 * 10 * Math.pow(10, i)) % (10 * 1000) / 1000)] + fraction[i]).replace(\n\t\t\t/零./, '')\n\t}\n\ts = s || '整'\n\tn = Math.floor(n)\n\tfor (let i = 0; i < unit[0].length && n > 0; i++) {\n\t\tlet p = ''\n\t\tfor (let j = 0; j < unit[1].length && n > 0; j++) {\n\t\t\tp = digit[n % 10] + unit[1][j] + p\n\t\t\tn = Math.floor(n / 10)\n\t\t}\n\t\ts = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s\n\t}\n\treturn head + s.replace(/(零.)*零元/, '元')\n\t\t.replace(/(零.)+/g, '零')\n\t\t.replace(/^整$/, '零元整')\n}\n\n\n//# sourceURL=webpack://myutils/./lib/amount.js?")},"./lib/compute.js":
/*!************************!*\
  !*** ./lib/compute.js ***!
  \************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "sum": () => (/* binding */ sum),\n/* harmony export */   "mul": () => (/* binding */ mul)\n/* harmony export */ });\nfunction sum(a, b) {\n   return a + b\n}\nfunction mul(a, b) {\n  return a * b\n}\n\n//# sourceURL=webpack://myutils/./lib/compute.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,_)=>{for(var t in _)__webpack_require__.o(_,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:_[t]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./index.js");return __webpack_exports__})()}));