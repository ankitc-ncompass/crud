
const { executeQuery } = require('../../utils/db');

insertAuthors={insertAuthor: (req, res) => {
    let id = req.body.ID;
    let fname = req.body.FIRST_NAME;
    let lname = req.body.LAST_NAME;

    executeQuery('INSERT INTO AUTHOR (ID, FIRST_NAME, LAST_NAME) VALUES(?,?,?)',[id,fname,lname],(err,results)=>{
        if(!err){
            console.log('Data inserted successfully');
    }else{
        console.log(err);
        res.status(500).send("Error inserting data");
    }})
}
};

module.exports = insertAuthors;