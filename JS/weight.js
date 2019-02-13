function orderWeight(strng) {
    const arr = strng.split(" ");
    let objectArr=[];
    let sum=0;
    for(let i=0;i<arr.length;i++){
      sum=0;
      for(let j=0;j<arr[i].length;j++){
          sum+=parseInt(arr[i][j]);
      }
      let arrValue= arr[i];
      let obj = {arrValue,sum};
      objectArr.push(obj);
    }

    const final = objectArr
    .sort((x,y)=>{
      if(x.sum > y.sum) return 1;
      if(x.sum < y.sum) return -1;
      return x.arrValue > y.arrValue ? 1 : -1;
    })
    .map(v => v.arrValue)
    .join(" ");
    return final;
}
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
//orderWeight("103 123 4444 99 2000");
