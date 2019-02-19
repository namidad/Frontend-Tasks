class Dinosaur {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.xspeed=1;
      this.yspeed=0;
      this.dinosaur = [createVector(0,590), createVector(20,590), createVector(10,580)];
    }

    dir(x,y){
      this.xspeed=x;
      this.yspeed=y;
    }

    update(){
      if(this.xspeed===1){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].x=this.dinosaur[i].x+10;
        }
        this.xspeed=0;
      } else if(this.xspeed===-1){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].x=this.dinosaur[i].x-10;
        }
        this.xspeed=0;
      } else if(this.yspeed===-1){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y-10;
        }
        this.show();
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y-10;
        }
        this.show();
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y+10;
        }
        this.show();
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y+10;
        }
        this.show();
        this.yspeed=0;
      }

    }

    show(){
        fill(255);
        for(let i=0;i<this.dinosaur.length;i++){
          rect(this.dinosaur[i].x,this.dinosaur[i].y,scl,scl);
        }

      }

  }
