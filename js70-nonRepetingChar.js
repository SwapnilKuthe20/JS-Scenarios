
// 📝 Problem Statement:
// You are given a string and you need to find the first non-repeating character in that string. If there is no non-repeating character, return null.

// Input Examples:
// 1️⃣ Input: "swiss"
// Output: "w"

// 2️⃣ Input: "aabbcc"
// Output: null

// 3️⃣ Input: "programming"
// Output: "p"


const firstNonRepetingChar = (str) => {
    // console.log(str.length, "...length");

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);

        let character = str[i];

        // console.log(character, str.indexOf(character), str.lastIndexOf(character));

        if (str.indexOf(character) === str.lastIndexOf(character)) {
            console.log(character, " this is the first non repeting Character");
            return;
        }
    }
    console.log(null, "... there is no any non-repeting characters");
}

const str = "swiss"
const str2 = "programming"
const str3 = "aabbcc"

firstNonRepetingChar(str)
firstNonRepetingChar(str2)
firstNonRepetingChar(str3)

