
const hexMap = document.querySelector(".hexMap");
const hexSize = 50;

let width = document.body.clientWidth;
let height = document.body.clientHeight;
let rows = (height/ 4) / hexSize;
let columns = (width / hexSize) - 1;

window.addEventListener("resize", function(event) {
    width = document.body.clientWidth;
    height = document.body.clientHeight;

    rows = (height/ 10) / hexSize ;
    columns = (width / hexSize) - 2;
});


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


