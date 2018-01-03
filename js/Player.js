//Player object definition
class Player{
  constructor(playerId){
    //string that holds the player's name
    this.id = playerId;
    //player's total banked points
    this.score = 0;
    //player's unbanked point tally for the current turn
    this.turnTally = 0;
  }
}
exports.playerModule = Player;
