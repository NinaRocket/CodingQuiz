# Coding Quiz 

Description: This web application used vanilla javascript to create a quiz related to javascript coding topics. The user will answer 6 questions, if the answer is correct, a point is added. If the answer is incorrect, no points are awarded and 20 seconds are subtracted from the clock. 

When the user goes to the deployed link: [Here](https://ninarocket.github.io/CodingQuiz/)

They are presented with the home screen:

![](/Assets/Homescreen.png)

When the user clicks the Start button, the quiz displays and the timer starts, they have 180 seconds to complete the quiz. The quiz will end when either all questions are answered or if the timer runs out.

![](/Assets/questions.png)

The user has answered all the questions before the time was up. Because this is the first time the user has played, there are no scores saved in local storage so they are given the opportunity to add their initals to save the high score.

![](/Assets/firstround.png)

When the user presses the enter key, they are shown their initials and score, it is now saved to local storage:

![](/Assets/initialssaved.png)

The next user will hit the home page "BestTest Inc" on the top left corner to play. Unfortunately, they did not score higher than NR's stored scored:

![](/Assets/nothighsorry.png)

They try again. 
