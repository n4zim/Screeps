const HELPERS = require('core.helpers');

const CREEP = {

    create: (role, body, spawn) => {
        if(typeof Memory.last_creep_id === 'undefined') Memory.last_creep_id = 0;
        const name = role + Memory.last_creep_id;

        const result = Game.spawns[spawn].createCreep(body, name, { role, spawn, body, respawn: true });
        if(HELPERS.isError(result)) {
            console.log("[ERROR] Creep generation", result);
        } else {
            console.log("[CREEP] New creep : "+name);
            Memory.last_creep_id++;
        }

        return result;
    },

};

module.exports = CREEP;
