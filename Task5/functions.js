// Function Declaration
function firstFormOfFunctions() {
  console.log(`1- Function Declaration::
    function differentWaysForFunctions() {
      return 'something';
    }
  `);
}

// Function Expression
const secondFormOfFunctions = function () {
  console.log(`2- Function Expression::
    const secondDifferentWaysForFunctions = function () {
      return 'another thing';
    };
  `);
};

// Arrow Functions
const thirdFormOfFunctions = () => {
  console.log(
    `3- Arrow Functions::
    const thirdFormOfFunctions = () => {
      return 'some other thing :)';
    };
  `
  );
};

// Calling them
const bar = '* -------------------------------- *\n';
console.log('\n' + bar, 'Different Ways To Define Functions:\n' + bar);
firstFormOfFunctions();
secondFormOfFunctions();
thirdFormOfFunctions();
