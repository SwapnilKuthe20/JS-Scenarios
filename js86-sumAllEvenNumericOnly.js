// 📥 Problem Statement:
// Write a JavaScript function to calculate the sum of all even numeric values in an object.

// 📊 Example:
// 📦 Input: { a: 1, b: 2, c: 'text', d: 3, e: 8 }
// 📦 Output: 10

// 📦 Input: { x: 10, y: 'hello', z: 5, w: 4 }
// 📦 Output: 14

// 📦 Input: { m: 100, n: 200, o: 'JS', p: true, q: 6 }
// 📦 Output: 306


const sumOfAllEvenNums = (obj) => {

    const allEvenNums = Object.values(obj)

    const totalEvenNums = allEvenNums.filter((item) => item % 2 === 0).reduce((acc, curr) => { return acc + curr }, 0)
    console.log(totalEvenNums, "...total of all even nos ");

}

const obj = { a: 1, b: 2, c: 'text', d: 3, e: 8 };
const obj1 = { x: 10, y: 'hello', z: 5, w: 4 };
const obj2 = { m: 100, n: 200, o: 'JS', p: true, q: 6 };

sumOfAllEvenNums(obj)
sumOfAllEvenNums(obj1)
sumOfAllEvenNums(obj2)

