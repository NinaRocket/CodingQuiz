//variables to get elements
var choiceList = document.querySelector("#choice-list");
var nextQuestion = document.querySelector("#next-question");
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector(".timer");
var quizCard = document.querySelector(".quiz");
var instr = document.querySelector("h1");

var secondsLeft = 280;
var timerInterval;
function setTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "  seconds remaining";

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        //setTimeout(sendMessage, 1000);
    }
}


//array that holds Q/A arrays
var questionArray = [

    {
        question: "What is a variable in JavaScript?",
        choice: ["function analysis", "arrayList", "stored data that may vary", "numerator"],
        answer: "stored data that may vary"
    },
    {
        question: "What does the = do in this example: var catTail = 0;",
        choice: ["sets catTail equal to 0", "assigns a starting value of 0 to catTail", "removes the cat's tail", "creates an object"],
        answer: "assigns a starting value of 0 to catTail"
    },
    {
        question: "Which is an example of camel case?",
        choice: ["camel-case", "CAMELcase", "camelCase", "cameLCase"],
        answer: "camelCase"
    },
    {
        question: "Which operator adds one to the current number?",
        choice: ["++", "-+", "+++", "^1"],
        answer: "++"
    },
    {
        question: "Can you call an anonymous function again later in your code?",
        choice: ["No", "Yes", "if the matrix allows it", "only if it is an object"],
        answer: "No"
    },
    {
        question: "Where should you create a variable so it has global scope?",
        choice: ["create an object called global variables", "on the index.html page", "inside a variable function", "at the top, outside of any functions or objects"],
        answer: "at the top, outside of any functions or objects"
    },


];
// var questionOne = questionArray[0].question;
// //var choiceOne = [questionArray[questions].choice];
// var answerOne = questionArray[0].answer;

//variable keeps count of what question we are on
var questions = 0;

function renderQuestions() {

    var questionText = document.getElementById("question");
    questionText.textContent = questionArray[questions].question;
    console.log(questionText);

    for (var i = 0; i < questionArray[questions].choice.length; i++) {
        console.log(i);
        var choices = questionArray[questions].choice[i];
        var button = document.createElement("button"); //creating button
        button.textContent = choices; //adding text to the button 
        choiceList.appendChild(button); //putting the button into the html element 

    }

}

renderQuestions();

startQuiz.addEventListener("click", function () {

    //timer starts
    setTimer();

    //show quiz
    quizCard.style.visibility = "visible"; //makes quiz visible when start hit
    instr.style.visibility = "hidden"; //hide press start text
    startQuiz.style.visibility = "hidden"; //hide start button

});

nextQuestion.addEventListener("click", function () {

    // Clear choiceList items
    choiceList.innerHTML = "";

    //adds one to questions to point to next question set in array
    questions++;

    renderQuestions();


});


