// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const total = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(total.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const average = (one + two + three) / 3;
console.log(average.toFixed(2));
