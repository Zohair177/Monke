
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup

function preload(){
    monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("obstacle.png")
  

 
  
}
function setup() {
  monkey = createSprite(50,160,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(50,200,950,20)
  ground.velocityX = -7
  
  
  
  bananaGroup = createGroup()
  obstacleGroup = createGroup()
  
  

  
  
}


function draw() {
  background("green")
  if(keyDown("space")) {
    monkey.velocityY = -13
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  if(ground.x < 0) {
    ground.x = 200
  }
  
  
  
  
  
  
  
  spawnFood()
  spawnObstacles()
  
  
  
  
  
  
  
  
  
  drawSprites()
  
  
  
   
   
  
       
  
  

    
    
    
  
 
}

  function spawnFood() {
 if(frameCount % 80===0) {
   banana = createSprite(600,114,20,20)
   banana.scale = 0.1
   banana.y = random(100,200)
   banana.addImage(bananaImage)
   banana.velocityX = -4
   banana.lifetime = 300
   bananaGroup.add(banana)
 }
  }



function spawnObstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(600,50,20,20)
    obstacle.scale = 0.1
    obstacle.y = random(150,200)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -4
    obstacle.lifetime  = 300
    obstacleGroup.add(obstacle)
  }

  
}
