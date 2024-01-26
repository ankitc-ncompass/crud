const { executeQuery } = require('../../utils/db');

insertBooks={insertBook: (req, res) => {
    let id = req.body.ID;
    let name = req.body.NAME;
    let isbn = req.body.ISBN;
    let edition = req.body.EDITION;
    const startTime = performance.now();

    executeQuery('INSERT INTO BOOK (ID, NAME, ISBN, EDITION) VALUES (?,?,?,?)',[id,name,isbn,edition],
    (err,results)=>{
        const endTime=performance.now();
        if(!err){
            res.send({
                success: true,
                message: "Data inserted successfully",
                startTime:  performance.now(),
                endTime:performance.now() ,
                totalTime: endTime - startTime,
          });
            
    }else{
        console.log(err);
        res.status(500).send("Error inserting data")
    }})
}
};

module.exports = insertBooks;