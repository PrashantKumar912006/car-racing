
var gameState ="PLAY";
var bg,bg_Image;
var playercar,playercar_Image;
var obstacleGroup,obstacle_Image1,obstacle_Image2,obstacle_Image_3

function preload(){
bg_Image=loadImage("image/Road.jpg")
playercar_Image=loadImage("image/download15.png")
obstacle_Image1=loadImage("image/car12.png")
obstacle_Image2=loadImage("image/download13.png")
obstacle_Image3=loadImage("image/download14.png")
}


function setup() {
  createCanvas(400,600);
bg=createSprite(200,250)
bg.addImage(bg_Image)
bg.scale=3
bg.velocityY=20

playercar=createSprite(200,460)
playercar.addImage(playercar_Image)
playercar.scale=0.7

//obstacle1=createSprite(200,470)
//obstacle1.addImage(obstacle1_Image)
edge=createEdgeSprites();


playercar.setCollider("rectangle",0,0,playercar.width,playercar.height);
  playercar.debug = true
  
  score = 0;
  
  obstacleGroup=createGroup()


}

function draw() {
  background(255,255,255); 
 
  

  if(bg.y>400){
    bg.y=300
    
      }

     
    

    if(keyDown("left")){

      playercar.x=playercar.x-5

    }


    
    if(keyDown("right")){

      playercar.x=playercar.x+5

    }

    if(keyDown("up")){

      playercar.y=playercar.y-5

    }

    if(keyDown("down")){

      playercar.y=playercar.y+5

    }
  
    if(obstacleGroup.isTouching(playercar)){
      playercar.destroy()
     obstacleGroup.destroyEach()
     obstacleGroup.stop()
    bg.velocityY=0
    //bg.destroy()
     // console.log("gameEnd")
     End()
    }
    
  

    spawnObstacle();  
playercar.bounceOff(edge);



  drawSprites();

 


}

function spawnObstacle(){

  if(frameCount % 30===0){
    var randx=Math.round(random(50,400))
  
    var obstacle=createSprite(200,-50)
    obstacle.x=randx
    obstacle.velocityY=15;
    obstacle.scale=0.7
  
  
    var rand=Math.round(random(1,3))
  
  switch(rand){
  case 1 :obstacle.addImage(obstacle_Image1) 
  break;
  case 2 :obstacle.addImage(obstacle_Image2)
  break;
  case 3 :obstacle.addImage(obstacle_Image3)
  break;
  default : break;
  
  }
  obstacleGroup.add(obstacle)

}

}

function End(){
  
   
  console.log("gameEnd")
  //obstacleGroup.destroyEach()
 
  
  background(255,0,0);
  
  //bg.destroy()
  
 
}