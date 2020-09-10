//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/Dog.png");
  happyDog = loadImage("images/Dog.png");
}

function setup() {
  createCanvas(500, 500);
  Dog = createSprite(200,200,20,20);
  Dog.addImage(dog);
  foodstock=database.ref('food');
  foodstock.on("value", readstock);

  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  fill("green");
  stroke(4);
  text("Note: Press UP_ARROW Key to feed Drago milk!",20,200);

  
}

function readstock(data){
  foodS=data.val();
}

function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }
   
  database.ref('/').update({
    Food:x
  })
}


