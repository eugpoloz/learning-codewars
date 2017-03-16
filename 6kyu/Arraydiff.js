'esversion: 6';
'use strict';

function array_diff(a, b) {
  return a.filter(el => b.indexOf(el) === -1);
}
