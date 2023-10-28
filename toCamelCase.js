// Convert string to camel case
function toCamelCase(str){
  const delimiter = /[-_]/;
  const arr = str.split(delimiter);
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += (i === 0) ? arr[i] : arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return res;
}
