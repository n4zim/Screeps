//require('core.respawn')();

const queue = require('core.queue');
const _ = require('lodash');

module.exports = () => {
    _.forIn(Game.spawns, (spawn, name) => {
        queue.run(name);
    });
};
