// Write a JS function that prints Right Angle Triangle :

// Output :
// *
// **
// ***
// ****


const rightAngleTriangleFun = (n) => {
    let str = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += "* "
        }
        str += '\n'
    }

    console.log(str);
}

let n = 4;

rightAngleTriangleFun(n)
