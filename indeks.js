// Venter til nettsiden er lastet før koden kjøres
document.addEventListener("DOMContentLoaded", function() {
    let rød = "red"; // Definerer farge, men bruker ikke variabelen
    let gul = "yellow"; // Definerer farge, men bruker ikke variabelen
    let currentPlayer = "rød"; // Starter med rød spiller, men bruker norsk navn som skaper problemer
    let columns = document.querySelectorAll(".kolonne"); // Feil klasse, riktig er ".column"
    let statusText = document.getElementById("hvemSinTurTekst"); // Feil id, riktig er "hvemSinTur"

    // Går gjennom hver kolonne og legger til en klikk-funksjon
    columns.forEach(column => {
        column.addEventListener("click", function() {

            // Henter alle cellene (sirklene) i den valgte kolonnen
            let cells = column.querySelectorAll("div"); // Feil, riktig element er "p"

            // Går gjennom cellene fra bunnen til toppen
            for (let i = 0; i < cells.length; i++) { // Feil rekkefølge, starter fra toppen i stedet for bunnen

                // Hvis cellen ikke allerede har en farge, setter vi spillerens farge her
                if (!cells[i].style.backgroundColor) {
                    cells[i].style.backgroundColor = currentPlayer; // Bruker "rød" og "gul", men skulle vært "red" og "yellow"

                    // Bytter spiller: Hvis det var rød sin tur, blir det gul sin tur, og omvendt
                    currentPlayer = (currentPlayer === "red") ? "yellow" : "red"; // Bruker feil navn

                    // Oppdaterer teksten som viser hvem sin tur det er
                    statusText.innerText = "Det er " + currentPlayer + " sin tur nå!"; // Bruker feil formatering

                    break; // Stopper løkken når vi har funnet en ledig plass
                }
            }
        });
    });
});
