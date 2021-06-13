const Helpers = require('./helpers');

module.exports = class Match {
  constructor(warriorOne, warriorTwo ,maxNumberOfRounds) {
    this._warriorOne = warriorOne;
    this._warriorTwo = warriorTwo;
    this._lastAttackTurn = 0;
    this._round = 1;
    this._maxNumberOfRounds = maxNumberOfRounds;
  }

  attackTurn(){
    switch (this._lastAttackTurn) {
      case 0 :
        return Helpers.getRandomInt(1,2);
      case 1 :
        return 2 ;
      case 2 :
        return 1 ;
    }
  }

  setLastAttachTurn(playerNumber){
      this._lastAttackTurn = playerNumber;
  }

  getAttackingWarrior(attackTurn){
      return (attackTurn === 1) ? this._warriorOne : this._warriorTwo ;
  }

  getDefenderWarrior(attackTurn){
      return (attackTurn === 1) ? this._warriorTwo : this._warriorOne  ;
  }

  checkIfMatchEnded(warrior){
      return warrior._lives <= 0 || this._round === this._maxNumberOfRounds;
  }

  incrementRoundByOne(){
      this._round = this._round++;
  }

  whoWonMatch(){
    const warriorOneHP = this._warriorOne._lives;
    const warriorTwoHP = this._warriorTwo._lives;
    if(warriorOneHP < warriorTwoHP){
      return this._warriorTwo._name;
    }else if (warriorTwoHP < warriorOneHP){
        return this._warriorOne._name;
    }else{
        return "It's a tie !";
    }

  }

  turnAttack(AttackingWarrior ,DefenderWarrior){
    let attackPoints = AttackingWarrior.doAttack();
    let defensePoints = DefenderWarrior.getDefense();
    let damage = attackPoints - defensePoints;
    DefenderWarrior.receiveDamage(damage);
    return {"damageDealt" : damage , "attackingPoints" : attackPoints};
  }

  printMatchUpdates(AttackingWarrior ,DefenderWarrior ,turnSummary){
    console.log('\n');
    console.log(`${AttackingWarrior._name} attacked with ${turnSummary.attackingPoints} points.`)
    console.log(`${DefenderWarrior._name} has ${DefenderWarrior._lives} HP left.`)
    console.log(`And finally damage dealt is ${turnSummary.damageDealt}` ,'\n')
  }

}

