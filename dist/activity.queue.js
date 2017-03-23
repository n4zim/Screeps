const QUEUE = require('core.queue');

module.exports = (STAGE, ACTIVITY) => {

    _.forIn(Game.spawns, spawn => {
        QUEUE.run(spawn);
    });

};
