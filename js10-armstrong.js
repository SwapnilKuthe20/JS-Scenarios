// In today's challenge, we’re diving into an interesting mathematical concept: Armstrong Numbers! ✨

// What is an Armstrong Number?
// An Armstrong number is a number that equals the sum of its digits,
// with each digit raised to the power of the total number of digits.
// This problem helps you practice loops, conditionals, and mathematical operations in JavaScript.

// Armstrong ===>>> given no = sum of (each digit raised to the power of the total number of digits)

// Here’s the challenge:
// Write a JavaScript function that checks if a given number is an Armstrong number.


function isArmstrongFun(num) {
    // console.log(typeof num.toString(), "...type");
    // console.log(num.toString().length, "...length.....");

    // console.log(num.length, "...length");        // Error :: length property is not for number DT

    const lengthOfNo = String(num).length;
    // console.log(lengthOfNo, "..length");
    // console.log(Math.pow("10", lengthOfNo));
    // console.log("swap"[0], "...num");

    let res = 0

    for (let i = 0; i < lengthOfNo; i++) {
        // console.log(num.toString()[i], "...ind");

        res += Math.pow(num.toString()[i], lengthOfNo)
    }

    // console.log(res, "...res");

    if (num === res) {
        console.log(`the given No ${num} is a armstrong number.`);
    } else {
        console.log(`the given No ${num} is not a armstrong number.`);
    }
}

let num = 153;
isArmstrongFun(num)

