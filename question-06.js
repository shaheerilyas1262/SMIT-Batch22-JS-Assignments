// Question 6: Shopping Bill
// Concept: Addition, percentage and subtraction

// The customer buys three products. We calculate the total bill, 10% discount, and final bill.



// Take product prices from the user
var product1 = Number(prompt("Enter price of product 1:"));
var product2 = Number(prompt("Enter price of product 2:"));
var product3 = Number(prompt("Enter price of product 3:"));

// Calculate total bill
var totalBill = product1 + product2 + product3;

// Calculate 10% discount
var discount = totalBill * 10 / 100;

// Calculate final bill
var finalBill = totalBill - discount;

// Display results
console.log("Total Bill: Rs. " + totalBill);
console.log("Discount: Rs. " + discount);
console.log("Final Bill: Rs. " + finalBill);
