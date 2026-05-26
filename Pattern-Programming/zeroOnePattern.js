// 1
// 01
// 101
// 0101

let n = 6;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        if ((i + j) % 2 === 0) {
            str += 1;
        } else if ((i + j) % 2 === 1) {
            str += 0
        }
    }

    str += "\n";

}

console.log(str);
