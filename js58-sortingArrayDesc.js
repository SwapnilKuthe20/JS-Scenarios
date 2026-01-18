
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

function sortArray(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {

            // Swap if current element is smaller than next
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    return arr;
}


const numbers = [5, 2, 9, 1, 7];

console.log(sortArray(numbers));
// Output: [9, 7, 5, 2, 1]




