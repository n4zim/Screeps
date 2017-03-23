const CREEPS = require('core.creeps');
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
        if(Memory.queue) {
            let creep = _.cloneDeep(ROLES[role]);
            for(let unit = 0; unit < units; unit++) Memory.queue[spawnName].creeps.push(creep);
            if(PARAMS.DEBUG) console.log("[DEBUG] Pushing on queue "+units+" new "+role+" creep(s) in "+spawnName);
        }
    },

    run: spawn => {
        if(Memory.queue && Memory.queue[spawn.name] && Memory.queue[spawn.name].creeps) {
            let spawnQueue = Memory.queue[spawn.name];
            const creep = spawnQueue.creeps[0];

            if(creep) {
                let cost = 0;
                _.forIn(creep.body, bodypart => { cost += BODYPART_COST[bodypart]; });

                if(cost <= spawn.energy) {
                    if(typeof spawnQueue.counts[creep.role] === 'undefined') spawnQueue.counts[creep.role] = 0;
                    const name = creep.role + '' + spawnQueue.counts[creep.role];

                    const result = CREEPS.create(name, creep.role, creep.body, spawn.name);
                    if(!HELPERS.isError(result)) {
                        spawnQueue.counts[creep.role]++;
                        spawnQueue.creeps.splice(0, 1);
                    }
                }
            }
        }
    },

    getCount: (spawnName, role) => {
        let count = 0;
        if(Memory.queue[spawnName] && Memory.queue[spawnName].creeps) {
            _.forIn(Memory.queue[spawnName].creeps, creep => {
                if(creep.role == role) count++;
            });
        }
        return count;

    },

};

module.exports = QUEUE;
