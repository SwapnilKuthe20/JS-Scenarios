// Pattern:

// 123454321
//  1234321
//   12321
//    121
//     1



let s = 5;
let e = 9;
let str = "";

for (let i = 1; i <= s; i++) {
    // console.log(i, "..i");

    // // Spaces :: 0,1,2,3,4

    for (let j = 1; j < i; j++) {
        str += " "
    }

    // // Right side tringle ::

    for (let k = 1; k <= s - i + 1; k++) {
        str += k;
    }

    // // Left side tringle ::

    for (let l = s - i; l >= 1; l--) {
        str += l;
    }


    str += "\n"
}

console.log(str);

