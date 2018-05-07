const harvester = {

    /** @param {Creep} creep **/
    run: creep => {
        if(creep.carry.energy < creep.carryCapacity) {
            const source = (creep.memory.assignments && creep.memory.assignments.source)
                    ?  Game.getObjectById(creep.memory.assignments.source)
                    : creep.room.find(FIND_SOURCES)[0];

            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, { visualizePathStyle: { stroke: '#ffaa00' } });
            }
        } else {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => (
                    (
                        structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_SPAWN ||
                        structure.structureType == STRUCTURE_TOWER
                    ) && structure.energy < structure.energyCapacity
                )
            });
            if(targets.length > 0 && creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
            }
        }
    }

};

module.exports = harvester;
