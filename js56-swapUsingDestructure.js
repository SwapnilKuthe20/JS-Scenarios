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


const swapUsingDestructure = (a, b) => {

    [b, a] = [a, b]

    console.log(b, "...b");
    console.log(a, "...a");

}

let a = 10;
let b = 20;

swapUsingDestructure(a, b)
