let buttonextraction = document.getElementById("btnextrct");

var profession1 = document.getElementById("profession")

function exportInput() {
    document.getElementById("nameid").innerHTML = document.getElementById("fname").value + "<br>";
    document.getElementById("displayedElements").innerHTML += document.getElementById("lname").value + "<br>";
    document.getElementById("displayedElements").innerHTML += document.getElementById("age").value + "<br>";

    if (document.getElementById("fname").value.length > 5) {
        document.getElementById("nameid").style.color = "green"
    } else {
        document.getElementById("nameid").style.color = "red"
    }
    document.getElementById("bobs").innerHTML += document.getElementById("hosp").value;
    document.getElementById("bobs").innerHTML = document.getElementById("info").value;

    if (profession1.value == "Gastro") {
        document.getElementById("displayedElements").style.backgroundColor = "purple"
    } else if (profession1.value == "IT") {
        document.getElementById("displayedElements").style.backgroundColor = "red"
    }

}



buttonextraction.addEventListener("click", exportInput);