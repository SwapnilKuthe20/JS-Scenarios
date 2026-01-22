
// 📥 Problem Statement:
// Write a JavaScript function that takes an object and converts it into an array containing two subarrays:
// One for the keys.
// One for the values.

// 📊 Example:
// Input: { a: 1, b: 2, c: 3 }
// Output: [["a", "b", "c"], [1, 2, 3]]


const objToArr = (obj) => {

    const keysArr = Object.keys(obj)
    const valuesArr = Object.values(obj)

    const combineArr = [keysArr, valuesArr]

    console.log(combineArr, "... Array od keys and values of an object");

}

const obj = {
    name: "swap",
    age: 22,
    city: "Nagpur"
}

objToArr(obj)

