
// 🛠️ Challenge Question
// Write a JavaScript function encodeString() to encode a string based on character frequency.

// Example Input and Output:
// Input:
// "aaabbc"

// Output:
// "a3b2c1"

// Input:
// "abc"

// Output:
// "a1b1c1"

const encodeString = (str) => {

    const strSplit = str.split('')
    let resultStr = ''
    // console.log(strSplit);

    const countObj = strSplit.reduce((acc, curr) => {

        acc[curr] = (acc[curr] || 0) + 1
        return acc

    }, {})

    // console.log(countObj);

    for (let key in countObj) {
        // console.log(key);
        // console.log(countObj[key]);

        resultStr += (key + countObj[key])
    }
    console.log(resultStr, "...result String");

}

const str = "aaabbc"

encodeString(str)

