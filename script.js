let container = document.querySelector(".container");

console.log("Container er lik:", container)


let fugl = container.querySelector(".fugl");
let gameLogo = container.querySelector(".gameLogo");
let scoreTxt = container.querySelector(".score");
let guideTxt = container.querySelector(".guide-txt");

const GRAVITY = 0.5
// Settes når spillet startes:
let gamePlay = false;
let fuglBunn = 0;
let fuglVenstre = 0;
let startId = null;
let yFart = 0


document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {

        if (!gamePlay) {
            startGame();
            scoreTxt.style.display = "block";
            gameLogo.style.display = "none";
            guideTxt.style.display = "none";
        }


        fuglOpp()
    }
})

function startGame() {
    gamePlay = true
    fuglBunn = 300
    fuglVenstre = 20
    startId = setInterval(fuglFall, 20)
}



function gameOver() {
    clearInterval(startId)
    startId = null
    gamePlay = false

    scoreTxt.style.display = "none";
    gameLogo.style.display = "block";
    guideTxt.style.display = "block";


}

function fuglFall() {
    yFart -= GRAVITY
    fuglBunn += yFart
    fuglBunn -= 3
    // console.log("Fuglbunn:", fuglBunn)
    fugl.style.bottom = fuglBunn + "px"
    fugl.style.left = fuglVenstre + "px"

    if (fuglBunn < 0 || fuglBunn > 600) {
        gameOver()
    }
}

function fuglOpp() {
    fuglBunn += 5
    yFart = 10
}