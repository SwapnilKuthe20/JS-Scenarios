// // Write a js function  to print a downward-facing right-angled triangle star pattern using JavaScript.

// Pattern Output for n = 4:
// 1234
// 123
// 12
// 1


const downwardRightAngletriSeqNos = (n) => {

    let str = ""

    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            str += j + " ";
        }
        str += '\n'
    }
    console.log(str);

}

let n = 4;
downwardRightAngletriSeqNos(n)
