// Bit Counting
var countBits = function(n) {
  let ones = 0;
  while (n > 0) {
    let rem = n % 2;
    if (rem === 1) ones++;
    n = Math.trunc(n / 2);
  }
  return ones;
};
