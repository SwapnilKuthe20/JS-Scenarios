
// Challenge Question:
// Write a JavaScript function that takes a string as input and returns the length of the longest word in that string.

// Example:
// For input:
// longestWordLength("Coding every day sharpens your skills")

// The output should be:
// Longest Word Length: 8


const findLongestString = (str) => {

    // console.log(str.split(" "));
    const strArr = str.split(" ")
    // console.log(strArr, "...strArr");

    let maxLengthStr = strArr[0];
    // console.log(maxLengthStr, "....first ind");
    // console.log(maxLengthStr.length, "....first ind");

    for (let item of strArr) {

        if (maxLengthStr.length < item.length) {
            maxLengthStr = item
        }
    }

    console.log(maxLengthStr, "...maxlengthStr");
    console.log(`The longest string is : ${maxLengthStr} and length is ${maxLengthStr.length}`);

}


let str = "Coding every day sharpens your skills"

findLongestString(str)
