//*********//*********//*********//*********//*********EXERCICE 1//*********//*********//*********//*********//*********

const averageOfEven = (n) => {
  const myArray = [];
  for (let i = 0; i <= n; i++) {
    myArray.push(i);
  }

  let evenArray = myArray.filter((even) => {
    return even % 2 === 0;
  });

  console.log("Even Array:", evenArray);

  let lenOfArray = evenArray.length;

  let sumOfArrayEven = evenArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  let avgArrayEven = sumOfArrayEven / lenOfArray;

  console.log("Sum of Even Array:", sumOfArrayEven);
  console.log("Average of Even Array:", avgArrayEven);
};

averageOfEven(20);

//*********//*********//*********//*********//*********EXERCICE 2//*********//*********//*********//*********//*********

const wordsArray = [
  "javascript",
  "python",
  "Java",
  "Kotlin",
  "PHP",
  "Swift",
  "Swift",
  "SQL",
  "R",
];

let longestWord = wordsArray.reduce((accumulator, currentValue) => {
  if (currentValue.length > accumulator.length) {
    return currentValue;
  } else {
    return accumulator;
  }
});

console.log("Longest Word:", longestWord);

//*********//*********//*********//*********//*********EXERCICE 3//*********//*********//*********//*********//*********

booksAvrPage = (books) => {
  if (books.length === 0) {
    return 0;
  }

  const pageSum = books
    .map((book) => book.pages)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return pageSum / books.length;
};

const books = [
  { title: "Fluent Python", author: "Luciano Ramalho", pages: 1014 },
  {
    title: "R for Data Science",
    author: "Garrett Grolemund, Hadley Wickham",
    pages: 492,
  },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", pages: 472 },
  {
    title: "Programming Ruby",
    author: "Dave Thomas, Chad Fowler, Andy Hunt",
    pages: 864,
  },
];

const averagePages = booksAvrPage(books);
console.log("Average number of pages:", averagePages);

//*********//*********//*********//*********//*********EXERCICE 4//*********//*********//*********//*********//*********

const string = ["hello", "world", "hello"];

const frequencyString = string.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = ++accumulator[currentValue] || 1;

  return accumulator;
}, {});

console.log(frequencyString);

//*********//*********//*********//*********//*********EXERCICE 5//*********//*********//*********//*********//*********

const peopleObj = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];

const numberOfPeopleInCities = peopleObj.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.city]) {
    accumulator[currentValue.city] = 1;
  } else {
    accumulator[currentValue.city]++;
  }
  return accumulator;
}, {});

console.log(numberOfPeopleInCities);
