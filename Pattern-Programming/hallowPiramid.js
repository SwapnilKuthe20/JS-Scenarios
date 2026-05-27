// Hollow pyramid 😈

//     *
//    * *
//   *   *
//  *     *
// *********


let r = 5;
let c = 9;
let str = "";

for (let i = 1; i <= r; i++) {

    for (let j = 1; j <= c; j++) {

        if (i == r || (j == r - i + 1) || (j == r + i - 1)) {
            str += "*"
        } else {
            str += " "
        }
    }

    str += "\n"
}

console.log(str);


