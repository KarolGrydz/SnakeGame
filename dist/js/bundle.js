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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var snake = {

	startSnakePositionFirstColumn: 4,
	startSnakePositionSecondColumn: 4,

	snakeBody: [{
		firstColumn: 4,
		secondColumn: 4
	}],
	snakeFood: 0,

	start: function start() {
		var first = snake.startSnakePositionFirstColumn;
		var second = snake.startSnakePositionSecondColumn;
		var snakeNextBody = new snake.addNextSnakeBody(first, second);
		snake.snakeBody.push(snakeNextBody);
	},

	addNextSnakeBody: function addNextSnakeBody(first, second) {
		this.firstColumn = first;
		this.secondColumn = second;
	},

	turnRight: function turnRight(value) {
		return value === 8 ? value = 0 : value += 1;
	},

	turnLeft: function turnLeft(value) {
		return value === 0 ? value = 8 : value -= 1;
	},

	turnDown: function turnDown(value) {
		return value === 8 ? value = 0 : value += 1;
	},

	turnUp: function turnUp(value) {
		return value === 0 ? value = 8 : value -= 1;
	}

};

exports.default = snake;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _snake = __webpack_require__(0);

var _snake2 = _interopRequireDefault(_snake);

var _map = __webpack_require__(2);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("keydown", function (event) {
				if (event.key === "ArrowUp") {
								if (_map2.default.preventUp === true) {

												_map2.default.preventFromDoubleClick(true, true, false, false);

												_map2.default.stopFromOtherMoves(true, true, false, false);

												_map2.default.movingUp();
								}
				}

				if (event.key === "ArrowDown") {
								if (_map2.default.preventDown === true) {

												_map2.default.preventFromDoubleClick(true, true, false, false);

												_map2.default.stopFromOtherMoves(true, true, false, false);

												_map2.default.movingDown();
								}
				}

				if (event.key === "ArrowLeft") {
								if (_map2.default.preventLeft === true) {

												_map2.default.preventFromDoubleClick(false, false, true, true);

												_map2.default.stopFromOtherMoves(false, false, true, true);

												_map2.default.movingLeft();
								}
				}

				if (event.key === "ArrowRight") {
								if (_map2.default.preventRight === true) {

												_map2.default.preventFromDoubleClick(false, false, true, true);

												_map2.default.stopFromOtherMoves(false, false, true, true);

												_map2.default.movingRight();
								}
				}
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _snake = __webpack_require__(0);

var _snake2 = _interopRequireDefault(_snake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var map = {

	stopRight: false,
	stopLeft: false,
	stopUp: false,
	stopDown: false,

	preventRight: true,
	preventLeft: true,
	preventUp: true,
	preventDown: true,

	snakeMoves: [_snake2.default.snakeBody[0].firstColumn, _snake2.default.snakeBody[0].secondColumn, _snake2.default.snakeBody.length],

	points: 0,

	getCell: function getCell(firstColumn, secondColumn) {
		var first = firstColumn.toString();
		var second = secondColumn.toString();
		var cell = document.getElementById(first + second);
		return cell;
	},
	whiteCell: function whiteCell(first, second) {
		var cell = this.getCell(first, second);
		cell.setAttribute("class", "no-active");
		return cell;
	},
	snakeHeadCell: function snakeHeadCell(first, second) {
		var cell = this.getCell(first, second);
		cell.setAttribute("class", "snake-head");
		return cell;
	},
	snakeBodyCell: function snakeBodyCell(first, second) {
		var cell = this.getCell(first, second);
		cell.setAttribute("class", "snake-body");
		return cell;
	},
	food: function food() {
		var first = function first() {
			var num = Math.floor(Math.random() * 10);
			if (num !== 9) {
				return num;
			} else {
				return first();
			}
		};
		var second = function second() {
			var num = Math.floor(Math.random() * 10);
			if (num !== 9) {
				return num;
			} else {
				return second();
			}
		};

		return [first(), second()];
	},
	getFood: function getFood() {
		var crumb = this.food();
		_snake2.default.snakeFood = crumb;
		var first = crumb[0].toString();
		var second = crumb[1].toString();
		var cell = document.getElementById(first + second);
		return cell;
	},
	showFood: function showFood() {
		map.earnPoints();
		var cell = this.getFood();
		cell.setAttribute("class", "food");
		return cell;
	},
	stopFromOtherMoves: function stopFromOtherMoves(v1, v2, v3, v4) {
		this.stopLeft = v1;
		this.stopRight = v2;
		this.stopDown = v3;
		this.stopUp = v4;
	},
	preventFromDoubleClick: function preventFromDoubleClick(v1, v2, v3, v4) {
		this.preventRight = v1;
		this.preventLeft = v2;
		this.preventDown = v3;
		this.preventUp = v4;
	},
	move: function move(n) {
		if (n <= 0) {} else {
			_snake2.default.snakeBody[n].firstColumn = _snake2.default.snakeBody[n - 1].firstColumn;
			_snake2.default.snakeBody[n].secondColumn = _snake2.default.snakeBody[n - 1].secondColumn;

			map.snakeBodyCell(_snake2.default.snakeBody[n].firstColumn, _snake2.default.snakeBody[n].secondColumn);

			return this.move(n - 1);
		}
	},
	movingLeft: function movingLeft() {
		var start = setInterval(function () {

			map.stopLeft === true ? clearInterval(start) : "";

			var first = _snake2.default.snakeBody[0].firstColumn;
			var second = _snake2.default.snakeBody[0].secondColumn;
			var length = _snake2.default.snakeBody.length;
			var cellToWhite = _snake2.default.snakeBody[length - 1].secondColumn;
			var cellToWhite2 = _snake2.default.snakeBody[length - 1].firstColumn;

			map.move(length - 1);

			second = _snake2.default.turnLeft(second);

			var activeCell = map.snakeBodyCell(first, second);

			_snake2.default.snakeBody[0].secondColumn = second;

			map.whiteCell(cellToWhite2, cellToWhite);

			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);

			var end = map.gameOver();
			var endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start) : "";
		}, 150);
	},
	movingRight: function movingRight() {
		var start = setInterval(function () {

			map.stopRight === true ? clearInterval(start) : "";

			var first = _snake2.default.snakeBody[0].firstColumn;
			var second = _snake2.default.snakeBody[0].secondColumn;
			var length = _snake2.default.snakeBody.length;
			var cellToWhite = _snake2.default.snakeBody[length - 1].secondColumn;
			var cellToWhite2 = _snake2.default.snakeBody[length - 1].firstColumn;

			map.move(length - 1);

			second = _snake2.default.turnRight(second);
			var activeCell = map.snakeBodyCell(first, second);

			_snake2.default.snakeBody[0].secondColumn = second;

			map.whiteCell(cellToWhite2, cellToWhite);

			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);

			var end = map.gameOver();
			var endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start) : "";
		}, 150);
	},
	movingUp: function movingUp() {
		var start = setInterval(function () {

			map.stopUp === true ? clearInterval(start) : "";

			var first = _snake2.default.snakeBody[0].firstColumn;
			var second = _snake2.default.snakeBody[0].secondColumn;
			var length = _snake2.default.snakeBody.length;
			var cellToWhite = _snake2.default.snakeBody[length - 1].secondColumn;
			var cellToWhite2 = _snake2.default.snakeBody[length - 1].firstColumn;

			map.move(length - 1);

			first = _snake2.default.turnUp(first);

			var activeCell = map.snakeBodyCell(first, second);

			_snake2.default.snakeBody[0].firstColumn = first;

			map.whiteCell(cellToWhite2, cellToWhite);

			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);

			var end = map.gameOver();
			var endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start) : "";
		}, 150);
	},
	movingDown: function movingDown() {
		var start = setInterval(function () {

			map.stopDown === true ? clearInterval(start) : "";

			var first = _snake2.default.snakeBody[0].firstColumn;
			var second = _snake2.default.snakeBody[0].secondColumn;
			var length = _snake2.default.snakeBody.length;
			var cellToWhite = _snake2.default.snakeBody[length - 1].secondColumn;
			var cellToWhite2 = _snake2.default.snakeBody[length - 1].firstColumn;
			var activeCell = void 0,
			    end = void 0,
			    endTrue = void 0;

			map.move(length - 1);

			first = _snake2.default.turnDown(first);
			activeCell = map.snakeBodyCell(first, second);

			_snake2.default.snakeBody[0].firstColumn = first;

			map.whiteCell(cellToWhite2, cellToWhite);

			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);

			end = map.gameOver();
			endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start) : "";
		}, 150);
	},
	gameOver: function gameOver() {
		var s = _snake2.default.snakeBody;
		for (var i = 0; i <= s.length - 1; i++) {
			for (var j = 0; j <= s.length - 1; j++) {
				if (s[i] != s[j]) {
					if (s[i].firstColumn === s[j].firstColumn && s[i].secondColumn === s[j].secondColumn) {
						return true;
					}
				}
			}
		}
	},
	isGameOverTrue: function isGameOverTrue(value) {
		if (value === true) {
			var text = "~~~~Game Over!~~~~ \nYou get " + this.points;
			alert(text);
			map.preventFromDoubleClick(false, false, false, false);
			return true;
		}
	},
	eatingFood: function eatingFood(val1, val2, val3) {
		if (_f.className === val1.className) {
			_f = map.showFood();
			var nextSnakeCell = new _snake2.default.addNextSnakeBody(val2, val3);
			_snake2.default.snakeBody.push(nextSnakeCell);
			map.snakeBodyCell(val2, val3);
		}
	},
	earnPoints: function earnPoints() {
		var gamePoint = map.points;
		document.getElementsByClassName("points")[0].innerHTML = gamePoint;
		gamePoint += 50;
		map.points = gamePoint;
	}
};

var _f = map.showFood();

exports.default = map;

/***/ })
/******/ ]);