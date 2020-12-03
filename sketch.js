var towerimage,tower
var ghost,ghostimage
var door,doorimage,doorgroup
var climberimage,climber,climbergroup
var invisiblegroup,invisibleblock
var gamestate="play"
function preload (){
 towerimage=loadImage("tower.png") 
  ghostimage=loadImage("ghost-standing.png")
climberimage=loadImage("climber.png")
}
function setup(){
createCanvas(700,700)
tower=createSprite(280,280)  
 tower.addImage("t",towerimage) 
 tower.velocityY=1
  
  climbergroup=new Group()
doorgroup=new Group()
invisiblegroup=new Group()  

ghost=createSprite(200,200,40,40)
ghost.scale=0.35
  ghost.addImage("g",ghostimage)
}

function draw(){
background("white")     
  drawSprites()  
 
if(gamestate==="play"){
  if(keyDown("right_arrow")){
 ghost.velocityX=4
  }
 if(keyDown("left_arrow")){
   ghost.velocityX=-4
 
 }
 if(keyDown("space")){
  ghost.velocityY=-10
  }
ghost.velocityY=ghost.velocityY+1

 if(tower.y>600){
   tower.y=tower.height/2  
 } 
  if (invisiblegroup.isTouching(ghost)|| ghost.y>600){
    gamestate="end"
  }

}
  else if(gamestate==="end"){
   fill("orange") 
  textSize(30)
  text("Game Over", 230,250)
  }
  

}
function spawnDoors(){
if (frameCount %250 ===0){
  var climber=createSprite(190,10)
var door=createSprite(190,-40) 
var invisbleblock=createSprite(190,20)  
invisibleblock.width=climber.width  
invisibleblock.height=2

  door.x=Math.round(random(120,400))
climber.x=door.x
 invisibleblock.x=door.x 

  climber.addImage(climberimage)
door.addImage(doorimage)

door.veloityY=1
  climber.velocityY=1
invisibleblock.velocityY=1

ghost.depth +=1
ghost.depth=door.depth

climber.lifetime=800
  door.ligetime=800
  invisibleblock.lifetime=800
  
  doorsGroup.add(door)
  invisibleblock.debug=true
  climbersGroup.add(climber)
invisiblegroup.add(invisibleblock)
}     
}