// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. 

function solution(input, markers) {
  const regex = new RegExp(markers.map((mark) => ' ?\\'+mark).join('|'));
  return input.split('\n').reduce(
    (o, line) => {
      let pos = line.search(regex);
      let cleanLine = pos > -1 ? line.slice(0, pos) : line;
      return o + cleanLine + '\n';
    }, ""
  ).trim();
};
