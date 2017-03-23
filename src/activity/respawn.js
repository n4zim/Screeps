const _ = require('lodash');
const helpers = require('core.helpers');
const queue = require('core.queue');

module.exports = () => {
    _.forIn(Memory.creeps, (value, key) => {
        if(value.respawn && !Game.creeps[key]) {
            const result = queue.queue(value);
            if(helpers.isError(result)) {
                value.error = result;
            } else {
                delete Memory.creeps[key];
            }
        }
    });
};
