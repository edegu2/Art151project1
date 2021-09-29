let saturation = 50;
let brightness = 100;
let red = 1;
let orange = 17;
let yellow =55 ;
let green =104 ;
let blue =220 ;
let purple = 246;

function setup() {
  createCanvas(1800, 1000);
  colorMode(HSB);
  background(0,0,0)
  ob = [];
}


function draw() {

  for (let i = 0; i<ob.length; i++){
    ob[i].update();
    ob[i].show();
  }  
}

//create trail when mouse is clicked
function mousePressed(){
ob.push(new Shape(mouseX,mouseY));

}

//"R" button clicked = bring shapes to default color
//Space Bar clicked = change shapes saturation
// "-" button clicked = reduce colors hue by 10
// "+" button clicked = add to colors hue by 10
function keyPressed() {
  if (keyCode === 82) {
  red = 1;
  orange = 17;
  yellow = 55;
  green = 104;
  blue =220;
  purple = 246;
  saturation = 50;
  brightness = 100;
}
  if (keyCode === 32) {
    saturation = random(20, 100);
    loop();

  } else if (keyCode === 189) {
    red = red - 10;
    orange = orange - 10;
    yellow = yellow -10;
    green = green -10;
    blue = blue - 10;
    purple = purple - 10;

  } else if (keyCode === 187) {
    red = red + 10;
    orange = orange + 10;
    yellow = yellow + 10;
    green = green + 10;
    blue = blue + 10;
    purple = purple + 10;
} 

}

function Shape(x,y){
this.pos = createVector(x,y);
this.dir = createVector(random(-1,1), random(-1,1));
this.speed = random(0,10);

this.update = function(){
  uPos = p5.Vector.mult(this.dir, this.speed);
  this.pos.add(uPos);

  if(this.pos.x < 0 || this.pos.x > 2000){this.dir.x*=-1};
  if(this.pos.y < 0 || this.pos.y > 1000){this.dir.y*=-1};
}

this.show = function(){
  stroke(1)
  //change color based on x pos
  if(this.pos.x < 300){
    fill(red,saturation,brightness);
  } else if(this.pos.x > 300 && this.pos.x < 600){
    fill(orange,saturation,brightness);
  } else if(this.pos.x > 600 && this.pos.x < 900){
    fill(yellow,saturation,brightness);
  } else if(this.pos.x > 900 && this.pos.x < 1200){
    fill(green,saturation,brightness);
  } else if(this.pos.x > 1200 && this.pos.x < 1500){
    fill(blue,saturation,brightness);
  } else if(this.pos.x > 1500){
    fill(purple,saturation,brightness);
  }
  //make the shape "vibrate"
    this.pos.x += random(-5, 5);
    this.pos.y += random(-5, 5);
    //rectangle
      rect(this.pos.x,this.pos.y,50);
    //circle
      //ellipse(this.pos.x,this.pos.y,50);
}

}
  