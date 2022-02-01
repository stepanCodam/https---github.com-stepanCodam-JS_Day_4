let buttonextraction = document.getElementById("btnextrct");

function exportInput() {
    document.getElementById("nameid").innerHTML = document.getElementById("fname").value + "<br>";
    document.getElementById("displayedElements").innerHTML += document.getElementById("lname").value + "<br>";
    document.getElementById("displayedElements").innerHTML += document.getElementById("age").value + "<br>";
    if (document.getElementById("fname").value.length > 5) {
        document.getElementById("nameid").style.color = "green"
    } else {
        document.getElementById("nameid").style.color = "red"
    }
}



buttonextraction.addEventListener("click", exportInput);