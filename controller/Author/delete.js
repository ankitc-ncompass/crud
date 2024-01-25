
const { executeQuery } = require('../../utils/db');

deleteAuthors={deleteAuthor: (req, res) => {
  

    let id = req.body.ID;
    
    executeQuery('delete from AUTHOR where ID = ? ',[id],
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


module.exports = deleteAuthors;