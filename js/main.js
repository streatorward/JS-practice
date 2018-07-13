const numbers = [];
let count = 0;

for (let i = 0; i < 100; i++) {
    count += 1;
    numbers.push(count);
}
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0 && numbers[i] % 7 === 0 ) {
        console.log("ChickenMonkey!");
    }
    else if (numbers[i] % 5 === 0) {

        console.log("Chicken");
    }
    else if (numbers[i] % 7 === 0) {

        console.log("Monkey");
    }
    else {
        console.log(numbers[i]);
    }
}
