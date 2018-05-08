
module.exports = {

    countCreeps: function({ spawn, role }) {
        return _.filter(Game.creeps, c => c.memory.spawn == spawnName && c.memory.role == role).length;
    }

}
