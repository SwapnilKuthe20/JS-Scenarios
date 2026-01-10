// //  String

// // 1 -- Immutable  ::

// let name = "Swap"
// name.toLowerCase()
// console.log(name, "....name");

// // 2 -- length and indexing  ::

// const length = name.length
// console.log(length, "..length");

// console.log(name[3], "...index value");
// // ------------------------

// // 3 -- Upper / lower
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());
// // -------------------------------
// //  4 -- Trim Family ::

// let strTrim = "   Swap     "
// // strTrim = strTrim.trim()
// console.log(strTrim.trim(), "...trim all");
// console.log(strTrim.trimStart(), "Trim start");
// console.log(strTrim.trimEnd(), "Trim End");

// // -------------------------------

// // 5 -- Includes        // case Sentitive

// let love = "I love You"

// console.log(love.includes("swap"), "...is includes");
// console.log(love.includes("I"), "...is includes");
// console.log(love.includes("love"), "...is includes");
// console.log(love.includes("YOU"), "...is includes");

// // ---------------------------------------

// // 6 -- startsWith() and endsWith()

// let email = "swap@gmail.com"

// console.log(email.startsWith(".com"), "...startsWith");
// console.log(email.endsWith(".com"), "...endsWith");

// // ----------------------------------

// 7. slice() ::    power negative indexing

// let mystr = "swapnil"

// console.log(mystr.slice(0, 4), "...first 4");

// console.log(mystr.slice(4), "...4 ind se last all ");

// console.log(mystr.slice(-3), "... neg 3 se all last");

// console.log(mystr.slice(-7, -3), "...swap");

// console.log(mystr.slice(-3, -7), "...swap");    // ""

// console.log(mystr.slice(4, 0), "...4, 0");      // ""

// console.log(mystr.slice(-100), "... -100");     // "swapnil"

// --------------------------------------------------------

//  Random Number Generator :

// 0-10
const randNum = Math.random() * 10
const num = Math.floor(randNum)
// console.log(num, "...random number");


// 10-20

const randomNos = Math.floor(Math.random() * (20 - 10 + 1)) + 10

// console.log(randomNos, "...10-20");

//  Dice ::

const diceNum = Math.floor(Math.random() * 6) + 1
// console.log(diceNum, "....diceNum");

const rangeGenerator = (min, max) => {
    const res = Math.floor(Math.random() * (max - min + 1)) + min
    // console.log(`Random Number between ${min} and ${max} is  : ${res}`);

}

// rangeGenerator(10, 20)
// rangeGenerator(100000, 999999)

// Random fruits :

const fruits = ["apple", "banana", "mango", "orange"];

const randomFruits = fruits[Math.floor(Math.random() * fruits.length)]

// console.log(randomFruits, "...random fruits");
// -----------------------------------------------
//  Obeject merge :::

const obj1 = {
    name: "swap"
}

const obj2 = {
    age: 25
}

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3, "...obj3");


const user = {
    name: "dipak",
    city: "Eklari"
}

const setting = {
    theme: "light",
    lang: "Eng"
}

// const userDetails = Object.assign({}, user, setting)

const userDeatils1 = Object.assign(user, setting)

// console.log({ userDetails }, "...userDeatils");

// console.log(userDeatils1, "...userDeatils");
// console.log(user, "..user Obj");
// -------------------------------------------------------

const student = {
    name: "Swap",
    age: 28,
    address: {
        city: "eklari",
        pin: 441905
    }
}

const device = {
    mobile: "lava",
    sim: {
        operator: "airtel",
        comsumer: "indian"
    }
}

const studentInfo = { ...student, ...device }
// console.log(studentInfo, "...studentInfo");

student.address.city = "nagpur"

studentInfo.address.city = "raipur"
// console.log(studentInfo, "...studentInfo");     // address : ref same 
// console.log(student, "...student");             // ref same


studentInfo.name = "neel"

// console.log(studentInfo.name);          // neel : top level keys copy
// console.log(student.name);              // swap

// -------------------------------


const a = {
    info: {
        name: "ayush"
    }
}

const b = {
    info: {
        age: 25
    }
}

const c = { ...a, ...b }
// console.log(c, "....c shallow copy eg ");

// ---------------------------------

// Deep merge : correct way by spread

const employee = {
    name: "ayush",
    age: 15,
    grade: "group D",
    payment: {
        basic: 25000,
        stipend: 2000
    },

}

const manager = {
    name: "giri",
    age: 35,
    post: "class1",
    payment: {
        basic: 35000,
        stipend: 10000
    }
}

const details = {
    ...employee,
    payment: {
        ...employee.payment,
    },
    ...manager,
    payment: {
        ...manager.payment
    }
}

console.log(details, "...details");

// details.name = "swap";
// details.payment.basic = 40000;

// console.log(details, "...details");
// console.log(manager, "...manager");
// console.log(employee, "...employee");
// ---------------------------------------

console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () { });

let abc = 12
// console.log(typeof abc)










