module.exports = {

    // MILITARY
    archer:    { role: 'archer',    body: [RANGED_ATTACK, MOVE, TOUGH] },
    guard:     { role: 'guard',     body: [ATTACK, MOVE, TOUGH]        },

    // HEAL
    healer:    { role: 'healer',    body: [CARRY, HEAL, MOVE]          },

    // RESSOURCES
    builder:   { role: 'builder',   body: [CARRY, WORK, MOVE]          },
    harvester: { role: 'harvester', body: [CARRY, WORK, MOVE]          },
    upgrader:  { role: 'upgrader',  body: [WORK, WORK, MOVE]           }

};
