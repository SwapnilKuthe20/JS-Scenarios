// 🛠️ Challenge Question
// Write a JavaScript function findCommonElements() to identify the common elements between two given arrays.

// Example Input and Output:
// Input:
// Array 1: [1, 2, 3, 4]
// Array 2: [3, 4, 5, 6]

// Output:
// [3, 4]

// Input:
// Array 1: [10, 30, 50]
// Array 2: [30, 20]

// Output:
// [30]


const findCommonElements = (array1, array2) => {

    const commonElements = array1.filter((item) => {
        return array2.includes(item)
    })

    console.log(commonElements, "...commonElements");

}

const array1 = [1, 2, 3, 4]
const array2 = [3, 4, 5, 6]

const array3 = [10, 30, 50]
const array4 = [30, 20]

findCommonElements(array1, array2)
findCommonElements(array3, array4)

