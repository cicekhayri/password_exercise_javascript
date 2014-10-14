function sumArray() {
  var sum = [1,2,3,4,5].reduce(function(a,b) {
    return a + b;
  })
  return sum;
};

function averageArray() {
  var sum = 0;
  var average = [1,2,3,4,4,2,5];

  for (var i = 0; i < average.length; i++) {
    sum += parseInt(average[i]);
  }

  var avg = sum/average.length;
  return avg;
}

