//     *
//    * *
//   *   *
//  *     *
//   *   *
//    * *
//     *


let n = 4;
let m = 3;
let col = 7;
let str = "";

// //  Upper Half : 

for (let i = 1; i <= n; i++) {
    // console.log(i, "...i");

    for (let j = 1; j <= col; j++) {
        // console.log(j, "...j");

        if ((j == n - i + 1) || (j == n + i - 1)) {
            str += "*";
        } else {
            str += " ";
        }
    }

    str += "\n";
}


// // Lower half : 


for (let k = 1; k <= m; k++) {
    // console.log(k, "...k");

    for (let l = 1; l <= col; l++) {
        // console.log(l);

        if ((l == k + 1) || (l == 2 * m + 1 - k)) {
            str += "*";
        } else {
            str += " ";
        }
    }

    str += "\n";

}

console.log(str);

// --------------------------------------------------

//  Optimised Version:
//         1. insted m var we use m = n-1
//         2. (l == 2 * m + 1 - k) insted of this we know col so, (l==col-1) 


let row = 4;
let cols = 7;
let str2 = "";

// // Upper half :: 

for (let i = 1; i <= row; i++) {

    for (let j = 1; j <= cols; j++) {

        if ((j == row - i + 1) || (j == row + i - 1)) {
            str2 += "*";
        } else {
            str2 += " ";
        }
    }

    str2 += "\n";
}

// // Lower Half ::


for (let a = 1; a < row; a++) {
    // console.log(a, "...a");

    for (let b = 1; b <= cols; b++) {

        if ((b == a + 1) || (b == cols - a)) {
            str2 += "*";
        } else {
            str2 += " ";
        }
    }

    str2 += "\n"
}


console.log(str2);

// -------------------------------------------
