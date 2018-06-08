function check (number) {
  var arrOfNums = number.toString().split("").reverse();
  var checkDigit = Number(arrOfNums.shift());
  var arrOfDoubles = [];
  var sumDigits = [];


  //Make array where every other number is doubled
  for (var i = 0; i < arrOfNums.length; i ++ ) {
    if (i % 2 === 0 ) {
      arrOfDoubles.push(Number(arrOfNums[i]) * 2);
    } else {
      arrOfDoubles.push(Number(arrOfNums[i]));
    }
  }

  //Make array of sum of digits
  for (var i = 0; i < arrOfDoubles.length; i ++ ) {
    if (arrOfDoubles[i] > 9) {
      sumDigits.push(arrOfDoubles[i] - 9);
    } else {
      sumDigits.push(arrOfDoubles[i]);
    }
  }


  //Sum all digits
  var sum = 0;
  for (var i = 0; i < sumDigits.length; i ++ ) {
    sum += sumDigits[i];
  }


  // //Find check digit
  // var checkDigit = (sum * 9) % 10;


  //check if Valid
  if ((checkDigit + sum) % 10 === 0) {
    return true;
  } else {
    return false;
  }

}

console.log(check(4462009138008))
//check(502091324785);

module.exports = check;