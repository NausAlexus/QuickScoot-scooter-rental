let currentSlide = 0;
const sliderContainer = document.querySelector('.cooperation-slider-container');
const totalSlides = document.querySelectorAll('.cooperation-card').length;

function moveSlide(direction) {
    const slidesToShow = getSlidesToShow();
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - slidesToShow;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * (100 / slidesToShow);
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

function getSlidesToShow() {
    if (window.innerWidth < 480) {
        return 1;
    } else if (window.innerWidth < 768) {
        return 2;
    } else {
        return 4;
    }
}

window.addEventListener('resize', () => {
    moveSlide(0);
});

document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0);

    const prevButton = document.querySelector('.new-arrivals-prev');
    const nextButton = document.querySelector('.new-arrivals-next');

    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
    } else {
        return
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide(1));
    } else {
        return
    }
});