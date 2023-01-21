
// Inline/Named Export

export let calculatePersonAge = (fullName, dob) => {
    return ` ${fullName}'s age is ${new Date().getFullYear() - new Date(dob).getFullYear()}`
}
export let calculatePersonBMI = (fullName, dob) => {
    return ` ${fullName}'s age is ${new Date().getFullYear() - new Date(dob).getFullYear()}`
}

// Default export
let calculate = (fullName, dob) => {
    return ` ${fullName}'s age is ${new Date().getFullYear() - new Date(dob).getFullYear()}`
}

export default calculate