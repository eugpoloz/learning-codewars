function order(words){
  if (words == '') return '';

  // else if...
  const arr = words.split(' ');
  let newArr = arr.sort((a, b) => {
    let [aDigit, bDigit] = [parseInt(a.replace(/\D/gi,'')), parseInt(b.replace(/\D/gi,''))];
    return aDigit - bDigit;
  });
  
  return newArr.join(' ');
}
