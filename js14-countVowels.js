// Here’s the challenge:
// Write a JavaScript function that counts the number of vowels in a given string.


const countVowelsFun = (str) => {
    // console.log("funxtion call");

    const vowelArray = ["a", "e", "i", "o", "u"]

    const resVowels = []

    for (let i = 0; i < str.length; i++) {
        console.log(str[i], ".....alfabets");

        if (vowelArray.includes(str[i])) {
            resVowels.push(str[i])
        }
    }

    return resVowels.join()
}

let inpString = "swapnil kuthe"

const result = countVowelsFun(inpString)

console.log(`${result} are the presents vowels in the given ${inpString}`);
