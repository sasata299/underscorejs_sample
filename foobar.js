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
