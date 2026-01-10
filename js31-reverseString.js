
// Today's Challenge:
// Write a JavaScript function to reverse each word in a sentence individually while maintaining the word order.
// This exercise is perfect for practicing string manipulation and working with arrays in JavaScript!

// Challenge Question:
// Write a function reverseWords() that takes a sentence as input and outputs a new sentence
//  where each word is reversed, but the word order is preserved.

// Example:
// Input: "Welcome to JavaScript"
// Output: "emocleW ot tpircSavaJ"

// Input: "each word individually"
// Output: "hcae drow yllaudividni"  


const reverseString = (str) => {

    // console.log(str.split("").reverse().join(""));

    return str.split("").reverse().join("")
}

const str = "Welcome to JavaScript"

const reverseStr = reverseString(str)

console.log(reverseStr, "...reverse String");
