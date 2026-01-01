// Write a JavaScript function that takes a number as an argument and returns the sum of all even numbers up to that number.

const sumOfAllFun = (num) => {
    let total = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            // console.log(i);
            total += i
        }
    }

    console.log(`Sum of all upto the ${num} is : ${total}`);
}

sumOfAllFun(6)
