function hasValueDepth(dataObj, str) {
  let result = false;
  for (const item of Object.values(dataObj)) {
    if (!(item instanceof Object)) {
      if (item === str) {
        result = true;
        break;
      }
    } else {
      result = hasValueDepth(item, str);
    };
  };
  return result;
};



const obj = {
  "hello": "world",
  "goDeeper": {
    1961: "Barack Obama",
    1964: "Michelle Obama",
    1935: "Elvis Presley",
    1984: {
      "author": "George Orwell",
      "genre": "dystopia",
    }
  }
};

console.log(hasValueDepth(obj, "hello"));
console.log(hasValueDepth(obj, "Elvis Presley"));
console.log(hasValueDepth(obj, "author"));
console.log(hasValueDepth(obj, "dystopia"));


module.exports = hasValueDepth;