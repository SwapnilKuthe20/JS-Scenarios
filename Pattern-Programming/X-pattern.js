// *   *
//  * *
//   *
//  * *
// *   *


let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n; j++) {

        if (i == j || (i + j == 6)) {
            str += "*"
        } else {
            str += " "
        }
    }

    str += "\n";
}


console.log(str);

