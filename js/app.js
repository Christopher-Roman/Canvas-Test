console.log('it is linked');
const canvas = (document).getElementById("my-canvas");
const ctx = canvas.getContext("2d");

const colorBoard = () => {
	for(let i = 0; i < 8; i++){
		for(let j = 0; j < 8; j++){
			if(i % 2 == j % 2){
				ctx.fillStyle = "black";
				ctx.fillRect(100 * i, 100 * j, 100, 100);
			} else {
				ctx.fillStyle = "red";
				ctx.fillRect(100 * i, 100 * j, 100, 100);
			}
		}
	}
	
}


colorBoard()
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
