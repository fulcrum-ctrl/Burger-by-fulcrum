const { table } = require('console');
const connection = require('./connection');

const orm = {
    selectAll(tablename, cb) {
        connection.query(
            `SELECT * FROM ??`,
            [tablename],
            (err, result) => {
                if(err) throw err;
                cb(result);
            }
        );
    },
    insertOne(tablename, column, value, cb) {
        connection.query(
            `INSERT INTO ?? (??) VALUES (?)`,
            [tablename, column, value],
            (err, result) => {
                if(err) throw err;
                cb(result);
            }
        )
    },
    updateOne(tablename, column, boolean, idNumber, cb) {
        connection.query(
            `UPDATE ?? SET ?? = ? WHERE id = ?`,
            [tablename, column, boolean, idNumber],
            (err, result) => {
                if(err) throw err;
                cb(result);
            }
        );
    }
};
module.exports = orm;