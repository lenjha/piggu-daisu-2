// Object to represent a die with the specified number of sides
class Die{
  constructor(sides){
    this.numSides = sides;
    this.result;
  }

  //generates a random number between one and the die's number of sides
  roll(){
    this.result = Math.floor(Math.random() * this.numSides) + 1;
    return this.result;
  }
};

exports.dieModule = Die;
