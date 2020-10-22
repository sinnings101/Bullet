var bullet, wall
var speed, weight, thickness
var damage


function setup() {
  createCanvas(1200,400);
  bullet = createSprite(100, 200, 20, 10);
  bullet.shapeColor = "white";

  wall = createSprite(900,200,30,350);
  wall.shapeColor = "gray";

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage >= 10){
      bullet.shapeColor = "red";
    }
    else{
      bullet.shapeColor = "green"
    }
    
  }
  else{
    bullet.velocityX = 10
  }





  drawSprites();
}

function hasCollided(bullet1,wall1){
  
  bulletRightEdge = bullet1.x + bullet1.width/2;
  wallLeftEdge = wall1.x - wall1.width/2
  if(wallLeftEdge <= bulletRightEdge){
    bullet1.velocityX = 0 
    return true;
  }
  else{
    return false;
  }
}
