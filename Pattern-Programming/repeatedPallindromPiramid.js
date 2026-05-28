// Pattern:

//     1
//    212
//   32123
//  4321234
// 543212345


let s = 5;
let str = "";

for (let i = 1; i <= s; i++) {

    for (let j = 1; j <= s - i; j++) {
        str += " ";
    }

    for (let k = i; k >= 1; k--) {
        str += k;
    }

    for (l = 2; l <= i; l++) {
        str += l;
    }

    str += '\n';
}

console.log(str);


