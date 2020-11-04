var bullet,wall,speed,weight,answer,thickness;

function preload(){
}
function setup() {
  createCanvas(1200,300);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,150,45,25);
bullet.velocityX=speed;

  wall=createSprite(1000,150,thickness,height/2);
  wall.scale=0.8;

}

function draw() {
  background(220); 

  if(collide(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;

if(damage>10){

wall.shapeColor=color(255,0,0);
bullet.shapeColor=color(255,0,0);

}
if (damage<10){

wall.shapeColor=color(0,255,0);
bullet.shapeColor=color(0,255,0);

}
  }


  drawSprites();
}

function collide(bullet,wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}

return false;

}






