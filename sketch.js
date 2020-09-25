var fixedRect, movingRect;
var ob1, ob2, ob3,ob4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  ob1=createSprite(200,100,50,50);
  ob2=createSprite(200,200,50,50);
  ob3=createSprite(200,300,50,50);
  ob3.velocityY=3;
  ob4=createSprite(200,400,50,50);
  ob4.velocityY=-3;
  ob1.shapeColor = "green";
  ob2.shapeColor = "green";
  ob3.shapeColor = "green";
  ob4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  
 if(isTouching(movingRect,ob1))
 {
  ob1.shapeColor = "blue";
  movingRect.shapeColor = "blue";
 }
 else{
  ob1.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
collide(ob3,ob4);
bounce(movingRect,fixedRect);
  drawSprites();
}
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}
function collide(object1,object2)
{
  if (object1.x - object2.x === object2.width/2 + object1.width/2
    || object2.x - object1.x === object2.width/2 + object1.width/2)
    {
      object1.velocityX=0;
      object2.velocityX=0;
    }
if(object1.y - object2.y === object2.height/2 + object1.height/2
  || object2.y - object1.y === object2.height/2 + object1.height/2) 
    {
      object1.velocityY=0;
      object2.velocityY=0;
    

    }

}
function bounce(object1,object2) {
if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2
  ){ object1.velocityX=(-1)*object1.velocityX;
    object2.velocityX=(-1)*object2.velocityX;
  }
  if(object1.y - object2.y < object2.height/2+ object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
    {
      object1.velocityY=(-1)*object1.velocityY;
      object2.velocityY=(-1)*object2.velocityY;
    }
}