let container = document.querySelector(".container");
let bird = container.querySelector(".bird");
let game-logo = container.querySelector("game-logo");
let scoreTxt = container.querySelector(".score");
let guideTxt = container.querySelector(".guide-Txt");

let gamePlay = false;
let birdBottom = 300;
let birdLeft = 20;
let gravity = 3;
let startId;

document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        if (!gamePlay) {

            startGame();

            scoreTxt.style.display = "block";
            gameIcon.style.display = "none";
            guideTxt.style.display = "none";
        }
        gamePlay = true;
    }
})

let startGame = () =>{
    birdDown();
    startId = setInterval(birdDown, 20); 
}

let birdDown = () =>{
    birdBottom -= gravity;
    bird.style.Bottom = birdBottom + "px"; 
    bird.style.left = birdLeft + "px";

}