const HELPERS = require('core.helpers');

const CREEPS = {

    new: (spawn, body, name, role, respawn, assignments) => (
        Game.spawns[spawn].createCreep(body, name, { role, body, spawn, respawn, assignments })
    ),

    create: (creepName, role, body, spawnName) => {
        const result = CREEPS.new(spawnName, body, creepName, role, true, null);

        if(HELPERS.isError(result)) {
            console.log("[ERROR] Creep generation", result);
        } else {
            console.log("[CREEP] New creep : "+creepName);
        }

        return result;
    },

    respawn: (creepName, creep) => {
        const result = CREEPS.new(creep.spawn, creep.body, creepName, creep.role, true, creep.assignments);

        if(HELPERS.isError(result)) {
            console.log("[ERROR] Creep regeneration", result);
        } else {
            console.log("[CREEP] Creep respawn : "+creepName);
        }

        return result;
    },

    getCount: (spawnName, role) => {
        return _.filter(Game.creeps, c => c.memory.spawn == spawnName && c.memory.role == role).length;
    },

};

module.exports = CREEPS;
