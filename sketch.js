var sword,swordImage;
var fruit,fruitImage;
var fruitGroup,monsterGroup;
var score;
var fruitImage2;
var frutiImage3;
var monster,monsterImage;
var PLAY = 1;
var END ;
var gameState=1;
var gameover,gameoverImage;
var fruitImage4;
var rand;

function preload(){
  swordImage = loadImage("sword.png")
  fruitImage = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  monsterImage = loadImage("alien1.png");
  gameoverimage = loadImage("gameover.png");
  fruitImage4 = loadImage("fruit4.png");
  
  
  }
function setup(){
  createCanvas(400,400);
  sword = createSprite(40,200,5,5);
  sword.addImage(swordImage);
  
 
    monster = createSprite(900,200);
  
  
  fruitGroup = new Group();
   monsterGroup = new Group();
  
  fruit  = createSprite(500,500);
  
  
  score=0;
}
function draw(){
  
  background("lightblue");
  if(gameState===PLAY){
 sword.x=World.mouseX;
  sword.y = World.mouseY;
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();  
      score=score+1;
    }
    
  
    
  }
  if(sword.isTouching(monster)){
    gameState=END;
 // fruitGroup.setVelocityYEach(0);
  //monsterGroup.destroyEach();
  //monster.destroy();
    sword.addImage(gameoverimage);
    sword.x=200;
    sword.y=200;
  }
  
  else if(gameState===END){
    fruitGroup.setVelocityYEach(0);
fruitGroup.lifetime = -1;
    monsterGroup.setVelocityYEach(0);
    monsterGroup.lifetime=-1;
    fruitGroup.destroyEach();
     monsterGroup.destroyEach();
}
  
  //sword.debug=true;
  sword.setCollider("rectangle",20,-20,60,60);
  
  spawnFruits();
  spawnMonster();
drawSprites();
  text("score:"+score,350,30);
}


function spawnFruits(){
  if(frameCount%80==0){
 var fruit = createSprite(Math.round(random(350,100)),-20)
  fruit.velocityY=4;
  
  
  rand = Math.round(random(1,4));
  switch(rand) {
      
  case 1: fruit.addImage(fruitImage);
             break;
 case 2 : fruit.addImage(fruitImage2);           
             break;
 case 3 : fruit.addImage(fruitImage3); 
             break;
  case 4 : fruit.addImage(fruitImage4); 
             break;
             default:break;      
}
  fruit.scale = 0.2;
    fruitGroup.add(fruit);
}
}


function spawnMonster(){
  if(frameCount%60===0){
    monster = createSprite(Math.round(random(300,100)),0)
    monster.addImage(monsterImage);
    monster.velocityY=4;
    monsterGroup.add(monster);
    
  }
}
