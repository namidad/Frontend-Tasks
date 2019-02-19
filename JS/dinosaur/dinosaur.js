class Dinosaur {
    constructor() {
      this.xspeed=1;
      this.yspeed=0;
      this.dinosaur = [createVector(0,590), createVector(20,590), createVector(10,580)];
    }

    dir(x,y){
      if(this.yspeed===0){
        this.xspeed=x;
        this.yspeed=y;
      } else {
        this.xspeed=x;
      }
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
        this.yspeed=-2;
      } else if (this.yspeed===-2){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y-10;
        }
        this.yspeed=-3;
      } else if (this.yspeed===-3){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y-10;
        }
        this.yspeed=-4;
      } else if (this.yspeed===-4){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y-10;
        }
        this.yspeed=-5;
      } else if (this.yspeed===-5){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y+10;
        }
        this.yspeed=-6;
      } else if (this.yspeed===-6){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y+10;
        }
        this.yspeed=-7;
      } else if (this.yspeed===-7){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y+10;
        }
        this.yspeed=-8;
      } else if (this.yspeed===-8){
        for(let i=0;i<this.dinosaur.length;i++){
          this.dinosaur[i].y=this.dinosaur[i].y+10;
        }
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
