// 📥 Problem Statement:
// Write a JavaScript function to calculate the sum of all numeric values in an object.

// 📊 Example:

// 📦 Input: { a: 1, b: 2, c: 'text', d: 3 }
// 📦 Output: 6

// 📦 Input: { x: 10, y: 'hello', z: 5 }
// 📦 Output: 15

// 📦 Input: { m: 100, n: 200, o: 'JS', p: true }
// 📦 Output: 300


const sumOfAllNumericValue = (obj) => {

    const valuesArr = Object.values(obj)
    // console.log(valuesArr, "values arr");

    const result = valuesArr.filter((item) => typeof item === "number").reduce((acc, curr) => {
        return acc + curr
    }, 0)

    console.log(result, "...result arr");

}

const obj = { a: 1, b: 2, c: 'text', d: 3 }
const obj1 = { x: 10, y: 'hello', z: 5 }
const obj2 = { m: 100, n: 200, o: 'JS', p: true }

sumOfAllNumericValue(obj)
sumOfAllNumericValue(obj1)
sumOfAllNumericValue(obj2)
