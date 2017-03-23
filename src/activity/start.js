const HELPERS = require('core.helpers');

module.exports = (NAME, ACTIVITY) => {
    switch(ACTIVITY.stage) {

        case 0:
            HELPERS.initActivity('harvest');
            HELPERS.nextActivityStage(NAME);
            break;

        case 1:
            HELPERS.initActivity('upgrade');
            HELPERS.nextActivityStage(NAME);
            break;

        case 2:
            HELPERS.initActivity('build');
            HELPERS.nextActivityStage(NAME);
            break;

        case 3:
            HELPERS.removeActivity(NAME);
            break;
    }
};