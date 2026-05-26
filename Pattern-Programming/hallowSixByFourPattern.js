// ******
// *    *
// *    *
// ******


let r = 4;
let c = 6;
let str = "";

for (let i = 1; i <= r; i++) {

    for (let j = 1; j <= c; j++) {

        if (i === 1 || i === r || j === 1 || j === c) {
            str += "*"
        } else {
            str += " "
        }
    }

    str += "\n"
}

console.log(str);



