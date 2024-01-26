
const { executeQuery } = require('../../utils/db');


insertAuthors={insertAuthor: (req, res) => {
    let id = req.body.ID;
    let fname = req.body.FIRST_NAME;
    let lname = req.body.LAST_NAME;
    const startTime = performance.now();
    executeQuery('INSERT INTO AUTHOR (ID, FIRST_NAME, LAST_NAME) VALUES(?)',[[id,fname,lname]],(err,results)=>{
        const endTime = performance.now();   
        if(!err){
            res.send({
                success: true,
                message: "Data inserted successfully",
                startTime:  performance.now(),
                endTime: performance.now() ,
                totalTime: endTime - startTime,
          });
    }else{
        console.log(err);
        res.status(500).send("Error inserting data");
    }})
}
};

module.exports = insertAuthors;