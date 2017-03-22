const HELPERS = require('core.helpers');

const CREEP = {

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
            console.log("[ERROR] Creep generation", result);
        } else {
            console.log("[CREEP] New creep : "+name);
        }

        return result;
    },

    getCount: role => {
        return 1;
    },

};

module.exports = CREEP;
