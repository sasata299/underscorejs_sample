var members = [
  { name: 'taka',   age: 33 },
  { name: 'kanako', age: 28 },
  { name: 'ryo',    age: 30 }
];
//console.log(members);

_.each(members, function(member, i) {
  console.log(member);
  console.log(i);
});

var humans = [
  { name:"Christ", religion:"Christianity", birth:1 },
  { name:"Buddha", religion:"Buddhism", birth:-563 },
  { name:"Bill Gates", religion:"Christianity", birth:1955 },
  { name:"Steve Jobs", religion:"Buddhism", birth:1955 }
];

var results = _.where(humans, { religion: "Buddhism" });
console.log(results);

console.log(_.random(0, 100));
