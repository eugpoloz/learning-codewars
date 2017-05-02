function alphabetPosition(text) {
  const words = text.toLowerCase().replace(/[^a-z]+/g, '');
  let nums = [];
  
  for(let i = 0, len = words.length; i < len; i++) {
    nums.push( words.charCodeAt(i) - 96 ); // because a starts at 97, and we start from 0 instead of 1
  }
  
  return nums.join(' ');
}
