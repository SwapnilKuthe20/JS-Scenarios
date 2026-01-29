
// 📝 Problem Statement:
// Write a JavaScript function that takes an object and converts it into a query string format.

// 📊 Examples:
// Input:
// { name: "Alice", age: 25 }
// Output:
// "name=Alice&age=25"

// Input:
// { isActive: true, score: 95, email: "john229@example.com" }
// Output:
// "isActive=true&score=95&email=john229%40example.com"

// Input:
// { firstName: "John", lastName: "Doe", city: "New York" }
// Output:
// "firstName=John&lastName=Doe&city=New%20York"


const objToQueryStr = (obj) => {

    const keysAll = Object.keys(obj)

    const resultMap = keysAll.map((ele) => {
        `${encodeURIComponent(ele)} = ${encodeURIComponent(obj[key])}`
    })

    console.log(resultMap, "...result map");

    let queryStr = resultMap.join("&")

    console.log(queryStr, "...queryString");
    
}

const obj = { name: "Alice", age: 25 }

objToQueryStr(obj)

