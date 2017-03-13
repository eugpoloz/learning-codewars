function findOutlier(arr){
  let outlier;
  
  for(let i = 0; i < arr.length; i++) {
    if (arr[0] % 2 == 0 && (arr[1] % 2 == 0 || (arr[1] % 2 !== 0 && arr[2] % 2 == 0)) ||
        arr[0] % 2 !== 0 && arr[1] % 2 == 0 && arr[2] % 2 == 0) {
      if (arr[i] % 2 !== 0) return outlier = arr[i];
    } else {
      if (arr[i] % 2 == 0) return outlier = arr[i];
    }
  }
  
  return outlier;
}

// I know it's bad and repetitive, but it works!