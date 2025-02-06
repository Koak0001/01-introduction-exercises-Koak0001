// Arrays, for loops
// Exercise 1

const letters = ["a", "b", "c"];
console.log(letters[1]);

// Exercise 2

const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 27 },
    { name: "Charlie", age: 30 }
];

// Exercise 3

const significantMathNumbers = [0, 2.718, 3.14159, 1729];
console.log(significantMathNumbers.indexOf(1729));

// Exercise 4 

const diet = ["tomato", "cucumber", "rocket"];
diet.push("hamburger");

// Exercise 5

const dinnerTray = ["chicken", "vegetables", "rice"];
dinnerTray.pop();

// Exercise 6

const lettersCopy = [...letters];

// Exercise 7

const numbers = [1, 2, 3, 4, 5];
let totalSum = 0;
for (let num of numbers) {
    totalSum += num;
}
console.log(totalSum);

// Exercise 8

const reducedSum = numbers.reduce((sum, num) => sum + num, 0);
console.log(reducedSum);
