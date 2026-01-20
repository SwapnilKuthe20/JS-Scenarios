
// 🛠️ Challenge Question
// Write a JavaScript function nextSmallerElement() to find the next smaller element for each element in the array. If no smaller element exists, return -1.

// Example Input and Output:
// Input:
// arr = [10, 7, 9, 3, 2, 1, 15, ]
// Output:
// [7, 3, 3, 2, 1, -1, -1]



const nextSmallerElement = (arr, k) => {

    const result = []

    for (let i = 0; i < arr.length; i++) {

        let found = false

        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[j]);

            if (arr[j] <= arr[i]) {

                result.push(arr[j])
                found = true
                break
            }
        }

        if (!found) {
            result.push(-1)
        }

    }

    console.log(result, "...min value array");
}

let arr = [10, 7, 9, 3, 2, 5, 15, 21, 34]
let k = 3

nextSmallerElement(arr, k)
