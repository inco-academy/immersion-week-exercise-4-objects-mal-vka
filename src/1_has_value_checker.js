function hasValue(obj, val) {
  for (const item of Object.values(obj)) {
    if (item === val) {
      return true;
    } else {
      return false;
    };
  };
};

console.log(hasValue({ hello: "bonjour", my: "mon" }, "bonjour"));
console.log(hasValue({ hello: "bonjour", my: "mon" }, "hello"));
console.log(hasValue({ hello: "bonjour", my: "mon" }, "tasty"));

module.exports = hasValue;