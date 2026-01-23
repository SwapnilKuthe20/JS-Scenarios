
// 📥 Problem Statement:
// Write a JavaScript function that removes duplicate values from an object.

// 📊 Example:
// Input: { a: 1, b: 2, c: 1, d: 3, e: 2 }  
// Output: { a: 1, b: 2, d: 3 }


const removeDuplicateValues = (obj) => {

    const uniqueValues = new Set()

    let result = {}

    for (let [key, value] of Object.entries(obj)) {

        if (!uniqueValues.has(value)) {
            uniqueValues.add(value)
            result[key] = value
        }
    }

    console.log(result, "..result OBJ");
}
const obj = { a: 1, b: 2, c: 1, d: 3, e: 2 }

removeDuplicateValues(obj)
