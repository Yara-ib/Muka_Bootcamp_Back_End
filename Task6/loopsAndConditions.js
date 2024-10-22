// Control Flow
console.log('<::: Control Flow Tasks :::>', '\n');

// Task 1
console.log(':: Task 1; Output ::');
let age = 2;
if (age >= 18) {
  console.log("You're allowed to vote, Go on!");
} else {
  console.error("Sorry, you can't vote yet");
}
console.log('\n');

// Task 2
console.log(':: Task 2; Output ::');
let dayNumber = '7';
switch (dayNumber) {
  case '1':
    console.log('Saturday');
  case '2':
    console.log('Sunday');
  case '3':
    console.log('Monday');
  case '4':
    console.log('Tuesday');
  case '5':
    console.log('Wednesday');
  case '6':
    console.log('Thursday');

  default:
    console.log("Finally it's Friday; 7");
}
console.log('\n');

// Task 3
console.log(':: Task 3; Output ::');
const arrayTask = ['Ichraf', 'Youssef', 'Ziad', 'Ahmed', 'Ibrahim'];

for (const name of arrayTask) {
  console.log(name);
}
console.log('\n');

console.log(':: Task 4; Output ::');
// Task 4
let num = 0;
let array = [];
while (num < 11) {
  array.push(num);
  num++;
}
console.log(`Logging numbers of 1 to 10 = ${array}`);
console.log('\n');

// Task 5
console.log(':: Task 5; Output ::');
let evenNumbers = [];
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) evenNumbers.push(i);
  else continue;
}
console.log(`Even Numbers in range (0, 20) = ${evenNumbers}`);
