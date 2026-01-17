
// 🛠️ Challenge Question
// Write a JavaScript function sortArray() to sort an array in descending order without using any inbuilt methods.

// Example Input and Output:
// Input:
// [6, 1, 5, 2, 4, 3]
// Output:
// [6, 5, 4, 3, 2, 1]

// Input:
// [90, 77, 100, 450]
// Output:
// [450, 100, 90, 77]


const sortArrayDescending = (arr) => {

    console.log(arr.sort().reverse());
}

const arr = [6, 1, 5, 2, 4, 3]

sortArrayDescending(arr)

