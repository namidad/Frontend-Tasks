let dinosaur;
let scl = 10;


function setup() {
  createCanvas(600, 600);
  frameRate(10);
  dinosaur=new Dinosaur();
}



function draw() {
  background(51);
  dinosaur.update();
  dinosaur.show();
  fill(255,0,100);
}


function keyPressed() {
  if(keyCode === UP_ARROW){
    dinosaur.dir(0,-1)
  } else if (keyCode === DOWN_ARROW) {
    dinosaur.dir(0,1);
  } else if (keyCode === RIGHT_ARROW) {
    dinosaur.dir(1,0);
  } else if (keyCode === LEFT_ARROW) {
    dinosaur.dir(-1,0);
  }
}
