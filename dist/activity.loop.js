const QUEUE = require('core.queue');
const CREEPS = require('core.creeps');

const archer    = require('role.upgrader');
const builder   = require('role.builder');
const guard     = require('role.guard');
const harvester = require('role.harvester');
const healer    = require('role.healer');
const upgrader  = require('role.upgrader');

module.exports = (NAME, ACTIVITY) => {

    // SPAWNS
    _.forIn(Game.spawns, spawn => {
        QUEUE.run(spawn);
    });

    // CREEPS
    _.forIn(Memory.creeps, (creep, creepName) => {
        const gameCreep = Game.creeps[creepName];
        if(gameCreep) {
            switch(creep.role) {
                case 'archer':    archer.run(gameCreep);    break;
                case 'builder':   builder.run(gameCreep);   break;
                case 'guard':     guard.run(gameCreep);     break;
                case 'harvester': harvester.run(gameCreep); break;
                case 'healer':    healer.run(gameCreep);    break;
                case 'upgrader':  upgrader.run(gameCreep);  break;
            }
        } else if(creep.respawn) {
            CREEPS.respawn(creepName, creep);
        } else {
            delete Memory.creeps[name];
        }
    });

};
