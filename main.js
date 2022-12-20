
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

//my name animation
const deattach = () => {  
    grinan.classList.toggle("deattach");
   
    if (grinan.classList[0] == "deattach"){
        g.style.color = "#ce5d5d"; 
        
    }else{
        g.style.color = "#fff";
    }
}

const turnlight = () => {
    victor.classList.toggle("lightsOn");
    
    if (victor.classList[0] == "lightsOn"){
        v.style.color = "#ce5d5d"; 
             
    }else{
        v.style.color = "#fff";
    }
}

g.addEventListener("click", deattach);
v.addEventListener("click", turnlight);


//hide/show projects
const showAllProjects = () => {

    for (let proj of secundaries){
        proj.classList.toggle("invisible");
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
