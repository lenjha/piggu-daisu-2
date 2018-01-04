const Die = require('./../js/Die.js').dieModule;
const Player = require('./../js/Player.js').playerModule;
//PigDice object definition
class PigDice{
  constructor(playerOneName, playerTwoName, endScore){
    this.playerOne = new Player(playerOneName);
    this.playerTwo = new Player(playerTwoName);
    this.die = new Die(6);
    this.endScore = endScore || 100;
    this.turn = true;
  };
  //returns the player whose turn is currently active
  currentPlayer(){
    if (this.turn){
      return this.playerOne;
    } else {
      return this.playerTwo;
    }
  };

  checkRoll(element, player, result){
    if (result === 1) {
      player.turnTally = 0;
      this.turn = !this.turn;
      element.text(this.currentPlayer().id + "'s turn");
    } else {
      player.turnTally += result;
    }
  }

  testGarbage(){
    if (false) {
      return 'computer is broken';
    } else {
      return 'you did it';
    }
  }
};
//

exports.pigDiceModule = PigDice;
