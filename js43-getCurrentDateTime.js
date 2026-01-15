// Challenge Question:
// Write a JavaScript function getCurrentDateTime() to return the current date and time in a readable format.

// Example Output:
// plaintext


const getCurrentDateTime = () => {

    const todaysDate = new Date()

    console.log(todaysDate.toLocaleDateString(), "...local date");
    console.log(todaysDate.toLocaleTimeString(), "...local time");
}

getCurrentDateTime()

