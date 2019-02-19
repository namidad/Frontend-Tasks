class Obstacle {
  constructor(){
    this.timeLeft=0;
    this.obstacle = [{x:590, y:590},[{x:690,y:590},{x:690,y:580}]];
  }

  newObstacle(){
    if(this.timeLeft>20){
      let x = Math.floor(Math.random() * 10);
      if(x<=6){
        x = Math.floor(Math.random() * 10);
        if(x===0){
          this.obstacle.push({x:590, y:590});
        } else if(x===1){
          this.obstacle.push([{x:590, y:590},{x:600, y:590}]);
        } else if(x===2){
          this.obstacle.push([{x:590, y:590},{x:590,y:580}]);
        } else if(x===3){
          this.obstacle.push([{x:590, y:590},{x:590,y:580},{x:600,y:590}]);
        } else if(x===4){
          this.obstacle.push([{x:590, y:590},{x:590,y:580},{x:600,y:590},{x:600,y:580}]);
        } else if(x===5){
          this.obstacle.push([{x:590, y:590},{x:590,y:580},{x:590,y:570}]);
        } else if(x===6){
          this.obstacle.push([{x:590, y:590},{x:590,y:580},{x:590,y:570},{x:580, y:590}]);
        } else if(x===7){
          this.obstacle.push([{x:590, y:590},{x:590,y:580},{x:590,y:570},{x:580, y:590},{x:580,y:580}]);
        } else if(x===8){
          this.obstacle.push([{x:590, y:590},{x:580,y:590},{x:570,y:590}]);
        } else {
          this.obstacle.push([{x:590, y:590},{x:580,y:590},{x:590,y:500},{x:580, y:500}]);
        }
      }
      this.timeLeft=0;
    }

  }

  update(){
    for(let i=0;i<this.obstacle.length;i++){
      if(!Array.isArray(this.obstacle[i])){
        this.obstacle[i].x=this.obstacle[i].x-10;
        if(this.obstacle[i].x<0){
          this.obstacle.splice(0,1);
          i=0;
        }

      } else {
        for(let j=0;j<this.obstacle[i].length;j++){
          this.obstacle[i][j].x=this.obstacle[i][j].x-10;
        }
      }
    }
    this.newObstacle();
    this.timeLeft++;
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
