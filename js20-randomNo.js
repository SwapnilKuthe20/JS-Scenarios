// Here’s the Challenge:
// Write a JavaScript function that generates a random number from 0 to a specified value, excluding the specified value itself.

// For example:
// For the input 5, the output should be a random number between 0 and 4.
// For the input 10, the output should be a random number between 0 and 9.

const generateRandom = (max) => {

    const result = Math.floor(Math.random() * max)
    console.log(`The random Numbers from 0 to ${max} : ${result}`);

}

// generateRandom(5)
generateRandom(10)




