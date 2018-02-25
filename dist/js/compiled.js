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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _timerProgress = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timeleft = function () {
			function Timeleft(obj) {
						_classCallCheck(this, Timeleft);

						for (var key in obj) {
									this[key + 'Name'] = obj[key];
						}

						this.target = this.targetName;

						this.block = document.createElement('canvas');
						this.block.className = this.parentName || 'output';
						this.block.width = 280;
						this.block.height = 80;
						this.element = this.block.getContext('2d');

						this.mainWrap = document.querySelector(this.mainWrapName) || document.getElementsByClassName('main')[0];
						this.mainWrap.appendChild(this.block);

						this.runTimer(this.target, this.block, this.element, this.progress);
			}

			_createClass(Timeleft, [{
						key: 'runTimer',
						value: function runTimer(target, parent, element, progress) {
									setInterval(function () {
												this.current = new Date();

												this.difference = target - this.current > 0 ? target - this.current : 0;

												this.seconds = this.difference / 1000;
												this.minutes = this.seconds / 60;
												this.hours = this.minutes / 60;
												this.days = this.hours / 24;

												this.seconds = this.seconds % 60;
												this.minutes = this.minutes % 60;
												this.hours = this.hours % 24;
												this.days = this.days % 365;

												this.seconds = parseInt(this.seconds);
												this.minutes = parseInt(this.minutes);
												this.hours = parseInt(this.hours);
												this.days = parseInt(this.days);

												this.seconds = this.seconds > 9 ? this.seconds : '0' + this.seconds;
												this.minutes = this.minutes > 9 ? this.minutes : '0' + this.minutes;
												this.hours = this.hours > 9 ? this.hours : '0' + this.hours;

												this.headingStyles = function () {
															element.textBaseline = 'middle';
															element.textAlign = 'center';
															element.fillStyle = "#FFF";
															element.font = "20pt Arial";
												};

												this.hintStyles = function () {
															element.textBaseline = 'middle';
															element.textAlign = 'center';
															element.fillStyle = "#FFF";
															element.font = "12pt Arial";
												};

												// clear each time
												element.clearRect(0, 0, parent.width, parent.height);

												// time
												this.headingStyles();
												element.fillText('' + this.days, parent.width / 8, parent.height / 2);

												this.headingStyles();
												element.fillText('' + this.hours, parent.width / 8 * 3, parent.height / 2);

												this.headingStyles();
												element.fillText('' + this.minutes, parent.width / 8 * 5, parent.height / 2);

												this.headingStyles();
												element.fillText('' + this.seconds, parent.width / 8 * 7, parent.height / 2);

												// time description
												this.hintStyles();
												element.fillText('D', parent.width / 8, parent.height / 2 + 20);

												this.hintStyles();
												element.fillText('H', parent.width / 8 * 3, parent.height / 2 + 20);

												this.hintStyles();
												element.fillText('M', parent.width / 8 * 5, parent.height / 2 + 20);

												this.hintStyles();
												element.fillText('S', parent.width / 8 * 7, parent.height / 2 + 20);

												this.progressDays = new _timerProgress.TimerProgress({
															parent: parent,
															queueNumber: 1,
															circleRadius: 1,
															total: 365,
															checkNumber: this.days
												});
												this.progressDays.paintCircles();

												this.progressHours = new _timerProgress.TimerProgress({
															parent: parent,
															queueNumber: 2,
															circleRadius: 1,
															total: 24,
															checkNumber: this.hours
												});
												this.progressHours.paintCircles();

												this.progressMinutes = new _timerProgress.TimerProgress({
															parent: parent,
															queueNumber: 3,
															circleRadius: 1,
															total: 60,
															checkNumber: this.minutes
												});
												this.progressMinutes.paintCircles();

												this.progressSeconds = new _timerProgress.TimerProgress({
															parent: parent,
															queueNumber: 4,
															circleRadius: 1,
															total: 60,
															checkNumber: this.seconds
												});
												this.progressSeconds.paintCircles();
									}, 1000);
						}
			}]);

			return Timeleft;
}();

var target = new Date(2018, 1, 25, 22, 21, 60, 0);
var timeleft = new Timeleft({
			target: target,
			parent: 'output'
});

var target2 = new Date(2018, 3, 24, 20, 32, 60, 0);
var timeleft2 = new Timeleft({
			target: target2,
			parent: 'second_output',
			mainWrap: '.timer_wrap'
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimerProgress = exports.TimerProgress = function () {
	function TimerProgress(obj) {
		_classCallCheck(this, TimerProgress);

		this.circleRadius = 2;
		this.amount = 60;

		for (var key in obj) {
			this[key] = obj[key];
		}

		switch (this.queueNumber) {
			case 1:
				this.queueNumber = 1;
				break;

			case 2:
				this.queueNumber = 3;
				break;

			case 3:
				this.queueNumber = 5;
				break;

			case 4:
				this.queueNumber = 7;
				break;

			default:
				this.queueNumber = 1;
				break;
		}

		this.highlightedCount = Math.floor(this.checkNumber / this.total * 100);
		this.highlightedCount = parseInt(this.highlightedCount * this.amount / 100);

		this.element = this.parent.getContext('2d');
	}

	_createClass(TimerProgress, [{
		key: 'paintCircles',
		value: function paintCircles() {
			this.centerCoordinateX = this.parent.width / 4 / 2 * this.queueNumber + this.circleRadius;
			this.centerCoordinateY = this.parent.height / 2;

			for (var i = 0, amount = this.amount; i < amount; i++) {
				this.coordinateX = this.centerCoordinateX + (this.parent.height / 2 - this.circleRadius - 8) * Math.cos(2 * Math.PI * i / this.amount);
				this.coordinateY = this.centerCoordinateY + (this.parent.height / 2 - this.circleRadius - 8) * Math.sin(2 * Math.PI * i / this.amount);

				this.element.beginPath();

				if (i <= this.highlightedCount) {
					this.element.fillStyle = '#FF0000';
				} else {
					this.element.fillStyle = '#FFF'; // 'rgba(0, 179, 141, .3)'
				}

				this.element.arc(this.coordinateX, this.coordinateY, this.circleRadius, 0, 360);
				this.element.fill();
			}
		}
	}]);

	return TimerProgress;
}();

/***/ })
/******/ ]);