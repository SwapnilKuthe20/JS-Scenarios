
// Challenge Question:
// Write a JavaScript function isFutureDate() that checks if the input date is in the future or past 
// and returns true for future dates and false for past dates.

// Example Outputs:

// Input: "2025-01-01"  
// Output: true, It's a future date  

// Input: "2024-12-01"  
// Output: false, It's a past date  


const isFutureDate = (date) => {

    const todaysDate = new Date()
    const givenDate = new Date(date)

    if (givenDate > todaysDate) {
        console.log(`${date} is the future date `);
    } else {
        console.log(`${date} is not the future date `);
    }

}

const date1 = '2025-12-16'
const date2 = '2026-12-16'

isFutureDate(date1)
isFutureDate(date2)
