// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *


let n = 4;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
        str += "*"
    }

    for (let k = 1; k <= 2 * (n - i); k++) {
        str += " "
    }

    for (let l = 1; l <= i; l++) {
        str += "*"
    }
    str += "\n"
}

// console.log(str);


for (let a = 1; a < n; a++) {

    for (let b = 1; b <= n - a; b++) {
        str += "*"
    }

    for (let c = 1; c <= a * 2; c++) {
        str += " "
    }

    for (let d = 1; d <= n - a; d++) {
        str += "*"
    }

    str += "\n"
}

console.log(str);

