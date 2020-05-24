//variables to get elements
var choiceList = document.querySelector("#choice-list");
var nextQuestion = document.querySelector("#next-question");
var startQuiz = document.querySelector("#start");
var timeEl = document.querySelector(".timer");
var quizCard = document.querySelector(".quiz");
var instr = document.querySelector("h4");
var scoreDisp = document.querySelector(".scoreDisp");

//variable to store score
var score = 0;
//variable for seconds on counter
var secondsLeft = 180;
//variable for the counter time interval
var timerInterval;
//variable for high score
var highScore;
//felt cute, might delete later
var buttons;
//variable keeps count of what question we are on
var questions = 0;

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
        endQuiz();
        //setTimeout(sendMessage, 1000);
    }
};

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
    var answBtn = document.getElementsByClassName("answ-btn");
    //console.log(buttons);
    for (let i = 0; i < answBtn.length; i++) {
        answBtn[i].disabled = true;
    };

    //disable other choices once a click is made in jQuery - not used in this assignment but noted
    // $(".answ-btn").prop('disabled', true);

    //variable that stores the answer text displayed on the button
    var textInside = this.innerHTML;
    //variable that stores the answer to compare to what was selected
    var answ = questionArray[questions].answer;

    console.log(textInside);
    //if else statement to check if the text on the button matches the answer text
    if (textInside === answ) {
        //if correct, increase score 
        score++;
    }
    else
        //if incorrect, reduce 20 seconds off the clock
        secondsLeft = secondsLeft - 20;
};

//function to store score
function storeScore() {
    //if current score is higher than localStorage then store new score
    if (score > highScore && highScore !== null) {
        localStorage.setItem("question", score);
        // getHighScore(highScore);
    } else if (highScore === null) {
        localStorage.setItem("question", score);
    }
};

//function to get the high score out of local storage
function getHighScore(highScore) {
    highScore = localStorage.getItem("question");

};

//function for when start quiz button is clicked
startQuiz.addEventListener("click", function () {
    //timer starts
    setTimer();
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

    //after last question, hide quiz and display score
    if (questions === 6) {
        //console.log(highScore);
        endQuiz();

    } else
        renderQuestions();
});
function endQuiz() {
    //get highScore value
    highScore = localStorage.getItem("question");
    //if user first time, highScore will be null, execute the following
    if (highScore === null) {
        //set and get high score into local storage
        highScore = localStorage.setItem("question", score);
        highScore = localStorage.getItem("question");
    }
    console.log(highScore);
    //end timer
    clearInterval(timerInterval);
    //hide next question button
    nextQuestion.style.visibility = "hidden";
    //hide quiz questions
    quizCard.style.visibility = "hidden";
    //get high score
    getHighScore(highScore);
    //variable to create p tag for text
    var showScore = document.createElement("p");
    //add a class to p tag for styling
    showScore.classList.add("finalScore");
    //text to display scores
    showScore.textContent = "Quiz Over! \n You scored: " + score
        + " \n High score: " + highScore;
    //if the user score is higher than the saved high score, let them know
    if (score > highScore) {
        getHighScore(highScore);
        showScore.textContent = "Quiz Over! \n You scored: " + score
            + " \n High score: " + highScore + "\n\n Congratulations, you have the new high score of: " +
            score + "!!!" + "\n Enter your initials, champ!";
        var inputBox = document.createElement("input");
        showScore.appendChild(inputBox);
        inputBox.setAttribute("id", "userInput");

        // inputEnter();
        function inputEnter(event) {
            var initials = document.getElementById("userInput").value;
            document.getElementById("userInput").innerHTML = initials;
            if (event.key === "Enter") {
                showScore.textContent = "Player: " + initials + " High Score: " + score;
                storeScore();
            }
        };
        inputBox.onkeyup = inputEnter;
    };
    //append to the score display div in the HTML
    scoreDisp.append(showScore);
    storeScore();
};

