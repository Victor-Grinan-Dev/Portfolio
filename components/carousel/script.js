const track = document.querySelector('.carousel__track');
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');

/** IMAGES */
const awsCodeCommit = "/documents/AWS_CodeCommit_Course_Completion_Certificate.png";
const awsDevops = "/documents/AWS_DevOps_Course_Completion_Certificate.png";
const awsEC2="/documents/AWS_EC2_Completion_Certificate.png";
const sda = "/documents/sda_certificate.png";
const hbc = "/documents/HBC_graduation_certificate_small.png";
const dcCSS = "/documents/disc_courses_css.png";
const dcVue = "/documents/Vue_Fundamentals.png";
const udemySCSS = "/documents/udemy_advanced_sass.jpg";
const udemyTailwind = "/documents/udemy_tailwind.jpg";
const sfcComposer = "/documents/sfcasts-VictorGrinan-certificate-composer.png";
const sfcHarmonious = "/documents/sfcasts-VictorGrinan-certificate-harmonious-development-with-symfony-6.png";
const sfcNameSpaces = "/documents/sfcasts-VictorGrinan-certificate-php-namespaces.png";


const images = [
    hbc,
    sda,
    awsCodeCommit,
    awsDevops,
    awsEC2,
    dcCSS,
    dcVue,
    udemySCSS,
    udemyTailwind,
    sfcComposer,
    sfcHarmonious,
    sfcNameSpaces,
];

images.forEach((image, i) => {
    // console.log(i===0);
    track.innerHTML += `
        <li id="slide${i}" name="slide${i}" class="carousel__slide slide${i} ${i === 0 ? "current_slide" : ""}">
            <img src="${image}" alt="slide${i}" class="carousel__image"/>
        </li>
    `;
    dotsNav.innerHTML += `
        <button class="carousel__indicator ${i === 0? "current_dot" : ""} "></button
    `
});

const slides = Array.from(track.children);
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

nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current_slide');
    // console.log(track)
    const nextSlide = currentSlide.nextElementSibling;
    const targetIndex = slides.findIndex(slide => slide === nextSlide);
    const currentDot = dotsNav.querySelector('.current_dot');
    const targetDot = currentDot.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(targetIndex);
    updateDots(currentDot, targetDot);
});

prevButton.addEventListener('click', () => {
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
});