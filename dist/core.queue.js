const CREEP = require('core.creep');
const HELPERS = require('core.helpers');
const ROLES = require('data.roles');
const PARAMS = require("data.parameters");

const QUEUE = {

    init: spawnName => {
        if(!Memory.queue) {
            Memory.queue = {};
            console.log("[QUEUE] Memory queue created");
        }
        if(!Memory.queue[spawnName]) {
            Memory.queue[spawnName] = { creeps: [], counts: {} };
            console.log("[QUEUE] Queue initialization for spawn "+spawnName);
        }
    },

    add: (role, spawnName, units = 1) => {
        let creep = _.cloneDeep(ROLES[role]);
        for(let unit = 0; unit < units; unit++) {
            let spawnQueue = Memory.queue[spawnName];
            spawnQueue.creeps.push(creep);
            spawnQueue.counts[role]++;
        }
        if(PARAMS.DEBUG) console.log("[DEBUG] Pushing on queue "+units+" new "+role+" creep(s) in "+spawnName);
    },

    run: spawnName => {
        const creep = Memory.queue[spawnName].creeps[0];
        if(creep) {
            let spawnQueue = Memory.queue[spawnName], role = creep.role;
            if(typeof spawnQueue.counts[role] === 'undefined') spawnQueue.counts[role] = 0;
            const name = role + spawnQueue.counts[role];

            const result = CREEP.create(name, role, creep.body, spawnName);
            if(!HELPERS.isError(result)) {
                spawnQueue.counts[role]++;
                spawnQueue.queue.splice(0, 1);
            }
        }
    },

};

module.exports = QUEUE;
