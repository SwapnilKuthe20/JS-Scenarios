//  Reverse Number Triangle Pattern || Descending Number Half Pyramid Pattern ::

// Pattern:

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1


let n = 5;
let str = "";

for (let i = 1; i <= n; i++) {

    for (let j = i; j > 0; j--) {

        str += j + '';

    }
    str += "\n";

}

console.log(str);


