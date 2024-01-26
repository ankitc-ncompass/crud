const { executeQuery } = require('../../utils/db');

updateAuthors={updateAuthor: (req, res) => {
    let id = req.body.ID;
    let lname = req.body.LAST_NAME
    const startTime = performance.now();  
    executeQuery('update AUTHOR set LAST_NAME = ? where ID = ? ',[lname, id],
    (err, result) => {
        const endTime = performance.now(); 
        if (!err) {
            res.send({
                success: true,
                message: "Data updated successfully",
                startTime:  performance.now(),
                endTime: performance.now() ,
                totalTime: endTime - startTime,
          });
        } else {
            console.error(err);
            res.status(500).send('Error updating data');
        }
    }
    )
}};

module.exports = updateAuthors;