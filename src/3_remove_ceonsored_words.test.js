const rmCensored = require("./3_remove_ceonsored_words");

test("Remove Censored (1)", () => {
  const swearWords = {
    "s*it": "m*rde",
    "sweet jesus": "doux jesus",
    "f***": "",
    "omg": "w*sh",
  };

  expect(rmCensored(swearWords)).toStrictEqual({ "sweet jesus": "doux jesus" });
});

test("Remove Censored (2)", () => {
  const veggies = {
    "potato": "starch",
    "spin*ch": "green",
    "collard": "green",
    "tomato": "fr*it",
  };

  expect(rmCensored(veggies)).toStrictEqual({ "potato": "starch", "collard": "green" });
});
