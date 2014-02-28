
//	define function that draws the snake
var drawSnake = function (snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };	// declare snake color & pixels
	var drawableObjects = [drawableSnake];	// array variable for all objects to be drawn
	CHUNK.draw(drawableObjects);	// call draw function
}

// function to move in 4 directions.  a series of 'if else' statements to determine what direction to move
var moveSegment = function(segment) {

	if (segment.direction == "down") {
		return { top: segment.top + 1, left: segment.left }
	} else if (segment.direction == "up") {
		return { top: segment.top - 1, left: segment.left }
	} else if (segment.direction == "right") {
		return { top: segment.top, left: segment.left + 1 }
	} else if (segment.direction == "left") {
		return { top: segment.top, left: segment.left - 1}
	}

/*
	// moves the snake by adjusting the margins 'left' or 'top'
	switch(segment.direction) {
		case "down":
			//return { top: segment.top + 1, left: segment.left }
			segment.top++;
			break;
		case "up":
			//return { top: segment.top - 1, left: segment.left }
			segment.top--;
			break;
		case "right":
			//return { top: segment.top, left: segment.left + 1 }
			segment.left++;
			break;
		case "left":
			//return { top: segment.top, left: segment.left - 1 }
			segment.left--;
			break;
		default:
	}
*/

	return segment;

}

// function to move snake 1 pixel in the direction determined by moveSegment function
var moveSnake = function (snake) {
	var oldSegment = snake[0];
	var newSegment = moveSegment(oldSegment);	//	get new coordinates from moveSegment function
	newSegment.direction = oldSegment.direction;	// keeps the same direction
	var newSnake = [newSegment];	// puts new coordinates into newSnake array variable
	return newSnake;	// returns snake with new coordinates
}

//	create an array variable snake with starting coordinates and direction of movement
var snake = [{ top: 0, left: 0, direction: "down"}];	

// function to move the snake by updating its coordinates and redrawing the snake
var advanceGame = function() {
	snake = moveSnake(snake);
	drawSnake(snake);	
}

//	executes the function advanceGame every 1 second. 
CHUNK.executeNTimesPerSecond(advanceGame, 1);


/* Q & A's
Use a switch statement instead of 'if else'
	
	switch(segment.direction) {
		case "down":
			return { top: segment.top + 1, left: segment.left }
			break;
		case "up":
			return { top: segment.top - 1, left: segment.left }
			break;
		case "right":
			return { top: segment.top, left: segment.left + 1 }
			break;
		case "left":
			return { top: segment.top, left: segment.left - 1 }
			break;
		default:
	}

Change the starting snake's segments to ensure all the directions work
	var snake = [{ top: 10, left: 10, direction: "left"}];
*/












