// Binary Triangle Parity Logic Scenario ::

// Pattern ::

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

// Parity Logic :: Even / Odd Number Logic.

let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        if ((i + j) % 2 === 0) {

            str += 1 + " ";
        } else {
            str += 0 + " ";
        }

    }

    str += "\n";
}

console.log(str);


