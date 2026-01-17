// 🛠️ Challenge Question
// Write a JavaScript function swapValues() that swaps the values of two variables using destructuring assignment.

// Example Input and Output:
// Input:
// a = 5, b = 10

// Output:
// a = 10, b = 5

// Input:
// a = 30, b = 40

// Output:
// a = 40, b = 30


const swapValues = (a, b) => {

    let c;

    c = a
    a = b
    b = c

    console.log(a, "...a");
    console.log(b, "...b");
}

let a = 5;
let b = 10;

swapValues(a, b)

