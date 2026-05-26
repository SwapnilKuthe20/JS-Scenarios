//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

let start = 1;
let end = 4;

let str = "";

//// Loop 1 : 

for (let i = start; i <= end; i++) {

    for (let a = 1; a <= end - i; a++) {
        str += " "
    }

    for (let b = 1; b <= (i * 2) - 1; b++) {
        str += "*"
    }
    str += "\n"
}

// console.log(str);


////  Loop: 2

for (let j = start; j < end; j++) {

    for (let c = 1; c <= j; c++) {
        str += " "
    }

    for (let d = 1; d <= 2 * (end - j) - 1; d++) {
        str += "*"
    }
    str += "\n"
}

console.log(str);

