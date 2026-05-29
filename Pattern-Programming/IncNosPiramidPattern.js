//  Increament Number Piramid Pattern ::

// Pattern ::

// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9



//  Method -- 1 :: 

let nos = 5;
let str1 = "";

for (let i = 1; i <= nos; i++) {

    for (let j = 0; j < i; j++) {

        str1 += (i + j) + ' ';

    }
    str1 += "\n";
}

console.log(str1);



// ---------------------------------
// ---------------------------------

//  Method -- 2 :: 

let n = 5;
let str = "";
let num = 1;

for (let i = 1; i <= n; i++) {

    for (let j = num; j <= i + i - 1; j++) {

        str += j + ' ';
    }

    str += "\n";

    num++;
}

console.log(str);


