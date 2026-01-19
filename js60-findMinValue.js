// 🛠️ Challenge Question
// Write a JavaScript function findMinElement() to find the minimum element in an array without using sorting.

// Example Input and Output:
// Input:
// arr = [3, 4, 9, 1, 6]
// Output:
// 1


const findMinElement = (arr) => {

    let minValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i]
        }
    }
    console.log(minValue, '...is the minValue');

}

arr = [3, 4, 9, 1, 6]

findMinElement(arr)

