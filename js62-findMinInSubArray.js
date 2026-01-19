// 🛠️ Challenge Question
// Write a JavaScript function findMinInSubArray() to find the minimum value in every sliding subarray of size k.

// Example Input and Output:
// Input Array: [1, -2, -3, -4, 5, 6, -7]
// k = 3
// Output: [-3, -4, -4, -4, -7]


const findMinInSubArray = (arr, subArray) => {

    let minInSubArr = []

    for (let i = 0; i <= arr.length - subArray; i++) {
        // console.log(i, "...,,,,,,,,,,i");
        // console.log(i + subArray);

        const temp = []

        for (let j = i; j < i + subArray; j++) {
            // console.log(arr[j], "...j");

            temp.push(arr[j])
        }

        // console.log(temp, "...temp");

        let minValInsub = Math.min(...temp)
        // console.log(minValInsub, "...minValInsub");

        minInSubArr.push(minValInsub)
    }

    console.log(minInSubArr, "...min value in subArray");

}

const arr = [1, -2, -3, -4, 5, 6, -7]
const subArray = 3

findMinInSubArray(arr, subArray)



