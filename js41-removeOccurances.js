// Challenge Question:
// Write a JavaScript function removeoccurrences() to remove all occurrences of a specified value from an array.

// Examples:
// Input: [1, 2, 3, 4, 2, 2], target = 2
// Output: [1, 3, 4]

// Input: [10, 20, 30, 20, 20], target = 20
// Output: [10, 30]

const removeoccurrences = (arr, target) => {

    const filterArray = arr.filter((item) => {
        // console.log(item, "..item");
        return item !== target
    })

    console.log(filterArray, "....filterArray");

}

const arr1 = [1, 2, 3, 4, 2, 2]
const target1 = 2

const arr2 = [10, 20, 30, 20, 20]
const target2 = 20


removeoccurrences(arr1, target1)
removeoccurrences(arr2, target2)

