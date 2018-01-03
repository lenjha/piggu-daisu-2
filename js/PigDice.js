//back-end bargain bin

//PigDice object definition
function PigDice(playerOne, playerTwo, die, endScore){
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.die = die;
  this.endScore = endScore;
  this.turn = true;
}
//
PigDice.prototype.currentPlayer = function(){
  if (this.turn){
    return this.playerOne;
  } else {
    return this.playerTwo;
  }
}

exports.pigDiceModule = PigDice;
