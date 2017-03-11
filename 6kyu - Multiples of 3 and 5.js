function solution(number){
  let arr = [];
  
  for(let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) arr.push(i);
  }
  
  let sum = (!arr.length) ? 0 : arr.filter((el, i, arr) => i == arr.indexOf(el))
                                   .reduce( (prev, curr) => prev + curr);
                           
  return sum;
}