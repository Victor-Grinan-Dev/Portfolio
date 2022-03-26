const minus = document.querySelector("#minus");
const plus  = document.querySelector("#plus");
const turnTime = document.querySelector("#turnTime");
const set = document.querySelector("#set");
const reset = document.querySelector("#reset");
const overlay = document.querySelector("#overlay");
const setUpModal = document.querySelector("#setUpModal");
const clock = document.querySelector("#clock");
const playerABtn = document.querySelector("#playerA");
const playerBBtn = document.querySelector("#playerB");
//declaretion
const ring = new Audio("./sounds/ring.wav");

let seconds;

const preSetTime = 3;
let totalTime = preSetTime; 
//let timeInSeconds = totalTime * 60;

const timer = (mins) => { //OK
    let seconds = mins*60 || 0;     
    let interval = setInterval(function() {
  
         seconds--;
         updateClock(seconds)
         console.log(seconds);
         if(!seconds){
              clearInterval(interval);             
         }
         if (seconds === 0){
             playSound();
         }
 
    },1000)
 };

const formatStr  = (numStr) => { //OK
    numStr = numStr.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    return numStr;
};

const displayTimeSetUp = (currentTime) => {
    totalTime = formatStr(currentTime)
    turnTime.textContent = totalTime;
}

const resetTime = () => { //OK
    totalTime = preSetTime;
    displayTimeSetUp(totalTime);
}; 

const subs = () => { //OK
    console.log(typeof totalTime)
    if (totalTime > 1) {
        totalTime -=1
        displayTimeSetUp(totalTime);
    }else{
        console.log("minimun time is 1 min")
        //alert("minimun time is 1 min")
    }
};

const adds = () => {//OK
    
    console.log(typeof totalTime)
    if (totalTime < 60) {
        totalTime -= 1;
        totalTime += 2;
        console.log(totalTime)
        displayTimeSetUp(totalTime)
    }else{
        console.log("max time is 60 min")
        alert("max time is 60 min")
    }
};

const startApp = () => {   
    
    overlay.style.display = "none";
    let mins = turnTime.textContent;
    mins = formatStr(mins)
    let seconds = "00";
    
    clock.textContent = `${mins}:${seconds}`;
}


//execution
displayTimeSetUp(preSetTime);

const appStart = (e) => {
    if (e.path[0].id == "playerA"){
        console.log("playerA activated")
    }else if(e.path[0].id == "playerB"){
        console.log("playerB activated")
    }
}


//event listeners
minus.addEventListener("click", subs);
plus.addEventListener("click", adds);
reset.addEventListener("click", resetTime);
set.addEventListener("click", startApp);
playerABtn.addEventListener("click", appStart)
playerBBtn.addEventListener("click", appStart)
/*


const startApp = () => {
    
    overlay.style.display = "none";
    mins = Math.floor(timeInSeconds / 60);
    seconds = timeInSeconds - (mins * 60);
    console.log(timeInSeconds, `${mins}:${seconds}`)
    clock.textContent = `${mins}:${seconds}`;
}







const updateClock = (seconds) => {
    const hour = 3600;
    const mins = 60;
    let hoursLeft = seconds / hour;
    if (hoursLeft < 1){
        hoursLeft = 0;
    }else{
        hoursLeft = Math.floor(hoursLeft)
    }
    seconds -= hoursLeft * hour;
    let minsLeft = seconds / mins;
    if (minsLeft < 1){
        minsLeft = 0;
    }else{
        minsLeft = Math.floor(minsLeft)
    }
    seconds -= minsLeft * mins;

    hoursLeft = hoursLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      minsLeft = minsLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      seconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    
      
    
      
    console.log(hoursLeft, ':', minsLeft, ':', seconds)
    const updated_hours = document.querySelector("#hours");
    const updated_mins = document.querySelector("#mins");
    const updated_seconds = document.querySelector("#seconds");
    updated_hours.textContent = hoursLeft;
    updated_mins.textContent = minsLeft;
    updated_seconds.textContent = seconds;
};
*/