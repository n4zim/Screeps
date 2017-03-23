const HELPERS = require('core.helpers');
const QUEUE = require('core.queue');

let sources = {};
let total = 0;

module.exports = (STAGE, ACTIVITY) => {

    switch(STAGE) {

        case 0: // Sources list
            _.forIn(Game.spawns, spawn => {
                sources[spawn.name] = Game.spawns[spawn.name].room.find(FIND_SOURCES);
            });
            HELPERS.increaseActivityStage(ACTIVITY);
            break;

        case 1: // Queue creeps
            _.forIn(sources, (sources, spawnName) => {
                QUEUE.init(spawnName);
                let length = sources.length;
                QUEUE.add('harvester', spawnName, length);
                total += length;
            });
            HELPERS.initActivity('queue');
            HELPERS.increaseActivityStage(ACTIVITY);
            break;

        case 2: // Creep assignation
            if(total === 0) {
                HELPERS.increaseActivityStage(ACTIVITY);
            } else {

            }
            break;

        case 3: // All creeps are assigned
            HELPERS.removeActivity(ACTIVITY);
            break;
    }

};
