// Write a JS Function to print Following Pattern :

// output :
// 1111
// 2222
// 3333
// 4444


const patternNumber = () => {
    let n = 4;
    let str = "";

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            str += i
        }
        str += '\n'
    }
    console.log(str);
}

patternNumber()