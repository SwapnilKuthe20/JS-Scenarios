// Write a JS Function to print Following Pattern :

// output :
// 1234
// 1234
// 1234
// 1234

// ----- First Method ------
let n = 4;

const patternSerialNos = (n) => {

    for (let i = 1; i <= n; i++) {
        let row = ""

        for (let j = 1; j <= n; j++) {
            row += j + " "
        }
        console.log(row);

    }
}

patternSerialNos(n);

// ----- Second Method ------

// const patternSerialNos = () => {
//     let n = 4;
//     let str = ""

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             str += j+" "
//         }
//         str += '\n'
//     }

//     console.log(str);

// }

// patternSerialNos()
