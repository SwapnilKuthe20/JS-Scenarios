
// 📝 Problem Statement:
// Write a JavaScript function to calculate the sum of all odd numeric values in an object.

// 📊 Examples:
// Input:
// { a: 1, b: 2, c: 'text', d: 3, e: 8 }
// Output:
// 4

// Input:
// { x: 11, y: 'hello', z: 7, w: 4 }
// Output:
// 18

// Input:
// { m: 101, n: 200, o: 'JS', p: true, q: 9 }
// Output:
// 110


const sumOfAllOddNos = (obj) => {

    const valuesArr = Object.values(obj)
    // console.log(valuesArr, "..values all");

    const totalOddNos =
        valuesArr
            .filter((item) => (typeof item === "number" && item % 2 !== 0))
            .reduce((acc, curr) => { return acc + curr })

    console.log(totalOddNos, "...total odds");
}

const obj = { a: 1, b: 2, c: 'text', d: 3, e: 8 };
const obj1 = { x: 11, y: 'hello', z: 7, w: 4 };
const obj2 = { m: 101, n: 200, o: 'JS', p: true, q: 9 }

sumOfAllOddNos(obj)
sumOfAllOddNos(obj1)
sumOfAllOddNos(obj2)
