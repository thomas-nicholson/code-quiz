
var questions = [
    "Inside which HTML element do we put Javascript?", 
    "what is the correct attribute to reference an external script?",
    "How do you define a function",
    "What is the correct way to add a comment to Javascript",
    "How do you write an array?",
    "what is the keyword to declare a variable",
    "which of the following is NOT a type of variable",
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
    ["Boolean, String, Number, Long"],
    ["+", "x", "%", "/"],
    ["x = a + b", "var x, a, b", "y =!= z", "'String' + 'other string'"],
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
    "y =!= z",
    "variableName"
];

if (questions.length !== answers.length || answers.length !== correctAnswers.length || questions.length !== correctAnswers.length) {
    alert("alignment error");
}

var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("question-box");
var questionSentence = document.getElementById("question-sentence");
var answerBox = document.getElementById("answer-box");
var answerSpaces = answerBox.getElementsByTagName('li');


function newQuestion(num) {
    questionSentence.textContent = questions[num];

    for (i = 0; i < answerSpaces.length; i++) {
        answerSpaces[i].textContent = answers[num][i];
    }
}


startButton.addEventListener("click", function() {
    questionBox.style.display = "block";
    startButton.style.display = "none";
    newQuestion(0);

});

for (var i = 0; i < answerSpaces.length; i++) {
    answerSpaces[i].addEventListener("click", function(e) {
        console.log(e.target);
    });
}