// 📥 Problem Statement:
// Write a JavaScript function to count how many times each value appears in an object.

// 📊 Example:

// Input:
// { a: 1, b: 2, c: 1, d: 3, e: 2 }
// Output: { 1: 2, 2: 2, 3: 1 }

// Input:
// { a: "apple", b: "banana", c: "apple", d: "grape" }
// Output: { apple: 2, banana: 1, grape: 1 }

// Input:
// { a: true, b: false, c: true, d: true }
// Output: { true: 3, false: 1 }


const countValuesObj = (obj) => {

    const valuesList = Object.values(obj);
    // console.log(valuesList, "...list values");

    const result = {}

    for (let item of valuesList) {
        // console.log(item, "..item");
        // console.log(result[item], "...result[item]");

        result[item] = (result[item] || 0) + 1;
    }

    console.log(result, "...result");
}

const objNum = { a: 1, b: 2, c: 1, d: 3, e: 2 };
const friuts = { a: "apple", b: "banana", c: "apple", d: "grape" };
const boolObj = { a: true, b: false, c: true, d: true };


countValuesObj(objNum)
countValuesObj(fruits)
countValuesObj(boolObj)