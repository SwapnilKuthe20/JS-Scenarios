
// 📥 Problem Statement:
// Write a JavaScript function that merges two objects where values with the same keys are added together.

// 📊 Example:

// Input:  
// obj1 = { a: 1, b: 2, c: 3 }  
// obj2 = { a: 3, b: 4, d: 5 }  

// Output: { a: 4, b: 6, c: 3, d: 5 }


const merge2ObjectsFun = (obj1, obj2) => {

    const result = { ...obj1 };

    for (let key in obj2) {
        result[key] = (result[key] || 0) + obj2[key]
    }

    console.log(result, "...combine keys");

}

const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { a: 3, b: 4, d: 5 }


merge2ObjectsFun(obj1, obj2)
