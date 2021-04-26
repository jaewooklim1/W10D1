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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\r\n  // constructor(arr){\r\n  //   this.arr = arr;\r\n  // }\r\n\r\n  // html(string) {\r\n\r\n  //   if (string) { \r\n  //     this.arr.forEach(function(ele) {\r\n  //       ele.innerHTML = string;       \r\n  //     })\r\n  //   } else {\r\n  //     return this.arr[0].innerHTML;\r\n  //   }\r\n  // }\r\n\r\n  // empty() {\r\n  //   this.arr.forEach(function(ele) {\r\n  //     ele.innerHTML = \"\";       \r\n  //   })\r\n  // }\r\n\r\n  // append(arg) {\r\n  //   this.arr.forEach(function(ele) {\r\n  //     debugger\r\n  //     arg.outerHTML = ele.innerHTML;\r\n  //   }) \r\n  // }\r\n\r\n\r\n}\r\n\r\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// window.$l(oneArg)\r\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\r\n\r\nconst $l = function(arg){\r\n  debugger\r\n  if(typeof(arg) === \"string\"){\r\n    debugger\r\n    let nodeList = document.querySelectorAll(arg);\r\n    let nodeArr = Array.from(nodeList);\r\n    return nodeArr;\r\n  } else if (arg instanceof HTMLElement){\r\n    return new DOMNodeCollection(arg);\r\n  }\r\n}\r\n\r\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;