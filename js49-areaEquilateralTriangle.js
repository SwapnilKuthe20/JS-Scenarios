// 🛠️ Challenge Question
// Write a JavaScript function areaEquilateralTriangle() to calculate the area of an equilateral triangle given its side length.
// 📚 Reference:
// This problem is inspired by GUVI CodeKata, an excellent platform for coding practice.

// Formula for Area of an Equilateral Triangle, where a is the length of a side of the triangle.

// 💡 Examples:
// Input:
// Side = 20
// Output:
// Area = 173.21

// Input:
// Side = 10
// Output:
// Area = 43.30

// formule : sqrtRoot(3)/4 * side square

const areaEquilateralTriangle = (side) => {

    // console.log(Math.sqrt(4));
    // console.log(Math.sqrt(16));

    const result = Math.sqrt(3) / 4 * (side * side)

    console.log(result.toFixed(2), "...result");
}

const side = 20;

areaEquilateralTriangle(side)

