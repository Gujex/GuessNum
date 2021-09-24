var check = document.getElementById('check');

var score = 20;
var highscore = document.querySelector('.label-highscore');
var guessNumber = document.querySelector('.guess').value;
var message = document.querySelector('.message');

var showScore = document.querySelector('.score').textContent = score;

var randomNumber = Math.floor(Math.random() *20 +1);




check.addEventListener('click', function() {
    

var guessNumber = document.querySelector('.guess').value;


    
   
    
        if (!guessNumber || guessNumber > 20 || guessNumber < 1 ) {
        Swal.fire(`Please enter a number - Between 1 and 20`);
    }
 

    else if (guessNumber > randomNumber) {
        message.textContent = "too high!!"
        score--;
        document.querySelector('.score').textContent = score;
    }

    else if (guessNumber < randomNumber) {
        message.textContent = "too Low!!"
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if (score < 1) {
        message.textContent = "You lost the game!!"
    }
    else {
        message.textContent = "Correct Number!"
        document.body.style.background = 'green'
        document.querySelector('.highscore').textContent = score;
        document.querySelector('.number').textContent = guessNumber;
        
    }



})







document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    var randomNumber = Math.floor(Math.random() *20 +1);
    message.textContent = "Start guessing";
    document.body.style.background = '#222';
    document.querySelector('.number').textContent = ' ? ';
    document.querySelector('.guess').textContent = ' ee';
    if(score > highscore) {
        document.querySelector('.highscore').textContent = score;
        
    }

})