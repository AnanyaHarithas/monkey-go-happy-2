
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
} 



function setup() {
   createCanvas(500, 500);

  monkey= createSprite (50,350,40,40)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  ground= createSprite (400,400,500,10);
 
  

   og = new Group();
  bg= new Group();
}


function draw() {
background("white");
  
  stroke("white");
 textSize(20)
  text('Score:'+ score,500,50)
  stroke("black")
   textSize(20)
  fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
   text('SurvivalTime:'+ survivalTime ,500,50)
  
  
  if(keyDown("space")) {
        monkey.velocityY= -12;
        }
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
   ground.velocityX=-2
  ground.x= ground.width/2
  
  if(monkey.isTouching(og)){
    monkey.velocityX=0
  }
  
  
  spawnobstacle();
  spawnbanana();
  
  drawSprites();
}
function spawnobstacle(){
if(frameCount % 50 === 0){
   var obstacle = createSprite(350,380,10,40);
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
    obstacle.velocityX= -3

 obstacle.x=random(350,500);
  
 
og.add(obstacle);
    
    
    
    
    
  }
  
  
  
}



function spawnbanana(){
if(frameCount % 50 === 0){
   var bnna = createSprite(350,200,10,40);
  bnna.addImage(bananaImage)
  bnna.scale=0.1
  bnna.velocityX= -3

bnna.x=random(350,500);
  
 
bg.add(bnna);
    
    
    
    
    
  }
  
  
  




  
  
  
}

