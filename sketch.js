var gameState=0,playerCount;
var database,form,player,game;


function setup(){
  database = firebase.database();
  createCanvas(400,400);

  game=new Game()
  game.getState()
  game.start()
  
}

function draw(){
  background("white");
  
   
}

