// *******
//  *****
//   ***
//    *


let n = 4;
let str = "";

for (let i = 0; i < n; i++) {

    for (let j = 1; j <= i; j++) {
        str += " "
    }

    for (let k = 1; k <= (n - i) * 2 - 1; k++) {
        str += "*"
    }

    str += "\n"
}

console.log(str);

