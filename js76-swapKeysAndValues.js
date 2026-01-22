
// 📥 Problem Statement:
// Write a JavaScript function that swaps the keys and values of an object.

// 📊 Example:
// Input: { a: 1, b: 2, c: 3 }  
// Output: { '1': 'a', '2': 'b', '3': 'c' }  

// Input: { apple: 'fruit', carrot: 'vegetable' }  
// Output: { fruit: 'apple', vegetable: 'carrot' }  


const swapKeysAndvalues = (obj) => {

    const keysList = Object.keys(obj)
    const valuesList = Object.values(obj)

    // console.log(keysList, "..keys");
    // console.log(valuesList, "..values");

    const resultObj = {}


    for (let i = 0; i < keysList.length; i++) {
        // console.log(i);

        resultObj[valuesList[i]] = keysList[i]
    }

    console.log(resultObj, "...result Object");


}

const obj = { a: 1, b: 2, c: 3 }
const fruitsObj = { apple: 'fruit', carrot: 'vegetable' };

swapKeysAndvalues(obj)
swapKeysAndvalues(fruitsObj)
