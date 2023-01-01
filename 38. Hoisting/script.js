// Hoisting

console.log(addTwoNumbers(4, 5))

// console.log(addTwoNumbersExp(8, 9))

function addTwoNumbers(a, b) {
    return a+b
}

let addTwoNumbersExp = function (a, b) {
    return a+b
}

// console.log(x);

let x = 5;

console.log(y)

var y = 6;



// Hoisting is the process whereby the interpreter appears to move the declaration of 
// functions, variables to top of thier scope, prior to execution of code

