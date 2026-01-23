
// 📥 Problem Statement:
// Write a JavaScript function that reverses the order of keys and values in an object.

// 📊 Example:
// Input: {a: 1, b: 2, c: 3}  
// Output: {'1': 'a', '2': 'b', '3': 'c'}


const reverseKesValues = (obj) => {

    const resultObj = {}

    for (let [key, value] of Object.entries(obj)) {

        resultObj[value] = key
    }
    console.log(resultObj, "....resultObj");

}

const obj = { a: 1, b: 2, c: 3 }

reverseKesValues(obj)
