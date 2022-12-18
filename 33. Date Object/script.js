// Date object

let currentDate = new Date();
let isoString = currentDate.toISOString();
console.log(isoString);
let parseIsoString = new Date(isoString);
console.log(parseIsoString);
console.log(`${parseIsoString.getDate()}-${parseIsoString.getMonth()+1}-${parseIsoString.getFullYear()}`)
parseIsoString.setDate(19);
console.log(parseIsoString)