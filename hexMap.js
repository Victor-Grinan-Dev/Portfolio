const hexArea = document.querySelector(".hexMap");

let width = document.body.clientWidth;
let height = document.body.clientHeight;

let rows = 

window.addEventListener("resize", function(event) {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    console.log(width);
    console.log(height);
});

hexArea.innerHTML = '<div class="tile"></div>';