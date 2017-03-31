function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  // our code starts here
  if (head === null || head.next === null) throw new Error('Invalid input!');
  
  var arr = [];
  
  // helper function: iterate over object and push all list nodes to arr
  function iterateObj(obj) {
    Object.keys(obj).forEach(key => {
      if (obj[key] !== null && typeof obj[key] === 'object') {
          iterateObj(obj[key]);
          return;
      }
      if (key === 'data') return arr.push(obj[key]);
    });
  }
  
  // helper function: iterate over array to create a list
  function createObj(arr) {
    return arr.reverse().reduce((obj, curr, i) => obj = {data: curr, next: i === 0 ? null : obj}, {});
  }
  
  // ... call our object iteration to create our arr ...
  iterateObj(head);
  
  // ... filter it to make separate arrays ...
  var arr1 = arr.filter((val, i) => i % 2 === 0);
  var arr2 = arr.filter((val, i) => i % 2 !== 0);
  
  // ... create objects ...
  var obj1 = createObj(arr2);
  var obj2 = createObj(arr1);

  // ... and return new Context class
  return new Context(obj2, obj1);
}
