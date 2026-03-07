// Determine the Largest of Three Numbers: Write a program to input three numbers and find the largest among them using if-else statements.

let num1 = 24;
let num2 = 11;
let num3 = 45;

if (num1 > num2 && num1 > num3) 
{
    console.log("Largest number is: " + num1);
}
else if (num2 > num1 && num2 > num3) 
{
    console.log("Largest number is: " + num2);
}
else 
{
    console.log("Largest number is: " + num3);
}