// Write a JS function to print a right-aligned right-angled triangle made of stars
// 🌟 Pattern Output for n = 4:
//        *
//       **
//      ***
//     ****


function starPattern(n) {

    let str = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                str += " ";
            } else {
                str += "*";
            }
        }
        str += '\n'
    }
    console.log(str);

}

let n = 4;
starPattern(n);
