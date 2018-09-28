console.log('it is linked');
const canvas = (document).getElementById("my-canvas");
const ctx = canvas.getContext("2d");


// The board is generated by using two for loops that are less than 8 since the board is
// 8x8. The logic within the loops compares the location of x and y. If you mod x and y 
// by 2 and they equal to each other it will paint a 100x100 square black. If they are 
// not equal it will paint a 100x100 square red. This each loop runs 7 times painting each
// square as it goes.


const checkerBoard = {
	color1: 'black',
	color2: 'red',
	color() {
		for(let i = 0; i < 8; i++){
			for(let j = 0; j < 8; j++){
				if(i % 2 == j % 2){
					ctx.fillStyle = this.color1;
					ctx.fillRect(100 * i, 100 * j, 100, 100);
				} else {
					ctx.fillStyle = this.color2;
					ctx.fillRect(100 * i, 100 * j, 100, 100);
				}
			}
		}
	
	}
}

checkerBoard.color()

const makeBoard = () => {
	for(let i = 0; i <= canvas.width; i+= 100){
		ctx.beginPath();
		ctx.moveTo(i, 0);
		ctx.lineTo(i, canvas.width);
		ctx.stroke()
		ctx.closePath()
		ctx.beginPath();
		ctx.moveTo(0, i);
		ctx.lineTo(canvas.width, i);
		ctx.stroke()
		ctx.closePath();
	}
	
}
makeBoard()

const clearRect = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// This event listener will find specific keydown presses within the document

$(document).on('keydown', (e) => {
	console.log(e);
	// 
	if(e.keyCode === 71){
		checkerBoard.color2 = 'green'
		console.log('g');
	// if the g key is pressed it will change the color of the red tiles green
	} else if(e.keyCode === 89){
		checkerBoard.color2 = 'purple'
		console.log('y');
	// if the y key is pressed it will change the color of the red tiles purple
	} else if(e.keyCode === 82){
		console.log('r');
		checkerBoard.color2 = 'red'
	// if the r key is pressed it will change the color of the red tiles red again
	} else if(e.keyCode === 87){
		checkerBoard.color1 = 'white'
		console.log('w');
	// if the g key is pressed it will change the color of the black tiles white
	} else if(e.keyCode === 66){
		checkerBoard.color1 = 'black'
		console.log('b');
	// if the b key is pressed it will change the color of the black tiles black
	} else if(e.keyCode === 13){
		checkerBoard.color1 = 'black';
		checkerBoard.color2 = 'red'
	// if the enter key is pressed it will change the color of the red tiles back to red
	// and the black tiles back to black
	}
	// This function will clear the board after key press
	clearRect()
	// This function will redraw the board with the new values after key press
	checkerBoard.color()
})


