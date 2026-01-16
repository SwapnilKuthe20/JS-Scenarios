// 🛠️ Challenge Question
// Write a JavaScript function findMissingNumbers() that identifies all the missing numbers
// in a specified range [lower, upper] that are not present in a given array.

// Examples:
// Input:
// Array: [10, 12, 14, 15], Range: [10, 15]
// Output: [11, 13]

// Input:
// Array: [5, 7, 9], Range: [5, 10]
// Output: [6, 8, 10]

// Input:
// Array: [1, 2, 3, 4, 5], Range: [1, 5]
// Output: [] (No missing numbers)


const findMissingNumbers = (array, range) => {

    const missingNo = []
    const lowerRange = range[0]
    const upperRange = range[1]

    for (let i = lowerRange; i <= upperRange; i++) {
        if (!array.includes(i)) {
            missingNo.push(i)
        }
    }
    console.log(missingNo, "....missingNo");
}

const array = [10, 12, 14, 15];
const range = [10, 15]

findMissingNumbers(array, range)
