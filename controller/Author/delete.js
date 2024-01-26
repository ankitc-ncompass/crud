
const { executeQuery } = require('../../utils/db');

deleteAuthors={deleteAuthor: (req, res) => {
  

    let id = req.body.ID;
    const startTime = performance.now();
    executeQuery('delete from AUTHOR where ID = ? ',[id],
    (err, result) => {
        const endTime = performance.now(); 
        if (!err) {
            res.send({
                success: true,
                message: "Data deleted successfully",
                startTime:  performance.now(),
                endTime: performance.now() ,
                totalTime: endTime - startTime,
          });
        } else {
            console.error(err);
            res.status(500).send('Error deleted data');
        }
    }
    )
}}


module.exports = deleteAuthors;