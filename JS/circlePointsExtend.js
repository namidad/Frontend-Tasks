function pointsNumber(radius,xP,yP){
  let sum=0;
  for(let i=-radius-Math.abs(xP);i<=radius;i++){
    for(let j=radius+Math.abs(yP);j>=-radius;j--){
      let x = Math.pow(xP-i,2);
      let y = Math.pow(yP-j,2);
      let distance = Math.sqrt(x+y);
      if(distance<=radius){
        sum++;
      }
    }
  }
    return sum;
}

pointsNumber(1000,0,5);
