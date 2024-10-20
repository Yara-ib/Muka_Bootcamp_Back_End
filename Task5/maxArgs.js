const maxInArray = function (array) {
  console.log(`\nThe maximum value in array; [${array}] is ${Math.max(...array)}\n`);
};

function product(a, b) {
  return a * b;
}

const productArrow = (a, b) => {
  return a * b;
};

maxInArray([10.6, 15, 150, 355, 45, 50]);
console.log(`Product using regular Function of 2 & 3 = ${product(2, 3)}\n`);
console.log(`Product using arrow Function of 2 & 3 = ${productArrow(2, 3)}\n`);
