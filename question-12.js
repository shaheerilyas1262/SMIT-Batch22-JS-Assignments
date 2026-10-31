// Question 12: Salary Calculator
// Concept: Percentages, addition and subtraction

// We calculate the employee's allowances, gross salary, tax deduction and net salary



// Ask user for basic salary
var basicSalary = Number(prompt("Enter basic salary:"));

// Calculate house allowance (20%)
var houseAllowance = basicSalary * 20 / 100;

// Calculate medical allowance (10%)
var medicalAllowance = basicSalary * 10 / 100;

// Calculate tax deduction (5%)
var taxDeduction = basicSalary * 5 / 100;

// Calculate gross salary
var grossSalary = basicSalary + houseAllowance + medicalAllowance;

// Calculate net salary
var netSalary = grossSalary - taxDeduction;

// Display salary details
console.log("Basic Salary: Rs. " + basicSalary);
console.log("House Allowance: Rs. " + houseAllowance);
console.log("Medical Allowance: Rs. " + medicalAllowance);
console.log("Gross Salary: Rs. " + grossSalary);
console.log("Tax Deduction: Rs. " + taxDeduction);
console.log("Net Salary: Rs. " + netSalary);
