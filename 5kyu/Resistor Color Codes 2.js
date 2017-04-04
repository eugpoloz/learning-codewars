function encodeResistorColors(ohmsStr) {
  const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
  const ohmsInit = ohmsStr.split(' ')[0];
  
  let ohms = ohmsInit;
  
  // build full number
  const lastIdx = ohmsInit.substr(-1);
  if ( lastIdx === 'k' || lastIdx === 'M') {
    const m = lastIdx === 'k' ? 1000 : 1000000 ;
    ohms = (+ohmsInit.substr(0, ohmsInit.length-1) * m);
    ohms = ohms.toString();
  }
  
  // build third band
  let pow = 0;
  if (ohms.length > 2) {
    for(let len = ohms.length, i = len - 1; i > 1; i--) {
      if (ohms[i] == 0) {
        pow += 1;
      } else {
        break;
      }
    }
  }
  
  return colors[+ohms.substr(0,1)] +' '+ colors[+ohms.substr(1,1)] +' '+ colors[pow] +' gold';
