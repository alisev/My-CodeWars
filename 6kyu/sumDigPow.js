// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b] (inclusive)
// and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
  const arr = Array.from({length: b - a + 1}, (_, index) => index + a); // array in range (a, b)
  return arr.filter((num) => {
    const digits = num.toString().split('').map(Number);
    const sum = digits.reduce(
      (acc, digit, index) => acc + digit ** (index + 1), 0
    );
    return sum === num;
  });
}
