
// 📥 Problem Statement:
// Write a JavaScript function to find the sum of squares of the first N natural numbers.

// 📊 Example:
// Input: 5
// Output: 55
// (Explanation: 1² + 2² + 3² + 4² + 5² = 55)


const sumOfSquare = (inp) => {

    const squareArr = []

    for (let i = 1; i <= inp; i++) {
        // console.log(i);
        squareArr.push(i * i)
    }

    // console.log(squareArr, "...squares of Arr Elements");

    const totalSumSquare = squareArr.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    console.log(totalSumSquare, "...total sum of Square of an array elements");

}


const inp = 5;

sumOfSquare(inp)
