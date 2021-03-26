const orm = require('../config/orm');

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    addToTable(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, (res) => {
            cb(res);
        });
    },
    update(boolean, idNumber, cb) {
        condition = 
        orm.updateOne('burgers', 'devoured', boolean, idNumber, (res)=> {
            cb(res);
        });
    },
};

module.exports = burger;