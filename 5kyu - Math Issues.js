Math.round = function(number) {
  var num = parseInt(number.toString().split('.')[0]);
  var num2 = num + 1;
  var rem = number - num;
  
  return num2 - number > rem ? num : num2;
};

Math.ceil = function(number) {
  var num = parseInt(number.toString().split('.')[0]);
  var num2 = num + 1;
  
  return num / number < 1 ? num2 : num;
};

Math.floor = function(number) {
  return parseInt(number.toString().split('.')[0]);
};
