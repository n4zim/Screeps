const HELPERS = require('core.helpers');

const CREEPS = {

    create: (creepName, role, body, spawnName) => {
        const result = Game.spawns[spawnName].createCreep(
            body,
            creepName,
            {
                role,
                body,
                spawn: spawnName,
                respawn: true,
                assignments: null
            }
        );

        if(HELPERS.isError(result)) {
            console.log("[ERROR] Creep generation", result);
        } else {
            console.log("[CREEP] New creep : "+creepName);
        }

        return result;
    },

    getCount: (spawnName, role) => {
        return _.filter(Game.creeps, c => c.memory.spawn == spawnName && c.memory.role == role).length;
    },

};

module.exports = CREEPS;
