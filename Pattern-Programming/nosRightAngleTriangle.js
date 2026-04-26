// Write a JS function that prints Right Angle Triangle :

// Output :
// 1
// 12
// 123
// 1234


const nosRightAngleTriangle = (n) => {

    let str = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {
            str += j + " ";
        }
        str += '\n';
    }
    console.log(str);
}

let n = 4;
nosRightAngleTriangle(n)