function dirReduc(arr){
  function splice(arr) {
    let wasSpliced = false;
    for(let i = 1, len = arr.length; i < len; i++) {
      if ((arr[i] !== arr[i-1]) &
          ((
            (arr[i] === 'NORTH' || arr[i] === 'SOUTH') & (arr[i-1] === 'NORTH' || arr[i-1] === 'SOUTH')
          ) || (
            (arr[i] !== arr[i-1]) & (arr[i] === 'WEST' || arr[i] === 'EAST') & (arr[i-1] === 'WEST' || arr[i-1] === 'EAST')
          ))
      ) {
        arr.splice(i-1, 2);
        wasSpliced = true;
      }
    }
    return wasSpliced ? splice(arr) : arr ;
  }
  
  return splice(arr);
}
