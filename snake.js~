
//	define function that draws the snake
var drawSnake = function (snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };	// declare snake color & pixels
	var drawableObjects = [drawableSnake];	// array variable for all objects to be drawn
	CHUNK.draw(drawableObjects);	// call draw function
}

// function to move in 4 directions.  a series of 'if else' statements to determine what direction to move
var moveSegment = function(segment) {

	// moves the snake by adjusting the margins 'left' or 'top'
	switch(segment.direction) {
		case "down":
			segment.top++;
			break;
		case "up":
			segment.top--;
			break;
		case "right":
			segment.left++;
			break;
		case "left":
			segment.left--;
			break;
		default:
	}
	// return new segment coordinates
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

// function to move the snake by updating its coordinates and redrawing the snake
var advanceGame = function() {
	snake = moveSnake(snake);
	drawSnake(snake);	
}

// function changes direction based on the key press entered
var changeDirection = function(direction) {
	snake[0].direction = direction;
}

//	create an array variable snake with starting coordinates and direction of movement
var snake = [{ top: 0, left: 0, direction: "down"}];	

//	executes the function advanceGame every 1 second. 
CHUNK.executeNTimesPerSecond(advanceGame, 1);

// user inputs the direction snake will go
CHUNK.onArrowKey(changeDirection);


/* Q & A's

*/












