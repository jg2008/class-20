var movingRect,fixedRect;




function setup() {
  createCanvas(400,400);
  movingRect =createSprite(200, 200, 50, 80);
  movingRect.shapeColor="green";
  movingRect.debug = true;
  fixedRect =createSprite(100,200,80,50);
  fixedRect.shapeColor ="green";
  fixedRect.debug = true;
}
//(80/2 + 50/2 =40+25 = 65)
//horizontal dis btwn 2 rect is fixedRect.width/2 + movingRect.width/2
//distance betwn the centre of two rect - movinRect.x - fixedRect.x

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log( movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
      fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor ="red";
  } 
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor ="green";
  }




  drawSprites();
}