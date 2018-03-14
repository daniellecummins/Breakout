var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var dx= 2
var dy = -2

//Draw the ball
function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x+=dx;
	y+=dy;
}

setInterval(draw, 10);

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed=false;
}
else if(e.keyCode == 37) {
	leftPressed=true;
}
}

function keyUpHandler(e){
	if(e.keyCode == 39) {
		rightPressed=false;
	}
	else if(e.KeyCode == 37){
		leftPressed=false;
	}
}

if(rightPressed) {
	paddleX += 7;
}
else if(leftPressed) {
	paddleX -= 7 ;
}

if(rightPressed && paddleX < canvas.width-paddleWidth) {
	paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
	paddleX -=7;
}


