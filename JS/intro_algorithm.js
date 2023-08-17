// challenge one

let message = "There is no war in Ba Sing Se";
let wordCount = 1;
for (let i = 0; i < message.length; i++) {
  if (message[i] === " ") {
    wordCount++;
  }
}

console.log(`The message contains ${wordCount} words.`);

//// challenge two

let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoi", "Kuala Lumpur"];

for (leti = 0; i < countries.length; i++) {
  console.log(
    `Your country: ${countries[i]} has the capital named: ${capital[i]}.`
  );
}

//// challenge three

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max);
}

let randomiser = generateRandomInteger(3);

function titan(result) {
  if (result === 0) {
    return "A certain victory";
  } else if (result === 1) {
    return "not so certain victory";
  } else if (result === 2) {
    return "an uneasy victory";
  } else {
    return "Your fate is unclear, ô chosen undead";
  }
}

console.log(titan(randomiser));

//// challenge four

function checkSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "The season is winter";
  } else if (month === 3 || month === 4 || month === 5) {
    return "The season is spring";
  } else if (month === 6 || month === 7 || month === 8) {
    return "The season is summer";
  } else if (month === 9 || month === 10 || month === 11) {
    return "The season is autumn";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason(1));
