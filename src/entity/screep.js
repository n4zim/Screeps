const logger = require('core.logger')
const handlers = require('core.handlers')
const roles = require('core.roles')
const Role = require('entity.role')

module.exports = class {

    constructor({ name, spawn, role }) {
        if(typeof name !== 'undefined' && typeof Game.creeps[name] !== 'undefined') {
            this.syncFromMemory(name)
        } else if(typeof spawn === 'undefined') {
            logger.error('No spawn selected', this)
        } else if(typeof Game.spawns[spawn] === 'undefined') {
            logger.error('Unknown spawn "' + spawn + '"', this)
        } else if(typeof role === 'undefined') {
            logger.error('No role selected', this)
        } else if(!(role instanceof Role)) {
            logger.error('Role must be a class instance', this)
        } else {
            this.role = role
            this.name = role.getName()
            this.add(spawn)
        }
    }

    syncFromMemory(name) {
        const memory = Game.creeps[name]
        this.name = name
        this.spawn = memory.spawn
        this.role = memory.role
    }

    add(spawn) {
        handlers.spawnCreep(Game.spawns[spawn].spawnCreep(this.role.getBody(), this.name, {
            memory: {
                spawn: this.role.getName(),
                role: this.role.getName(),
            }
        }), function() {
            logger.success('New screep created', this.role.getName())
        })
    }

}
