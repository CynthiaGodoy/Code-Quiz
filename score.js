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

    if (storedScores !== null) {
        for (var i = 0; i < allScores.length; i++) {
            var createLi = document.createElement("li");
            createLi.textContent = allScores[i].initials + "" + allScores[i].score;
            highScore.appendchild(createLi);
        }}
// Move to Index Page (EventListener)
goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
});