// 🛠️ Challenge Question
// Write a JavaScript function findSquare() to calculate the square of each element in a given array.

// Example Input and Output:
// Input:
// Array: [1, 2, 3, 4]

// Output:
// [1, 4, 9, 16]

// Input:
// Array: [10, 20, 30]

// Output:
// [100, 400, 900]


const findSquare = (arr) => {

    const squareArr = arr.map((item) => {
        return item * item
    })

    console.log(squareArr, "...square of each element in an array");

}

const arr = [1, 2, 3, 4]

findSquare(arr)
