// // Write a js function  to print a downward-facing right-angled triangle star pattern using JavaScript.

// 🌟 Pattern Output for n = 4:
// 4444
// 333
// 22
// 1


const downwardRightAngletriangle = (n) => {

    let str = ""

    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            str += i + " "
        }
        str += '\n'
    }
    console.log(str.trim());

}

let n = 4;

downwardRightAngletriangle(n);

