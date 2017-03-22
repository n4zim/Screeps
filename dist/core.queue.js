const CREEP = require('core.creep');
const HELPERS = require('core.helpers');
const ROLES = require('data.roles');
const PARAMS = require("data.parameters");

const QUEUE = {

    init: spawn => {
        if(typeof spawn.queue === 'undefined') {
            Game.spawns[spawn.name].queue = {};
            Game.spawns[spawn.name].total = 0;
            if(PARAMS.DEBUG) console.log("[DEBUG] Queue initialization for spawn "+spawn.name);
        }
    },

    add: (role, spawn, units = 1) => {
        let creep = _.cloneDeep(ROLES[role]);
        for(let unit = 0; unit < units; unit++) Game.spawns[spawn.name].queue.push(creep);
        if(PARAMS.DEBUG) console.log("[DEBUG] Pushing on queue "+units+" new "+role+" creep(s) in "+spawn.name);
    },

    run: spawn => {
        const creep = spawn.queue[0];
        if(creep) {
            const result = CREEP.create(creep.role, creep.body, spawn);
            if(!HELPERS.isError(result)) Game.spawns[spawn.name].queue.splice(0, 1);
        }
    },

};

module.exports = QUEUE;
