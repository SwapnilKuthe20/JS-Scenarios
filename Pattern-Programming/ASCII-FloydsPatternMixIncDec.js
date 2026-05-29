
// Floyd's Patterrn :: ASCII Character (Mix DEC: E-A and Z-V)

//  Pattern :

// E
// D C
// B A Z
// Y X W V


let n = 4;
let str = "";

let CuurentCharCode = "E".charCodeAt(0);
// console.log(charCodeE, "..char code E");

let charCodeZ = "Z".charCodeAt(0);
// console.log(charCodeZ, "...charCode Z");

let charCodeA = "A".charCodeAt(0);
// console.log(charCodeA, "charCode A");



for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {

        str += String.fromCharCode(CuurentCharCode) + " ";

        if (CuurentCharCode === charCodeA) {
            CuurentCharCode = charCodeZ;
        } else {
            CuurentCharCode--;
        }

    }

    str += "\n";
}

console.log(str);

