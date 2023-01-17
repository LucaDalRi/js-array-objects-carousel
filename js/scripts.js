const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const btnRight = document.getElementById("arrow-right");
const btnLeft = document.getElementById("arrow-left");
const btnAutoplay = document.getElementById("btn-autoplay");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
let currentImg = 1;
document.getElementById('titolo-testo').innerHTML = images[currentImg - 1].title + '<br>' + images[currentImg - 1].text;

btnRight.addEventListener("click", avanti);
function avanti() {
    
    images[currentImg++];
    
    if (currentImg > 5) {
        
        currentImg = 1;
        
    };

    document.getElementById("immagine").src = "img/0" + currentImg + ".webp";
    document.getElementById('titolo-testo').innerHTML = images[currentImg - 1].title + '<br>' + images[currentImg - 1].text;

    
};

btnLeft.addEventListener("click", indietro);
function indietro() {     
    
    images[currentImg--];
    
    if (currentImg < 1) {
        
        currentImg = 5;
        
    };

    document.getElementById("immagine").src = "img/0" + currentImg + ".webp";
    document.getElementById('titolo-testo').innerHTML = images[currentImg - 1].title + '<br>' + images[currentImg - 1].text;

};


btnStart.addEventListener('click' , 

function () {

    forward = setInterval(avanti , 3000);

    btnStop.addEventListener('click', 
    
    function() {
    
        clearInterval(forward);
        clearInterval(backward);
    
    });
    btnAutoplay.addEventListener('click', 
    function() {
    
        backward = setInterval(indietro, 3000);

        clearInterval(forward);
    
    });
    
});

document.getElementById('immagine-side-1').addEventListener('click', 
function() {

    document.getElementById("immagine").src = "img/0" + 1 + ".webp";

});
document.getElementById('immagine-side-2').addEventListener('click', 
function() {

    document.getElementById("immagine").src = "img/0" + 2 + ".webp";

});                                                                          // Non so come scrivere il ciclo per questo....
document.getElementById('immagine-side-3').addEventListener('click', 
function() {

    document.getElementById("immagine").src = "img/0" + 3 + ".webp";

});
document.getElementById('immagine-side-4').addEventListener('click', 
function() {

    document.getElementById("immagine").src = "img/0" + 4 + ".webp";

});
document.getElementById('immagine-side-5').addEventListener('click', 
function() {

    document.getElementById("immagine").src = "img/0" + 5 + ".webp";

});



