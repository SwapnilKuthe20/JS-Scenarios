
// Today's Challenge:
// Write a JavaScript function that checks if a given string starts and ends with the same character. This exercise is perfect for practicing string comparisons and basic conditional logic in JavaScript!

// Challenge Question:
// Write a function that takes a string as input and checks if the first and last characters of the string are the same.

// Example:
// startsEndsSame("Hello");  
// // Output: No, Given Hello doesn't start and end with the same character  

// startsEndsSame("radar");  
// // Output: Yes, Given radar starts and ends with the same character  

// startsEndsSame("");  
// // Output: The string is empty, we cannot proceed with the comparison  


const isFirstAndLastStrSame = (str) => {
    const lastInd = str.length
    // console.log(lastInd, "...lastInd");

    if (str[0] == str[str.length - 1]) {
        console.log(`${str} : first and last leter are same `);
    } else {
        console.log(`${str} : first and last leters are not same `);
    }

}

let str = "swaps"
let str2 = "swapnil"

isFirstAndLastStrSame(str)
isFirstAndLastStrSame(str2)
