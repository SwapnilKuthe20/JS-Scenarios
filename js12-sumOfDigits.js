// Here’s the challenge:
// Write a JavaScript function that calculates the sum of the digits of any number provided as input.


const sumOfDigits = (num) => {
    // console.log(num.length, "...length");

    let givenNo = num.toString()
    console.log(givenNo, "...stringNO");

    console.log(typeof givenNo);
    let total = 0;

    for (let i = 0; i < givenNo.length; i++) {
        // console.log(givenNo[i], "..i");
        // console.log(Number(givenNo[i]), "..num convert");
        total += Number(givenNo[i])
    }

    return total;
}

let num = 12354;
const result = sumOfDigits(num)

console.log(`The sum of Digits of ${num} No is :: ${result}`);




