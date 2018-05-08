const logger = require('core.logger')
const roles = require('core.roles')
const Role = require('entity.role')

module.exports = class {

    constructor({ name, spawn, role }) {
        if(typeof name !== 'undefined') {
            console.log(name)
            this.name = name
        } 
        if(typeof spawn === 'undefined') {
            logger.error('No spawn selected', this)
        } else if(typeof Game.spawns[spawn] === 'undefined') {
            logger.error('Unknown spawn "' + spawn + '"', this)
        } else if(typeof role === 'undefined') {
            logger.error('No role selected', this)
        } else if(!(role instanceof Role)) {
            logger.error('Role must be a class instance', this)
        } else {
            this.spawn = spawn
            this.role = role
            this.add()
        }
    }

    add() {
        if(Game.spawns[this.spawn].spawnCreep(this.role.getBody(), this.name, {
            memory: {
                role: this.role.getName(),
                body: this.role.getBody(),
                spawn: this.spawn,
                respawn: true,
                assignments: null
            }
        }) < 0) {
            logger.error('Error during add()')
        } else {
            logger.success('New screep created', this.role.getName())
        }
    }

}
