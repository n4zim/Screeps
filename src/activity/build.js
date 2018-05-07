const HELPERS = require('core.helpers');
const QUEUE = require('core.queue');

module.exports = (NAME, ACTIVITY) => {
    switch(ACTIVITY.stage) {

        case 0:
            _.forIn(Game.spawns, spawn => {
                QUEUE.add('builder', spawn.name);
            });
            HELPERS.nextActivityStage(NAME);
            break;

        case 1:
            HELPERS.removeActivity(NAME);
            break;

    }
};
