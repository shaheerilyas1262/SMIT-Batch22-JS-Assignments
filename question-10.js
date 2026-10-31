// Question 10: Marks Percentage Calculator
// Concept: Addition and percentage calculation

// There are five subjects, each having 100 maximum marks.



// Take marks from the user
var english = Number(prompt("Enter English marks:"));
var math = Number(prompt("Enter Math marks:"));
var science = Number(prompt("Enter Science marks:"));
var computer = Number(prompt("Enter Computer marks:"));
var urdu = Number(prompt("Enter Urdu marks:"));

// Calculate obtained marks
var obtainedMarks = english + math + science + computer + urdu;

// Calculate total maximum marks
var totalMarks = 500;

// Calculate percentage
var percentage = obtainedMarks / totalMarks * 100;

// Display results
console.log("Obtained Marks: " + obtainedMarks);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");
