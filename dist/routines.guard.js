const guard = {

    /** @param {Creep} creep **/
    run: creep => {
        const targets = creep.room.find(HOSTILE_CREEPS);
        if(targets.length) {
            creep.moveTo(targets[0]);
            creep.attack(targets[0]);
        }
    }

};

module.exports = guard;
