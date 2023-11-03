// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// version 1
// rounds values
const roundRGB = (num) => {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}

// converts to hex
const convert2hex = (num) => {
  const hexVals = {10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F"};
  let hex = "";
  for (let i = 0; i < 2; i++) {
    const rem = num % 16;
    hex = rem > 9 ? hexVals[rem]+hex : rem+hex;
    num = Math.floor(num/16);
  }
  return hex;
}

function rgb(r, g, b) {
  r = roundRGB(r);
  g = roundRGB(g);
  b = roundRGB(b);
  return convert2hex(r) + convert2hex(g) + convert2hex(b);
}

// version 2
function rgb(r, g, b){
	return convert2hex(r)+convert2hex(g)+convert2hex(b);
}

function convert2hex(num) {
  return num <= 0 ? "00" :
    num >= 255 ? "FF" :
    ("0"+(Number(num).toString(16))).slice(-2).toUpperCase();
}
