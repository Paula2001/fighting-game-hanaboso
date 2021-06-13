const Match = require('./match.hanaboso');

module.exports = class Arena {

  constructor(arenaName) {
      this._matches = [];
      this._arenaName = arenaName;
  }

  startNewMatch(WarriorOne ,WarriorTwo ,numberOfRounds = 5){
      const match = new Match(WarriorOne,WarriorTwo ,numberOfRounds);
      this._matches.push(match);
      return match ;
  }

  playMatch(match, numberOfRounds){
      for (let i = 1; i <= numberOfRounds; i++) {
          let attackTurn = match.attackTurn();
          let AttackingWarrior = match.getAttackingWarrior(attackTurn);
          let DefenderWarrior = match.getDefenderWarrior(attackTurn);
          let turnSummary = match.turnAttack(AttackingWarrior ,DefenderWarrior);
          match.setLastAttachTurn(attackTurn);
          match.incrementRoundByOne();
          match.printMatchUpdates(AttackingWarrior , DefenderWarrior , turnSummary)
          if(match.checkIfMatchEnded(DefenderWarrior)){
              break;
          }
      }
      return match.whoWonMatch();
  }


  getArenaName(){
    return this._arenaName;
  }

}
