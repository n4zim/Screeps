const HELPERS = require('core.helpers');
const QUEUE = require('core.queue');

module.exports = (NAME, ACTIVITY) => {
    switch(ACTIVITY.stage) {

        case 0: // Sources list
           let sources = {};
            _.forIn(Game.spawns, spawn => {
                sources[spawn.name] = Game.spawns[spawn.name].room.find(FIND_SOURCES).map(s => s.id);
            });
            HELPERS.setActivityData(NAME, 'sources', sources);
            HELPERS.increaseActivityStage(NAME);
            break;

        case 1: // Queue creeps
            let total = 0;
            _.forIn(HELPERS.getActivityData(NAME, 'sources'), (sources, spawnName) => {
                QUEUE.init(spawnName);
                let length = sources.length;
                QUEUE.add('harvester', spawnName, length);
                total += length;
            });
            HELPERS.setActivityData(NAME, 'total', total);
            HELPERS.initActivity('queue');
            HELPERS.increaseActivityStage(NAME);
            break;

        case 2: // Creep assignation
            if(HELPERS.getActivityData(NAME, 'total') === 0) {
                HELPERS.increaseActivityStage(NAME);
            } else {

            }
            break;

        case 3: // All creeps are assigned
            //HELPERS.removeActivity(NAME);
            break;
    }
};
