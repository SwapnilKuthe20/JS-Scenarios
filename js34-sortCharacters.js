// Today's Challenge:
// Write a JavaScript function to sort the characters of a given string in alphabetical order.

// Challenge Question:
// Write a function sortCharacters() that takes a string as input and returns the string with its characters sorted alphabetically.

// Example:
// Input: "javascript"  
// Output: "aacijprstv"  

// Input: "helloworld"  
// Output: "dehllloorw" 


const sortCharacters = (input) => {

    const inpSplit = input.split('').sort().join('')
    console.log(inpSplit, "...input sort");

}

const input = "javascript"

sortCharacters(input)
