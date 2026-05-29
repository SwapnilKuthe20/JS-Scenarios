//  Boss Pattern : Binary Triangle Scenario ::

// Pattern ::

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1


// Rought :: j%2===0, if EVEN = print 0, If Odd = Print 1.

let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        if (j % 2 === 0) {
            str += 0 + ' ';
        } else {
            str += 1 + ' ';
        }

    }

    str += "\n";
}

console.log(str);

