const creep = require('core.creep');
const helpers = require('core.helpers');
const creepRoles = require('data.roles');
const _ = require('lodash');

const init = spawn => {
    Memory.spawns[spawn] = Memory.spawns[spawn] || {};
    Memory.spawns[spawn].queue = Memory.spawns[spawn].queue || [];
};

exports.add = (role, units = 1, spawn = 'HQ') => {
    for(let unit = 0; unit < units; unit++) {
        this.push(role, spawn);
    }
};

exports.push = (role, spawn = 'HQ') => {
    let args = _.cloneDeep(creepRoles[role]);
    if(typeof(spawn)) args.spawn = spawn;
    args.type = role;
    return this.queue(args);
};

exports.queue = args => {
    args.spawn = args.spawn || 'HQ';
    init(args.spawn);
    return Memory.spawns[args.spawn].queue.push(args);
};

exports.exec = (spawn = 'HQ') => {
    init(spawn);
    const data = Memory.spawns[spawn].queue[0];
    if(data) {
        const result = creep.create(data.role, data.body, data.spawn);
        if(!helpers.isError(result)) {
            Memory.spawns[spawn].queue.splice(0, 1);
        }
    }
    return result;
};

exports.status = (spawn = 'HQ') => {
    init(spawn);
    return Memory.spawns[spawn].queue.length;
};
