var scoreList = document.getElementById("player-list") 

var renderScores = function(){
   var scoreOfPlayer = JSON.parse(window.localStorage.getItem("scores")|| []);
    console.log(scoreOfPlayer);
    scoreOfPlayer.forEach(function(score){
        var h3 = document.createElement("h3");
        h3.textContent = score.name + " score: "+ score.endScore;
        scoreList.appendChild(h3);
    });

}
renderScores();