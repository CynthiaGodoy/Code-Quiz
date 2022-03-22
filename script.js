// CREATES ARRAY WITH QUESTIONS, CHOICES, & ANSWERS
var questions = [
  {
    title: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["Var", "Dim", "String", "None of the Above"],
    answer: "Var"
  },
  {
    title: "Which of the following is a Front-end Framework?",
    choices: ["Express.js", "Bootstrap", "Cake.php","Django"],
    answer: "Bootstrap"
  },
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["javascript", "js", "script", "scripting"],
    answer: "script"
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["The head section", "The body section", "The head and body section", "Neither head nor body section"],
    answer: "The head and body section"
  },
  {
    title: "How do you write a comment in JavaScript",
    choices: ["/*This is a comment*/", "//This is a comment", "<--This is a comment-->", "This is a comment"],
    answer: "//This is a comment"
  },
];

//DECLARED VARIABLES
var score = 0;
var questionsIndex = 0;

var currentTime = document.querySelector("#currentTime"); //HELP FROM BCS WAS MISSING #
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 75; //SECONDS LEFT
var holdInterval = 0; //INTERVAL TIME
var penalty = 10; //PENALTY TIME
var ulCreate = document.createElement("ul"); //CREATES NEW ELEMENT

timer.addEventListener("click", function () { //TRIGGERS TIMER ON BUTTON
  if (holdInterval === 0) { //CHECKING ZERO
    holdInterval = setInterval(function () {
    secondsLeft --;
    currentTime.textContent = "Time: " + secondsLeft;

  if (secondsLeft <= 0) {
    clearInterval(holdInterval);
    allDone();
    currentTime.textContent = "Time's up!";
  }
  }, 1000); //PAUSES PROGRAM FOR THE AMOUNT OF TIME (in milliseconds) AS SPECIFIED IN THE PARAMETER.
}
  render(questionsIndex);
});

//RENDERS QUESTIONS & CHOICES TO PAGE
function render(questionsIndex) {
  questionsDiv.innerHTML = ""; //CLEARS EXISTING DATA
  ulCreate.innerHTML = "";

for(var i = 0; i <questions.length; i++) { //LOOPS THROUGH ARRAY
  var userQuestion = questions[questionsIndex].title; //QUESTIONS
  var userChoices = questions[questionsIndex].choices;
  questionsDiv.textContent = userQuestion;
}

userChoices.forEach(function (newItem) { //CHOICES
  var listItem = document.createElement("li");
  listItem.textContent = newItem;
  questionsDiv.appendChild(ulCreate);
  ulCreate.appendChild(listItem);
  listItem.addEventListener("click", (compare));
})
}

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if (element.textContent == questions[questionsIndex].answer) {
      score++;
      createDiv.textContent = "Correct! The answer is: " + questions[questionsIndex].answer; //USER IS CORRECT
  } else {
    secondsLeft = secondsLeft - penalty;
    createDiv.textContent = "Wrong! The correct answer is: " + questions[questionsIndex].answer; //USER IS WRONG
  }
}

questionsIndex++;
if (questionsIndex >= questions.length) { //QUESTION INDEX DETERMINES NUMBER USER IS ON
    allDone(); 
    createDiv.textContent = "End of Quiz! " + "" + "You got " + score + "/" + questions.length + " Correct!";
} else {
  render(questionsIndex);
}
  questionsDiv.appendChild(createDiv);
}

function allDone() { //ALLDONE
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";
  var createH1 = document.createElement("h1"); //HEADING
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Congrats! You've Completed the Quiz!"

  questionsDiv.appendChild(createH1);

  var createP = document.createElement("p"); //PARAGRAPH
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  if (secondsLeft >= 0) { //CALCULATES TIME REMAINING
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("P"); 
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;

    questionsDiv.appendChild(createP2);
  }

  var createLabel = document.createElement("label"); //LABEL
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input"); //INPUT
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  var createSubmit = document.createElement("button"); //SUBMIT
  createSubmit.setAttribute("type", "Submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  createSubmit.addEventListener("click", function() { //EVENT LISTENER TO CAPTURE INITIALS & SCORE & LOCAL STORAGE
    var initials = createInput.value;

    if (initials ===null) {
      console.log("No Value Entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining
      }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
        allScores = [];
        } else {
          allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);

         window.location.replace("./score.html") //SENDS TO HTML
      }
    });
}