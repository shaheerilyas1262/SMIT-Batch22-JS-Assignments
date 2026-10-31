// Question 8: Welcome Message
// Concept: prompt() and string concatenation

// String concatenation means joining two or more strings using the + operator.


// Ask user for information
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var city = prompt("Enter your city:");

// Combine names
var fullName = firstName + " " + lastName;

// Display welcome message
console.log("Welcome " + fullName + "!");
console.log("You are from " + city + ".");
