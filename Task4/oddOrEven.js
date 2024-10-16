const oddOrEven = (a) => {
  if (a % 2 == 0) {
    console.log(`${a} is an even number`);
  } else {
    console.log(`${a} is an odd number`);
  }
};

// Testing the function
oddOrEven(2);
oddOrEven('2');
oddOrEven(3);
oddOrEven('3');
