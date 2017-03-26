function Xbonacci(signature,n){
  const x = signature.length; // number of elements
  var sequence = signature;
  
  if (n > x) {
    for(let i = x; i < n; i++) {
      let sum = 0;
      for(let j = sequence.length - x; j < sequence.length; j++) {
        sum += sequence[j];
      }
      sequence.push( sum );
    }
  } else if (n < x) {
    while(sequence.length > n) {
      sequence.pop();
    }
  }
  
  return sequence;
}
