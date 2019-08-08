/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  //variables\n  let grid = document.querySelector(\"div.grid\");\n  let button = document.querySelector(\".showBtn\");\n  let images = [];\n  let category = \"show all\";\n  let imagesToDisplay = [];\n  let loaded = \"false\";\n  let clicked = false; //get Api data\n\n  fetch(\"http://www.splashbase.co/api/v1/images/search?query=tree\").then(response => response.json()).then(response => {\n    filterImages(response.images);\n  });\n\n  const changeLoadedStatus = () => {\n    loaded = \"true\";\n\n    if (loaded == \"true\") {\n      if (document.querySelector(\".load\") !== null) {\n        document.querySelector(\".load\").setAttribute(\"class\", \"hidden\");\n      }\n\n      button.classList.remove(\"hidden\");\n      grid.classList.remove(\"hidden\");\n    }\n  }; //Filter Images based on category\n\n\n  const filterImages = response => {\n    images = response;\n\n    if (category === \"show all\") {\n      imagesToDisplay = images;\n    } else if (category === \"unsplash\") {\n      imagesToDisplay = images.filter(image => image.site === \"unsplash\");\n    } else if (category === \"littlevisuals\") {\n      imagesToDisplay = images.filter(image => image.site === \"littlevisuals\");\n    } else if (category === \"travelcoffeebook\") {\n      imagesToDisplay = images.filter(image => image.site === \"travelcoffeebook\");\n    } else if (category === \"jaymantri\") {\n      imagesToDisplay = images.filter(image => image.site === \"jaymantri\");\n    }\n\n    bulidGrid(imagesToDisplay);\n  }; //display Images\n\n\n  const bulidGrid = response => {\n    let imagesArray = [];\n    let counter = 0;\n    grid.innerHTML = \"\";\n\n    for (let i = 0; i < response.length; i++) {\n      let image = response[i].url;\n      let newImage = document.createElement(\"img\");\n      imagesArray.push(newImage);\n      newImage.setAttribute(\"src\", image);\n      newImage.setAttribute(\"class\", \"hidden\");\n      newImage.addEventListener(\"click\", () => {\n        fullScreenShow(image);\n      });\n      grid.appendChild(newImage);\n\n      newImage.onload = () => {\n        counter++;\n\n        if (counter === response.length) {\n          changeLoadedStatus();\n        }\n      };\n    }\n\n    active();\n  };\n\n  const changeClass = () => {\n    let filterButtons = document.querySelectorAll(\".filterButtons button\");\n\n    for (let i = 0; i < filterButtons.length; i++) {\n      filterButtons[i].classList.remove(\"active\");\n    }\n  }; //show only some images\n\n\n  const active = () => {\n    let images = document.querySelectorAll(\" img\");\n\n    if (images.length > 10) {\n      for (let i = 0; i < 10; i++) {\n        images[i].setAttribute(\"class\", \"active\");\n      }\n    } else {\n      for (let i = 0; i < images.length; i++) {\n        images[i].setAttribute(\"class\", \"active\");\n      }\n    }\n\n    activeAll();\n  }; //Show more images\n\n\n  const activeAll = () => {\n    button.addEventListener(\"click\", () => {\n      let images = document.querySelectorAll(\" img\");\n\n      if (clicked === false) {\n        for (let i = 0; i < images.length; i++) {\n          images[i].setAttribute(\"class\", \"active\");\n        }\n\n        button.innerText = \"SHOW LESS\";\n        clicked = true;\n      } else if (clicked == true) {\n        for (let i = 10; i < images.length; i++) {\n          images[i].setAttribute(\"class\", \"hidden\");\n        }\n\n        button.innerText = \"SHOW MORE\";\n        clicked = false;\n      }\n    });\n  }; //change category\n\n\n  const changeCategory = () => {\n    let filterButtons = document.querySelectorAll(\".filterButtons button\");\n\n    for (let i = 0; i < filterButtons.length; i++) {\n      filterButtons[i].addEventListener(\"click\", () => {\n        changeClass();\n        filterButtons[i].classList.add(\"active\");\n        category = filterButtons[i].dataset.category;\n        filterImages(images);\n        activeAll();\n        button.innerText = \"SHOW MORE\";\n        clicked = false;\n      });\n    }\n\n    activeAll();\n  }; //full screen image\n\n\n  const fullScreenShow = url => {\n    let fullImage = document.querySelector(\"div.fullScreen\");\n    fullImage.classList.remove(\"hidden\");\n    let closeButton = document.querySelector(\"div.fullScreen > button\");\n    fullImage.style.backgroundImage = `url(${url})`;\n    closeButton.addEventListener(\"click\", () => {\n      fullImage.classList.add(\"hidden\");\n    });\n  };\n\n  changeCategory();\n  activeAll();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/index.scss?");

/***/ })

/******/ });