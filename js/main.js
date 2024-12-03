
let slideIndex = 1

showSlides(slideIndex)

function nextSlide() {
    showSlides(slideIndex += 1)
}

function previousSlide() {
    showSlides(slideIndex -= 1)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slide')
    let lines = document.getElementsByClassName('slide__lines__line')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = 'none'
    
    for (let line of lines)
        line.style.backgroundColor = '#939191'
}

    slides[slideIndex - 1].style.display = 'block'
    lines[slideIndex - 1].style.backgroundColor = '#FF6433'
}

const accordion = document.getElementsByClassName('questions__acc-item')

for (i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener('click' , function() {
        this.classList.toggle('active')
    })
}