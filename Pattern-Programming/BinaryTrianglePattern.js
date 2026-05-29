// Boss Pattern : Binary Triangle Pattern ::

// Pattern :: 

// 1
// 0 0
// 1 1 1
// 0 0 0 0
// 1 1 1 1 1

// Rough :: Row Parity - means value Odd / Even logic :::

let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        if (i % 2 === 0) {
            str += 0 + " ";
        } else {
            str += 1 + " ";
        }

    }

    str += "\n";

}

console.log(str);



