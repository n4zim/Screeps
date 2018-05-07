const screep = require('entity.screep')
const roles = require('core.roles')

module.exports.loop = () => {

    new screep()

    /*if(!Memory.activities) {
        Memory.activities = {};
        HELPERS.initActivity('start');
    } else {
        _.forIn(Memory.activities, (activity, name) => {
            try {
                require("activity."+name)(name, activity);
            } catch(e) {
                console.log("[ERROR]", e);
            }
        });
    }*/
}
