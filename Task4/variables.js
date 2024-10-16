let a = 1;
let b;
b = 3;
console.log(a, b);
a = 2;
console.log(
  `a: ${a}, value changed because it's not a constant & new value been assigned to it`
);

var c = 10;
c = 15;
console.log(
  `c: ${c}, value changed because it's not a constant & new value been assigned to it`
);

const z = 5;
console.log(
  `z: ${z}, value can't be changed & must be declared & initialized at same time because it's a constant`
);
