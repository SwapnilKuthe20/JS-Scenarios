// 📝 Problem Statement:
// You are given an array, and your task is to determine whether it is a 'majestic' array.
// A majestic array is an array where the sum of the first three numbers is equal to the sum of the last three numbers.
// Print 1 if the array is majestic and 0 if it is not.

// Example Input and Output:
// Input:
// [1, 2, 3, 4, 6, 0, 0]
// Output:
// 1

// Input:
// [1, 2, 3, 4, 5, 0, 0]
// Output:
// 0


const isMajestic = (arr) => {

    // console.log(arr.slice(0, 3));
    // console.log(arr.slice(-3));

    const firstThreeArr = arr.slice(0, 3)
    const lastThreeArr = arr.slice(-3)

    const firstThreeTotal = firstThreeArr.reduce((acc, curr) => {
        // console.log(arguments);

        const totalFirstThree = acc + curr
        return totalFirstThree
    }, 0)

    // console.log(firstThreeTotal, "...total first 3");

    const lastThreeTotal = lastThreeArr.reduce((acc, curr) => {

        const totalLastThree = acc + curr
        return totalLastThree
    }, 0)

    // console.log(lastThreeTotal, "...total last 3");

    if (firstThreeTotal === lastThreeTotal) {
        console.log("It is Majestic");
    } else {
        console.log("It is not Majestic");
    }
}

const arr = [1, 2, 3, 4, 6, 0, 0]
const arr2 = [1, 2, 3, 4, 5, 0, 0]

isMajestic(arr)
isMajestic(arr2)

