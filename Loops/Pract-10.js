let product = 1;

for (let i = 1; i <= 40; i++) {
    if (i % 5 == 0) {
        product = product * i;
    }
}

console.log("Multiplication of numbers divisible by 5 from 1 to 40 is: " + product);