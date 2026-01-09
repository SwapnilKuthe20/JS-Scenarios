// The Challenge:
// Write a JavaScript function to check if one string is an substring of another string.
// For input:
// isSubstring('hello world', 'world')
// The output should be:True


const isSubstringFun = (mainString, subStr) => {

    const res = mainString.toLowerCase().includes(subStr.toLowerCase())

    if (res) {
        console.log(`Yes it is substring of main String`);
    } else {
        console.log(`No it is substring of main String`);
    }

}

const mainString = "hello world"
const subStr = "swap"

isSubstringFun(mainString, subStr)




