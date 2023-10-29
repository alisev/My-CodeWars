// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowStr = string.toLowerCase();
  for (let letter of alphabet) {
    if (lowStr.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}
