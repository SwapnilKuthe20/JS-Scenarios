// Challenge Question:
// Write a JavaScript function areArraysEqual() to check if two arrays contain the same elements regardless of their order.

// Examples:
// Input: [1, 2, 3, 4] and [4, 3, 2, 1]
// Output: Arrays are equal.

// Input: [10, 20, 34] and [20, 10, 33]
// Output: Arrays are not equal as the elements differ.


const areArraysEqual = (inp1, inp2) => {

    if (inp1.length !== inp2.length) {
        console.log("Arrays length mismatch");
        return
    }

    const sortedArr1 = inp1.sort()
    const sortedArr2 = inp2.sort()

    for (let i = 0; i < sortedArr1.length; i++) {

        if (sortedArr1[i] !== sortedArr2[i]) {
            console.log("Both arrays are not equals");
            return
        }
    }

    console.log('Both arrays are equals');
}

const arr1 = [10, 20, 34]
const arr2 = [20, 10, 33]

const arr3 = [1, 2, 3, 4]
const arr4 = [4, 3, 2, 1]

const arr5 = [1, 2, 3, 4]
const arr6 = [4, 3, 2, 1, 8]

areArraysEqual(arr1, arr2)
areArraysEqual(arr3, arr4)
areArraysEqual(arr5, arr6)
