const hairsOption = document.querySelector("#hairsOption");
const app = document.querySelector("#app");

const database = [
    {
        name: "Copper",
        img: "/Portfolio/hairs/copper.jpg"
    },
    {
        name: "lavender",
        img: "/Portfolio/hairs/lavender.jpg"
    },
    {
        name: "peach",
        img: "/Portfolio/hairs/peach.jpg"
    },
    {
        name: "pink",
        img: "/Portfolio/hairs/pink.jpg"
    },
    {
        name: "rosegold",
        img: "/Portfolio/hairs/rosegold.jpg"
    }
]

chooseOne = () => {
    const choice = Math.floor(Math.random() * database.length);
    console.log(database[choice]);
}

database.map(item => {
    app.insertAdjacentHTML("beforeend", `<div class="hair"><img src=${item.img} alt="Pink"></div>`)
})


app.addEventListener("click", chooseOne);