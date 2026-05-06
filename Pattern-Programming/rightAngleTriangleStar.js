// // Write a js function to print following pattern :

// // ⭐ Pattern Output for n = 4:
// // ****
// //  ***
// //   **
// //    *


// const rightAngleTriangleStar = (n) => {

//     let str = ""

//     for (let i = 1; i <= n; i++) {
//         console.log(i, "..i");


//         for (let j = n; j > 0; j--) {
//             console.log(j);

//             //     if (n - i > j) {
//             //         str += "*"
//             //     } else {
//             //         str += " "
//             //     }
//         }
//         // str += '\n'
//     }

//     console.log(str);

// }

// let n = 4;

// rightAngleTriangleStar(n)

for (let i = 1; i <= 4; i++) {     // rows
  let row = "";

  for (let j = 1; j <= i; j++) {   // columns
    row += "*";
  }

  console.log(row);
}