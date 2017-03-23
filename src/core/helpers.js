const PARAMS = require('data.parameters');

const HELPERS = {

    // --------------------------------- ERRORS ---------------------------------

    isError: value => value < 0,

    // ------------------------------- ACTIVITIES -------------------------------

    initActivity: activity => {
        if(Memory.activities[activity]) {
            console.log('[ACTIVITY] '+activity+' already set at stage '+Memory.activities[activity].stage+' !');
        } else {
            Memory.activities[activity] = { data: {}, stage: 0 };
            if(PARAMS.DEBUG) console.log('[ACTIVITY] '+activity+' launched with stage 0');
        }
    },

    setActivityStage: (activity, stage) => {
        Memory.activities[activity].stage = stage;
        if(PARAMS.DEBUG) console.log('[ACTIVITY] '+activity+' set to stage '+stage);
    },

    increaseActivityStage: activity => { HELPERS.setActivityStage(activity, ++Memory.activities[activity].stage); },

    setActivityData: (activity, name, value) => { Memory.activities[activity].data[name] = value; },

    getActivityData: (activity, name) => Memory.activities[activity].data[name],

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
