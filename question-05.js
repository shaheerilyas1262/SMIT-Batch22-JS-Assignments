// Question 5: Basic Calculator
// Concept: prompt(), Number(), mathematical operators

// We need to take two numbers from the user and perform five operations.

// Remember: prompt() takes input as text. We use Number() to convert it into a number.



// Take two numbers from the user
var firstNumber = Number(prompt("Enter first number:"));
var secondNumber = Number(prompt("Enter second number:"));

// Perform mathematical operations
var addition = firstNumber + secondNumber;
var subtraction = firstNumber - secondNumber;
var multiplication = firstNumber * secondNumber;
var division = firstNumber / secondNumber;
var modulus = firstNumber % secondNumber;

// Display results
console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulus);
