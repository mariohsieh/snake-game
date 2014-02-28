
//	define function that draws the snake
var drawSnake = function (snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };	// declare snake color & pixels
	var drawableObjects = [drawableSnake];	// array variable for all objects to be drawn
	CHUNK.draw(drawableObjects);	// call draw function
}

var snake = [{ top: 0, left: 0}];	//	create an array variable snake with starting coordinates
drawSnake(snake);	// call drawSnake function;

//
var moveSnake = function (snake) {
	var oldSegment = snake[0];
	var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };	// adds 1 to the top margin
	var newSnake = [newSegment]; // puts snake with new coordinates into an array
	return newSnake;	// returns snake with new coordinates
}

snake = moveSnake(snake);	// each time you call moveSnake(), the snake moves down 1 pixel
snake = moveSnake(snake);
snake = moveSnake(snake);
snake = moveSnake(snake);
drawSnake(snake);


/*
Why does adding 1 to a segments top value move it down?
	top refers to the top margin

Can you make the snake move right intead of down?
	add "+ 1" to "oldSegment.left" instead

What happens to the newSnake variable? Can you use it outside of the moveSnake function body (within the curly braces)?
	newSnake variable gets returned by the function moveSnake.
	it cannot be used outside of function body because it is a private variable.
	
Why are we re-assigning snake the results of moveSnake?
	since calling moveSnake each time moves the snake down 1 pixel, re-assigning snake the results will move snake down 1 pixel as well
*/

