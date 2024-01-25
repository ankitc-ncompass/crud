const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'library',
    password: '12345'
});


const executeQuery = (query,arr,cb) => {
    conn.query(query,arr, (err, results) => {
        if (err) {
            console.error(err);
        } 
        cb(null, results);
    });
};


module.exports = {
    executeQuery: executeQuery,
    conn: conn
};
