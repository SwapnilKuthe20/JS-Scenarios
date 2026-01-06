// Here’s the Challenge:
// Write a JavaScript function that counts the number of occurrences of each unique element in an array of numbers.

// Examples:
// For the input [1, 2, 2, 3, 3, 3, 4], the output should be {1: 1, 2: 2, 3: 3, 4: 1}.
// For the input [5, 5, 5, 6], the output should be {5: 3, 6: 1}.


const digitOccurance = (arr) => {

    const resObj = {}

    for (let num of arr) {
        // console.log(num, "...num");

        resObj[num] = (resObj[num] || 0) + 1

    }
    console.log(resObj, "...res");
}

const arr = [1, 2, 2, 3, 3, 3, 4]
// const strArr = ["name", "email", "name", "email"]

digitOccurance(arr)
digitOccurance(strArr)



