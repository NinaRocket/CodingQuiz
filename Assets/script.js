//variables to get elements
var choiceList = document.querySelector("#choice-list");
var nextQuestion = document.querySelector("#next-question");
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector(".timer");
var quizCard = document.querySelector(".quiz");
var instr = document.querySelector("h4");

//variable to store score
var score = 0;
//variable for seconds on counter
var secondsLeft = 280;
//variable for the counter time interval
var timerInterval;

//function to set the timer, sets timerInterval to update every second
function setTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}
//function so the counter counts down
function updateTimer() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "  seconds remaining";

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        //setTimeout(sendMessage, 1000);
    }
}

getHighScore();
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

var buttons;

//variable keeps count of what question we are on
var questions = 0;

//function to render the questions to be displayed on the screen
function renderQuestions() {

    //variable to target the question ID div   
    var questionText = document.getElementById("question");
    //setting the question text onto the question card
    questionText.textContent = questionArray[questions].question;

    //a for loop to create and append the buttons to the div
    for (var i = 0; i < questionArray[questions].choice.length; i++) {


        var choices = questionArray[questions].choice[i];
        //creating button
        buttons = document.createElement("button");
        //assigning class to dynamically created buttons
        buttons.classList.add("answ-btn");

        //adding text to the button 
        buttons.textContent = choices;
        //putting the button into the html element 
        choiceList.appendChild(buttons);

        //when the answer is selected, the guessCheck function is called
        buttons.onclick = guessCheck;
    };
};

//function that checks to see if the answer selected is the correct one
function guessCheck() {

    //disable other choices once a click is made
    $(".answ-btn").prop('disabled', true);
    //variable that stores the answer text displayed on the button
    var textInside = this.innerHTML;
    //variable that stores the answer to compare to what was selected
    var answ = questionArray[questions].answer;

    console.log(textInside);
    //if else statement to check if the text on the button matches the answer text
    if (textInside === answ) {
        //if correct, increase score 
        score++;
        storeScore();
        score.localStorage
        console.log(score);

    }
    else

        //if incorrect, reduce 20 seconds off the clock
        secondsLeft = secondsLeft - 20;


}
function storeScore() {
    localStorage.setItem("question", score);
};

function getHighScore() {
    var highScore = localStorage.getItem("question");
    console.log(highScore);
}


startQuiz.addEventListener("click", function () {

    //timer starts
    setTimer();

    //show quiz
    //makes quiz visible when start hit
    quizCard.style.visibility = "visible";
    //make visible next question button
    nextQuestion.style.visibility = "visible";
    //hide press start text
    instr.style.visibility = "hidden";
    //hide start button
    startQuiz.style.visibility = "hidden";
    renderQuestions();

});

nextQuestion.addEventListener("click", function () {

    // Clear choiceList items
    choiceList.innerHTML = "";

    //adds one to questions to point to next question set in array
    questions++;

    renderQuestions();

});


