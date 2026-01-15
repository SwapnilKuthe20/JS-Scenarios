
// 🛠️ Challenge Question
// Write a JavaScript function sumOfRange() that calculates the sum of all integers between a given lower and upper bound, inclusive.

// Examples:
// Input:
// Lower Bound: 1, Upper Bound: 5
// Output: 15 (1 + 2 + 3 + 4 + 5)

// Input:
// Lower Bound: 3, Upper Bound: 7
// Output: 25 (3 + 4 + 5 + 6 + 7)

// Input:
// Lower Bound: 10, Upper Bound: 2
// Output: Error message, as the lower bound is greater than the upper bound.


const sumOfRange = (lowerNumber, upperNumber) => {

    let total = 0

    for (let i = lowerNumber; i <= upperNumber; i++) {
        total += i
    }

    console.log(total, "Is the total sum of Given Range");

}

const lowerNumber = 2
const upperNumber = 7

sumOfRange(lowerNumber, upperNumber)
