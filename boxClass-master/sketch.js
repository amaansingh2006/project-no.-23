const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3,box4, box5, box6,box7;
var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,0,20,300);
    box2 = new Box(300,0,20,300);
    box3 = new Box(150,300,50,200);
    box4 = new Box(250,300,50,200);
    box5 = new Box(200,200,150,10);
    box6 = new Box(250,150,50,50);
    box7 = new Box(150,150,50,50);

    ground1 = new ground(200,height,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

   
}