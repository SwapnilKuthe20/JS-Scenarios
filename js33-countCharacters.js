
// Challenge Question:
// Write a function countOccurences() that takes a string and a character as input
// and counts how many times that character appears in the string.

// Example:
// Input: "hello world", 'o'
// Output: 2

// Input: "charactercharactercharacter", 'a'
// Output: 6 


const countOccurences = (inp, letter) => {

    const countDigit = []

    const inpSplit = inp.split("")
    // console.log(inpSplit);

    for (let i of inpSplit) {
        if (i === letter) {
            countDigit.push(i)
        }
    }

    console.log(countDigit.length, "...length ");
}

const inp = "hello world"
const letter = "o"

const inp2 = "charactercharactercharacter"
const letter2 = "a"

countOccurences(inp, letter)
countOccurences(inp2, letter2)
