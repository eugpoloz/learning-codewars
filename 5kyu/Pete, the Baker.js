function cakes(recipe, available) {
  
  let cakes = 0;
  let arr = [];
  
  for (var key in recipe) {
    if (!available.hasOwnProperty(key)) return cakes; // if ingredient if not available, break loop
    let howMany = Math.floor(parseInt(available[key]) / parseInt(recipe[key]));
    if(howMany == 0) return cakes; // if not enough ingredients, break loop
    arr.push(howMany); // else, push to arr
  }
  
  cakes = arr.reduce( (a, b) => Math.min(a,b) ); // find the lowest number (= possible cakes)
  
  return cakes;
}