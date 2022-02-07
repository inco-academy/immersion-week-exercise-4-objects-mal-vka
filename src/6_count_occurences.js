function countOccurences(str) {
  words = str.split(" ");
  const obj = {};
  const objFlip = {};

  for (const word of words) {
    !obj[word] ? obj[word] = 1 : obj[word] += 1;
  };

  for (const key in obj) {
    !objFlip[obj[key]] ? objFlip[obj[key]] = [key] : objFlip[obj[key]].push(key);
  };

  return objFlip;
};

module.exports = countOccurences;

console.log(countOccurences("hello is it you hello hello"));
console.log(countOccurences("hey mama hey mama"));