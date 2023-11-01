// Converts given number to roman numeral.

// version 1, unoptimized
function solution(number){
  const cheatsheet = [
    {1: "I", 5: "V"},  // 1, 5
    {1: "X", 5: "L"},  // 10, 50
    {1: "C", 5: "D"},  // 100, 500
    {1: "M"}           // 1000
  ];
  const digits = number.toString().split('').map(Number);
  let res = "";
  for (let i = 0; i < digits.length; i++) {
    const power = digits.length - 1 - i;
    switch (digits[i]) {
        case 1:
        case 2:
        case 3:
          res += cheatsheet[power][1].repeat(digits[i]);
          break;
        case 4:
          res += cheatsheet[power][1] + cheatsheet[power][5];
          break;
        case 5:
          res += cheatsheet[power][5];
          break;
        case 6:
        case 7:
        case 8:
          res += cheatsheet[power][5] + cheatsheet[power][1].repeat(digits[i] - 5);
          break;
        case 9:
          res += cheatsheet[power][1] + cheatsheet[power + 1][1];
          break;
    }
  }
  return res;
