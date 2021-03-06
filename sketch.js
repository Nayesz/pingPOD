let colorPaddle1
let colorPaddle2

let posBallX = 300
let posBallY = 200
let radio = 10

let velocityX = 3
let velocityY = 3

let paddle1PosX = 10
let paddle1PosY = 0

let paddle2PosX = 580
let paddle2PosY = 0

let paddleWidth = 15
let paddleheight = 50

let pointsPlayer1 = 0
let pointsPlayer2 = 0

let steps = 5 
let topeSupPaddle

function setup() {
  createCanvas(600, 400)
  textSize(32)
  textAlign(CENTER, CENTER)
  colorPaddle1 = color(213, 216, 136) 
  colorPaddle2 = color(205, 101, 115) 
  topeSupPaddle = height-paddleheight

}


function draw() {
  background(125, 210, 162)
 
  if(keyIsPressed){
    actualizarPaletas()
  }


  noStroke()  
  //Player 1
  dibujarPaleta( paddle1PosX,paddle1PosY,colorPaddle1)

  //player 2
  dibujarPaleta( paddle2PosX,paddle2PosY,colorPaddle2)

  dibujarPelota()
  
  dibujarTablero()
  
  dibujarRed()
  
  //movimiento de pelota
  posBallX += velocityX
  posBallY += velocityY

  //rebote de pelota en y
  if (posBallY >= height - radio || posBallY <= radio) {
    velocityY *= -1
  }
  //Rebote de pelota en paleta
  let ballInRangeX = posBallX <= paddle1PosX + paddleWidth + radio
  let ballInRange2X = posBallX >= paddle2PosX - (paddleWidth - radio)

  if( (hayReboteEnPaletaY(paddle1PosY) && ballInRangeX ) || (hayReboteEnPaletaY(paddle2PosY) && ballInRange2X )) {
    velocityX *= -1
  }
  // anota player 1
  if(posBallX > width){
    sacarDeNuevo()
    pointsPlayer1++
  }
  // anota player 2
  if(posBallX < 0){
    sacarDeNuevo()
    pointsPlayer2++
  }
}


function actualizarPaletas(){

  if (keyCode == UP_ARROW){
    paddle2PosY= constrain(paddle2PosY-steps,0,topeSupPaddle)
  }
  if (keyCode == DOWN_ARROW){
    paddle2PosY= constrain(paddle2PosY+steps,0,topeSupPaddle)
  }
  if( key == 'w' || key == 'W'){
    paddle1PosY= constrain(paddle1PosY-steps,0,topeSupPaddle)
  }
  if( key == 's' || key == 'S'){
    paddle1PosY= constrain(paddle1PosY+steps,0,topeSupPaddle)
  }
}

function dibujarPaleta(posicionX,posicionY,color){
  fill(color)
  rect(posicionX, posicionY, paddleWidth, paddleheight,5)
}




function dibujarRed(){
  stroke(255)
  strokeWeight(2)
  line(width / 2, 0, width / 2, height)
}

function dibujarPelota(){
  fill(255)
  ellipse(posBallX, posBallY, radio * 2)
}

function dibujarTablero(puntos,posLetraX,posLetraY){
  text(pointsPlayer1, width/2 - 30, 30)
  text(pointsPlayer2, width/2 + 30, 30)
}

function hayReboteEnPaletaY(posicionY){
  return posBallY >= posicionY && posBallY <= posicionY + paddleheight

}

function sacarDeNuevo(){
    posBallX = width/2 // saque del centro
    posBallY = random(0,height/2)
    velocityX *= -1
}

