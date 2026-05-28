// * * *
//  * * 
// * * *
//  * * 
// * * *

let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n; j++) {

        if ((i + j) % 2 == 0) {
            str += "*";
        } else {
            str += " "
        }

    }

    str += "\n"
}

console.log(str);


