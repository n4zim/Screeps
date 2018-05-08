const HELPERS = require('core.helpers');
const QUEUE = require('core.queue');

module.exports = (NAME, ACTIVITY) => {
    switch(ACTIVITY.stage) {

        case 0: // Sources list
            ACTIVITY.sources = {};
            _.forIn(Game.spawns, spawn => {
                ACTIVITY.sources[spawn.name] = Game.spawns[spawn.name].room.find(FIND_SOURCES).map(s => s.id);
            });
            HELPERS.nextActivityStage(NAME);
            break;

        case 1: // Queue creeps
            ACTIVITY.total = 0;
            _.forIn(ACTIVITY.sources, (sources, spawnName) => {
                QUEUE.init(spawnName);
                let length = sources.length;
                QUEUE.add('harvester', spawnName, length);
                ACTIVITY.total += length;
            });
            HELPERS.initActivity('loop');
            HELPERS.nextActivityStage(NAME);
            break;

        case 2: // Creep assignation
            if(ACTIVITY.total === 0) {
                HELPERS.nextActivityStage(NAME);
            } else {
                const availableCreeps = _.filter(Game.creeps, { memory: { role: 'harvester', assignments: null } });
                if(availableCreeps) {
                    _.forIn(availableCreeps, creep => {
                        creep.memory.assignments = { source: ACTIVITY.sources[creep.memory.spawn].shift() };
                        ACTIVITY.total--;
                    });
                }
            }
            break;

        case 3: // All creeps are assigned
            HELPERS.removeActivity(NAME);
            break;
    }
};
