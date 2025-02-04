let container = document.querySelector(".container");
let bird = container.querySelector(".bird");
let game-logo = container.querySelector("game-logo");
let scoreTxt = container.querySelector(".score");
let guideTxt = container.querySelector(".guide-Txt");

let gamePlay = false;

document.addEventListener("keydown", (e) => {
    if (e.code == "Space"){
        if(!gamePlay){
            scoreTxt.style.display = "block";
            gameIcon.style.display = "none";
            guideTxt.style.display = "none";
        }

    }

        
})