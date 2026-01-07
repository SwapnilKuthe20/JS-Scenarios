
// Total sum of array elements

const totalSumEle = (numArr) => {

    let total = 0;

    for (let i = 0; i < numArr.length; i++) {
        // console.log(i, "..i");

        total += numArr[i]

    }
    return total
}

let numArr = [1, 15, 1, 13]

const res = totalSumEle(numArr)

console.log("Total sum of all Elements is : ", res);

