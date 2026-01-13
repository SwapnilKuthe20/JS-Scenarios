// Challenge Question:
// Write a function printTableNine() that prints the table of 9 up to a given number N.
// If the input is 0 or a negative number, return "NULL".

// Example:
// Input:
// 3
// Output:
// 9 18 27

// Input:
// 0

// Output:
// NULL


const printTableNine = (n) => {

    for (let i = 1; i <= n; i++) {
        console.log(` 9 X ${i} = ${9 * i}`);
    }

}

let n = 10

printTableNine(n)
