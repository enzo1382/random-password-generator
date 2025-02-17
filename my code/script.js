
const chars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*"

let slider = document.getElementById("range-el")
let output = document.getElementById("length-number")

let password_1 = document.getElementById("password-1")
let password_2 = document.getElementById("password-2")
let password_3 = document.getElementById("password-3")
let password_4 = document.getElementById("password-4")

function getRandomNumber() {
    let index = Math.floor(Math.random() * chars.length)
    return chars[index]
}
function getPassLength() {
    let passLength = slider.value
    return passLength
}
function generate_password() {
    let password = ""
    for (i = 0 ; i < slider.value ; i++) {
        password += getRandomNumber()
    }
    return password
}
function render_result() {
    password_1.textContent = generate_password()
    password_2.textContent = generate_password()
    password_3.textContent = generate_password()
    password_4.textContent = generate_password()
    change_color()
}
function change_color() {
    let allpassword = document.getElementsByClassName("box")
    for (i = 0 ; i < allpassword.length ; i++) {
        allpassword[i].style.color = "var(--clr-bright-green)"
    }
}
function copyToClipboard(e) {
    let passwordd = e.target;
    navigator.clipboard.writeText(passwordd.textContent).then(res=>{
            alert("copied to clipboard successfully");
        })
    
  /* Alert the copied text */
}

password_1.addEventListener("click", copyToClipboard)
password_2.addEventListener("click", copyToClipboard)
password_3.addEventListener("click", copyToClipboard)
password_4.addEventListener("click", copyToClipboard)



output.textContent = slider.value
slider.oninput = function() {
    output.textContent = this.value
}