module.exports = class Record {
  constructor() {
    this._arenas = [];
    this._round = 0;
  }

  match(){
    return this._round;
  }

  getArenaRecord(arenaName){
    console.log("this is a test");
    //todo : Who win , The score of both , the time of the battle
  }

}
