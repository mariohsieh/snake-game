var snake = [{ top: 0, left: 0}];	//	create a snake variable positioned at the top left corner
var drawableSnake = { color: "green", pixels: snake };
//CHUNK.draw([drawableSnake]);

var wall = [{ top: 10, left: 10 }];
var drawableWall = { color: "yellow", pixels: wall };
CHUNK.draw([drawableSnake, drawableWall]);

/*
//	define function that draws the snake
var drawSnake = function (snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snake };
	var drawableObjects = [drawableSnake];
	CHUNK.draw(drawableObjects);
}

var snake = [{ top: 0, left: 0}];	//	create a snake variable positioned at the top left corner
drawSnake(snake);	// call function;
*/
