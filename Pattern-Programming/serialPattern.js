// MIXED NUMBER PATTERNS 😈 (real logic builder)

// Pattern:

// 1
// 23
// 456
// 78910


let n = 4;
let nos = 0;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
        nos++;
        str += nos;
    }
    str += "\n";
}

console.log(str);




