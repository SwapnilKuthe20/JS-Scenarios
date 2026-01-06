// Here’s the Challenge:
// Write a JavaScript function that converts any given string to PascalCase. Remember, in PascalCase:

// Each word starts with an uppercase letter.
// All words are joined without any spaces between them.
// For Example:
// If the input is "quick brown fox jumps", the output should be "QuickBrownFoxJumps".



const pascalConverterFun = (str) => {
    // console.log(str.split(" "), "...str");

    const res = str.split(" ").map(item => item[0].toUpperCase() + item.substring(1).toLowerCase()).join("")
    console.log(res, "...res");

    return res
}

let str = "swap nEEl"
const result = pascalConverterFun(str)


