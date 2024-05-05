const remaining =document.querySelector(".lastResult");
const guesses=document.querySelector(".guesses");
const msg=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultPars")
let chances=10;
const form=document.querySelector(".form");
// console.log(form);

//generate a random number between 1 to 100
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);
//get value from the input field
const input=form.elements['guessField']
  
const submit = document.querySelector("#subt");

const p=document.createElement('p')
//create
let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
  submit = document.addEventListener('click',(e)=>{
e.preventDefault();
const guess=parseInt(input.value)
console.log(guess)
validateGuess(guess);
  })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert('enter valid number')
  
}
else if(guess<1){
  alert('enter valid number')
}
else if(guess>100){
  alert('enter valid number 100 se kam')
}
else{
  prevGuess.push(guess)
}
if(numGuess==11){
  displayGuess(guess)
  displayMsg(`game over and numb was ${randomNumber}`)
  endGame();
}

}
function checkGuess(guess){
  //
}
function displayGuess(guess){
  //
}
function newGame(){

}
function endGame(){

}
function displayMsg(msg){
  //  
}