// Write a JavaScript function to print a solid square of size n × n.

// 🔹 Example Output for n = 4:
// ****  
// ****  
// ****  
// ****  

let n = 4;
let str = ""

for (let i = 0; i < n; i++) {

    for (let j = 0; j < n; j++) {
        str += "*"
    }
    str += '\n'
}
console.log(str);


