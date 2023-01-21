// It is used to split functionality to seperate files for readability

// 1. Named Import/Export
// import { calculateAge, calculateBMI } from './calculations'
// export function calculateAge (), export const calculateBMI = () => 
// Import can be done inline also  Bottom of the file

// 2. Default Import/Export
// import calculateAge from './calculations'
// export default calculateAge
// import SHOULD BE DONE Bottom of the file only



// import { calculatePersonAge } from './calculations';
import {calculatePersonAge, calculatePersonBMI} from './calculations';
import calculate from './calculations';

class Person {
    constructor(firstname, lastname, dob) {
        this.fullName = firstname+lastname
        this.dob = dob
    }
    calculateAge() {
        return calculatePersonAge(this.fullName, this.dob)
    }
}

let person1 = new Person('Mohamed', ' Anwar', '1995-07-14');
console.log(person1)