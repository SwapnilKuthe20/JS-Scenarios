// Challenge Question:
// Write a function rotateArray() that rotates an array k times to the right.

// Example:
// Input: `array = [1, 2, 3, 4, 5], rotations = 2`  
// Output: `[4, 5, 1, 2, 3]`  


const rotateArray = (arr, rotation) => {

    for (let i = 0; i <= rotation; i++) {
        const lastElement = arr.pop(i)
        arr.unshift(lastElement)
    }
    console.log(arr, "...rotate array");

}

const arr = [1, 2, 3, 4, 5]
const rotation = 2

rotateArray(arr, rotation)
