function groupFamilies(list) {
  const families = {};
  for (const person of list) {
    if (!families[person.surname]) {
      families[person.surname] = [person.name];
    } else {
      families[person.surname].push(person.name);
    };
  };
  return families;
};

console.log(groupFamilies([
  { "name": "Barack", "surname": "Obama" },
  { "name": "Michelle", "surname": "Obama" }]
));
console.log(groupFamilies([
  { "name": "Barack", "surname": "Obama" },
  { "name": "Michelle", "surname": "Obama" },
  { "name": "Donald", "surname": "Trump" }]
));

module.exports = groupFamilies;