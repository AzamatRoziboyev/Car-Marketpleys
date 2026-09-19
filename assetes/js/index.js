const signBtn = document.querySelector(".sign")
const signUp = document.querySelector(".sign-up")
const signKatta = document.querySelector(".sign-katta")
const signClose = document.querySelector(".sign-close")

signBtn.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})
signClose.addEventListener("click", () => {
    signKatta.classList.remove("active")
})
signUp.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})



