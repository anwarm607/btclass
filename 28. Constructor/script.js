



let user = (name, dob) => {
    console.log(name)
    console.log(dob)
    return {
        name: name,
        dob: dob,
        getMyAge: () => {
            // console.log(user(name, dob).dob, "DOB INSIDE Get my age function")
            // console.log(user().dob)
            let dobValue = user(name, dob).dob;
            let getYear = new Date(dobValue).getFullYear();
            let currentYear = new Date().getFullYear();
            // console.log(getYear, "Get full year")
            // console.log(getYear, currentYear)
            let myAge = currentYear - getYear;
            return myAge
        }
    }
}

console.log(user("Ananth", "2001-05-14").getMyAge());

// Constructor name should be in Pascal case

// let User = (name, dob) => {
//     this.name = name
//     this.dob = dob
// }
function User(name, dob) {
    this.name = name
    this.dob = dob
    this.getMyAge = () => {
        let dobValue = this.dob;
        let getYear = new Date(dobValue).getFullYear();
        let currentYear = new Date().getFullYear();
        let myAge = currentYear - getYear;
        return myAge
    }
}

let person1 = new User("Anwar", "2001-05-14");

// this = { name: "Anwar",  dob: "2001-05-14", getMyAge: () => {
//     let dobValue = this.dob;
//     let getYear = new Date(dobValue).getFullYear();
//     let currentYear = new Date().getFullYear();
//     let myAge = currentYear - getYear;
//     return myAge
// }}
console.log(person1.name, "Name");
console.log(person1.getMyAge(), "Constructor age");

// In constructor, the values are called as Property other than function
// In constructor, the functions are called as Methods

