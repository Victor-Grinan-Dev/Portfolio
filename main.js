
//collapse menu
const collapse = document.querySelector(".collapse");
const navLinks = document.querySelectorAll('.nav-link');

collapse.style.backgroundColor="white";
collapse.style.padding="10px";

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{collapse.classList.remove('show')});
})

//logo flying animation
const g = document.querySelector("#g")
const v = document.querySelector("#v")
const flying1 = document.querySelector("#welcome-to");
const flying2 = document.querySelector("#intro");
let angle = 0;
let lastTime = null;

const Fly = (time) => {
    if (lastTime != null) angle += (time - lastTime) * 0.002;
    lastTime = time;
    flying1.style.top = (Math.sin(angle) * 40 + 40) + "px";
    flying1.style.left = (Math.cos(angle) * 200 + 230) + "px";
    flying2.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
    flying2.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
    requestAnimationFrame(Fly, "animate");
}

Fly(lastTime);

//banner css explodes
const developer = document.querySelector(".developer");
const portfolio = document.querySelector(".portfolioWord")
const grinan = document.querySelector("#grinan");
const victor = document.querySelector("#victor");

let isV = false;
let isG = false;

const deattach = () => {  
    grinan.classList.add("deattach");
   
    if (grinan.classList[0] === "deattach"){
        g.style.color = "#ce5d5d"; 
        isG = true;
    }
}

const turnlight = () => {
    victor.classList.add("lightsOn");
    
    if (victor.classList[0] === "lightsOn"){
        v.style.color = "#ce5d5d";
        isV = true;     
    }
}

g.addEventListener("click", deattach);
v.addEventListener("click", turnlight);

const animatePorfolio = () => {
    victor.classList.forEach(classL => {
        if(classL === "lightsOn"){
            portfolio.style.position = "absolute";
            portfolio.classList.add("spin");
        }
    })
}

const spinDeveloper = () => {
    if(grinan.classList[0] === "deattach"){
        developer.style.position = "absolute";
        developer.classList.add("spin");
    }
};

victor.addEventListener("click", animatePorfolio);
grinan.addEventListener("click", spinDeveloper);

//hide/show projects
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");

let is_showing = false;

const showAllProjects = () => {
    is_showing = !is_showing;
    for (let proj of secundaries){
        proj.classList.toggle("invisible");
        
    }
    if(is_showing){
        showAllBtn.textContent = "Show less";
    }else{
        showAllBtn.textContent = "Show all";
    }
}

showAllBtn.addEventListener("click", showAllProjects);

//scrolls functions
const scroll_about = [677, 1320];
const scroll_portfolio = [1481, 2640];
const scroll_skills = [2618, 3992];
const scroll_certificates = [3314, 5270];
const scroll_conctactMe = [4130, 6610];

const aboutTab = document.querySelector('#aboutTab');
const portfolioTab = document.querySelector('#portfolioTab');
const skillsTab = document.querySelector('#skillsTab');
const certTab = document.querySelector('#certTab');
const contactTab = document.querySelector('#contactTab');

const menuBar = document.querySelector("#menuBar"); //bg change color not working.
const tabs = document.querySelectorAll("tab");
const scrollUp = document.querySelector(".scrollUp");

let scrollValue = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollValue);
    resetActiveTab();
    if((scrollValue >= scroll_about[0]) && (scrollValue <= scroll_about[1])){
        aboutTab.classList.add('activeTab');
    }
    else if((scrollValue >= scroll_portfolio[0]) && (scrollValue <= scroll_portfolio[1])){
        portfolioTab.classList.add('activeTab');
    }
    else if((scrollValue >= scroll_skills[0]) && (scrollValue <= scroll_skills[1])){
        skillsTab.classList.add('activeTab');
    }
    else if((scrollValue >= scroll_certificates[0]) && (scrollValue <= scroll_certificates[1])){
        certTab.classList.add('activeTab');
    }
    else if(scrollValue >= scroll_conctactMe[0]){
        contactTab.classList.add('activeTab');
    }

    if (scrollValue> 20) {
        scrollUp.classList.remove("invisible");
        menuBar.style.backgroundColor = "rgb(6, 30, 51)";
    } else {
        scrollUp.classList.add("invisible");
        menuBar.style.backgroundColor = "";
    }
}

const resetActiveTab = () => {
    aboutTab.classList.remove('activeTab');
    portfolioTab.classList.remove('activeTab');
    skillsTab.classList.remove('activeTab');
    certTab.classList.remove('activeTab');
    contactTab.classList.remove('activeTab');
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollUp.addEventListener("click", topFunction);

/* Skill functions */
const showMoreSkills = document.querySelector('.showMoreSkills');
const secundarySkillGroup = document.querySelectorAll('.secundarySkillGroup');
const notStudiedSkill = document.querySelectorAll('.notStudiedSkill');
let visibleSkill = false;

const toogleMoreSkills = () => {
    visibleSkill = !visibleSkill;
    secundarySkillGroup.forEach(item=>{
        item.classList.toggle('invisible');
    });
    
    notStudiedSkill.forEach(item=>{
        item.classList.toggle('invisible');
    });
    
    if (visibleSkill){
        showMoreSkills.innerText = 'Show less'
    }else{
        showMoreSkills.innerText = 'Show more'
    }
}

showMoreSkills.addEventListener('click', toogleMoreSkills);

/* show certificates */
const irrelevatCertificates = document.querySelectorAll(".irrelevant");
const moreCertificatesBtn = document.querySelector(".moreCertificates");

let is_certificateShowing = false;

const showAllCertificates = () => {
    is_certificateShowing = !is_certificateShowing;
    for (let cert of irrelevatCertificates){
        cert.classList.toggle("invisible");
        
    }
    if(is_certificateShowing){
        moreCertificatesBtn.textContent = "Hide Irrelevant certificates";
    }else{
        moreCertificatesBtn.textContent = "Show Irrelevant certificates";
    }
}
moreCertificatesBtn.addEventListener("click", showAllCertificates);

/* copyrights */
const year = new Date();
const yearSpan = document.querySelector(".year");
yearSpan.innerText = `${year.getFullYear()}`;

/* reset animations */
const resetAll = () => {
    hexMap.innerHTML = "";
    grinan.classList.remove("deattach")
    g.style.color = "#white";
    victor.classList.remove("lightsOn")
    v.style.color = "#white";
    developer.classList.remove("spin")
    portfolio.classList.remove("spin")
}

/* hex Map */
const hexMap = document.querySelector(".hexMap");
const hexSize = 50;

let width = document.body.clientWidth;
let height = document.body.clientHeight;
let rows = (height/ 4) / hexSize;
let columns = (width / hexSize) - 1;

window.addEventListener("resize", () => {
    resetAll();
});

const createHexMatrix = () => {

    for(let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const blank = document.createElement('img');
            blank.id=`${i}${j}`;
            blank.src = i % 2 === 0 ?'./hexes/selected.png': './hexes/hostile.png';
            blank.classList = 'hex';
            blank.style.left = i % 2 === 0 ? `${j * hexSize}px`: `${j * hexSize + hexSize/2}px`;
            blank.style.top = `${i * (hexSize * 0.75)}px`;
            hexMap.appendChild(blank);
        }
    }
}
