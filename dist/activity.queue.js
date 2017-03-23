const QUEUE = require('core.queue');

module.exports = (NAME, ACTIVITY) => {

    _.forIn(Game.spawns, spawn => {
        QUEUE.run(spawn);
    });

};
