var ranIndex;
var textOfSomeSort = document.getElementById("correct");
let elements = [
    ["PO3", "Phosphite" ],
    ["PO4", "Phosphate"],
    ["AsO4", "Arsenate"],
    ["BO3", "Borate"]
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
        textOfSomeSort.innerText = "you got it wrong >:(";
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