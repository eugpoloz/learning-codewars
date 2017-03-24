function number2words(n){
  let arr = n.toString().split('');
  let len = arr.length;
  let spelledOut = [];
  
  // create text arrays
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const decimals = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const ties = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',  'ninety'];
  
  // single digit
  function doOnes(i0) {
    spelledOut.push( ones[arr[i0]] );
  }
  
  // two digits
  function doDoubles(i0, i1) {
    if (arr[i0] == 1) {
      spelledOut.push( decimals[ arr[i1] ] );
    } else {
      var t = ties[ arr[i0] - 2 ];
      spelledOut.push( arr[i1] != 0 ? `${t}-${ones[ arr[i1] ]}` : `${t}` );
    }
  }
  
  // three digits
  function doHundreds(i0, i1, i2) {
    var h = ' hundred';
    if (arr[i0] != 0) spelledOut.push(arr[i1] != 0 || arr[i2] != 0 ? `${ones[ arr[i0] ]}${h} ` : `${ones[ arr[i0] ]}${h}`);
    if (arr[i1] != 0) doDoubles(i1,i2);
    if (arr[i1] == 0 && arr[i2] != 0) doOnes(i2);
  }
  
  // > three digits
  function doThousands() {
    var t = ' thousand';
    if (len == 4) {
      spelledOut.push( arr[1] != 0 || arr[2] != 0 || arr[3] != 0 ? `${ones[ arr[0] ]} thousand ` : `${ones[ arr[0] ]} thousand` );
      doHundreds(1, 2, 3);
    } else if (len == 5) {
      doDoubles(0, 1);
      spelledOut.push( arr[2] != 0 || arr[3] != 0 || arr[4] != 0 ? `${t} ` : `${t}` );
      doHundreds(2, 3, 4);
    } else if (len == 6) {
      doHundreds(0, 1, 2);
      spelledOut.push( arr[3] != 0 || arr[4] != 0 || arr[5] != 0 ? `${t} ` : `${t}` );
      doHundreds(3, 4, 5);
    }
  }
  
  switch(len) {
    case 1:
      doOnes(0);
      break;
    case 2:
      doDoubles(0,1);
      break;
    case 3:
      doHundreds(0,1,2);
      break;
    default:
      doThousands();
      break;
  }
  
  return spelledOut.join('');
}
