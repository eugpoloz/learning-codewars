function mix(s1, s2) {
  function makeArr(str) {
    return str.replace(/[^a-z]+/g, '').split('');
  }
  
  function reduceToObj(arr) {
    return arr.reduce((arr, letter) => { 
      letter in arr ? arr[letter]++ : arr[letter] = 1;
      return arr;
    }, {});
  }
  
  var obj1 = reduceToObj(makeArr(s1));
  var obj2 = reduceToObj(makeArr(s2));
  
  var keys = Object.keys(obj1).concat(Object.keys(obj2)).sort().filter((item, pos, arr) => !pos || item != arr[pos - 1]);
  var jointArr = [];
  
  for(let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let str;
    let str1 = key.repeat(obj1[key]);
    if ( obj1.hasOwnProperty(key) & (!obj2.hasOwnProperty(key) || (obj2.hasOwnProperty(key) & obj1[key] > obj2[key])) ) {
      str = `1:${str1}`;
    } else if ( obj2.hasOwnProperty(key) & (!obj1.hasOwnProperty(key) || (obj1.hasOwnProperty(key) & obj1[key] < obj2[key])) ) {
      str = `2:${key.repeat(obj2[key])}`;
    } else {
      str = `=:${str1}`;
    }
    jointArr.push(str);
  }
   
  return jointArr.filter(str => str.length > 3).sort((a, b) => {
    if (b.length == a.length) return (a.charCodeAt(0) == b.charCodeAt(0)) ? a.charCodeAt(2) - b.charCodeAt(2) : a.charCodeAt(0) - b.charCodeAt(0);
    return b.length - a.length;
  }).join('/');
}