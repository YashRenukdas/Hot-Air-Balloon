var player;
var city;
var bird1;
var bird2, bird3;

var score = 0;

function preload() {
    playerImg = loadImage("Balloon.png");
    cityImg = loadImage("background.jpg");
    bird1Img = loadImage("bird1.png");
    bird2Img = loadImage("bird2.png");
    bird3Img = loadImage("bird3.png");
}

function setup() {
createCanvas(500,500);

city = createSprite(500,300);
city.addImage(cityImg);
city.velocityX = -3

player = createSprite(200,150,10,10);
player.addImage("player", playerImg);
player.scale = 0.1;
player.velocityY = 0.3;


  
}

function draw() {
background(100)

text("Score: " +score, 100,100);
//fill("#00FF00");
//text.fontsize(10);

city.velocityX = -3
if(city.x < 0){
    city.x = city.width/8
}

if(keyDown(RIGHT_ARROW)){
  player.x = player.x+2
}

if(keyDown(LEFT_ARROW)){
    player.x = player.x-2
}

if(keyDown(UP_ARROW)){
    player.y = player.y-2
}

if(keyDown(DOWN_ARROW)){
    player.y = player.y+2
}

collisionWithObstacles()
  obstacles();
  drawSprites();

}

function obstacles() {
  if(frameCount%60===0){
  bird = createSprite(400,200,10,10);
  bird.velocityX = -2;

  var rand = Math.round(random(1, 3))
  bird.y = Math.round(random(100,300))

  switch(rand){
    case 1: bird.addImage(bird1Img);
    break;

    case 2: bird.addImage(bird2Img);
    break;

    case 3: bird.addImage(bird3Img);
    break;
    default: break;
  }

  bird.scale = 0.1;
  bird.lifetime = 500;
  }
}

function collisionWithObstacles() {

}