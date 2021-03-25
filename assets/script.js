var questions = [
    "Which HTML element do we put Javascript inside?", 
    "what is the correct attribute to reference an external script?",
    "How do you define a function",
    "What is the correct way to add a comment to Javascript",
    "How do you write an array?",
    "what is the keyword to declare a variable",
    "which of the following is NOT a data type in Javascript?",
    "Which of these is NOT a mathematical operator in Javascript",
    "Which of these statments is NOT valid javascript",
    "which of these is the best practice for naming variables in Javascript"
];
var answers = [
    ["<js>", "<scripting>", "<script>", "<javascript>"], 
    ["src", "href", "link", "name"],
    ["function myFunction()", "function = myFunction()", "function:myFunction()", "var myFunction()"],
    ["# Comment", "<!--Comment-->", "//Comment", "*Comment"],
    ["[a,b,c]", "{a,b,c}", "(a,b,c)", "<a,b,c>"],
    ["var", "v", "declare", "variable"],
    ["Boolean", "String", "Number", "Long"],
    ["+", "x", "%", "/"],
    ["x = a + b;", "var x, a, b;", "y =!= z;", "'String' + 'other string';"],
    ["variable-name", "variable_name", "VariableName", "variableName"]
];
var correctAnswers = [
    "<script>", 
    "src",
    "function myFunction()",
    "//Comment",
    "[a,b,c]",
    "var",
    "Long",
    "x",
    "y =!= z;",
    "variableName"
];

var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("question-box");
var questionSentence = document.getElementById("question-sentence");
var answerBox = document.getElementById("answer-box");
var answerSpaces = answerBox.getElementsByTagName('li');
var dashboard = document.getElementsByClassName('dashboard')[0];
var timer = document.getElementById('timer');
var scoreCard = document.getElementById('score');


var questionNumber = -1;
var score = 0;
var ticker = 60;

function newQuestion() {
    if (questionNumber < 9) {
        questionNumber++;
    } else {
        return;
    }
    questionSentence.textContent = questions[questionNumber];
    for (i = 0; i < answerSpaces.length; i++) {
        answerSpaces[i].setAttribute('data-answer', answers[questionNumber][i])
        answerSpaces[i].textContent = answers[questionNumber][i];
    }
}

function renderHighScores() {

}

function showHighScores() {
    var scores = JSON.parse(localStorage.getItem("scores"));
    if (!scores) {
        scores = [];
    }
    var highScoreTable = document.getElementById("highscore-table");
    for (i = 0; i < scores.length; i++) {
        highScoreTable.appendChild("<li>"+ scores[i].initials+": "+scores[i].score +"</li>");
    }

    var form = document.getElementsByTagName('form')[0];

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var input = document.getElementsByTagName('input')[0];
        var initials = input.value;
        input.value = "";
        var scoreObject = {
            initials,
            score
        }
        scores.push(scoreObject);

        scores.sort(function(a, b) {
            return a.score-b.score
        });

        localStorage.setItem("scores", JSON.stringify(scores));

        console.log("Googoo");
    });
}

function onTimer() {
    dashboard.style.display = "block";
    if (ticker < 10) {
        timer.innerHTML = "Timer: 0" +ticker;
    } else {
        timer.innerHTML = "Timer: " +ticker;
    }
    console.log(timer);
    ticker--;
    if (ticker < 0) {
        alert('You lose!');
        showHighScores();
    } else {
        setTimeout(onTimer, 1000);
    }
}

startButton.addEventListener("click", function() {
    questionBox.style.display = "block";
    startButton.style.display = "none";
    newQuestion();
    onTimer();

});

for (var i = 0; i < answerSpaces.length; i++) {
    answerSpaces[i].addEventListener("click", function(e) {
        console.log();
        if (e.target.getAttribute("data-answer") === correctAnswers[questionNumber]) {
            console.log("Correct");
            if (score < 10) {
                score++
            }
            scoreCard.innerHTML = "Score: "+ score;
        } else {
            console.log("Incorrect");
            //decrement timer
        }
        newQuestion();
    });
}