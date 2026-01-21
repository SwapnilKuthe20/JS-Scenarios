
// 📝 Problem Statement:
// Write a JavaScript function to find the common keys and their values in two given objects.

// Input Examples:
// 1️⃣ Input:
// const obj1 = { a: 1, b: 2, c: 3 };  
// const obj2 = { b: 2, c: 3, d: 4 };  
// Output:
// { b: 2, c: 3 }

// 2️⃣ Input:
// { z: 20, f: 80 }, { f: 80 }
// Output:
// { f: 80 }


const commonKeyValues = (obj1, obj2) => {

    const commonKeys = {}

    for (let key in obj1) {

        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            commonKeys[key] = obj1[key]
        }
    }

    console.log(commonKeys, "...common keys");
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 3, d: 4 };

commonKeyValues(obj1, obj2)
