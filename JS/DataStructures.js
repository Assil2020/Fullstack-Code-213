//*********//*********//*********//*********//*********EXERCICE 1//*********//*********//*********//*********//*********

function even(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

let array = [];

for (let i = 0; i <= 100; i++) {
  array.push(i);
}

let evenArray = even(array);
console.log(evenArray);

//*********//*********//*********//*********//*********EXERCICE 2//*********//*********//*********//*********//*********

function filterOver30(person) {
  let filterArray = [];

  for (let i = 0; i < person.length; i++) {
    if (person[i].age > 30) {
      filterArray.push(person[i]);
    }
  }

  return filterArray;
}

let person = [
  {
    name: "Karim",
    age: 33,
    email: "Karim@example.com",
  },
  {
    name: "Samir",
    age: 25,
    email: "Samir@example.com",
  },
  {
    name: "Ilhem",
    age: 40,
    email: "Ilhem@example.com",
  },
  {
    name: "yasmine",
    age: 15,
    email: "yasmine@example.com",
  },
];

let personOver30 = filterOver30(person);

console.log(personOver30);

//*********//*********//*********//*********//*********EXERCICE 3//*********//*********//*********//*********//*********

function Stack(stackArray) {
  stackArray = [];

  function pushStack(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`Pushing ${array[i]} onto the stack.`);
      stackArray.push(array[i]);
    }
    console.log("All elements have been pushed onto the stack.");
  }

  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }

  pushStack(array);
  console.log(stackArray);

  // Just a test
  /*let popStackArray = [];
    function popStack(stackArray) {
      while (stackArray.length > 0) {
        console.log(
          `Removing ${stackArray[stackArray.length - 1]} from the stack.`
        );
        popStackArray.push(stackArray.pop());
      }
      console.log("All elements have been removed from the stack.");
    }
  
    popStack(stackArray);
    console.log(popStackArray);*/

  function peekStack(stackArray) {
    if (stackArray.length > 0) {
      let positionLastElement = stackArray.length - 1;
      return stackArray[positionLastElement];
    } else {
      return undefined;
    }
  }
  /*  popStackArray.reverse();
   */ let lastElement = peekStack(stackArray);
  console.log(`The last element in the stack is: ${lastElement}`);

  function isEmpty(stackArray) {
    return stackArray.length === 0;
  }
  console.log(`if a stack is empty: ${isEmpty(stackArray)}`);
}

Stack();

//*********//*********//*********//*********//*********EXERCICE 4//*********//*********//*********//*********//*********

function Queue() {
  let queueArray = [];

  function pushQueue(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`Pushing ${array[i]} onto the queue.`);
      queueArray.push(array[i]);
    }
    console.log("All elements have been pushed onto the queue.");
  }

  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }

  pushQueue(array);
  console.log(queueArray);

  let firstOut = queueArray.shift();
  console.log(`The first element taken out from the queue is: ${firstOut}`);

  function isEmpty() {
    return queueArray.length === 0;
  }
  console.log(`If a queue is empty: ${isEmpty()}`);
}

Queue();

//*********//*********//*********//*********//*********EXERCICE 5//*********//*********//*********//*********//*********

function vowelsRemoved(string) {
  const vowels = "aeiouAEIOU";
  let removedVowels = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) === -1) {
      removedVowels += string[i];
    }
  }
  return removedVowels;
}

const inputString =
  "Write a function that takes a string as input and returns a new string with all the vowels removed.";
const stringWithoutVowels = vowelsRemoved(inputString);
console.log(stringWithoutVowels);

//*********//*********//*********//*********//*********EXERCICE 6//*********//*********//*********//*********//*********

function findUniqueElements(arr1, arr2) {
  const unique = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1 && unique.indexOf(arr1[i]) === -1) {
      unique.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1 && unique.indexOf(arr2[j]) === -1) {
      unique.push(arr2[j]);
    }
  }

  if (unique.length > 0) {
    return unique;
  } else {
    return "no common numbers";
  }
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 6, 8, 9];
console.log(findUniqueElements(arr1, arr2));
