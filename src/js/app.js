import snake from './snake.js';
import map from './map.js';
	
document.addEventListener("keydown", function(event) {
		if (event.key === "ArrowUp") {
			if (map.preventUp === true) {

				map.preventFromDoubleClick(true, true, false, false);

				map.stopFromOtherMoves(true, true, false, false);

				map.movingUp()		
			}
		}

		if (event.key === "ArrowDown") {
			if (map.preventDown === true) {

				map.preventFromDoubleClick(true, true, false, false);

				map.stopFromOtherMoves(true, true, false, false);
				
				map.movingDown()
			}	
		}

		if (event.key === "ArrowLeft") {
			if (map.preventLeft === true) {

				map.preventFromDoubleClick(false, false, true, true);

				map.stopFromOtherMoves(false, false, true, true);

				map.movingLeft();
			}
		}

		if (event.key === "ArrowRight") {
			if (map.preventRight === true) {

				map.preventFromDoubleClick(false, false, true, true);

				map.stopFromOtherMoves(false, false, true, true);

				map.movingRight();
			}		
		}
	})



