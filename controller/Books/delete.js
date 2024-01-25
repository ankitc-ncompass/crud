
const { executeQuery } = require('../../utils/db');

deleteBooks={deleteBook: (req, res) => {

    let id = req.body.ID;
    
    executeQuery('delete from BOOK where ID = ? ',[id],
    (err, result) => {
        if (!err) {
            res.send('Data DELETED successfully');
        } else {
            console.error(err);
            res.status(500).send('Error deleted data');
        }
    }
    )
}}


module.exports = deleteBooks;