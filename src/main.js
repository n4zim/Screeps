const HELPERS = require('core.helpers');

module.exports.loop = () => {
    if(!Memory.activities) {
        Memory.activities = {};
        HELPERS.initActivity('harvest');
    } else {
        _.forIn(Memory.activities, (stage, activity) => {
            try {
                require("activity."+activity)(stage, activity);
            } catch(e) {
                console.log("[ERROR]", e);
            }
        });
    }
};
