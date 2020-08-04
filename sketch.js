
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject
var paper1
var dustbinpart1
var dustbinpart2
var dustbinpart3



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new paper(200,100);
	dustbinpart1 = new dustbin(700,100,10,50);
	dustbinpart2 = new dustbin(710,100,70,10);
	dustbinpart3 = new dustbin(780,100,10,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

paper1.display();
dustbinpart1.display();
dustbinpart2.display();
dustbinpart3.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	   
	 }
   }


