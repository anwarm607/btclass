// String objects methods and properties

let firstName = "Anwar"
let lastName = "Mohamed"
let fullName = firstName.concat(',', lastName)
console.log(fullName)


console.log(firstName.charAt(3))
console.log(firstName.endsWith("wa"))

console.log(fullName.split(','))

const sentence = '      The quick brown fox jumps over the lazy dog.     ';

console.log(sentence.includes("foxy"));
console.log(sentence.indexOf("foxy"));

console.log(sentence.toLocaleLowerCase());
console.log(sentence.trim());
console.log(sentence.trimEnd());
console.log(sentence.trimStart());
console.log(sentence.trim().length);

// Escape notation


// let someString = 'The quick brown fox jumps over the lazy 'dog'.'
let someString = "The quick brown fox jumps \n\\over the \t\rlazy \"dog\"."
// let exampleMultiString = "The quick brown fox jumps 

// adhaioshjdiojas."

console.log(someString);

// Template literals

let dynamicValueString = `Hi ${fullName}
Good morning. Have a nice day


Regards,
Mohamed Anwar
Senior developer`
console.log(dynamicValueString)
