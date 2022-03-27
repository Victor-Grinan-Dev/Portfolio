
const grinan = document.querySelector("#grinan");
const g = document.querySelector("#g")
const victor = document.querySelector("#victor");
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

Fly(lastTime)

