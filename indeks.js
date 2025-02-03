// Venter til nettsiden er lastet før koden kjøres
document.addEventListener("DOMContentLoaded", function() {
    
    let currentPlayer = "red"; // Starter med rød spiller
    let columns = document.querySelectorAll(".column"); // Henter alle kolonner
    let statusText = document.getElementById("hvemSinTur"); // Henter overskriften som viser hvem sin tur det er

    // Går gjennom hver kolonne og legger til en klikk-funksjon
    columns.forEach(column => {
        column.addEventListener("click", function() {

            // Henter alle cellene (sirklene) i den valgte kolonnen
            let cells = column.querySelectorAll("p");

            // Går gjennom cellene fra bunnen til toppen
            for (let i = cells.length - 1; i >= 0; i--) {

                // Hvis cellen ikke allerede har en farge, setter vi spillerens farge her
                if (!cells[i].style.backgroundColor) {
                    cells[i].style.backgroundColor = currentPlayer; // Setter fargen på cellen

                    // Bytter spiller: Hvis det var rød sin tur, blir det gul sin tur, og omvendt
                    currentPlayer = (currentPlayer === "red") ? "yellow" : "red";

                    // Oppdaterer teksten som viser hvem sin tur det er
                    statusText.innerText = currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1) + " sin tur";

                    break; // Stopper løkken når vi har funnet en ledig plass
                }
            }
        });
    });
});

