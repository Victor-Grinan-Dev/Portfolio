const picBank = [
    "imgs/andy-holmes-sym5TTE2ks0-unsplash.jpg",
    "imgs/autumn-studio-gsyUo-_cU94-unsplash.jpg",
    
    "imgs/carl-raw-_NEzKE6Zdp4-unsplash.jpg",
    "imgs/finn-hackshaw-FQgI8AD-BSg-unsplash.jpg",
    "imgs/francois-olwage--KLKu_pruJ4-unsplash.jpg",
    
    "imgs/gradienta-QWutu2BRpOs-unsplash (1).jpg",
    "imgs/hector-achautla-Szyj_xzcZlg-unsplash.jpg",
    "imgs/hello-i-m-nik-K_qGVldtzk0-unsplash.jpg",
    "imgs/karalina-s-8V7ymFP8-0M-unsplash (1).jpg",
    "imgs/marra-m7fT6OreZfI-unsplash.jpg",
    "imgs/martin-woortman-Wtr39iVfzpw-unsplash.jpg",
    
    "imgs/mike-von-v9-ZW3VONcw-unsplash.jpg",
    "imgs/muhammad-saushan-lheYsXRi2Fc-unsplash.jpg",
    "imgs/nathan-dumlao-WDjNsJWIxVE-unsplash.jpg",
    "imgs/nio-milano-caH-ZLrisZA-unsplash.jpg",
    "imgs/oleg-laptev-QRKJwE6yfJo-unsplash.jpg",

];

const totalPics = document.querySelector("#gallery").childElementCount;

const selected = [];

const randomIndex = (array) => Math.floor((Math.random() * array.length) + 1);
const selectOneRandomPic = (array) => {
    const result = array[randomIndex(array)];
    console.log(result)
    return result
}

const reload = document.querySelector("reload").addEventListener("click", () => {
    location.reload();
    return false;
})

const displayImg = () => {

    for (let i = 0; i < totalPics; i++){  

        do {
            currentPic = selectOneRandomPic(picBank);
        }while(selected.includes(currentPic))
    
        selected.push(currentPic); 
        console.log(selected)
    }
    
    let id = 1
    selected.forEach( pic => {
        currentElement = document.querySelector(`#pic_${id}`);
        currentElement.innerHTML = "";
        currentElement.innerHTML = `<img src="${pic}" alt=pic_${id}>`;
        id++;
    })

    setTimeout(displayImg, 500)

}

displayImg();







