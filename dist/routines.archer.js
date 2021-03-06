const archer = {

    /** @param {Creep} creep **/
    run: creep => {
        let targets = creep.pos.findInRange(HOSTILE_CREEPS, 3);
        if(targets.length > 0) {
            creep.rangedAttack(targets[0]);
        } else {
            targets = creep.room.find(HOSTILE_CREEPS);
            if(targets.length > 0) {
                creep.moveTo(targets[0]);
            }
        }
    }

};

module.exports = archer;
