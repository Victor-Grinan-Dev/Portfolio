const hairsOption = document.querySelector("#hairsOption");
const app = document.querySelector("#app");
const selected = document.querySelector("#selected");

const database = [
    {
        name: "Copper",
        img: "/Portfolio/hairs/copper.jpg"
        
    },
    {
        name: "Lavender",
        img: "/Portfolio/hairs/lavender.jpg"
    },
    {
        name: "Peach",
        img: "/Portfolio/hairs/peach.jpg"
    },
    {
        name: "Pink",
        img: "/Portfolio/hairs/pink.jpg"
    },
    {
        name: "Rosegold",
        img: "/Portfolio/hairs/rosegold.jpg"
    }
]

chooseOne = () => {
    const choice = Math.floor(Math.random() * database.length);
    console.log(database[choice].name);
    selected.innerHTML = "";
    selected.insertAdjacentHTML("beforeend", `<img src=${database[choice].img} alt="Pink" id=${database[choice].name} class="grow"></img><h1>${database[choice].name}</h1><h5 id="reroll"> Amazing color! Close this program and go get your ${database[choice].name} hair done... What? Not convinced? Tap to try your luck again.</h5>`)
    selected.addEventListener("click", chooseOne)
    selected.classList.remove("invisible");
}

database.map(item => {
    app.insertAdjacentHTML("beforeend", `<div class="hair"><img src=${item.img} alt="Pink" id=${item.name}></div>`)
})


app.addEventListener("click", chooseOne);