module.exports = () => {
    const archer    = require('role.upgrader');
    const builder   = require('role.builder');
    const guard     = require('role.guard');
    const harvester = require('role.harvester');
    const healer    = require('role.healer');
    const upgrader  = require('role.upgrader');

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
