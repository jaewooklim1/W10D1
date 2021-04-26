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

eval("class DOMNodeCollection {\r\n  constructor(arr){\r\n    //array of HTML elements\r\n    this.arr = arr;\r\n  }\r\n\r\n  html(string) {\r\n\r\n    if (string) { \r\n      this.arr.forEach(function(ele) {\r\n        ele.innerHTML = string;       \r\n      })\r\n    } else {\r\n      return this.arr[0].innerHTML;\r\n    }\r\n  }\r\n\r\n  empty() {\r\n    this.arr.forEach(function(ele) {\r\n      ele.innerHTML = \"\";       \r\n    })\r\n  }\r\n\r\n  append(arg) {\r\n    if(typeof(arg) === \"string\"){\r\n      this.arr.forEach(function(ele) {\r\n        ele.innerHTML += arg;\r\n      }) \r\n    } else if(arg instanceof HTMLElement) {\r\n      // debugger\r\n      this.arr.forEach(function(ele) {\r\n        let clone = arg.cloneNode(true);\r\n        ele.appendChild(clone);\r\n   \r\n        // debugger\r\n        // arg.outerHTML = ele.innerHTML;\r\n      }) \r\n    } else {\r\n      this.arr.forEach(function(ele1) {\r\n\r\n        if (Array.isArray(arg.arr)) {\r\n          arg.arr.forEach(function(ele2){\r\n            let clone = ele2.cloneNode(true);\r\n            ele1.appendChild(clone);        \r\n        })\r\n        } else {  \r\n          // debugger\r\n          let clone = arg.arr.cloneNode(true);\r\n          ele1.appendChild(clone);\r\n        }\r\n      }) \r\n    }\r\n  }\r\n\r\n  attr(attributeName, value) {\r\n   if (value) {\r\n     this.arr.forEach(function(ele){\r\n       ele.setAttribute(attributeName, value);\r\n     })\r\n   } else {\r\n     return this.arr[0].getAttribute(attributeName);\r\n   }\r\n    \r\n  }\r\n\r\n  addClass(className) {\r\n    if (typeof (className) === \"string\") {\r\n      let classNames = className.split(\" \");\r\n      this.arr.forEach(function(ele){\r\n        // ele.classList.add(classNames);\r\n        classNames.forEach(function(name){\r\n          ele.classList.add(name);\r\n        })\r\n      })\r\n    } else if (Array.isArray(className)) {\r\n      this.arr.forEach(function(ele) {\r\n        // ele.classList.add(className);\r\n        className.forEach(function(name){\r\n          ele.classList.add(name);\r\n        })\r\n      })\r\n    }\r\n  }\r\n\r\n  removeClass(className) {\r\n    if (typeof (className) === \"string\") {\r\n      let classNames = className.split(\" \");\r\n      this.arr.forEach(function(ele){\r\n        // ele.classList.remove(classNames);\r\n        classNames.forEach(function(name){\r\n          ele.classList.remove(name);\r\n        })\r\n      })\r\n    } else if (Array.isArray(className)) {\r\n      this.arr.forEach(function(ele) {\r\n        // ele.classList.remove(className);\r\n        className.forEach(function(name){\r\n          ele.classList.remove(name);\r\n        })\r\n      })    \r\n    }\r\n  }\r\n\r\n  children(){\r\n    let childNodes = [];\r\n    this.arr.forEach(function(ele){\r\n      const nodeList = ele.children;\r\n      childNodes = childNodes.concat(Array.from(nodeList));\r\n    })\r\n    return new DOMNodeCollection(childNodes);\r\n  }\r\n\r\n  parent(){\r\n    let parentNodes = [];\r\n    this.arr.forEach(function(ele){\r\n      parentNodes.push(ele.parentNode);\r\n    })\r\n    parentNodes = Array.from(new Set(parentNodes))\r\n    return new DOMNodeCollection(parentNodes);\r\n  }\r\n  \r\n  find(selector){\r\n    let childNodes = [];\r\n    this.arr.forEach(function(ele){\r\n      const nodeList = ele.querySelectorAll(selector);\r\n      childNodes = childNodes.concat(Array.from(nodeList));\r\n    })\r\n    return new DOMNodeCollection(childNodes);\r\n  }\r\n\r\n  remove(){\r\n    this.arr.forEach(function(ele){\r\n      ele.remove()\r\n    })\r\n  }\r\n\r\n  on(typeOfEvent, callback){\r\n    this.arr.forEach(function(ele){\r\n      \r\n      ele.addEventListener(typeOfEvent, callback);\r\n      ele.listeners = ele.listeners || [];\r\n      ele.listeners.push(callback);\r\n    })\r\n  }\r\n\r\n  off(typeOfEvent){\r\n    this.arr.forEach(function(ele){\r\n      ele.listeners.forEach(function(listener){\r\n        ele.removeEventListener(typeOfEvent, listener)\r\n      })    \r\n    })\r\n  }\r\n\r\n}\r\n\r\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// window.$l(oneArg)\r\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\")\r\n\r\nconst $l = function(arg){\r\n  // debugger\r\n  if(typeof(arg) === \"string\"){\r\n    // debugger\r\n    let nodeList = document.querySelectorAll(arg);\r\n    let nodeArr = Array.from(nodeList);\r\n    return nodeArr;\r\n  } else if (arg instanceof HTMLElement){\r\n    return new DOMNodeCollection(arg);\r\n  }\r\n}\r\n\r\nwindow.DOMNodeCollection = DOMNodeCollection;\r\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

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