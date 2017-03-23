
module.exports.loop = () => {
    if(!Memory.activities) {
        Memory.activities = { test1: 0 };
    } else {
        _.forIn(Memory.activities, (stage, activityName) => {
            try {
                require("activity."+activityName)(stage);
            } catch(e) {
                console.log("[ERROR]", e);
            }
        });
    }
};
