// 📥 Problem Statement:
// Write a JavaScript function that checks whether all values in an object are of the same data type.

// 📊 Example:

// Input: { a: 1, b: 2, c: 3 }           
// Output: true

// Input: { a: 1, b: "text", c: 3 }     
// Output: false

// Input: {}                             
// Output: true

// Input: { a: true, b: false, c: true } 
// Output: true



const checkIsSameDT = (obj) => {

    const valueTypes = Object.values(obj)
    console.log(valueTypes, "...valueTypes");

    const typeFirst = typeof valueTypes[0]
    // console.log(typeFirst, "...type");


    const isSameDT = valueTypes.every((value) => {
        return (typeof value === typeFirst)
    })

    console.log(isSameDT, "...is Same DataType");
}

const obj = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: "text", c: 3 }


checkIsSameDT(obj)
checkIsSameDT(obj2)

