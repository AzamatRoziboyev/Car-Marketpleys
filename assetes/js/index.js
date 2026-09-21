const signBtn = document.querySelector(".sign")
const signUp = document.querySelector(".sign-up")
const signKatta = document.querySelector(".sign-katta")
const signClose = document.querySelector(".sign-close")
// * main2
const main2Box = document.querySelector(".main2-box")
const left = document.getElementById("left")
const right = document.getElementById("right")
const main2Box1 = document.querySelectorAll(".main2-box1")

signBtn.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})
signClose.addEventListener("click", () => {
    signKatta.classList.remove("active")
})
signUp.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})

// !======main2
const main2Box1length = main2Box1.length // kartalar uzunligi


let hisoblagich = 0;

const cardWidth = 434;

left.addEventListener("click", () => {
    if(hisoblagich > 0) {
        hisoblagich--;
        updateCarousel();
    }
})
right.addEventListener("click", () => {
    if(hisoblagich < main2Box1length) {
        hisoblagich++;
        updateCarousel();
    }
})

function updateCarousel() {
    // Yo'lakni chapga surish (minus qiymat)
    const moveAmount = -hisoblagich * cardWidth
    // CSS transform  orqali hatrakatlantirish
    main2Box.style.transform = `translateX(${moveAmount}px)`
}


