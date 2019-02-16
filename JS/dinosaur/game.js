let dinosaur;
let scl = 20;


function setup() {
  createCanvas(600, 600);
  frameRate(10);
  pickLocation();
}



function draw() {
  background(51);

  fill(255,0,100);
  rect(food.x, food.y, scl, scl);
}
