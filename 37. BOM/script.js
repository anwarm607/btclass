// Browser Object Model

// 1. Window
// 2. Screen
// 3. Location
// 4. Navigator
// 5. Timing

// 1. Window
console.log(window)

// 2. Screen
console.log(screen.width)

// 3. Location
console.log(location)

// 4. History
console.log(history)

// let goBack = () => {
//     history.back()
// }
// let getBtn = document.getElementById("btnn");

// getBtn.addEventListener('click', goBack)


// 5. Navigator
console.log(navigator)
if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition((ev) => {
    console.log(ev, "GEO LOcation")
    console.log(ev.coords.latitude, "Latitute")
    console.log(ev.coords.longitude, "longitude")
   });
}

// 6. Timing
// 1. Set timout
// 2. Set Interval
// Set timout 

setTimeout(() => {
    console.log("I am appeared")
}, 5000)

let counterText = document.getElementById("count");
let counterNumber = 0
// let myInterval = setInterval(() => {
//     counterText.innerText = counterNumber;
//     counterNumber++
// }, 1000);

// let startOrResume = () => {
//     myInterval
// }

// let stopCount = () => {
//     clearInterval(myInterval)
// }

// 7. Storage
// 1. Local storage
// 2. Session Storage
// 3. Cookie Storage - Old way

// 1. Local storage
localStorage.setItem("name", "Anwar")
console.log(localStorage.getItem("name"), "My Name")

// 2. Session storage
sessionStorage.setItem("name", "Anwar")
