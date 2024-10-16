const compareStrings = (a, b) => {
  if (a === b) {
    console.log(`a: ${a} is equal in value & type of b: ${b} `);
  } else if (a == b) {
    console.log(`a: ${a} is equal in value to b: ${b} but not the same type`);
  } else {
    console.error('Both variables are not equal nor same type');
  }
};

// Testing the function
compareStrings(1, '1');
compareStrings(2, 2);
compareStrings('2', '2');
compareStrings(2, 3);
compareStrings('2', '3');
compareStrings('2', 3);
