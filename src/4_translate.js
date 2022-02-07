function translate(obj, str) {
  let output = [];
  let arr = str.split(" ");
  for (const word of arr) {
    if (!obj[word]) {
      return "Error: missing value";
    } else {
      output.push(obj[word]);
    }
  };
  console.log(output.join(" "));
  return output.join(" ");
};

console.log(translate({
  "je": "I",
  "suis": "am",
  "pere": "father",
  "ton": "your"
}, "je suis ton pere"
));
console.log(translate({
  "the": "le",
  "cute": "mignon",
  "your": "ton",
  "dog": "chien",
  "is": "est"
}, "the dog is cute"
));
console.log(translate({
  "the": "le",
  "cute": "mignon",
  "your": "ton",
  "dog": "chien",
  "is": "est"
}, "the dog is fluffy"
));

module.exports = translate;