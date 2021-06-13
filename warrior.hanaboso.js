const Helpers = require('./helpers');

module.exports = class Warrior {
  constructor(attack, defense ,name) {
    this._lives = 100;
    this._initLivesValue = 100;
    this._name = name;
    this._attack = attack;
    this._defense = defense;
    this._usedBerserkrMode = false;
  }

  getName(){
    return this._name;
  }

  getLives() {
    return this._lives;
  }

  getAttack() {
    return this._attack;
  }

  getDefense() {
    return this._defense;
  }

  receiveDamage(damage) {
    this._lives -= damage;
  }

  renderInfo() {
    console.log(`Name : ${this._name}`);
    console.log(`Lives : ${this._lives}`);
    console.log(`Attack : ${this._attack}`);
    console.log(`Defense : ${this._defense}`);
  }

  doAttack() {
    let diceRoll = Helpers.getRandomInt(1,6);
    if(this.isInBerserkrMode() && !this._usedBerserkrMode){
      console.log(`${this._name} used berserkr mode`)
      diceRoll *= 3 ;
      this._usedBerserkrMode = true;
    }
    return this._attack + diceRoll;
  }

  isInBerserkrMode(){
    const halfHealth = this._initLivesValue / 2;
    return halfHealth > this._lives;
  }


}