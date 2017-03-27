function phone(str, num) {
  var arr = str.split('\n');
  
  for(let i = 0; i < arr.length; i++) {
    // parse unnecessary characters from our str
    let person = arr[i].toString().replace(/[^0-9a-z\s\_\'\-\.\<\>]/gi, '').trim();
    // parse our str for name, phone and address
    let name = person.replace(/<([^]+)>|[^]/gi, '$1');
    let phone = person.replace(/(\d?\d\-\d{3}\-\d{3}\-\d{4})|[^]/gi, '$1');
    let address = person.replace(/(\d?\d\-\d{3}\-\d{3}\-\d{4})|<([^]+)>/gi, '')
                        .replace(/\s+|\_/gi, ' ')
                        .trim();
    // change arr[i] to object with prettified input
    arr.splice(i, 1, {phone: phone, name: name, address: address});
  }
  
  // filter final array
  var lookup = arr.filter(el => el.phone === num);
  
  // and configure our str returns w/ template
  if (lookup.length !== 1) {
    return `Error => ${lookup.length === 0 ? 'Not found' : 'Too many people'}: ${num}`;
  } else {
    return `Phone => ${num}, Name => ${lookup[0].name}, Address => ${lookup[0].address}`;
  }
}
