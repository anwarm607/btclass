// Build in objects
 //Array

let arr = Array.from("ABC");
let arrFill = Array(10).fill();

let exampleArray = [1,2, 3, 4]
exampleArray.fill()
console.log(exampleArray.length)

// Iteration

let buttonHtml = '';

let numberButtons = arrFill.map((item, index) => buttonHtml += `<button class="buttonHtml">${index}</button>`)
document.getElementById('numbers').innerHTML = buttonHtml

// let fname = "Anwar"
// let fname = new String("Anwar").

// Important objects

// Array
// Object
// String
// Math


