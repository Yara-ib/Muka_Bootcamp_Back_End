console.log('<< ::: Task 1 ::: >>');
let daysOfWeek = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
];

console.log(daysOfWeek);
console.log('\n');

console.log('<< ::: Task 2 ::: >>');
// Adding element to the array;
// Changing the array itself in place,
// Returns the new length of the array after editing it
daysOfWeek.push('Days of the Week; Just on Earth, you know ..');
console.log(daysOfWeek);
console.log('\n');

// Remove the last item; added earlier
// Changing the array itself in place
daysOfWeek.pop();

console.log(daysOfWeek);
console.log('\n');

console.log('<< ::: Task 3 ::: >>');
let i = 0;
daysOfWeek.forEach((day) => {
  console.log(`@index: ${i} => ${day}`);
  i++;
});
console.log('\n');

console.log('<< ::: Task 4 ::: >>');
let newArray = [];
for (let i = 0; i <= 20; i++) {
  newArray.push(i);
}
const evenInArray = newArray.filter((item) => {
  return item % 2 == 0;
});
console.log(`Even Numbers in range of 1 -> 20: ${evenInArray}`);
console.log('\n');

console.log('<< ::: Task 5 ::: >>');
const mixedArray = [
  4, 60, 98, 88, 85, 58, 98, 10, 44, 21, 77, 38, 8, 35, 3, 39, 23, 80, 23, 80,
];
// Ascending Order
console.log(
  `Order in ascending Order ::> ${mixedArray.toSorted()}
`
);
// Descending Order
console.log(
  `Order in descending Order ::> ${mixedArray.toSorted().toReversed()}
`
);
