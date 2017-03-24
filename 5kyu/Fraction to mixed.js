function mixedFraction(s){
  var arr = s.split('/');
  var theNum = arr[0]; // nominator
  var theDen = arr[1]; // denominator
  var num = Math.abs(theNum);
  var den = Math.abs(theDen);
  
  if (den == 0) throw new Error('Can\'t divide by zero!');
    
  // find smallest common divisor (taken from stackoverflow)
  var gcd = function(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
  };
  
  var divisor = gcd(num, den);
  if (divisor != 1 || divisor != den) {
    num = num / divisor;
    den = den / divisor;
  }
  
  // determine whole and it's remainder
  var whole = Math.floor(num / den);
  var rem = num % den;
  
  // determine sign
  var sign = Math.sign(theNum) != Math.sign(theDen) ? '-' : '';
  
  return rem !== 0 ? `${sign}${whole != 0 ? whole+' ' : ''}${rem}/${den}` : `${whole != 0 ? sign : ''}${whole}`;
}
