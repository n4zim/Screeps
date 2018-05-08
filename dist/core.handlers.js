const logger = require('core.logger')

module.exports = {

    spawnCreep: function(result, successCallback) {
        switch(result) {
            case OK:
                if(successCallback) successCallback()
                break
            case ERR_NOT_OWNER:
                logger.error('You are not the owner of this spawn', this)
                break
            case ERR_NAME_EXISTS:
                logger.error('There is a creep with the same name already', this)
                break
            case ERR_BUSY:
                logger.error('The spawn is already in process of spawning another creep', this)
                break
            case ERR_NOT_ENOUGH_ENERGY:
                logger.error('The spawn and its extensions contain not enough'
                    + ' energy to create a creep with the given body', this)
                break
            case ERR_INVALID_ARGS:
                logger.error('Body is not properly described or name was not provided', this)
                break
            case ERR_RCL_NOT_ENOUGH:
                logger.error('Your Room Controller level is insufficient to use this spawn', this)
                break
            default:
                logger.error('Unknown error during add()', this)
                break
        }
    }

}
