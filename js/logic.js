var currentIndex = 0;
var time = 5/*questions.length *15*/;
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questionCard = document.querySelector(".question-card");


var timer = document.querySelector("#time");



var startQuiz = function(){
    startScreen.setAttribute("class","hidden");
    questionCard.removeAttribute("class","hidden");
    timer.textContent = time;
    startTimer();
    getQuestions();
    console.log(questions);
    console.log(questions.length);
    console.log(questions[0].title);
    console.log(questions[0].choice[0]);
    console.log(questions.answer);
}
var getQuestions = function(event){
    var questionTitle = document.querySelector("#questionTitle");
    var options = document.querySelector("#choices");
    questionTitle.textContent = questions[currentIndex].title+"/n";
    questionTitle.innerHTML+= (  options.textContent = questions[currentIndex].choice[0]+"/n");
    questionTitle.innerHTML+= ( options.textContent = questions[currentIndex].choice[1]+"/n");
    questionTitle.innerHTML+= ( options.textContent = questions[currentIndex].choice[2]+"/n");
    questionTitle.innerHTML+= ( options.textContent = questions[currentIndex].choice[3]+"/n");
    document.addEventListener("click", function(event){
        var clickOnOption = event.options;
        if(clickOnOption){
            currentIndex++;
        }
    });
}

var checkAnswer = function(){
    return true;
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

