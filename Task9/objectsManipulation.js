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
console.log(
  `Output of getListStudentIdSum Task: ${getListStudentIdSum(
    getListStudentsIds(studentList)
  )}`
);

// ~ Task 5 ~
export const weakmap = new WeakMap();
let count = 0;
const queryAPI = (endpoint) => {
  if (endpoint) {
    console.log('One endpoint down, more to go');
  }
};

let endpoints = [
  {
    Endpoint: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
    Description:
      'Returns a collection of the most recent tweets posted by the user specified by the "screen name" or "userid" parameters.',
  },
  {
    Endpoint: 'https://api.github.com/users/{username}',
    Description: 'Retrieves information about a specific GitHub user.',
  },
  {
    Endpoint: 'https://www.googleapis.com/youtube/v3/search',
    Description:
      'Returns a list of search results that match the specified query parameters.',
  },
  {
    Endpoint: 'https://maps.googleapis.com/maps/api/geocode/json',
    Description:
      'Converts addresses into geographic coordinates, such as latitude and longitude, and vice versa.',
  },
  {
    Endpoint: 'https://localhost:3000',
    Description: 'Just extra one for testing the task',
  },
];

// This only set one value no matter how many items been set; replaces each other
for (const endpoint of endpoints) {
  weakmap.set(queryAPI, endpoint);
}
console.log(weakmap.get(queryAPI));

// So now, it'll be replaced entirely by list of objects; endpoints
weakmap.set(queryAPI, endpoints);

if (weakmap.get(queryAPI).length >= 5) {
  throw new Error('Endpoint load is high');
} else {
  console.log(weakmap.get(queryAPI).length);
}
