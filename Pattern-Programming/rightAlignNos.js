// Write a JS function to printing a right-aligned right-angled triangle using numbers


// 🔢 Pattern Output for n = 4:
//       1
//      22
//     333
//    4444


const rightAlignStarPatt = (n) => {

    let str = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                str += " "
            } else {
                str += i
            }
        }
        str += '\n';
    }
    console.log(str);

}

let n = 4;
rightAlignStarPatt(n)
