
// Floyd Triangle's character version
// Pattern:

// A
// B C
// D E F
// G H I J
// K L M N O


// Rough Work :
// Row - 5, Cols - 5, loop: 1,2,3,4,5
// Loop controls - How many time loops run ? not giving data to print..


let n = 5;
let str = "";

let charStartFrom = "A";

let charCode = charStartFrom.charCodeAt(0);
// console.log(charCode, "...charcode ");


for (let i = 1; i <= n; i++) {
    // console.log(i, "........i");

    for (let j = 1; j <= i; j++) {
        // console.log(j, "...j");

        str += String.fromCharCode(charCode) + " ";

        charCode++;

    }

    str += "\n";
}

console.log(str);

