//Gets ul element from scores.html
var scoreList = document.getElementById("player-list") 

var renderScores = function(){
    //Parses and gets array of player objacts
    var scoreOfPlayer = JSON.parse(window.localStorage.getItem("scores")|| []);
    //For each element in the array create an h3 add the contents of the player object and append them to the page
    scoreOfPlayer.forEach(function(score){
        var h3 = document.createElement("h3");
        h3.textContent = score.name + " score: "+ score.endScore;
        scoreList.appendChild(h3);
    });

}
renderScores();