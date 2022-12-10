// DOM

// Document Object Model
// Document - File
// Object 
// Model - 


// DOM:
// It is a platform that is used to change or create or delete HTML Elements, html attributes and CSS Styles


// Access dom
let header = document.getElementById('head');
let horse = document.getElementById('horse');
console.log(header);

// Change attribute by using dom
header.style.color = 'red';
horse.style.width = '700px';

// Insert a element into dom
const para = document.createElement("h3");
const node = document.createTextNode("Heading 3");
para.appendChild(node);
const element = document.getElementsByTagName("body");
element.appendChild(para);
