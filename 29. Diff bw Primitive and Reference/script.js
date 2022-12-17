// Primitive type
let x = 27;
let y = x; // Copy the x value

x = 30;

console.log(x, "X")
console.log(y, "Y")

// Reference type

let objectx = {
    value: 27
}

let objecty = objectx

objectx.value = 30;

console.log(objectx, "objectx")
console.log(objecty, "objecty")



// Memory explanation
// let x = 27
// memory id 123
// let y = x
// memory id 124

// let objX = {}
// memory id 125

// let ObjY = objX
// Reference, refer to memory id 125

// Object Constructor

let obj = {
    name: "Anwar",
    age: 27
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


// Destructuring

let { name, age } = obj

// let name= obj.name
// let age= obj.name
console.log(name)
console.log(age)


let arr = [ "name", "Anwar" ]

// let key = arr[0]

let [ key, value ] = arr
console.log(key)
console.log(value)


// Clone an object

let originalObj = {
    name: "Anwar",
    age: 27
}
let copyObject = Object.assign({
    dob: "1995-07-14"
}, originalObj);

copyObject.age = 30;

console.log(copyObject, "copyObject")
console.log(originalObj, "originalObj")

// ES6

// Spread Operator

let originalObjSpread = {name: "Anwar", age: 27}
let copyObjectSpread = { ...originalObjSpread, dob: "1995-07-14" }
console.log(copyObjectSpread, "copyObjectSpread")

// Array Spread
let originalArray = [1,2,3,4,5]
let copyArray = [...originalArray, 5]

console.log(copyArray, "copyArray")
