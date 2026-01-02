// Write a JavaScript function that takes a number as an argument
// and prints the multiplication table for that number, from 1 to 10.

const multiTableCreateFun = (num) => {

    for (i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} =${num * i} `);
    }
}

multiTableCreateFun(15)

