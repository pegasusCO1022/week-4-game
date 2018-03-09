// create variables to tie to html and create functions
var currentScore = 0;
var startingNum = 0;
var wins = 0;
var losses = 0;
var blueGem = Math.floor((Math.random()* 20) + 5);
var greenGem = Math.floor((Math.random()* 20) + 3);;
var redGem = Math.floor((Math.random()* 10) + 1);;
var yellowGem = Math.floor((Math.random()* 15) + 1);;

// Computer Generates random number variable and it appears in box
startingNum = Math.floor((Math.random()* 50) + 10);
$("#startingNumber").text(startingNum);
$("#playerScore").text(currentScore);



//Computer assigns random number to each button upon start
$("#blue").val(blueGem);
$("#red").val(redGem);
$("#yellow").val(yellowGem);
$("green").val(greenGem);

//Refresh starting number and clear current score function
function reset() {
    random = Math.floor(Math.random()* 50 + 10);
    $("#startingNumber").text(random);
    blueGem = Math.floor((Math.random()* 20) + 1);
    greenGem = Math.floor((Math.random()* 20) + 1);;
    redGem = Math.floor((Math.random()* 10) + 1);;
    yellowGem = Math.floor((Math.random()* 15) + 1);;
    currentScore = 0;
    $("#playerScore").text(currentScore);
}

//When user clicks on gem adds value to currentScore, writes text to page
// and resets numbers when player wins or loses
$("#blue").on("click", function() {
  currentScore += blueGem;
  if(currentScore === startingNum) {
    wins++
    $("#playerWins").text(" " + wins);
    reset();
    }
  if(currentScore > startingNum){
    losses++
    reset();
    $("#playerLosses").text(" " + losses);
    }

$("#playerScore").text(currentScore);
    
})

$("#yellow").on("click", function() {
    currentScore += yellowGem;
   
    if(currentScore === startingNum) {
        wins++
        $("#playerWins").text(" " + wins);
        reset();
        }
      if(currentScore > startingNum){
        losses++
        $("#playerLosses").text(" " + losses);
        reset();
        }
    $("#playerScore").text(currentScore);
})

$("#red").on("click", function() {
    currentScore += redGem;
    if(currentScore === startingNum) {
        wins++
        $("#playerWins").text(" " + wins);
        reset();
        }
      if(currentScore > startingNum){
        losses++
        $("#playerLosses").text(" " + losses);
        reset();
        }
    $("#playerScore").text(currentScore);
})

$("#green").on("click", function() {
    currentScore += greenGem;
    if(currentScore === startingNum) {
        wins++
        $("#playerWins").text(" " + wins);
        reset();
        }
      if(currentScore > startingNum){
        losses++
        $("#playerLosses").text(" " + losses);
        reset();
        }
    $("#playerScore").text(currentScore);
})

