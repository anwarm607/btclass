// Array Objects Methods and Properties

// Primitive values
let array = [1,2,3,4];
console.log(array.indexOf(2));
console.log(array.lastIndexOf(2));

console.log(array.includes(10));

// console.log(array.findIndex((it) => it === 3));
// Reference value

let arrOfObj = [{name: "Anwar", dob: "1995-07-14", age: 27}, {name: "Ananth", dob: "2001-05-14", age: 21}, {name: "Aravindh", dob: "2001-05-14", age: 19}]

console.log(arrOfObj.findIndex((it) => it.age > 21));

console.log(arrOfObj.find((person) => person.age > 20)); // Returns the data type of a element

console.log(arrOfObj.filter((person) => {
  return  person.age > 20
})); // Returns multiple value as Array


// Without return key 
let exampleFn = (age) => age
console.log(exampleFn(24));

// With return key 
let exampleFn2 = (age) => {
    let isAboveEighteen = age > 18;
    let isAboveForLearner = age > 15;
    let text = '';
    if (isAboveEighteen) {
        text = "You are eligible to licence"
    } else if (isAboveForLearner) {
        text = "You are eligible for learner licence"
    } else {
        text = "Not eligible"
    }
    return text
}
console.log(exampleFn2(15));


// Remove a value from Array

let numbers = [1,2,3,4,5, 6, 7, 8, 9, 0]
console.log(numbers)
// Removes last element
// numbers.pop();

// Removes first element
// numbers.shift();

// Remove inbetween
numbers.splice(3, 5);

console.log(numbers)

let numbers2 = [1,2,3,4,5, 6, 7, 8, 9, 0];
// Insert into end of the array
// numbers2.push(56, 67, 68, 67)

// Insert into start of the array
// numbers2.unshift(56, 67, 68, 67)

// Insert inbetween
// numbers2.splice(3, 0, 467, 567);

console.log(numbers2);

// Iteration

let number3 = [1,3,4,5,6,7,8,9,0]

// for (const no of number3) {
//     let result = no +18
//     console.log(result)
// }

// number3.forEach(el => {
//     console.log(el)
// })

// number3.map((element, index) => {
//     console.log(element, "element");
//     console.log(index, "index");

// })

let joinArray = number3.join("")
console.log(joinArray)

let splitString = "Anwar-Mohamed-MLLLLL"
let splitArr = splitString.split("-")
console.log(splitArr)

let numberrrr = Array(10).fill()
console.log(numberrrr.map((it, index) => index));

