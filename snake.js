// lesson 13

//	define function that draws the snake
var draw = function (snakeToDraw, apple) {
	var drawableSnake = { color: "green", pixels: snakeToDraw };	// declare snake color & pixels
	var drawableApple = { color: "red", pixels: [apple] };
	var drawableObjects = [drawableSnake, drawableApple];	// array variable for all objects to be drawn
	CHUNK.draw(drawableObjects);	// call draw function
}

// function to move in 4 directions.  a series of 'if else' statements to determine what direction to move
var moveSegment = function(segment) {

	// moves the snake by adjusting the margins 'left' or 'top'
	switch(segment.direction) {
		case "down":
			//segment.top++;
			//break;
			return { top: segment.top + 1, left: segment.left };
		case "up":
			//segment.top--;
			//break;
			return { top: segment.top - 1, left: segment.left };
		case "right":
			//segment.left++;
			//break;
			return { top: segment.top, left: segment.left + 1};
		case "left":
			//segment.left--;
			//break;
			return { top: segment.top, left: segment.left - 1};
		default:
			// return new segment coordinates
			return segment;
	}
}

var moveSnake = function (snake) {
	var newSnake = [];	// create a new snake array variable
	snake.forEach(function(oldSegment) {	// loop through snake array 
		var newSegment = moveSegment(oldSegment);
		newSegment.direction = oldSegment.direction;	// set direction for new segment same as old segment
		newSnake.push(newSegment);	//	add that segment to newSnake array;
	});

	return newSnake;
}

var segmentFurtherForwardThan = function (index, snake) {
	return snake[index - 1] || snake[index];
}

var growSnake = function (snake) {
	var indexOfLastSegment = snake.length - 1;
	var lastSegment = snake[snake.length - 1];
	snake.push({ top: lastSegment.top, left: lastSegment.left });
	return snake;
}

// function to move snake 1 pixel in the direction determined by moveSegment function
var moveSnake = function (snake) {
	return snake.map(function(oldSegment, segmentIndex) {
		//var oldSegment = snake[0];
		var newSegment = moveSegment(oldSegment);	//	get new coordinates from moveSegment function
		newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;	// keeps the same direction
		//var newSnake = [newSegment];	// puts new coordinates into newSnake array variable
		return newSegment;	// returns snake with new coordinates
	});
}

var ate = function (snake, otherThing) {
	var head = snake[0];
	return CHUNK.detectCollisionBetween([head], otherThing);
}

// function to move the snake by updating its coordinates and redrawing the snake
var advanceGame = function() {
	var newSnake = moveSnake(snake);

	if (ate(newSnake, snake)) {	// if snake eats itself
		CHUNK.endGame();
		CHUNK.flashMessage("Woops!  You ate yourself!");
	} else if (ate(newSnake, [apple])) {	// if snake eats apple
		snake = growSnake(snake);
		apple = CHUNK.randomLocation();
	} else if (ate(newSnake, CHUNK.gameBoundaries())) {	// if snake hits the wall
		CHUNK.endGame();
		CHUNK.flashMessage("Whoops! you hit a wall!");
	} else {
		snake = newSnake;
		draw(snake, apple);	
	}
}

// function changes direction based on the key press entered
var changeDirection = function(direction) {
	snake[0].direction = direction;
}

//	create an array object snake and object apple with starting coordinates and direction of movement
var apple = CHUNK.randomLocation();
var snake = [{ top: 1, left: 0, direction: "down"}, { top: 0, left: 0, direction: "down"}];	

//	executes the function advanceGame every 1 second. 
CHUNK.executeNTimesPerSecond(advanceGame, 3);

// user inputs the direction snake will go
CHUNK.onArrowKey(changeDirection);


/* Q & A's

*/












