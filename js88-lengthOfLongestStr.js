// 📝 Problem Statement:
// Write a JavaScript function to calculate the length of the longest string value in an object.

// 📊 Examples:
// Input:
// { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }
// Output:
// 10

// Input:
// { x: 'elephant', y: 'giraffe', z: 'hippopotamus' }
// Output:
// 12

// Input:
// { m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' }
// Output:
// 11

// Input:
// { a: 75, b: 'hair', c: 'shoes', d: 100 }
// Output:
// 5


const lengthOfLongestStr = (obj) => {

    const valuesAll = Object.values(obj)
    // console.log(valuesAll, "...values all");

    const filterStr = valuesAll.filter((item) => typeof item === "string")
    // console.log(filterStr, "...filter string");

    const longestLength = filterStr.reduce((acc, curr) => {
        return curr.length > acc ? curr.length : acc

    }, 0)

    console.log(longestLength, "..is the longest length ");
}

const obj = { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' };
const obj1 = { x: 'elephant', y: 'giraffe', z: 'hippopotamus' };
const obj2 = { m: 'short', n: 'tiny', o: 'lengthyword', p: 'word' };
const obj3 = { a: 75, b: 'hair', c: 'shoes', d: 100 };

lengthOfLongestStr(obj)
lengthOfLongestStr(obj1)
lengthOfLongestStr(obj2)
lengthOfLongestStr(obj3)
