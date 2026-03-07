// Check for a Valid Triangle: Develop a program to check whether a set of three numbers can form a valid triangle 
// based on the triangle inequality theorem using if-else statements.

let a = 5;
let b = 6;
let c = 7;

if (a + b > c && a + c > b && b + c > a) 
{
    console.log("It is a Valid Triangle");
} 

else 
{
    console.log("It is Not a Valid Triangle");
}