// Scope Types
// 1. Global Scope - Can be accessed everywhere and var variable inserted into the window object
// 2. Function Scope - Can be accessed within the function only
// 3. Block scope - Can be accessed within the block i.e., block means the code within the curly braces

// 1. Global scope variable

let a = 10
var b = 20
console.log(a)
console.log(b)
console.log(window)

// 2. Function Scope

function dummyFun() {
    let x = 7

    console.log(a, "Log within function")
}

// console.log(x, "Log outside function")

dummyFun();

// 3. Block scope
console.log(cx, "Outside up if condition X")

if (true) {
    // console.log(cy, "Let var within If and UP")
    let cy = 89
    var cx = 100
    console.log(cy, "Within if condition")
    console.log(cx, "Within if condition X")
}
// console.log(cy, "Outside if condition")
console.log(cx, "Outside if condition X")

// With arrow function 
// let arrrFun = () => {
//     // var cb = 100
//     let cb = 100
// }

// console.log(cb, "Outside arr func")