const signBtn = document.querySelector(".sign")
const signUp = document.querySelector(".sign-up")
const signKatta = document.querySelector(".sign-katta")
const signClose = document.querySelector(".sign-close")
// * main2

signBtn.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})
signClose.addEventListener("click", () => {
    signKatta.classList.remove("active")
})
signUp.addEventListener("click", () => {
    signKatta.classList.toggle("active")
})

const main2Box = document.querySelector(".main2-box")
const left = document.getElementById("left")
const right = document.getElementById("right")
const main2Box1 = document.querySelectorAll(".main2-box1")
// !======main2
let hisoblagich = 0;

const cardWidth = 710;

// LEFT — keyingi kartaga
left.addEventListener("click", () => {
    if (hisoblagich < main2Box1.length - 2) {
        hisoblagich++;
        updateCarousel();
    }
});

// RIGHT — oldingi kartaga
right.addEventListener("click", () => {
    if (hisoblagich > 0) {
        hisoblagich--;
        updateCarousel();
    }
});

function updateCarousel() {
    const moveAmount = hisoblagich * cardWidth;

    main2Box.style.transform = `translateX(-${moveAmount}px)`;
}


