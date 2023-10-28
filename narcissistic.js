// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 

// version 1
function narcissistic(value) {
  const getDigits = (value) => {
    const digits = [];
    while (value > 0) {
      const n = value % 10;
      digits.push(n);
      value = Math.floor(value/10);
    }
    return digits;
  }
  
  const digits = getDigits(value);
  const sum = digits.reduce(function (sum, digit) {
    return sum + digit ** digits.length;
  }, 0);
  return sum === value;
}

// version 2
function narcissistic(value) {
  const digits = value.toString().split('').map(Number);
  const sum = digits.reduce(function (sum, digit) {
    return sum + digit ** digits.length;
  }, 0);
  return sum === value;
}
