console.log('it is linked');
const canvas = (document).getElementById("my-canvas");
const ctx = canvas.getContext("2d");


// The board is generated by using two for loops that are less than 8 since the board is
// 8x8. The logic within the loops compares the location of x and y. If you mod x and y 
// by 2 and they equal to each other it will paint a 100x100 square black. If they are 
// not equal it will paint a 100x100 square red. This each loop runs 7 times painting each
// square as it goes.

class Squares {
	constructor(x, y, color){
	this.height = 100;
	this.width = 100;
	this.color = color;
	this.x = x;
	this.y = y;
	}
	draw() {
		ctx.beginPath()
		ctx.rect(this.x, this.y, this.height, this.width)
		ctx.fillStyle = this.color
		ctx.fill()
		ctx.closePath()
	}	
}


let boardArray = []

const checkerBoard = () => {
	for(let i = 0; i < 8; i++)
		for(let j = 0; j < 8; j++)
		if(i % 2 == j % 2) {
			let square = new Squares(100 * i, 100 * j, "black")
			square.draw()
			boardArray.push(square)
		} else {
			let square = new Squares(100 * i, 100 * j, "red")
			square.draw()
			boardArray.push(square)
		}

}
checkerBoard();
// console.log(boardArray);

// 	color1: 'black',
// 	color2: 'red',
// 	create() {
// 		for(let i = 0; i < 8; i++){
// 			for(let j = 0; j < 8; j++){
// 				if(i % 2 == j % 2){
// 					Squares.draw()
// 				} else {
// 					ctx.fillStyle = this.color2;
// 					ctx.fillRect(100 * i, 100 * j, 100, 100);
// 					ctx.closePath()
// 				}
// 			}
// 		}
// 	}
// }

// checkerBoard.create()



// const makeBoard = () => {
// 	for(let i = 0; i <= canvas.width; i+= 100){
// 		ctx.beginPath();
// 		ctx.moveTo(i, 0);
// 		ctx.lineTo(i, canvas.width);
// 		ctx.stroke()
// 		ctx.closePath()
// 		ctx.beginPath();
// 		ctx.moveTo(0, i);
// 		ctx.lineTo(canvas.width, i);
// 		ctx.stroke()
// 		ctx.closePath();
// 	}
	
// }

//This function will create the ball
const charBall = {
	x: 100,
	y: 100,
	r: 20,
	rads: Math.PI * 2,
	color: 'chartreuse',
	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, this.rads);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath()
	},
	moveUp() {
		this.y -= 35
	}, 
	moveDown() {
		this.y += 35	
	},
	moveRight() {
		this.x += 35
	},
	moveLeft() {
		this.x -= 35
	}
}

const collisionDetection = () => {
	for(let i = 0; i < boardArray.length; i++){
		if(charBall.x < boardArray[i].x + boardArray[i].width && 
			charBall.x + charBall.r > boardArray[i].x && 
			charBall.y < boardArray[i].y + boardArray[i].height && 
			charBall.y + charBall.r > boardArray[i].y) {
				boardArray[i].color = 'white'
				console.log(boardArray[i].color);
		}
	}
}


// 	

// makeBoard()
const clearCanvas = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)

}
// This event listener will find specific keydown presses within the document

$(document).on('keydown', (e) => {
	if(e.keyCode === 71){
		checkerBoard.color2 = 'green'
		console.log('g');
	// if the g key is pressed it will change the color of the red tiles green
	} if(e.keyCode === 89){
		checkerBoard.color2 = 'purple'
		console.log('y');
	// if the y key is pressed it will change the color of the red tiles purple
	} if(e.keyCode === 82){
		console.log('r');
		checkerBoard.color2 = 'red'
	// if the r key is pressed it will change the color of the red tiles red again
	} if(e.keyCode === 87){
		checkerBoard.color1 = 'white'
		console.log('w');
	// if the g key is pressed it will change the color of the black tiles white
	} if(e.keyCode === 66){
		checkerBoard.color1 = 'black'
		console.log('b');
	// if the b key is pressed it will change the color of the black tiles black
	} if(e.keyCode === 13){
		checkerBoard.color1 = 'black';
		checkerBoard.color2 = 'red'
	// if the enter key is pressed it will change the color of the red tiles back to red
	// and the black tiles back to black
	} 

	//This key press event will move the ball up
	if(e.keyCode === 38){
		if(charBall.y > 0){
			charBall.moveUp()
		}
	} 
	//This key press event will move the ball down
	if(e.keyCode === 40){
		if(charBall.y < 800){
			charBall.moveDown()
		}
	} 
	//This key press event will move the ball left
	if(e.keyCode === 37){
		if(charBall.x > 0){
			charBall.moveLeft()
		}
	} 
	//This key press event will move the ball right
	if(e.keyCode === 39){
		if(charBall.x < 800){
			charBall.moveRight()
		}
	} 
	// This function will clear the board after key press
	clearCanvas()
	// This function will redraw the board with the new values after key press
	checkerBoard();
	//This call will create the ball after a key is pressed
	charBall.draw()
	// this will call the collision detection function
	collisionDetection()
})

