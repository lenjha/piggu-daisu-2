//Player object definition
function Player(playerId){
  this.id = playerId;
  this.score = 0;
  this.turnTally = 0;
}

exports.playerModule = Player;
