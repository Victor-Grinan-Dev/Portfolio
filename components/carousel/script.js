const track = document.querySelector('.carousel__track');

const slides = Array.from(track.children);


const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const dotsNav = document.querySelector('.carousel__indicator');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth)

const setSlidePosition = (slide, i) => {
    slide.style.left = `${i * slideWidth}px`;
}

slides.forEach(setSlidePosition);

nextButton.addEventListener('click', e => {
    const currentSlide = slides.querySelector('.current_slide');
    console.log(currentSlide)
})