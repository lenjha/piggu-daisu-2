const PigDice = require('./../js/PigDice.js').pigDiceModule;

describe ("PigDice", function() {
  var testDice;

  beforeEach(function(){
    testDice = new PigDice("Yennifer", "Geralt", 10);
  });

  it("should test whether the game is instantiated", function() {
    // var testDice = new PigDice("Yennifer", "Geralt", 10);
    expect(testDice.playerOne.id).toEqual("Yennifer");
    expect(testDice.playerTwo.id).toEqual("Geralt");
    expect(testDice.endScore).toEqual(10);
  });

  it("should yield an integer when the die rolls", function() {
    testDice.die.roll();
    expect(testDice.die.result).not.toEqual(7);
    expect(testDice.die.result).toMatch(/[1-6]/);
  });

  it("should return playerOne if turn flag is true and player Two if turn flag is false", function(){
    testDice.turn = true;
    expect(testDice.currentPlayer()).toEqual(testDice.playerOne);
    testDice.turn = false;
    expect(testDice.currentPlayer()).toEqual(testDice.playerTwo);
  });

});
