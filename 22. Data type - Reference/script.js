// Reference Data type

// 1. Object
// 2. Array
// 3. Functions


/* 1.Object
    Syntax */
// {
//     "key": "value"
// }

// Example object

let person = {
    name: "Anwar",
    age: 27,
    address: "3/25H Main street"
};

// console.log(person);


// Access Object by dot notation

console.log(person.name);
console.log(person.age);
console.log(person.address);

// Access object by bracket notation

console.log(person["name"])
console.log(person["age"])
console.log(person["address"])

// Change key value by dot notation
person.age = 28
console.log(person)

// Change key value by bracket notation

person["age"] = 29
console.log(person)

// Insert a key value pair

person.gender="Male"
person["Work Experience"]="4 Years"

console.log(person);


// Nested Object

let personWithNestedObj = {
    name: "Md Anwar",
    age: 27,
    address: "333 North steet",
    isMarried: false,
    siblings: {
        firstSibling: {
            name: "Abdulla",
            age: 28
        },
        secondSibling: {
            name: "Person 2",
            age: 12
        }
    }
}
// Nested object access
console.log(personWithNestedObj.siblings.firstSibling.name)
console.log(personWithNestedObj["siblings"]["secondSibling"]["name"])

// To check person variable type

console.log(typeof person)


// 2. Array
/* Syntax
  let favFruits = ["Apple", "Orange"]
  */

let emptyArr = [];
let favColours = ["Red", "Purple", "Violet", "white"]
let favNumbers = [1, 2, 3, 4, 5]
let persons= [ {name: "Anwar", age: 27}, {name: "Kiran", age: "26"} ];
// Nested Array
let wholeNumber = [1,"3",5,7,[12,4,6,8], {name: "Anwar", age: 27}, true]
console.log(emptyArr)
console.log(favColours)
console.log(favNumbers)
console.log(persons)

console.log(typeof emptyArr, "Array Type -----");


// Access array by index

console.log(favColours[0])
console.log(favColours[1])
console.log(persons[1])

// Change by index
favNumbers[0] = 6
console.log(favNumbers)

// Insert by index

favNumbers[6] = 7
console.log(favNumbers)
console.log(favNumbers[5])

// Access nested array
console.log(wholeNumber[4][2])
console.log(wholeNumber[5]["name"])

// Legnth Property
console.log(wholeNumber)
console.log(wholeNumber.length)


// 3. Functions - Set of Statement
// An Example of statement is., let add = x+y;, let name = "Anwar";
/*
function printMyName() = {

} */
function printMyName() {
    console.log("Anwar", "Looppppp")
}
printMyName();

function addTwoNumbers() {
    let firstNumber = 53;
    let secondNumber = 47;
    let result = firstNumber+secondNumber
    console.log(result)
}
addTwoNumbers();

// Argument and parameter
function add(x, y) {
    let result = x+y;
    console.log(result);
}
add(34, 43);
add(89.2899, 43);
add(90.282, 43);

// ES6 - Arrow function - Another way of defining a function
/* const x = () => {} */
let multipleTwoNumber = (x, y) => {
    let result = x*y;
    console.log("Multiplication Result", result);
}
multipleTwoNumber(45, 78);


// Return of function block
let divideTwoNumbers = (x, y) => {
    let divide = x/y;
    return divide
}

let divideResult = divideTwoNumbers(4, 7);
console.log(divideResult, "Line number 169");


