const prompt = require('prompt');
const Arena = require("./arena.hanaboso");
const Warrior = require("./warrior.hanaboso");
let isFirstGame = true;
prompt.start();

const startNewGame = (arena = null)=> {
    prompt.get(['WarriorFirstName', 'WarriorSecondName' ,'ArenaName'], function (err, result) {
        if (err) return 1;

        const warrior1 = new Warrior( 40, 10,result.WarriorFirstName)
        warrior1.renderInfo();

        console.log('VS.');

        const warrior2 = new Warrior(40, 10 ,result.WarriorSecondName)
        warrior2.renderInfo();

        const arena = new Arena(result.ArenaName);

        prompt.getInput('numberOfRounds',function (err ,numberOfRounds) {
            const match = arena.startNewMatch(warrior1, warrior2, numberOfRounds);
            const results = arena.playMatch(match ,numberOfRounds);
            console.log(results);
        });


    });

}

startNewGame();

