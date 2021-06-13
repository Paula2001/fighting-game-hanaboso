module.exports = class Arena {
  constructor(warriorOne, warriorTwo ,arenaName) {
    this._warriorOne = warriorOne;
    this._warriorTwo = warriorTwo;
    this._arenaName = arenaName;
    this._round = 0;
  }

  match(){
    return this._round;
  }

  getResults(){
    console.log("this is a test");
    //todo : Who win , The score of both , the time of the battle
  }

}
