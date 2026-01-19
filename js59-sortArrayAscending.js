// 🛠️ Challenge Question
// Write a JavaScript function sortArray() to sort an array in descending order without using any inbuilt methods.



const sortAscendingFun = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        // console.log(i, "...i");
        for (let j = 0; j < arr.length; j++) {
            // console.log(j, "...j");

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }

    console.log(arr, "...array ascending");


}

const arr = [1, 45, 25, 2, 8, 26]

sortAscendingFun(arr)



