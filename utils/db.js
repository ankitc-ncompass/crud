const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.MYSQL_PASSWORD
});


conn.connect((err) => {
    if (!err) console.log('Database is connected');
});




// const executeQuery = (query, arr) => {
//     return new Promise((resolve, reject) => {
//         conn.query(query, arr, (err, results) => {
//             if (err) {
//                 console.error(err);
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };


const executeQuery = (query,arr,cb) => {

    // conn.connect((err) => {
    //     if (!err) console.log('Database is connected');
    // });


    conn.query(query,arr, (err, results) => {
        if (err) {
            console.error(err);
        } 
        cb(null, results);
    });


//    conn.end((err) => {
//         if (err) {
//             console.error('Error closing the database connection:', err);
//         } else {
//             console.log('Database connection closed');
//         }
//     });
};




module.exports = {
    executeQuery: executeQuery,
    conn: conn
};
