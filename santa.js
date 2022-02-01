function removeSanta() {
    this.style.opacity = "0"
}
var santaSelect = document.getElementsByClassName("santadog");

for (let i = 0; i < santaSelect.length; i++) {
    santaSelect[i].addEventListener("click", removeSanta)
}