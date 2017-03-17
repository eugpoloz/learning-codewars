//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce((acc, val) => {
    val.match(/(?:\:|\;)(\-|\~)?(?:D|\))/g) && acc++;
    return acc;
  }, 0);
}
