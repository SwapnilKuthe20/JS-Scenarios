// Write a JS function to print repeate row Numbers:
// OUtput:

// 1
// 22
// 333
// 4444

// ----- First Method -----

let n = 4;

const repeateRowNos = (n) => {

    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {

            row += i + " ";
        }
        console.log(row);

    }
}

repeateRowNos(n)



// ----- Second Method -----

// const repeateRowNos = (n) => {

//     let str = "";

//     for (let i = 1; i <= n; i++) {

//         for (let j = 1; j <= i; j++) {
//             str += i + " "
//         }
//         str += '\n';
//     }
//     console.log(str);

// }

// let n = 4;
// repeateRowNos(n)