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
                respawn: true
            }
        );

        if(HELPERS.isError(result)) {
            //console.log("[ERROR] Creep generation", result);
        } else {
            console.log("[CREEP] New creep : "+creepName);
        }

        return result;
    },

    getCount: (spawnName, role) => {
        let count = 0;
        _.forIn(Game.creeps, creep => {
            if(creep.memory.spawn = spawnName && creep.memory.role == role) {
                count++;
            }
        });
        return count;
    },

};

module.exports = CREEPS;
