require('main_creeps')();
require('main_spawns')();

const queue = require('core.queue');
module.exports.loop = () => {
    if(Memory.stage) {
        switch(Memory.stage) {
            case 1:
                queue.add('harvester', 'HQ1', 3);
                queue.add('guard',     'HQ1', 3);
                queue.add('archer',    'HQ1', 3);
                queue.add('builder',   'HQ1', 1);
                Memory.stage++;
                break;
            case 2:
                queue.add('healer',    'HQ1', 2);
                Memory.stage++;
                break;
        }
    } else {
        Memory.stage = 1;
    }
};
