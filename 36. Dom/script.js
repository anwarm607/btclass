// 1. Adding Element Page

let getBody = document.body;
// Can be used for text and HTML Element
getBody.append("Hi there", "Hi   kjhnjhjshdf")

// Only works for html element
// getBody.appendChild("Hi there")

// Append a HTML Element
const boxDiv = document.createElement("div");
// boxDiv.style = "width: 200px; height: 200px; background-color: red";
boxDiv.innerText = "Hi";
boxDiv.innerHTML = "<h1>DDDD</h1>" // Dangerous way
// Alternate Way
let createH1 = document.createElement("h1");
createH1.innerText="BBBB"
boxDiv.append(createH1)
// getBody.appendChild(boxDiv)
getBody.append(boxDiv)


// 2. Access Element
// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll

let getHeading = document.querySelector("#heading")
let getHeadings = document.querySelectorAll("#heading")
// console.log(getHeading, "getHeading")
// console.log(getHeadings, "getHeadings");


// 3. Modifying Element

let heading1 = document.getElementById("heading");
// console.log(heading1)
// heading1.replaceWith("My Text")
heading1.style.backgroundColor = "black";
heading1.style.color = "white";
// heading1.remove()
// getBody.removeChild(heading1);


// 4. Access Attribute
let myInput = document.querySelector("#myInput")
// console.log(myInput.getAttribute("value"))
console.log(myInput.value)

// 5. Set attribute
// myInput.setAttribute('value', "Mohamed")
myInput.value = "Mohamed"

// 6. Remove Attribute
myInput.removeAttribute("value");
myInput.value = "";

// 7. Modifiying Class Attribute

let getBtn = document.getElementById("actBtn");
// getBtn.addEventListener("mouseover", () => {
//     // getBtn.style.backgroundColor = "red";
//     getBtn.classList.add("btn_active")
// });

// getBtn.addEventListener("mouseleave", () => {
//     // getBtn.style.backgroundColor = "red";
//     getBtn.classList.remove("btn_active")
// });


getBtn.addEventListener("click", () => {
    getBtn.classList.toggle("btn_active")
});
