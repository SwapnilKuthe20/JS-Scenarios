// Write a JavaScript function that prints numbers from 1 to 100:

// For multiples of 3, print "Fizz".
// For multiples of 5, print "Buzz".
// For numbers divisible by both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        // console.log(i, "...i");

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz()
