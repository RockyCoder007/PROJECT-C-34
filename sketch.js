const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot,bg;


function setup(){
    var canvas = createCanvas(600,205);
    engine = Engine.create();
    world = engine.world;

    platform1=new Platform(width/2,height-5,width,10);

    hero = new Hero(100,100,20,20);
    block1=new Block(350,170,20,20)
    block2=new Block(350,170-10,20,20)
    block3=new Block(350,170-20,20,20)
    block4=new Block(350,170-30,20,20)


}

function draw(){
    background("light_blue");
   // text(Math.round(mouseX) + ','+Math.round(mouseY),20,20);
    Engine.update(engine);
    strokeWeight(4);

    platform1.display();

    hero.display();
    stroke("black")
    text(mouseX+","+mouseY,10,10)
    block1.display();





  
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
