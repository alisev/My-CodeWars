// The goal of this exercise is to convert a string to a new string where
// each character in the new string is "(" if that character appears only once in the original string,
// or ")" if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// time complexity: O(2n)
function countLetters(word) {
  let seen = {};
  for (let letter of word) {
    seen[letter] = (seen.hasOwnProperty(letter)) ? seen[letter] + 1 : 1;
  }
  return seen;
}

function duplicateEncode(word){
  word = word.toLowerCase();
  const seenLetters = countLetters(word);
  let str = "";
  for (let letter of word) {
    str += (seenLetters[letter] === 1) ? "(" : ")";
  }
  return str;
}

// v2, does not work onstrings with non-alphanumeric symbols
// may be bad practice as it modifies word as it iterates it
function duplicateEncode(word){
  word = word.toLowerCase();
  for (let letter of word) {
    if (letter === ')') continue;
    let regex = new RegExp (letter, 'g');
    let counter = word.split('').filter(char => char === letter).length;
    word = (counter > 1) ? word.replace(regex, ')') : word.replace(regex, '(');
  }
  return word;
}

//v3, its time complexity is O(n^2)
function isUniqueLetter(word, letter) {
  return word.lastIndexOf(letter) == word.indexOf(letter);
}

function duplicateEncode(word){
  let unique='';
  word = word.toLowerCase();
  for(let i = 0; i < word.length; i++){
    unique += isUniqueLetter(word, word[i]) ? "(" : ")";
  }
  return unique;
}
