// Challenge Question:
// Write a JavaScript function that determine given date is falls on Weekend or not
// (Saturday OR Sunday)


const isWeekend = (date) => {

    const dayOfWeek = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", 'Saturday']

    const givenDate = new Date(date)
    // console.log(givenDate, "....givenDate");

    const givenDayNumber = givenDate.getDay()
    // console.log(givenDayNumber, "...day in number ");

    const givenDay = dayOfWeek[givenDayNumber]
    // console.log(givenDay, "...day");

    if (givenDay === "Sunday" || givenDay === "Saturday") {
        console.log(`${date} is On Weedend ${givenDay}`);
    } else {
        console.log(`${date} is not On Weedend ${givenDay}`);
    }
}

const date1 = "2026-1-17"
const date2 = "2026-1-18"
const date3 = "2026-1-19"

isWeekend(date1)
isWeekend(date2)
isWeekend(date3)
