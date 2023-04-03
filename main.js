
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
};

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
    grinan.classList[0] === "deattach" && (
        developer.style.position = "absolute",
        developer.classList.add("spin")
        )
};

victor.addEventListener("click", animatePorfolio);
grinan.addEventListener("click", spinDeveloper);

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
/* Portfolio Projects */

const schoolProjects = document.querySelector('.schoolProjects');
const personalProjects = document.querySelector('.personalProjects');

const section = {
    schoolProjects:schoolProjects,
    personalProjects:personalProjects
}

const projectsData=[
    {
        "id":"gradients",
        "title":"Gradients",
        "type":"secundary",
        "link":"https://elegant-halva-fb3729.netlify.app/",
        "imgUrl":"./images/02gradients.jpg",
        "description":"Getting familiar with HTML & CSS",
        "sectionId":"schoolProjects"
    },
    {
        "id":"speedGame",
        "title":"Speed Game",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/speed_game/",
        "imgUrl":"./images/speedgame.jpg",
        "description":"Using JS to handle the DOM",
        "sectionId":"schoolProjects"
    },
    {
        "id":"keeperApp",
        "title":"Keeper App",
        "type":"primary",
        "link":"https://jocular-tapioca-476ffa.netlify.app/",
        "imgUrl":"./images/keeperApp.jpg",
        "description":"Using local storage & MUI styling",
        "sectionId":"schoolProjects"
    },
    {
        "id":"pokemons",
        "title":"Pokedex",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/react_pokemons/",
        "imgUrl":"./images/pokemons.jpg",
        "description":"My first react ever, fetch data",
        "sectionId":"schoolProjects"
    },
    {
        "id":"foodApp",
        "title":"Food App",
        "type":"secundary",
        "link":"https://github.com/Victor-Grinan-Dev/food-app3",
        //https://victor-grinan-dev.github.io/food-app3/
        "imgUrl":"./images/test_Img.jpg",
        "description":"Pagination & Firebase CRUD",
        "sectionId":"schoolProjects"
    },
    {
        "id":"countriesApp",
        "title":"Countries App",
        "type":"primary",
        "link":"https://victor-grinan-dev.github.io/countries_app1/",
        "imgUrl":"./images/countries.jpg",
        "description":"Introduction to redux",
        "sectionId":"schoolProjects"
    },
    {
        "id":"diceRoller",
        "title":"Dice Roller",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/diceRoller",
        "imgUrl":"./images/diceRoller.JPG",
        "description":"My first HTML, CSS & JS",
        "sectionId":"personalProjects"
    },
    { 
        "id":"hexMap",
        "title":"Hex Map",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/map-creator/",
        "imgUrl":"./images/hexMap.JPG",
        "description":"Guetting use to Mapping",
        "sectionId":"personalProjects"
    },
    { 
        "id":"turnTimer",
        "title":"Turn Timer",
        "type":"secundary",
        "link":"https://victor-grinan-dev.github.io/blood_bowl_turn_timer/",
        "imgUrl":"./images/turn_timer.JPG",
        "description":"first site for my Hobby group",
        "sectionId":"personalProjects"
    },
    { 
        "id":"campaingTracker",
        "title":"Campaign Tracker",
        "type":"primary",
        "link":"https://enchanting-taiyaki-964ff9.netlify.app/",
        "imgUrl":"./images/campaign-tracker.png",
        "description":"Demo day from school",
        "sectionId":"personalProjects"
    },
    { 
        "id":"theGame",
        "title":"The Game",
        "type":"primary",
        "link":"https://github.com/Victor-Grinan-Dev/the_game",
        "imgUrl":"./images/the_game.png",
        "description":"the game from campaingTracker",
        "sectionId":"personalProjects"
    },
    { 
        "id":"theCubanShow",
        "title":"The Cuban Show",
        "type":"secundary",
        "link":"https://thecubanshow.netlify.app/",
        "imgUrl":"./images/thecubanshow.png",
        "description":"First serious job for a friend (in progress)",
        "sectionId":"personalProjects"
    }
    // { 
    //     "id":"",
    //     "title":"",
    //     "type":"",
    //     "link":"",
    //     "imgUrl":"",
    //     "description":"",
    //     "sectionId":""
    // }
]

class ProjectCard extends HTMLElement {
    /**
     * 
     * @param {* string} id 
     * @param {* string} title 
     * @param {* primary || secundary} type 
     * @param {* project URL string} link 
     * @param {* image url} imgUrl 
     * @param {* string } description 
     */
	constructor (id, title, type, link, imgUrl, description) {
		super();

        this.content =
		`<div class="project ${type} flip-in ${type==='secundary' ? 'invisible' : "" }">
    
            <a href=${link} target='blank'>
                <div id=${id} class="projectImg">
                    <img src=${imgUrl} alt=${id} >
                </div>
            </a> 

            <div class="description">
                <h6 class="projectTitle"> "${title}" </h6>
                <p class="descriptionText">${description}</p>
            </div>

        </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('project-card', ProjectCard);
};

projectsData.forEach(project => {
    const {id, title, type, link, imgUrl, description, sectionId} = project;
    const newProject = new ProjectCard(id, title, type, link, imgUrl, description);
    section[sectionId].innerHTML += newProject.content;
});

//hide/show projects
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");

let is_showing = false;

const showAllProjects = () => {
    is_showing = !is_showing;
    for (let proj of secundaries){
        proj.classList.toggle("invisible");
        
    };
    is_showing ? showAllBtn.textContent = "Show less" : showAllBtn.textContent = "Show all";
   
}

showAllBtn.addEventListener("click", showAllProjects);

/* Skill functions */
const basicFrontend = document.querySelector('#basicFrontend div');
const advanceFrontend = document.querySelector('#advanceFrontend div');
const backendNode = document.querySelector('#backendNode div');
const backendPython = document.querySelector('#backendPython div');
const backendPHP = document.querySelector('#backendPHP div');
const backendJava = document.querySelector('#backendJava div');
const embedSystems = document.querySelector('#embedSystems div');
const cms = document.querySelector('#cms div');
const cicd = document.querySelector('#cicd div');
const otherSkills = document.querySelector('#otherSkills div');

const skillGroups = {
    basicFrontend:basicFrontend,
    advanceFrontend:advanceFrontend,
    backendNode:backendNode,
    backendPython:backendPython,
    backendPHP:backendPHP,
    backendJava:backendJava,
    embedSystems:embedSystems,
    cms:cms,
    cicd:cicd,
    otherSkills:otherSkills,
} 

const skillsData = [
    {
        id:"html",
        skillName:"HTML",
        stars:3,
        imgUrl:"./icons/html.png",
        skillgroup:"basicFrontend",
        isInvisible:false
    },
    {
        id:"css",
        skillName:"CSS",
        stars:3,
        imgUrl:"./icons/css.png",
        skillgroup:"basicFrontend",
        isInvisible:false
    },
    {
        id:"javascript",
        skillName:"Javascript",
        stars:3,
        imgUrl:"./icons/javascript.png",
        skillgroup:"basicFrontend",
        isInvisible:false
    },
    {
        id:"react",
        skillName:"React",
        stars:3,
        imgUrl:"./icons/react.png",
        skillgroup:"advanceFrontend",
        isInvisible:false
    },
    {
        id:"typescript",
        skillName:"Typescript",
        stars:2,
        imgUrl:"./icons/typescript.png",
        skillgroup:"advanceFrontend",
        isInvisible:false
    },
    {
        id:"nextjs",
        skillName:"NextJs",
        stars:2,
        imgUrl:"./icons/next_js.png",
        skillgroup:"advanceFrontend",
        isInvisible:false
    },
    {
        id:"node",
        skillName:"Node",
        stars:2,
        imgUrl:"./icons/node.png",
        skillgroup:"backendNode",
        isInvisible:false
    },
    {
        id:"express",
        skillName:"Express",
        stars:0,
        imgUrl:"./icons/express.png",
        skillgroup:"backendNode",
        isInvisible:false
    },

    {
        id:"python",
        skillName:"Python",
        stars:3,
        imgUrl:"./icons/python.png",
        skillgroup:"backendPython",
        isInvisible:false
    },
    {
        id:"django",
        skillName:"Django",
        stars:2,
        imgUrl:"./icons/django.png",
        skillgroup:"backendPython",
        isInvisible:false
    },
    {
        id:"flask",
        skillName:"Flask",
        stars:2,
        imgUrl:"./icons/flask.png",
        skillgroup:"backendPython",
        isInvisible:false
    },
    {
        id:"php",
        skillName:"PHP",
        stars:2,
        imgUrl:"./icons/php.png",
        skillgroup:"backendPHP",
        isInvisible:false
    },
    {
        id:"synfony",
        skillName:"Synfony",
        stars:2,
        imgUrl:"./icons/symfony.png",
        skillgroup:"backendPHP",
        isInvisible:false
    },
    {
        id:"laravel",
        skillName:"Laravel",
        stars:0,
        imgUrl:"./icons/laravel.png",
        skillgroup:"backendPHP",
        isInvisible:true
    },
    {
        id:"drupal",
        skillName:"Drupal",
        stars:1,
        imgUrl:"./icons/drupal.png",
        skillgroup:"cms",
        isInvisible:false
    },
    {
        id:"wordpress",
        skillName:"Wordpress",
        stars:0,
        imgUrl:"./icons/word_press.png",
        skillgroup:"cms",
        isInvisible:false
    },
    {
        id:"figma",
        skillName:"Figma",
        stars:3,
        imgUrl:"./icons/figma.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },
    {
        id:"mysql",
        skillName:"MySQL",
        stars:2,
        imgUrl:"./icons/mysql.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },
    {
        id:"git",
        skillName:"Git",
        stars:3,
        imgUrl:"./icons/git.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },
    {
        id:"aws",
        skillName:"AWS",
        stars:2,
        imgUrl:"./icons/aws.png",
        skillgroup:"otherSkills",
        isInvisible:false
    },
    {
        id:"c",
        skillName:"C",
        stars:1,
        imgUrl:"./icons/c.png",
        skillgroup:"embedSystems",
        isInvisible:false
    },
    {
        id:"cpp",
        skillName:"C++",
        stars:1,
        imgUrl:"./icons/c++.png",
        skillgroup:"embedSystems",
        isInvisible:false
    },
    {
        id:"cs",
        skillName:"C#",
        stars:1,
        imgUrl:"./icons/csharp.png",
        skillgroup:"embedSystems",
        isInvisible:false
    },
    {
        id:"java",
        skillName:"Java",
        stars:1,
        imgUrl:"./icons/java.png",
        skillgroup:"backendJava",
        isInvisible:false
    },
    {
        id:"spring",
        skillName:"Spring",
        stars:1,
        imgUrl:"./icons/spring.png",
        skillgroup:"backendJava",
        isInvisible:false
    },
    {
        id:"kubernetes",
        skillName:"Kubernetes",
        stars:1,
        imgUrl:"./icons/kubernetes.png",
        skillgroup:"cicd",
        isInvisible:false
    },
    {
        id:"jenkins",
        skillName:"Jenkins",
        stars:1,
        imgUrl:"./icons/jenkins.png",
        skillgroup:"cicd",
        isInvisible:false
    },
    {
        id:"sonarcube",
        skillName:"SonarQube",
        stars:1,
        imgUrl:"./icons/sonarqube.png",
        skillgroup:"cicd",
        isInvisible:false
    },
    // {
    //     id:"",
    //     skillName:"",
    //     stars:,
    //     imgUrl:"",
    //     skillgroup:"",
    //     isInvisible:false
    // },
]
class SkillCard extends HTMLElement {
    /**
     * 
     * @param {string} id 
     * @param {string} skillName 
     * @param {int} stars 
     * @param {string} imgUrl 
     */
	constructor (id, skillName, stars, imgUrl, isInvisible) {
		super();
        this.content =
            `<div id=${id} class="skill" ${isInvisible ? 'invisible' : null} >
                <img class='techLogo' src="${imgUrl}" alt="icon">
                <div class='skillValues'>
                    <p class='skillTitle'>${skillName}</p>
                    <p class='skillRating'>${stars > 0 ?"⭐".repeat(stars) : ' - '}</p> 
                    <div class="fill-bar"><div class="level" id="HTML-level"></div></div>
                </div> 
            </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('skill-card', SkillCard);
};

const renderData = () => {
    renderSkills();
    calculatePercent();
}

const renderSkills = () => {
    skillsData.forEach(skill=>{
        const {id, skillName, stars, imgUrl, skillgroup, isInvisible} = skill;
        const newSkill = new SkillCard(id, skillName, stars, imgUrl, isInvisible);
        skillGroups[skillgroup].innerHTML += newSkill?.content;
    });
};

/* Calculate XP% per skill group */
const allGroups = document.querySelectorAll('.skillGroup');
const calculatePercent = () => {
    let starText;
    allGroups.forEach(group=>{
        let stars = 0;
        const overall = group.querySelector('.overall');
        const skillRatings = group.querySelectorAll('.skillRating');
        skillRatings.forEach(rating=>{
            starText = rating.innerText;

            for(const char of starText){
               if(char === '⭐'){
                stars +=1
               }
            }
        });
        const total = group.childElementCount * 5;
        if(overall){
            overall.innerText = `${Math.round((stars/total * 100) * 100) / 100}%`
        };
    });
}


renderData();

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

//skill legend

const showSkillsLegend = document.querySelector('.showSkillsLegend');
const skillLegend = document.querySelector('.skillsLegend');
let isShowLegend = false;
const showSkillsLegendHandler = () => {
    skillLegend.classList.toggle('invisible');
    isShowLegend = !isShowLegend;
    isShowLegend ? showSkillsLegend.innerText = 'Hide Legend' : showSkillsLegend.innerText = 'Show Legend';
};

showSkillsLegend.addEventListener('click', showSkillsLegendHandler);

/* show certificates */

class CertificateCard extends HTMLElement {

    /**
     * 
     * @param {* string} id 
     * @param {* string} title 
     * @param {* primary || secundary} type 
     * @param {* project URL string} link 
     * @param {* image url} imgUrl 
     * @param {* string } description 
     */
	constructor (id, title, link) {
		super();
        this.innerHTML =
		`<div id=${id} class="certificate">
            <div>    
                <a class="certView" href=${link} target="_blank">
                    <span class="material-symbols-outlined">visibility</span>
                    <span> ${title} </span>
                </a>
            </div>
            <iframe src=${link} frameborder="0" />  
        </div>`;
	}
};

if ('customElements' in window) {
	customElements.define('certificate-cards', CertificateCard);
};

const irrelevatCertificates = document.querySelectorAll(".irrelevant");
const moreCertificatesBtn = document.querySelector(".moreCertificates");

let is_certificateShowing = false;

const showAllCertificates = () => {
    is_certificateShowing = !is_certificateShowing;
    for (let cert of irrelevatCertificates){
        cert.classList.toggle("invisible");
        
    }
    is_certificateShowing ? moreCertificatesBtn.textContent = "Hide Irrelevant certificates" : moreCertificatesBtn.textContent = "Show Irrelevant certificates";
    
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
