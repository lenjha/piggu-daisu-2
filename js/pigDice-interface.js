const PigDice = require('./../js/PigDice.js').pigDiceModule;

//
// function checkRoll(player, result) {
//   if (result === 1) {
//     player.turnTally = 0;
//     game.turn = !game.turn;
//     $("#player-turn").text(game.currentPlayer().id + "'s turn");
//   } else {
//     player.turnTally += result;
//   }
// }

function addScore() {
  if (game.turn) {
    $(".player1 p").text(game.playerOne.score);
  } else {
    $(".player2 p").text(game.playerTwo.score);
  }
};



//helper method to clear displayed scores and player turn name
var clearScores = function(){
  $("#roll-result").text("");
  $("#tally").text("");
  $(".player1 p").text("000");
  $(".player2 p").text("000");
  $("#player-turn").text("");
}

//GAME SETUP
var playerOne = 'Player One';
var playerTwo = 'Player B';
var game;

$(document).ready(function(){
  game = new PigDice(playerOne, playerTwo);
  $("#game-start").submit(function(event){
    event.preventDefault();
    //set player names
    var p1 = $("#player-one-name").val();
    var p2 = $("#player-two-name").val();

    //if name field is not empty
    if (p1 !== ""){
      //assign submitted name to player one in game
      game.playerOne.id = p1;
      //set scoreboard name for player one
      $("#p1-name-board").text(p1);
    }
    //if name field is not empty
    if (p2 !== ""){
      //assign submitted name to player two in game
      game.playerTwo.id = p2;
      //set scoreboard name for player two
      $("#p2-name-board").text(p2);
    }
    //set max score
    var goal = parseInt($("#score-goal").val());
    if (goal){
      game.endScore = goal;
    }
    $(".form-container").hide();
    $(".hidden").toggleClass('hidden');
    game.playerOne.score = 0;
    game.playerTwo.score = 0;
    game.playerOne.turnTally = 0;
    game.playerTwo.turnTally = 0;
    clearScores();
    $("#player-turn").text(game.currentPlayer().id + "'s turn");
  })

  // $("#player-turn").text(game.currentPlayer().id + "'s turn");
  //when the roll button is clicked
  $("#roll").click(function(){
    var currentPlayer = game.currentPlayer();
    //roll the die
    game.die.roll();
    //display the result of the roll
    $("#roll-result").text(game.die.result);
    //add the result of the roll to player tally
    // playerOne.turnTally += pigDie.result;
    var element = $('#player-turn');
    game.checkRoll(element, currentPlayer, game.die.result);
    //display the new total of player's Turn Tally
    $("#tally").text(currentPlayer.turnTally);
    if ( (currentPlayer.turnTally + currentPlayer.score) >= game.endScore) {
      //show end screen
      $(".end-screen h1").text(game.currentPlayer().id + " is the winner!");
      $(".end-screen").show();
      $(".hidden").hide();
    }
  });

  //when the replay button is clicked after a game has concluded
  $("#replay").click(function(){

    $(".form-container").show();
    $(".end-screen").hide();

  });

  //when the hold button is clicked
  $("#hold").click(function(){
    //add tally points to current player's score
    var currentPlayer = game.currentPlayer();
    currentPlayer.score += currentPlayer.turnTally;
    addScore();
    currentPlayer.turnTally = 0;
    $("#tally").text(currentPlayer.turnTally);
    //toggle game turn to the other player
    game.turn = !game.turn;
    $("#player-turn").text(game.currentPlayer().id + "'s turn");
  })



});
