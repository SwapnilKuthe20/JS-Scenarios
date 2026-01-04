// Today’s challenge:
// Write a JavaScript function to check if a given number is a palindrome.
// A palindrome reads the same forward and backward,
// and this task will help you get comfortable with string manipulation and conditional logic in JavaScript.


const isPalindrom = (givenInput) => {
    // console.log(givenInput, "...givenInput");

    const output = []

    for (let i = givenInput.length - 1; i >= 0; i--) {
        // console.log(i, "...i");
        output.push(givenInput[i])
    }
    // console.log(output, "..output");
    // console.log(output.join(""), "...slice");

    let res = output.join("")
    console.log(res, "...res");


    if (givenInput === res) {
        console.log(`The given ${givenInput} input is the Palindrom `);
    } else {
        console.log(`The given ${givenInput} input is not the Palindrom `);
    }

    // output.slice().join()
}

let givenInput = "123321"

isPalindrom(givenInput)
