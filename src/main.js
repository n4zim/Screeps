module.exports.loop = () => {

    //const _ = require('lodash');
    const queue = require('core.queue');

    const archer    = require('role.upgrader');
    const builder   = require('role.builder');
    const guard     = require('role.guard');
    const harvester = require('role.harvester');
    const healer    = require('role.healer');
    const upgrader  = require('role.upgrader');

    // SPAWNS
    _.forIn(Game.spawns, spawn => {
        //console.log(spawn.name);
    });

    // CREEPS
    _.forIn(Game.creeps, creep => {
        switch(creep.memory.role) {
            case 'archer':    archer.run(creep);    break;
            case 'builder':   builder.run(creep);   break;
            case 'guard':     guard.run(creep);     break;
            case 'harvester': harvester.run(creep); break;
            case 'healer':    healer.run(creep);    break;
            case 'upgrader':  upgrader.run(creep);  break;
        }
    });

};
