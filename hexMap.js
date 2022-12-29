import blank from './hexes/blank.png';
import blue from './hexes/selected.png';
import red from './hexes/hostile.png';

alert('hello')

const hexArea = document.querySelector(".hexMap");

window.addEventListener("resize", function(event) {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    console.log(width);
    console.log(height);
});

hexArea.innerHTML = '<div style.backgrounfImage={url(`${blank}`)}>hex</div>'