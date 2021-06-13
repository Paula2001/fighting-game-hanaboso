class Warrior {
  constructor(attack, defense ,name) {
    this._lives = 100;
    this._name = name;
    this._attack = attack;
    this._defense = defense;
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

  setWarriorLive(livePoints){
    this._lives = livePoints;
  }

  receiveDamage(damage) {
    this._lives -= damage;
  }

  renderInfo() {
    console.log(`Lives: ${this.lives}`);
    console.log(`Attack: ${this.attack}`);
    console.log(`Defense: ${this.defense}`);
  }

  doAttack(defender) {
    // not implemented yet
  }

}

/*
// Example of possible usage after implementation
const warrior1 = new Warrior('Chuck Norris', 40, 10)
warrior1.renderInfo();

console.log('VS.');

const warrior2 = new Warrior('Rambo', 40, 10)
warrior2.renderInfo();

const arena = new Arena();
arena.match(warrior1, warrior2, 5);
*/
