function list(names){
  let str = '';
  
  if (names.length > 0) names.forEach((n, i, arr) => {
    let char = (i == arr.length-1) ? ' & ' : ', '
    str += (i != 0) ? `${char}${n.name}` : n.name;
  });
  
  return str;
}