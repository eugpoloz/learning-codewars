function sameColSeq(val, k, col) {
    // your code here
    var colors = ['red', 'yellow', 'blue'];
    var val2 = 2 * k * val;
    
    function f(n) {
      return n === 1 ? 1 : f(n - 1) + n;
    }
    
    function color(el) {
      switch (el % 3) {
        case 0:
          return 'blue';
        case 1:
          return 'red';
        default:
          return 'yellow';
      }
    }
    
    function n(val, count) {
      return val >= f(count) ? n(val, count + 1) : count ;
    }
//     let counted = 1,
//     result = 1;
//     while (val >= result) {
//       counted++;
//       result = f(counted);
//     }
    
    let counted = n( val, 1 );
    let arr = [];
    
    for(let i = f(counted); i < val2; i = f(counted++)) {
      i = f(counted);
      if (color(i) === col) arr.push( i );
      if (arr.length === k) break;
    }
    
    return arr;
}
