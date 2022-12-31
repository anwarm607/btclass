let box = document.getElementById("box")
box.addEventListener('click', () => alert("You clicked me"))

let onMouseEnterOfBox = () => {
    let getBox2 = document.getElementById("box2");
    getBox2.style.display = "block"
}
let onMouseLeaveOfBox = () => {
    let getBox2 = document.getElementById("box2");
    getBox2.style.display = "none"
}

box.addEventListener('mouseenter', onMouseEnterOfBox)
box.addEventListener('mouseleave', onMouseLeaveOfBox)

let input = document.getElementById('inputBox');

let onUserInput = (ev) => {
    console.log(ev.target.value)
}

input.addEventListener('input', onUserInput)