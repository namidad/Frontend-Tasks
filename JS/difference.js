function maxAndMin(arr1,arr2){
  let min=9999999,max=-99999;
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(Math.abs(arr1[i]-arr2[j]) > max){
        max = Math.abs(arr1[i]-arr2[j]);
      }
      if(Math.abs(arr1[i]-arr2[j]) < min){
        min = Math.abs(arr1[i]-arr2[j]);
      }
    }
  }
  let arrRet=[max,min];
  return arrRet;
}

maxAndMin([3,10,5],[20,7,15,8]);
