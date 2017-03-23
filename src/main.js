const HELPERS = require('core.helpers');

module.exports.loop = () => {
    if(!Memory.activities) {
        Memory.activities = {};
        HELPERS.initActivity('harvest');
    } else {
        _.forIn(Memory.activities, (activity, name) => {
            try {
                require("activity."+name)(name, activity);
            } catch(e) {
                console.log("[ERROR]", e);
            }
        });
    }
};
