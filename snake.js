
//	define function that draws the snake
var drawSnake = function (snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };	// declare snake color & pixels
	var drawableObjects = [drawableSnake];	// array variable for all objects to be drawn
	CHUNK.draw(drawableObjects);	// call draw function
}

var snake = [{ top: 0, left: 0}];	//	create an array variable snake with starting coordinates
drawSnake(snake);	// call drawSnake function;

// function to add 1 pixel to the top border and returns the new coordinates
var moveSnake = function (snake) {
	var oldSegment = snake[0];
	var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };	// adds 1 to the top margin
	var newSnake = [newSegment]; // puts snake with new coordinates into an array
	return newSnake;	// returns snake with new coordinates
}

// function to move the snake by updating its coordinates and redrawing the snake
var advanceGame = function() {
	snake = moveSnake(snake);
	drawSnake(snake);	
}

//	executes the function advanceGame every 1 second. 
CHUNK.executeNTimesPerSecond(advanceGame, 1);


// if done correctly, snake will travel down automatically

/* Q & A's
How can you increase the speed at which the snake moves?
	2 ways:
		-increase the redraw speed of CHUNK.executeNTimesPerSecond
		-increase the movement of moveSnake.  (i.e: '+2' or '+3')
*/
