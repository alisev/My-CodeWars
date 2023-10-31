// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
function isPrime(num) {
  if (num <= 1) return false;
  else if (num <= 3) return true;
  else {
    sqroot = Math.sqrt(num);
    for (let i = 2; i <= sqroot; i++) {
      if (num % i === 0) return false;
    }
  }
  return true;
}
