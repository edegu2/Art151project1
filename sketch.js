function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('black');
  stroke('#89B089')
  strokeWeight(4)
  fill('#B1F1B1')
  ellipse(200,200,200,200);
  ellipse(200,500,400,400);
  
  noStroke()
  fill('#ffffff')
  ellipse(200,250,50,50);
  
  noStroke()
  fill('#B1F1B1')
  ellipse(200,240,50,50)
  
  stroke('#89B089')
  fill('#89B089')
  ellipse(150,150,25,25);
  ellipse(250,150,25,25);
  
  noStroke(1)
  fill('#B1F1B1')
  ellipse(147,146,30,30);
  ellipse(253,146,30,30);
  
  stroke('black')
  fill('#262E26')
  ellipse(160,200,20,20);
  ellipse(240,200,20,20);
  
}
