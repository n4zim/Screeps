const PARAMS = require('data.parameters');

const HELPERS = {

    // --------------------------------- ERRORS ---------------------------------

    isError: value => value < 0,

    // ------------------------------- ACTIVITIES -------------------------------

    initActivity: activity => {
        if(Memory.activities[activity]) {
            console.log('[ACTIVITY] '+activity+' already set at stage '+Memory.activities[activity]+' !');
        } else {
            Memory.activities[activity] = 0;
            if(PARAMS.DEBUG) console.log('[ACTIVITY] '+activity+' launched');
        }
    },

    setActivityStage: (activity, stage) => {
        Memory.activities[activity] = stage;
        if(PARAMS.DEBUG) console.log('[ACTIVITY] '+activity+' set to stage '+stage);
    },

    increaseActivityStage: activity => { HELPERS.setActivityStage(activity, ++Memory.activities[activity]); },

    removeActivity: activity => {
        if(Memory.activities[activity]) {
            delete Memory.activities[activity];
            if(PARAMS.DEBUG) console.log('[ACTIVITY] '+activity+' removed');
        } else {
            console.log('[ACTIVITY] '+activity+' does not exist !');
        }
    }

};

module.exports = HELPERS;
