
// 🛠️ Challenge Question
// Write a JavaScript function to replace the middle element(s) of a string with *.
// If the string length is odd, replace the single middle character.
// If the string length is even, replace the two middle characters.
// Example Input and Output:

// Input1:
// "hello"
// Output:
// "he*lo"

// Input2:
// "worlds"
// Output:
// "wo**ds"

// Input3:
// "coding"
// Output:
// "co**ng"


const replaceMiddleString = (str) => {

    const strArr = str.split('')
    // console.log(strArr, "..convert into Array");

    const isEvenOdd = strArr.length % 2 === 0 ? "even" : "odd"
    // console.log(isEvenOdd, "...even or odd");

    if (isEvenOdd === "odd") {
        //  console.log(Math.floor(str.length / 2));
        const ele = Math.floor(str.length / 2)
        console.log(ele);
        // console.log(strArr.slice(ele, ele + 1));

        const temp = []
        strArr.map((item, ind) => {
            if (ind == ele) {
                temp.push("*")
            } else {
                temp.push(item)
            }
        })
        // console.log(temp);

        const resultOdd = temp.join('')

        console.log(resultOdd, "...odd");
    }

    if (isEvenOdd === "even") {
        const even = []
        let element = str.length / 2
        // console.log(ele);

        strArr.map((item, ind) => {
            if (ind === element || ind === (element - 1)) {
                even.push("*")
            } else {
                even.push(item)
            }
        })
        console.log(even.join(''), "..even");

    }

}

const str = "hello"
const str1 = "worlds"
const str2 = "coding"
const str3 = "javascipts"


replaceMiddleString(str)
replaceMiddleString(str1)
replaceMiddleString(str2)
replaceMiddleString(str3)


