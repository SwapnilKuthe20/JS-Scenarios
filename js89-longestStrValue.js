// 📝 Problem Statement:
// Write a JavaScript function to find the longest string value in an object.

// 📊 Examples:
// Input:
// { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' }
// Output:
// grapefruit

// Input:
// { x: 'elephant', y: 'giraffe', z: 'hippopotamus' }
// Output:
// hippopotamus

// Input:
// { a: 75, b: 'hair', c: 'shoes', d: 100 }
// Output:
// shoes


const longestStrValue = (obj) => {

    const allValues = Object.values(obj)
    // console.log(allValues, "...all values");

    const filterStr = allValues.filter((item) => typeof item === "string");
    // console.log(filterStr, "...filter");

    if (filterStr.length === 0) return;

    const result = filterStr.reduce((acc, curr) => {

        return acc.length > curr.length ? acc : curr;

    }, filterStr[0])

    console.log(result, "...result");

}

const obj = { a: 'apple', b: 'banana', c: 'kiwi', d: 'grapefruit' };
const obj1 = { x: 'elephant', y: 'giraffe', z: 'hippopotamus' };
const obj2 = { a: 75, b: 'hair', c: 'shoes', d: 100 };

longestStrValue(obj)
longestStrValue(obj1)
longestStrValue(obj2)
