const signBtn = document.querySelector(".login")
const signKatta = document.querySelector(".sign-katta")
const signClose = document.querySelector(".sign-close")
signBtn.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})
signClose.addEventListener("click", () => {
    signKatta.classList.remove("active")
})
// ! main
const main2Box = document.querySelector(".car-list1")
const left = document.querySelector(".btn-left1")
const right = document.querySelector(".btn-right1")
const main2Box1 = document.querySelectorAll(".car-card1")


const main2Box1length = main2Box1.length // kartalar uzunligi


let hisoblagich = 0;

const cardWidth = 169;

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