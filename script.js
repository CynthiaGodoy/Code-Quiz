// CREATES ARRAY WITH QUESTIONS, CHOICES, & ANSWERS
var questions = [
  {
    title: "Which keyword is used to declare a variable in JS?",
    choices: [
      "Var",
      "Dim",
      "String",
      "None of the Above"
    ],
    answer: "Var"
  },
  {
    title: "Which of the following is a Front-end Framework?",
    choices: [
      "Express.js",
      "Bootstrap",
      "Cake.php",
      "Django"
    ],
    answer: "Bootstrap"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: [
      "javascript",
      "js",
      "script",
      "scripting"
    ],
    answer: "script"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The head section",
      "The body section",
      "The head and body section",
      "Neither head nor body section"
    ],
    answer: "The head and body section"
  },
  {
    question: "How do you write a comment in JavaScript",
    choices: [
      "/*This is a comment*/",
      "//This is a comment",
      "<--This is a comment-->",
      "This is a comment"
    ],
    answer: "//This is a comment"
  },
];

//DECLARED VARIABLES
var score = 0;
var questionsIndex = 0;

var currentTime = document.querySelector("currentTime");
var timer = document.querySelector("#startTime")
var questionsDiv = document.querySelector("#questionDiv")
var gameBox = document.querySelector("#game-box")

var secondsLeft = 75; //SECONDS LEFT
var holdInterval = 0; //INTERVAL TIME
var penalty = 10; //PENALTY TIME
var ulCreate = document.createElement("ul"); //CREATES NEW ELEMENT

timer.addEventListener("click", function () { //TRIGGERS TIMER ON BUTTON
  if (holdInterval === 0) { //CHECKING ZERO
    holdInterval = setInterval(function () {
    secondsLeft--;
    currentTime.textContent = "Time: " + secondsLeft;

  if (secondsLeft <= 0) {
    clearInterval(holdInterval);
    allDone();
    currentTime.textContent = "Time's up!";
  }
  }, 1000); //PAUSES PROGRAM FOR THE AMOUNT OF TIME (in milliseconds) AS SPECIFIED IN THE PARAMETER.
}
  render(questionIndex);
});

//RENDERS QUESTIONS & CHOICES TO PAGE
questionsDiv.innerHTML = ""; //CLEARS EXISTING DATA
ulCreate.innerHTML = "";

for(var i = 0; i <questions.length; i++) { //LOOPS THROUGH ARRAY
  var userQuestion = questions[questionIndex].title; //QUESTIONS
  var userChoices = questions[questionIndex].choices;
  questionsDiv.textContent = userQuestion;
}

userChoices.forEach(function (newItem) { //CHOICES
  var listItem = document.createElement("li");
  listItem.textContent = newItem;
  questionsDiv.appendChild(ulCreate);
  ulCreate.appendChild(listItem);
  listItem.addEventListener("click", (compare));
})

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if (element.textContent == question[questionIndex].answer) {
      score++;
      createDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer; //USER IS CORRECT
  } else {
    secondsLeft = secondsLeft - penalty;
    createDiv.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer; //USER IS WRONG
  }
}

if (questionIndex >= questions.length) { //QUESTION INDEX DETERMINES NUMBER USER IS ON
    allDone(); 
    createDiv.textContent = "End of Quiz!" + "" + "You got " + score + "/" + questions.length;
} else {
  render(questionIndex);
}
  questionsDiv.appendChild(createDiv);
}

function allDone() { //ALLDONE
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";
  var createH1 = document.createElement("h1"); //HEADING
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Completed!"

  questionsDiv.appendChild(createH1);

  var createP = document.createElement("p"); //PARAGRAPH
  createP.setAttribute("id", "createP");

  quesitonsDiv.appendChild(createP);

  if (secondLeft >= 0) { //CALCULATES TIME REMAINING
    var timeRemaining = secondLeft;
    var createP2 = document.createElement("p"); 
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;

    questionsDiv.appendChild(createP2);
  }

  var createLabel = document.createElement("input");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("button");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "Submit");
  createInput.textContent = "Submit";

  questionsDiv.appendChild(createInput);

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "text");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";
}