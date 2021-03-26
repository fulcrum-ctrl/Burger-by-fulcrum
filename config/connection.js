const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        user: 'root',
        host: 'localhost',
        database: 'burgers_db',
        password: ''
    });
}

connection.connect((err) => {
    if(err) console.log(`ERROR: ${err.stack}`);
    console.log(`Succcess! Connected to id: ${connection.threadId}`);
});

module.exports = connection;
