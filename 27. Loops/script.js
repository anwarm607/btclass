// Loops
// 1. for loop
// 2. while loop
// 3. do while
// 4. For in
// 5. For of

// 1. For loop
/* for (intial expression; condition; step) {
    // Do something
    
} */

for (let index = 10; index > 2; index--) {
    if (index % 2 != 0) {
        console.log(index, "Odd")
    } else {
        console.log(index, "Even")
    }
}

// 2. While loop
/*
while (condition) {
    
}
*/
let index = 0;
while (index < 10) {
    console.log(index, "While");
    index++;
}

// 3. Do while
/* do {
    
} while (condition);
*/
do {
    console.log(index, "Do while");
    index++;
} while (index < 10);

// 4. For in loop - used for object
/* for (const key in object) {
} */

let person = {
    name: "Anwar",
    age: 27,
    gender: "Male"
}

for (const personKey in person) {
    console.log(personKey, person[personKey]);
    let rootDiv = document.getElementById('root')
    rootDiv.innerHTML += `<p>${personKey}: ${person[personKey]}<p>`
}

// 5. For of - Used for array
/*
for (const iterator of object) {
    
}*/
let favColor = ["red", "white", "blue"];

for (const iterator of favColor) {
    console.log(iterator)
    let rootDiv = document.getElementById('favColors')
    rootDiv.innerHTML += `<p>${iterator}<p>`
}
