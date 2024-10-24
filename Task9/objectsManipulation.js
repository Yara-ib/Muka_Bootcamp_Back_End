// Arrays & Object Manipulation
// ~ Task 1 ~
let studentList = [
  {
    id: 1,
    firstName: 'Ziad',
    location: 'San Francisco',
  },
  {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  },
  {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  },
];

const getListStudents = (array) => {
  let newArray = [];
  for (const element of array) {
    newArray.push(element);
    console.log(
      `${element.firstName}, id: ${element.id}, in ${element.location}`
    );
  }
  return newArray;
};

console.log(getListStudents(studentList));

// ~ Task 2 ~
const getListStudentsIds = (array) => {
  if (!Array.isArray(array)) {
    return [];
  } else {
    let newArray = [];
    array.map((array) => newArray.push(array['id']));
    return newArray;
  }
};
console.log(getListStudentsIds(studentList));

// ~ Task 3 ~
const getListStudentsByLocation = (array, city) => {
  if (!Array.isArray(array)) {
    return [];
  } else {
    let newArray = array.filter((Object) => Object['location'] == city);
    return newArray;
  }
};

console.log(getListStudentsByLocation(studentList, 'San Francisco'));

// ~ Task 4 ~
const getListStudentIdSum = (array) => {
  if (!Array.isArray(array)) {
    return [];
  } else {
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
};

console.log(getListStudentIdSum(getListStudentsIds(studentList)));
