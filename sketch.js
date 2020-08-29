var car1, wall;
var speed, weight;
var height = 2000;
var car2, car3;  

function setup() {
  createCanvas(1300,800);
  speed = random(12,21);
  weight = random(200,300);
  wall = createSprite(1200,250,60,height/2);
  wall.shapeColor = "green";
  wall.debug = true;
  car1 =createSprite(50, 200, 50, 30);
  car1.shapeColor = "blue";
  car1.velocityX = speed;
  

}

function draw() 
{
  background("white");  
  bounceOff(car1,wall);


  if(car1.x - wall.x < car1.width/2 + wall.width/2 &&
    wall.x - car1.x < car1.width/2 + wall.width/2 && 
    car1.y - wall.y < car1.height/2 + wall.height/2 &&
    wall.y - car1.y < car1.height/2 + wall.height/2) 
    {
    
      car1.shapeColor = "magenta";
      wall.shapeColor = "blue";
      console.log("car1 weight:" + weight);
      console.log("car1.speed:" + speed);

      var deformation1 = (0.5 * weight * speed * speed)/2500;
      console.log("car1 deformation: " + deformation1);
      if(deformation1 < 13) 
      {
        car1.shapecolor = "green";
      }
      else if(deformation1 >= 13 && deformation1 < 20) 
      {
        car1.shapeColor = "yellow";
      }
      else 
      {
        car1.shapeColor = "red";
      }
  
    }
    else
    {
     // car1.shapeColor = "blue";
      //wall.shapeColor = "green";
    }

    drawSprites();
}