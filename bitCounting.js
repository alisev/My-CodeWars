// Bit Counting
var countBits = function(n) {
  let ones = 0;
  while (n > 0) {
    if (n % 2 === 1) ones++;
    n = Math.trunc(n / 2);
  }
  return ones;
};
