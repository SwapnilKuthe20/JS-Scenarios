// 🛠️ Challenge Question
// Write a JavaScript function findFirstNegativeNum() to find the first negative number in each subarray of size k.

// Example Input and Output:
// Input:
// arr = [1, -2, -3, -4, 5, 6, -7], k = 3
// Output:
// [-2, -2, -3, -4, -7]



const findFirstNegativeNum = (arr, k) => {

    let firstNegArr = []

    for (let i = 0; i <= arr.length - k; i++) {
        // console.log("i........");

        for (let j = i; j < i + k; j++) {
            // console.log(arr[j]);

            if (arr[j] < 0) {
                firstNegArr.push(arr[j])
                break;
            }
        }
    }
    console.log(firstNegArr);

}

let arr = [1, -2, -3, -4, 5, 6, -7]
let k = 3

findFirstNegativeNum(arr, k)

