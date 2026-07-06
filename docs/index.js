const btn = document.getElementById("gameButton");
const spiel = document.getElementById("spiel");
const info = document.getElementById("artikel");
let isGameOpen = false;

function changeGameState(){
    if(isGameOpen == false) {
        isGameOpen = true;
        btn.innerHTML = "Schliessen";
        spiel.hidden = false;
        spiel.src = "Spiel/spiel.html";
        info.hidden = true;
    } else {
        isGameOpen = false;
        btn.innerHTML = "Start";
        spiel.hidden = true;
        spiel.src = "";
        info.hidden = false;
    }}
btn.addEventListener("click", changeGameState);