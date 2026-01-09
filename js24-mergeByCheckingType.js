// Here’s the Challenge:
// Write a JavaScript function that merges two arrays or two objects, depending on the input.
// The function should check the types first and only merge if both inputs are of the same type. If they’re not, it should print an error message.

// For inputs:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// The output should be:
// [1, 2, 3, 4, 5, 6]

// For objects:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// The output should be:
// { a: 1, b: 3, c: 4 }


const mergeDependOnType = (inp1, inp2) => {
    console.log(typeof inp1);
    console.log(typeof inp2);

    console.log(Array.isArray(inp1));
    console.log(Array.isArray(inp2));

    if (Array.isArray(inp1) && Array.isArray(inp2)) {
        console.log("Inside array if");

        const resultantArray = [...inp1, ...inp2]
        return resultantArray;

    } else if (!Array.isArray(inp1) && !Array.isArray(inp2) && typeof inp1 === "object" && typeof inp2 === "object") {
        console.log("Inside object if");

        const resultantObject = { ...inp1, ...inp2 }
        return resultantObject;

    } else {
        throw Error("Error : Type does not match")
    }
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = mergeDependOnType(arr1, arr1)
console.log(result, "...result");

