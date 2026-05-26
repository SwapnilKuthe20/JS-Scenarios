// PATTERN 5
// D
// DC
// DCB
// DCBA


let n = 4;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = 0; j < i; j++) {

        // str += String.fromCharCode("A".charCodeAt(0) - j)               // hardcoded 
        str += String.fromCharCode("A".charCodeAt(0) + n - 1 - j)       // dynamic

    }
    str += "\n"
}

console.log(str);


