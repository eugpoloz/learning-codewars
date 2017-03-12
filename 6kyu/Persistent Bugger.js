'esversion: 6';
'use strict';

function persistence(num) {
  // set up a flag
  let count = 0;
  
  // set up a variable for a changing number
  let nextNum = num;

  // write a generic function to count all digits in numbers
  function splitter(num) {
    let number = num.toString().split('');
    // reset nextNum for the purposes of this function
    nextNum = 1;
    
    for(let i = 0; i < number.length; i++) {
      nextNum = nextNum * number[i];
    }
    
    return nextNum;
  }
  
  // make a loop to repeat a function and reassign nextNum
  // while nextNum is more than 1 digit
  while (nextNum.toString().length > 1) {
    count++;
    nextNum = splitter(nextNum);
  }
  
  return count;
}
