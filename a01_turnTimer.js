const minus = document.querySelector("#minus");
const plus  = document.querySelector("#plus");
const turnTime = document.querySelector("#turnTime");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const overlay = document.querySelector("#overlay");
const setUpModal = document.querySelector("#setUpModal");
const clock = document.querySelector("#clock");

let mins;
let seconds;

const preSetTime = 3;
let totalTime = preSetTime;
let timeInSeconds = totalTime * 60;
turnTime.textContent = totalTime;

const displayTimeSetUp = () => {
    turnTime.textContent = totalTime;
}

const resetTime = () => {
    totalTime = preSetTime;
    displayTimeSetUp();
}; 

const subs = () => {

    if (totalTime > 1) {
        totalTime -=1
        console.log(totalTime)
        displayTimeSetUp()
    }else{
        console.log("minimun time is 1 min")
    }

};
const adds = () => {
    
    if (totalTime < 60) {
        totalTime += 1;
        console.log(totalTime)
        displayTimeSetUp()
    }else{
        console.log("max time is 60 min")
    }
};


const startApp = () => {
    
    overlay.style.display = "none";
    mins = Math.floor(timeInSeconds / 60);
    seconds = timeInSeconds - (mins * 60);
    console.log(timeInSeconds, `${mins}:${seconds}`)
    clock.textContent = `${mins}:${seconds}`;
}

minus.addEventListener("click", subs);
plus.addEventListener("click", adds);
reset.addEventListener("click", resetTime);
start.addEventListener("click", startApp);

