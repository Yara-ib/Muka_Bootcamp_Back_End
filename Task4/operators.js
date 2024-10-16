// Returns Values: Numbers
const arithmeticOperators = (a, b) => {
  console.log('Addition:', a + b);
  console.log('Subtraction:', a - b);
  console.log('Multiplication:', a * b);
  console.log('Exponential:', a ** b);
  console.log('Division:', a / b);
  console.log('Modulus:', a % b);
};

// Returns Boolean
const comparisonOperators = (a, b) => {
  console.log(`${a} Equal to ${b}:`, a == b);
  console.log(`${a} Greater than ${b}:`, a > b);
  console.log(`${a} Greater than or Equal ${b}:`, a >= b);
  console.log(`${a} Smaller than ${b}:`, a < b);
  console.log(`${a} Smaller than or Equal ${b}:`, a <= b);
  console.log(`${a} Not Equal to ${b}:`, a != b);
  console.log(`${a} Equal & same Type of ${b}:`, a === b);
  console.log(`${a} Not Equal || Not same Type of ${b}:`, a !== b);
};

const logicalOperators = (a, b) => {
  if (a == b && typeof a == 'string') {
    console.log('Testing when Both conditions are true');
  } else if (a == b || typeof a == 'string') {
    console.log('Only one condition is true');
  } else if (!(typeof a == 'number')) {
    console.log('Changing the condition to its opposite');
  } else {
    console.log(
      'If that printed, then none of the previous conditions been fulfilled'
    );
  }
};

// Example for the usage of the Function
arithmeticOperators(2, 3);
comparisonOperators(2, 3);
logicalOperators('1', 7);
