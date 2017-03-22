function sumDigPow(a, b) {
  let eureka = [];
  
  for(let num = a; num <= b; num++) {
    const conSum = num.toString()
                      .split('')
                      .reduce((acc, cur, i) => acc + Math.pow(cur, i+1), 0);
    
    if (conSum === num) eureka.push(num);
  }
  
  return eureka;
}
