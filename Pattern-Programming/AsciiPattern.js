// Z
// ZY
// ZYX


let n = 3;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = i; j >= 1; j--) {
        // console.log(j);

        let ch = String.fromCharCode("Z".charCodeAt(0) - j + 1);
        str += ch;

    }
    str += '\n'

}
console.log(str);





