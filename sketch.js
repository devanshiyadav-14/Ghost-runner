var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg, ghost1;
var spookySound;
var invisibleBlockGroup, invisibleBlock;
var play=1;
var end=2;
var gameState = play;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  ghost1 = loadImage("ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  //spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  //door= createSprite(200,100);
  //door.addImage("door",doorImg);

  //climber= createSprite(200,170);
  //climber.addImage("climber",climberImg)

  ghost= createSprite(280,280);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.35
  
  //spookySound.play();
}
//doorsGroup.add(door);


function draw() {
  background(200);

  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  ghost.veocity = ghost.velocity + 0.8;
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 3;
  }
  if(keyDown("left_arrow")){
    ghost.x = ghost.x -3;
  }
  if(tower.y > 400){
      tower.y = 300
    }
  //doorsGroup=createGroup();
  //climbersGroup=createGroup();
  //invisibleBlockGroup=createGroup();

  spawnwindow();

  
 
  drawSprites();
}
function spawnwindow(){
  
  if (frameCount % 240 === 0){

      door= createSprite(200,-50);
      climber= createSprite(200,15);
      invisibleBlock= createSprite(200,15);
      invisibleBlock.width= climber.width;
      invisibleBlock.height= 2;
      
      door.x= Math.round(random(120,400));
      climber.x= door.x;
      invisibleBlock.x= door.x;

      door.addImage(doorImg);
      climber.addImage(climberImg);
      
      door.velocityY=1;
      climber.velocityY=1;
      invisibleBlock.velocity=1;

      ghost.depth= door.depth;
      ghost.depth +=1;

      door.lifetime=800;
      climber.lifetime=800;
      invisibleBlock.lifetime=800;


  }
  
  
}