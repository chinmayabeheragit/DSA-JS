 function charFrequency(str) {
  var freq = {};
  var i = 0;

  while (i < str.length) {
    var ch = str[i];

    if (freq[ch] === undefined) {
      freq[ch] = 1;
    } else {
      freq[ch] = freq[ch] + 1;
    }

    i++;
  }

  return freq;
}
let str = charFrequency ('chinmaya');
console.log(str);
