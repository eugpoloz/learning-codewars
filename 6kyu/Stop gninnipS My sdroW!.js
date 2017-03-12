'use strict';

function spinWords(str){
  let arr = str.split(' ');
  let spinnedArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    // if str length is more or equal to five...
    if (arr[i].length >= 5) {
      const word = [...arr[i]];
      let newWordArr = [];
      
      // ... reverse it
      for(let j = word.length; j > -1 /* because last array index is 0! */; j--) {
        newWordArr.push(word[j]);
      }
      
      // replace original word in the loop with our new array, joined
      arr[i] = newWordArr.join('');
    }
    
    spinnedArr.push(arr[i]);
  }
    
  return spinnedArr.join(' ');
}