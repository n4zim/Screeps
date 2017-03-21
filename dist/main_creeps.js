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
            case 'archer':    archer.run(creep);    break;
            case 'builder':   builder.run(creep);   break;
            case 'guard':     guard.run(creep);     break;
            case 'harvester': harvester.run(creep); break;
            case 'healer':    healer.run(creep);    break;
            case 'upgrader':  upgrader.run(creep);  break;
        }
    }
};
