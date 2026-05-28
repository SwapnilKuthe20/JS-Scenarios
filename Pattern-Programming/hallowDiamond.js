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
let str = ""

// //  Upper Half : 

for (let i = 1; i <= n; i++) {
    // console.log(i, "...i");

    for (let j = 1; j <= col; j++) {
        // console.log(j, "...j");

        if ((j == n - i + 1) || (j == n + i - 1)) {
            str += "*";
        } else {
            str += " "
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

    str += "\n"

}


console.log(str);


