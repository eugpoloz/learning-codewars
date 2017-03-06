'esversion: 6';
'use strict';

function XO(str) {  
  let exes = 0;
  let ohs = 0;
  
  for(let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char == "x") exes++;
    if (char == "o") ohs++;
  }
  
  let bool;
  exes == ohs ? bool = true : bool = false;
  
  return bool;
}
