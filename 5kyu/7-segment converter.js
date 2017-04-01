function sevenSegmentNumber(num) {
  if (num == NaN || (num > 9 && num < 0)) throw new Error('Input is invalid!');

  let binary = ['1111101', '1010000', '0110111', '1010111', '1011010', '1001111', '1101111', '1010001', '1111111', '1011111'][num];
  return parseInt(binary, 2);
}
