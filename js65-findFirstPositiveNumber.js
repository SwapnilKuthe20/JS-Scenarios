// 🛠️ Challenge Question
// Write a JavaScript function findFirstPositiveNumber() to find the first positive number in every subarray of size k. If no positive number exists in a subarray, return 0.

// Example Input and Output:
// Input:
// arr = [1, -2, -3, -4, 5, 6, -7], k = 3
// Output:
// [1, 5, 5, 5]


const findFirstPositiveNumber = (arr, k) => {

    const firstPositiveArr = []

    for (let i = 0; i <= arr.length - k; i++) {
        console.log("i.........");

        for (let j = i; j < i + k; j++) {
            // console.log(arr[j]);

            if (arr[j] >= 0) {
                firstPositiveArr.push(arr[j])
                break
            }
        }

    }

    console.log(firstPositiveArr, "...first positive number from subArray");
    
}

let arr = [1, -2, -3, -4, 5, 6, -7]
let k = 3

findFirstPositiveNumber(arr, k)

