const logger = require('core.logger')
const roles = require('core.roles')

module.exports = class {

    constructor(role) {
        if(typeof role === 'undefined') {
            logger.error('No role selected', this)
        } else if(typeof roles[role] === 'undefined') {
            logger.success('Unknown role "' + role + '"', this)
        } else {
            logger.error('Not a valid role "' + role + '"', this)
        }
    }

}
