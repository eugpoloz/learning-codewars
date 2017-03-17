function toCamelCase(str){
  let arr = str.includes("-") ? str.split("-") : str.split("_");
  let camel;
  
  for(let i = 0; i < arr.length; i++) {
    let w = arr[i];
    camel = (i == 0) ? w.toString() : camel + `${w.charAt(0).toUpperCase()}${w.substr(1)}`;
  }
  
  return camel;
}
