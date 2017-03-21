const roleArcher = require('role.archer');
const roleBuilder = require('role.builder');
const roleGuard = require('role.guard');
const roleHarvester = require('role.harvester');
const roleHealer = require('role.healer');
const roleUpgrader = require('role.upgrader');

if(!Memory.state) Memory.state = 'init';

module.exports.loop = () => {

    // ROOMS
    for(let name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }
    
    // CREEPS
    for(let name in Game.creeps) {
        //noinspection JSUnfilteredForInLoop
        const creep = Game.creeps[name];
        switch(creep.memory.role) {
            case 'archer':    roleArcher.run(creep);    break;
            case 'builder':   roleBuilder.run(creep);   break;
            case 'guard':     roleGuard.run(creep);     break;
            case 'harvester': roleHarvester.run(creep); break;
            case 'healer':    roleHealer.run(creep);    break;
            case 'upgrader':  roleUpgrader.run(creep);  break;
        }
    }

};
