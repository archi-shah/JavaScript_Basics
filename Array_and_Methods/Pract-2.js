let arr = [5, 6, 7, 4, 3, 2, 1];
let num = 7;

let index = arr.indexOf(num);

if (index !== -1) {
    arr.splice(index, 1);   // remove the number
    console.log("Number found and removed.");
} else {
    console.log("Number not found.");
}

console.log("Updated Array:", arr);