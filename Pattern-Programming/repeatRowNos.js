// Write a JS function to print repeate row Numbers:
// OUtput:

// 1
// 22
// 333
// 4444

const repeateRowNos = (n) => {

    let str = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            str += i + " "
        }
        str += '\n';
    }
    console.log(str);

}

let n = 4;
repeateRowNos(n)