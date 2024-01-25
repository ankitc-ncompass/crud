// controller/Author/select.js

const { executeQuery } = require('../../utils/db');

const getAuthors = {
    getAuthor: (req, res) => {
        executeQuery('SELECT * FROM AUTHOR', [], (err, results) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error fetching data");
            } else {
                console.log('Query executed successfully');
                //console.log(results); // Log the results if needed
                res.send(results);
            }
        });
    }
};

module.exports = getAuthors;
