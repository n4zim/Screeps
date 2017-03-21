const creep = require('core.creep');
const helpers = require('core.helpers');
const roles = require('data.roles');
const _ = require('lodash');

const DEBUG = true;

const queue = {

    init: spawn => {
        if(!Memory.spawns) Memory.spawns = {};
        Memory.spawns[spawn] = Memory.spawns[spawn] || {};
        Memory.spawns[spawn].queue = Memory.spawns[spawn].queue || [];
        if(DEBUG) console.log("[DEBUG] Queue Init");
    },

    add: (role, units = 1, spawn = 'HQ') => {
        if(DEBUG) console.log("[DEBUG] Adding " + units + " element(s) to queue...");
        for(let unit = 0; unit < units; unit++) queue.push(role, spawn);
    },

    push: (role, spawn = 'HQ') => {
        let args = _.cloneDeep(roles[role]);
        if(typeof(spawn)) args.spawn = spawn;
        args.type = role;
        if(DEBUG) console.log("[DEBUG] Queue Push");
        return queue.queue(args);
    },

    queue: args => {
        args.spawn = args.spawn || 'HQ';
        queue.init(args.spawn);
        if(DEBUG) console.log("[DEBUG] New Queue Entity");
        return Memory.spawns[args.spawn].queue.push(args);
    },

    exec: (spawn = 'HQ') => {
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

    status: (spawn = 'HQ') => {
        queue.init(spawn);
        return Memory.spawns[spawn].queue.length;
    },

};

module.exports = queue;
