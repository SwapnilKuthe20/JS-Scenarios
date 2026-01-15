
// Challenge Question:
// Write a JavaScript function isWithInRange() to check if a given number lies between a specified lower and upper bound (inclusive).

// Examples:
// Input: 5, Lower Bound: 1, Upper Bound: 10
// Output: "Yes, It lies within the range"

// Input: 15, Lower Bound: 1, Upper Bound: 10
// Output: "No, It does not lie within the range"

// Input: 50, Lower Bound: 40, Upper Bound: 60
// Output: "Yes, It lies within the range"


const isWithInRange = (inp, lowerRange, upperRange) => {

    if (inp > lowerRange && inp < upperRange) {
        console.log("Yes, It lies within the range");

    } else {
        console.log("No, It does not lie within the range");

    }

}

const inp = 15
const lowerRange = 12
const upperRange = 20

const inp1 = 162
const lowerRange1 = 154
const upperRange1 = 160

isWithInRange(inp, lowerRange, upperRange)
isWithInRange(inp1, lowerRange1, upperRange1)
