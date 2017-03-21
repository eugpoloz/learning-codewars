function rank(st, we, n) {
  const arr = st.split(',');
  
  if (arr.length < n) {
    return st == '' ? 'No participants' : 'Not enough participants';
  }
  
  let winArr = [];
  let winNums = [];
  
  arr.forEach((name, idx) => {
    const num = 'a'.charCodeAt(0) - 1;
    let nameArr = [];
    
    for(let i = 0, len = name.length; i < len; i++) {
      nameArr.push( name.toLowerCase().charCodeAt(i) - num );
    }
    
    return winArr.push( nameArr.reduce((a, b) => a + b, name.length) );
  });
  
  for(let i = 0, len = winArr.length; i < len; i++) {
    winArr.splice( i, 1, winArr[i] * we[i] );
    winNums.push( [winArr[i], arr[i]] );
  }
  
  winNums = winNums.sort((a, b) => {
    if (b[0] == a[0]) { // if weights are equal, sort alphabetically
      var nameA = a[1].toLowerCase();
      var nameB = b[1].toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else { // if weights are not equal, sort by them
      return b[0] - a[0];
    }
  });
  
  return winNums[n - 1][1];
}
