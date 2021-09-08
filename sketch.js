const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var right;
var ball;
var button;
var base;


function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  ball=new boll(450,250,70);
  //  World.add(world,ball);
  ground =new Block(250,445,200,30);
  right = new Block(450,360,200,200);
  base = new Block(450,445,200,30);

  button=createButton("Click to Blow");
  button.position(380,260);
  button.size(140,100);
  button.mousePressed(blow);
  
  rectMode(CENTER);
}

function draw() 
{
  Engine.update(engine);
  background(51);
  ground.show();
  right.show();
  ball.show();
  base.show();
}
function blow(){
 console.log('x');
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.5});
}

