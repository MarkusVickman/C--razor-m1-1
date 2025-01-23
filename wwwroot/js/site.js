// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Deklarerar knappar och meny-element
const menuButton = document.getElementById("menu-open-btn");
const menuButtonClose = document.getElementById("menu-close");
const mainNav = document.getElementById("navbar");

//händelselyssnare för att ändra styling vid klick på menyknapp öppna
menuButton.addEventListener("click", function (e){
    mainNav.style.display = "block";
    menuButton.style = "display:none";
    menuButtonClose.style = "display:block";
})

//händelselyssnare för att ändra styling vid klick på menyknapp stäng
menuButtonClose.addEventListener("click", function (e){
    mainNav.style.display = "none";
    menuButton.style = "display:block";
    menuButtonClose.style = "display:none";
})

//Funktion som tar bort styling i html dokumentet för att menyn ska visas korrekt på datorer.
function resize() {
    if (window.innerWidth > 600) {
        mainNav.style.display = "block";
        menuButton.style.display = "none";
        menuButtonClose.style.display = "none";
    } else {
        mainNav.style.display = "none";
        menuButton.style.display = "block";
    }
}

//initierar funktion vid ändrad visningstorlek
window.onresize = resize;