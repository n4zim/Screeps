const helpers = require('core.helpers');

exports.creep = (role, body, spawn = 'QG') => {
    Memory.creep_id = Memory.creep_id || 0;
    const name = role + Memory.creep_id;
    const result = Game.spawns[spawn].createCreep(body, name, { role, spawn, body, respawn: true });

    if(!helpers.isError(result)) {
        console.log("NEW CREEP : "+name);
        Memory.creep_id++;
    } else {
        console.log("[ERROR] CREEP CREATION", result);
    }

    return result;
};
