// Question 11: Currency Converter
// Concept: Division

// The assignment gives us a fixed exchange rate:

// 1 USD = 280 PKR.

// To convert Pakistani rupees into dollars, divide the amount by 280.


// Ask user to enter amount in PKR


var pkr = Number(prompt("Enter amount in PKR:"));

// Fixed exchange rate
var exchangeRate = 280;

// Convert PKR into USD
var usd = pkr / exchangeRate;

// Display result
console.log("Equivalent USD: $" + usd);
