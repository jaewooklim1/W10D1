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

eval("class DOMNodeCollection {\n  constructor(arr){\n    //array of HTML elements\n    this.arr = arr;\n  }\n\n  html(string) {\n\n    if (string) { \n      this.arr.forEach(function(ele) {\n        ele.innerHTML = string;       \n      })\n    } else {\n      return this.arr[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.arr.forEach(function(ele) {\n      ele.innerHTML = \"\";       \n    })\n  }\n\n  append(arg) {\n    if(typeof(arg) === \"string\"){\n      this.arr.forEach(function(ele) {\n        ele.innerHTML += arg;\n      }) \n    } else if(arg instanceof HTMLElement) {\n      // debugger\n      this.arr.forEach(function(ele) {\n        let clone = arg.cloneNode(true);\n        ele.appendChild(clone);\n   \n        // debugger\n        // arg.outerHTML = ele.innerHTML;\n      }) \n    } else {\n      this.arr.forEach(function(ele1) {\n\n        if (Array.isArray(arg.arr)) {\n          arg.arr.forEach(function(ele2){\n            let clone = ele2.cloneNode(true);\n            ele1.appendChild(clone);        \n        })\n        } else {  \n          // debugger\n          let clone = arg.arr.cloneNode(true);\n          ele1.appendChild(clone);\n        }\n      }) \n    }\n  }\n\n  attr(attributeName, value) {\n   if (value) {\n     this.arr.forEach(function(ele){\n       ele.setAttribute(attributeName, value);\n     })\n   } else {\n     return this.arr[0].getAttribute(attributeName);\n   }\n    \n  }\n\n  addClass(className) {\n    if (typeof (className) === \"string\") {\n      let classNames = className.split(\" \");\n      this.arr.forEach(function(ele){\n        // ele.classList.add(classNames);\n        classNames.forEach(function(name){\n          ele.classList.add(name);\n        })\n      })\n    } else if (Array.isArray(className)) {\n      this.arr.forEach(function(ele) {\n        // ele.classList.add(className);\n        className.forEach(function(name){\n          ele.classList.add(name);\n        })\n      })\n    }\n  }\n\n  removeClass(className) {\n    if (typeof (className) === \"string\") {\n      let classNames = className.split(\" \");\n      this.arr.forEach(function(ele){\n        // ele.classList.remove(classNames);\n        classNames.forEach(function(name){\n          ele.classList.remove(name);\n        })\n      })\n    } else if (Array.isArray(className)) {\n      this.arr.forEach(function(ele) {\n        // ele.classList.remove(className);\n        className.forEach(function(name){\n          ele.classList.remove(name);\n        })\n      })    \n    }\n  }\n\n  children(){\n    let childNodes = [];\n    this.arr.forEach(function(ele){\n      const nodeList = ele.children;\n      childNodes = childNodes.concat(Array.from(nodeList));\n    })\n    return new DOMNodeCollection(childNodes);\n  }\n\n  parent(){\n    let parentNodes = [];\n    this.arr.forEach(function(ele){\n      parentNodes.push(ele.parentNode);\n    })\n    parentNodes = Array.from(new Set(parentNodes))\n    return new DOMNodeCollection(parentNodes);\n  }\n  \n  find(selector){\n    let childNodes = [];\n    this.arr.forEach(function(ele){\n      const nodeList = ele.querySelectorAll(selector);\n      childNodes = childNodes.concat(Array.from(nodeList));\n    })\n    return new DOMNodeCollection(childNodes);\n  }\n\n  remove(){\n    this.arr.forEach(function(ele){\n      ele.remove()\n    })\n  }\n\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// window.$l(oneArg)\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\n\nconst $l = function(arg){\n  // debugger\n  if(typeof(arg) === \"string\"){\n    // debugger\n    let nodeList = document.querySelectorAll(arg);\n    let nodeArr = Array.from(nodeList);\n    return nodeArr;\n  } else if (arg instanceof HTMLElement){\n    return new DOMNodeCollection(arg);\n  }\n}\n\nwindow.DOMNodeCollection = DOMNodeCollection;\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

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