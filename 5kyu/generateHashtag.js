// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  let hashtag = "#" + str.split(' ').reduce(
    (res, word) =>
    res + word.charAt(0).toUpperCase() + word.slice(1),
    ""
  );
  return hashtag.length <= 140 && hashtag.length > 1 ? hashtag : false;
}
