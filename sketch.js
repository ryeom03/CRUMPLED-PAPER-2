const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// First create  global variables

var paperObject;
var trash1;


var world;
var groundObject;

// We created this function to load the image of our dustbin.
function preload()
{
  dustbinimage=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,620,width,20);
	trash1=new Dustbin(1200,510,20,200);
	trash2=new Dustbin(1000,510,20,200);
	trash3=new Dustbin(1100,600,200,20);


   // To run physics engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  // To give background to canvas

  background("white");
  // To make the user aware in game what to do in game

  
  



  // To display all we created
  
  trash1.display();
  trash2.display();
  trash3.display();
  paperObject.display();
  image(dustbinimage,972,410,252,200);

}

// Force to throw it in dustbin.
function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-135})
}
}



