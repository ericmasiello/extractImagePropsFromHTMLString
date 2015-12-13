/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var getPropFromSource = function getPropFromSource(html, prop) {

	  if (typeof html !== 'string') {

	    return '';
	  }

	  var regex = new RegExp('<img.*?' + prop + '="(.*?)"|<img.*?' + prop + '=\'(.*?)\'/');
	  var matches = html.match(regex);

	  if (Array.isArray(matches) === false || matches.length < 2) {

	    return '';
	  }

	  return matches[1];
	};

	module.exports = {
	  getSource: function getSource(html) {

	    return getPropFromSource(html, 'src');
	  },
	  getAltText: function getAltText(html) {

	    return getPropFromSource(html, 'alt');
	  },
	  getWidth: function getWidth(html) {

	    return getPropFromSource(html, 'width');
	  },
	  getHeight: function getHeight(html) {

	    return getPropFromSource(html, 'height');
	  }
	};

/***/ }
/******/ ]);