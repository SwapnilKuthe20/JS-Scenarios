// Write a JavaScript function that takes two numbers, start and end,
// as arguments and returns the sum of all odd numbers between these two values, inclusive.


function sumOfAllOdd(start, end) {
    let total = 0;

    for (let i = start; i < end; i++) {
        if (i % 2 !== 0) {
            total += i;
        }
    }

    return total
}

let start = 1;
let end = 10;
const result = sumOfAllOdd(start, end)

console.log(`the total sum of All Odd nos between ${start} and ${end} is ${result}`);

