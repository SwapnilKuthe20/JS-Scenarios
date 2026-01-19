// 🛠️ Challenge Question
// Write a JavaScript function findMaxInSubArray() to find the maximum value in every sliding subarray of size k.

// Example Input and Output:
// Input Array: [1, -2, -3, -4, 5, 6, -7]
// k = 3
// Output: [1, -2, 5, 6, 6]


const findMaxInSubArray = (arr, k) => {

    let maxArray = []

    for (let i = 0; i <= arr.length - k; i++) {
        // console.log(i);
        // console.log(i + k);

        const temp = []

        for (let j = i; j < i + k; j++) {

            temp.push(arr[j])
        }

        let maxVal = Math.max(...temp)
        // console.log(maxVal, "..max");

        maxArray.push(maxVal)
    }
    console.log(maxArray, "...max array values ");

}

const arr = [1, -2, -3, -4, 5, 6, -7];
const k = 3

findMaxInSubArray(arr, k)
