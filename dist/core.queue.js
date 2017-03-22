const creep = require('core.creep');
const helpers = require('core.helpers');
const roles = require('data.roles');
const params = require("data.parameters");
const _ = require('lodash');

const queue = {

    init: spawn => {
        if(!Memory.spawns) Memory.spawns = {};
        Memory.spawns[spawn] = Memory.spawns[spawn] || {};
        Memory.spawns[spawn].queue = Memory.spawns[spawn].queue || [];
        if(params.DEBUG) console.log("[DEBUG] Queue initialization");
    },

    add: (role, spawn, units = 1) => {
        if(params.DEBUG) console.log("[DEBUG] Adding " + units + " element(s) to queue...");

        let creep = _.cloneDeep(roles[role]);
        if(typeof(spawn)) creep.spawn = spawn;
        creep.role = role;

        queue.init(spawn);

        for(let unit = 0; unit < units; unit++) {
            if(params.DEBUG) console.log("[DEBUG] Pushing on queue a new "+role+" creep in "+spawn);
            Memory.spawns[spawn].queue.push(creep);
        }
    },

    run: spawn => {
        queue.init(spawn);
        const data = Memory.spawns[spawn].queue[0];
        if(data) {
            const result = creep.create(data.role, data.body, data.spawn);
            if(!helpers.isError(result)) {
                Memory.spawns[spawn].queue.splice(0, 1);
                return result;
            }
        }
        return null;
    },

};

module.exports = queue;
