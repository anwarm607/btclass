// Constructor
// OOPS

// class Person {
//     constructor() {

//     }
//     calculateAge () {

//     }
// }

// Creation of Person class

// Class is a ES6 Feature

class Person {
    constructor(firstname, lastname, dob) {
        this.fullName = firstname+lastname
        this.dob = dob
    }
    calculateAge() {
        return ` ${this.fullName}'s age is ${new Date().getFullYear() - new Date(this.dob).getFullYear()}`
    }
}

// Initialize Person class instance

let person1 = new Person('Mohamed', ' Anwar',  '1995-07-14')

console.log(person1)

// Access property
console.log(person1.fullName)

// Access method
console.log(person1.calculateAge())


// Inheritance

class Profile extends Person {
    constructor(firstname, lastname, dob, address) {
        super(firstname, lastname, dob)
        this.address = address
    }
}

let person2= new Profile('Mohamed', 'Anwar',  '1995-07-14', 'abcs street, Chennai')

console.log(person2, "Person 2")
console.log(person2.calculateAge(), "Person 2 Calculate age")