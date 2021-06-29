var currentIndex = 0;
var time = 5/*questions.length *15*/;
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionCard = document.querySelector(".question-card");
var questionTitle = document.querySelector("#questionTitle");
var timer = document.querySelector("#time");
var listCard = document.querySelector("ul");
var listItems = document.querySelector(".listOption");
var answerChoice = document.querySelectorAll(".answer");
var option1 = document.querySelector(".option1")
var option2 = document.querySelector(".option2")
var option3 = document.querySelector(".option3")
var option4 = document.querySelector(".option4")

var startQuiz = function(){
    startScreen.setAttribute("class","hidden");
    questionCard.removeAttribute("class","hidden");
    timer.textContent = time;
    startTimer();
    getQuestions();
   
    

}
var getQuestions = function(){
    
    questionTitle.textContent = questions[currentIndex].title;
    option1.textContent =  questions[currentIndex].choice[0];
    option2.textContent =  questions[currentIndex].choice[1];
    option3.textContent =  questions[currentIndex].choice[2];
    option4.textContent =  questions[currentIndex].choice[3];

    
}

var checkAnswer = function(event){
    if( time> 0 && currentIndex<questions.length){
        questionTitle.textContent = "";
        option1.textContent =  "";
        option2.textContent =  "";
        option3.textContent = "";
        option4.textContent = "";
        currentIndex++;
        getQuestions();
    }
    else{
        //end game
        //take player to score board
        return
    }
}
var startTimer = function(){
    
    timerCount = setInterval(function(){
        
        timer.textContent = time;
        if(time > 0){
            time--;
            timer.textContent = time;
        }
        else{
            clearInterval(timerCount);
        }
        
    }, 1000);
    
    

    
}
startBtn.addEventListener("click", startQuiz);
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);
