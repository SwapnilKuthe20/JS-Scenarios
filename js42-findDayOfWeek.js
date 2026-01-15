
// Challenge Question:
// Write a JavaScript function findDayOfWeek() that takes a date as input and returns the corresponding day of the week (e.g., "Monday").

// Examples:
// Input: "2024-12-05"
// Output: "Thursday"

// Input: "2024-12-04"
// Output: "Wednesday"

// Input: "2024-12-06"
// Output: "Friday"


const findDayOfWeek = (date) => {

    // console.log(date, "...date ");
    const dayOfWeek = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", 'Saturday']

    const dateObj = new Date(date)

    // console.log(dateObj, "...date ");

    const dayNumber = dateObj.getDay()
    // console.log(dayNumber, "...date in number");

    const dayIs = dayOfWeek[dayNumber]

    console.log(`On ${date} this date day is : ${dayIs}`);
}

const date1 = "2026-1-15"
const date2 = "2025-7-20"

findDayOfWeek(date1)
findDayOfWeek(date2)


// const today = new Date()

// console.log(today, "...today");
// console.log(today.getDate(), "...date");
// console.log(today.getDay(), "...day");
// console.log(today.getMonth(), "...month");
// console.log(today.toDateString(), "...date string");
// console.log(today.toLocaleTimeString(), "...local time");
// console.log(today.toTimeString(), "...time string");

