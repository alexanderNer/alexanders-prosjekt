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
let gap = 400

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
    generatePipes()
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
        console.log("GAME OVER")
    }
}

function fuglOpp() {
    fuglBunn += 5
    yFart = 10
}

 let generatePipes =() =>{
    let bottomPipeImg = document.createElement("img")
    let topPipeImg = document.createElement("img")
    bottomPipeImg.src = "bilder/Pipe.jpg"
    topPipeImg.src = "bilder/Pipe.jpg"

    let pipeLeft = 290
    let bottomPipe = document.createElement("div")
    let randomHeigth = Math.floor(Math.random() * 65)
    let pipeBottom = randomHeigth

    bottomPipe.style.bottom = pipeBottom + "px"
    bottomPipe.style.left = pipeLeft + "px"
    bottomPipe.classList.add("bottomPipe")
    bottomPipe.appendChild(bottomPipeImg)
    container.appendChild(bottomPipe)

    let topPipe = document.createElement("div")
    topPipe.style.bottom = pipeBottom + gap + "px"
    topPipe.style.left = pipeLeft + "px"
    topPipe.classList.add("topPipe")
    topPipe.appendChild(topPipeImg)
    container.appendChild(topPipe)

    let movePipe = () => {
        pipeLeft -= 2
        bottomPipe.style.left = pipeLeft + "px"
        topPipe.style.left = pipeLeft + "px"
    }
    let timeId = setInterval(movePipe, 20)

    setTimeout(generatePipes, 1800)

    if(pipeLeft === -20){
        clearInterval(timeId)
        container.removeChild(bottomPipe)
        container.removeChild(topPipe)
    }
} 

  