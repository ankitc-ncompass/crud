const { executeQuery } = require('../../utils/db');

getBooks={getBook : (req, res) => {
    const startTime = performance.now();
    executeQuery('select * from BOOK',[],(err,results)=>{
        const endTime=performance.now();
        if(!err){
            res.send({
                success: true,
                message: "Data fetched successfully",
                data:results,
                startTime:  performance.now(),
                endTime:performance.now() ,
                totalTime: endTime - startTime,
          });
    }else{
        console.log(err);
        res.status(500).send("Error fetching data");
    }}
    )
    
}}

module.exports=getBooks;