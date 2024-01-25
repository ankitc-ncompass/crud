const { executeQuery } = require('../../utils/db');

insertBooks={insertBook: (req, res) => {
    let id = req.body.ID;
    let name = req.body.NAME;
    let isbn = req.body.ISBN;
    let edition = req.body.EDITION;

    executeQuery('INSERT INTO BOOK (ID, NAME, ISBN, EDITION) VALUES (?,?,?,?)',[id,name,isbn,edition],
    (err,results)=>{
        if(!err){
            res.send("Data inserted successfully")
            
    }else{
        console.log(err);
        res.status(500).send("Error inserting data")
    }})
}
};

module.exports = insertBooks;