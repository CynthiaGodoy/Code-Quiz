// VARIABLES
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// CLEAR SCORES (EventListener)
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// (Retrieves Local Storage)
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

    if (allScores !== null) {
        for (var i = 0; i < allScores.length; i++) {
            var createLi = document.createElement("li");
            createLi.textContent = allScores[i].initials + "" + allScores[i].score;
            highScore.appendChild(createLi); //SPELLING ERROR FIXED BY BCS
        }}
// MOVE TO INDEX PAGE (EventListener)
goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
});