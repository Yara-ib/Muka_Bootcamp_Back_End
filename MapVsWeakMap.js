/*
*** Common points ***
* Both Key & Value pairs.

Weak Map: allows Garbage Collection because it doesn't track the data within, it's like keep adding items to a box with labels, once you forgot the label or that name of the item, the item itself disappears, so it can be used when we just logging to the system daily tasks or so, that we might even don't remember of checking them after some time, and only checking the recent data of it. So i don't have to keep clearing the cache memory or set a larger memory for that data.

- Key must be just object.
- Values will be automatically removed if there's no reference to their key; that's the garbage collected.
- Can't know the exact size of it.
- Only has methods: set(), get(), delete() & has():

*/

/* Map: is a Strong Bond or connection, that should be used when collecting or monitoring important data to be able to access at anytime.

- Key could be any type; object || string || function || number.
- keys & values are stored securely unless manipulated by one of the methods.
- know the exact size of it using size().
- Methods of WeakMap + other ones like; key(), entries(), values() & more ..
*/

/*
*** WeakMap Vs Map Vs Object: ***
~ Maps & Object are strong connection between the key & the value, and there's always a reference for each value using its key or property.
~ WeakMap, once the connection is broken, the value is cleared from memory according to the behavior of JS for garbage collecting.
*/

/*  get() & set() are getter & setter for both */

// Creating instance is like creating instance of any class by calling new + Map() or WeakMap()
const books = [
  {
    title: 'The Kaiju Preservation Society',
    author: 'John Scalzi',
    yearPublished: 2022,
  },
  {
    title: 'The Selection',
    author: 'Kiera Cass',
    yearPublished: 2012,
  },
  {
    title: 'Shadow and Bone',
    author: 'Leigh Bardugo',
    yearPublished: 2012,
  },
  {
    title: 'The Dispatcher',
    author: 'John Scalzi',
    yearPublished: 2016,
  },
];

const instanceMap = new Map();
const instanceWeakMap = new WeakMap();

for (const book of books) {
  let key = {};
  instanceMap.set(key, book);
  console.log(instanceMap.get(key).title);

  instanceWeakMap.set(key, book);
  console.log(instanceWeakMap.get(key).title);
}

console.log(instanceMap);
// items unknown and with unknown size & already gone with the wind ~
console.log(instanceWeakMap);
