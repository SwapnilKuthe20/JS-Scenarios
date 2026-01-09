// Here’s the Challenge:
// Write a JavaScript function that generates a random integer from 0 up to a specified value, including the specified value itself.

// Examples:

// For an input of 5, the output should be a random number between 0 and 5.
// For an input of 10, the output should be a random number between 0 and 10.


const randomNosIncluding = (max) => {
    
    const result = Math.floor(Math.random() * max + 1)
    console.log(`The random numbers from 0 to ${max} is : ${result}`);

}

randomNosIncluding(5)
randomNosIncluding(10)
randomNosIncluding(20)
