const remaining = document.querySelector(".lastResult");
const guesses = document.querySelector(".guesses");
const msg = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
let chances = 10;
const form = document.querySelector(".form");
// console.log(form);

//generate a random number between 1 to 100
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
//get value from the input field
const input = document.querySelector('#guessField');
// const input = form.elements["guessField"];

const submit = document.querySelector("#subt");

const p = document.createElement("p");
//create
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function(e){
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validateGuess(guess);
    // checkGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("enter valid number");
  } else if (guess < 1) {
    alert("enter valid number");
  } else if (guess > 100) {
    alert("enter valid number 100 se kam");
  } else {
    prevGuess.push(guess);
  
  if (numGuess === 11) {
    displayGuess(guess);
    displayMsg(`game over and number was ${randomNumber}`);
    endGame();
  }
else{
  displayGuess(guess);
  checkGuess(guess);
}}
}
function checkGuess(guess) {
  //
  if(guess===randomNumber) {
    displayGuess(guess);
    displayMsg(`you're right `);
    endGame();

  }
  else if (guess<randomNumber) {
    displayMsg(`your guess is less than actual answer`)
  }
  else if(guess>randomNumber) {
    displayMsg(`your guess is more than actual number`)
  }

}
function displayGuess(guess) {
  input.value="";
  guesses.innerHTML+=`  ${guess}  `;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}
function newGame() {
  const newGameBtn=document.querySelector("#newGame");
  newGameBtn.addEventListener('click',function(e){
     randomNumber = Math.floor(Math.random() * 100);
     prevGuess=[];
     numGuess=1;
     guesses.innerHTML='';
     remaining.innerHTML=`${11-numGuess}`;
     input.removeAttribute('disabled');
     startOver.removeChild(p);   
    playGame=true;

  })
}
function endGame() {
  input.value="";
  input.setAttribute('diabled','')//diabled in key value pair
  p.classList.add('button');
  p.innerHTML=`<h3 id="newGame">Start new Game </h2>`;
  startOver.appendChild(p);
  playGame=false;  
  newGame();
}
function displayMsg(msg) {
  //
  msg.innerHTML=`<h2>${msg}</h2>`
}
