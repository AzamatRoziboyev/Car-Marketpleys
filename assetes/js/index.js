const signBtn = document.querySelector(".sign")
const signUp = document.querySelector(".sign-up")
const signKatta = document.querySelector(".sign-katta")
const signClose = document.querySelector(".sign-close")
// * main2
const main2Box = document.querySelector(".main2-box")
const left = document.getElementById("left")
const right = document.getElementById("right")
const main2Box1 = document.querySelectorAll(".main2-box1")
//* main12
const main12Box = document.querySelector(".main12-box")
const leftBtn = document.querySelector(".btn-left")
const rightBtn = document.querySelector(".btn-right")
const box3 = document.querySelectorAll(".box3")

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
// *main12

const main12Boxlength = box3.length //* SHU JOYIDA XATO TUZATILDI

let hisoblagich1 = 0

const box3Width = 90

leftBtn.addEventListener("click", () => {
    if(hisoblagich1 > 0) {
        hisoblagich1--;
        updateCarousel1();
    }
})
rightBtn.addEventListener("click", () => {
    if(hisoblagich1 < main12Boxlength) {
        hisoblagich1++;
        updateCarousel1();
    }
})

function updateCarousel1() {
    const moveAmount1 = -hisoblagich1 * box3Width
    main12Box.style.transform = `translateX(${moveAmount1}px)`
}


