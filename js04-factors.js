// Write a JavaScript function that finds all the factors of a given integer. 
// Factors are the numbers that divide the given integer without leaving a remainder.

const factorArray = []

const factors = (num) => {
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            factorArray.push(i)
        }
    }
}

factors(50)

console.log(`Factors are : `, factorArray);

