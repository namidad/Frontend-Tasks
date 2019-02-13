function pointsNumber(radius){
  let sum=0;
  for(let i=-radius;i<=radius;i++){
    for(let j=radius;j>=-radius;j--){
      let distance = Math.sqrt(Math.pow(i,2)+Math.pow(j,2));
      if(distance<=radius){
        sum++;
      }
    }
  }
    return sum;
}

pointsNumber(1000);
