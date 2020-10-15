const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1, pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100, 375, 60, 60);
    pig1 = new Pig(1000,375);
    log1 = new Log(1000,300,300, PI/2);
    box2 = new Box(900, 375, 60, 60);
    pig2 = new Pig(1000,275);
    box3 = new Box(900,275,60,60);
    box4 = new Box(1100,275,60,60);
    log2 = new Log(1000,250,300, PI/2);
    box5 = new Box(1000,200,60,60);
    log3 = new Log(950,200,125, PI/5.25);
    log4 = new Log(1050,200,125, -PI/5.25);
    bird = new Bird(200,200);


    ground = new Ground(600, height, 1200, 20)

    
    

    

}

function draw() {
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}