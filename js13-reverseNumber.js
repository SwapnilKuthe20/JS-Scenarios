// Write a JavaScript function that finds the reverse of a given number.
// If the number is negative, the reversed number should also be negative.

// Examples:

// If the input is 1234, the output should be 4321.
// If the input is -5678, the output should be -8765.


const reverseNegative = (num) => {
    let numString = num.toString()
    // console.log(typeof numString, "...type");

    let arr = []

    for (let i = numString.length - 1; i >= 0; i--) {
        // console.log(i, ",,,i");
        // console.log(numString[0]);

        if (numString[i] === "-") {
            arr.unshift("-")
        } else if (numString[i] !== "-") {
            arr.push(numString[i])
        }
    }

    // console.log(arr, "...arr");
    const res = arr.join("")
    convNumer = Number(res)
    // console.log(res, typeof res, "..output and type");
    // console.log(convNumer, typeof convNumer);

    return convNumer;
}

let num = -12345
const result = reverseNegative(num)
console.log(result, "....is the final result");


