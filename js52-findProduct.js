
// 🛠️ Challenge Question
// Write a JavaScript function findProduct() to calculate the product of all numbers in a given array.

// Example Input and Output:
// Input:
// Array: [2, 3, 4]

// Output:
// 24

// Input:
// Array: [1, 2, 3, 4, 5]

// Output:
// 120


const findProduct = (arr) => {

    const productOfArray = arr.reduce((acc, curr) => {
        return acc * curr
    }, 1)

    console.log(productOfArray, "...product of an array");

}

const arr = [2, 3, 4]
const arr2 = [1, 2, 3, 4, 5]

findProduct(arr)
findProduct(arr2)

