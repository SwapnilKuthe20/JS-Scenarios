
// 🛠️ Challenge Question
// Write a JavaScript function calculateAverage() to calculate the average of all numbers in a given array.

// Example Input and Output:
// Input:
// Array: [10, 20, 30, 40, 50]

// Output:
// 30

// Input:
// Array: [1, 2, 3, 4, 5]

// Output:
// 3

const calculateAverage = (arr) => {


    const totalSum = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    console.log(totalSum, "...total sum ");

    const averageIs = totalSum / arr.length;
    console.log(averageIs, "...is average ");
}

const arr = [10, 20, 30, 40, 50]

calculateAverage(arr)

