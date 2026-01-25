// 📥 Problem Statement:
// Write a JavaScript function to return an array of objects containing both key and value pairs from an object.

// 📊 Example:

// Input:
// { a: 1, b: 2, c: 3 }
// Output: [ { key: 'a', value: 1 }, { key: 'b', value: 2 }, { key: 'c', value: 3 } ]

// Input:
// { name: "John", age: 30, city: "New York" }
// Output: [ { key: 'name', value: 'John' }, { key: 'age', value: 30 }, { key: 'city', value: 'New York' } ]

// Input:
// {}
// Output: []


const convertArrayOfObject = (obj) => {

    const arrOfObj = Object.entries(obj);

    // :: 1st way ::

    let result = arrOfObj.map(([key, value]) => ({ key, value }))

    // console.log(result, "...result");


    let result2 = arrOfObj.map((element) => ({ key: element[0], value: element[1] }))
    console.log(result2, "...result 2");

}

const obj = { a: 1, b: 2, c: 3 }

convertArrayOfObject(obj)
