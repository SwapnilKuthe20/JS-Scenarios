
// Here’s the Challenge:
// Write a JavaScript function that merges two objects, combining all their properties into one new object.
// Example:
// For inputs:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// The output should be:
// { a: 1, b: 3, c: 4 }


const mergeObj = (obj1, obj2) => {
    console.log(obj1);
    console.log(obj2);

    const obj3 = { ...obj1, ...obj2 }

    console.log(obj3, "...merge object result");
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

mergeObj(obj1, obj2)


