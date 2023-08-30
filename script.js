'use strict';

// Target HTML ele...
const restart = document.querySelector('.again');
const secretNumber = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkbtn = document.querySelector('.check');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
const score = document.querySelector('.score');


// Starting position
score.textContent = 20;
let number = Math.trunc(Math.random()*20) +1;


// Events
checkbtn.addEventListener('click', checked);
restart.addEventListener('click', reset);

// event Functions...
function checked(){
 if(score.textContent > 1){
  if(+guessInput.value === number){
    message.textContent = `Correct number🎉`;
    document.body.style = ' background-color: #60b347'
    secretNumber.textContent = number;
    if(highScore.textContent < score.textContent){
        highScore.textContent = score.textContent;
    }
  } else if(+guessInput.value > number){
    message.textContent = 'To High 📈'
    score.textContent--;
  } else if(+guessInput.value < number){
    message.textContent = 'To Low 📉'
    score.textContent--;
  }
 } else {
    score.textContent = 0;
    message.textContent = `Sorry You Lose 😒🤦‍♀️`
 }
}


function reset(){
    document.body.style = ' background-color: #222';
    message.textContent = `Start guessing...`;
    secretNumber.textContent = '?';
    highScore.textContent;
    score.textContent = 20;
    number = Math.trunc(Math.random()*20) +1;
    guessInput.value = ''
}


