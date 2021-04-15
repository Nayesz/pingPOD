function setup() {
  createCanvas(600, 400)

  textSize(32)
  textAlign(CENTER, CENTER)
}

let posX = 300
let posY = 200
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

function draw() {
  background(125, 210, 162)

  // restrinjo movimientos de las paletas
  paddle1PosY = constrain(mouseY, 0, height - paddleheight)
  paddle2PosY = constrain(mouseY, 0, height - paddleheight)

  noStroke()
  // dibujo elementos
  
  //Player 1
  fill(213, 216, 136)
  rect(paddle1PosX, paddle1PosY, paddleWidth, paddleheight, 5)
  //Player 2
  fill(205, 101, 115) 
  rect(paddle2PosX, paddle2PosY, paddleWidth, paddleheight, 5)
  fill(255)
  ellipse(posX, posY, radio * 2)
  
  // Tablero de puntos
  text(pointsPlayer1, width/2 - 30, 30)
  text(pointsPlayer2, width/2 + 30, 30)

  // red, divide las canchas
  stroke(255)
  strokeWeight(2)
  line(width / 2, 0, width / 2, height)
  
  posX += velocityX
  posY += velocityY

  if (posY >= height - radio || posY <= radio) {
    velocityY *= -1
  }

  //player 1
  let ballInRangeY = posY >= mouseY && posY <= mouseY + paddleheight
  let ballInRangeX = posX <= paddle1PosX + paddleWidth + radio

  if (ballInRangeX && ballInRangeY) {
    velocityX *= -1
  }

  // player 2
  let ballInRange2Y = posY >= mouseY && posY <= mouseY + paddleheight
  let ballInRange2X = posX >= paddle2PosX - (paddleWidth - radio)

  if (ballInRange2X && ballInRange2Y) {
    velocityX *= -1
  }

  // anota player 1
  if(posX > width){
    posX = random(width/2, width/2) // saque del centro
    posY = height/2
    velocityX *= -1
    pointsPlayer1++
  }

  // anota player 2
  if(posX < 0){
    posX = random(width/2, width/2) // saque del centro
    posY = height/2
    velocityX *= -1
    pointsPlayer2++
  }
}

// TODO Agregar mando indivual con teclas para cada jugador