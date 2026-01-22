
// 📥 Problem Statement:
// Write a JavaScript function that checks if all the values of an object are numeric values.

// 📊 Example:
// Input: { a: 20, b: 30, c: 50 }  
// Output: true  

// Input: { a: 20, b: "30", c: 50 }  
// Output: false  

// Input: { a: 10, b: NaN, c: 40 }  
// Output: false  


const isNumericObjValues = (obj) => {

    const values = Object.values(obj);

    // console.log(values, typeof values);     // object
    // console.log(Array.isArray(values));     // true

    for (let value of values) {
        // console.log(typeof item, "...", item);

        if (typeof (value) !== "number" || isNaN(value)) {
            console.log(false, "...not nos");
            return
        }
    }

    console.log(true, "...yes all values are Nos");

}
const obj = { a: 20, b: 30, c: 50 };

const obj2 = { a: 10, b: NaN, c: 40 }

isNumericObjValues(obj)
isNumericObjValues(obj2)

