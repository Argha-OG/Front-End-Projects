let currentIndex = 0;
const slideInterval = 3000; // 2 seconds

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
}

function moveSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(() => {
        moveSlide(1); // Automatically move to the next slide
    }, slideInterval);
});