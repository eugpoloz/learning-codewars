const binaryArrayToNumber = arr => {
  const binaryStr = arr.join('');
  
  return parseInt(binaryStr, 2);
};