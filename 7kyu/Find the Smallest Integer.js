'esversion: 6';
'use strict';

class SmallestIntegerFinder {
  findSmallestInt(args) {
    var smallest = args.reduce((a, b) => Math.min(a,b));
    
    return smallest;
  }
}
