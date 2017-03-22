const CREEP = require('core.creep');
const HELPERS = require('core.helpers');
const ROLES = require('data.roles');
const PARAMS = require("data.parameters");
const _ = require('lodash');

const QUEUE = {

    init: spawn => {
        let init = false;

        if(!Memory.queue) {
            Memory.queue = {};
            init = true;
        }

        if(!Memory.queue[spawn]) {
            Memory.queue[spawn] = [];
            init = true;
        }

        if(init && PARAMS.DEBUG) console.log("[DEBUG] Queue initialization for spawn "+spawn);
        return init;
    },

    add: (role, spawn, units = 1) => {
        QUEUE.init(spawn);

        let creep = _.cloneDeep(ROLES[role]);
        if(typeof(spawn)) creep.spawn = spawn;
        creep.role = role;

        for(let unit = 0; unit < units; unit++) Memory.queue[spawn].push(creep);
        if(PARAMS.DEBUG) console.log("[DEBUG] Pushing on queue "+units+" new "+role+" creep in "+spawn);
    },

    run: spawn => {
        QUEUE.init(spawn);

        const creep = Memory.queue[spawn][0];
        if(creep) {
            const result = CREEP.create(creep.role, creep.body, creep.spawn);
            if(!HELPERS.isError(result)) {
                Memory.queue[spawn].splice(0, 1);
                return result;
            }
        }
        return null;
    },

};

module.exports = QUEUE;
