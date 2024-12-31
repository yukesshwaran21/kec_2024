function isOddOrEven(number) {
    if (number & 1) { // Check the least significant bit
        return "Odd";
    } else {
        return "Even";
    }
}

// Input
const num = parseInt(prompt("Enter a number: "), 10);
const result = isOddOrEven(num);
console.log(`The number ${num} is ${result}.`);
