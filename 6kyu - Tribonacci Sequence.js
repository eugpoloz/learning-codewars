'esversion: 6';

function tribonacci(signature,n){
  let arr = [];
  
  // if n==0, return an empty array and exit
  if (n==0) return arr;
  
  // if n!=0, go into tribonacci stuff cycle
  for(let i = 0; i < n; i++) {
    let nextNum;
    
    // if i < 3, assign nextNum as signature[i], else - compute it from previous indexes
    i < 3 ? nextNum = signature[i] : nextNum = arr[i-1] + arr[i-2] + arr[i-3];
    
    arr.push(nextNum);
  }
  
  return arr;
}