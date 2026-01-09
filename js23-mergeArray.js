// Here’s the Challenge:
// Write a JavaScript function that merges two arrays into a single array, combining all elements from both arrays.

// Example:
// For inputs:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// The output should be:
// [1, 2, 3, 4, 5, 6]


const mergeArrayFun = (arr1, arr2) => {

    const arr3 = [...arr1, ...arr2]
    console.log(arr3, "...merge array");

}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

mergeArrayFun(arr1, arr2)

