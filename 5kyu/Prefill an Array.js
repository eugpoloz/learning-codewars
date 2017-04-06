function prefill(n, v) {
  if (!/^[\d]+$/.test(n) || n < 0)
    throw new TypeError(`${n} is invalid`);
  
  var arr = [];
  // no loops, only recursion!
  function recursive(n, v) {
    if (n < 1) return arr;
    arr.push( v );
    recursive(n - 1, v);
  }
  recursive(n, v);
  
  return arr;
}
