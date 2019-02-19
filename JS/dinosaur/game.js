let dinosaur;
let scl = 10;
let over = false;
let points = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(10);

  textSize(40);
  textAlign(LEFT);


  dinosaur=new Dinosaur();
  obstacle=new Obstacle();
}



function draw() {
  if(!over){
    background(51);
    dinosaur.update();
    obstacle.update();
    this.check();
    dinosaur.show();
    obstacle.show();
    textAlign(LEFT);
    drawWords(20);
    fill(255,0,100);
  } else {
    background(51);
    textAlign(LEFT);
    drawWords2(20);
    fill(255,0,100);
  }

}

function drawWords(x) {
  fill(255);
  let textT = "Zdobyte punkty: "+points;
  text(textT, x, 80);
}

function drawWords2(x) {
  fill(255);
  let textT = "Koniec gry! Zdobyte punkty: "+points;
  text(textT, x, 80);
}


function check(){
  for(let i=0;i<dinosaur.dinosaur.length;i++){
    for(let j=0;j<obstacle.obstacle.length;j++){
      if(!Array.isArray(obstacle.obstacle[j])){
        if(dinosaur.dinosaur[i].x===obstacle.obstacle[j].x && dinosaur.dinosaur[i].y===obstacle.obstacle[j].y){
          over=true;
          break;
        }
      } else {
          for(let k=0;k<obstacle.obstacle[j].length;k++){
            if(dinosaur.dinosaur[i].x===obstacle.obstacle[j][k].x && dinosaur.dinosaur[i].y===obstacle.obstacle[j][k].y){
              console.log("koniec gry");
              over=true;
              break;
            }
        }
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
