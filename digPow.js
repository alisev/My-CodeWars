// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

// version 1, O(log n)
function getDigits(value)  {
  const digits = [];
  while (value > 0) {
    const n = value % 10;
    digits.push(n);
    value = Math.floor(value/10);
  }
  return digits;
}

function digPow(n, p){
  const digits = getDigits(n);
  let sum = 0;
  for (let i = 0; i < digits.length; i++) { // the digits are stored backwards in the array
    sum += digits[digits.length - 1 - i] ** (p + i);
  }
  const k = sum % n === 0 ? sum/n : -1;
  return k;
}

// version 2, O(log n)
function digPow(n, p){
  let sum = 0;
  n.toString().split('').map(Number)  // turns n into array of digits
    .forEach(function (digit, i) {    // calculates n[i]^(p + 1)
    sum += digit ** (p + i);
  });
  return sum % n === 0 ? sum/n : -1;  // checks if k is integer
}
