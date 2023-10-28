// Convert string to camel case. E.g. the-stealth-warrior to theStealthWarrior
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

// capitalize every word in sentence
String.prototype.toJadenCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).replace(/ [a-z]/g, (substr) => substr.toUpperCase());
};

