// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.
function toCamelCase(str){
  const delimiter = /[-_]/;
  const arr = str.split(delimiter);
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += (i === 0) ? arr[i] : arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return res;
}

function toCamelCaseV2(str) {
  const capitalize = (substr) => {
    return substr.charAt(1).toUpperCase();
  };
  return str.charAt(0) = str.slice(1).replace(/[-_][a-z]/g, (substr) => capitalize(substr));
}

// When writing on Twitter, [Jaden Smith] is known for almost always capitalizing every word.
// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith.
String.prototype.toJadenCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).replace(/ [a-z]/g, (substr) => substr.toUpperCase());
};

