var ranIndex;
var textOfSomeSort;
let elements = [
    ["HPO3", "Hydrogen Phosphite" ],
    ["HPO4", "Hydrogen Phosphate"],
    ["SO3", "Sulfite"],
    ["SO4", "Sulfate"],
    ["C2O4", "Oxalate"],
    ["S2O4", "Thiosulfate"],
    ["SiO3", "Silicate"],
    ["CrO4", "Chromate"],
    ["Cr2O7", "Dichromate"],
    ["CO3", "Carbonate"]
];

function homepage() {
    window.location.pathname = "/index.html"
}

function checkAnswer() {
    var ans = document.getElementById("answer");
    if (ans.value.toLowerCase().trim() == elements[ranIndex][1].toLowerCase()) {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "Correct!!!";
        setTimeout(changeElement, 1000)
        
        ans.value = "";
    }
    else {
        ans.value = "";
    }
}
function changeElement() {
    var docId = document.getElementById("formula");
    ranIndex = Math.floor(Math.random() * elements.length);
    var ranElement = elements[ranIndex][0]
    docId.innerText = ranElement;
    textOfSomeSort.innerText = "";
}

addEventListener("DOMContentLoaded", changeElement)