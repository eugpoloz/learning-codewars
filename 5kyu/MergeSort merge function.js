function mergesorted(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  if (aLen === 1 & bLen === 1 || a[aLen - 1] < b[0]) return a.concat(b);
  
  let sorted = a;
  
  for(let i = bLen - 1; i > -1; i--) {
    let idx = sorted.indexOf(b[i]) !== -1 ? sorted.indexOf(b[i]) : 0;
    sorted.splice(idx, 0, b[i]);
  }
  
  return sorted;
}
