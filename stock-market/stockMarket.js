function maxProfit (arr) {
  var max = -1;
  var i = 0;
  for (var i = 0; i < arr.length; i ++ ) {
    for (var j = i + 1; j < arr.length; j ++ ) {
      if ((arr[j] - arr[i]) > max) {
        max = arr[j] - arr[i];
      }
    }
  }
  return max;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
//maxProfit([45, 24, 35, 31, 40, 38, 11])