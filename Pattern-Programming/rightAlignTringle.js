// Write a JS Function  building a right-aligned triangle with sequential numbers
// 🔢 Pattern Output for n = 4:
//       1
//      12
//     123
//    1234


function rightAlignTriangle(n) {

    let str = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {
            if (n - i >= j) {
                str += " "
            } else {
                str += (j - (n - i))
            }
        }
        str += '\n'

    }
    console.log(str);
}

let n = 4;

rightAlignTriangle(n)
