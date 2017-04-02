function myCrib(n) {
  // building blocks
  var bl = '_';
  var wll = '|';
  var lRf = '/';
  var rRf= '\\';
  var sp = ' ';
  
  var sides = sp.repeat(n);
  var n2 = n * 2;
  
  // basic blocks from building blocks
  let ground = wll + bl.repeat(n2) + wll;
  let floor = wll + sp.repeat(n2) + wll;
  let roofGround = lRf + bl.repeat(n2) + rRf;
  let roofTop = sides + lRf + rRf + sides;
  
  let arr = [ground];
  
  for(let i = 1; i < n; i++) {
    arr.unshift(floor);
  }
  
  arr.unshift(roofGround);
  
  for(let i = 1; i < n; i++) {
    let middle = sp.repeat(ground.length - i * 2 - 2);
    let side = sp.repeat(i);
    let roofFloor = side + lRf + middle + rRf + side;
    arr.unshift(roofFloor);
  }
  
  arr.unshift(roofTop);
  
  return arr.join('\n');
}
