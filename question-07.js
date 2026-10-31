// Question 7: Mathematical Expression
// Concept: Order of operations (BODMAS)

// We must solve five mathematical expressions using JavaScript.



// A: Multiplication happens before addition
var A = 10 + 5 * 2;

// B: Brackets are solved first
var B = (10 + 5) * 2;

// C: Division and multiplication happen before addition and subtraction
var C = 20 / 2 + 3 * 4 - 5;

// D: Brackets, multiplication and division first
var D = 5 + 2 * (8 - 3) / 5;

// E: Modulus and multiplication before addition
var E = 30 % 4 + 6 * 2;

// Display results
console.log("A = " + A);
console.log("B = " + B);
console.log("C = " + C);
console.log("D = " + D);
console.log("E = " + E);
