const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, i) => {
    slide.style.left = `${i * slideWidth}px`;
}

slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_dot');
    targetDot.classList.add('current_dot');
}

const hideShowArrows = (targetIndex) => {
    if (targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if(targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else{
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
}

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const targetIndex = slides.findIndex(slide => slide === nextSlide);
    const currentDot = dotsNav.querySelector('.current_dot');
    const targetDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(targetIndex);
    updateDots(currentDot, targetDot);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const targetIndex = slides.findIndex(slide => slide === prevSlide);
    const currentDot = dotsNav.querySelector('.current_dot');
    const targetDot = currentDot.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows(targetIndex);
    updateDots(currentDot, targetDot);
});

dotsNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');
    if(!targetDot)return;
   
    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotsNav.querySelector('.current_dot');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(targetIndex);
})