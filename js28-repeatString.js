
// Write a JavaScript function that:
// Takes three parameters:

// str: The string to repeat.
// n: The number of times to repeat the string.
// caseType (optional): Specify 'uppercase' or 'lowercase' for case conversion.
// Returns the final string after applying the specified transformations.

// For input:
// repeatString("JavaScript", 3, "uppercase");

// Output:
// JAVASCRIPTJAVASCRIPTJAVASCRIPT

// For input:
// repeatString("Coding", 2);  

// Output:
// CodingCoding
// This problem helps you understand how to:

const repeatString = (str1, repeat, caseType) => {

    if (caseType === "uppercase") {

        const upperRes = str1.repeat(repeat).toUpperCase()
        console.log(upperRes, "...uppercase string");
        return upperRes

    } else if (caseType === "lowercase") {

        const lowerRes = str1.repeat(repeat).toLowerCase()
        console.log(lowerRes, "...lowercase string");
        return lowerRes

    } else if (caseType === "kebabcase") {


        const kebabConv = str1[0].toUpperCase() + str1.slice(1)
        // console.log(kebabConv);

        const kebabRes = kebabConv.repeat(repeat)

        return kebabRes
    } else {
        return "Please check  caseType input"
    }

}

let str1 = "JavaScript";
let repeat = 3;
let caseType = "uppercase";

let str2 = "coding";
let repeat2 = 3;
let caseType2 = "lowercase"

let str3 = "swap";
let repeat3 = 3;
let caseType3 = "kebabcase"


const result1 = repeatString(str1, repeat, caseType)
const result2 = repeatString(str2, repeat2, caseType2)
const result3 = repeatString(str3, repeat3, caseType3)

console.log(result1, "...result 1");
console.log(result2, "...result 2");
console.log(result3, "...result 3");

