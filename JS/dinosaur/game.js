let dinosaur;
let scl = 10;


function setup() {
  createCanvas(600, 600);
  frameRate(10);
  dinosaur=new Dinosaur();
  obstacle=new Obstacle();
}



function draw() {
  background(51);
  dinosaur.update();
  obstacle.update();
  this.check();
  dinosaur.show();
  obstacle.show();
  fill(255,0,100);
}


function check(){
  for(let i=0;i<dinosaur.dinosaur.length;i++){
    for(let j=0;j<obstacle.obstacle.length;j++){
      if(dinosaur.dinosaur[i].x===obstacle.obstacle[j].x && dinosaur.dinosaur[i].y===obstacle.obstacle[j].y){

        console.log("koniec gry");
        console.log(obstacle.obstacle);
      }
    }

  }
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
