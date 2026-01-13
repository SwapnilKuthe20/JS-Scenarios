// Challenge Question:
// Write a function reverseOrder() that takes a sentence as input,
// reverses the order of the words, and also reverses the characters of each word.

// Example:
// Input: "Welcome to JavaScript"
// Output: "tpircSavaJ ot emocleW"


const reverseOrder = (inpStr) => {

    // console.log(typeof inpStr);

    const output = inpStr.split('').reverse().join('')

    console.log(output, "...reverse Order");

}

const inpStr = "Welcome to JavaScript"

reverseOrder(inpStr)
