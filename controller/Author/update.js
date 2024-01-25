const { executeQuery } = require('../../utils/db');

updateAuthors={updateAuthor: (req, res) => {
    let id = req.body.ID;
    let lname = req.body.LAST_NAME
    
    executeQuery('update AUTHOR set LAST_NAME = ? where ID = ? ',[lname, id],
    (err, result) => {
        if (!err) {
            res.send('Data updated successfully');
        } else {
            console.error(err);
            res.status(500).send('Error updating data');
        }
    }
    )
}};

module.exports = updateAuthors;