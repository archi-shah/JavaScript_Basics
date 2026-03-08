console.log("Numbers divisible by 3 and 5 between 15 and 45:");

for (let i = 15; i <= 45; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}