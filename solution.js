function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity, minNum = [];
  let len = arr.length;
  for(let i = 1; i < len; i++){
      if(Math.abs(arr[i] - arr[i-1]) < minDiff){
          minNum = [];
          minDiff = Math.abs(arr[i] - arr[i-1]);
          minNum.push(arr[i-1]);
          minNum.push(arr[i]);
      }
      else if(Math.abs(arr[i] - arr[i-1]) === minDiff){
          minNum.push(arr[i-1]);
          minNum.push(arr[i]);
      }
  }
  return minNum;

}

