// Objects
// ~ Task 1 ~
const bookInfo = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  yearPublished: 1925,
  // Defining the method within the object itself, allow me to access its properties directly using; this keyword
  infoAboutAuthor: function () {
    return `\n${this.author}: A widely known simply as Scott Fitzgerald, was an American novelist, essayist, and short story writer. He is best known for his novels depicting the flamboyance and excess of the Jazz Age, a term he popularized in his short story collection Tales of the Jazz Age.
    `;
  },
};

// ~ Task 2 ~
const logBookInfo = (object) => {
  console.log(object);
};

// ~ Task 3 ~
// <<<< :: In case i want i wanted to add methods or properties after defining the object :: >>>>
// Adding the method outside the scope of defining the object itself, i can't use this keyword but instead use the object itself
// Adding the method like dictionaries
bookInfo['getPublishingYear'] = () => {
  return `${bookInfo.title} was published on ${bookInfo.yearPublished}
  `;
};

// Adding method on the object using the dot notation
bookInfo.description = function () {
  return `"${bookInfo.title}:" It represents the decay of the American Dream and "the conflict between illusion and reality at the heart of American life"\n`;
};

logBookInfo(bookInfo.infoAboutAuthor());
logBookInfo(bookInfo.getPublishingYear());
logBookInfo(bookInfo.description());

// ~ Task 4 ~
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
  {
    title: 'Zero G',
    author: 'Dan Wells',
    yearPublished: 2018,
  },
];
console.log(books, '\n');

// ~ Task 5 ~
const logInterestingBook = (arrayObject) => {
  arrayObject.forEach((object) => {
    if (object.title == 'Zero G') {
      console.log(
        `${object.title} was fun short novel, written by ${object.author} on ${object.yearPublished}`
      );
    }
  });
};
logInterestingBook(books);

// ~ Task 6 ~
const findInterestingBook = (arrayObject, title) => {
  arrayObject.forEach((object) => {
    if (object.title == title) {
      console.log(
        `
${object.title} by ${object.author} on ${object.yearPublished} was a fun novel.
`
      );
    }
  });
};
findInterestingBook(books, 'The Kaiju Preservation Society');

const findRandomBook = (arrayObject) => {
  const randomValue = Math.floor(Math.random() * 5);
  for (let i = 0; i < arrayObject.length; i++)
    if (i === randomValue) {
      console.log(`
${arrayObject[i].title} by ${arrayObject[i].author} on ${arrayObject[i].yearPublished} was one interesting novel.
    `);
    }
};
findRandomBook(books);
