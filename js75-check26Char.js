
// 📥 Problem Statement:
// Write a JavaScript function that checks if two strings are complementary (together containing all 26 English letters exactly once).

// 📊 Example:
// Input: ("ABDCFGIJKLMNOPQUVWXYZ", "EHRST")  
// Output: Yes  

// Input: ("AABBCC", "DDEEFF")  
// Output: No  

// 💡 Approach:
// ✅ Step 1: Combine both strings using concatenation (+).
// ✅ Step 2: Convert the combined string to lowercase using .toLowerCase().
// ✅ Step 3: Remove duplicate characters using the Set object.
// ✅ Step 4: Check if the set contains exactly 26 unique characters and all are alphabets.


const is26UniqueChars = (str1, str2) => {

    const str1Unique = []
    const str2Unique = []

    for (let i = 0; i < str1.length; i++) {
        // console.log(str1Unique.includes(str1[i]));

        if (!str1Unique.includes(str1[i])) {
            str1Unique.push(str1[i])
        }
    }

    for (let i = 0; i < str2.length; i++) {
        // console.log(str2Unique.includes(str2[i]), "...2");

        if (!str2Unique.includes(str2[i])) {
            str2Unique.push(str2[i])
        }
    }

    // console.log(str1Unique, "...str 1 unique");
    // console.log(str2Unique, "...str 2 unique");

    const total = str1Unique.length + str2Unique.length
    // console.log(total, "...total");

    if (total === 26) {
        console.log("yes total is 26... :: ", total);
    } else {
        console.log("No total is not 26... :: ", total);
    }
}

const str1 = "ABDCFGIJKLMNOPQUVWXYZ";
const str2 = "EHRST";

const str3 = "AABBCC";
const str4 = "DDEEFF";

is26UniqueChars(str1, str2)
is26UniqueChars(str3, str4)
// ------------------------------------------------------

//  second approach :: using Set()


function isTotal26(inp1, inp2) {

    const uniq1 = new Set(inp1)
    const uniq2 = new Set(inp2)

    // Set has size property
    // console.log(uniq1.size, "...size");      
    // console.log(uniq2.size, "...size");

    const totalUniq1 = uniq1.size
    const totalUniq2 = uniq2.size

    const allToatal = totalUniq1 + totalUniq2;

    if (allToatal === 26) {
        console.log(allToatal, "..Yes, total 26 characters");
    } else {
        console.log(allToatal, "... NO, it is not 26 characters");
    }

}

const inp1 = "EHRST";
const inp2 = "ABDCFGIJKLMNOPQUVWXYZ";

const inp3 = "AABBCC";
const inp4 = "DDEEFF";

isTotal26(inp1, inp2)
isTotal26(inp3, inp4)
