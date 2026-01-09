// Here’s the Challenge:
// Write a JavaScript function that takes an array of numbers and returns both the maximum and minimum values.

// Example:
// For input:
// const arr = [3, 56, 9, -1];

// The output should be:
// Minimum: -1
// Maximum: 56


const findMinMax = (arr) => {

    let min = arr[0];
    let max = arr[0];

    for (let item of arr) {
        // console.log(item);
        if (item < min) {
            min = item
        }

        if (item > max) {
            max = item
        }
    }

    console.log("max number is : ", max);
    console.log("min number is : ", min);

}

const arr = [3, 56, 9, -1];

findMinMax(arr)

