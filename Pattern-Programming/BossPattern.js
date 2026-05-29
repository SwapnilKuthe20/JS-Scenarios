// BOSS PATTERN — FLOYD'S TRIANGLE
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let n = 5;
let num = 1;
let str = "";

for (let i = 1; i <= n; i++) {
    // console.log(i, "...i");

    for (let j = 1; j <= i; j++) {
        // console.log(num, "...num");

        str += num + ' '

        num++;
    }

    str += "\n";
}

console.log(str);

