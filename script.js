//variables to get elements
var choiceList = document.querySelector("#choice-list");
var nextQuestion = document.querySelector("#next-question");
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector(".timer");

var secondsLeft = 300;
var timerInterval;
function setTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "  seconds remaining";

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        setTimeout(sendMessage, 1000);
    }
}


//array that holds Q/A arrays
var questionArray = [

    {
        question: "jlijlk",
        choice: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question: "whats up",
        choice: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        question: "yo yo",
        choice: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question: "butter",
        choice: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "jmilkk",
        choice: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        question: "jlpoplk",
        choice: ["a", "b", "c", "d"],
        answer: "d"
    },
    {
        question: "jbangk",
        choice: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        question: "jcordk",
        choice: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question: "jyoyoyoyolk",
        choice: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question: "okiedokielk",
        choice: ["a", "b", "c", "d"],
        answer: "c"
    }

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
//questions++
renderQuestions();

startQuiz.addEventListener("click", function () {
   
    setTimer();

});

nextQuestion.addEventListener("click", function () {
    //clear
   
    questions++;
    renderQuestions();

});


