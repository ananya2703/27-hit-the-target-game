
var player
var target
var edges

function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);

  edges=createEdgeSprites();

  player=createSprite(40,550,30,30);
  target=createSprite(560,40,30,30);
  obs1=createSprite(150,120,100,20);
  obs1.velocityY = 5;
  obs2=createSprite(300,320,100,20);
  obs2.velocityY = -5;
  obs3=createSprite(600,50,30,90);
  obs3.velocityX = 4;
  obs4=createSprite(100,12,90,30);
  obs4.velocityX = 4;
  target.shapeColor= "blue"
  player.shapeColor= "yellow"
  obs1.shapeColor="red"
  obs3.shapeColor="pink"
  obs2.shapeColor="cyan"
}

function draw() {
  background("black");  
  
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  obs1.bounceOff(edges[2]);
  obs1.bounceOff(edges[3]);
  obs2.bounceOff(edges[2]);
  obs2.bounceOff(edges[3]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);

  if(keyDown("up")) {
    player.y=player.y-3;
  }
  if(keyDown("down")) {
    player.y=player.y+3;
  }
  if(keyDown("left")) {
    player.x=player.x-3;
  }
  if(keyDown("right")) {
    player.x=player.x+3
  }

  if(player.isTouching(target)) {
    text("YOU WIN" ,200,200);
  }
  if(player.isTouching(obs1)) {
    obs1.velocityX=0;
    text("YOU LOSE" ,200,200);
  }
  if(player.isTouching(obs2)) {
    obs2.velocityX=0;
    text("YOU LOSE" ,200,200);
  }
  drawSprites();
}
