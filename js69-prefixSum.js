
// 📝 Problem Statement:
// You are given an array, and your task is to calculate its Prefix Sum Array.
// A Prefix Sum Array is an array where each element at index i is the sum of the elements from the start of the array up to index i.

// Example Input and Output:
// Input:
// [2, 4, 4, 2]
// Output:
// [2, 6, 10, 12]

// Input:
// [10, 20, 30]
// Output:
// [10, 30, 60]



const prefixSumFun = (arr) => {

    let total = 0
    const prefixSumArr = []

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
        prefixSumArr.push(total)
    }

    console.log(prefixSumArr, "....Is the Prefix sum array");

}

const arr = [2, 4, 4, 2]
const arr2 = [10, 20, 30]
const arr3 = [10, 20, 30, 40, 50, 60]

prefixSumFun(arr)
prefixSumFun(arr2)
prefixSumFun(arr3)

