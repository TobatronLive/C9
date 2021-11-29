var player 
function setup() {
  createCanvas(400,400);
  player = createSprite(200,200);
}

function draw() 
{
  background(30);
drawSprites();
if(keyDown(LEFT_ARROW)) {
  player.x = player.x-5;
}
if(keyDown(RIGHT_ARROW)) {
  player.x = player.x+5;
}if(keyDown(UP_ARROW)) {
  player.y = player.y-5;
}if(keyDown(DOWN_ARROW)) {
  player.y = player.y+5;
}
}



