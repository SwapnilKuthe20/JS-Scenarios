// 🛠️ Challenge Question
// Write a JavaScript function findMaxElement() to find the minimum element in an array without using sorting.

// Example Input and Output:
// Input:
// arr = [3, 4, 9, 1, 6]
// Output:
// 9


const findMaxElement = (arr) => {

    let maxEle = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (maxEle < arr[i]) {
            maxEle = arr[i]
        }
    }

    console.log(maxEle, "....is the max element");

}

arr = [3, 4, 9, 1, 6]

findMaxElement(arr)
