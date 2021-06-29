# quizApp
This application utilizes JavaScript to generate questions, implement a timer, and it implements the usage of local memory to store scores.


## Description
This application uses JavaScript to function on an html page as a script, the user takes a quiz about me. The user is presented with a start screen, some questions, and a scoreboard to log in their attempts. This quiz is timed and the less time you take the higher your score will be. You will be penalized with a 10 second deduction for every wrong answer.

## Usage
Click on start to begin answering questions. You are presented with 4 choices on each question, and you would have to click on each to answer. At the end you are presented with an input where you can write your name to track current and previous attempts. In the first page the user can visit the scoreboard by clicking on the button. Scoreboard will be empty if no attempts have been made to take the quiz.

## Algorithm/Tools
In this project JavaScript was implemented to create the functionality of the website; among the elements implemented we have:

### Query Selectors
Multiple instances of selectors were used either to listen for an event or to dynamically generate elements in the DOM of the website.

### Events
Event listeners were implemented to listen to clicks and to retrieve attributes from certain elements used. 

### Local Storage
JSON stringify and parse methods were used when saving an object and to retrieve said object to collect the data that would be show in the Scoreboard page.

### CSS
CSS Styling was also applied to the document to have a more aesthetic view for the project.


## Page URL
https://endres2.github.io/quizApp/
