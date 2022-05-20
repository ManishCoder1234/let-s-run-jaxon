var runner,path
var runnerImg,pathImg;
var invisibleboundary,invisibleboundary2
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  runnerImg = loadAnimation("path.png")
  runnerImg = loadAnimation("Runner-1.png" , "Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //moving background
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2
  
  runner = createSprite(200,350)
  runner.addAnimation("movingrun" , runnerImg)
  runner.scale=0.1

  //creating a invisible ground
  invisibleboundary = createSprite(20,200,30,400)
  invisibleboundary2 = createSprite(387,200,10,400)
  invisibleboundary.visible = false
  invisibleboundary2.visible = false

}

function draw() {
 
  background(0);
  runner.x=World.mouseX
  //code to reset background
  if(path.y > 400 ){
    path.y = height/2;
  }

  runner.collide(invisibleboundary)
  runner.collide(invisibleboundary2)

  drawSprites();
}
