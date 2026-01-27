// 📥 Problem Statement:
// Write a JavaScript function to create an object where the keys are numbers from 1 to n and the values are their squares.

// 📊 Example:

// 📦 Input: 2
// 📦 Output: { 1: 1, 2: 4 }

// 📦 Input: 4
// 📦 Output: { 1: 1, 2: 4, 3: 9, 4: 16 }

// 📦 Input: 6
// 📦 Output: { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36 }


const createObjValuesSquare = (upto) => {

    const resultObj = {}

    for (let i = 1; i <= upto; i++) {
        resultObj[i] = i * i;
    }

    console.log(resultObj, "...result Obj");

}

const upto = 10;
createObjValuesSquare(upto)

