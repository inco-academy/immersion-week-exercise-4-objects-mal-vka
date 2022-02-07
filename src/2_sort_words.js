function sortWords(arr) {
  let obj = {
    "odd": [],
    "even": []
  };
  for (const str of arr) {
    if (str.length % 2 === 0) {
      obj["even"].push(str);
    } else {
      obj["odd"].push(str);
    };
  };
  return obj;
};

console.log(sortWords([]));
console.log(sortWords(["work", "hard", "mommy"]));
console.log(sortWords(["oh!", "ah!", "hi", "my"]));

module.exports = sortWords;