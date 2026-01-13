// Challenge Question:
// Write a function removeDuplicates() that removes duplicate characters from a given string.

// Example:
// Input: `"programming"`  
// Output: `"progamin"`  


const removeDuplicates = (inpStr) => {

    const uniqeCharacters = new Set(inpStr);        // returns Object
    console.log(uniqeCharacters);

    const res = [...uniqeCharacters].join("")

    console.log(res, "....uniqeCharacters");
}

const inpStr = "programming"

removeDuplicates(inpStr)
