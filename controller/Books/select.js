const { executeQuery } = require('../../utils/db');

getBooks={getBook : (req, res) => {
    executeQuery('select * from BOOK',[],(err,results)=>{
        if(!err){
            res.send(results)
    }else{
        console.log(err);
        res.status(500).send("Error fetching data");
    }}
    )
    
}}

module.exports=getBooks;