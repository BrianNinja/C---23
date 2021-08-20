const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  Cb = new ComputerBase(500,height/2,150,100);
  Pb = new PlayerBase(800,height/2,150,100);
  player = new Player(800,height/2-90,50,100);
  computer = new Computer(500,height/2-90,50,100);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  Cb.display();
  Pb.display(); 
   //display Player and computerplayer
  player.display();
  computer.display();

}
