function findUniq(arr) {
  return arr.filter((el, i, arr) => {
    return (arr[0] == arr[1] || arr[0] == arr[2]) ? el != arr[0] : el != arr[1];
  })[0];
}
