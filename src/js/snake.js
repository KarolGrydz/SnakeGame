let snake = {

	startSnakePositionFirstColumn: 4,
	startSnakePositionSecondColumn: 4,

	snakeBody: [
		{
			firstColumn: 4,
			secondColumn: 4
		}
	],
	snakeFood: 0,

	start:function() {
		var first = snake.startSnakePositionFirstColumn;
		var second = snake.startSnakePositionSecondColumn;
		var snakeNextBody = new snake.addNextSnakeBody(first, second);
		snake.snakeBody.push(snakeNextBody);	
	},

	addNextSnakeBody: function(first, second) {
		this.firstColumn = first;
		this.secondColumn = second;	
	},

	turnRight: (value) =>  value === 8 ? value = 0 : value += 1 ,

	turnLeft: (value) =>  value === 0 ? value = 8 : value -= 1 ,

	turnDown: (value) =>  value === 8 ? value = 0 : value += 1 ,

	turnUp: (value) =>  value === 0 ? value = 8 : value -= 1 ,

}

export default snake;