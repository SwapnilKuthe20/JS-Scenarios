// Write a JavaScript function that generates a Fibonacci sequence
// starting from two given numbers and outputs a specified number of terms.


const fibboSeries = [];

const fibonacciFun = (num1, num2, upto) => {

    let first = num1, second = num2, next;

    for (let i = 1; i <= upto; i++) {

        fibboSeries.push(first)

        next = first + second
        first = second
        second = next
    }

    return fibboSeries;

}

let num1 = 1;
let num2 = 2;
let upto = 8;

const result = fibonacciFun(num1, num2, upto)
console.log(`Fibbonacci series of ${num1} and ${num2} is : ${result}`);

