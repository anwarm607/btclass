// Operators
/*
1. Assignment operator
2. Arithmetic Operator
3. Comparision operator
4. Ternary operator
5. Logical operators
*/

// 1. Assignment Operators Symbol: =
let firstNumber = 55;


console.log(firstNumber)

// 2. Arithmetic Operator
// Add +
55 + 22
// Substraction - 
55 - 22
// Multiplication *
55 * 22
// Divide /
55 / 22
// Remaining %
55 % 22
// Exponential **
1.6**2
// Increment
// Left Side Increment
// The value returned after increment

console.log(++firstNumber) // 56

// Right side increment
// The value returned before increment
let incrementValue = firstNumber++
console.log(incrementValue, firstNumber) // 56
console.log(firstNumber);

// Decrement
// Left Side Decrement
--firstNumber
console.log(firstNumber);
// Right Side Decrement
firstNumber--
console.log(firstNumber);



// 3. Comparision operator - boolean values
//  i. Rational operator
        // Less than <
        // Greater than >
        // Less than or equal <=
        // Greater than or equal >=
        // Exclamation !=
//  ii. Equal operator
        // Strict Equal ===
        // Lose Equal ==

console.log(5 > 7);
console.log(5 < 7);
console.log(5 == 6, "5==5");
console.log("Anwar" == "Anbu");

console.log('5' == 5, "'5' == 5");
console.log(66 == '66', "66 == '66'"); // Only value
console.log(66 === '66', '66 === 66'); // Data type + Value
// Dictionary
    // A == A
    // n == n
    // w == b

//Less than or equal <=
console.log(66 <= 66, '44 <= 66')

// Greater than or equal

console.log(78 >= 77, '44 <= 66');

// Exclamation - Not Equal !=
console.log(5 != 4, "5 != 4");


// Ternary operators
let age = 17
let adultPriceAmount = 400
let childPriceAmount = 200
if (age > 18) {
 console.log('Your ticket price is:', adultPriceAmount)
} else {
    console.log('Your ticket price is:', childPriceAmount)
}
// Introduced in ES6 
// Syntax:   boolean ? trueValue : falseValue
age > 18 ? console.log('Your ticket price is:', adultPriceAmount) : console.log('Your ticket price is:', childPriceAmount);


// 5. Logical operators
// AND - && - true && true
// OR - || - true || false
// NOT - ! - !true

// With boolean values
console.log(true && true, "AND")
console.log(true && false, "AND")

console.log(false || false, "OR");

console.log(!false, "NOT")

// Non boolean values
console.log(1 && 0, "Non boolean");
console.log("Anwar" && "Anbu" && "IO", "Non boolean");
console.log("Anwar" || undefined, "Non boolean");

// NaN
console.log(55 + undefined)

// Falsy
    // 0
    // undefined
    // null
    // ''
    // ""
    // NaN
// Truthy - Any thing other than falsy values
    // 1 or 1 greater
    // 'ADDDD'
    // "ASJKDHJ"

// Example
let userFavColor = "";
let defaultFavColor = "blue";

let tshirtColor = userFavColor || defaultFavColor;
console.log(tshirtColor, "tshirtColor");

// Operator Precedence - Priority matters

let sum = 1 + 2 * 4;
sum = (1 + 2) * 4
console.log(sum, "_____Sum")

let nummm = 5
nummm *= 3 // short hand
// Equals to nummm = nummm * 3
console.log(nummm);

