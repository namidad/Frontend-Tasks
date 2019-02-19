class Obstacle {
  constructor(){
    this.obstacle = [createVector(590,590),createVector(650,590)];
  }

  update(){
    for(let i=0;i<this.obstacle.length;i++){
      this.obstacle[i].x=this.obstacle[i].x-10;
    }
  }

  show(){
    fill(255,0,0);
    for(let i=0;i<this.obstacle.length;i++){
      rect(this.obstacle[i].x,this.obstacle[i].y,scl,scl);
    }
  }
}
