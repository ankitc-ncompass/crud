const { executeQuery } = require('../../utils/db');

updateBooks={updateBook: (req, res) => {
    let id = req.body.ID;
    let name = req.body.NAME
    
    executeQuery('update BOOK set NAME = ? where ID = ? ',[name, id],
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

module.exports = updateBooks;