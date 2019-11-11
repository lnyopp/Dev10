

var dieOne = document.getElementById("dieOne");
var dieTwo = document.getElementById("dieTwo");
var total = document.getElementById("total");
// let diceOne = "";
// let diceTwo = "";

var bet = document.getElementById("inputBet");
var saveBet = document.getElementById("startingBet");



myBtn.addEventListener('click', enterBet);

function enterBet(ev) {

  if (bet.value > 0) {
    saveBet.innerText = bet.value;
    bet.style.display = "none";
  }

  else {
    alert("please enter value greater than zero");
  }
};


myBtn.addEventListener('click', rollDice);

function rollDice(ev) {

  var diceOne = Math.floor(Math.random() * 6) + 1;
  var diceTwo = Math.floor(Math.random() * 6) + 1;
  var diceTotal = diceOne + diceTwo;



  total.innerHTML = diceTotal;

};


myBtn.addEventListener('click', count);

var counter = 0;
var totalClicks = document.getElementById('rollNum');

function count(ev) {

  counter++;

  totalClicks.innerHTML = counter;

};


myBtn.addEventListener('click', money);

function money() {

  if (diceTotal.value = 7) {
    cash =+4 ;
  } else {
    cash--;
  }
  console.log(cash);
};

do {
  function rollDice()
  function count();
}
while (saveBet.value > 0);

