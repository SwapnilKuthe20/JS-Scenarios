// Write a JavaScript function that calculates the factorial of any given number.
// Remember, the factorial of a number is the product of all positive integers less than or equal to that number.


const factorialFun = (num) => {
    let result = 1
    for (let i = num; i >= 1; i--) {
        result *= i
    }

    return result
}

let num = 4;

const resultFactorial = factorialFun(num)

console.log(resultFactorial, `...is the factorial of ${num}`)

