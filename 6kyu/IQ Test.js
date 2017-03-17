function iqTest(numbers){
  const arr = numbers.split(' ');
  let iq;
  
  for(let i = 0; i < arr.length; i++) {
    if ((arr[0] % 2 == 0 && (arr[1] % 2 == 0 || arr[1] % 2 !== 0 && arr[2] % 2 == 0 )) ||
        (arr[0] % 2 !== 0 && arr[1] % 2 == 0 && arr[2] % 2 == 0)) {
         if (arr[i] % 2 !== 0) return iq = i + 1;
    } else {
      if (arr[i] % 2 == 0) return iq = i + 1;
    }
  }
  
  return iq;
}