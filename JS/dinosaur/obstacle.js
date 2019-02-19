class Obstacle {
  constructor(){
    this.obstacle = [{x:590, y:590},[{x:690,y:590},{x:690,y:580}]];
  }

  update(){
    for(let i=0;i<this.obstacle.length;i++){
      if(!Array.isArray(this.obstacle[i])){
        this.obstacle[i].x=this.obstacle[i].x-10;
      } else {
        for(let j=0;j<this.obstacle[i].length;j++){
          this.obstacle[i][j].x=this.obstacle[i][j].x-10;
        }
      }

    }
  }

  show(){
    fill(255,0,0);
    for(let i=0;i<this.obstacle.length;i++){
      if(!Array.isArray(this.obstacle[i])){
        rect(this.obstacle[i].x,this.obstacle[i].y,scl,scl);
      } else {
        for(let j=0;j<this.obstacle[i].length;j++){
          rect(this.obstacle[i][j].x,this.obstacle[i][j].y,scl,scl);
        }
      }

    }
  }
}
