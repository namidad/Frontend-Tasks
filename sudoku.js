function doneOrNot(board){
  let rowSum=0, columnSum=0,sum=0,counter=0,counter2=0;
  for(let i=0;i<9;i++){
    rowSum=0;
    columnSum=0;
    for(let j=0;j<9;j++){
      rowSum+=board[i][j];
      columnSum+=board[j][i];
    }
    if(rowSum!=45 || columnSum!=45) return "Try again!";
  }

  for(let i=0;i<9;i++){
    sum=0;
    for(let j=counter*3;j<counter*3+3;j++){
      for(let k=counter2*3;k<counter2*3+3;k++){
        sum+=board[j][k];
      }
    }
    if(sum!=45) return "Try again!";
    if(counter2===2) {
      counter2=0;
      counter++;
    } else {
      counter2++;
    }
  }
  return "Finished!";
}


doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]);

doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]);
