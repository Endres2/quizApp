var currentIndex = 0;
var time = 100;
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionCard = document.querySelector(".question-card");
var endScreen = document.querySelector("#end-screen");
var questionTitle = document.querySelector("#questionTitle");
var timer = document.querySelector("#time");
var listCard = document.querySelector("ul");
var listItems = document.querySelector(".listOption");
var answerChoice = document.querySelectorAll(".answer");
var option1 = document.querySelector(".option1")
var option2 = document.querySelector(".option2")
var option3 = document.querySelector(".option3")
var option4 = document.querySelector(".option4")
var finalScore = document.querySelector("#final-score");
var whatAnswer = document.querySelector("#answer");
var score;
//After clicking button Start the quiz starts
startBtn.addEventListener("click", function(event){
    //Removes starts screen
    startScreen.setAttribute("class","hidden");
    //Shows question Screen
    questionCard.removeAttribute("class","hidden");
    //gets the value of the time
    timer.textContent = time;
    //Starts timer
    startTimer();
    //Loads questions
    getQuestions();
});
//First time loading this method populates question title and options using global index
var getQuestions = function(){
    
    questionTitle.textContent = questions[currentIndex].title;
    option1.textContent =  questions[currentIndex].choice[0];
    option2.textContent =  questions[currentIndex].choice[1];
    option3.textContent =  questions[currentIndex].choice[2];
    option4.textContent =  questions[currentIndex].choice[3];

    
}
//Event listener is used to select options
var checkAnswer = function(event){
    //Variables to define the answer choice selected and the answer of the current question
    var guess = event.target.textContent;
    var answer = questions[currentIndex].answer;
    //If there is still time and you have not reach the las question
    if( time> 0 && currentIndex<questions.length-1){
        //Checks for correct guesss, prints if correct
        if(guess === answer){
            whatAnswer.textContent = "Correct!";
            console.log( whatAnswer);
        }
        //Checks for wrong answer also included print for wron
        else{
            whatAnswer.textContent = "Incorrect :(";
            console.log( whatAnswer);
            //Checks to end game if time is less than 10 since every wron question takes 10 secons from timer
            if(time <10){
                score = 0;
                time = 0;
                endGame();
            }
            //Else reduce time by 10 for wrong answer while still having more than 10 seconds
            else{
                time = time-10;
            }
            
        }
        //Empties title and questions
        questionTitle.textContent = "";
        option1.textContent =  "";
        option2.textContent =  "";
        option3.textContent = "";
        option4.textContent = "";
        
        //increases global index by 1
        currentIndex++;
        //Call to get the next set of questions
        getQuestions();
    }
    //if time is less than 0 or you ran out of questions end game
    else{
        score = time;
        console.log(score);
        time = 0;
        endGame();
        return
    }
}

//Timer function, displays counter and takes a secong off 
var startTimer = function(){
    
    timerCount = setInterval(function(){
        
        timer.textContent = time;
        if(time > 0){
            time--;
            timer.textContent = time;
            whatAnswer.textContent = "";
        }
        else{
            clearInterval(timerCount);
            endGame();
        }
        
    }, 1000);
    
}



//End of game hides all elemetns but end screen where user can enter their name
var endGame  = function(){
    questionCard.setAttribute("class","hidden");
    endScreen.removeAttribute("class","hidden");
    finalScore.textContent = score;
}
//**********************EVENT LISTENERS *********************************/

option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);

//************************SCORE BOARD**************************************/

var subBtn = document.querySelector("#submit");
var playerName = document.querySelector("#name");
var playerList = document.querySelector("#player-list");

//When submit is clicked we log the score and the player name in an object player score, and push this object to an array Log players
subBtn.addEventListener("click", function(event){
    var logPlayers = JSON.parse(window.localStorage.getItem("scores")) || [];
    var playerScore = {
        name: playerName.value.trim(),
        endScore: score 
    };
    
    //Stringify the object
    logPlayers.push(playerScore);
    localStorage.setItem("scores",JSON.stringify(logPlayers));
    
});
