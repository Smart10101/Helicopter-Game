const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: false
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1
    }

    var ball2_options ={
        restituion: 1
    }

    ball = Bodies.circle(200,200,40,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(200,75,60,ball2_options);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40)
    ellipse(ball2.position.x,ball2.position.y,60,60)
    packageSprite.x = packageBody.position.x;
    packageSprite.y = packageBody.position.y;
}