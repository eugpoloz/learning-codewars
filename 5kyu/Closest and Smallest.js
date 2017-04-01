function closest(str) {
  if (str === '') return [];
  
  var arr = str.split(' ');
  
  // compute weights
  var weights = [];
  arr.forEach((num, i) => {
    let weight = num.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return weights.push( weight );
  });
  
  // sort weights
  var sorted = weights.slice().sort((a, b) => a - b);
  
  var flags = {
   num1: sorted[0],
   num2: sorted[1],
   step: sorted[1] - sorted[0]
  };
  
  for(let i = 2; i < sorted.length; i++) {
    let num1 = sorted[i - 1];
    let num2 = sorted[i];
    let step = num2 - num1;
    if (step < flags.step) {
      flags.num1 = num1;
      flags.num2 = num2;
      flags.step = step;
    }
  }
  
  var idx1 = weights.indexOf(flags.num1);
  var idx2 = (idx1 !== weights.indexOf(flags.num2)) ? weights.indexOf(flags.num2) : weights.indexOf(flags.num2, idx1 + 1);
  
  return [ [flags.num1, idx1, parseInt(arr[idx1])], [flags.num2, idx2, parseInt(arr[idx2])] ];
}
