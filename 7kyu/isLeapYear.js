// Check if given year is a leap year.

//version 1
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  else if (year % 100 === 0) return false;
  else if (year % 4 === 0) return true;
  return false;
}

// version 2 - optimized, return line contains only the true cases
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

//found
const moment = require('moment');

function isLeapYear(year) {
  return moment([year]).isLeapYear()
}
