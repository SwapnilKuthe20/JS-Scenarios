
// Today's Challenge:
// Write a JavaScript function to count the number of uppercase and lowercase letters in a given string. 
// This challenge is ideal for improving your regex skills and working with string operations in JavaScript!

// Challenge Question:
// Write a function countCase() that takes a string as input and returns an object showing the count of uppercase and lowercase letters.

// Example:
// Input: "JavaScript"
// Output: { uppercase: 2, lowercase: 8 }

// Input: "Function"
// Output: { uppercase: 1, lowercase: 7 }  


const countUpperAndLower = (str1) => {

    const str1Split = str1.split('')
    // console.log(str1Split, "...split");

    const upperDigit = []
    const lowerDigit = []

    for (let item of str1Split) {

        // console.log(item);

        if (item === item.toUpperCase()) {
            upperDigit.push(item)
        } else if (item === item.toLowerCase()) {
            lowerDigit.push(item)
        }
    }

    console.log(upperDigit, "...upperDigit");
    console.log(upperDigit.length, "...upperDigit");
    
    console.log(lowerDigit, "...lowerDigit");
    console.log(lowerDigit.length, "...lowerDigit");
}

const str1 = "JavaScript"

console.log(str1.toLowerCase());

const str2 = "Function"

countUpperAndLower(str1)
countUpperAndLower(str2)
