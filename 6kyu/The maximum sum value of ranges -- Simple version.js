function maxSum(arr,range){
  let sums = [];
  range.forEach(r => {
    let inner = arr.slice(r[0], r[1] + 1);
    return sums.push( inner.reduce((acc, curr) => acc + curr, 0) );
  });
  
  return sums.length === 1 ? sums[0] : sums.reduce((acc, curr) => Math.max(acc, curr));
}
