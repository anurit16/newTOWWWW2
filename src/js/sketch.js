const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var roof;
var mouse;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1;

function setup(){
    canvas = createCanvas(windowWidth / 2,windowHeight/1.5);
    engine =Engine.create();
    world = engine.world;


    roof = new Roof(windowWidth/2-500,windowHeight/1.5-450,350,30)
    pendulum1 = new Pendulum(300,400,25,"red");
    pendulum2 = new Pendulum(350,400,25,"red");
    pendulum3 = new Pendulum(400,400,25,"red");
    pendulum4 = new Pendulum(450,400,25,"red");
    pendulum5 = new Pendulum(500,400,25,"red");
    
   
    sling1 = new Sling(pendulum1.body,{x:300,y:150});
    sling2 = new Sling(pendulum2.body,{x:350,y:150});
    sling3 = new Sling(pendulum3.body,{x:400,y:150});
    sling4 = new Sling(pendulum4.body,{x:450,y:150});
    sling5 = new Sling(pendulum5.body,{x:500,y:150});
    /*
    var canvasmouse = Mouse.create(canvas.length);
    canvasmouse.pixelRatio = pixelDensity();
    var options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);
*/        
}
function draw() {
    Engine.update(engine);
    rectMode(CENTER);
    background(200);
    roof.display();
pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})
}