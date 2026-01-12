
// Today's Challenge:
// Write a JavaScript function to count the number of vowels and consonants in a given string.

// Challenge Question:
// Write a function countVowelsConsonants() that takes a string as input and returns an object containing the count of vowels and consonants.

// Example:
// Input: "JavaScript"  
// Output: { vowels: 3, consonants: 7 }  


const countVowelsConsonants = (str) => {

    const vowels = ["a", "e", "i", "o", "u"]

    const countVowelsConst = {
        vowels: 0,
        constant: 0
    }

    for (let i of str) {
        // console.log(i);
        if (vowels.includes(i)) {
            countVowelsConst.vowels += 1
        } else {
            countVowelsConst.constant += 1
        }
    }

    console.log(countVowelsConst, "...result");
}

const str = "JavaScript"

countVowelsConsonants(str)

