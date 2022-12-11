// Conditional statements
// if condition
let isEligible = true;
let inPartiallyEligible = true;
if (isEligible) {
    console.log("You are eligible")
} else if (inPartiallyEligible) {
    console.log("Please improve your score and you are way near to achieve it ")
} else {
    console.log("Nee to try hard!!")
}

// Switch case statement
/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

let calculateBMIRatio = (height, weight) => {
    let heightInMeterSquare = (height/100) ** 2
    let bmiRatio = weight/heightInMeterSquare
    return bmiRatio
}

let bmiRatio = calculateBMIRatio(160, 65);
console.log(bmiRatio)

switch (bmiRatio < 50) {
        case bmiRatio < 18.5:
            console.log("You are underweight")
            break;
        case bmiRatio < 24.9:
            console.log("You are Normal");
            break;
        case bmiRatio < 29.9:
            console.log("You are Overweight");
            break;
        case bmiRatio < 34.9:
            console.log("You are Obese");
            break;
        default:
            break
}

// Functions within object
let myProfile = {
    name: "ANWAR",
    doy: 1995,
    getMyAge: () => {
      let age = 2022 - myProfile.doy
      return age
    }
}
console.log(myProfile.getMyAge());

// Date Object

console.log(new Date().getHours(), new Date().getMinutes());

// Task
let openingTime = 18;
let getCurrentTime = new Date().getHours();

switch (getCurrentTime < openingTime) {
    case getCurrentTime < 12:
        console.log("Good morning")
        break;
    default:
        break;
}

//