var roof,rope1,bobObject1,bobOject2,bobObject3,bobObject4,bobObject5,bobObject6,allarenoobs,

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new roof(350,100,300,30);
World.add(world,roof);

bobObject1 = new bobObject1(250,300);
bobObject2 = new bobObject2(300,300);
bobObject3 = new bobObject3(350,300);
bobObject4 = new bobObject4(400,300);
bobObject5 = new bobObject5(450,300);

rope1 = new Rope(bobObject1.body,roof.body,-100,0);
World.add(world,rope1)

rope2 = new Rope(bobObject2.body,roof.body,-50,0);
World.add(world,rope2)

rope3 = new Rope(bobObject3.body,roof.body,0,0);
World.add(world,rope3)

rope4 = new Rope(bobObject4.body,roof.body,+50,0);
World.add(world,rope4)

rope5 = new Rope(bobObject5.body,roof.body,+100,0);
World.add(world,rope5)


	Engine.run(engine);
  
}


function draw() {
	background("white");
Engine.update(engine) 

roof.display();

bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();



}
function keyPressed(){
	if(keyCode===32){
Matter.Body.applyForce(bobObject1.body,bobObject1.Body.position,{x:-730,y:0});
	}
}



