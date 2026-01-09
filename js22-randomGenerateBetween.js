// Here’s the Challenge:
// Write a JavaScript function that generates a random integer between two specified values, inclusive of both the minimum and maximum values.

// Examples:

// For inputs of min = 5 and max = 15, the output should be a random number between 5 and 15.
// For inputs of min = 0 and max = 10, the output should be a random number between 0 and 10.


const generateRandom = (min, max) => {
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`The random number between ${min} and ${max} : ${result}`);

}

generateRandom(10, 20)
generateRandom(100, 200)
generateRandom(15, 20)
generateRandom(50, 55)
