const spieler_skor = document.getElementsByClassName("spieler_skor")[0];
const computer_skor = document.getElementsByClassName("computer_skor")[0];
const stein = document.getElementById("stein");
const papier = document.getElementById("papier");
const schere = document.getElementById("schere");
const spieler_wahl = document.getElementById("spieler_wahl");
const computer_wahl = document.getElementById("computer_wahl");
const nachricht = document.getElementsByClassName("nachricht")[0];



let spieler = 0;
let computer = 0;

function computerWahl() {
    const wahl = ["schere", "stein", "papier"];
    const spontanZahl = Math.floor(Math.random() * 3);
    computer_wahl.setAttribute("src", `res/${wahl[spontanZahl]}.png`);
    return wahl[spontanZahl];
}
// computerWahl();


function eventListeners() {

    stein.addEventListener("click", function () {
        spieler_wahl.setAttribute("src", `res/stein.png`);
        let cmp_wahl=computerWahl();
        result("stein",cmp_wahl);
    });
    schere.addEventListener("click", function () {
        spieler_wahl.setAttribute("src", `res/schere.png`);
        let cmp_wahl=computerWahl();
        result("schere",cmp_wahl);
    });
    papier.addEventListener("click", function () {
        spieler_wahl.setAttribute("src", `res/papier.png`);
        let cmp_wahl=computerWahl();
        result("papier",cmp_wahl);
    });
}

eventListeners(); 

function result(a, b){
    switch(a+b){
        case "steinschere":
        case "papierstein":
        case "scherepapier":
        gewinn();
        break;
        case "steinpapier":
        case "papierschere":
        case "scherestein":
        verloren();
        break;
        default:"Fehler";
        case "steinstein":
        case "papierpapier":
        case "schereschere":
        gleich();
        break;
    }
}

function gewinn(){
    spieler++;
    nachricht.innerHTML="Gratulieren Gewonnen";
    spieler_skor.innerHTML=spieler.toString();
}
function verloren(){
    computer++;
    nachricht.innerHTML="Leider Verloren";
    computer_skor.innerHTML=computer.toString();
}
function gleich(){
    nachricht.innerHTML="Gleich";
}