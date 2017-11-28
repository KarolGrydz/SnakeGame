import snake from "./snake.js";

let map = {

	stopRight: false,
	stopLeft: false,
	stopUp: false,
	stopDown: false,

	preventRight: true,
	preventLeft: true,
	preventUp: true,
	preventDown: true,

	snakeMoves: [snake.snakeBody[0].firstColumn, snake.snakeBody[0].secondColumn, snake.snakeBody.length,],

	points: 0,

	getCell(firstColumn, secondColumn) {
		let first = firstColumn.toString();
		let second = secondColumn.toString();
		let cell = document.getElementById(first + second);
		return cell;
	},

	whiteCell(first, second) {
		let cell = this.getCell(first, second);
		cell.setAttribute("class", "no-active");
		return cell;
	},

	snakeHeadCell(first, second) {
		let cell = this.getCell(first, second);
		cell.setAttribute("class", "snake-head");
		return cell;
	},

	snakeBodyCell(first, second) {
		let cell = this.getCell(first, second);
		cell.setAttribute("class", "snake-body");
		return cell;
	},

	food() {
		let first = function() {
			let num = Math.floor( (Math.random() * 10) );
			if (num !== 9) {
				return num;
			} else {
				return first();
			}
		} 
		let second = function() {
			let num = Math.floor( (Math.random() * 10) );
			if (num !== 9) {
				return num;
			} else {
				return second();
			}
		}

		return [first(), second()];

	},

	getFood() {
		let crumb = this.food();
		snake.snakeFood = crumb;
		let first = crumb[0].toString();
		let second = crumb[1].toString();
		let cell = document.getElementById(first + second);
		return cell;
	},

	showFood() {
		map.earnPoints();
		let cell = this.getFood();
		cell.setAttribute("class", "food");
		return cell;
	},

	stopFromOtherMoves(v1, v2, v3, v4) {
		this.stopLeft = v1;
		this.stopRight = v2;
		this.stopDown = v3;
		this.stopUp = v4;
	},

	preventFromDoubleClick(v1, v2, v3, v4) {
		this.preventRight = v1;
		this.preventLeft = v2;
		this.preventDown = v3;
		this.preventUp = v4;
	},

	move(n) {
		if (n <= 0) {

    	} else {
			snake.snakeBody[n].firstColumn = snake.snakeBody[n-1].firstColumn;
			snake.snakeBody[n].secondColumn = snake.snakeBody[n-1].secondColumn;

			map.snakeBodyCell(snake.snakeBody[n].firstColumn, snake.snakeBody[n].secondColumn);

        	return this.move(n-1);
    	}
	},

	movingLeft() {
		let start = setInterval(function(){

			map.stopLeft === true ? clearInterval(start): "" ;
	
			let first = snake.snakeBody[0].firstColumn;
			let second = snake.snakeBody[0].secondColumn;
			let length = snake.snakeBody.length;
			let cellToWhite = snake.snakeBody[length-1].secondColumn;
			let cellToWhite2 = snake.snakeBody[length-1].firstColumn;

			map.move(length-1);

			second = snake.turnLeft(second);

			let activeCell = map.snakeBodyCell(first, second);

			snake.snakeBody[0].secondColumn = second;
				
			map.whiteCell(cellToWhite2, cellToWhite);
				
			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);
				
			let end = map.gameOver();
			let endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start): "" ;

		},150);
	},

	movingRight() {
		let start = setInterval(function(){

			map.stopRight === true ? clearInterval(start): "" ;

			let first = snake.snakeBody[0].firstColumn;
			let second = snake.snakeBody[0].secondColumn;
			let length = snake.snakeBody.length;
			let cellToWhite = snake.snakeBody[length-1].secondColumn;
			let cellToWhite2 = snake.snakeBody[length-1].firstColumn;

			map.move(length-1);

			second = snake.turnRight(second);
			let activeCell = map.snakeBodyCell(first, second);

			snake.snakeBody[0].secondColumn = second;
			
			map.whiteCell(cellToWhite2, cellToWhite);
				
			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);

			let end = map.gameOver();
			let endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start): "" ;

		},150);
	},

	movingUp() {
		let start = setInterval(function(){

			map.stopUp === true ? clearInterval(start): "" ;

			let first = snake.snakeBody[0].firstColumn;
			let second = snake.snakeBody[0].secondColumn;
			let length = snake.snakeBody.length;
			let cellToWhite = snake.snakeBody[length-1].secondColumn;
			let cellToWhite2 = snake.snakeBody[length-1].firstColumn;

			map.move(length-1);

			first = snake.turnUp(first);

			let activeCell = map.snakeBodyCell(first, second);

			snake.snakeBody[0].firstColumn = first;

			map.whiteCell(cellToWhite2, cellToWhite);

			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);
			
			let end = map.gameOver();
			let endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start): "" ;

		},150);
	},

	movingDown() {
		let start = setInterval(function(){

			map.stopDown === true ? clearInterval(start): "" ;

			let first = snake.snakeBody[0].firstColumn;
			let second = snake.snakeBody[0].secondColumn;
			let length = snake.snakeBody.length;
			let cellToWhite = snake.snakeBody[length-1].secondColumn;
			let cellToWhite2 = snake.snakeBody[length-1].firstColumn;
			let activeCell, end, endTrue;

			map.move(length-1);

			first = snake.turnDown(first);
			activeCell = map.snakeBodyCell(first, second);

			snake.snakeBody[0].firstColumn = first;

			
			map.whiteCell(cellToWhite2, cellToWhite);

			map.eatingFood(activeCell, cellToWhite2, cellToWhite);

			map.snakeHeadCell(first, second);

			end = map.gameOver();
			endTrue = map.isGameOverTrue(end);
			endTrue === true ? clearInterval(start): "" ;

		},150);
	},

	gameOver() {
		let s = snake.snakeBody;
		for (let i = 0; i <= s.length - 1; i++) {
			for(let j = 0; j <= s.length - 1; j++) {
				if (s[i] != s[j]) {
					if (s[i].firstColumn === s[j].firstColumn && s[i].secondColumn === s[j].secondColumn) {
						return true;
					}
				}
			}
		}
	},

	isGameOverTrue(value) {
		if (value === true) {
			let text = `~~~~Game Over!~~~~ \nYou get ${this.points}`;
				alert(text);
				map.preventFromDoubleClick(false, false, false, false);
				return true;
		}
	},

	eatingFood(val1, val2, val3) {
		if (_f.className === val1.className) {
				_f = map.showFood();
				let nextSnakeCell = new snake.addNextSnakeBody(val2, val3);
				snake.snakeBody.push(nextSnakeCell);
				map.snakeBodyCell(val2, val3);
		}
	},

	earnPoints() {
		let gamePoint = map.points;
		document.getElementsByClassName("points")[0].innerHTML = gamePoint;
		gamePoint += 50;
		map.points = gamePoint;
	},

}

let _f = map.showFood();

export default map;