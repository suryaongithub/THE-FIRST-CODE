var ball;

function setup() {
  createCanvas(400,400);

  ball = createSprite(200,200,20,20);
  ball.shapeColor = "blue";
}

function draw() 
{
  background(180);

  if(keyDown(LEFT_ARROW)){
    ball.x=ball.x-2;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x=ball.x+2;
  }
  if(keyDown(UP_ARROW)){
    ball.y=ball.y-2;
  }
  if(keyDown(DOWN_ARROW)){
    ball.y=ball.y+2;
  }
  drawSprites();
}




