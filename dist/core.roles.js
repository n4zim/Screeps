const Role = require('entity.role')

module.exports = {

    // RESSOURCES
    BUILDER: new Role('builder', [ WORK, CARRY, MOVE ]),
    HARVESTER: new Role('harvester', [ CARRY, WORK, MOVE ]),
    UPGRADER: new Role('upgrader', [ WORK, CARRY, MOVE ]),

    // MILITARY
    ARCHER: new Role('archer', [ RANGED_ATTACK, MOVE, TOUGH ]),
    GUARD: new Role('guard', [ ATTACK, MOVE, TOUGH ]),

    // HEAL
    HEALER: new Role('healer', [ CARRY, HEAL, MOVE ]),

}
