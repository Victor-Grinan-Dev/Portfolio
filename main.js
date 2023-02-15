const grinan = document.querySelector("#grinan");
const g = document.querySelector("#g")
const victor = document.querySelector("#victor");
const v = document.querySelector("#v")
const flying1 = document.querySelector("#welcome-to");
const flying2 = document.querySelector("#intro");
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");
const scrollUp = document.querySelector(".scrollUp");
const menuBar = document.querySelector("#menuBar"); 
const tabs = document.querySelectorAll("tab");
const developer = document.querySelector(".developer");
const portfolio = document.querySelector(".portfolioWord")
const collapse = document.querySelector(".collapse");
const irrelevatCertificates = document.querySelectorAll(".irrelevant");
const moreCertificatesBtn = document.querySelector(".moreCertificates");

//collapse menu
collapse.style.backgroundColor="white";
collapse.style.padding="10px";

//logo flying animation
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
let isV = false;
let isG = false;

//my name animation
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

//scroll btn function 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.classList.remove("invisible");
    menuBar.style.backgroundColor = "rgb(6, 30, 51)";
  } else {
    scrollUp.classList.add("invisible");
    menuBar.style.backgroundColor = "";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollUp.addEventListener("click", topFunction);

/* show certificates */

let is_certificateShowing = false;

const showAllCertificates = () => {
    console.log("hello madafaka!");
    is_certificateShowing = !is_certificateShowing;
    for (let cert of irrelevatCertificates){
        cert.classList.toggle("invisible");
        
    }
    if(is_certificateShowing){
        moreCertificatesBtn.textContent = "Show less";
    }else{
        moreCertificatesBtn.textContent = "Show More";
    }
}
moreCertificatesBtn.addEventListener("click", showAllCertificates);

/* hex Map */
const resetAll = () => {
    hexMap.innerHTML = "";
    grinan.classList.remove("deattach")
    g.style.color = "#white";
    victor.classList.remove("lightsOn")
    v.style.color = "#white";
    developer.classList.remove("spin")
    portfolio.classList.remove("spin")
}

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
