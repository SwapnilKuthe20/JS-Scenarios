// *****
// *   *
// * * *
// *   *
// *****


let n = 5;
let str = "";
let center = (n + 1) / 2;
// console.log(center, "...center");

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n; j++) {

        if (i == 1 || i == n || j == 1 || j == n || (i == center && j == center)) {
            str += "*";
        } else {
            str += " ";
        }
    }

    str += "\n";
}

console.log(str);

