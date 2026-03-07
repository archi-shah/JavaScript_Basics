// Simple Calculator: Create a simple program to perform basic arithmetic operations (addition, subtraction, multiplication, division) 
// based on user input using if-else statements.

let num1 = 10;
let num2 = 5;
let op = "+";   // + , - , * , /

if (op == "+") {
    console.log("Addition = " + (num1 + num2));
}
else if (op == "-") {
    console.log("Subtraction = " + (num1 - num2));
}
else if (op == "*") {
    console.log("Multiplication = " + (num1 * num2));
}
else if (op == "/") {
    console.log("Division = " + (num1 / num2));
}
else {
    console.log("Invalid Operator");
}