// Challenge Question:
// Write a JavaScript function that takes a string as input and returns an array of all the numeric values present in the string.

// Example:
// Input:
// extractNumbers("Hello12345World")

// Output:
// [1, 2, 3, 4, 5]

// Input:
// extractNumbers("condit89i5o4n");

// Output:
// [8, 9, 5, 4]


const extractNumbers = (str) => {
    // console.log(str.split(""));

    const strSplit = str.split("")

    const numbs = []

    for (let item of strSplit) {
        // console.log(isNaN(item));

        if (!isNaN(item)) {
            numbs.push(item)
        }
    }

    console.log(`Numbers in ${str} ::`, numbs)
}

let str = "swap0720neel1307"

extractNumbers(str)
