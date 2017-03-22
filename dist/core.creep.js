const HELPERS = require('core.helpers');

const CREEP = {

    create: (role, body, spawn) => {
        const name = role + spawn.total;

        const result = Game.spawns[spawn].createCreep(body, name, { role, body, spawn: spawn.name, respawn: true });
        if(HELPERS.isError(result)) {
            console.log("[ERROR] Creep generation", result);
        } else {
            Game.spawns[spawn.name].total++;
            console.log("[CREEP] New creep : "+name);
        }

        return result;
    },

};

module.exports = CREEP;
