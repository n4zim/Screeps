require('core.respawn')();

const params = require('data.parameters');
const queue = require('core.queue');

module.exports = () => {
    for(let name in Game.spawns) {
        //noinspection JSUnfilteredForInLoop
        const spawn = Game.spawns[name];
        queue.run(spawn);
    }
};
