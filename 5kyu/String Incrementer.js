function incrementString(str) {
  var text = str.replace(/([^a-zA-Z]+)$/, '');
  var num = str.replace(/^([^\d]+)/, '');
  
  if (num === '')
    return str + 1;
  
  var added = (+num + 1).toString();
  if (added.length < num.length)
    added = '0'.repeat(num.length - added.length) + added;
  
  return text + added;
}
