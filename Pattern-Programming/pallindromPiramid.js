// Pattern:

//     1
//    121
//   12321
//  1234321
// 123454321


let n = 5;
let m = 6;
let col = 9;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n - i; j++) {
        str += " ";
    }

    for (let k = 1; k <= i; k++) {
        str += k;
    }

    for (let s = i - 1; s >= 1; s--) {
        str += s
    }

    str += "\n";

}

console.log(str);



