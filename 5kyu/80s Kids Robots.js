function fight(r0, r1, tactics) {
  var arr = [r0, r1].sort((a, b) => a.speed < b.speed); // sort our robots by speed
  var tacticsLen = r0.tactics.length < r1.tactics.length ? r1.tactics.length : r0.tactics.length;
  var h1 = arr[0].health; // first attacking robot's health
  var h2 = arr[1].health; // second attacking robot's health
  
  function fight(roundIdx, r) {
    var tact = arr[r].tactics[roundIdx];
    var blow = tactics[ tact ];
    
    return tact ? blow : 0;
  }
  
  for(let i = 0; i < tacticsLen; i++) {
    if (h1 > 0) h2 -= fight(i, 0); // first blow
    if (h2 > 0) h1 -= fight(i, 1); // second blow
  }
  
  if (h1 == h2) return 'The fight was a draw.';
  return `${ h1 > h2 ? arr[0].name : arr[1].name } has won the fight.`
}
