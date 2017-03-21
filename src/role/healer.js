const roleHealer = {

    /** @param {Creep} creep **/
    run: creep => {
        const target = creep.pos.findClosest(Game.MY_CREEPS, { filter: c => c.hits < c.hitsMax });
        if(target) {
            creep.moveTo(target);
            creep.heal(target);
        }
    }

};

module.exports = roleHealer;
