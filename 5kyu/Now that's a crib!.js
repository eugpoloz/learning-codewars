function myCrib(n) {
  var r = (n !== 1) ? n + (n - 1) : n;
  var n2 = n * 2;
  
  var block = '_'.repeat(r);
  var foundation = `|${block}|${block}|${block}|`;
  var roofTop = ' '.repeat(n2) + '_'.repeat(r + 2) + ' '.repeat(n2);
  
  var groundLen = foundation.length - 2;

  // crib array here
  let crib = [roofTop];
  
  for(let i = n2 - 1; i > -1; i--) {
    let len = groundLen - i*2;
    let spaces = ' '.repeat(i);
    let roofFloor = `${spaces}/${'_'.repeat(len)}\\${spaces}`;
    crib.push(roofFloor);
  }
  
  for(let i = n2 - 1; i > 0; i--) {
    let spaces = ' '.repeat(r);
    let middle = ' '.repeat(groundLen);
    if (i === n) middle = `${spaces} ${block} ${spaces}`;
    if (i < n) middle = `${spaces}|${spaces}|${spaces}`;
    crib.push(`|${middle}|`);
  }
 
  crib.push(foundation);
  
  return crib.join('\n');
}
