const queue = require('core.queue');

require('core.respawn')();
require('core.queue').exec('HQ');
require('main_creeps')();

module.exports.loop = () => {
    if(Memory.stage) {
        switch(Memory.stage) {
            case 1:
                queue.add('guard', 3);
                queue.add('harvester', 3);
                queue.add('archer', 3);
                queue.add('builder', 1);
                Memory.stage++;
                break;
            case 2:
                queue.add('healer', 2);
                Memory.stage++;
                break;
        }
    } else {
        Memory.stage = 1;
    }
};
