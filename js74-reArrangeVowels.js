
// 📥 Problem Statement:
// Write a JavaScript function that rearranges the vowels in a string in ascending order while keeping the consonants in their original positions.

// 📈 Example:
// Input: "selva"
// Output: "salve"

// Input: "ebcda"
// Output: "abcde"



const reArrangeVowels = (str) => {

    const vowels = ['a', 'e', "i", "o", "u"]

    const strVowelsList = []

    const fillArr = new Array(str.length).fill(null)

    for (let i = 0; i < str.length; i++) {

        // console.log(vowels.includes(str[i]))

        if (vowels.includes(str[i])) {
            strVowelsList.push(str[i])
        } else if (!vowels.includes(str[i])) {
            fillArr[i] = str[i]
        }
    }

    strVowelsList.sort()

    // console.log(strVowelsList, "..availabel vowels ");
    // console.log(fillArr, "...fill array");

    let indexVowel = 0

    for (let i = 0; i < fillArr.length; i++) {
        if (fillArr[i] === null) {
            fillArr[i] = strVowelsList[indexVowel++]
        }
    }

    // console.log(fillArr, "...fiinal arr");

    const result = fillArr.join('')

    console.log(result, "..here is the output");

}

const str = "selva"

reArrangeVowels(str)