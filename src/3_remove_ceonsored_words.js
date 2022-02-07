function rmCensored(obj) {

  for (const [key, value] of Object.entries(obj)) {
    if (key.includes("*") || value.includes("*")) {
      delete obj[key];
    };
  };
  return obj;
};

console.log(rmCensored({
  "s*it": "m*rde",
  "sweet jesus": "doux jesus",
  "f***": "",
  "omg": "w*sh",
}));
console.log(rmCensored({
  "potato": "starch",
  "spin*ch": "green",
  "collard": "green",
  "tomato": "fr*it",
}));

module.exports = rmCensored;