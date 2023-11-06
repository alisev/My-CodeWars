// parse seconds to HH:MM:SS format

function humanReadable (seconds) {
  let time = [];
  for (let i = 2; i >= 0; i--) {
    let calc = ("0" + Math.floor(seconds / 60 ** i)).slice(-2);
    time.push(calc);
    seconds -= 60 ** i * calc;
  }
  return time.join(':');
}
