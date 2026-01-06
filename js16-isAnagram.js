// Here’s the challenge:
// Write a JavaScript function that determines if two given strings are anagrams of each other.

// Examples:
// For the inputs "listen" and "silent", the output should be true (because both have the same letters).
// For "hello" and "world", the output should be false (different letters and counts).


function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return "not Anagram"
    }

    // console.log(str1.split(""));

    const str1Arr = str1.split('').sort().join('').toLowerCase()
    console.log(str1Arr, "...str1 ");

    const str2Arr = str2.split('').sort().join("").toLowerCase()
    console.log(str2Arr, "...str1 ");

    if (str1Arr === str2Arr) {
        return "Anagram"
    } else {
        return "not Anagram"
    }

}

// let str1 = "listen"
// let str2 = "silent"

let str3 = "hello"
let str4 = "world"

// const result1 = isAnagram(str1, str2)
const result2 = isAnagram(str3, str4)

// console.log(`is ${str1} and ${str2}  : ${result1} `);
console.log(`is ${str3} and ${str4} Anagram : ${result2} `);
